import express from 'express';
import {
    getLoginForm,
    getOverview,
    getProduct,
    getSignupForm,
    getMyCart,
    changePassword,
} from '../controllers/viewControllers.mjs';
import {
    isLoggedIn,
    protect,
} from '../controllers/authiencationControllers.mjs';
import { getAnnouncePage, getForgotPasswordForm, processForgotPassword } from '../controllers/forgotPasswordController.mjs';
const Router = express.Router();
Router.get('/login', getLoginForm);
Router.get('/signup', getSignupForm);

// Route quên mật khẩu
Router.get('/forgot-password', getForgotPasswordForm);
// Route thông báo gửi link reset mật khẩu về email
Router.get('/showAnnounce', getAnnouncePage);
// Route để xử lý yêu cầu quên mật khẩu
Router.post('/forgot-password', processForgotPassword);

Router.use(isLoggedIn);
Router.get('/mycart', getMyCart);
Router.get('/changePassword', protect, changePassword);
Router.get('/:slug', getProduct);
Router.route('/').get(getOverview);
export default Router;
