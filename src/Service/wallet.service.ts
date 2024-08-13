
import tallalTest from '@api/tallal-test';

export class walletServices {

    async getWallet(wallet_address: string) {
        tallalTest.server('https://api-mainnet.magiceden.dev/v2');
        return tallalTest.getWalletsWallet_address({wallet_address: wallet_address})
            .then(({ data }) => {
                return data
            })
            .catch(err => {
                console.error(err)
                throw err
            });
    }

    async getWalletActivities(wallet_address: string) {
        tallalTest.server('https://api-mainnet.magiceden.dev/v2');
        return tallalTest.getWalletsWallet_addressActivities({wallet_address: wallet_address})
            .then(({ data }) => {
                return data
            })
            .catch(err => {
                console.error(err)
                throw err
            });
    }
}

export const walletService = new walletServices();