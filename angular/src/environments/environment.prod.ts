import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Canteen_2022',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44312',
    redirectUri: baseUrl,
    clientId: 'Canteen_2022_App',
    responseType: 'code',
    scope: 'offline_access Canteen_2022',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44312',
      rootNamespace: 'Canteen_2022',
    },
  },
} as Environment;
