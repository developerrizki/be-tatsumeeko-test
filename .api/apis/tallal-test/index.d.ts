import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Get activities of a collection
     *
     * @throws FetchError<400, types.GetCollectionsSymbolActivitiesResponse400> Invalid symbol
     */
    getCollectionsSymbolActivities(metadata: types.GetCollectionsSymbolActivitiesMetadataParam): Promise<FetchResponse<200, types.GetCollectionsSymbolActivitiesResponse200>>;
    /**
     * Get stats of a collection
     *
     * @throws FetchError<400, types.GetCollectionsSymbolStatsResponse400> Invalid symbol
     * @throws FetchError<404, types.GetCollectionsSymbolStatsResponse404> Collection not found
     */
    getCollectionsSymbolStats(metadata: types.GetCollectionsSymbolStatsMetadataParam): Promise<FetchResponse<200, types.GetCollectionsSymbolStatsResponse200>>;
    /**
     * Get attributes of a collection
     *
     * @throws FetchError<400, types.GetCollectionsCollectionsymbolAttributesResponse400> Invalid symbol
     * @throws FetchError<404, types.GetCollectionsCollectionsymbolAttributesResponse404> Collection not found
     */
    getCollectionsCollectionsymbolAttributes(metadata: types.GetCollectionsCollectionsymbolAttributesMetadataParam): Promise<FetchResponse<200, types.GetCollectionsCollectionsymbolAttributesResponse200>>;
    /**
     * Get collections
     *
     */
    getCollections(metadata?: types.GetCollectionsMetadataParam): Promise<FetchResponse<200, types.GetCollectionsResponse200>>;
    /**
     * Get listings of a collection
     *
     * @throws FetchError<400, types.GetCollectionsSymbolListingsResponse400> Invalid symbol
     */
    getCollectionsSymbolListings(metadata: types.GetCollectionsSymbolListingsMetadataParam): Promise<FetchResponse<200, types.GetCollectionsSymbolListingsResponse200>>;
    /**
     * Get batch listings of a collection
     *
     * @throws FetchError<400, types.PostCollectionsBatchListingsResponse400> Invalid symbol
     */
    postCollectionsBatchListings(body: types.PostCollectionsBatchListingsBodyParam, metadata?: types.PostCollectionsBatchListingsMetadataParam): Promise<FetchResponse<200, types.PostCollectionsBatchListingsResponse200>>;
    /**
     * Get holder stats of a collection
     *
     * @throws FetchError<400, types.GetCollectionsSymbolHolderStatsResponse400> Bad request
     */
    getCollectionsSymbolHolder_stats(metadata: types.GetCollectionsSymbolHolderStatsMetadataParam): Promise<FetchResponse<200, types.GetCollectionsSymbolHolderStatsResponse200>>;
    /**
     * Get wallets rank sorted by volume for one collection
     *
     * @throws FetchError<400, types.GetCollectionsSymbolLeaderboardResponse400> Bad request
     */
    getCollectionsSymbolLeaderboard(metadata: types.GetCollectionsSymbolLeaderboardMetadataParam): Promise<FetchResponse<200, types.GetCollectionsSymbolLeaderboardResponse200>>;
    /**
     * Get launchpad collections
     *
     */
    getLaunchpadCollections(metadata?: types.GetLaunchpadCollectionsMetadataParam): Promise<FetchResponse<200, types.GetLaunchpadCollectionsResponse200>>;
    /**
     * Get the top popular collections for a time range
     *
     */
    getMarketplacePopular_collections(metadata?: types.GetMarketplacePopularCollectionsMetadataParam): Promise<FetchResponse<200, types.GetMarketplacePopularCollectionsResponse200>>;
    /**
     * Get AMM pools corresponding to an owner or collection symbol. At least one of required
     * collectionSymbol or owner is required!
     *
     */
    getMmmPools(metadata?: types.GetMmmPoolsMetadataParam): Promise<FetchResponse<200, types.GetMmmPoolsResponse200>>;
    /**
     * Get AMM pools grouped by a reference price corresponding to a collection symbol, summing
     * up the total buy side liquidity for each group.
     *
     */
    getMmmPoolsBuyWalls(metadata?: types.GetMmmPoolsBuyWallsMetadataParam): Promise<FetchResponse<200, types.GetMmmPoolsBuyWallsResponse200>>;
    /**
     * Get best offers for an NFT
     *
     */
    getMmmTokenMint_addressPools(metadata: types.GetMmmTokenMintAddressPoolsMetadataParam): Promise<FetchResponse<200, types.GetMmmTokenMintAddressPoolsResponse200>>;
    /**
     * Get listings for a token
     *
     * @throws FetchError<400, types.GetTokensTokenMintListingsResponse400> Token not found
     */
    getTokensToken_mintListings(metadata: types.GetTokensTokenMintListingsMetadataParam): Promise<FetchResponse<200, types.GetTokensTokenMintListingsResponse200>>;
    /**
     * Get received offers for a token
     *
     * @throws FetchError<400, types.GetTokensTokenMintOffersReceivedResponse400> Token not found
     */
    getTokensToken_mintOffers_received(metadata: types.GetTokensTokenMintOffersReceivedMetadataParam): Promise<FetchResponse<200, types.GetTokensTokenMintOffersReceivedResponse200>>;
    /**
     * Get activities for a token
     *
     * @throws FetchError<400, types.GetTokensTokenMintActivitiesResponse400> Token not found
     */
    getTokensToken_mintActivities(metadata: types.GetTokensTokenMintActivitiesMetadataParam): Promise<FetchResponse<200, types.GetTokensTokenMintActivitiesResponse200>>;
    /**
     * Get token metadata by mint address
     *
     * @throws FetchError<400, types.GetTokensTokenMintResponse400> Token not found
     */
    getTokensToken_mint(metadata: types.GetTokensTokenMintMetadataParam): Promise<FetchResponse<200, types.GetTokensTokenMintResponse200>>;
    /**
     * Get tokens owned by a wallet.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressTokensResponse400> Wallet not found
     */
    getWalletsWallet_addressTokens(metadata: types.GetWalletsWalletAddressTokensMetadataParam): Promise<FetchResponse<200, types.GetWalletsWalletAddressTokensResponse200>>;
    /**
     * Get info about the wallet owner.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressResponse400> Wallet not found
     */
    getWalletsWallet_address(metadata: types.GetWalletsWalletAddressMetadataParam): Promise<FetchResponse<200, types.GetWalletsWalletAddressResponse200>>;
    /**
     * Get activities of a wallet.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressActivitiesResponse400> Wallet not found
     */
    getWalletsWallet_addressActivities(metadata: types.GetWalletsWalletAddressActivitiesMetadataParam): Promise<FetchResponse<200, types.GetWalletsWalletAddressActivitiesResponse200>>;
    /**
     * Get offers made by a wallet.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressOffersMadeResponse400> Wallet not found
     */
    getWalletsWallet_addressOffers_made(metadata: types.GetWalletsWalletAddressOffersMadeMetadataParam): Promise<FetchResponse<200, types.GetWalletsWalletAddressOffersMadeResponse200>>;
    /**
     * Get offers received by a wallet.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressOffersReceivedResponse400> Wallet not found
     */
    getWalletsWallet_addressOffers_received(metadata: types.GetWalletsWalletAddressOffersReceivedMetadataParam): Promise<FetchResponse<200, types.GetWalletsWalletAddressOffersReceivedResponse200>>;
    /**
     * Get escrow balance for a wallet.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressEscrowBalanceResponse400> Wallet not found
     */
    getWalletsWallet_addressEscrow_balance(metadata: types.GetWalletsWalletAddressEscrowBalanceMetadataParam): Promise<FetchResponse<200, types.GetWalletsWalletAddressEscrowBalanceResponse200>>;
    /**
     * Get instruction to create a pool
     *
     */
    getInstructionsMmmCreatePool(metadata: types.GetInstructionsMmmCreatePoolMetadataParam): Promise<FetchResponse<200, types.GetInstructionsMmmCreatePoolResponse200>>;
    /**
     * Get instruction to update an existing pool
     *
     */
    getInstructionsMmmUpdatePool(metadata: types.GetInstructionsMmmUpdatePoolMetadataParam): Promise<FetchResponse<200, types.GetInstructionsMmmUpdatePoolResponse200>>;
    /**
     * Get instruction to deposit an sol payment into a pool
     *
     */
    getInstructionsMmmSolDepositBuy(metadata: types.GetInstructionsMmmSolDepositBuyMetadataParam): Promise<FetchResponse<200, types.GetInstructionsMmmSolDepositBuyResponse200>>;
    /**
     * Get instruction to withdraw sol payment from a pool
     *
     */
    getInstructionsMmmSolWithdrawBuy(metadata: types.GetInstructionsMmmSolWithdrawBuyMetadataParam): Promise<FetchResponse<200, types.GetInstructionsMmmSolWithdrawBuyResponse200>>;
    /**
     * Get instruction to close a pool after all assets and payment have been withdrawn
     *
     */
    getInstructionsMmmSolClosePool(metadata: types.GetInstructionsMmmSolClosePoolMetadataParam): Promise<FetchResponse<200, types.GetInstructionsMmmSolClosePoolResponse200>>;
    /**
     * Get instruction to have a pool fulfill a buy
     *
     */
    getInstructionsMmmSolFulfillBuy(metadata: types.GetInstructionsMmmSolFulfillBuyMetadataParam): Promise<FetchResponse<200, types.GetInstructionsMmmSolFulfillBuyResponse200>>;
    /**
     * Get instruction to have a pool fulfill a sell
     *
     */
    getInstructionsMmmSolFulfillSell(metadata: types.GetInstructionsMmmSolFulfillSellMetadataParam): Promise<FetchResponse<200, types.GetInstructionsMmmSolFulfillSellResponse200>>;
    /**
     * Get instruction to buy (bid)
     *
     */
    getInstructionsBuy(metadata: types.GetInstructionsBuyMetadataParam): Promise<FetchResponse<200, types.GetInstructionsBuyResponse200>>;
    /**
     * Get instruction to buy now and transfer nft to another owner
     *
     */
    getInstructionsBuy_now_transfer_nft(metadata: types.GetInstructionsBuyNowTransferNftMetadataParam): Promise<FetchResponse<200, types.GetInstructionsBuyNowTransferNftResponse200>>;
    /**
     * Get instruction to buy now
     *
     */
    getInstructionsBuy_now(metadata: types.GetInstructionsBuyNowMetadataParam): Promise<FetchResponse<200, types.GetInstructionsBuyNowResponse200>>;
    /**
     * Get instruction to cancel a buy
     *
     */
    getInstructionsBuy_cancel(metadata: types.GetInstructionsBuyCancelMetadataParam): Promise<FetchResponse<200, types.GetInstructionsBuyCancelResponse200>>;
    /**
     * Get instruction to change a buy price
     *
     */
    getInstructionsBuy_change_price(metadata: types.GetInstructionsBuyChangePriceMetadataParam): Promise<FetchResponse<200, types.GetInstructionsBuyChangePriceResponse200>>;
    /**
     * Get instruction to sell (list)
     *
     */
    getInstructionsSell(metadata: types.GetInstructionsSellMetadataParam): Promise<FetchResponse<200, types.GetInstructionsSellResponse200>>;
    /**
     * Get instruction to change a sell price
     *
     */
    getInstructionsSell_change_price(metadata: types.GetInstructionsSellChangePriceMetadataParam): Promise<FetchResponse<200, types.GetInstructionsSellChangePriceResponse200>>;
    /**
     * Get instruction to sell now (accept offer)
     *
     */
    getInstructionsSell_now(metadata: types.GetInstructionsSellNowMetadataParam): Promise<FetchResponse<200, types.GetInstructionsSellNowResponse200>>;
    /**
     * Get instruction to cancel a sell
     *
     */
    getInstructionsSell_cancel(metadata: types.GetInstructionsSellCancelMetadataParam): Promise<FetchResponse<200, types.GetInstructionsSellCancelResponse200>>;
    /**
     * Get instruction to deposit to escrow
     *
     */
    getInstructionsDeposit(metadata: types.GetInstructionsDepositMetadataParam): Promise<FetchResponse<200, types.GetInstructionsDepositResponse200>>;
    /**
     * Get instruction to withdraw from escrow
     *
     */
    getInstructionsWithdraw(metadata: types.GetInstructionsWithdrawMetadataParam): Promise<FetchResponse<200, types.GetInstructionsWithdrawResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
