// Importing the 'dotenv' module to load environment variables from a .env file
import { config } from 'dotenv';

// Load environment variables from a specific .env file based on NODE_ENV
// If NODE_ENV is not set, it defaults to 'development', loading `.env.development.local`
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// Destructure the necessary environment variables (PORT and NODE_ENV) from process.env
export const { PORT, NODE_ENV } = process.env;
