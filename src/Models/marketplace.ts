import  {Schema, model,} from 'mongoose'

interface  IMarketplace {
    symbol: string
    name: string
    description: string
    image: string
    floorPrice: number
    volumeAll: number
    hasCNFTs: boolean
}

const marketplaceSchema = new Schema<IMarketplace>({
    symbol: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    floorPrice: {
        type: Number,
    },
    volumeAll: {
        type: Number,
    },
    hasCNFTs: {
        type: Boolean,
    },
})

export const Marketplace = model<IMarketplace>('Marketplace', marketplaceSchema)