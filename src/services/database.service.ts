import { PrismaClient } from '@prisma/client';
import config from '../config';
import { ReferralData } from '../types/referral.types';

const prisma = new PrismaClient({
  datasourceUrl: config.database.url
});

export const createReferral = async (data: ReferralData) => {
  return prisma.referral.create({
    data: {
      referrerName: data.referrerName,
      referrerEmail: data.referrerEmail,
      recipientName: data.recipientName,
      recipientEmail: data.recipientEmail,
      message: data.message
    }
  });
};