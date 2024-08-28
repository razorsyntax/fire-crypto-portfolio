import { Injectable } from '@angular/core';

@Injectable()
export class ApiFixerProvider {

    symbolFix = {
        coins: {
            'IOT': {
                apisymbol: 'IOT',
                coinmarketid: 1720,
                name: 'IOTA',
                sym: 'MIOTA'
            },
            'BITTORRENT': {
                apisymbol: 'BTT',
                coinmarketid: null,
                name: 'BitTorrent',
                sym: 'BTT'
            },
            'IOTA': {
                apisymbol: 'IOT',
                coinmarketid: 1720,
                name: 'IOTA',
                sym: 'MIOTA'
            },
            'MIOTA': {
                apisymbol: 'IOT',
                coinmarketid: 1720,
                name: 'IOTA',
                sym: 'MIOTA'
            },
            'TRX': {
                apisymbol: 'TRX',
                coinmarketid: 1958,
                name: 'Tron',
                sym: 'TRX'
            },
            'Tronix': {
                apisymbol: 'TRX',
                coinmarketid: 1958,
                name: 'Tron',
                sym: 'TRX'
            },
            'Tron': {
                apisymbol: 'TRX',
                coinmarketid: 1958,
                name: 'Tron',
                sym: 'TRX'
            },
            'SBD': {
                apisymbol: 'SBD*',
                coinmarketid: 23728,
                name: 'Streem Backed Dollars',
                sym: 'SBD'
            },
            'SBD*': {
                apisymbol: 'SBD*',
                coinmarketid: 23728,
                name: 'Streem Backed Dollars',
                sym: 'SBD'
            },
            'BEN': {
                apisymbol: 'BEN*',
                coinmarketid: 4336,
                name: 'Benjamins',
                sym: 'BEN'
            },
            'BEN*': {
                apisymbol: 'BEN*',
                coinmarketid: 4336,
                name: 'Benjamins',
                sym: 'BEN'
            },
            'CHF': {
                apisymbol: 'CHF*',
                coinmarketid: 817013,
                name: 'MobileBridge Momentum',
                sym: 'CHF'
            },
            'CHF*': {
                apisymbol: 'CHF*',
                coinmarketid: 817013,
                name: 'MobileBridge Momentum',
                sym: 'CHF'
            },
            'KVT': {
                apisymbol: 'KVT*',
                coinmarketid: 925362,
                name: 'Kvantor',
                sym: 'KVT'
            },
            'KVT*': {
                apisymbol: 'KVT*',
                coinmarketid: 925362,
                name: 'Kvantor',
                sym: 'KVT'
            },
            'CBC': {
                apisymbol: 'CBC*',
                coinmarketid: 810719,
                name: 'CashBagCoin',
                sym: 'CBC'
            },
            'CBC*': {
                apisymbol: 'CBC*',
                coinmarketid: 810719,
                name: 'CashBagCoin',
                sym: 'CBC'
            },
            'DXC': {
                apisymbol: 'DXC*',
                coinmarketid: 925465,
                name: 'Daox',
                sym: 'DXC'
            },
            'DXC*': {
                apisymbol: 'DXC*',
                coinmarketid: 925465,
                name: 'Daox',
                sym: 'DXC'
            },
            'PROD': {
                apisymbol: 'PROD*',
                coinmarketid: 925067,
                name: 'Productivist',
                sym: 'PROD'
            },
            'PROD*': {
                apisymbol: 'PROD*',
                coinmarketid: 925067,
                name: 'Productivist',
                sym: 'PROD'
            },
            'ETT': {
                apisymbol: 'ETT*',
                coinmarketid: 924686,
                name: 'Eternal Trusts',
                sym: 'ETT'
            },
            'ETT*': {
                apisymbol: 'ETT*',
                coinmarketid: 924686,
                name: 'Eternal Trusts',
                sym: 'ETT'
            },
            'TMT': {
                apisymbol: 'TMT**',
                coinmarketid: 877052,
                name: 'Traxia Membership Token',
                sym: 'ETT'
            },
            'TMT**': {
                apisymbol: 'TMT**',
                coinmarketid: 877052,
                name: 'Traxia Membership Token',
                sym: 'ETT'
            },
            'SLT': {
                apisymbol: 'SLT*',
                coinmarketid: 924971,
                name: 'Social Lending Network',
                sym: 'SLT'
            },
            'SLT*': {
                apisymbol: 'SLT*',
                coinmarketid: 916818,
                name: 'SmartLands',
                sym: 'SLT'
            },
            'CET': {
                apisymbol: 'CET*',
                coinmarketid: 925431,
                name: 'DICE Money',
                sym: 'CET'
            },
            'CET*': {
                apisymbol: 'CET*',
                coinmarketid: 925431,
                name: 'DICE Money',
                sym: 'CET'
            },
            'ONG': {
                apisymbol: 'ONG',
                iconsymbol: 'ong*',
                coinmarketid: 'ong-ong',
                name: 'Ontology Gas',
                sym: 'ONG'
            }
        }
    };

