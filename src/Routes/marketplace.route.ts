import express from 'express';
import { MarketplaceController } from '../Controllers/marketplace.controller';

export const router = express.Router();

router.get('/', MarketplaceController.getMarketplace)