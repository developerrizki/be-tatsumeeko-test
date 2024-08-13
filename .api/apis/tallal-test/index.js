"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'tallal-test/1.0.0-oas3 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Get activities of a collection
     *
     * @throws FetchError<400, types.GetCollectionsSymbolActivitiesResponse400> Invalid symbol
     */
    SDK.prototype.getCollectionsSymbolActivities = function (metadata) {
        return this.core.fetch('/collections/{symbol}/activities', 'get', metadata);
    };
    /**
     * Get stats of a collection
     *
     * @throws FetchError<400, types.GetCollectionsSymbolStatsResponse400> Invalid symbol
     * @throws FetchError<404, types.GetCollectionsSymbolStatsResponse404> Collection not found
     */
    SDK.prototype.getCollectionsSymbolStats = function (metadata) {
        return this.core.fetch('/collections/{symbol}/stats', 'get', metadata);
    };
    /**
     * Get attributes of a collection
     *
     * @throws FetchError<400, types.GetCollectionsCollectionsymbolAttributesResponse400> Invalid symbol
     * @throws FetchError<404, types.GetCollectionsCollectionsymbolAttributesResponse404> Collection not found
     */
    SDK.prototype.getCollectionsCollectionsymbolAttributes = function (metadata) {
        return this.core.fetch('/collections/{collectionSymbol}/attributes', 'get', metadata);
    };
    /**
     * Get collections
     *
     */
    SDK.prototype.getCollections = function (metadata) {
        return this.core.fetch('/collections', 'get', metadata);
    };
    /**
     * Get listings of a collection
     *
     * @throws FetchError<400, types.GetCollectionsSymbolListingsResponse400> Invalid symbol
     */
    SDK.prototype.getCollectionsSymbolListings = function (metadata) {
        return this.core.fetch('/collections/{symbol}/listings', 'get', metadata);
    };
    /**
     * Get batch listings of a collection
     *
     * @throws FetchError<400, types.PostCollectionsBatchListingsResponse400> Invalid symbol
     */
    SDK.prototype.postCollectionsBatchListings = function (body, metadata) {
        return this.core.fetch('/collections/batch/listings', 'post', body, metadata);
    };
    /**
     * Get holder stats of a collection
     *
     * @throws FetchError<400, types.GetCollectionsSymbolHolderStatsResponse400> Bad request
     */
    SDK.prototype.getCollectionsSymbolHolder_stats = function (metadata) {
        return this.core.fetch('/collections/{symbol}/holder_stats', 'get', metadata);
    };
    /**
     * Get wallets rank sorted by volume for one collection
     *
     * @throws FetchError<400, types.GetCollectionsSymbolLeaderboardResponse400> Bad request
     */
    SDK.prototype.getCollectionsSymbolLeaderboard = function (metadata) {
        return this.core.fetch('/collections/{symbol}/leaderboard', 'get', metadata);
    };
    /**
     * Get launchpad collections
     *
     */
    SDK.prototype.getLaunchpadCollections = function (metadata) {
        return this.core.fetch('/launchpad/collections', 'get', metadata);
    };
    /**
     * Get the top popular collections for a time range
     *
     */
    SDK.prototype.getMarketplacePopular_collections = function (metadata) {
        return this.core.fetch('/marketplace/popular_collections', 'get', metadata);
    };
    /**
     * Get AMM pools corresponding to an owner or collection symbol. At least one of required
     * collectionSymbol or owner is required!
     *
     */
    SDK.prototype.getMmmPools = function (metadata) {
        return this.core.fetch('/mmm/pools', 'get', metadata);
    };
    /**
     * Get AMM pools grouped by a reference price corresponding to a collection symbol, summing
     * up the total buy side liquidity for each group.
     *
     */
    SDK.prototype.getMmmPoolsBuyWalls = function (metadata) {
        return this.core.fetch('/mmm/pools/buy-walls', 'get', metadata);
    };
    /**
     * Get best offers for an NFT
     *
     */
    SDK.prototype.getMmmTokenMint_addressPools = function (metadata) {
        return this.core.fetch('/mmm/token/{mint_address}/pools', 'get', metadata);
    };
    /**
     * Get listings for a token
     *
     * @throws FetchError<400, types.GetTokensTokenMintListingsResponse400> Token not found
     */
    SDK.prototype.getTokensToken_mintListings = function (metadata) {
        return this.core.fetch('/tokens/{token_mint}/listings', 'get', metadata);
    };
    /**
     * Get received offers for a token
     *
     * @throws FetchError<400, types.GetTokensTokenMintOffersReceivedResponse400> Token not found
     */
    SDK.prototype.getTokensToken_mintOffers_received = function (metadata) {
        return this.core.fetch('/tokens/{token_mint}/offers_received', 'get', metadata);
    };
    /**
     * Get activities for a token
     *
     * @throws FetchError<400, types.GetTokensTokenMintActivitiesResponse400> Token not found
     */
    SDK.prototype.getTokensToken_mintActivities = function (metadata) {
        return this.core.fetch('/tokens/{token_mint}/activities', 'get', metadata);
    };
    /**
     * Get token metadata by mint address
     *
     * @throws FetchError<400, types.GetTokensTokenMintResponse400> Token not found
     */
    SDK.prototype.getTokensToken_mint = function (metadata) {
        return this.core.fetch('/tokens/{token_mint}', 'get', metadata);
    };
    /**
     * Get tokens owned by a wallet.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressTokensResponse400> Wallet not found
     */
    SDK.prototype.getWalletsWallet_addressTokens = function (metadata) {
        return this.core.fetch('/wallets/{wallet_address}/tokens', 'get', metadata);
    };
    /**
     * Get info about the wallet owner.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressResponse400> Wallet not found
     */
    SDK.prototype.getWalletsWallet_address = function (metadata) {
        return this.core.fetch('/wallets/{wallet_address}', 'get', metadata);
    };
    /**
     * Get activities of a wallet.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressActivitiesResponse400> Wallet not found
     */
    SDK.prototype.getWalletsWallet_addressActivities = function (metadata) {
        return this.core.fetch('/wallets/{wallet_address}/activities', 'get', metadata);
    };
    /**
     * Get offers made by a wallet.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressOffersMadeResponse400> Wallet not found
     */
    SDK.prototype.getWalletsWallet_addressOffers_made = function (metadata) {
        return this.core.fetch('/wallets/{wallet_address}/offers_made', 'get', metadata);
    };
    /**
     * Get offers received by a wallet.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressOffersReceivedResponse400> Wallet not found
     */
    SDK.prototype.getWalletsWallet_addressOffers_received = function (metadata) {
        return this.core.fetch('/wallets/{wallet_address}/offers_received', 'get', metadata);
    };
    /**
     * Get escrow balance for a wallet.
     *
     * @throws FetchError<400, types.GetWalletsWalletAddressEscrowBalanceResponse400> Wallet not found
     */
    SDK.prototype.getWalletsWallet_addressEscrow_balance = function (metadata) {
        return this.core.fetch('/wallets/{wallet_address}/escrow_balance', 'get', metadata);
    };
    /**
     * Get instruction to create a pool
     *
     */
    SDK.prototype.getInstructionsMmmCreatePool = function (metadata) {
        return this.core.fetch('/instructions/mmm/create-pool', 'get', metadata);
    };
    /**
     * Get instruction to update an existing pool
     *
     */
    SDK.prototype.getInstructionsMmmUpdatePool = function (metadata) {
        return this.core.fetch('/instructions/mmm/update-pool', 'get', metadata);
    };
    /**
     * Get instruction to deposit an sol payment into a pool
     *
     */
    SDK.prototype.getInstructionsMmmSolDepositBuy = function (metadata) {
        return this.core.fetch('/instructions/mmm/sol-deposit-buy', 'get', metadata);
    };
    /**
     * Get instruction to withdraw sol payment from a pool
     *
     */
    SDK.prototype.getInstructionsMmmSolWithdrawBuy = function (metadata) {
        return this.core.fetch('/instructions/mmm/sol-withdraw-buy', 'get', metadata);
    };
    /**
     * Get instruction to close a pool after all assets and payment have been withdrawn
     *
     */
    SDK.prototype.getInstructionsMmmSolClosePool = function (metadata) {
        return this.core.fetch('/instructions/mmm/sol-close-pool', 'get', metadata);
    };
    /**
     * Get instruction to have a pool fulfill a buy
     *
     */
    SDK.prototype.getInstructionsMmmSolFulfillBuy = function (metadata) {
        return this.core.fetch('/instructions/mmm/sol-fulfill-buy', 'get', metadata);
    };
    /**
     * Get instruction to have a pool fulfill a sell
     *
     */
    SDK.prototype.getInstructionsMmmSolFulfillSell = function (metadata) {
        return this.core.fetch('/instructions/mmm/sol-fulfill-sell', 'get', metadata);
    };
    /**
     * Get instruction to buy (bid)
     *
     */
    SDK.prototype.getInstructionsBuy = function (metadata) {
        return this.core.fetch('/instructions/buy', 'get', metadata);
    };
    /**
     * Get instruction to buy now and transfer nft to another owner
     *
     */
    SDK.prototype.getInstructionsBuy_now_transfer_nft = function (metadata) {
        return this.core.fetch('/instructions/buy_now_transfer_nft', 'get', metadata);
    };
    /**
     * Get instruction to buy now
     *
     */
    SDK.prototype.getInstructionsBuy_now = function (metadata) {
        return this.core.fetch('/instructions/buy_now', 'get', metadata);
    };
    /**
     * Get instruction to cancel a buy
     *
     */
    SDK.prototype.getInstructionsBuy_cancel = function (metadata) {
        return this.core.fetch('/instructions/buy_cancel', 'get', metadata);
    };
    /**
     * Get instruction to change a buy price
     *
     */
    SDK.prototype.getInstructionsBuy_change_price = function (metadata) {
        return this.core.fetch('/instructions/buy_change_price', 'get', metadata);
    };
    /**
     * Get instruction to sell (list)
     *
     */
    SDK.prototype.getInstructionsSell = function (metadata) {
        return this.core.fetch('/instructions/sell', 'get', metadata);
    };
    /**
     * Get instruction to change a sell price
     *
     */
    SDK.prototype.getInstructionsSell_change_price = function (metadata) {
        return this.core.fetch('/instructions/sell_change_price', 'get', metadata);
    };
    /**
     * Get instruction to sell now (accept offer)
     *
     */
    SDK.prototype.getInstructionsSell_now = function (metadata) {
        return this.core.fetch('/instructions/sell_now', 'get', metadata);
    };
    /**
     * Get instruction to cancel a sell
     *
     */
    SDK.prototype.getInstructionsSell_cancel = function (metadata) {
        return this.core.fetch('/instructions/sell_cancel', 'get', metadata);
    };
    /**
     * Get instruction to deposit to escrow
     *
     */
    SDK.prototype.getInstructionsDeposit = function (metadata) {
        return this.core.fetch('/instructions/deposit', 'get', metadata);
    };
    /**
     * Get instruction to withdraw from escrow
     *
     */
    SDK.prototype.getInstructionsWithdraw = function (metadata) {
        return this.core.fetch('/instructions/withdraw', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
