import { Ticker, ExchangeRatesAPI } from "./getservice.interface";
import { Transaction } from "./database.interface";

/**
 * List of Interfaces used for forms, fields and UI data
 */

// Interface for Market Cap and WatchList items
export interface CryptoList {
  name: string;
  // calculated marketcap ranking
  rank?: number;
  price: string;
  percentTwentyFourHour: string; // (close - open) / open
  percentColor: string;
  id: string;
  symbol: string;
  iconPath: string;
}

export interface TransactionDisplay {
  lineOne: string;
  lineTwo: string;
  backgroundType: string;
  datetime: number;
  transaction: Transaction
}

export interface CurrenciesInterval {
  currency?: string;
  volume?: string;
  open?: string;
  open_timestamp?: string;
  close?: string;
  close_timestamp?: string;
}

// Contains All Service Call Definitions
export interface CacheTypes {
  // Exchange Rates
  exchangeRates?: ExchangeRatesAPI[]
  // Currencies
  currencies?;
  // Twenty Four Hour Interval
  twentyFourHrInterval?: CurrenciesInterval[];
  // Dashboard Data
  dashboardData?;
  // latest price list for all coins
  currentPrices?;
  // exchange list for portfolio form
  exchangelist?: any;
  // massive list of coins for search
  coinlist?: any;
  // form data for portfolio form
  formData?: CoinForm;
  // coin details
  coinDetails?: any;
  // chart details
  areaChart?: ChartData[];
  // market cap list
  marketcaplist?: CryptoListItem[];
  // portfolio list
  portfoliolist?: any;
  // user prefs are always accessible until next session
  userprefs?: {};
  // Crypto coin/ticker list
  tickers?: Ticker[]
  // Global Market Data
  global?: Global
}

interface Global {
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

export interface ChartData {
  Amount: number;
  Date: string;
}

export interface CoinForm {
  coin?: string;
  transactionid?: string;
  amount?: number;
  dateadded?: string;
  timeadded?: string;
  // UTC number
  datetime?: string;
  symbol?: string;
  type?: string;
  // mining, exchange, airdrop, transfer
  obtained?: string;
  // asset exchange
  exchange?: string;
  exchange_id?: string;
  tradingpair?: string;
  tradingpair_id?: string;
  fee?: number;
  // type of transaction
  buyselltransfer?: string;
  transferredTo?: string;
  transferredFrom?: string;
  symbol_id?: string;
}

export interface CoinHoldings {
  coin?: string;
  symbol?: string;
  transactions?: Transaction[];
}

/**
 * Used for Coin Details Header
 */
export interface CoinHeaderDetails {
  coinName?: string;
  coinPrice?: string;
  coinSymbol?: string;
}

export interface Transactions {
  amount?: number;
  dateadded?: string;
  datetime?: number;
  exchange?: string;
  timeadded?: string;
  tradingpair?: string;
  transactiontype?: string;
}

export interface TransactionData {
  newTransaction?: boolean;
  transactionList?: Transactions[];
  selectedTransaction?: TransactionDisplay;
}

export interface CoinAPIDetails {
  coin?: any;
}

export interface CoinDetails {
  price?: number;
  availablesupply?: string;
  marketcap?: string;
  twentyfourhrvol?: string;
  name?: string;
  symbol?: string;
  iconpath?: string;
  id?: string;
  defaultcurrency?: string;
  holdings?: number;
  totalvalue?: number;
}

export interface PortfolioBox {
  price: number;
  holdings: number;
  symbol: string;
  totalvalue: number;
  defaultcurrency: string;
}

export interface CryptoListItem {
  name?: string;
  price?: number;
  percent_change_24h?: number;
  percent_color?: string;
  crypto_icon?: string;
  supply?: number;
  marketcapVol?: number;
  id?: string;
  symbol?: string;
  rank?: number;
  defaultcurrency?: string;
}

export type CoinFormTypes =
  'obtained' |
  'exchange' |
  'tradingpair' |
  'transferredTo' |
  'transferredFrom' |
  'fee' |
  'buyselltransfer' |
  'transactionid' |
  'amount' |
  'datetime' |
  'timeadded' |
  'dateadded' |
  'coin' |
  'symbol' |
  'type';

export interface CoinData {
  crypto_icon?: string;
  name?: string;
  percent_color?: string;
  price?: string;
  priceTotal?: string;
  symbol?: string;
  numcoins?: string;
  percent_change_24hr?: string;
  id?: string;
}
export interface CoinUIData {
  crypto_icon?: string;
  id?: string;
  marketcapVol?: number;
  name?: string;
  percent_change_24h?: string;
  percent_color?: string;
  price?: string;
  rank?: number;
  supply?: string;
  symbol?: string;
}