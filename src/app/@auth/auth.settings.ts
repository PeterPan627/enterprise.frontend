

import { NbAuthOAuth2JWTToken, NbPasswordAuthStrategy } from '@nebular/auth';
import { environment } from '../../environments/environment';

export const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

export const authOptions = {
  strategies: [
    NbPasswordAuthStrategy.setup({
      name: 'email',
      baseEndpoint: environment.apiUrl,
      token: {
        class: NbAuthOAuth2JWTToken,
        key: 'token',
      },
      login: {
        endpoint: '/api/auth/login',
        method: 'post',
      },
      register: {
        endpoint: '/api/auth/sign-up',
        method: 'post',
      },
      logout: {
        endpoint: '/api/auth/sign-out',
        method: 'post',
      },
      requestPass: {
        endpoint: '/api/auth/request-pass',
        method: 'post',
      },
      resetPass: {
        endpoint: '/api/auth/reset-pass',
        method: 'post',
      },
      refreshToken: {
        endpoint: '/api/auth/refresh-token',
        method: 'post',
      },
    }),
  ],
  forms: {
    login: {
      socialLinks: socialLinks,
    },
    register: {
      socialLinks: socialLinks,
    },
  },
};
