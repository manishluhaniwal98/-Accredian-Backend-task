import { Router } from 'express';
import { validateReferralData } from '../middleware/validation.middleware';
import { createReferral } from '../controllers/referral.controllers';

const router = Router();

router.post('/referrals', validateReferralData, createReferral);

export default router;