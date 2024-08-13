import tallalTest from '@api/tallal-test';

export class marketplaceServices {
    async getMarketplace() {
        tallalTest.server('https://api-mainnet.magiceden.dev/v2');
        return tallalTest.getMarketplacePopular_collections({limit: 100})
            .then(({ data }) => {
                try {
                    return data
                } catch (error) {
                    console.error(error)
                    throw error
                }
            })
            .catch(error => {
                console.error(error)
                throw error
            });
    }
}

export const marketplaceService = new marketplaceServices();