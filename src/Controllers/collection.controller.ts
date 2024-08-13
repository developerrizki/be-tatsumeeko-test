import { Request, Response } from "express";
import { collectionService } from "../Service/collection.service";

class collectionController {
    async getCollectionList(req: Request, res: Response) {
        try {
            const collectionList = await collectionService.getCollectionList();
            res.send(collectionList)
        } catch (error) {
            console.log(error)
        }
    }
    
    async getCollection(req: Request, res: Response) {
        try {
            const collection = await collectionService.getCollection(req.query.symbol?.toString() || '');
            res.send(collection)
        } catch (error) {
            console.log(error)
        }
    }

    async getCollectionHolderStats(req: Request, res: Response) {
        try {
            const collectionHolderStats = await collectionService.getCollectionHolderStats(req.query.symbol?.toString() || '');
            res.send(collectionHolderStats)
        } catch (error) {
            console.log(error)
        }
    }
}

export const CollectionController = new collectionController()