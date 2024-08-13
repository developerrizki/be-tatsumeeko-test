import express from 'express';
import { WalletController } from '../Controllers/wallet.controller';

export const router = express.Router();

router.get('/', WalletController.getWallet)
router.get('/activities', WalletController.getWalletActivities)