    exchangeNames = {
        'acx': {
            name: 'ACX'
        },
        'allcoin': {
            name: 'Allcoin'
        },
        'altilly': {
            name: 'Altilly'
        },
        'bgogo': {
            name: 'Bgogo'
        },
        'bibox': {
            name: 'Bibox'
        },
        'binance': {
            name: 'Binance'
        },
        'binance-jersey': {
            name: 'Binance Jersey'
        },
        'bisq': {
            name: 'Bisq'
        },
        'bitbank': {
            name: 'Bitbank'
        },
        'bitbay': {
            name: 'BitBay'
        },
        'bitex': {
            name: 'Bitex'
        },
        'bittrex': {
            name: 'Bittrex'
        },
        'bitfinex': {
            name: 'Bitfinex'
        },
        'bitflyer': {
            name: 'bitFlyer'
        },
        'bithash': {
            name: 'BitHash'
        },
        'bitibu': {
            name: 'Bitibu'
        },
        'bitkonan': {
            name: 'BitKonan'
        },
        'bitlish': {
            name: 'Bitlish'
        },
        'bitmart': {
            name: 'BitMart'
        },
        'bitmax': {
            name: 'BitMax'
        },
        'bitrue': {
            name: 'Bitrue'
        },
        'bitsane': {
            name: 'Bitsane'
        },
        'bitso': {
            name: 'Bitso'
        },
        'bitstamp': {
            name: 'Bitstamp'
        },
        'bithumb': {
            name: 'Bithumb'
        },
        'bitz': {
            name: 'Bitz'
        },
        'bkex': {
            name: 'BKEX'
        },
        'bleutrade': {
            name: 'Bleutrade'
        },
        'blocktrade': {
            name: 'Blocktrade.com'
        },
        'btc_alpha': {
            name: 'BTC-Alpha'
        },
        'btcbox': {
            name: 'BTCBOX'
        },
        'btcturk': {
            name: 'BtcTurk'
        },
        'buyucoin': {
            name: 'BuyUcoin'
        },
        'c2cx': {
            name: 'C2CX'
        },
        'cex': {
            name: 'CEX.IO'
        },
        'chaince': {
            name: 'Chaince'
        },
        'chainex': {
            name: 'ChainEX'
        },
        'cobinhood': {
            name: 'Cobinhood'
        },
        'coinall': {
            name: 'Coinall'
        },
        'coinbene': {
            name: 'CoinBene'
        },
        'coincheck': {
            name: 'Coincheck'
        },
        'coinex': {
            name: 'CoinEx'
        },
        'coingi': {
            name: 'Coingi'
        },
        'coinmex': {
            name: 'CoinMex'
        },
        'coinsbit': {
            name: 'Coinsbit'
        },
        'coinsuper': {
            name: 'Coinsuper'
        },
        'cpdax': {
            name: 'CPDAX'
        },
        'credoex': {
            name: 'CredoEx'
        },
        'crex24': {
            name: 'Crex24'
        },
        'crxzone': {
            name: 'CRXzone'
        },
        'cryptex': {
            name: 'Cryptex'
        },
        'dcoin': {
            name: 'Dcoin'
        },
        'deribit': {
            name: 'Deribit'
        },
        'digifinex': {
            name: 'DigiFinex'
        },
        'dragonex': {
            name: 'DragonEX'
        },
        'dsx': {
            name: 'DSX'
        },
        'ethfinex': {
            name: 'Ethfinex'
        },
        'exmo': {
            name: 'Exmo'
        },
        'exrates': {
            name: 'Exrates'
        },
        'fatbtc': {
            name: 'FatBTC'
        },
        'fisco': {
            name: 'Fisco'
        },
        'gateio': {
            name: 'Gate.io'
        },
        'gdac': {
            name: 'GDAC'
        },
        'gdax': {
            name: 'Coinbase Pro'
        },
        'gemini': {
            name: 'Gemini'
        },
        'gopax': {
            name: 'GOPAX'
        },
        'graviex': {
            name: 'Graviex'
        },
        'hb_top': {
            name: 'HB.top'
        },
        'hitbtc': {
            name: 'HitBTC'
        },
        'hotbit': {
            name: 'Hotbit'
        },
        'hpx': {
            name: 'HPX'
        },
        'huobipro': {
            name: 'Huobi'
        },
        'idcm': {
            name: 'IDCM'
        },
        'idex': {
            name: 'IDEX'
        },
        'indodax': {
            name: 'Indodax'
        },
        'itbit': {
            name: 'itBit'
        },
        'jex': {
            name: 'JEX'
        },
        'k_kex': {
            name: 'KKEX'
        },
        'kkcoin': {
            name: 'KKcoin'
        },
        'korbit': {
            name: 'Korbit'
        },
        'kraken': {
            name: 'Kraken'
        },
        'kuna': {
            name: 'Kuna'
        },
        'lakebtc': {
            name: 'LakeBTC'
        },
        'lbank': {
            name: 'LBank'
        },
        'livecoin': {
            name: 'Livecoin'
        },
        'max_maicoin': {
            name: 'Max.Maicoin'
        },
        'mercado_bitcoin': {
            name: 'Mercado Bitcoin'
        },
        'mercatox': {
            name: 'Mercatox'
        },
        'nlexch': {
            name: 'NLexch'
        },
        'novadex': {
            name: 'Novadex'
        },
        'okcoinusd': {
            name: 'OKCoin'
        },
        'okex': {
            name: 'OKEx'
        },
        'omnitrade': {
            name: 'OmniTrade'
        },
        'openledger': {
            name: 'OpenLedger DEX'
        },
        'otcbtc': {
            name: 'OTCBTC'
        },
        'p2pb2b': {
            name: 'P2PB2B'
        },
        'paymium': {
            name: 'Paymium'
        },
        'poloniex': {
            name: 'Poloniex'
        },
        'raisex': {
            name: 'Raisex'
        },
        'sistemkoin': {
            name: 'Sistemkoin'
        },
        'tdax': {
            name: 'Satang Pro'
        },
        'tideal': {
            name: 'TiDeal'
        },
        'tidebit': {
            name: 'TideBit'
        },
        'tidex': {
            name: 'Tidex'
        },
        'tokok': {
            name: 'TOKOK'
        },
        'topbtc': {
            name: 'TopBTC'
        },
        'tradeio': {
            name: 'trade.io'
        },
        'trade_satoshi': {
            name: 'TradeSatoshi'
        },
        'uex': {
            name: 'UEX'
        },
        'upbit': {
            name: 'UpBit'
        },
        'vinex': {
            name: 'Vinex'
        },
        'wazirx': {
            name: 'WazirX'
        },
        'wcx': {
            name: 'WCX'
        },
        'worldcore': {
            name: 'Worldcore'
        },
        'yunex': {
            name: 'YunEx'
        },
        'zaif': {
            name: 'Zaif'
        },
        'zb': {
            name: 'ZB'
        },
        'zbg': {
            name: 'ZBG'
        },
        'zebitex': {
            name: 'ZEBITEX'
        },
        'zgtop': {
            name: 'ZG.TOP'
        }
    };

