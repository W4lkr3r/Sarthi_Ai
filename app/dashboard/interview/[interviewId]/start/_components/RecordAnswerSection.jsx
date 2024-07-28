  "use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, Save, User } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAI'
import { UserAnswer } from '@/utils/schema'
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
 

function RecordAnswerSection({mockInterviewQuestions,activeQuestionIndex,interviewData}) {

  const [userAnswer, setUserAnswer] = useState('');
  const {user}=useUser();
  const [loading,setLoading]=useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });


  useEffect(() => {
    results.map((result) => {
      setUserAnswer(prevAns => prevAns + result?.transcript);

    })
   

  },[results]);

  useEffect(()=>{
  if(!isRecording){
    UpdateUserAnswer();
  }
  
  },[userAnswer])

  const StartStopRecording= async ()=>{
    if(isRecording){
       
      stopSpeechToText();
     
  
    }
    else{
      startSpeechToText();
    }
  }
  const UpdateUserAnswer=async ()=>{
    console.log(userAnswer)
    setLoading(true);
    const feedbackPrompt="Question:" + mockInterviewQuestions[activeQuestionIndex]?.question + "Answer:" + userAnswer +"Depends on question and user answer please give us rating for answer and feedback as arae of imporvement if any in juts 3-5 lines to imporve it in JSON format with rating field and feedback field";
  
   const result= await chatSession.sendMessage(feedbackPrompt);
   const mockJsonResp=(result.response.text().replace(/```json/g, '').replace(/```/g, ''));
    console.log(mockJsonResp);
    const JsonFeedBackResp=JSON.parse(mockJsonResp);
     

     const resp=await db.insert(UserAnswer).values({
      mockIdRef:interviewData?.mockId,
      question: mockInterviewQuestions[activeQuestionIndex]?.question,
      correctAns: mockInterviewQuestions[activeQuestionIndex]?.answer,
      userAns: userAnswer,
      feedback: JsonFeedBackResp?.feedback,
      rating:JsonFeedBackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD-MM-yyyy')
     })
     if(resp){
      toast('User Answer recorded successfully')
      setUserAnswer('');
      setResults([]);
     }

     setLoading(false);
  }

  return (
    <div className='flex items-center justify-center flex-col'>
    <div className='flex flex-col justify-center my-20 bg-black items-center bg-secondary rounded-lg p-5'>
        <Image src={'/project.png'} width={200} height={200} 
        className='absolute'/>
      <Webcam
      mirrored={true}
      style={{
        width: '100%',
        height: 300,
      zIndex: 10,
      
      }}/>
    </div>
    <Button variant="outline" className="my-10"
     onClick={StartStopRecording}
    >
      {isRecording ?
      <h2 className='text-red-600 flex gap'>
        <Mic/>Recording...
      </h2>
      :
      

        'Record Answer'}</Button>

       
      
    
       
    </div>
    
  )
}

export default RecordAnswerSection
