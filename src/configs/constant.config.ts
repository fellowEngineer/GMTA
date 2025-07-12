// src/configs/constant.config.ts

const Constants = {
    APP_NAME: 'GMTA',
    ROUTES: {
        AUTH: {
            LOGIN: '/login',
            REGISTER: '/register',
            FORGOT_PASSWORD: 'forgot-password',
            RESET_PASSWORD: '/reset-password',
            VERIFY_EMAIL: '/verify-email',
            LOGOUT: '/logout',
        },
        PROTECTED: {
            DASHBOARD: '/dashboard',
            SETTINGS: '/settings',
            PROFILE: '/profile',
        },
        PUBLIC: {
            HOME: '/',
            ABOUT: '/about',
            CONTACT: '/contact',
            TERMS: '/terms',
            PRIVACY: '/privacy',
            FAQ: '/faq',
        },
    },
};

export default Constants;
