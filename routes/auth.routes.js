import { Router } from 'express';

const authRouter = Router();

// Define the 'sign-up' POST route handler
authRouter.post('sign-up', (req, res) =>
    // Send a response with a title for the sign-up page
    res.send({ body: { title: 'Sign Up' } })
);

authRouter.post('sign-in', (req, res) => res.send({title: 'Sign In'}));
authRouter.post('sign-out', (req, res) => res.send({title: 'Sign Out'}));

export default authRouter;