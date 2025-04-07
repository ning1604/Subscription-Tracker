// Importing the express module to create the application
import express from 'express';

// Importing the PORT value from the configuration file (environment variables)
import { PORT } from './config/env.js';

// Import route handlers for different resources
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

// Create an instance of the Express application
const app = express();

// Set up routes for authentication, users, and subscriptions using their respective routers
app.use('/api/v1/auth', authRouter); // All routes starting with '/api/v1/auth' will use authRouter
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

// Define a route for the root endpoint ('/')
app.get('/', (req, res) => {
    // Send a simple message as a response to the client
    res.send('Welcome to the Subscription Tracker API!');
});

// Start the server and make it listen on the specified port
app.listen(PORT, () =>
    // Log a message to the console to confirm the server is running
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`)
);

// Export the app instance for use in other files (e.g. for testing)
export default app;
