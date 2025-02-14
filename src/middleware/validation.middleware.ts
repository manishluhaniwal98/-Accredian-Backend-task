import validator from 'validator';
import { Request, Response, NextFunction } from 'express';
import { ReferralData } from '../types/referral.types';

export const validateReferralData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data: ReferralData = req.body;
  const requiredFields = ['referrerName', 'referrerEmail', 'recipientName', 'recipientEmail'];
  
  const missingFields = requiredFields.filter(field => !data[field]);
  if (missingFields.length > 0) {
    return res.status(400).json({
      error: `Missing required fields: ${missingFields.join(', ')}`
    });
  }

  if (!validator.isEmail(data.referrerEmail)) {
    return res.status(400).json({ error: 'Invalid referrer email format' });
  }

  if (!validator.isEmail(data.recipientEmail)) {
    return res.status(400).json({ error: 'Invalid recipient email format' });
  }

  next();
};