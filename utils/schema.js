import { serial, text, varchar } from "drizzle-orm/pg-core";
import { pgTable  } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
    mockId:varchar('mockId'),
})


export const UserAnswer=pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockId'),
    question:varchar('question').notNull(),
    correctAnswer:varchar('correctAnswer') ,
    userAns:text('userAns') ,
    feedback:text('feedback') ,
    rating:varchar('rating') ,
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt'),
})