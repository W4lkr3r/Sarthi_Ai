"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const start = () => {
    router.push('/dashboard');
  };

  return (
    <div className="welcome-page">
      <div className="content">
        <h1 className='text-primary'>Welcome to Sarthi</h1>
        <p className="intro">
         Sarthi is an AI interviewer that helps you prepare for interviews. Get ready with personalized feedback and improve your interview skills.
        </p>
        <div className="tech-stack">
          <h2>Tech Stack</h2>
          <ul>
            <li><strong>Next.js:</strong> For server-side rendering and static site generation</li>
            <li><strong>Druzzle ORM:</strong> For database management and operations</li>
            <li><strong>Clerk:</strong> Authentication service for secure login and user management</li>
            <li><strong>Shad CN:</strong> UI components for building responsive and beautiful interfaces</li>
          </ul>
        </div>
        <Button onClick={start} className="start-button">Get Started</Button>
      </div>
      <style jsx>{`
        .welcome-page {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: url('/path/to/your/background-image.jpg') no-repeat center center/cover;
        }
        .content {
          text-align: center;
          background: rgba(255, 255, 255, 0.8);
          padding: 20px;
          border-radius: 10px;
          max-width: 600px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          font-size: 3em;
          margin-bottom: 20px;
          color: primary;
        }
        .intro {
          font-size: 1.2em;
          margin-bottom: 20px;
          color: #555;
        }
        .tech-stack {
          text-align: left;
          margin-bottom: 20px;
        }
        .tech-stack h2 {
        font: bold;
          font-size: 1.5em;
          margin-bottom: 10px;
          color: #333;
        }
        .tech-stack ul {
          list-style-type: none;
          padding: 0;
        }
        .tech-stack li {
          font-size: 1.1em;
          margin-bottom: 10px;
          color: #555;
        }
        .start-button {
          font-size: 1.5em;
          padding: 10px 20px;
        }
      `}</style>
    </div>
  );
}
