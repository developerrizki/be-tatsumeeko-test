declare const GetCollections: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 200, min 1, max 500";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "ME-Pub-API-Metadata": {
                    readonly properties: {
                        readonly paging: {
                            readonly type: "boolean";
                        };
                    };
                    readonly type: "object";
                    readonly additionalProperties: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint supports paging metadata";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly symbol: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly image: {
                        readonly type: "string";
                    };
                    readonly twitter: {
                        readonly type: "string";
                    };
                    readonly discord: {
                        readonly type: "string";
                    };
                    readonly website: {
                        readonly type: "string";
                    };
                    readonly isFlagged: {
                        readonly type: "boolean";
                    };
                    readonly flagMessage: {
                        readonly type: "string";
                    };
                    readonly categories: {
                        readonly items: {
                            readonly type: readonly ["string", "null"];
                        };
                        readonly type: "array";
                    };
                    readonly floorPrice: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly listedCount: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly avgPrice24hr: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly volumeAll: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly isBadged: {
                        readonly type: "boolean";
                    };
                    readonly hasCNFTs: {
                        readonly type: "boolean";
                    };
                    readonly isOcp: {
                        readonly type: "boolean";
                    };
                    readonly splTokens: {
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly type: "array";
                    };
                    readonly floorPriceWithFee: {
                        readonly properties: {
                            readonly floorPrice: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly floorListedNftType: {
                                readonly type: "string";
                                readonly enum: readonly ["M2", "MMM", "TENSOR_LISTING", "TENSOR_CNFT_LISTING", "TENSOR_AMM", "HADESWAP_AMM", "M3"];
                                readonly description: "`M2` `MMM` `TENSOR_LISTING` `TENSOR_CNFT_LISTING` `TENSOR_AMM` `HADESWAP_AMM` `M3`";
                            };
                        };
                        readonly required: readonly ["floorPrice", "floorListedNftType"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                };
                readonly required: readonly ["symbol", "name", "description", "image"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollectionsCollectionsymbolAttributes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly collectionSymbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "collection symbol";
                };
            };
            readonly required: readonly ["collectionSymbol"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly results: {
                    readonly properties: {
                        readonly symbol: {
                            readonly type: "string";
                        };
                        readonly availableAttributes: {
                            readonly items: {
                                readonly properties: {
                                    readonly attribute: {
                                        readonly properties: {
                                            readonly trait_type: {
                                                readonly type: "string";
                                            };
                                            readonly value: {};
                                        };
                                        readonly required: readonly ["trait_type", "value"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly count: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly floor: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly countByListingType: {
                                        readonly properties: {};
                                        readonly additionalProperties: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly type: "object";
                                    };
                                };
                                readonly required: readonly ["attribute", "count", "floor", "countByListingType"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["symbol", "availableAttributes"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["results"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollectionsSymbolActivities: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly symbol: {
                    readonly type: "string";
                    readonly examples: readonly ["btest"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "collection symbol";
                };
            };
            readonly required: readonly ["symbol"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 100, min 1, max 1000";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                    };
                    readonly collection: {
                        readonly type: "string";
                        readonly deprecated: true;
                    };
                    readonly image: {
                        readonly type: "string";
                    };
                    readonly price: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly tokenMint: {
                        readonly type: "string";
                    };
                    readonly seller: {
                        readonly type: readonly ["string", "null"];
                    };
                    readonly sellerReferral: {
                        readonly type: "string";
                    };
                    readonly signature: {
                        readonly type: "string";
                    };
                    readonly source: {
                        readonly type: "string";
                    };
                    readonly collectionSymbol: {
                        readonly type: "string";
                    };
                    readonly slot: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly blockTime: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly buyer: {
                        readonly type: readonly ["string", "null"];
                    };
                    readonly buyerReferral: {
                        readonly type: "string";
                    };
                    readonly priceInfo: {
                        readonly properties: {
                            readonly solPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly splPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly required: readonly ["solPrice"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                };
                readonly required: readonly ["type", "price", "signature", "source", "slot", "blockTime"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollectionsSymbolHolderStats: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly symbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "collection symbol";
                };
            };
            readonly required: readonly ["symbol"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly symbol: {
                    readonly type: "string";
                };
                readonly totalSupply: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly uniqueHolders: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly tokenHistogram: {
                    readonly properties: {
                        readonly bars: {
                            readonly items: {
                                readonly properties: {
                                    readonly l_val: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly r_val: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly hight: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["l_val", "hight"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly topHolders: {
                    readonly items: {
                        readonly properties: {
                            readonly owner: {
                                readonly type: "string";
                            };
                            readonly avatarMintImg: {
                                readonly type: "string";
                            };
                            readonly tokens: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly ownerDisplay: {
                                readonly properties: {
                                    readonly sol: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["sol"];
                                readonly type: "object";
                            };
                        };
                        readonly required: readonly ["owner", "tokens"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["symbol", "tokenHistogram", "topHolders"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollectionsSymbolLeaderboard: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly symbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "collection symbol";
                };
            };
            readonly required: readonly ["symbol"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 100, min 1, max 100";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly symbol: {
                    readonly type: "string";
                };
                readonly totalSupply: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly uniqueHolders: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly tokenHistogram: {
                    readonly properties: {
                        readonly bars: {
                            readonly items: {
                                readonly properties: {
                                    readonly l_val: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly r_val: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly hight: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["l_val", "hight"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly topHolders: {
                    readonly items: {
                        readonly properties: {
                            readonly owner: {
                                readonly type: "string";
                            };
                            readonly avatarMintImg: {
                                readonly type: "string";
                            };
                            readonly tokens: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly ownerDisplay: {
                                readonly properties: {
                                    readonly sol: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["sol"];
                                readonly type: "object";
                            };
                        };
                        readonly required: readonly ["owner", "tokens"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["symbol", "tokenHistogram", "topHolders"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollectionsSymbolListings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly symbol: {
                    readonly type: "string";
                    readonly examples: readonly ["btest"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "collection symbol";
                };
            };
            readonly required: readonly ["symbol"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly nftName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings by the NFT name";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 20, min 1, max 100";
                };
                readonly min_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings that are less than this price";
                };
                readonly max_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings that are more than this price";
                };
                readonly attributes: {
                    readonly items: {
                        readonly items: {
                            readonly properties: {
                                readonly traitType: {
                                    readonly type: "string";
                                };
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["traitType", "value"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                        readonly type: "array";
                    };
                    readonly type: "array";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Represents a filtering mechanism where the elements within each inner array are logically ORed, and the resulting arrays are ANDed together at the top level. Each inner array consists of objects with two properties: traitType (a string) and value (a string). For example: [[{\"traitType\":\"trait1\", \"value\":\"value1\"},{\"traitType\":\"trait1\", \"value\":\"value2\"}]] would return listings that have \"value1\" OR \"value2\" for \"trait1\".";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["updatedAt", "listPrice"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to sort the listings, default 'listPrice'";
                };
                readonly listingAggMode: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "True to return aggregated marketplace listings, false to return just Magic Eden listings.";
                };
                readonly sort_direction: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The direction returned elements should be sorted in, default 'asc'";
                };
                readonly paymentMints: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings by the payment mint address that the seller expects. Default to filter for listings that only accept native SOL. Use \"ALL\" to show all listings.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly price: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly tokenAddress: {
                        readonly type: "string";
                    };
                    readonly pdaAddress: {
                        readonly type: "string";
                    };
                    readonly auctionHouse: {
                        readonly type: "string";
                    };
                    readonly tokenMint: {
                        readonly type: "string";
                    };
                    readonly seller: {
                        readonly type: "string";
                    };
                    readonly sellerReferral: {
                        readonly type: "string";
                    };
                    readonly tokenSize: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly rarity: {
                        readonly properties: {
                            readonly howrare: {
                                readonly properties: {
                                    readonly rank: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rank"];
                                readonly type: "object";
                            };
                            readonly moonrank: {
                                readonly properties: {
                                    readonly crawl: {
                                        readonly properties: {
                                            readonly complete: {
                                                readonly type: "boolean";
                                                readonly description: "Flag for if Moonrank has fully crawled the collection. If this is false,\nthen it means the rarity values are incomplete and should not be used.";
                                            };
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly absolute_rarity: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly rank: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["crawl", "absolute_rarity", "rank"];
                                readonly type: "object";
                            };
                            readonly merarity: {
                                readonly properties: {
                                    readonly tokenKey: {
                                        readonly type: "string";
                                    };
                                    readonly score: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly rank: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly totalSupply: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly attributeWithCounts: {
                                        readonly items: {
                                            readonly properties: {
                                                readonly traitType: {
                                                    readonly type: "string";
                                                };
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                                readonly count: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly rarity: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly topBidValue: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly floorAskPrice: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly onSaleCount: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly required: readonly ["traitType", "value"];
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly required: readonly ["tokenKey", "score"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly extra: {
                        readonly properties: {
                            readonly img: {
                                readonly type: "string";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly expiry: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly listingSource: {
                        readonly type: "string";
                        readonly enum: readonly ["M2", "MMM", "TENSOR_LISTING", "TENSOR_CNFT_LISTING", "TENSOR_AMM", "HADESWAP_AMM", "M3"];
                        readonly description: "`M2` `MMM` `TENSOR_LISTING` `TENSOR_CNFT_LISTING` `TENSOR_AMM` `HADESWAP_AMM` `M3`";
                    };
                    readonly priceInfo: {
                        readonly properties: {
                            readonly solPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly splPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly required: readonly ["solPrice"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly token: {
                        readonly properties: {
                            readonly mintAddress: {
                                readonly type: "string";
                            };
                            readonly owner: {
                                readonly type: "string";
                            };
                            readonly supply: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly delegate: {
                                readonly type: "string";
                            };
                            readonly collection: {
                                readonly type: "string";
                            };
                            readonly collectionName: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly updateAuthority: {
                                readonly type: "string";
                            };
                            readonly primarySaleHappened: {
                                readonly type: "boolean";
                            };
                            readonly sellerFeeBasisPoints: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly image: {
                                readonly type: "string";
                            };
                            readonly tokenStandard: {
                                readonly enum: readonly [0, 1, 2, 3, 4, 5, -1];
                                readonly type: "number";
                                readonly description: "`1` `2` `3` `4` `5` `-1`";
                            };
                            readonly animationUrl: {
                                readonly type: "string";
                            };
                            readonly externalUrl: {
                                readonly type: "string";
                            };
                            readonly attributes: {
                                readonly items: {
                                    readonly properties: {
                                        readonly trait_type: {
                                            readonly type: "string";
                                        };
                                        readonly value: {};
                                    };
                                    readonly required: readonly ["trait_type", "value"];
                                    readonly type: "object";
                                    readonly additionalProperties: false;
                                };
                                readonly type: "array";
                            };
                            readonly properties: {
                                readonly properties: {
                                    readonly files: {
                                        readonly items: {
                                            readonly properties: {
                                                readonly uri: {
                                                    readonly type: "string";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                };
                                                readonly cdn: {
                                                    readonly type: "boolean";
                                                };
                                            };
                                            readonly required: readonly ["uri", "type"];
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                        readonly type: "array";
                                    };
                                    readonly category: {
                                        readonly type: "string";
                                    };
                                    readonly creators: {
                                        readonly items: {
                                            readonly properties: {
                                                readonly address: {
                                                    readonly type: "string";
                                                };
                                                readonly verified: {
                                                    readonly type: "boolean";
                                                };
                                                readonly share: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly type: "object";
                                            readonly description: "Make all properties in T optional";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly required: readonly ["files", "category", "creators"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly listStatus: {
                                readonly type: "string";
                                readonly enum: readonly ["listed", "unlisted"];
                                readonly description: "`listed` `unlisted`";
                            };
                            readonly price: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly tokenAddress: {
                                readonly type: "string";
                            };
                            readonly isCompressed: {
                                readonly type: "boolean";
                            };
                            readonly priceInfo: {
                                readonly properties: {
                                    readonly solPrice: {
                                        readonly properties: {
                                            readonly rawAmount: {
                                                readonly type: "string";
                                            };
                                            readonly address: {
                                                readonly type: "string";
                                                readonly description: "The identifier of the amount.";
                                            };
                                            readonly decimals: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The number of decimals in the amount.";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly required: readonly ["rawAmount", "address", "decimals"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly splPrice: {
                                        readonly properties: {
                                            readonly rawAmount: {
                                                readonly type: "string";
                                            };
                                            readonly address: {
                                                readonly type: "string";
                                                readonly description: "The identifier of the amount.";
                                            };
                                            readonly decimals: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The number of decimals in the amount.";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly required: readonly ["rawAmount", "address", "decimals"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly required: readonly ["solPrice"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly required: readonly ["mintAddress", "owner", "supply", "name", "updateAuthority", "primarySaleHappened", "sellerFeeBasisPoints", "image"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                };
                readonly required: readonly ["price", "tokenAddress", "pdaAddress", "auctionHouse", "tokenMint", "seller", "tokenSize", "rarity", "expiry", "listingSource", "token"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollectionsSymbolStats: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly symbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "collection symbol";
                };
            };
            readonly required: readonly ["symbol"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly timeWindow: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Time window for stats, default all. '24h', '7d', '30d', 'all'";
                };
                readonly listingAggMode: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "True to return aggregated marketplace listings, false to return just Magic Eden listings. Defaults to false.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly symbol: {
                    readonly type: "string";
                };
                readonly floorPrice: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly listedCount: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly avgPrice24hr: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly volumeAll: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
            };
            readonly required: readonly ["symbol"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsBuy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly buyer: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer wallet";
                };
                readonly auctionHouseAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auction house Address. If not provided, will use default auction house.";
                };
                readonly tokenMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token mint address";
                };
                readonly price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price in SOL";
                };
                readonly buyerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer referral wallet";
                };
                readonly expiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 will default to 7 days.";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["buyer", "tokenMint", "price"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsBuyCancel: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly buyer: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer wallet";
                };
                readonly auctionHouseAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auction house Address. If not provided, will use default auction house.";
                };
                readonly tokenMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token mint address";
                };
                readonly price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price in SOL";
                };
                readonly buyerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer referral wallet";
                };
                readonly expiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 means no expiry";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["buyer", "tokenMint", "price"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsBuyChangePrice: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly buyer: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer wallet";
                };
                readonly auctionHouseAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auction house Address. If not provided, will use default auction house.";
                };
                readonly tokenMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token mint address";
                };
                readonly price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Old price in SOL";
                };
                readonly newPrice: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "New price in SOL";
                };
                readonly buyerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer referral wallet";
                };
                readonly expiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 means no expiry";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["buyer", "tokenMint", "price", "newPrice"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsBuyNow: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly buyer: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer wallet";
                };
                readonly seller: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller wallet";
                };
                readonly auctionHouseAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auction house Address. If not provided, will use default auction house.";
                };
                readonly tokenMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token mint address";
                };
                readonly tokenATA: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Associate Token Account";
                };
                readonly price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price in SOL";
                };
                readonly buyerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer referral wallet";
                };
                readonly sellerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller referral wallet";
                };
                readonly buyerExpiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 means no expiry";
                };
                readonly sellerExpiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 means no expiry";
                };
                readonly buyerCreatorRoyaltyPercent: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "buyerCreatorRoyaltyPercent, integer 0-100";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["buyer", "seller", "tokenMint", "tokenATA", "price"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsBuyNowTransferNft: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly buyer: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer wallet";
                };
                readonly seller: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller wallet";
                };
                readonly auctionHouseAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auction house Address. If not provided, will use default auction house.";
                };
                readonly tokenMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token mint address";
                };
                readonly tokenATA: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Associate Token Account";
                };
                readonly price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price in SOL";
                };
                readonly destinationATA: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Associated token account to send bought NFT to";
                };
                readonly destinationOwner: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Owner of token account";
                };
                readonly createATA: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "whether to include create ATA instructions";
                };
                readonly buyerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer referral wallet";
                };
                readonly sellerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller referral wallet";
                };
                readonly buyerExpiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 means no expiry";
                };
                readonly sellerExpiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 means no expiry";
                };
                readonly buyerCreatorRoyaltyPercent: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "buyerCreatorRoyaltyPercent, integer 0-100";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["buyer", "seller", "tokenMint", "tokenATA", "price", "destinationATA", "destinationOwner", "createATA"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsDeposit: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly buyer: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer wallet";
                };
                readonly auctionHouseAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auction house Address. If not provided, will use default auction house.";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Amount in SOL";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["buyer", "amount"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsMmmCreatePool: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly spotPrice: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pool initial spot price in SOL";
                };
                readonly curveType: {
                    readonly type: "string";
                    readonly enum: readonly ["linear", "exp", "xyk"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type curve, either 'linear' or 'exp'";
                };
                readonly curveDelta: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Curve delta used to change price after a fill";
                };
                readonly reinvestBuy: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether to reinvest bought asset or transfer directly to owner";
                };
                readonly reinvestSell: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether to reinvest payment from sale or transfer directly to owner";
                };
                readonly expiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Timestamp in seconds in the future, 0 means no expiry";
                };
                readonly lpFeeBp: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Requested liquidity provider fee in basis points";
                };
                readonly buysideCreatorRoyaltyBp: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Amount of creator royalty the pool should pay in basis points";
                };
                readonly paymentMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Mint address of payment (default for SOL)";
                };
                readonly collectionSymbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Collection symbol for which the pool will be valid";
                };
                readonly owner: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Owner of the pool";
                };
                readonly solDeposit: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional sol amount to deposit with pool creation";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
                readonly sharedEscrowCount: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of pools (bids) that will share the escrow account";
                };
            };
            readonly required: readonly ["spotPrice", "curveType", "curveDelta", "reinvestBuy", "reinvestSell", "lpFeeBp", "buysideCreatorRoyaltyBp", "paymentMint", "collectionSymbol", "owner"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsMmmSolClosePool: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pool: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Public key of pool to close";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["pool"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsMmmSolDepositBuy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pool: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Public key of pool to deposit into";
                };
                readonly paymentAmount: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The of SOL to deposit";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["pool", "paymentAmount"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsMmmSolFulfillBuy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pool: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Public key of pool to interact with";
                };
                readonly assetAmount: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Amount of asset to transact";
                };
                readonly minPaymentAmount: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Minimum payment amount acceptible by the seller, in SOL";
                };
                readonly seller: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Public key of seller of asset";
                };
                readonly assetMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Public key of mint account of asset";
                };
                readonly assetTokenAccount: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Public key of token account of asset";
                };
                readonly allowlistAuxAccount: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The allowlist aux account used for token authentication";
                };
                readonly skipDelist: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether to skip trying to delist the NFT if it is detected to be listed";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["pool", "assetAmount", "minPaymentAmount", "seller", "assetMint", "assetTokenAccount"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsMmmSolFulfillSell: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pool: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Public key of pool to interact with";
                };
                readonly assetAmount: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Amount of asset to transact";
                };
                readonly maxPaymentAmount: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum payment amount to be paid by the buyer, in SOL";
                };
                readonly buysideCreatorRoyaltyBp: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Amount of royalty to be paid, in basis points of total royalty";
                };
                readonly buyer: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Public key of buyer of asset";
                };
                readonly assetMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Public key of mint account of asset";
                };
                readonly allowlistAuxAccount: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The allowlist aux account used for token authentication";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["pool", "assetAmount", "maxPaymentAmount", "buysideCreatorRoyaltyBp", "buyer", "assetMint"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsMmmSolWithdrawBuy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pool: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Public key of pool to withdraw from";
                };
                readonly paymentAmount: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The of SOL to withdraw";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["pool", "paymentAmount"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsMmmUpdatePool: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pool: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Public key of pool to modify";
                };
                readonly spotPrice: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pool initial spot price in SOL";
                };
                readonly curveType: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type curve, either 'linear' or 'exp'";
                };
                readonly curveDelta: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Curve delta used to change price after a fill";
                };
                readonly reinvestBuy: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether to reinvest bought asset or transfer directly to owner (this value must remain unchanged from when the pool was created)";
                };
                readonly reinvestSell: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether to reinvest payment from sale or transfer directly to owner (this value must remain unchanged from when the pool was created)";
                };
                readonly expiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Timestamp in seconds in the future, 0 means no expiry";
                };
                readonly lpFeeBp: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Requested liquidity provider fee in basis points";
                };
                readonly buysideCreatorRoyaltyBp: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Amount of creator royalty the pool should pay in basis points";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
                readonly sharedEscrowCount: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of pools (bids) that will share the escrow account";
                };
            };
            readonly required: readonly ["pool", "spotPrice", "curveType", "curveDelta", "reinvestBuy", "reinvestSell", "lpFeeBp", "buysideCreatorRoyaltyBp"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsSell: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly seller: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller wallet";
                };
                readonly auctionHouseAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auction house Address. If not provided, will use default auction house.";
                };
                readonly tokenMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token mint address";
                };
                readonly tokenAccount: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token account";
                };
                readonly price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price in SOL";
                };
                readonly sellerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller referral wallet";
                };
                readonly expiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 means no expiry";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["seller", "tokenMint", "tokenAccount", "price"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsSellCancel: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly seller: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller wallet";
                };
                readonly auctionHouseAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auction house Address. If not provided, will use default auction house.";
                };
                readonly tokenMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token mint address";
                };
                readonly tokenAccount: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token account";
                };
                readonly price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price in SOL";
                };
                readonly sellerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller referral wallet";
                };
                readonly expiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 means no expiry";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["seller", "tokenMint", "tokenAccount", "price"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsSellChangePrice: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly seller: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller wallet";
                };
                readonly auctionHouseAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auction house Address. If not provided, will use default auction house.";
                };
                readonly tokenMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token mint address";
                };
                readonly tokenAccount: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token account";
                };
                readonly price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price in SOL";
                };
                readonly newPrice: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "New price in SOL";
                };
                readonly sellerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller referral wallet";
                };
                readonly expiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 means no expiry";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["seller", "tokenMint", "tokenAccount", "price", "newPrice"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsSellNow: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly buyer: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer wallet";
                };
                readonly seller: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller wallet";
                };
                readonly auctionHouseAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auction house Address. If not provided, will use default auction house.";
                };
                readonly tokenMint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token mint address";
                };
                readonly tokenATA: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Associate token account";
                };
                readonly price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price in SOL";
                };
                readonly newPrice: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "New price in SOL";
                };
                readonly sellerExpiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 means no expiry";
                };
                readonly buyerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer referral wallet";
                };
                readonly sellerReferral: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seller referral wallet";
                };
                readonly buyerExpiry: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timestamp in seconds in the future, 0 means no expiry";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["buyer", "seller", "tokenMint", "tokenATA", "price", "newPrice", "sellerExpiry"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstructionsWithdraw: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly buyer: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Buyer wallet";
                };
                readonly auctionHouseAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auction house Address. If not provided, will use default auction house.";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Amount in SOL";
                };
                readonly priorityFee: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Priority fee (in microlamports) to reprioritize the transaction against others";
                };
            };
            readonly required: readonly ["buyer", "amount"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly tx: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly txSigned: {
                    readonly properties: {
                        readonly type: {
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["Buffer"];
                            readonly description: "`Buffer`";
                        };
                        readonly data: {
                            readonly items: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["type", "data"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["tx"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetLaunchpadCollections: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 200, min 1, max 500";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly symbol: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly featured: {
                        readonly type: "boolean";
                    };
                    readonly image: {
                        readonly type: "string";
                    };
                    readonly price: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly size: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly launchDatetime: {
                        readonly type: "string";
                        readonly description: "Launch date time in simplified extended ISO format";
                    };
                    readonly chainId: {
                        readonly type: "string";
                        readonly description: "Stringified EVM chain id, or \"solana\" for SOL launches";
                    };
                    readonly contractAddress: {
                        readonly type: "string";
                        readonly description: "Candy machine id on SOL, contract address for EVM";
                    };
                };
                readonly required: readonly ["symbol", "name", "description", "image", "chainId"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMarketplacePopularCollections: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly timeRange: {
                    readonly type: "string";
                    readonly enum: readonly ["1h", "1d", "7d", "30d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The time range to return popular collections for. Default 1d.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 50, min 50, max 100";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly symbol: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly image: {
                        readonly type: "string";
                    };
                    readonly twitter: {
                        readonly type: "string";
                    };
                    readonly discord: {
                        readonly type: "string";
                    };
                    readonly website: {
                        readonly type: "string";
                    };
                    readonly isFlagged: {
                        readonly type: "boolean";
                    };
                    readonly flagMessage: {
                        readonly type: "string";
                    };
                    readonly categories: {
                        readonly items: {
                            readonly type: readonly ["string", "null"];
                        };
                        readonly type: "array";
                    };
                    readonly floorPrice: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly listedCount: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly avgPrice24hr: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly volumeAll: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly isBadged: {
                        readonly type: "boolean";
                    };
                    readonly hasCNFTs: {
                        readonly type: "boolean";
                    };
                    readonly isOcp: {
                        readonly type: "boolean";
                    };
                    readonly splTokens: {
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly type: "array";
                    };
                    readonly floorPriceWithFee: {
                        readonly properties: {
                            readonly floorPrice: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly floorListedNftType: {
                                readonly type: "string";
                                readonly enum: readonly ["M2", "MMM", "TENSOR_LISTING", "TENSOR_CNFT_LISTING", "TENSOR_AMM", "HADESWAP_AMM", "M3"];
                                readonly description: "`M2` `MMM` `TENSOR_LISTING` `TENSOR_CNFT_LISTING` `TENSOR_AMM` `HADESWAP_AMM` `M3`";
                            };
                        };
                        readonly required: readonly ["floorPrice", "floorListedNftType"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                };
                readonly required: readonly ["symbol", "name", "description", "image"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMmmPools: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly collectionSymbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The collection symbol to query the pools from. At least this or \"owner\" must be passed in";
                };
                readonly pools: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The pools key to query by.";
                };
                readonly owner: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The owner public key to query the pools created by. At least this or \"collectionSymbol\" must be passed in";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 100, min 1, max 500";
                };
                readonly field: {
                    readonly type: readonly ["string", "null"];
                    readonly enum: readonly ["0", "1", "2", "5"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort pools by field. 0: NONE (no sorting field, default), 1: ADDRESS (sort pools by pool address), 2: SPOT_PRICE (sort pools by pool spot price), 5: BUYSIDE_ADJUSTED_PRICE (sort pools by buyside_adjusted_price = spot_price - royalty_fee - lp_fee)";
                };
                readonly direction: {
                    readonly type: readonly ["string", "null"];
                    readonly enum: readonly ["0", "1", "2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort pools by field in specified directions. 0: NONE (no sorting direction, default to increasing order if field is specified), 1: DESC (descending), 2: INC (increasing)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly results: {
                    readonly items: {
                        readonly description: "Construct a type with the properties of T except for those in type K.";
                        readonly required: readonly ["buyOrdersAmount", "buysideCreatorRoyaltyBp", "buysidePaymentAmount", "collectionName", "collectionSellerFeeBasisPoints", "collectionSymbol", "cosigner", "curveDelta", "curveType", "expiry", "lpFeeBp", "lpFeeEarned", "poolKey", "poolOwner", "poolType", "reinvestFulfillBuy", "reinvestFulfillSell", "sellsideAssetAmount", "spotPrice", "updatedAt", "uuid"];
                        readonly type: "object";
                        readonly properties: {
                            readonly collectionName: {
                                readonly type: "string";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly required: readonly ["trait_type", "value"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                        readonly properties: {
                                            readonly trait_type: {
                                                readonly type: "string";
                                            };
                                            readonly value: {};
                                        };
                                    };
                                };
                            };
                            readonly expiry: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly collectionSymbol: {
                                readonly type: "string";
                            };
                            readonly spotPrice: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly curveType: {
                                readonly type: "string";
                                readonly enum: readonly ["linear", "exp", "xyk"];
                                readonly description: "`linear` `exp` `xyk`";
                            };
                            readonly curveDelta: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly reinvestFulfillBuy: {
                                readonly type: "boolean";
                            };
                            readonly reinvestFulfillSell: {
                                readonly type: "boolean";
                            };
                            readonly lpFeeBp: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly buysideCreatorRoyaltyBp: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly poolOwner: {
                                readonly type: "string";
                            };
                            readonly sellsideAssetAmount: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly buysidePaymentAmount: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly buyOrdersAmount: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly description: "quantity of buy orders";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly poolType: {
                                readonly description: "can be buy_sided, sell_sided, two_sided\n\n`buy_sided` `sell_sided` `two_sided` `invalid`";
                                readonly type: "string";
                                readonly enum: readonly ["buy_sided", "sell_sided", "two_sided", "invalid"];
                            };
                            readonly uuid: {
                                readonly type: "string";
                            };
                            readonly poolKey: {
                                readonly type: "string";
                            };
                            readonly cosigner: {
                                readonly type: "string";
                            };
                            readonly blockedAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly mints: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly collectionSellerFeeBasisPoints: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly lpFeeEarned: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly buyPriceTaker: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly isMIP1: {
                                readonly type: "boolean";
                            };
                            readonly isOCP: {
                                readonly type: "boolean";
                            };
                            readonly sharedEscrowInfo: {
                                readonly required: readonly ["sharedEscrowAddress", "sharedEscrowCount", "sharedEscrowBuysidePaymentAmount"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                                readonly properties: {
                                    readonly sharedEscrowAddress: {
                                        readonly type: "string";
                                    };
                                    readonly sharedEscrowCount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly sharedEscrowBuysidePaymentAmount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                            };
                            readonly updatedAt: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["results"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMmmPoolsBuyWalls: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly collectionSymbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The collection symbol to query the pools from. At least this or \"owner\" must be passed in";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 100, min 1, max 500";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly items: {
                readonly properties: {
                    readonly buysideAdjustedPrice: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly totalVolume: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly offersQuantity: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly diffUsersQuantity: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                };
                readonly required: readonly ["buysideAdjustedPrice", "totalVolume", "offersQuantity", "diffUsersQuantity"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly type: "array";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMmmTokenMintAddressPools: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly mint_address: {
                    readonly type: "string";
                    readonly examples: readonly ["6XkPLDtV2w17UUsyzah39PTBjZ9xTY8HokqRdWcmDhBa"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Mint address of the NFT";
                };
            };
            readonly required: readonly ["mint_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Total best offers to return, defaults 1, max 5. Best offer will come first";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly results: {
                    readonly items: {
                        readonly description: "Construct a type with the properties of T except for those in type K.";
                        readonly required: readonly ["buyOrdersAmount", "buysideCreatorRoyaltyBp", "buysidePaymentAmount", "collectionName", "collectionSellerFeeBasisPoints", "collectionSymbol", "cosigner", "curveDelta", "curveType", "expiry", "lpFeeBp", "lpFeeEarned", "poolKey", "poolOwner", "poolType", "reinvestFulfillBuy", "reinvestFulfillSell", "sellsideAssetAmount", "spotPrice", "updatedAt", "uuid"];
                        readonly type: "object";
                        readonly properties: {
                            readonly collectionName: {
                                readonly type: "string";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly required: readonly ["trait_type", "value"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                        readonly properties: {
                                            readonly trait_type: {
                                                readonly type: "string";
                                            };
                                            readonly value: {};
                                        };
                                    };
                                };
                            };
                            readonly expiry: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly collectionSymbol: {
                                readonly type: "string";
                            };
                            readonly spotPrice: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly curveType: {
                                readonly type: "string";
                                readonly enum: readonly ["linear", "exp", "xyk"];
                                readonly description: "`linear` `exp` `xyk`";
                            };
                            readonly curveDelta: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly reinvestFulfillBuy: {
                                readonly type: "boolean";
                            };
                            readonly reinvestFulfillSell: {
                                readonly type: "boolean";
                            };
                            readonly lpFeeBp: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly buysideCreatorRoyaltyBp: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly poolOwner: {
                                readonly type: "string";
                            };
                            readonly sellsideAssetAmount: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly buysidePaymentAmount: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly buyOrdersAmount: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly description: "quantity of buy orders";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly poolType: {
                                readonly description: "can be buy_sided, sell_sided, two_sided\n\n`buy_sided` `sell_sided` `two_sided` `invalid`";
                                readonly type: "string";
                                readonly enum: readonly ["buy_sided", "sell_sided", "two_sided", "invalid"];
                            };
                            readonly uuid: {
                                readonly type: "string";
                            };
                            readonly poolKey: {
                                readonly type: "string";
                            };
                            readonly cosigner: {
                                readonly type: "string";
                            };
                            readonly blockedAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly mints: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly collectionSellerFeeBasisPoints: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly lpFeeEarned: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly buyPriceTaker: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly isMIP1: {
                                readonly type: "boolean";
                            };
                            readonly isOCP: {
                                readonly type: "boolean";
                            };
                            readonly sharedEscrowInfo: {
                                readonly required: readonly ["sharedEscrowAddress", "sharedEscrowCount", "sharedEscrowBuysidePaymentAmount"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                                readonly properties: {
                                    readonly sharedEscrowAddress: {
                                        readonly type: "string";
                                    };
                                    readonly sharedEscrowCount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly sharedEscrowBuysidePaymentAmount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                            };
                            readonly updatedAt: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["results"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokensTokenMint: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_mint: {
                    readonly type: "string";
                    readonly examples: readonly ["4uvpqEL73361hRXCrHqBZQWeqfbKPQw55yKSFZvLQYTq"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Mint address of the token or asset ID of compressed NFT";
                };
            };
            readonly required: readonly ["token_mint"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly mintAddress: {
                    readonly type: "string";
                };
                readonly owner: {
                    readonly type: "string";
                };
                readonly supply: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly delegate: {
                    readonly type: "string";
                };
                readonly collection: {
                    readonly type: "string";
                };
                readonly collectionName: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly updateAuthority: {
                    readonly type: "string";
                };
                readonly primarySaleHappened: {
                    readonly type: "boolean";
                };
                readonly sellerFeeBasisPoints: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly image: {
                    readonly type: "string";
                };
                readonly tokenStandard: {
                    readonly enum: readonly [0, 1, 2, 3, 4, 5, -1];
                    readonly type: "number";
                    readonly description: "`1` `2` `3` `4` `5` `-1`";
                };
                readonly animationUrl: {
                    readonly type: "string";
                };
                readonly externalUrl: {
                    readonly type: "string";
                };
                readonly attributes: {
                    readonly items: {
                        readonly properties: {
                            readonly trait_type: {
                                readonly type: "string";
                            };
                            readonly value: {};
                        };
                        readonly required: readonly ["trait_type", "value"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly type: "array";
                };
                readonly properties: {
                    readonly properties: {
                        readonly files: {
                            readonly items: {
                                readonly properties: {
                                    readonly uri: {
                                        readonly type: "string";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                    };
                                    readonly cdn: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly required: readonly ["uri", "type"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly type: "array";
                        };
                        readonly category: {
                            readonly type: "string";
                        };
                        readonly creators: {
                            readonly items: {
                                readonly properties: {
                                    readonly address: {
                                        readonly type: "string";
                                    };
                                    readonly verified: {
                                        readonly type: "boolean";
                                    };
                                    readonly share: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly type: "object";
                                readonly description: "Make all properties in T optional";
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["files", "category", "creators"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly listStatus: {
                    readonly type: "string";
                    readonly enum: readonly ["listed", "unlisted"];
                    readonly description: "`listed` `unlisted`";
                };
                readonly price: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly tokenAddress: {
                    readonly type: "string";
                };
                readonly isCompressed: {
                    readonly type: "boolean";
                };
                readonly priceInfo: {
                    readonly properties: {
                        readonly solPrice: {
                            readonly properties: {
                                readonly rawAmount: {
                                    readonly type: "string";
                                };
                                readonly address: {
                                    readonly type: "string";
                                    readonly description: "The identifier of the amount.";
                                };
                                readonly decimals: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly description: "The number of decimals in the amount.";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly required: readonly ["rawAmount", "address", "decimals"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                        readonly splPrice: {
                            readonly properties: {
                                readonly rawAmount: {
                                    readonly type: "string";
                                };
                                readonly address: {
                                    readonly type: "string";
                                    readonly description: "The identifier of the amount.";
                                };
                                readonly decimals: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly description: "The number of decimals in the amount.";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly required: readonly ["rawAmount", "address", "decimals"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                    };
                    readonly required: readonly ["solPrice"];
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["mintAddress", "owner", "supply", "name", "updateAuthority", "primarySaleHappened", "sellerFeeBasisPoints", "image"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokensTokenMintActivities: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_mint: {
                    readonly type: "string";
                    readonly examples: readonly ["6XkPLDtV2w17UUsyzah39PTBjZ9xTY8HokqRdWcmDhBa"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Mint address of the token or asset ID of compressed NFT";
                };
            };
            readonly required: readonly ["token_mint"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 100, min 1, max 500";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                    };
                    readonly collection: {
                        readonly type: "string";
                        readonly deprecated: true;
                    };
                    readonly image: {
                        readonly type: "string";
                    };
                    readonly price: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly tokenMint: {
                        readonly type: "string";
                    };
                    readonly seller: {
                        readonly type: readonly ["string", "null"];
                    };
                    readonly sellerReferral: {
                        readonly type: "string";
                    };
                    readonly signature: {
                        readonly type: "string";
                    };
                    readonly source: {
                        readonly type: "string";
                    };
                    readonly collectionSymbol: {
                        readonly type: "string";
                    };
                    readonly slot: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly blockTime: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly buyer: {
                        readonly type: readonly ["string", "null"];
                    };
                    readonly buyerReferral: {
                        readonly type: "string";
                    };
                    readonly priceInfo: {
                        readonly properties: {
                            readonly solPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly splPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly required: readonly ["solPrice"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                };
                readonly required: readonly ["type", "price", "signature", "source", "slot", "blockTime"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokensTokenMintListings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_mint: {
                    readonly type: "string";
                    readonly examples: readonly ["6XkPLDtV2w17UUsyzah39PTBjZ9xTY8HokqRdWcmDhBa"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Mint address of the token or asset ID of compressed NFT";
                };
            };
            readonly required: readonly ["token_mint"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly listingAggMode: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "True to return aggregated marketplace listings, false to return just Magic Eden listings. Defaults to false.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly price: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly tokenAddress: {
                        readonly type: "string";
                    };
                    readonly pdaAddress: {
                        readonly type: "string";
                    };
                    readonly auctionHouse: {
                        readonly type: "string";
                    };
                    readonly tokenMint: {
                        readonly type: "string";
                    };
                    readonly seller: {
                        readonly type: "string";
                    };
                    readonly sellerReferral: {
                        readonly type: "string";
                    };
                    readonly tokenSize: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly rarity: {
                        readonly properties: {
                            readonly howrare: {
                                readonly properties: {
                                    readonly rank: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rank"];
                                readonly type: "object";
                            };
                            readonly moonrank: {
                                readonly properties: {
                                    readonly crawl: {
                                        readonly properties: {
                                            readonly complete: {
                                                readonly type: "boolean";
                                                readonly description: "Flag for if Moonrank has fully crawled the collection. If this is false,\nthen it means the rarity values are incomplete and should not be used.";
                                            };
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly absolute_rarity: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly rank: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["crawl", "absolute_rarity", "rank"];
                                readonly type: "object";
                            };
                            readonly merarity: {
                                readonly properties: {
                                    readonly tokenKey: {
                                        readonly type: "string";
                                    };
                                    readonly score: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly rank: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly totalSupply: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly attributeWithCounts: {
                                        readonly items: {
                                            readonly properties: {
                                                readonly traitType: {
                                                    readonly type: "string";
                                                };
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                                readonly count: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly rarity: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly topBidValue: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly floorAskPrice: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly onSaleCount: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly required: readonly ["traitType", "value"];
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly required: readonly ["tokenKey", "score"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly extra: {
                        readonly properties: {
                            readonly img: {
                                readonly type: "string";
                            };
                        };
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly expiry: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly listingSource: {
                        readonly type: "string";
                        readonly enum: readonly ["M2", "MMM", "TENSOR_LISTING", "TENSOR_CNFT_LISTING", "TENSOR_AMM", "HADESWAP_AMM", "M3"];
                        readonly description: "`M2` `MMM` `TENSOR_LISTING` `TENSOR_CNFT_LISTING` `TENSOR_AMM` `HADESWAP_AMM` `M3`";
                    };
                    readonly priceInfo: {
                        readonly properties: {
                            readonly solPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly splPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly required: readonly ["solPrice"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly token: {
                        readonly properties: {
                            readonly mintAddress: {
                                readonly type: "string";
                            };
                            readonly owner: {
                                readonly type: "string";
                            };
                            readonly supply: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly delegate: {
                                readonly type: "string";
                            };
                            readonly collection: {
                                readonly type: "string";
                            };
                            readonly collectionName: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly updateAuthority: {
                                readonly type: "string";
                            };
                            readonly primarySaleHappened: {
                                readonly type: "boolean";
                            };
                            readonly sellerFeeBasisPoints: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly image: {
                                readonly type: "string";
                            };
                            readonly tokenStandard: {
                                readonly enum: readonly [0, 1, 2, 3, 4, 5, -1];
                                readonly type: "number";
                                readonly description: "`1` `2` `3` `4` `5` `-1`";
                            };
                            readonly animationUrl: {
                                readonly type: "string";
                            };
                            readonly externalUrl: {
                                readonly type: "string";
                            };
                            readonly attributes: {
                                readonly items: {
                                    readonly properties: {
                                        readonly trait_type: {
                                            readonly type: "string";
                                        };
                                        readonly value: {};
                                    };
                                    readonly required: readonly ["trait_type", "value"];
                                    readonly type: "object";
                                    readonly additionalProperties: false;
                                };
                                readonly type: "array";
                            };
                            readonly properties: {
                                readonly properties: {
                                    readonly files: {
                                        readonly items: {
                                            readonly properties: {
                                                readonly uri: {
                                                    readonly type: "string";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                };
                                                readonly cdn: {
                                                    readonly type: "boolean";
                                                };
                                            };
                                            readonly required: readonly ["uri", "type"];
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                        readonly type: "array";
                                    };
                                    readonly category: {
                                        readonly type: "string";
                                    };
                                    readonly creators: {
                                        readonly items: {
                                            readonly properties: {
                                                readonly address: {
                                                    readonly type: "string";
                                                };
                                                readonly verified: {
                                                    readonly type: "boolean";
                                                };
                                                readonly share: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly type: "object";
                                            readonly description: "Make all properties in T optional";
                                        };
                                        readonly type: "array";
                                    };
                                };
                                readonly required: readonly ["files", "category", "creators"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly listStatus: {
                                readonly type: "string";
                                readonly enum: readonly ["listed", "unlisted"];
                                readonly description: "`listed` `unlisted`";
                            };
                            readonly price: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly tokenAddress: {
                                readonly type: "string";
                            };
                            readonly isCompressed: {
                                readonly type: "boolean";
                            };
                            readonly priceInfo: {
                                readonly properties: {
                                    readonly solPrice: {
                                        readonly properties: {
                                            readonly rawAmount: {
                                                readonly type: "string";
                                            };
                                            readonly address: {
                                                readonly type: "string";
                                                readonly description: "The identifier of the amount.";
                                            };
                                            readonly decimals: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The number of decimals in the amount.";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly required: readonly ["rawAmount", "address", "decimals"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly splPrice: {
                                        readonly properties: {
                                            readonly rawAmount: {
                                                readonly type: "string";
                                            };
                                            readonly address: {
                                                readonly type: "string";
                                                readonly description: "The identifier of the amount.";
                                            };
                                            readonly decimals: {
                                                readonly type: "number";
                                                readonly format: "double";
                                                readonly description: "The number of decimals in the amount.";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly required: readonly ["rawAmount", "address", "decimals"];
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly required: readonly ["solPrice"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly required: readonly ["mintAddress", "owner", "supply", "name", "updateAuthority", "primarySaleHappened", "sellerFeeBasisPoints", "image"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                };
                readonly required: readonly ["price", "tokenAddress", "pdaAddress", "auctionHouse", "tokenMint", "seller", "tokenSize", "rarity", "expiry", "listingSource", "token"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokensTokenMintOffersReceived: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_mint: {
                    readonly type: "string";
                    readonly examples: readonly ["7ThMgi8Qh2XEAYBvnrEHNfaTNnHyqQCVH5XbFgGgu6bn"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Mint address of the token";
                };
            };
            readonly required: readonly ["token_mint"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly min_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter offers that are less than this price";
                };
                readonly max_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter offers that are more than this price";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 100, min 1, max 500";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["updatedAt", "bidAmount"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to sort the offers received, default 'updatedAt'";
                };
                readonly sort_direction: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The direction returned elements should be sorted in, default 'desc'";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly pdaAddress: {
                        readonly type: "string";
                    };
                    readonly tokenMint: {
                        readonly type: "string";
                    };
                    readonly auctionHouse: {
                        readonly type: "string";
                    };
                    readonly buyer: {
                        readonly type: "string";
                    };
                    readonly buyerReferral: {
                        readonly type: "string";
                    };
                    readonly tokenSize: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly price: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly expiry: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                };
                readonly required: readonly ["pdaAddress", "tokenMint", "auctionHouse", "buyer", "tokenSize", "price", "expiry"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletsWalletAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet_address: {
                    readonly type: "string";
                    readonly examples: readonly ["4wejSnr97csngztZ5SU7A6iZRXJD7B3Y1R1koCQ5NjmD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "wallet address.";
                };
            };
            readonly required: readonly ["wallet_address"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly displayName: {
                    readonly type: "string";
                };
                readonly avatar: {
                    readonly type: "string";
                };
            };
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletsWalletAddressActivities: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet_address: {
                    readonly type: "string";
                    readonly examples: readonly ["4wejSnr97csngztZ5SU7A6iZRXJD7B3Y1R1koCQ5NjmD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "wallet address.";
                };
            };
            readonly required: readonly ["wallet_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 100, min 1, max 500";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                    };
                    readonly collection: {
                        readonly type: "string";
                        readonly deprecated: true;
                    };
                    readonly image: {
                        readonly type: "string";
                    };
                    readonly price: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly tokenMint: {
                        readonly type: "string";
                    };
                    readonly seller: {
                        readonly type: readonly ["string", "null"];
                    };
                    readonly sellerReferral: {
                        readonly type: "string";
                    };
                    readonly signature: {
                        readonly type: "string";
                    };
                    readonly source: {
                        readonly type: "string";
                    };
                    readonly collectionSymbol: {
                        readonly type: "string";
                    };
                    readonly slot: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly blockTime: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly buyer: {
                        readonly type: readonly ["string", "null"];
                    };
                    readonly buyerReferral: {
                        readonly type: "string";
                    };
                    readonly priceInfo: {
                        readonly properties: {
                            readonly solPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly splPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly required: readonly ["solPrice"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                };
                readonly required: readonly ["type", "price", "signature", "source", "slot", "blockTime"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletsWalletAddressEscrowBalance: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet_address: {
                    readonly type: "string";
                    readonly examples: readonly ["4wejSnr97csngztZ5SU7A6iZRXJD7B3Y1R1koCQ5NjmD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "wallet address.";
                };
            };
            readonly required: readonly ["wallet_address"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly buyerEscrow: {
                    readonly type: "string";
                };
                readonly balance: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
            };
            readonly required: readonly ["buyerEscrow", "balance"];
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletsWalletAddressOffersMade: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet_address: {
                    readonly type: "string";
                    readonly examples: readonly ["4wejSnr97csngztZ5SU7A6iZRXJD7B3Y1R1koCQ5NjmD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "wallet address.";
                };
            };
            readonly required: readonly ["wallet_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly min_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter offers that are less than this price";
                };
                readonly max_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter offers that are more than this price";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 100, max 500";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["updatedAt", "bidAmount"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to sort the offers made, default 'bidAmount'";
                };
                readonly sort_direction: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The direction returned elements should be sorted in, default 'desc'";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly pdaAddress: {
                        readonly type: "string";
                    };
                    readonly tokenMint: {
                        readonly type: "string";
                    };
                    readonly auctionHouse: {
                        readonly type: "string";
                    };
                    readonly buyer: {
                        readonly type: "string";
                    };
                    readonly buyerReferral: {
                        readonly type: "string";
                    };
                    readonly tokenSize: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly price: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly expiry: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                };
                readonly required: readonly ["pdaAddress", "tokenMint", "auctionHouse", "buyer", "tokenSize", "price", "expiry"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletsWalletAddressOffersReceived: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet_address: {
                    readonly type: "string";
                    readonly examples: readonly ["4wejSnr97csngztZ5SU7A6iZRXJD7B3Y1R1koCQ5NjmD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "wallet address.";
                };
            };
            readonly required: readonly ["wallet_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly min_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter offers that are less than this price";
                };
                readonly max_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter offers that are more than this price";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["updatedAt", "bidAmount"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to sort the offers received, default 'updatedAt'";
                };
                readonly sort_direction: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The direction returned elements should be sorted in, default 'desc'";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 100, min 1, max 500";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly pdaAddress: {
                        readonly type: "string";
                    };
                    readonly tokenMint: {
                        readonly type: "string";
                    };
                    readonly auctionHouse: {
                        readonly type: "string";
                    };
                    readonly buyer: {
                        readonly type: "string";
                    };
                    readonly buyerReferral: {
                        readonly type: "string";
                    };
                    readonly tokenSize: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly price: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly expiry: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                };
                readonly required: readonly ["pdaAddress", "tokenMint", "auctionHouse", "buyer", "tokenSize", "price", "expiry"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletsWalletAddressTokens: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet_address: {
                    readonly type: "string";
                    readonly examples: readonly ["4wejSnr97csngztZ5SU7A6iZRXJD7B3Y1R1koCQ5NjmD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "wallet address.";
                };
            };
            readonly required: readonly ["wallet_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly collection_symbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter tokens that are part of this collection symbol, max length of 255 characters";
                };
                readonly mcc_address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter tokens that are part of this Metaplex Certified Collection address, max length of 48 characters";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 100, min 1, max 500";
                };
                readonly min_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings that are less than this price";
                };
                readonly max_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings that are more than this price";
                };
                readonly attributes: {
                    readonly items: {
                        readonly items: {
                            readonly properties: {
                                readonly traitType: {
                                    readonly type: "string";
                                };
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["traitType", "value"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                        readonly type: "array";
                    };
                    readonly type: "array";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Represents a filtering mechanism where the elements within each inner array are logically ORed, and the resulting arrays are ANDed together at the top level. Each inner array consists of objects with two properties: traitType (a string) and value (a string). For example: [[{\"traitType\":\"trait1\", \"value\":\"value1\"},{\"traitType\":\"trait1\", \"value\":\"value2\"}]] would return tokens that have \"value1\" OR \"value2\" for \"trait1\".";
                };
                readonly listStatus: {
                    readonly type: "string";
                    readonly enum: readonly ["listed", "unlisted", "both"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determines what type of tokens to return, default both";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["updatedAt", "listPrice"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to sort the tokens, default 'updatedAt'";
                };
                readonly sort_direction: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The direction returned elements should be sorted in, default 'desc'";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly mintAddress: {
                        readonly type: "string";
                    };
                    readonly owner: {
                        readonly type: "string";
                    };
                    readonly supply: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly delegate: {
                        readonly type: "string";
                    };
                    readonly collection: {
                        readonly type: "string";
                    };
                    readonly collectionName: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly updateAuthority: {
                        readonly type: "string";
                    };
                    readonly primarySaleHappened: {
                        readonly type: "boolean";
                    };
                    readonly sellerFeeBasisPoints: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly image: {
                        readonly type: "string";
                    };
                    readonly tokenStandard: {
                        readonly enum: readonly [0, 1, 2, 3, 4, 5, -1];
                        readonly type: "number";
                        readonly description: "`1` `2` `3` `4` `5` `-1`";
                    };
                    readonly animationUrl: {
                        readonly type: "string";
                    };
                    readonly externalUrl: {
                        readonly type: "string";
                    };
                    readonly attributes: {
                        readonly items: {
                            readonly properties: {
                                readonly trait_type: {
                                    readonly type: "string";
                                };
                                readonly value: {};
                            };
                            readonly required: readonly ["trait_type", "value"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                        readonly type: "array";
                    };
                    readonly properties: {
                        readonly properties: {
                            readonly files: {
                                readonly items: {
                                    readonly properties: {
                                        readonly uri: {
                                            readonly type: "string";
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly cdn: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly required: readonly ["uri", "type"];
                                    readonly type: "object";
                                    readonly additionalProperties: false;
                                };
                                readonly type: "array";
                            };
                            readonly category: {
                                readonly type: "string";
                            };
                            readonly creators: {
                                readonly items: {
                                    readonly properties: {
                                        readonly address: {
                                            readonly type: "string";
                                        };
                                        readonly verified: {
                                            readonly type: "boolean";
                                        };
                                        readonly share: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                    };
                                    readonly type: "object";
                                    readonly description: "Make all properties in T optional";
                                };
                                readonly type: "array";
                            };
                        };
                        readonly required: readonly ["files", "category", "creators"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                    readonly listStatus: {
                        readonly type: "string";
                        readonly enum: readonly ["listed", "unlisted"];
                        readonly description: "`listed` `unlisted`";
                    };
                    readonly price: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly tokenAddress: {
                        readonly type: "string";
                    };
                    readonly isCompressed: {
                        readonly type: "boolean";
                    };
                    readonly priceInfo: {
                        readonly properties: {
                            readonly solPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly splPrice: {
                                readonly properties: {
                                    readonly rawAmount: {
                                        readonly type: "string";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                        readonly description: "The identifier of the amount.";
                                    };
                                    readonly decimals: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly description: "The number of decimals in the amount.";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly required: readonly ["rawAmount", "address", "decimals"];
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                        };
                        readonly required: readonly ["solPrice"];
                        readonly type: "object";
                        readonly additionalProperties: false;
                    };
                };
                readonly required: readonly ["mintAddress", "owner", "supply", "name", "updateAuthority", "primarySaleHappened", "sellerFeeBasisPoints", "image"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostCollectionsBatchListings: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly collections: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly symbol: {
                            readonly type: "string";
                            readonly description: "collection symbol";
                            readonly examples: readonly ["btest"];
                        };
                        readonly mcc: {
                            readonly type: "string";
                            readonly description: "Metaplex Certified Collection address";
                            readonly examples: readonly ["your_mcc_value_here"];
                        };
                    };
                    readonly required: readonly ["symbol"];
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of items to skip, default 0, min 0";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numbers of items to return, default 20, min 1, max 100";
                };
                readonly min_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings that are less than this price";
                };
                readonly max_price: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings that are more than this price";
                };
                readonly attributes: {
                    readonly items: {
                        readonly items: {
                            readonly properties: {
                                readonly traitType: {
                                    readonly type: "string";
                                };
                                readonly value: {
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["traitType", "value"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                        readonly type: "array";
                    };
                    readonly type: "array";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Represents a filtering mechanism where the elements within each inner array are logically ORed, and the resulting arrays are ANDed together at the top level. Each inner array consists of objects with two properties: traitType (a string) and value (a string). For example: [[{\"traitType\":\"trait1\", \"value\":\"value1\"},{\"traitType\":\"trait1\", \"value\":\"value2\"}]] would return listings that have \"value1\" OR \"value2\" for \"trait1\".";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["updatedAt", "listPrice"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to sort the listings, default 'listPrice'";
                };
                readonly sort_direction: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The direction returned elements should be sorted in, default 'asc'";
                };
                readonly listingAggMode: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "True to return aggregated marketplace listings, false to return just Magic Eden listings.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly result: {
                        readonly items: {
                            readonly properties: {
                                readonly price: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly tokenAddress: {
                                    readonly type: "string";
                                };
                                readonly pdaAddress: {
                                    readonly type: "string";
                                };
                                readonly auctionHouse: {
                                    readonly type: "string";
                                };
                                readonly tokenMint: {
                                    readonly type: "string";
                                };
                                readonly seller: {
                                    readonly type: "string";
                                };
                                readonly sellerReferral: {
                                    readonly type: "string";
                                };
                                readonly tokenSize: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly rarity: {
                                    readonly properties: {
                                        readonly howrare: {
                                            readonly properties: {
                                                readonly rank: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly required: readonly ["rank"];
                                            readonly type: "object";
                                        };
                                        readonly moonrank: {
                                            readonly properties: {
                                                readonly crawl: {
                                                    readonly properties: {
                                                        readonly complete: {
                                                            readonly type: "boolean";
                                                            readonly description: "Flag for if Moonrank has fully crawled the collection. If this is false,\nthen it means the rarity values are incomplete and should not be used.";
                                                        };
                                                        readonly id: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly type: "object";
                                                    readonly additionalProperties: false;
                                                };
                                                readonly absolute_rarity: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly rank: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly required: readonly ["crawl", "absolute_rarity", "rank"];
                                            readonly type: "object";
                                        };
                                        readonly merarity: {
                                            readonly properties: {
                                                readonly tokenKey: {
                                                    readonly type: "string";
                                                };
                                                readonly score: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly rank: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly totalSupply: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly attributeWithCounts: {
                                                    readonly items: {
                                                        readonly properties: {
                                                            readonly traitType: {
                                                                readonly type: "string";
                                                            };
                                                            readonly value: {
                                                                readonly type: "string";
                                                            };
                                                            readonly count: {
                                                                readonly type: "number";
                                                                readonly format: "double";
                                                                readonly minimum: -1.7976931348623157e+308;
                                                                readonly maximum: 1.7976931348623157e+308;
                                                            };
                                                            readonly rarity: {
                                                                readonly type: "number";
                                                                readonly format: "double";
                                                                readonly minimum: -1.7976931348623157e+308;
                                                                readonly maximum: 1.7976931348623157e+308;
                                                            };
                                                            readonly topBidValue: {
                                                                readonly type: "number";
                                                                readonly format: "double";
                                                                readonly minimum: -1.7976931348623157e+308;
                                                                readonly maximum: 1.7976931348623157e+308;
                                                            };
                                                            readonly floorAskPrice: {
                                                                readonly type: "number";
                                                                readonly format: "double";
                                                                readonly minimum: -1.7976931348623157e+308;
                                                                readonly maximum: 1.7976931348623157e+308;
                                                            };
                                                            readonly onSaleCount: {
                                                                readonly type: "number";
                                                                readonly format: "double";
                                                                readonly minimum: -1.7976931348623157e+308;
                                                                readonly maximum: 1.7976931348623157e+308;
                                                            };
                                                        };
                                                        readonly required: readonly ["traitType", "value"];
                                                        readonly type: "object";
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly type: "array";
                                                };
                                            };
                                            readonly required: readonly ["tokenKey", "score"];
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly type: "object";
                                    readonly additionalProperties: false;
                                };
                                readonly extra: {
                                    readonly properties: {
                                        readonly img: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly type: "object";
                                    readonly additionalProperties: false;
                                };
                                readonly expiry: {
                                    readonly type: "number";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly listingSource: {
                                    readonly type: "string";
                                    readonly enum: readonly ["M2", "MMM", "TENSOR_LISTING", "TENSOR_CNFT_LISTING", "TENSOR_AMM", "HADESWAP_AMM", "M3"];
                                    readonly description: "`M2` `MMM` `TENSOR_LISTING` `TENSOR_CNFT_LISTING` `TENSOR_AMM` `HADESWAP_AMM` `M3`";
                                };
                                readonly priceInfo: {
                                    readonly properties: {
                                        readonly solPrice: {
                                            readonly properties: {
                                                readonly rawAmount: {
                                                    readonly type: "string";
                                                };
                                                readonly address: {
                                                    readonly type: "string";
                                                    readonly description: "The identifier of the amount.";
                                                };
                                                readonly decimals: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly description: "The number of decimals in the amount.";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly required: readonly ["rawAmount", "address", "decimals"];
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                        readonly splPrice: {
                                            readonly properties: {
                                                readonly rawAmount: {
                                                    readonly type: "string";
                                                };
                                                readonly address: {
                                                    readonly type: "string";
                                                    readonly description: "The identifier of the amount.";
                                                };
                                                readonly decimals: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly description: "The number of decimals in the amount.";
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly required: readonly ["rawAmount", "address", "decimals"];
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: readonly ["solPrice"];
                                    readonly type: "object";
                                    readonly additionalProperties: false;
                                };
                                readonly token: {
                                    readonly properties: {
                                        readonly mintAddress: {
                                            readonly type: "string";
                                        };
                                        readonly owner: {
                                            readonly type: "string";
                                        };
                                        readonly supply: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly delegate: {
                                            readonly type: "string";
                                        };
                                        readonly collection: {
                                            readonly type: "string";
                                        };
                                        readonly collectionName: {
                                            readonly type: "string";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly updateAuthority: {
                                            readonly type: "string";
                                        };
                                        readonly primarySaleHappened: {
                                            readonly type: "boolean";
                                        };
                                        readonly sellerFeeBasisPoints: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly image: {
                                            readonly type: "string";
                                        };
                                        readonly tokenStandard: {
                                            readonly enum: readonly [0, 1, 2, 3, 4, 5, -1];
                                            readonly type: "number";
                                            readonly description: "`1` `2` `3` `4` `5` `-1`";
                                        };
                                        readonly animationUrl: {
                                            readonly type: "string";
                                        };
                                        readonly externalUrl: {
                                            readonly type: "string";
                                        };
                                        readonly attributes: {
                                            readonly items: {
                                                readonly properties: {
                                                    readonly trait_type: {
                                                        readonly type: "string";
                                                    };
                                                    readonly value: {};
                                                };
                                                readonly required: readonly ["trait_type", "value"];
                                                readonly type: "object";
                                                readonly additionalProperties: false;
                                            };
                                            readonly type: "array";
                                        };
                                        readonly properties: {
                                            readonly properties: {
                                                readonly files: {
                                                    readonly items: {
                                                        readonly properties: {
                                                            readonly uri: {
                                                                readonly type: "string";
                                                            };
                                                            readonly type: {
                                                                readonly type: "string";
                                                            };
                                                            readonly cdn: {
                                                                readonly type: "boolean";
                                                            };
                                                        };
                                                        readonly required: readonly ["uri", "type"];
                                                        readonly type: "object";
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly type: "array";
                                                };
                                                readonly category: {
                                                    readonly type: "string";
                                                };
                                                readonly creators: {
                                                    readonly items: {
                                                        readonly properties: {
                                                            readonly address: {
                                                                readonly type: "string";
                                                            };
                                                            readonly verified: {
                                                                readonly type: "boolean";
                                                            };
                                                            readonly share: {
                                                                readonly type: "number";
                                                                readonly format: "double";
                                                                readonly minimum: -1.7976931348623157e+308;
                                                                readonly maximum: 1.7976931348623157e+308;
                                                            };
                                                        };
                                                        readonly type: "object";
                                                        readonly description: "Make all properties in T optional";
                                                    };
                                                    readonly type: "array";
                                                };
                                            };
                                            readonly required: readonly ["files", "category", "creators"];
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                        readonly listStatus: {
                                            readonly type: "string";
                                            readonly enum: readonly ["listed", "unlisted"];
                                            readonly description: "`listed` `unlisted`";
                                        };
                                        readonly price: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly tokenAddress: {
                                            readonly type: "string";
                                        };
                                        readonly isCompressed: {
                                            readonly type: "boolean";
                                        };
                                        readonly priceInfo: {
                                            readonly properties: {
                                                readonly solPrice: {
                                                    readonly properties: {
                                                        readonly rawAmount: {
                                                            readonly type: "string";
                                                        };
                                                        readonly address: {
                                                            readonly type: "string";
                                                            readonly description: "The identifier of the amount.";
                                                        };
                                                        readonly decimals: {
                                                            readonly type: "number";
                                                            readonly format: "double";
                                                            readonly description: "The number of decimals in the amount.";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                    };
                                                    readonly required: readonly ["rawAmount", "address", "decimals"];
                                                    readonly type: "object";
                                                    readonly additionalProperties: false;
                                                };
                                                readonly splPrice: {
                                                    readonly properties: {
                                                        readonly rawAmount: {
                                                            readonly type: "string";
                                                        };
                                                        readonly address: {
                                                            readonly type: "string";
                                                            readonly description: "The identifier of the amount.";
                                                        };
                                                        readonly decimals: {
                                                            readonly type: "number";
                                                            readonly format: "double";
                                                            readonly description: "The number of decimals in the amount.";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                    };
                                                    readonly required: readonly ["rawAmount", "address", "decimals"];
                                                    readonly type: "object";
                                                    readonly additionalProperties: false;
                                                };
                                            };
                                            readonly required: readonly ["solPrice"];
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: readonly ["mintAddress", "owner", "supply", "name", "updateAuthority", "primarySaleHappened", "sellerFeeBasisPoints", "image"];
                                    readonly type: "object";
                                    readonly additionalProperties: false;
                                };
                            };
                            readonly required: readonly ["price", "tokenAddress", "pdaAddress", "auctionHouse", "tokenMint", "seller", "tokenSize", "rarity", "expiry", "listingSource", "token"];
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                        readonly type: "array";
                    };
                    readonly nextCursor: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["result", "nextCursor"];
                readonly type: "object";
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetCollections, GetCollectionsCollectionsymbolAttributes, GetCollectionsSymbolActivities, GetCollectionsSymbolHolderStats, GetCollectionsSymbolLeaderboard, GetCollectionsSymbolListings, GetCollectionsSymbolStats, GetInstructionsBuy, GetInstructionsBuyCancel, GetInstructionsBuyChangePrice, GetInstructionsBuyNow, GetInstructionsBuyNowTransferNft, GetInstructionsDeposit, GetInstructionsMmmCreatePool, GetInstructionsMmmSolClosePool, GetInstructionsMmmSolDepositBuy, GetInstructionsMmmSolFulfillBuy, GetInstructionsMmmSolFulfillSell, GetInstructionsMmmSolWithdrawBuy, GetInstructionsMmmUpdatePool, GetInstructionsSell, GetInstructionsSellCancel, GetInstructionsSellChangePrice, GetInstructionsSellNow, GetInstructionsWithdraw, GetLaunchpadCollections, GetMarketplacePopularCollections, GetMmmPools, GetMmmPoolsBuyWalls, GetMmmTokenMintAddressPools, GetTokensTokenMint, GetTokensTokenMintActivities, GetTokensTokenMintListings, GetTokensTokenMintOffersReceived, GetWalletsWalletAddress, GetWalletsWalletAddressActivities, GetWalletsWalletAddressEscrowBalance, GetWalletsWalletAddressOffersMade, GetWalletsWalletAddressOffersReceived, GetWalletsWalletAddressTokens, PostCollectionsBatchListings };
