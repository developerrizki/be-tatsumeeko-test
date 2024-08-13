import { Request, Response } from "express";
import { walletService } from "../Service/wallet.service";

class walletController {
    async getWallet(req: Request, res: Response) {
        try {
            const collection = await walletService.getWallet(req.query.wallet_address?.toString() || '');
            res.send(collection)
        } catch (error) {
            console.log(error)
        }
    }

    async getWalletActivities(req: Request, res: Response) {
        try {
            const collection = await walletService.getWalletActivities(req.query.wallet_address?.toString() || '');
            res.send(collection)
        } catch (error) {
            console.log(error)
        }
    }
}

export const WalletController = new walletController()