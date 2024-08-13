
import tallalTest from '@api/tallal-test';

export class collectionServices {
    async getCollectionList() {
        tallalTest.server('https://api-mainnet.magiceden.dev/v2');
        return tallalTest.getCollections()
            .then(({ data }) => {
                return data
            })
            .catch(error => {
                console.error(error)
                throw error
            });
    }

    async getCollection(symbol: string) {
        tallalTest.server('https://api-mainnet.magiceden.dev/v2');
        return tallalTest.getCollectionsSymbolListings({symbol: symbol, limit: 100})
            .then(({ data }) => {
                return data
            })
            .catch(error => {
                console.error(error)
                throw error
            });
    }

    async getCollectionHolderStats(symbol: string) {
        tallalTest.server('https://api-mainnet.magiceden.dev/v2');
        return tallalTest.getCollectionsSymbolHolder_stats({symbol: symbol})
            .then(({ data }) => {
                return data
            })
            .catch(error => {
                console.error(error)
                throw error
            });
    }
}

export const collectionService = new collectionServices();