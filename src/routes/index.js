import express from 'express';
import userRoute from './user.route';
import loginRoute from './login.route';
import eventRoute from './event.route';
import signupRoute from './signup.route';
import locationRoute from './location.route';
import interceptor from './../authentication-interceptor';

const router = express.Router();
router.use('/login', loginRoute);
router.use('/signup', signupRoute);

//router.use(interceptor);

//All routers should be attached after this only
router.use('/event', eventRoute);
router.use('/user', userRoute);
router.use('/location', locationRoute)
//Error handler should be last one always
export default router;