    constructor() { }

    fixSymbolListForCall(symList) {
        const fixList = this.symbolFix;

        for (let i = 0; i < symList.length; i++) {
            const symbalToFix = symList[i];
            if (fixList.coins[symbalToFix] !== undefined) {
                symList[i] = fixList.coins[symbalToFix].apisymbol;
            }
        }
        return symList;
    }

    getCorrectCryptoSymbol(givenSymbol) {
        return (this.symbolFix.coins[givenSymbol]) ? this.symbolFix.coins[givenSymbol].sym : givenSymbol;
    }

    getApiSymbol(givenSymbol) {
        return (this.symbolFix.coins[givenSymbol]) ? this.symbolFix.coins[givenSymbol].apisymbol : givenSymbol;
    }

    getActualName(givenName) {
        return (this.symbolFix.coins[givenName]) ? this.symbolFix.coins[givenName].name : givenName;
    }

    getActualExchangeName(givenName) {
        return (this.exchangeNames[givenName]) ? this.exchangeNames[givenName].name : givenName;
    }

    getExchangeId(givenExchangeID) {
        const exchangeObj: string[] = Object.keys(this.exchangeNames).filter(item => this.exchangeNames[item].name === givenExchangeID);
        return (exchangeObj.length > 0) ? exchangeObj : [givenExchangeID];
    }
}
