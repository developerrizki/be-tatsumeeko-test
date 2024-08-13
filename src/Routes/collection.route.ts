import express from 'express';
import { CollectionController } from '../Controllers/collection.controller';

export const router = express.Router();

router.get('/', CollectionController.getCollection)
router.get('/list', CollectionController.getCollectionList)
router.get('/holder-stats', CollectionController.getCollectionHolderStats)