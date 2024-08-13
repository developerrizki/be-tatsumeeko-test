import { Request, Response } from "express";
import { marketplaceService } from "../Service/marketplace.service";

class marketplaceController {
    async getMarketplace(req: Request, res: Response) {
        try {
            const marketplace = await marketplaceService.getMarketplace();
            res.send(marketplace)
        } catch (error) {
            console.log(error)
        }
    }
}

export const MarketplaceController = new marketplaceController()