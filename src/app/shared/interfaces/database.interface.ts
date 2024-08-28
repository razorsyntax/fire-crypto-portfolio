

// Settings

interface AuthenticationSettings {
    userpin?: number;
    authenticationenabled?: boolean;
}

type Membership = 'free' | 'premium' | 'pro';
type UserPrefDBType = 'userprefs';

export interface UserPrefs {
    // type is required for couchbase
    type: UserPrefDBType;
    defaultcurrency?: string;
    authsettings?: AuthenticationSettings;
    theme?: string;
    membership?: Membership;
    // Is this the first time the app runs?
    firstrun?: boolean;
    // provided by couchbase
    _id?: string;
    ratedapp?: boolean;
    showtooltips?: boolean;
    pinnedtags?: string[];
}

export interface Transaction {
    dateadded?: string;
    timeadded?: string;
    datetime?: string;
    transactiontype?: string;
    exchange?: string;
    exchange_id: string;
    tradingpair?: string;
    tradingpair_id: string;
    amount?: number;
    transferredTo?: string;
    transferredFrom?: string;
    obtained?: string;
    transactionid?: string;
}

export interface PortfolioData {
    coin?: string;
    symbol?: string;
    symbol_id?: string;
    transactions?: Transaction[];
}

// Used for encrypted data
export interface PortfolioDoc {
    data?: string;
    type?: string;
    _id?: string;
    _rev?: string;
    _local_seq?: number;
}

// used for non-encrypted data
export interface Portfolio {
    data?: PortfolioData;
    type?: string;
    _id?: string;
    _rev?: string;
    _local_seq?: number;
}