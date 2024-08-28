export interface PriceQuote {
    price?: number;
    volume_24h?: number;
    volume_24h_change_24h?: number;
    market_cap?: number;
    market_cap_change_24h?: number;
    percent_change_1h?: number;
    percent_change_12h?: number;
    percent_change_24h?: number;
    percent_change_7d?: number;
    percent_change_30d?: number;
    percent_change_1y?: number;
    ath_pric?: number;
    ath_date?: string;
    percent_from_price_ath?: number;
}

export interface ExchangeQuote {
    reported_volume_24h?: number;
    adjusted_volume_24h?: number;
    reported_volume_7d?: number;
    adjusted_volume_7d?: number;
    reported_volume_30d?: number;
    adjusted_volume_30d?: number;
}

export interface Fiat {
    name?: string;
    symbol?: string;
}

// COIN GECKO
export interface ExchangeRates {
    rates?: {
        [key: string]: number
    };
}

// EXCHANGE RATE API
export interface ExchangeRatesAPI {
    success?: boolean;
    base?: string; // ex. "USD"
    date?: string; // "mm-dd-yyyy"
    data: {
        [key: string]: number
    };
}

export interface Ticker {
    id?: string;
    name?: string;
    symbol?: string;
    rank?: number;
    circulating_supply?: number;
    total_supply?: number;
    max_supply?: number;
    beta_value?: number;
    last_updated?: string;
    quotes?: {
        [key: string]: PriceQuote
    };
}

export interface Exchanges {
    id?: string;
    name?: string;
    description?: string;
    active?: boolean;
    website_status?: boolean;
    api_status?: boolean;
    message?: string;
    links?: {
        [key: string]: string[]
    };
    markets_data_fetched?: boolean;
    adjusted_rank?: number;
    reported_rank?: number;
    currencies?: number;
    markets?: number;
    fiats?: Fiat[];
    quotes?: {
        [key: string]: ExchangeQuote
    };
    last_updated?: string;
}

export interface TradingPairQuote {
    price?: number;
    volume_24h?: number;
}

export interface TradingPairs {
    pair?: string;
    base_currency_id?: string;
    base_currency_name?: string;
    quote_currency_id?: string;
    quote_currency_name?: string;
    market_url?: string;
    category?: string;
    fee_type?: string;
    outlier?: boolean;
    reported_volume_24h_share?: number;
    quotes?: {
        [key: string]: TradingPairQuote
    };
    last_updated?: string;
}

export interface Global {
    market_cap_usd?: number;
    volume_24h_usd?: number;
    bitcoin_dominance_percentage?: number;
    cryptocurrencies_number?: number;
    market_cap_ath_value?: number;
    market_cap_ath_date?: string;
    volume_24h_ath_value?: number;
    volume_24h_ath_date?: string;
    volume_24h_percent_from_ath?: number;
    volume_24h_percent_to_ath?: number;
    market_cap_change_24h?: number;
    volume_24h_change_24h?: number;
    last_updated?: number;
}

export interface OHLCVCoinPaprika {
    time_open?: string;
    time_close?: string;
    low?: number;
    open?: number;
    close?: number;
    high?: number;
    volume?: number;
    market_cap?: number;
}

export interface MarketChart {
    [key: string]: number[][];
}

export interface PortfolioItem {
    crypto_icon?: string;
    name?: string;
    numcoins?: string;
    percent_change_24h?: string;
    percent_color?: string;
    price?: string;
    pricetotal?: string;
    symbol?: string;
    defaultcurrency?: string;
}

export interface OHLCV {
    timestamp?: string;
    low?: string;
    open?: string;
    close?: string;
    high?: string;
    volume?: string;
}

export interface ExchangeMarkets {
    exchange?: string;
    market?: string;
    base?: string;
    quote?: string;
}

export interface CoinList {
    id?: string;
    symbol?: string;
    name?: string;
}

export interface CustomTagData {
    path?: string;
    symbol?: string;
    id?: string;
}

export interface Tags {
    id?: string;
    name?: string;
    description?: string;
    type?: string;
    coin_counter?: number;
    ico_counter?: number;
    coins?: string[];
    icos?: string[];
    customtags?: CustomTagData[];
}

export interface Team {
    id?: string;
    name?: string;
    position?: string;
}

export interface LinkStats {
    contributors?: number;
    subscribers?: number;
    stars?: number;
    followers?: number;
}

export interface LinksExtended {
    url?: string;
    type?: string;
    stats?: LinkStats;
}

export interface Whitepaper {
    link?: string;
    thumbnail?: string;
}

export interface Links {
    [key: string]: string[];
}

export interface Coins {
    id?: string;
    name?: string;
    symbol?: string;
    rank?: number;
    is_new?: boolean;
    is_active?: boolean;
    type?: string;
    tags?: Tags[];
    team?: Team[];
    description?: string;
    message?: string;
    open_source?: boolean;
    started_at?: string;
    development_status?: string;
    hardware_wallet?: boolean;
    proof_type?: string;
    org_structure?: string;
    hash_algorithm?: string;
    links?: Links;
    links_extended?: LinksExtended[];
    whitepaper?: Whitepaper;
    first_data_at?: string;
    last_data_at?: string;
}

/**
 * Crypto Control API
 */

type ArticleCategory = 'Mining' | 'General' | 'Analysis' | 'Exchanges' | 'Blockchain' | 'Government' | 'ICO';
export type FeedTypes = 'article' | 'reddit' | 'tweet';

interface ArticleSource {
    _id?: string;
    name?: string;
    url?: string;
    favicon?: string;
}

interface CoinControlCoins {
    _id?: string;
    name?: string;
    slug?: string;
    tradingSymbol?: string;
}

interface SimilarArticles {
    _id?: string;
    title?: string;
    publishedAt?: string;
    sourceDomain?: string;
    url?: string;
}

export type CryptoControlFeed = {
    [key in FeedTypes]: Article | Reddit | Tweet;
} & {
    type?: FeedTypes;
};

export interface Article {
    _id?: string;
    hotness?: number;
    activityHotness?: number;
    primaryCategory?: ArticleCategory;
    words?: number;
    similarArticles?: SimilarArticles[];
    coins?: CoinControlCoins[];
    description?: string;
    publishedAt?: string;
    title?: string;
    url?: string;
    source?: ArticleSource;
    sourceDomain?: string;
    originalImageUrl?: string;
}

export interface Reddit {
    comments?: number;
    downvotes?: number;
    upvotes?: number;
    _id?: string;
    coin?: string;
    description?: string;
    id?: string;
    isSelf?: boolean;
    subreddit?: string;
    publishedAt?: string;
    score?: number;
    title?: string;
    url?: string;
    hotness?: number;
    activityHotness?: number;
    updatedAt?: string;
    createdAt?: string;
    __v?: number;
}

export interface Tweet {
    retweetCount?: number;
    favoriteCount?: number;
    twitteratiScore?: number;
    links?: string[];
    hashtags?: string[];
    mentions?: string[];
    symbols?: string[];
    _id?: string;
    text?: string;
    username?: string;
    id?: string;
    isRetweeted?: boolean;
    publishedAt?: string;
    language?: string;
    coin?: string;
    hotness?: number;
    activityHotness?: number;
    updatedAt?: string;
    createdAt?: string;
    __v?: number;
    url?: string;
}


interface OHLCVMetal {
    symbol?: string;
    date?: string;
    time?: string;
    open?: number;
    high?: number;
    low?: number;
    close?: number;
}

export interface Metals {
    symbols: OHLCVMetal[];
}