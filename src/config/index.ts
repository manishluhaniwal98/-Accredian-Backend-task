import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DATABASE_URL || 'mysql://user:pass@localhost:3306/referral_db'
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN || '',
    redirectUrl: process.env.GOOGLE_REDIRECT_URL || ''
  }
};