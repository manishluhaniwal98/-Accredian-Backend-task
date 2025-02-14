import { Request, Response } from 'express';
import { ReferralData } from '../types/referral.types';
import * as databaseService from '../services/database.service';
import * as emailService from '../services/email.service';

export const createReferral = async (req: Request, res: Response) => {
  try {
    const referralData: ReferralData = req.body;
    
    const referral = await databaseService.createReferral(referralData);
    await emailService.sendReferralEmail(referralData);

    res.status(201).json({
      message: 'Referral created successfully',
      referral
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'An error occurred while processing your request' 
    });
  }
};