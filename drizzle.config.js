/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:  'postgresql://Aidb_owner:C4pnjU8kVvTf@ep-bold-truth-a5tpmk6t.us-east-2.aws.neon.tech/ai-interview?sslmode=require',
    }
  };
  