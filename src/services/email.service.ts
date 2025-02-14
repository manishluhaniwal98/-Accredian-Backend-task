import { google } from 'googleapis';
import config from '../config';
import { ReferralData } from '../types/referral.types';

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  config.google.clientId,
  config.google.clientSecret,
  config.google.redirectUrl
);

oauth2Client.setCredentials({
  refresh_token: config.google.refreshToken
});

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

export const sendReferralEmail = async (referralData: ReferralData) => {
  const emailContent = `
    From: ${referralData.referrerName} <${referralData.referrerEmail}>
    To: ${referralData.recipientName} <${referralData.recipientEmail}>
    Subject: Referral from ${referralData.referrerName}
    
    ${referralData.message || 'You have received a referral!'}
  `;

  const encodedMessage = Buffer.from(emailContent)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw: encodedMessage }
  });
};