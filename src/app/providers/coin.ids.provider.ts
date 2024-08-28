import { Injectable } from '@angular/core';

/**
 * Fixes for CoinPaprika vs CoinGecko API
 */

@Injectable()
export class CoinIdsProvider {
    coin_ids = {
        'btc-bitcoin': {
            id: 'btc-bitcoin',
            id_cg: 'bitcoin',
            symbol: 'BTC',
            symbol_cg: 'btc',
            name: 'Bitcoin',
            name_cg: 'Bitcoin',
            slug: 'bitcoin'
        },
        'ethplo-ethplode': {
            id: 'ethplo-ethplode',
            id_cg: 'ethplode',
            symbol: 'ETHPLO',
            symbol_cg: 'ethplo',
            name: 'ETHPLODE',
            name_cg: 'Ethplode',
            slug: 'ethplode'
        },
        'miota-iota': {
            id: 'miota-iota',
            id_cg: 'iota',
            symbol: 'MIOTA',
            symbol_cg: 'miota',
            name: 'IOTA',
            name_cg: 'IOTA',
            slug: 'iota'
        },
        'eos-eos': {
            id: 'eos-eos',
            id_cg: 'eos',
            symbol: 'EOS',
            symbol_cg: 'eos',
            name: 'EOS',
            name_cg: 'EOS',
            slug: 'eos'
        },
        'eth-ethereum': {
            id: 'eth-ethereum',
            id_cg: 'ethereum',
            symbol: 'ETH',
            symbol_cg: 'eth',
            name: 'Ethereum',
            name_cg: 'Ethereum',
            slug: 'ethereum'
        },
        'xrp-xrp': {
            id: 'xrp-xrp',
            id_cg: 'ripple',
            symbol: 'XRP',
            symbol_cg: 'xrp',
            name: 'XRP',
            name_cg: 'XRP',
            slug: 'ripple'
        },
        'bch-bitcoin-cash': {
            id: 'bch-bitcoin-cash',
            id_cg: 'bitcoin-cash',
            symbol: 'BCH',
            symbol_cg: 'bch',
            name: 'Bitcoin Cash',
            name_cg: 'Bitcoin Cash',
            slug: 'bitcoin-cash'
        },
        'ada-cardano': {
            id: 'ada-cardano',
            id_cg: 'cardano',
            symbol: 'ADA',
            symbol_cg: 'ada',
            name: 'Cardano',
            name_cg: 'Cardano',
            slug: 'cardano'
        },
        'ltc-litecoin': {
            id: 'ltc-litecoin',
            id_cg: 'litecoin',
            symbol: 'LTC',
            symbol_cg: 'ltc',
            name: 'Litecoin',
            name_cg: 'Litecoin',
            slug: 'litecoin'
        },
        'xem-nem': {
            id: 'xem-nem',
            id_cg: 'nem',
            symbol: 'XEM',
            symbol_cg: 'xem',
            name: 'NEM',
            name_cg: 'NEM',
            slug: 'nem'
        },
        'neo-neo': {
            id: 'neo-neo',
            id_cg: 'neo',
            symbol: 'NEO',
            symbol_cg: 'neo',
            name: 'NEO',
            name_cg: 'NEO',
            slug: 'neo'
        },
        'xlm-stellar': {
            id: 'xlm-stellar',
            id_cg: 'stellar',
            symbol: 'XLM',
            symbol_cg: 'xlm',
            name: 'Stellar',
            name_cg: 'Stellar',
            slug: 'stellar'
        },
        'dash-dash': {
            id: 'dash-dash',
            id_cg: 'dash',
            symbol: 'DASH',
            symbol_cg: 'dash',
            name: 'Dash',
            name_cg: 'Dash',
            slug: 'dash'
        },
        'xmr-monero': {
            id: 'xmr-monero',
            id_cg: 'monero',
            symbol: 'XMR',
            symbol_cg: 'xmr',
            name: 'Monero',
            name_cg: 'Monero',
            slug: 'monero'
        },
        'btg-bitcoin-gold': {
            id: 'btg-bitcoin-gold',
            id_cg: 'bitcoin-gold',
            symbol: 'BTG',
            symbol_cg: 'btg',
            name: 'Bitcoin Gold',
            name_cg: 'Bitcoin Gold',
            slug: 'bitcoin-gold'
        },
        'etc-ethereum-classic': {
            id: 'etc-ethereum-classic',
            id_cg: 'ethereum-classic',
            symbol: 'ETC',
            symbol_cg: 'etc',
            name: 'Ethereum Classic',
            name_cg: 'Ethereum Classic',
            slug: 'ethereum-classic'
        },
        'qtum-qtum': {
            id: 'qtum-qtum',
            id_cg: 'qtum',
            symbol: 'QTUM',
            symbol_cg: 'qtum',
            name: 'Qtum',
            name_cg: 'Qtum',
            slug: 'qtum'
        },
        'lsk-lisk': {
            id: 'lsk-lisk',
            id_cg: 'lisk',
            symbol: 'LSK',
            symbol_cg: 'lsk',
            name: 'Lisk',
            name_cg: 'Lisk',
            slug: 'lisk'
        },
        'zec-zcash': {
            id: 'zec-zcash',
            id_cg: 'zcash',
            symbol: 'ZEC',
            symbol_cg: 'zec',
            name: 'Zcash',
            name_cg: 'Zcash',
            slug: 'zcash'
        },
        'xvg-verge': {
            id: 'xvg-verge',
            id_cg: 'verge',
            symbol: 'XVG',
            symbol_cg: 'xvg',
            name: 'Verge',
            name_cg: 'Verge',
            slug: 'verge'
        },
        'vet-vechain': {
            id: 'vet-vechain',
            id_cg: 'vechain',
            symbol: 'VET',
            symbol_cg: 'vet',
            name: 'VeChain',
            name_cg: 'VeChain',
            slug: 'vechain'
        },
        'sc-siacoin': {
            id: 'sc-siacoin',
            id_cg: 'siacoin',
            symbol: 'SC',
            symbol_cg: 'sc',
            name: 'Siacoin',
            name_cg: 'Siacoin',
            slug: 'siacoin'
        },
        'strat-stratis': {
            id: 'strat-stratis',
            id_cg: 'stratis',
            symbol: 'STRAT',
            symbol_cg: 'strat',
            name: 'Stratis',
            name_cg: 'Stratis',
            slug: 'stratis'
        },
        'bcn-bytecoin': {
            id: 'bcn-bytecoin',
            id_cg: 'bytecoin',
            symbol: 'BCN',
            symbol_cg: 'bcn',
            name: 'Bytecoin',
            name_cg: 'Bytecoin',
            slug: 'bytecoin-bcn'
        },
        'steem-steem': {
            id: 'steem-steem',
            id_cg: 'steem',
            symbol: 'STEEM',
            symbol_cg: 'steem',
            name: 'Steem',
            name_cg: 'Steem',
            slug: 'steem'
        },
        'kcs-kucoin-shares': {
            id: 'kcs-kucoin-shares',
            id_cg: 'kucoin-shares',
            symbol: 'KCS',
            symbol_cg: 'kcs',
            name: 'KuCoin Shares',
            name_cg: 'KuCoin Shares',
            slug: 'kucoin-shares'
        },
        'bts-bitshares': {
            id: 'bts-bitshares',
            id_cg: 'bitshares',
            symbol: 'BTS',
            symbol_cg: 'bts',
            name: 'BitShares',
            name_cg: 'BitShares',
            slug: 'bitshares'
        },
        'doge-dogecoin': {
            id: 'doge-dogecoin',
            id_cg: 'dogecoin',
            symbol: 'DOGE',
            symbol_cg: 'doge',
            name: 'Dogecoin',
            name_cg: 'Dogecoin',
            slug: 'dogecoin'
        },
        'waves-waves': {
            id: 'waves-waves',
            id_cg: 'waves',
            symbol: 'WAVES',
            symbol_cg: 'waves',
            name: 'Waves',
            name_cg: 'Waves',
            slug: 'waves'
        },
        'etn-electroneum': {
            id: 'etn-electroneum',
            id_cg: 'electroneum',
            symbol: 'ETN',
            symbol_cg: 'etn',
            name: 'Electroneum',
            name_cg: 'Electroneum',
            slug: 'electroneum'
        },
        'smart-smartcash': {
            id: 'smart-smartcash',
            id_cg: 'smartcash',
            symbol: 'SMART',
            symbol_cg: 'smart',
            name: 'SmartCash',
            name_cg: 'SmartCash',
            slug: 'smartcash'
        },
        'dcr-decred': {
            id: 'dcr-decred',
            id_cg: 'decred',
            symbol: 'DCR',
            symbol_cg: 'dcr',
            name: 'Decred',
            name_cg: 'Decred',
            slug: 'decred'
        },
        'kmd-komodo': {
            id: 'kmd-komodo',
            id_cg: 'komodo',
            symbol: 'KMD',
            symbol_cg: 'kmd',
            name: 'Komodo',
            name_cg: 'Komodo',
            slug: 'komodo'
        },
        'dgb-digibyte': {
            id: 'dgb-digibyte',
            id_cg: 'digibyte',
            symbol: 'DGB',
            symbol_cg: 'dgb',
            name: 'DigiByte',
            name_cg: 'DigiByte',
            slug: 'digibyte'
        },
        'ark-ark': {
            id: 'ark-ark',
            id_cg: 'ark',
            symbol: 'ARK',
            symbol_cg: 'ark',
            name: 'Ark',
            name_cg: 'Ark',
            slug: 'ark'
        },
        'gbyte-byteball-bytes': {
            id: 'gbyte-byteball-bytes',
            id_cg: 'byteball',
            symbol: 'GBYTE',
            symbol_cg: 'gbyte',
            name: 'Obyte',
            name_cg: 'Obyte',
            slug: 'obyte'
        },
        'pivx-pivx': {
            id: 'pivx-pivx',
            id_cg: 'pivx',
            symbol: 'PIVX',
            symbol_cg: 'pivx',
            name: 'PIVX',
            name_cg: 'PIVX',
            slug: 'pivx'
        },
        'hc-hypercash': {
            id: 'hc-hypercash',
            id_cg: 'hshare',
            symbol: 'HC',
            symbol_cg: 'hc',
            name: 'HyperCash',
            name_cg: 'HyperCash',
            slug: 'hypercash'
        },
        'zcl-zclassic': {
            id: 'zcl-zclassic',
            id_cg: 'zclassic',
            symbol: 'ZCL',
            symbol_cg: 'zcl',
            name: 'ZClassic',
            name_cg: 'Zclassic',
            slug: 'zclassic'
        },
        'rdd-reddcoin': {
            id: 'rdd-reddcoin',
            id_cg: 'reddcoin',
            symbol: 'RDD',
            symbol_cg: 'rdd',
            name: 'ReddCoin',
            name_cg: 'Reddcoin',
            slug: 'reddcoin'
        },
        'fct-factom': {
            id: 'fct-factom',
            id_cg: 'factom',
            symbol: 'FCT',
            symbol_cg: 'fct',
            name: 'Factom',
            name_cg: 'Factom',
            slug: 'factom'
        },
        'med-medibloc-qrc20': {
            id: 'med-medibloc-qrc20',
            id_cg: 'medibloc',
            symbol: 'MED',
            symbol_cg: 'med',
            name: 'MediBloc [QRC20]',
            name_cg: 'Medibloc',
            slug: 'medibloc'
        },
        'nxs-nexus': {
            id: 'nxs-nexus',
            id_cg: 'nexus',
            symbol: 'NXS',
            symbol_cg: 'nxs',
            name: 'Nexus',
            name_cg: 'Nexus',
            slug: 'nexus'
        },
        'xp-experience-points': {
            id: 'xp-experience-points',
            id_cg: 'xp',
            symbol: 'XP',
            symbol_cg: 'xp',
            name: 'Experience Points',
            name_cg: 'XP',
            slug: 'experience-points'
        },
        'sys-syscoin': {
            id: 'sys-syscoin',
            id_cg: 'syscoin',
            symbol: 'SYS',
            symbol_cg: 'sys',
            name: 'Syscoin',
            name_cg: 'Syscoin',
            slug: 'syscoin'
        },
        'mona-monacoin': {
            id: 'mona-monacoin',
            id_cg: 'monacoin',
            symbol: 'MONA',
            symbol_cg: 'mona',
            name: 'MonaCoin',
            name_cg: 'MonaCoin',
            slug: 'monacoin'
        },
        'nebl-neblio': {
            id: 'nebl-neblio',
            id_cg: 'neblio',
            symbol: 'NEBL',
            symbol_cg: 'nebl',
            name: 'Neblio',
            name_cg: 'Neblio',
            slug: 'neblio'
        },
        'nxt-nxt': {
            id: 'nxt-nxt',
            id_cg: 'nxt',
            symbol: 'NXT',
            symbol_cg: 'nxt',
            name: 'Nxt',
            name_cg: 'NXT',
            slug: 'nxt'
        },
        'emc-emercoin': {
            id: 'emc-emercoin',
            id_cg: 'emercoin',
            symbol: 'EMC',
            symbol_cg: 'emc',
            name: 'Emercoin',
            name_cg: 'EmerCoin',
            slug: 'emercoin'
        },
        'gxs-gxchain': {
            id: 'gxs-gxchain',
            id_cg: 'game-x-coin',
            symbol: 'GXC',
            symbol_cg: 'gxc',
            name: 'GXChain',
            name_cg: 'GameXCoin',
            slug: 'gxchain'
        },
        'xzc-zcoin': {
            id: 'xzc-zcoin',
            id_cg: 'zcoin',
            symbol: 'XZC',
            symbol_cg: 'xzc',
            name: 'Zcoin',
            name_cg: 'Zcoin',
            slug: 'zcoin'
        },
        'game-gamecredits': {
            id: 'game-gamecredits',
            id_cg: 'gamecredits',
            symbol: 'GAME',
            symbol_cg: 'game',
            name: 'GameCredits',
            name_cg: 'GameCredits',
            slug: 'gamecredits'
        },
        'part-particl': {
            id: 'part-particl',
            id_cg: 'particl',
            symbol: 'PART',
            symbol_cg: 'part',
            name: 'Particl',
            name_cg: 'Particl',
            slug: 'particl'
        },
        'btx-bitcore': {
            id: 'btx-bitcore',
            id_cg: 'bitcore',
            symbol: 'BTX',
            symbol_cg: 'btx',
            name: 'Bitcore',
            name_cg: 'Bitcore',
            slug: 'bitcore'
        },
        'pac-paccoin': {
            id: 'pac-paccoin',
            id_cg: 'paccoin',
            symbol: 'PAC',
            symbol_cg: 'pac',
            name: 'PACcoin',
            name_cg: 'PACcoin',
            slug: 'pac-global'
        },
        'xdn-digitalnote': {
            id: 'xdn-digitalnote',
            id_cg: 'digitalnote',
            symbol: 'XDN',
            symbol_cg: 'xdn',
            name: 'DigitalNote',
            name_cg: 'DigitalNote',
            slug: 'digitalnote'
        },
        'cnx-cryptonex': {
            id: 'cnx-cryptonex',
            id_cg: 'cryptonex',
            symbol: 'CNX',
            symbol_cg: 'cnx',
            name: 'Cryptonex',
            name_cg: 'Cryptonex',
            slug: 'cryptonex'
        },
        'sky-skycoin': {
            id: 'sky-skycoin',
            id_cg: 'skycoin',
            symbol: 'SKY',
            symbol_cg: 'sky',
            name: 'Skycoin',
            name_cg: 'Skycoin',
            slug: 'skycoin'
        },
        'bco-bridgecoin': {
            id: 'bco-bridgecoin',
            id_cg: 'bridgecoin',
            symbol: 'BCO',
            symbol_cg: 'bco',
            name: 'BridgeCoin',
            name_cg: 'BridgeCoin',
            slug: 'bridgecoin'
        },
        'act-achain': {
            id: 'act-achain',
            id_cg: 'achain',
            symbol: 'ACT',
            symbol_cg: 'act',
            name: 'Achain',
            name_cg: 'Achain',
            slug: 'achain'
        },
        'nav-navcoin': {
            id: 'nav-navcoin',
            id_cg: 'nav-coin',
            symbol: 'NAV',
            symbol_cg: 'nav',
            name: 'NavCoin',
            name_cg: 'NavCoin',
            slug: 'nav-coin'
        },
        'vtc-vertcoin': {
            id: 'vtc-vertcoin',
            id_cg: 'vertcoin',
            symbol: 'VTC',
            symbol_cg: 'vtc',
            name: 'Vertcoin',
            name_cg: 'Vertcoin',
            slug: 'vertcoin'
        },
        'block-blocknet': {
            id: 'block-blocknet',
            id_cg: 'blocknet',
            symbol: 'BLOCK',
            symbol_cg: 'block',
            name: 'Blocknet',
            name_cg: 'Blocknet',
            slug: 'blocknet'
        },
        'hpb-high-performance-blockchain': {
            id: 'hpb-high-performance-blockchain',
            id_cg: 'high-performance-blockchain',
            symbol: 'HPB',
            symbol_cg: 'hpb',
            name: 'High Performance Blockchain',
            name_cg: 'High Performance Blockchain',
            slug: 'high-performance-blockchain'
        },
        'xby-xtrabytes': {
            id: 'xby-xtrabytes',
            id_cg: 'xtrabytes',
            symbol: 'XBY',
            symbol_cg: 'xby',
            name: 'XTRABYTES',
            name_cg: 'XtraBYtes',
            slug: 'xtrabytes'
        },
        'ubq-ubiq': {
            id: 'ubq-ubiq',
            id_cg: 'ubiq',
            symbol: 'UBQ',
            symbol_cg: 'ubq',
            name: 'Ubiq',
            name_cg: 'Ubiq',
            slug: 'ubiq'
        },
        'xcp-counterparty': {
            id: 'xcp-counterparty',
            id_cg: 'counterparty',
            symbol: 'XCP',
            symbol_cg: 'xcp',
            name: 'Counterparty',
            name_cg: 'Counterparty',
            slug: 'counterparty'
        },
        'html-htmlcoin': {
            id: 'html-htmlcoin',
            id_cg: 'htmlcoin',
            symbol: 'HTML',
            symbol_cg: 'html',
            name: 'HTMLCOIN',
            name_cg: 'HTMLCOIN',
            slug: 'html-coin'
        },
        'ppc-peercoin': {
            id: 'ppc-peercoin',
            id_cg: 'peercoin',
            symbol: 'PPC',
            symbol_cg: 'ppc',
            name: 'Peercoin',
            name_cg: 'Peercoin',
            slug: 'peercoin'
        },
        'zen-horizen': {
            id: 'zen-horizen',
            id_cg: 'zencash',
            symbol: 'ZEN',
            symbol_cg: 'zen',
            name: 'Horizen',
            name_cg: 'Horizen',
            slug: 'zencash'
        },
        'bay-bitbay': {
            id: 'bay-bitbay',
            id_cg: 'bitbay',
            symbol: 'BAY',
            symbol_cg: 'bay',
            name: 'BitBay',
            name_cg: 'BitBay',
            slug: 'bitbay'
        },
        'emc2-einsteinium': {
            id: 'emc2-einsteinium',
            id_cg: 'einsteinium',
            symbol: 'EMC2',
            symbol_cg: 'emc2',
            name: 'Einsteinium',
            name_cg: 'Einsteinium',
            slug: 'einsteinium'
        },
        'nlg-gulden': {
            id: 'nlg-gulden',
            id_cg: 'gulden',
            symbol: 'NLG',
            symbol_cg: 'nlg',
            name: 'Gulden',
            name_cg: 'Gulden',
            slug: 'gulden'
        },
        'lbc-lbry-credits': {
            id: 'lbc-lbry-credits',
            id_cg: 'lbry-credits',
            symbol: 'LBC',
            symbol_cg: 'lbc',
            name: 'LBRY Credits',
            name_cg: 'LBRY Credits',
            slug: 'library-credit'
        },
        'via-viacoin': {
            id: 'via-viacoin',
            id_cg: 'viacoin',
            symbol: 'VIA',
            symbol_cg: 'via',
            name: 'Viacoin',
            name_cg: 'Viacoin',
            slug: 'viacoin'
        },
        'etp-metaverse-etp': {
            id: 'etp-metaverse-etp',
            id_cg: 'metaverse-etp',
            symbol: 'ETP',
            symbol_cg: 'etp',
            name: 'Metaverse ETP',
            name_cg: 'Metaverse ETP',
            slug: 'metaverse'
        },
        'eca-electra': {
            id: 'eca-electra',
            id_cg: 'electra',
            symbol: 'ECA',
            symbol_cg: 'eca',
            name: 'Electra',
            name_cg: 'Electra',
            slug: 'electra'
        },
        'ioc-io-coin': {
            id: 'ioc-io-coin',
            id_cg: 'iocoin',
            symbol: 'IOC',
            symbol_cg: 'ioc',
            name: 'I/O Coin',
            name_cg: 'I/O Coin',
            slug: 'iocoin'
        },
        'burst-burst': {
            id: 'burst-burst',
            id_cg: 'burst',
            symbol: 'BURST',
            symbol_cg: 'burst',
            name: 'Burst',
            name_cg: 'Burst',
            slug: 'burst'
        },
        'rise-rise': {
            id: 'rise-rise',
            id_cg: 'rise',
            symbol: 'RISE',
            symbol_cg: 'rise',
            name: 'Rise',
            name_cg: 'Rise',
            slug: 'rise'
        },
        'thc-hempcoin': {
            id: 'thc-hempcoin',
            id_cg: 'hempcoin-thc',
            symbol: 'THC',
            symbol_cg: 'thc',
            name: 'HempCoin',
            name_cg: 'Hempcoin',
            slug: 'hempcoin'
        },
        'cloak-cloakcoin': {
            id: 'cloak-cloakcoin',
            id_cg: 'cloakcoin',
            symbol: 'CLOAK',
            symbol_cg: 'cloak',
            name: 'CloakCoin',
            name_cg: 'Cloakcoin',
            slug: 'cloakcoin'
        },
        'xas-asch': {
            id: 'xas-asch',
            id_cg: 'asch',
            symbol: 'XAS',
            symbol_cg: 'xas',
            name: 'Asch',
            name_cg: 'Asch',
            slug: 'asch'
        },
        'flash-flash': {
            id: 'flash-flash',
            id_cg: 'flash',
            symbol: 'FLASH',
            symbol_cg: 'flash',
            name: 'Flash',
            name_cg: 'Flash',
            slug: 'flash'
        },
        'dct-decent': {
            id: 'dct-decent',
            id_cg: 'decent',
            symbol: 'DCT',
            symbol_cg: 'dct',
            name: 'DECENT',
            name_cg: 'Decent',
            slug: 'decent'
        },
        'mnx-minexcoin': {
            id: 'mnx-minexcoin',
            id_cg: 'minexcoin',
            symbol: 'MNX',
            symbol_cg: 'mnx',
            name: 'MinexCoin',
            name_cg: 'MinexCoin',
            slug: 'minexcoin'
        },
        'rvr-revolutionvr': {
            id: 'rvr-revolutionvr',
            id_cg: 'revolutionvr',
            symbol: 'RVR',
            symbol_cg: 'rvr',
            name: 'RevolutionVR',
            name_cg: 'RevolutionVR',
            slug: 'revolutionvr'
        },
        'aeon-aeon': {
            id: 'aeon-aeon',
            id_cg: 'aeon',
            symbol: 'AEON',
            symbol_cg: 'aeon',
            name: 'Aeon',
            name_cg: 'Aeon',
            slug: 'aeon'
        },
        'pura-pura': {
            id: 'pura-pura',
            id_cg: 'pura',
            symbol: 'PURA',
            symbol_cg: 'pura',
            name: 'Pura',
            name_cg: 'Pura',
            slug: 'pura'
        },
        'nmc-namecoin': {
            id: 'nmc-namecoin',
            id_cg: 'namecoin',
            symbol: 'NMC',
            symbol_cg: 'nmc',
            name: 'Namecoin',
            name_cg: 'Namecoin',
            slug: 'namecoin'
        },
        'grs-groestlcoin': {
            id: 'grs-groestlcoin',
            id_cg: 'groestlcoin',
            symbol: 'GRS',
            symbol_cg: 'grs',
            name: 'Groestlcoin',
            name_cg: 'Groestlcoin',
            slug: 'groestlcoin'
        },
        'xsh-shield': {
            id: 'xsh-shield',
            id_cg: 'shield',
            symbol: 'XSH',
            symbol_cg: 'xsh',
            name: 'SHIELD',
            name_cg: 'SHIELD',
            slug: 'shield-xsh'
        },
        'shift-shift': {
            id: 'shift-shift',
            id_cg: 'shift',
            symbol: 'SHIFT',
            symbol_cg: 'shift',
            name: 'Shift',
            name_cg: 'Shift',
            slug: 'shift'
        },
        'sls-salus': {
            id: 'sls-salus',
            id_cg: 'salus',
            symbol: 'SLS',
            symbol_cg: 'sls',
            name: 'SaluS',
            name_cg: 'SaluS',
            slug: 'salus'
        },
        'moon-mooncoin': {
            id: 'moon-mooncoin',
            id_cg: 'mooncoin',
            symbol: 'MOON',
            symbol_cg: 'moon',
            name: 'Mooncoin',
            name_cg: 'Mooncoin',
            slug: 'mooncoin'
        },
        'ftc-feathercoin': {
            id: 'ftc-feathercoin',
            id_cg: 'feathercoin',
            symbol: 'FTC',
            symbol_cg: 'ftc',
            name: 'Feathercoin',
            name_cg: 'Feathercoin',
            slug: 'feathercoin'
        },
        'vrc-vericoin': {
            id: 'vrc-vericoin',
            id_cg: 'vericoin',
            symbol: 'VRC',
            symbol_cg: 'vrc',
            name: 'VeriCoin',
            name_cg: 'VeriCoin',
            slug: 'vericoin'
        },
        'xspec-spectrecoin': {
            id: 'xspec-spectrecoin',
            id_cg: 'spectrecoin',
            symbol: 'XSPEC',
            symbol_cg: 'xspec',
            name: 'Spectrecoin',
            name_cg: 'Spectrecoin',
            slug: 'spectrecoin'
        },
        'crw-crown': {
            id: 'crw-crown',
            id_cg: 'crown',
            symbol: 'CRW',
            symbol_cg: 'crw',
            name: 'Crown',
            name_cg: 'Crown',
            slug: 'crown'
        },
        'ecc-ecc': {
            id: 'ecc-ecc',
            id_cg: 'ecc',
            symbol: 'ECC',
            symbol_cg: 'ecc',
            name: 'ECC',
            name_cg: 'ECC',
            slug: 'eccoin'
        },
        'pasc-pascal-coin': {
            id: 'pasc-pascal-coin',
            id_cg: 'pascalcoin',
            symbol: 'PASC',
            symbol_cg: 'pasc',
            name: 'Pascal Coin',
            name_cg: 'Pascalcoin',
            slug: 'pascal-coin'
        },
        'dmd-diamond': {
            id: 'dmd-diamond',
            id_cg: 'diamond',
            symbol: 'DMD',
            symbol_cg: 'dmd',
            name: 'Diamond',
            name_cg: 'Diamond',
            slug: 'diamond'
        },
        'slr-solarcoin': {
            id: 'slr-solarcoin',
            id_cg: 'solarcoin',
            symbol: 'SLR',
            symbol_cg: 'slr',
            name: 'SolarCoin',
            name_cg: 'Solarcoin',
            slug: 'solarcoin'
        },
        'xel-elastic': {
            id: 'xel-elastic',
            id_cg: 'elastic',
            symbol: 'XEL',
            symbol_cg: 'xel',
            name: 'XEL',
            name_cg: 'XEL',
            slug: 'xel'
        },
        'pot-potcoin': {
            id: 'pot-potcoin',
            id_cg: 'potcoin',
            symbol: 'POT',
            symbol_cg: 'pot',
            name: 'PotCoin',
            name_cg: 'Potcoin',
            slug: 'potcoin'
        },
        'onion-deeponion': {
            id: 'onion-deeponion',
            id_cg: 'deeponion',
            symbol: 'ONION',
            symbol_cg: 'onion',
            name: 'DeepOnion',
            name_cg: 'DeepOnion',
            slug: 'deeponion'
        },
        'xwc-whitecoin': {
            id: 'xwc-whitecoin',
            id_cg: 'whitecoin',
            symbol: 'XWC',
            symbol_cg: 'xwc',
            name: 'WhiteCoin',
            name_cg: 'Whitecoin',
            slug: 'whitecoin'
        },
        'fair-faircoin': {
            id: 'fair-faircoin',
            id_cg: 'faircoin',
            symbol: 'FAIR',
            symbol_cg: 'fair',
            name: 'FairCoin',
            name_cg: 'Faircoin',
            slug: 'faircoin'
        },
        'sib-sibcoin': {
            id: 'sib-sibcoin',
            id_cg: 'sibcoin',
            symbol: 'SIB',
            symbol_cg: 'sib',
            name: 'SIBCoin',
            name_cg: 'SIBCoin',
            slug: 'sibcoin'
        },
        'dime-dimecoin': {
            id: 'dime-dimecoin',
            id_cg: 'dimecoin',
            symbol: 'DIME',
            symbol_cg: 'dime',
            name: 'Dimecoin',
            name_cg: 'Dimecoin',
            slug: 'dimecoin'
        },
        'ppy-peerplays': {
            id: 'ppy-peerplays',
            id_cg: 'peerplays',
            symbol: 'PPY',
            symbol_cg: 'ppy',
            name: 'Peerplays',
            name_cg: 'Peerplays',
            slug: 'peerplays-ppy'
        },
        'ion-ion': {
            id: 'ion-ion',
            id_cg: 'ion',
            symbol: 'ION',
            symbol_cg: 'ion',
            name: 'ION',
            name_cg: 'ION',
            slug: 'ion'
        },
        'blk-blackcoin': {
            id: 'blk-blackcoin',
            id_cg: 'blackcoin',
            symbol: 'BLK',
            symbol_cg: 'blk',
            name: 'BlackCoin',
            name_cg: 'BlackCoin',
            slug: 'blackcoin'
        },
        'xmy-myriad': {
            id: 'xmy-myriad',
            id_cg: 'myriadcoin',
            symbol: 'XMY',
            symbol_cg: 'xmy',
            name: 'Myriad',
            name_cg: 'Myriad',
            slug: 'myriad'
        },
        'grc-gridcoin': {
            id: 'grc-gridcoin',
            id_cg: 'gridcoin-research',
            symbol: 'GRC',
            symbol_cg: 'grc',
            name: 'GridCoin',
            name_cg: 'Gridcoin',
            slug: 'gridcoin'
        },
        'nlc2-nolimitcoin': {
            id: 'nlc2-nolimitcoin',
            id_cg: 'nolimitcoin',
            symbol: 'NLC2',
            symbol_cg: 'nlc2',
            name: 'NoLimitCoin',
            name_cg: 'NoLimitCoin',
            slug: 'nolimitcoin'
        },
        'phr-phore': {
            id: 'phr-phore',
            id_cg: 'phore',
            symbol: 'PHR',
            symbol_cg: 'phr',
            name: 'Phore',
            name_cg: 'Phore',
            slug: 'phore'
        },
        'pnd-pandacoin': {
            id: 'pnd-pandacoin',
            id_cg: 'pandacoin',
            symbol: 'PND',
            symbol_cg: 'pnd',
            name: 'Pandacoin',
            name_cg: 'Pandacoin',
            slug: 'pandacoin-pnd'
        },
        'golos-golos': {
            id: 'golos-golos',
            id_cg: 'golos',
            symbol: 'GOLOS',
            symbol_cg: 'golos',
            name: 'Golos',
            name_cg: 'Golos',
            slug: 'golos'
        },
        'omni-omni': {
            id: 'omni-omni',
            id_cg: 'omni',
            symbol: 'OMNI',
            symbol_cg: 'omni',
            name: 'Omni',
            name_cg: 'Omni',
            slug: 'omni'
        },
        'mint-mintcoin': {
            id: 'mint-mintcoin',
            id_cg: 'mintcoin',
            symbol: 'MINT',
            symbol_cg: 'mint',
            name: 'MintCoin',
            name_cg: 'Mintcoin',
            slug: 'mintcoin'
        },
        'exp-expanse': {
            id: 'exp-expanse',
            id_cg: 'expanse',
            symbol: 'EXP',
            symbol_cg: 'exp',
            name: 'Expanse',
            name_cg: 'Expanse',
            slug: 'expanse'
        },
        'dbix-dubaicoin': {
            id: 'dbix-dubaicoin',
            id_cg: 'dubaicoin-dbix',
            symbol: 'DBIX',
            symbol_cg: 'dbix',
            name: 'DubaiCoin',
            name_cg: 'DubaiCoin-DBIX',
            slug: 'dubaicoin-dbix'
        },
        'nyc-newyorkcoin': {
            id: 'nyc-newyorkcoin',
            id_cg: 'newyorkcoin',
            symbol: 'NYC',
            symbol_cg: 'nyc',
            name: 'NewYorkCoin',
            name_cg: 'NewYorkCoin',
            slug: 'newyorkcoin'
        },
        'rby-rubycoin': {
            id: 'rby-rubycoin',
            id_cg: 'rubycoin',
            symbol: 'RBY',
            symbol_cg: 'rby',
            name: 'Rubycoin',
            name_cg: 'Rubycoin',
            slug: 'rubycoin'
        },
        'bitb-bean-cash': {
            id: 'bitb-bean-cash',
            id_cg: 'bean-cash',
            symbol: 'BITB',
            symbol_cg: 'bean',
            name: 'Bean Cash',
            name_cg: 'Bean Cash',
            slug: 'bean-cash'
        },
        'linda-linda': {
            id: 'linda-linda',
            id_cg: '',
            symbol: 'LINDA',
            symbol_cg: '',
            name: 'Linda',
            name_cg: '',
            slug: ''
        },
        'mue-monetaryunit': {
            id: 'mue-monetaryunit',
            id_cg: 'monetaryunit',
            symbol: 'MUE',
            symbol_cg: 'mue',
            name: 'MonetaryUnit',
            name_cg: 'MonetaryUnit',
            slug: 'monetaryunit'
        },
        'rads-radium': {
            id: 'rads-radium',
            id_cg: 'radium',
            symbol: 'RADS',
            symbol_cg: 'rads',
            name: 'Radium',
            name_cg: 'Radium',
            slug: 'radium'
        },
        'bis-bismuth': {
            id: 'bis-bismuth',
            id_cg: 'bismuth',
            symbol: 'BIS',
            symbol_cg: 'bis',
            name: 'Bismuth',
            name_cg: 'Bismuth',
            slug: 'bismuth'
        },
        'ok-okcash': {
            id: 'ok-okcash',
            id_cg: 'okcash',
            symbol: 'OK',
            symbol_cg: 'ok',
            name: 'OKCash',
            name_cg: 'OKCash',
            slug: 'okcash'
        },
        'atb-atbcoin': {
            id: 'atb-atbcoin',
            id_cg: 'atbcoin',
            symbol: 'ATB',
            symbol_cg: 'atb',
            name: 'ATBCoin',
            name_cg: 'ATBCoin',
            slug: 'atbcoin'
        },
        'hush-hush': {
            id: 'hush-hush',
            id_cg: 'hush',
            symbol: 'HUSH',
            symbol_cg: 'hush',
            name: 'Hush',
            name_cg: 'Hush',
            slug: 'hush'
        },
        'leo-leocoin': {
            id: 'leo-leocoin',
            id_cg: 'leocoin',
            symbol: 'LEO',
            symbol_cg: 'leo',
            name: 'LEOcoin',
            name_cg: 'LEOcoin',
            slug: 'leocoin'
        },
        'gbx-gobyte': {
            id: 'gbx-gobyte',
            id_cg: 'gobyte',
            symbol: 'GBX',
            symbol_cg: 'gbx',
            name: 'GoByte',
            name_cg: 'GoByte',
            slug: 'gobyte'
        },
        'sbd-steem-dollars': {
            id: 'sbd-steem-dollars',
            id_cg: 'steem-dollars',
            symbol: 'SBD',
            symbol_cg: 'sbd',
            name: 'Steem Dollars',
            name_cg: 'Steem Dollars',
            slug: 'steem-dollars'
        },
        'ecn-e-coin': {
            id: 'ecn-e-coin',
            id_cg: '',
            symbol: 'ECN',
            symbol_cg: '',
            name: 'E-coin',
            name_cg: '',
            slug: ''
        },
        'posw-posw-coin': {
            id: 'posw-posw-coin',
            id_cg: '',
            symbol: 'POSW',
            symbol_cg: '',
            name: 'PoSW Coin',
            name_cg: '',
            slug: 'posw-coin'
        },
        'flo-flo': {
            id: 'flo-flo',
            id_cg: 'flo',
            symbol: 'FLO',
            symbol_cg: 'flo',
            name: 'FLO',
            name_cg: 'FLO',
            slug: 'flo'
        },
        'oxy-oxycoin': {
            id: 'oxy-oxycoin',
            id_cg: 'oxycoin',
            symbol: 'OXY',
            symbol_cg: 'oxy',
            name: 'Oxycoin',
            name_cg: 'Oxycoin',
            slug: 'oxycoin'
        },
        'ntrn-neutron': {
            id: 'ntrn-neutron',
            id_cg: 'neutron',
            symbol: 'NTRN',
            symbol_cg: 'ntrn',
            name: 'Neutron',
            name_cg: 'Neutron',
            slug: 'neutron'
        },
        'bsd-bitsend': {
            id: 'bsd-bitsend',
            id_cg: 'bitsend',
            symbol: 'BSD',
            symbol_cg: 'bsd',
            name: 'BitSend',
            name_cg: 'BitSend',
            slug: 'bitsend'
        },
        'enrg-energycoin': {
            id: 'enrg-energycoin',
            id_cg: 'energycoin',
            symbol: 'ENRG',
            symbol_cg: 'enrg',
            name: 'Energycoin',
            name_cg: 'Energycoin',
            slug: 'energycoin'
        },
        'lux-luxcoin': {
            id: 'lux-luxcoin',
            id_cg: 'luxcoin',
            symbol: 'LUX',
            symbol_cg: 'lux',
            name: 'LUXCoin',
            name_cg: 'LUXCoin',
            slug: 'luxcoin'
        },
        'music-musicoin': {
            id: 'music-musicoin',
            id_cg: 'musicoin',
            symbol: 'MUSIC',
            symbol_cg: 'music',
            name: 'Musicoin',
            name_cg: 'Musicoin',
            slug: ''
        },
        'clam-clams': {
            id: 'clam-clams',
            id_cg: 'clams',
            symbol: 'CLAM',
            symbol_cg: 'clam',
            name: 'Clams',
            name_cg: 'Clams',
            slug: 'clams'
        },
        'uno-unobtanium': {
            id: 'uno-unobtanium',
            id_cg: 'unobtanium',
            symbol: 'UNO',
            symbol_cg: 'uno',
            name: 'Unobtanium',
            name_cg: 'Unobtanium',
            slug: 'unobtanium'
        },
        'colx-colossusxt': {
            id: 'colx-colossusxt',
            id_cg: 'colossuscoinxt',
            symbol: 'COLX',
            symbol_cg: 'colx',
            name: 'ColossusXT',
            name_cg: 'ColossusXT',
            slug: 'colossusxt'
        },
        'seq-sequence': {
            id: 'seq-sequence',
            id_cg: 'sequence',
            symbol: 'SEQ',
            symbol_cg: 'seq',
            name: 'Sequence',
            name_cg: 'Sequence',
            slug: ''
        },
        'aby-artbyte': {
            id: 'aby-artbyte',
            id_cg: 'artbyte',
            symbol: 'ABY',
            symbol_cg: 'aby',
            name: 'ArtByte',
            name_cg: 'ArtByte',
            slug: 'artbyte'
        },
        'xmcc-monoeci': {
            id: 'xmcc-monoeci',
            id_cg: 'monacocoin',
            symbol: 'XMCC',
            symbol_cg: 'xmcc',
            name: 'Monoeci',
            name_cg: 'Monoeci',
            slug: 'monacocoin'
        },
        'pirl-pirl': {
            id: 'pirl-pirl',
            id_cg: 'pirl',
            symbol: 'PIRL',
            symbol_cg: 'pirl',
            name: 'Pirl',
            name_cg: 'Pirl',
            slug: 'pirl'
        },
        'iop-internet-of-people': {
            id: 'iop-internet-of-people',
            id_cg: 'internet-of-people',
            symbol: 'IOP',
            symbol_cg: 'iop',
            name: 'Internet of People',
            name_cg: 'Internet of People',
            slug: 'internet-of-people'
        },
        'sumo-sumokoin': {
            id: 'sumo-sumokoin',
            id_cg: 'sumokoin',
            symbol: 'SUMO',
            symbol_cg: 'sumo',
            name: 'Sumokoin',
            name_cg: 'Sumokoin',
            slug: 'sumokoin'
        },
        'xst-stealth': {
            id: 'xst-stealth',
            id_cg: 'stealthcoin',
            symbol: 'XST',
            symbol_cg: 'xst',
            name: 'Stealth',
            name_cg: 'Stealth',
            slug: 'stealth'
        },
        'xlr-solaris': {
            id: 'xlr-solaris',
            id_cg: 'solaris',
            symbol: 'XLR',
            symbol_cg: 'xlr',
            name: 'Solaris',
            name_cg: 'Solaris',
            slug: 'solaris'
        },
        'nor-noir': {
            id: 'nor-noir',
            id_cg: 'bring',
            symbol: 'NOR',
            symbol_cg: 'nor',
            name: 'Noir',
            name_cg: 'Noir',
            slug: 'noir'
        },
        'xpm-primecoin': {
            id: 'xpm-primecoin',
            id_cg: 'primecoin',
            symbol: 'XPM',
            symbol_cg: 'xpm',
            name: 'Primecoin',
            name_cg: 'Primecoin',
            slug: 'primecoin'
        },
        'tips-fedoracoin': {
            id: 'tips-fedoracoin',
            id_cg: 'fedoracoin',
            symbol: 'TIPS',
            symbol_cg: 'tips',
            name: 'FedoraCoin',
            name_cg: 'Fedoracoin',
            slug: 'fedoracoin'
        },
        'gcr-global-currency-reserve': {
            id: 'gcr-global-currency-reserve',
            id_cg: 'global-currency-reserve',
            symbol: 'GCR',
            symbol_cg: 'gcr',
            name: 'Global Currency Reserve',
            name_cg: 'Global Currency Reserve',
            slug: 'global-currency-reserve'
        },
        'bbr-boolberry': {
            id: 'bbr-boolberry',
            id_cg: 'boolberry',
            symbol: 'BBR',
            symbol_cg: 'bbr',
            name: 'Boolberry',
            name_cg: 'BoolBerry',
            slug: 'boolberry'
        },
        'geo-geocoin': {
            id: 'geo-geocoin',
            id_cg: 'geocoin',
            symbol: 'GEO',
            symbol_cg: 'geo',
            name: 'GeoCoin',
            name_cg: 'Geocoin',
            slug: 'geocoin'
        },
        'pink-pinkcoin': {
            id: 'pink-pinkcoin',
            id_cg: 'pinkcoin',
            symbol: 'PINK',
            symbol_cg: 'pink',
            name: 'Pinkcoin',
            name_cg: 'Pinkcoin',
            slug: 'pinkcoin'
        },
        'frst-firstcoin': {
            id: 'frst-firstcoin',
            id_cg: '',
            symbol: 'FRST',
            symbol_cg: '',
            name: 'FirstCoin',
            name_cg: '',
            slug: 'firstcoin'
        },
        'bwk-bulwark': {
            id: 'bwk-bulwark',
            id_cg: 'bulwark',
            symbol: 'BWK',
            symbol_cg: 'bwk',
            name: 'Bulwark',
            name_cg: 'Bulwark',
            slug: 'bulwark'
        },
        'esp-espers': {
            id: 'esp-espers',
            id_cg: 'espers',
            symbol: 'ESP',
            symbol_cg: 'esp',
            name: 'Espers',
            name_cg: 'Espers',
            slug: 'espers'
        },
        'inn-innova': {
            id: 'inn-innova',
            id_cg: 'innova',
            symbol: 'INN',
            symbol_cg: 'inn',
            name: 'Innova',
            name_cg: 'Innova',
            slug: 'innova'
        },
        'sphr-sphere': {
            id: 'sphr-sphere',
            id_cg: 'sphere',
            symbol: 'SPHR',
            symbol_cg: 'sphr',
            name: 'Sphere',
            name_cg: 'Sphere',
            slug: 'sphere'
        },
        'rec-regalcoin': {
            id: 'rec-regalcoin',
            id_cg: '',
            symbol: 'REC',
            symbol_cg: '',
            name: 'Regalcoin',
            name_cg: '',
            slug: 'regalcoin'
        },
        'adc-audiocoin': {
            id: 'adc-audiocoin',
            id_cg: 'audiocoin',
            symbol: 'ADC',
            symbol_cg: 'adc',
            name: 'AudioCoin',
            name_cg: 'AudioCoin',
            slug: 'audiocoin'
        },
        'sprts-sprouts': {
            id: 'sprts-sprouts',
            id_cg: 'sprouts',
            symbol: 'SPRTS',
            symbol_cg: 'sprts',
            name: 'Sprouts',
            name_cg: 'Sprouts',
            slug: 'sprouts'
        },
        'send-social-send': {
            id: 'send-social-send',
            id_cg: 'social-send',
            symbol: 'SEND',
            symbol_cg: 'send',
            name: 'Social Send',
            name_cg: 'Social Send',
            slug: 'social-send'
        },
        'polis-polis': {
            id: 'polis-polis',
            id_cg: 'polis',
            symbol: 'POLIS',
            symbol_cg: 'polis',
            name: 'Polis',
            name_cg: 'Polis',
            slug: 'polis'
        },
        'dot-polkadot': {
            id: 'dot-polkadot',
            id_cg: 'polkadot',
            symbol: 'DOT',
            symbol_cg: 'dot',
            name: 'Polkadot',
            name_cg: 'Polkadot',
            slug: 'polkadot'
        },
        'unit-universal-currency': {
            id: 'unit-universal-currency',
            id_cg: 'universal-currency',
            symbol: 'UNIT',
            symbol_cg: 'unit',
            name: 'Universal Currency',
            name_cg: 'Universal Currency',
            slug: 'universal-currency'
        },
        'vsx-vsync': {
            id: 'vsx-vsync',
            id_cg: 'vsync',
            symbol: 'VSX',
            symbol_cg: 'vsx',
            name: 'Vsync',
            name_cg: 'Vsync',
            slug: 'vsync-vsx'
        },
        'eac-earthcoin': {
            id: 'eac-earthcoin',
            id_cg: 'earthcoin',
            symbol: 'EAC',
            symbol_cg: 'eac',
            name: 'EarthCoin',
            name_cg: 'Earthcoin',
            slug: ''
        },
        'btdx-bitcloud': {
            id: 'btdx-bitcloud',
            id_cg: 'bitcloud',
            symbol: 'BTDX',
            symbol_cg: 'btdx',
            name: 'Bitcloud',
            name_cg: 'Bitcloud',
            slug: 'bitcloud'
        },
        'cure-curecoin': {
            id: 'cure-curecoin',
            id_cg: 'curecoin',
            symbol: 'CURE',
            symbol_cg: 'cure',
            name: 'Curecoin',
            name_cg: 'Curecoin',
            slug: 'curecoin'
        },
        'ufo-uniform-fiscal-object': {
            id: 'ufo-uniform-fiscal-object',
            id_cg: 'ufocoin',
            symbol: 'UFO',
            symbol_cg: 'ufo',
            name: 'Uniform Fiscal Object',
            name_cg: 'Uniform Fiscal Object',
            slug: 'uniform-fiscal-object'
        },
        'xto-tao': {
            id: 'xto-tao',
            id_cg: 'tao-network',
            symbol: 'TAO',
            symbol_cg: 'tao',
            name: 'Tao',
            name_cg: 'Tao Network',
            slug: ''
        },
        'dope-dopecoin': {
            id: 'dope-dopecoin',
            id_cg: 'dopecoin',
            symbol: 'DOPE',
            symbol_cg: 'dope',
            name: 'DopeCoin',
            name_cg: 'DopeCoin',
            slug: 'dopecoin'
        },
        'spr-spreadcoin': {
            id: 'spr-spreadcoin',
            id_cg: '',
            symbol: 'SPR',
            symbol_cg: '',
            name: 'SpreadCoin',
            name_cg: '',
            slug: 'spreadcoin'
        },
        'vrm-veriumreserve': {
            id: 'vrm-veriumreserve',
            id_cg: 'veriumreserve',
            symbol: 'VRM',
            symbol_cg: 'vrm',
            name: 'VeriumReserve',
            name_cg: 'VeriumReserve',
            slug: 'veriumreserve'
        },
        'tzc-trezarcoin': {
            id: 'tzc-trezarcoin',
            id_cg: 'trezarcoin',
            symbol: 'TZC',
            symbol_cg: 'tzc',
            name: 'TrezarCoin',
            name_cg: 'TrezarCoin',
            slug: 'trezarcoin'
        },
        'usnbt-nubits': {
            id: 'usnbt-nubits',
            id_cg: 'nubits',
            symbol: 'USNBT',
            symbol_cg: 'usnbt',
            name: 'NuBits',
            name_cg: 'NuBits',
            slug: 'nubits'
        },
        'tx-transfercoin': {
            id: 'tx-transfercoin',
            id_cg: 'transfercoin',
            symbol: 'TX',
            symbol_cg: 'tx',
            name: 'TransferCoin',
            name_cg: 'Transfercoin',
            slug: 'transfercoin'
        },
        'ptc-pesetacoin': {
            id: 'ptc-pesetacoin',
            id_cg: 'pesetacoin',
            symbol: 'PTC',
            symbol_cg: 'ptc',
            name: 'Pesetacoin',
            name_cg: 'Pesetacoin',
            slug: 'pesetacoin'
        },
        'lthn-lethean': {
            id: 'lthn-lethean',
            id_cg: 'intensecoin',
            symbol: 'LTHN',
            symbol_cg: 'lthn',
            name: 'Lethean',
            name_cg: 'Lethean',
            slug: 'lethean'
        },
        'zny-bitzeny': {
            id: 'zny-bitzeny',
            id_cg: 'bitzeny',
            symbol: 'ZNY',
            symbol_cg: 'zny',
            name: 'Bitzeny',
            name_cg: 'BitZeny',
            slug: 'bitzeny'
        },
        'meme-memetic-pepecoin': {
            id: 'meme-memetic-pepecoin',
            id_cg: 'memetic',
            symbol: 'MEME',
            symbol_cg: 'meme',
            name: 'Memetic / PepeCoin',
            name_cg: 'Memetic',
            slug: 'memetic'
        },
        'synx-syndicate': {
            id: 'synx-syndicate',
            id_cg: 'syndicate',
            symbol: 'SYNX',
            symbol_cg: 'synx',
            name: 'Syndicate',
            name_cg: 'Syndicate',
            slug: ''
        },
        'mag-magnet': {
            id: 'mag-magnet',
            id_cg: 'magnet',
            symbol: 'MAG',
            symbol_cg: 'mag',
            name: 'Magnet',
            name_cg: 'Magnet',
            slug: 'magnet'
        },
        'bela-bela': {
            id: 'bela-bela',
            id_cg: 'belacoin',
            symbol: 'BELA',
            symbol_cg: 'bela',
            name: 'Bela',
            name_cg: 'Belacoin',
            slug: 'belacoin'
        },
        'tcc-the-champcoin': {
            id: 'tcc-the-champcoin',
            id_cg: 'the-champcoin',
            symbol: 'TCC',
            symbol_cg: 'tcc',
            name: 'The ChampCoin',
            name_cg: 'The ChampCoin',
            slug: 'the-champcoin'
        },
        'snrg-synergy': {
            id: 'snrg-synergy',
            id_cg: 'synergy',
            symbol: 'SNRG',
            symbol_cg: 'snrg',
            name: 'Synergy',
            name_cg: 'Synergy',
            slug: 'synergy'
        },
        'hyp-hyperstake': {
            id: 'hyp-hyperstake',
            id_cg: 'hyperstake',
            symbol: 'HYP',
            symbol_cg: 'hyp',
            name: 'HyperStake',
            name_cg: 'HyperStake',
            slug: 'hyperstake'
        },
        'xbc-bitcoin-plus': {
            id: 'xbc-bitcoin-plus',
            id_cg: 'bitcoin-plus',
            symbol: 'XBC',
            symbol_cg: 'xbc',
            name: 'Bitcoin Plus',
            name_cg: 'Bitcoin Plus',
            slug: 'bitcoin-plus'
        },
        'xlq-alqo': {
            id: 'xlq-alqo',
            id_cg: 'alqo',
            symbol: 'XLQ',
            symbol_cg: 'xlq',
            name: 'ALQO',
            name_cg: 'ALQO',
            slug: 'alqo'
        },
        'nvc-novacoin': {
            id: 'nvc-novacoin',
            id_cg: 'novacoin',
            symbol: 'NVC',
            symbol_cg: 'nvc',
            name: 'Novacoin',
            name_cg: 'Novacoin',
            slug: 'novacoin'
        },
        'cann-cannabiscoin': {
            id: 'cann-cannabiscoin',
            id_cg: 'cannabiscoin',
            symbol: 'CANN',
            symbol_cg: 'cann',
            name: 'CannabisCoin',
            name_cg: 'CannabisCoin',
            slug: 'cannabiscoin'
        },
        'edr-e-dinar-coin': {
            id: 'edr-e-dinar-coin',
            id_cg: 'edc-blockchain',
            symbol: 'EDC',
            symbol_cg: 'edc',
            name: 'EDC Blockchain',
            name_cg: 'EDC Blockchain',
            slug: 'edc-blockchain'
        },
        'vivo-vivo': {
            id: 'vivo-vivo',
            id_cg: 'vivo',
            symbol: 'VIVO',
            symbol_cg: 'vivo',
            name: 'VIVO',
            name_cg: 'VIVO',
            slug: 'vivo'
        },
        'aur-auroracoin': {
            id: 'aur-auroracoin',
            id_cg: 'auroracoin',
            symbol: 'AUR',
            symbol_cg: 'aur',
            name: 'Auroracoin',
            name_cg: 'Auroracoin',
            slug: 'auroracoin'
        },
        'gld-goldcoin': {
            id: 'gld-goldcoin',
            id_cg: 'goldcoin',
            symbol: 'GLC',
            symbol_cg: 'glc',
            name: 'GoldCoin',
            name_cg: 'Goldcoin',
            slug: 'goldcoin'
        },
        'btcz-bitcoinz': {
            id: 'btcz-bitcoinz',
            id_cg: 'bitcoinz',
            symbol: 'BTCZ',
            symbol_cg: 'btcz',
            name: 'BitcoinZ',
            name_cg: 'BitcoinZ',
            slug: 'bitcoinz'
        },
        'kore-kore': {
            id: 'kore-kore',
            id_cg: 'korecoin',
            symbol: 'KORE',
            symbol_cg: 'kore',
            name: 'Kore',
            name_cg: 'KoreCoin',
            slug: ''
        },
        'crave-crave': {
            id: 'crave-crave',
            id_cg: 'crave',
            symbol: 'CRAVE',
            symbol_cg: 'crave',
            name: 'Crave',
            name_cg: 'Crave',
            slug: 'crave'
        },
        '2give-2give': {
            id: '2give-2give',
            id_cg: '2give',
            symbol: '2GIVE',
            symbol_cg: '2give',
            name: '2GIVE',
            name_cg: '2GIVE',
            slug: '2give'
        },
        'xgox-xgox': {
            id: 'xgox-xgox',
            id_cg: 'xgox',
            symbol: 'XGOX',
            symbol_cg: 'xgox',
            name: 'XGOX',
            name_cg: 'XGOX',
            slug: 'xgox'
        },
        'bpl-blockpool': {
            id: 'bpl-blockpool',
            id_cg: 'blockpool',
            symbol: 'BPL',
            symbol_cg: 'bpl',
            name: 'Blockpool',
            name_cg: 'Blockpool',
            slug: ''
        },
        'zer-zero': {
            id: 'zer-zero',
            id_cg: 'zero',
            symbol: 'ZER',
            symbol_cg: 'zer',
            name: 'Zero',
            name_cg: 'Zero',
            slug: 'zero'
        },
        'rup-rupee': {
            id: 'rup-rupee',
            id_cg: 'rupee',
            symbol: 'RUP',
            symbol_cg: 'rup',
            name: 'Rupee',
            name_cg: 'Rupee',
            slug: 'rupee'
        },
        'klc-kilocoin': {
            id: 'klc-kilocoin',
            id_cg: 'kalkicoin',
            symbol: 'KLC',
            symbol_cg: 'klc',
            name: 'KiloCoin',
            name_cg: 'Kalkicoin',
            slug: ''
        },
        'pzm-prizm': {
            id: 'pzm-prizm',
            id_cg: 'prizm',
            symbol: 'PZM',
            symbol_cg: 'pzm',
            name: 'PRIZM',
            name_cg: 'Prizm',
            slug: 'prizm'
        },
        'sxc-sexcoin': {
            id: 'sxc-sexcoin',
            id_cg: 'sexcoin',
            symbol: 'SXC',
            symbol_cg: 'sxc',
            name: 'Sexcoin',
            name_cg: 'Sexcoin',
            slug: 'sexcoin'
        },
        'toa-toacoin': {
            id: 'toa-toacoin',
            id_cg: 'toacoin',
            symbol: 'TOA',
            symbol_cg: 'toa',
            name: 'ToaCoin',
            name_cg: 'ToaCoin',
            slug: 'toacoin'
        },
        'buzz-buzzcoin': {
            id: 'buzz-buzzcoin',
            id_cg: 'buzzcoin',
            symbol: 'BUZZ',
            symbol_cg: 'buzz',
            name: 'BuzzCoin',
            name_cg: 'BuzzCoin',
            slug: 'buzzcoin'
        },
        'hwc-hollywoodcoin': {
            id: 'hwc-hollywoodcoin',
            id_cg: 'hollywoodcoin',
            symbol: 'HWC',
            symbol_cg: 'hwc',
            name: 'HollyWoodCoin',
            name_cg: 'HollyWoodCoin',
            slug: 'hollywoodcoin'
        },
        'note-dnotes': {
            id: 'note-dnotes',
            id_cg: 'dnotes',
            symbol: 'NOTE',
            symbol_cg: 'note',
            name: 'DNotes',
            name_cg: 'DNotes',
            slug: 'dnotes'
        },
        'excl-exclusivecoin': {
            id: 'excl-exclusivecoin',
            id_cg: 'exclusivecoin',
            symbol: 'EXCL',
            symbol_cg: 'excl',
            name: 'ExclusiveCoin',
            name_cg: 'ExclusiveCoin',
            slug: 'exclusivecoin'
        },
        'carbon-carboncoin': {
            id: 'carbon-carboncoin',
            id_cg: 'carboncoin',
            symbol: 'CARBON',
            symbol_cg: 'carbon',
            name: 'Carboncoin',
            name_cg: 'Carboncoin',
            slug: 'carboncoin'
        },
        'proc-procurrency': {
            id: 'proc-procurrency',
            id_cg: 'procurrency',
            symbol: 'PROC',
            symbol_cg: 'proc',
            name: 'ProCurrency',
            name_cg: 'ProCurrency',
            slug: 'procurrency'
        },
        '1337-elite': {
            id: '1337-elite',
            id_cg: '1337',
            symbol: '1337',
            symbol_cg: '1337',
            name: 'Elite',
            name_cg: 'Elite',
            slug: '1337coin'
        },
        'start-startcoin': {
            id: 'start-startcoin',
            id_cg: 'startcoin',
            symbol: 'START',
            symbol_cg: 'start',
            name: 'Startcoin',
            name_cg: 'Startcoin',
            slug: 'startcoin'
        },
        'put-putincoin': {
            id: 'put-putincoin',
            id_cg: 'putincoin',
            symbol: 'PUT',
            symbol_cg: 'put',
            name: 'PutinCoin',
            name_cg: 'PutinCoin',
            slug: 'putincoin'
        },
        'ella-ellaism': {
            id: 'ella-ellaism',
            id_cg: 'ellaism',
            symbol: 'ELLA',
            symbol_cg: 'ella',
            name: 'Ellaism',
            name_cg: 'Ellaism',
            slug: 'ellaism'
        },
        'eqt-equitrader': {
            id: 'eqt-equitrader',
            id_cg: 'equitrader',
            symbol: 'EQT',
            symbol_cg: 'eqt',
            name: 'EquiTrader',
            name_cg: 'EquiTrader',
            slug: 'equitrader'
        },
        'ixc-ixcoin': {
            id: 'ixc-ixcoin',
            id_cg: 'ixcoin',
            symbol: 'IXC',
            symbol_cg: 'ixc',
            name: 'Ixcoin',
            name_cg: 'Ixcoin',
            slug: 'ixcoin'
        },
        'ebst-eboost': {
            id: 'ebst-eboost',
            id_cg: 'eboost',
            symbol: 'EBST',
            symbol_cg: 'ebst',
            name: 'eBoost',
            name_cg: 'eBoost',
            slug: 'eboostcoin'
        },
        'gcn-gcn-coin': {
            id: 'gcn-gcn-coin',
            id_cg: 'gcn-coin',
            symbol: 'GCN',
            symbol_cg: 'gcn',
            name: 'GCN Coin',
            name_cg: 'GCN Coin',
            slug: 'gcn-coin'
        },
        'luna-terra':{
            id: 'luna-terra',
            id_cg: 'terra-luna',
            symbol: 'LUNA',
            symbol_cg: 'luna',
            name: 'LUNA',
            name_cg: 'Terra',
            slug: 'luna'
        },
        'trc-terracoin': {
            id: 'trc-terracoin',
            id_cg: 'terracoin',
            symbol: 'TRC',
            symbol_cg: 'trc',
            name: 'Terracoin',
            name_cg: 'Terracoin',
            slug: 'terracoin'
        },
        'dyn-dynamic': {
            id: 'dyn-dynamic',
            id_cg: 'dynamic',
            symbol: 'DYN',
            symbol_cg: 'dyn',
            name: 'Dynamic',
            name_cg: 'Dynamic',
            slug: 'dynamiccoin'
        },
        'egc-evergreencoin': {
            id: 'egc-evergreencoin',
            id_cg: 'evergreencoin',
            symbol: 'EGC',
            symbol_cg: 'egc',
            name: 'EverGreenCoin',
            name_cg: 'EverGreenCoin',
            slug: 'evergreencoin'
        },
        'mxt-martexcoin': {
            id: 'mxt-martexcoin',
            id_cg: 'martexcoin',
            symbol: 'MXT',
            symbol_cg: 'mxt',
            name: 'MarteXcoin',
            name_cg: 'MarteXcoin',
            slug: 'martexcoin'
        },
        'xmg-magi': {
            id: 'xmg-magi',
            id_cg: 'magi',
            symbol: 'XMG',
            symbol_cg: 'xmg',
            name: 'Magi',
            name_cg: 'Magi',
            slug: 'magi'
        },
        'qrk-quark': {
            id: 'qrk-quark',
            id_cg: 'quark',
            symbol: 'QRK',
            symbol_cg: 'qrk',
            name: 'Quark',
            name_cg: 'Quark',
            slug: 'quark'
        },
        'zeit-zeitcoin': {
            id: 'zeit-zeitcoin',
            id_cg: 'zeitcoin',
            symbol: 'ZEIT',
            symbol_cg: 'zeit',
            name: 'Zeitcoin',
            name_cg: 'Zeitcoin',
            slug: 'zeitcoin'
        },
        'krb-karbo': {
            id: 'krb-karbo',
            id_cg: 'karbo',
            symbol: 'KRB',
            symbol_cg: 'krb',
            name: 'Karbo',
            name_cg: 'Karbo',
            slug: 'karbo'
        },
        'blu-bluecoin': {
            id: 'blu-bluecoin',
            id_cg: 'bluecoin',
            symbol: 'BLU',
            symbol_cg: 'blu',
            name: 'BlueCoin',
            name_cg: 'Bluecoin',
            slug: 'bluecoin'
        },
        'for-force': {
            id: 'for-force',
            id_cg: 'force-network',
            symbol: 'FOR',
            symbol_cg: 'for',
            name: 'FORCE',
            name_cg: 'Force Network',
            slug: 'force'
        },
        'v-version': {
            id: 'v-version',
            id_cg: 'version',
            symbol: 'V',
            symbol_cg: 'v',
            name: 'Version',
            name_cg: 'Version',
            slug: 'version'
        },
        'pkb-parkbyte': {
            id: 'pkb-parkbyte',
            id_cg: 'parkbyte',
            symbol: 'PKB',
            symbol_cg: 'pkb',
            name: 'ParkByte',
            name_cg: 'ParkByte',
            slug: 'parkbyte'
        },
        'efl-e-gulden': {
            id: 'efl-e-gulden',
            id_cg: 'electronicgulden',
            symbol: 'EFL',
            symbol_cg: 'efl',
            name: 'e-Gulden',
            name_cg: 'Electronic Gulden',
            slug: 'e-gulden'
        },
        'dp-digitalprice': {
            id: 'dp-digitalprice',
            id_cg: 'digitalprice',
            symbol: 'DP',
            symbol_cg: 'dp',
            name: 'DigitalPrice',
            name_cg: 'DigitalPrice',
            slug: 'digitalprice'
        },
        'anc-anoncoin': {
            id: 'anc-anoncoin',
            id_cg: 'anoncoin',
            symbol: 'ANC',
            symbol_cg: 'anc',
            name: 'Anoncoin',
            name_cg: 'Anoncoin',
            slug: 'anoncoin'
        },
        'monk-monkey-project': {
            id: 'monk-monkey-project',
            id_cg: 'monkey-project',
            symbol: 'MONK',
            symbol_cg: 'monk',
            name: 'Monkey Project',
            name_cg: 'Monkey Project',
            slug: 'monkey-project'
        },
        'gcc-global-cryptocurrency': {
            id: 'gcc-global-cryptocurrency',
            id_cg: 'thegcccoin',
            symbol: 'GCC',
            symbol_cg: 'gcc',
            name: 'Global Cryptocurrency',
            name_cg: 'Global Cryptocurrency',
            slug: 'global-cryptocurrency'
        },
        'stak-straks': {
            id: 'stak-straks',
            id_cg: 'straks',
            symbol: 'STAK',
            symbol_cg: 'stak',
            name: 'STRAKS',
            name_cg: 'STRAKS',
            slug: 'straks'
        },
        'arc-advanced-technology-coin': {
            id: 'arc-advanced-technology-coin',
            id_cg: 'arcticcoin',
            symbol: 'ARC',
            symbol_cg: 'arc',
            name: 'Advanced Technology Coin',
            name_cg: 'Advanced Technology Coin',
            slug: 'arcticcoin'
        },
        'linx-linx': {
            id: 'linx-linx',
            id_cg: 'linx',
            symbol: 'LINX',
            symbol_cg: 'linx',
            name: 'Linx',
            name_cg: 'Linx',
            slug: 'linx'
        },
        'yoc-yocoin': {
            id: 'yoc-yocoin',
            id_cg: 'yocoin',
            symbol: 'YOC',
            symbol_cg: 'yoc',
            name: 'Yocoin',
            name_cg: 'Yocoin',
            slug: 'yocoin'
        },
        'pop-popularcoin': {
            id: 'pop-popularcoin',
            id_cg: 'popularcoin',
            symbol: 'POP',
            symbol_cg: 'pop',
            name: 'PopularCoin',
            name_cg: 'PopularCoin',
            slug: 'popularcoin'
        },
        'btcs-bitcoin-scrypt': {
            id: 'btcs-bitcoin-scrypt',
            id_cg: 'bitcoin-scrypt',
            symbol: 'BTCS',
            symbol_cg: 'btcs',
            name: 'Bitcoin Scrypt',
            name_cg: 'Bitcoin Scrypt',
            slug: 'bitcoin-scrypt'
        },
        'wdc-worldcoin': {
            id: 'wdc-worldcoin',
            id_cg: 'worldcoin',
            symbol: 'WDC',
            symbol_cg: 'wdc',
            name: 'WorldCoin',
            name_cg: 'WorldCoin',
            slug: 'worldcoin'
        },
        'd-denarius': {
            id: 'd-denarius',
            id_cg: 'denarius',
            symbol: 'D',
            symbol_cg: 'd',
            name: 'Denarius',
            name_cg: 'Denarius',
            slug: 'denarius-dnr'
        },
        'cmpco-campuscoin': {
            id: 'cmpco-campuscoin',
            id_cg: '',
            symbol: 'CC',
            symbol_cg: '',
            name: 'CampusCoin',
            name_cg: '',
            slug: ''
        },
        'unify-unify': {
            id: 'unify-unify',
            id_cg: 'unify',
            symbol: 'UNIFY',
            symbol_cg: 'unify',
            name: 'Unify',
            name_cg: 'Unify',
            slug: 'unify'
        },
        'mec-megacoin': {
            id: 'mec-megacoin',
            id_cg: 'megacoin',
            symbol: 'MEC',
            symbol_cg: 'mec',
            name: 'Megacoin',
            name_cg: 'Megacoin',
            slug: 'megacoin'
        },
        'rns-renos': {
            id: 'rns-renos',
            id_cg: 'renos',
            symbol: 'RNS',
            symbol_cg: 'rns',
            name: 'Renos',
            name_cg: 'Renos',
            slug: 'renos'
        },
        'moin-moin': {
            id: 'moin-moin',
            id_cg: 'moin',
            symbol: 'MOIN',
            symbol_cg: 'moin',
            name: 'Moin',
            name_cg: 'Moin',
            slug: 'moin'
        },
        'insn-insanecoin': {
            id: 'insn-insanecoin',
            id_cg: 'insanecoin',
            symbol: 'INSN',
            symbol_cg: 'insn',
            name: 'InsaneCoin',
            name_cg: 'INSaNe',
            slug: 'insanecoin-insn'
        },
        'dft-draftcoin': {
            id: 'dft-draftcoin',
            id_cg: 'draftcoin',
            symbol: 'DFT',
            symbol_cg: 'dft',
            name: 'DraftCoin',
            name_cg: 'DraftCoin',
            slug: 'draftcoin'
        },
        'dcy-dinastycoin': {
            id: 'dcy-dinastycoin',
            id_cg: 'dinastycoin',
            symbol: 'DCY',
            symbol_cg: 'dcy',
            name: 'Dinastycoin',
            name_cg: 'Dinastycoin',
            slug: 'dinastycoin'
        },
        'cnt-centurion': {
            id: 'cnt-centurion',
            id_cg: 'centurion',
            symbol: 'CNT',
            symbol_cg: 'cnt',
            name: 'Centurion',
            name_cg: 'Centurion',
            slug: 'centurion'
        },
        'fjc-fujicoin': {
            id: 'fjc-fujicoin',
            id_cg: 'fujicoin',
            symbol: 'FJC',
            symbol_cg: 'fjc',
            name: 'FujiCoin',
            name_cg: 'Fujicoin',
            slug: 'fujicoin'
        },
        'adz-adzcoin': {
            id: 'adz-adzcoin',
            id_cg: 'adzcoin',
            symbol: 'ADZ',
            symbol_cg: 'adz',
            name: 'Adzcoin',
            name_cg: 'Adzcoin',
            slug: 'adzcoin'
        },
        'bro-bitradio': {
            id: 'bro-bitradio',
            id_cg: 'bitradio',
            symbol: 'BRO',
            symbol_cg: 'bro',
            name: 'Bitradio',
            name_cg: 'Bitradio',
            slug: 'bitradio'
        },
        'cdn-canada-ecoin': {
            id: 'cdn-canada-ecoin',
            id_cg: 'canada-ecoin',
            symbol: 'CDN',
            symbol_cg: 'cdn',
            name: 'Canada eCoin',
            name_cg: 'Canada eCoin',
            slug: ''
        },
        'ele-elementrem': {
            id: 'ele-elementrem',
            id_cg: 'elementrem',
            symbol: 'ELE',
            symbol_cg: 'ele',
            name: 'Elementrem',
            name_cg: 'Elementrem',
            slug: 'elementrem'
        },
        'xcn-cryptonite': {
            id: 'xcn-cryptonite',
            id_cg: 'cryptonite',
            symbol: 'XCN',
            symbol_cg: 'xcn',
            name: 'Cryptonite',
            name_cg: 'Cryptonite',
            slug: 'cryptonite'
        },
        'ldoge-litedoge': {
            id: 'ldoge-litedoge',
            id_cg: 'litedoge',
            symbol: 'LDOGE',
            symbol_cg: 'ldoge',
            name: 'LiteDoge',
            name_cg: 'LiteDoge',
            slug: 'litedoge'
        },
        'sono-sono': {
            id: 'sono-sono',
            id_cg: 'sono',
            symbol: 'SONO',
            symbol_cg: 'sono',
            name: 'SONO',
            name_cg: 'SONO',
            slug: 'altcommunity-coin'
        },
        'bta-bata': {
            id: 'bta-bata',
            id_cg: 'bata',
            symbol: 'BTA',
            symbol_cg: 'bta',
            name: 'Bata',
            name_cg: 'Bata',
            slug: 'bata'
        },
        'gre-greencoin': {
            id: 'gre-greencoin',
            id_cg: 'greencoin',
            symbol: 'GRE',
            symbol_cg: 'gre',
            name: 'Greencoin',
            name_cg: 'Greencoin',
            slug: ''
        },
        'dsr-desire': {
            id: 'dsr-desire',
            id_cg: 'desire',
            symbol: 'DSR',
            symbol_cg: 'dsr',
            name: 'Desire',
            name_cg: 'Desire',
            slug: 'desire'
        },
        'iflt-inflationcoin': {
            id: 'iflt-inflationcoin',
            id_cg: 'inflationcoin',
            symbol: 'IFLT',
            symbol_cg: 'iflt',
            name: 'InflationCoin',
            name_cg: 'InflationCoin',
            slug: 'inflationcoin'
        },
        'mac-machinecoin': {
            id: 'mac-machinecoin',
            id_cg: 'machinecoin',
            symbol: 'MAC',
            symbol_cg: 'mac',
            name: 'Machinecoin',
            name_cg: 'Machinecoin',
            slug: ''
        },
        'opc-op-coin': {
            id: 'opc-op-coin',
            id_cg: 'op-coin',
            symbol: 'OPC',
            symbol_cg: 'opc',
            name: 'OP Coin',
            name_cg: 'OP Coin',
            slug: 'op-coin'
        },
        '42-42-coin': {
            id: '42-42-coin',
            id_cg: '42-coin',
            symbol: '42',
            symbol_cg: '42',
            name: '42-coin',
            name_cg: '42-coin',
            slug: '42-coin'
        },
        'kek-kekcoin': {
            id: 'kek-kekcoin',
            id_cg: 'kekcoin',
            symbol: 'KEK',
            symbol_cg: 'kek',
            name: 'KekCoin',
            name_cg: 'KekCoin',
            slug: 'kekcoin'
        },
        'tes-teslacoin': {
            id: 'tes-teslacoin',
            id_cg: 'teslacoin',
            symbol: 'TES',
            symbol_cg: 'tes',
            name: 'TeslaCoin',
            name_cg: 'Teslacoin',
            slug: ''
        },
        'maza-maza': {
            id: 'maza-maza',
            id_cg: '',
            symbol: 'MAZA',
            symbol_cg: '',
            name: 'MAZA',
            name_cg: '',
            slug: ''
        },
        'crm-cream': {
            id: 'crm-cream',
            id_cg: 'cream',
            symbol: 'CRM',
            symbol_cg: 'crm',
            name: 'Cream',
            name_cg: 'Cream',
            slug: 'cream'
        },
        'ttc-tittiecoin': {
            id: 'ttc-tittiecoin',
            id_cg: 'tittiecoin',
            symbol: 'TIT',
            symbol_cg: 'tit',
            name: 'TittieCoin',
            name_cg: 'TittieCoin',
            slug: 'tittiecoin'
        },
        'vidz-purevidz': {
            id: 'vidz-purevidz',
            id_cg: '',
            symbol: 'VIDZ',
            symbol_cg: '',
            name: 'PureVidz',
            name_cg: '',
            slug: 'purevidz'
        },
        'ccrb-cryptocarbon': {
            id: 'ccrb-cryptocarbon',
            id_cg: 'cryptocarbon',
            symbol: 'CCRB',
            symbol_cg: 'ccrb',
            name: 'CryptoCarbon',
            name_cg: 'CryptoCarbon',
            slug: 'cryptocarbon'
        },
        'dgc-digitalcoin': {
            id: 'dgc-digitalcoin',
            id_cg: 'digitalcoin',
            symbol: 'DGC',
            symbol_cg: 'dgc',
            name: 'Digitalcoin',
            name_cg: 'Digitalcoin',
            slug: 'digitalcoin'
        },
        'orb-orbitcoin': {
            id: 'orb-orbitcoin',
            id_cg: 'orbitcoin',
            symbol: 'ORB',
            symbol_cg: 'orb',
            name: 'Orbitcoin',
            name_cg: 'Orbitcoin',
            slug: 'orbitcoin'
        },
        'htc-hitcoin': {
            id: 'htc-hitcoin',
            id_cg: 'hitcoin',
            symbol: 'HTC',
            symbol_cg: 'htc',
            name: 'HitCoin',
            name_cg: 'Hitcoin',
            slug: ''
        },
        'zet-zetacoin': {
            id: 'zet-zetacoin',
            id_cg: 'zetacoin',
            symbol: 'ZET',
            symbol_cg: 'zet',
            name: 'Zetacoin',
            name_cg: 'Zetacoin',
            slug: 'zetacoin'
        },
        'era-era': {
            id: 'era-era',
            id_cg: '',
            symbol: 'ERA',
            symbol_cg: '',
            name: 'ERA',
            name_cg: '',
            slug: ''
        },
        'zeni-zennies': {
            id: 'zeni-zennies',
            id_cg: '',
            symbol: 'ZENI',
            symbol_cg: '',
            name: 'Zennies',
            name_cg: '',
            slug: 'zennies'
        },
        'troll-trollcoin': {
            id: 'troll-trollcoin',
            id_cg: 'trollcoin',
            symbol: 'TROLL',
            symbol_cg: 'troll',
            name: 'Trollcoin',
            name_cg: 'Trollcoin',
            slug: 'trollcoin'
        },
        'cpc-capricoin': {
            id: 'cpc-capricoin',
            id_cg: 'capricoin',
            symbol: 'CPC',
            symbol_cg: 'cpc',
            name: 'Capricoin',
            name_cg: 'Capricoin',
            slug: 'capricoin'
        },
        'visio-visio': {
            id: 'visio-visio',
            id_cg: 'visio',
            symbol: 'VISIO',
            symbol_cg: 'visio',
            name: 'Visio',
            name_cg: 'Visio',
            slug: ''
        },
        'ent-eternity': {
            id: 'ent-eternity',
            id_cg: 'eternity',
            symbol: 'ENT',
            symbol_cg: 'ent',
            name: 'Eternity',
            name_cg: 'Eternity',
            slug: 'eternity'
        },
        'netko-netko': {
            id: 'netko-netko',
            id_cg: 'netko',
            symbol: 'NETKO',
            symbol_cg: 'netko',
            name: 'Netko',
            name_cg: 'Netko',
            slug: 'netko'
        },
        'hodl-hodlcoin': {
            id: 'hodl-hodlcoin',
            id_cg: 'hodlcoin',
            symbol: 'HODL',
            symbol_cg: 'hodl',
            name: 'HOdlcoin',
            name_cg: 'HOdlcoin',
            slug: 'hodlcoin'
        },
        'lana-lanacoin': {
            id: 'lana-lanacoin',
            id_cg: 'lanacoin',
            symbol: 'LANA',
            symbol_cg: 'lana',
            name: 'LanaCoin',
            name_cg: 'LanaCoin',
            slug: 'lanacoin'
        },
        'bits-bitstar': {
            id: 'bits-bitstar',
            id_cg: 'bitstar',
            symbol: 'BITS',
            symbol_cg: 'bits',
            name: 'Bitstar',
            name_cg: 'Bitstar',
            slug: 'bitstar'
        },
        'kurt-kurrent': {
            id: 'kurt-kurrent',
            id_cg: 'kurrent',
            symbol: 'KURT',
            symbol_cg: 'kurt',
            name: 'Kurrent',
            name_cg: 'Kurrent',
            slug: 'kurrent'
        },
        'xpd-petrodollar': {
            id: 'xpd-petrodollar',
            id_cg: 'petrodollar',
            symbol: 'XPD',
            symbol_cg: 'xpd',
            name: 'PetroDollar',
            name_cg: 'PetroDollar',
            slug: 'petrodollar'
        },
        'btb-bitbar': {
            id: 'btb-bitbar',
            id_cg: 'bitbar',
            symbol: 'BTB',
            symbol_cg: 'btb',
            name: 'BitBar',
            name_cg: 'Bitbar',
            slug: 'bitbar'
        },
        'smly-smileycoin': {
            id: 'smly-smileycoin',
            id_cg: 'smileycoin',
            symbol: 'SMLY',
            symbol_cg: 'smly',
            name: 'SmileyCoin',
            name_cg: 'Smileycoin',
            slug: 'smileycoin'
        },
        'dem-deutsche-emark': {
            id: 'dem-deutsche-emark',
            id_cg: 'deutsche-emark',
            symbol: 'DEM',
            symbol_cg: 'dem',
            name: 'Deutsche eMark',
            name_cg: 'Deutsche eMark',
            slug: 'deutsche-emark'
        },
        'kobo-kobocoin': {
            id: 'kobo-kobocoin',
            id_cg: 'kobocoin',
            symbol: 'KOBO',
            symbol_cg: 'kobo',
            name: 'Kobocoin',
            name_cg: 'Kobocoin',
            slug: 'kobocoin'
        },
        'el-elcoin': {
            id: 'el-elcoin',
            id_cg: '',
            symbol: 'EL',
            symbol_cg: '',
            name: 'Elcoin',
            name_cg: '',
            slug: 'elcoin-el'
        },
        'xcxt-coinonatx': {
            id: 'xcxt-coinonatx',
            id_cg: 'coinonatx',
            symbol: 'XCXT',
            symbol_cg: 'xcxt',
            name: 'CoinonatX',
            name_cg: 'CoinonatX',
            slug: 'coinonatx'
        },
        'iti-iticoin': {
            id: 'iti-iticoin',
            id_cg: 'iticoin',
            symbol: 'ITI',
            symbol_cg: 'iti',
            name: 'iTicoin',
            name_cg: 'iTicoin',
            slug: 'iticoin'
        },
        'max-maxcoin': {
            id: 'max-maxcoin',
            id_cg: 'maxcoin',
            symbol: 'MAX',
            symbol_cg: 'max',
            name: 'Maxcoin',
            name_cg: 'Maxcoin',
            slug: 'maxcoin'
        },
        'ams-amsterdamcoin': {
            id: 'ams-amsterdamcoin',
            id_cg: 'amsterdamcoin',
            symbol: 'AMS',
            symbol_cg: 'ams',
            name: 'AmsterdamCoin',
            name_cg: 'AmsterdamCoin',
            slug: 'amsterdamcoin'
        },
        'nyan-nyancoin': {
            id: 'nyan-nyancoin',
            id_cg: 'nyancoin',
            symbol: 'NYAN',
            symbol_cg: 'nyan',
            name: 'Nyancoin',
            name_cg: 'Nyancoin',
            slug: ''
        },
        'mdc-madcoin': {
            id: 'mdc-madcoin',
            id_cg: 'madcoin',
            symbol: 'MDC',
            symbol_cg: 'mdc',
            name: 'Madcoin',
            name_cg: 'Madcoin',
            slug: ''
        },
        'trump-trumpcoin': {
            id: 'trump-trumpcoin',
            id_cg: 'trumpcoin',
            symbol: 'TRUMP',
            symbol_cg: 'trump',
            name: 'TrumpCoin',
            name_cg: 'Trumpcoin',
            slug: 'trumpcoin'
        },
        'hpc-happycoin': {
            id: 'hpc-happycoin',
            id_cg: 'happycoin',
            symbol: 'HPC',
            symbol_cg: 'hpc',
            name: 'Happycoin',
            name_cg: 'Happycoin',
            slug: 'happycoin'
        },
        'xptx-platinumbar': {
            id: 'xptx-platinumbar',
            id_cg: '',
            symbol: 'XPTX',
            symbol_cg: '',
            name: 'PlatinumBAR',
            name_cg: '',
            slug: 'platinumbar'
        },
        'acc-adcoin': {
            id: 'acc-adcoin',
            id_cg: 'adcoin',
            symbol: 'ACC',
            symbol_cg: 'acc',
            name: 'AdCoin',
            name_cg: 'AdCoin',
            slug: 'adcoin'
        },
        'tit-titcoin': {
            id: 'tit-titcoin',
            id_cg: 'titcoin',
            symbol: 'TIT',
            symbol_cg: 'tit',
            name: 'Titcoin',
            name_cg: 'Titcoin',
            slug: 'titcoin'
        },
        'grim-grimcoin': {
            id: 'grim-grimcoin',
            id_cg: 'grimcoin',
            symbol: 'GRIM',
            symbol_cg: 'grim',
            name: 'Grimcoin',
            name_cg: 'Grimcoin',
            slug: 'grimcoin'
        },
        'rbt-rimbit': {
            id: 'rbt-rimbit',
            id_cg: '',
            symbol: 'RBT',
            symbol_cg: '',
            name: 'Rimbit',
            name_cg: '',
            slug: 'rimbit'
        },
        'nuko-nekonium': {
            id: 'nuko-nekonium',
            id_cg: 'nekonium',
            symbol: 'NUKO',
            symbol_cg: 'nuko',
            name: 'Nekonium',
            name_cg: 'Nekonium',
            slug: 'nekonium'
        },
        'xjo-joulecoin': {
            id: 'xjo-joulecoin',
            id_cg: 'joulecoin',
            symbol: 'XJO',
            symbol_cg: 'xjo',
            name: 'Joulecoin',
            name_cg: 'Joulecoin',
            slug: ''
        },
        'mcrn-macron': {
            id: 'mcrn-macron',
            id_cg: '',
            symbol: 'MCRN',
            symbol_cg: '',
            name: 'MACRON',
            name_cg: '',
            slug: ''
        },
        'sigt-signatum': {
            id: 'sigt-signatum',
            id_cg: '',
            symbol: 'SIGT',
            symbol_cg: '',
            name: 'Signatum',
            name_cg: '',
            slug: 'signatum'
        },
        'blc-blakecoin': {
            id: 'blc-blakecoin',
            id_cg: 'blakecoin',
            symbol: 'BLC',
            symbol_cg: 'blc',
            name: 'Blakecoin',
            name_cg: 'Blakecoin',
            slug: 'blakecoin'
        },
        'opal-opal': {
            id: 'opal-opal',
            id_cg: 'opal',
            symbol: 'OPAL',
            symbol_cg: 'opal',
            name: 'Opal',
            name_cg: 'Opal',
            slug: 'opal'
        },
        'gb-goldblocks': {
            id: 'gb-goldblocks',
            id_cg: 'goldblocks',
            symbol: 'GB',
            symbol_cg: 'gb',
            name: 'GoldBlocks',
            name_cg: 'GoldBlocks',
            slug: 'goldblocks'
        },
        'kush-kushcoin': {
            id: 'kush-kushcoin',
            id_cg: '',
            symbol: 'KUSH',
            symbol_cg: '',
            name: 'KushCoin',
            name_cg: '',
            slug: ''
        },
        'mojo-mojocoin': {
            id: 'mojo-mojocoin',
            id_cg: 'mojocoin',
            symbol: 'MOJO',
            symbol_cg: 'mojo',
            name: 'MojoCoin',
            name_cg: 'Mojocoin',
            slug: 'mojocoin'
        },
        'xhi-hicoin': {
            id: 'xhi-hicoin',
            id_cg: 'hicoin',
            symbol: 'XHI',
            symbol_cg: 'xhi',
            name: 'HiCoin',
            name_cg: 'HiCoin',
            slug: 'hicoin'
        },
        'bxt-bittokens': {
            id: 'bxt-bittokens',
            id_cg: 'bittokens',
            symbol: 'BXT',
            symbol_cg: 'bxt',
            name: 'BitTokens',
            name_cg: 'BitTokens',
            slug: ''
        },
        'super-supercoin': {
            id: 'super-supercoin',
            id_cg: 'supercoin',
            symbol: 'SUPER',
            symbol_cg: 'super',
            name: 'SuperCoin',
            name_cg: 'SuperCoin',
            slug: 'supercoin'
        },
        'c2-coin21': {
            id: 'c2-coin21',
            id_cg: 'coin2-1',
            symbol: 'C2',
            symbol_cg: 'c2',
            name: 'Coin2.1',
            name_cg: 'Coin2.1',
            slug: 'coin2-1'
        },
        'pak-pakcoin': {
            id: 'pak-pakcoin',
            id_cg: 'pakcoin',
            symbol: 'PAK',
            symbol_cg: 'pak',
            name: 'Pakcoin',
            name_cg: 'Pakcoin',
            slug: 'pakcoin'
        },
        'ytn-yenten': {
            id: 'ytn-yenten',
            id_cg: 'yenten',
            symbol: 'YTN',
            symbol_cg: 'ytn',
            name: 'YENTEN',
            name_cg: 'YENTEN',
            slug: 'yenten'
        },
        'fnc-fincoin': {
            id: 'fnc-fincoin',
            id_cg: '',
            symbol: 'FNC',
            symbol_cg: '',
            name: 'FinCoin',
            name_cg: '',
            slug: ''
        },
        'xpy-paycoin': {
            id: 'xpy-paycoin',
            id_cg: '',
            symbol: 'XPY',
            symbol_cg: '',
            name: 'PayCoin',
            name_cg: '',
            slug: 'paycoin2'
        },
        'post-postcoin': {
            id: 'post-postcoin',
            id_cg: 'postcoin',
            symbol: 'POST',
            symbol_cg: 'post',
            name: 'PostCoin',
            name_cg: 'PostCoin',
            slug: 'postcoin'
        },
        'dlc-dollarcoin': {
            id: 'dlc-dollarcoin',
            id_cg: '',
            symbol: 'DLC',
            symbol_cg: '',
            name: 'Dollarcoin',
            name_cg: '',
            slug: 'dollarcoin'
        },
        'onx-onix': {
            id: 'onx-onix',
            id_cg: 'onix',
            symbol: 'ONX',
            symbol_cg: 'onx',
            name: 'Onix',
            name_cg: 'Onix',
            slug: 'onix'
        },
        'xra-ratecoin': {
            id: 'xra-ratecoin',
            id_cg: 'ratecoin',
            symbol: 'XRA',
            symbol_cg: 'xra',
            name: 'Ratecoin',
            name_cg: 'Ratecoin',
            slug: 'ratecoin'
        },
        'hnc-helleniccoin': {
            id: 'hnc-helleniccoin',
            id_cg: 'helleniccoin',
            symbol: 'HNC',
            symbol_cg: 'hnc',
            name: 'Helleniccoin',
            name_cg: 'Hellenic Coin',
            slug: 'helleniccoin'
        },
        '808-808coin': {
            id: '808-808coin',
            id_cg: '808coin',
            symbol: '808',
            symbol_cg: '808',
            name: '808Coin',
            name_cg: '808Coin',
            slug: ''
        },
        'chan-chancoin': {
            id: 'chan-chancoin',
            id_cg: 'chancoin',
            symbol: 'CHAN',
            symbol_cg: 'chan',
            name: 'ChanCoin',
            name_cg: 'ChanCoin',
            slug: ''
        },
        'bigup-bigup': {
            id: 'bigup-bigup',
            id_cg: '',
            symbol: 'BIGUP',
            symbol_cg: '',
            name: 'BigUp',
            name_cg: '',
            slug: 'bigup'
        },
        'icn-icoin': {
            id: 'icn-icoin',
            id_cg: '',
            symbol: 'ICN',
            symbol_cg: '',
            name: 'iCoin',
            name_cg: '',
            slug: ''
        },
        'arg-argentum': {
            id: 'arg-argentum',
            id_cg: 'argentum',
            symbol: 'ARG',
            symbol_cg: 'arg',
            name: 'Argentum',
            name_cg: 'Argentum',
            slug: 'argentum'
        },
        'aib-advanced-internet-blocks': {
            id: 'aib-advanced-internet-blocks',
            id_cg: 'advanced-internet-block',
            symbol: 'AIB',
            symbol_cg: 'aib',
            name: 'Advanced Internet Blocks',
            name_cg: 'Advanced Integrated Blockchains',
            slug: 'advanced-internet-blocks'
        },
        'btpl-bitcoin-planet': {
            id: 'btpl-bitcoin-planet',
            id_cg: '',
            symbol: 'BTPL',
            symbol_cg: '',
            name: 'Bitcoin Planet',
            name_cg: '',
            slug: 'bitcoin-planet'
        },
        'coal-bitcoal': {
            id: 'coal-bitcoal',
            id_cg: '',
            symbol: 'COAL',
            symbol_cg: '',
            name: 'BitCoal',
            name_cg: '',
            slug: 'bitcoal'
        },
        'evo-evotion': {
            id: 'evo-evotion',
            id_cg: 'evo',
            symbol: 'EVO',
            symbol_cg: 'evo',
            name: 'Evotion',
            name_cg: 'EVO',
            slug: ''
        },
        'zzc-zozocoin': {
            id: 'zzc-zozocoin',
            id_cg: 'zozocoin',
            symbol: 'ZZC',
            symbol_cg: 'zzc',
            name: 'ZoZoCoin',
            name_cg: 'ZoZoCoin',
            slug: 'zozocoin'
        },
        'mnm-mineum': {
            id: 'mnm-mineum',
            id_cg: 'mineum',
            symbol: 'MNM',
            symbol_cg: 'mnm',
            name: 'Mineum',
            name_cg: 'Mineum',
            slug: ''
        },
        'lcp-litecoin-plus': {
            id: 'lcp-litecoin-plus',
            id_cg: 'litecoin-plus',
            symbol: 'LCP',
            symbol_cg: 'lcp',
            name: 'Litecoin Plus',
            name_cg: 'Litecoin Plus',
            slug: 'litecoin-plus'
        },
        'evil-evil-coin': {
            id: 'evil-evil-coin',
            id_cg: 'evil-coin',
            symbol: 'EVIL',
            symbol_cg: 'evil',
            name: 'Evil Coin',
            name_cg: 'Evil Coin',
            slug: 'evil-coin'
        },
        '611-sixeleven': {
            id: '611-sixeleven',
            id_cg: 'sixeleven',
            symbol: '611',
            symbol_cg: '611',
            name: 'SixEleven',
            name_cg: 'SixEleven',
            slug: 'sixeleven'
        },
        'mad-satoshimadness': {
            id: 'mad-satoshimadness',
            id_cg: '',
            symbol: 'MAD',
            symbol_cg: '',
            name: 'SatoshiMadness',
            name_cg: '',
            slug: ''
        },
        'arco-aquariuscoin': {
            id: 'arco-aquariuscoin',
            id_cg: 'aquariuscoin',
            symbol: 'ARCO',
            symbol_cg: 'arco',
            name: 'AquariusCoin',
            name_cg: 'AquariusCoin',
            slug: 'aquariuscoin'
        },
        'tag-tagcoin': {
            id: 'tag-tagcoin',
            id_cg: 'tagcoin',
            symbol: 'TAG',
            symbol_cg: 'tag',
            name: 'TagCoin',
            name_cg: 'Tagcoin',
            slug: 'tagcoin'
        },
        'chess-chesscoin': {
            id: 'chess-chesscoin',
            id_cg: 'chesscoin',
            symbol: 'CHESS',
            symbol_cg: 'chess',
            name: 'ChessCoin',
            name_cg: 'ChessCoin',
            slug: 'chesscoin'
        },
        'emd-emerald-crypto': {
            id: 'emd-emerald-crypto',
            id_cg: 'emerald-crypto',
            symbol: 'EMD',
            symbol_cg: 'emd',
            name: 'Emerald Crypto',
            name_cg: 'Emerald Crypto',
            slug: 'emerald'
        },
        'lbtc-litebitcoin': {
            id: 'lbtc-litebitcoin',
            id_cg: 'litebitcoin',
            symbol: 'LBTC',
            symbol_cg: 'lbtc',
            name: 'LiteBitcoin',
            name_cg: 'LiteBitcoin',
            slug: 'litebitcoin'
        },
        'kayi-kayicoin': {
            id: 'kayi-kayicoin',
            id_cg: '',
            symbol: 'KAYI',
            symbol_cg: '',
            name: 'Kayicoin',
            name_cg: '',
            slug: ''
        },
        'duo-parallelcoin': {
            id: 'duo-parallelcoin',
            id_cg: 'parallelcoin',
            symbol: 'DUO',
            symbol_cg: 'duo',
            name: 'ParallelCoin',
            name_cg: 'ParallelCoin',
            slug: 'parallelcoin'
        },
        'euc-eurocoin': {
            id: 'euc-eurocoin',
            id_cg: '',
            symbol: 'EUC',
            symbol_cg: '',
            name: 'Eurocoin',
            name_cg: '',
            slug: 'eurocoin'
        },
        'gxx-gravitycoin': {
            id: 'gxx-gravitycoin',
            id_cg: 'gravitycoin',
            symbol: 'GXX',
            symbol_cg: 'gxx',
            name: 'GravityCoin',
            name_cg: 'GravityCoin',
            slug: 'gravitycoin'
        },
        'swing-swing': {
            id: 'swing-swing',
            id_cg: 'swing',
            symbol: 'SWING',
            symbol_cg: 'swing',
            name: 'Swing',
            name_cg: 'Swing',
            slug: 'swing'
        },
        'zur-zurcoin': {
            id: 'zur-zurcoin',
            id_cg: '',
            symbol: 'ZUR',
            symbol_cg: '',
            name: 'Zurcoin',
            name_cg: '',
            slug: 'zurcoin'
        },
        'space-spacecoin': {
            id: 'space-spacecoin',
            id_cg: 'spacecoin',
            symbol: 'SPACE',
            symbol_cg: 'space',
            name: 'SpaceCoin',
            name_cg: 'Spacecoin',
            slug: ''
        },
        'bern-berncash': {
            id: 'bern-berncash',
            id_cg: 'berncash',
            symbol: 'BERN',
            symbol_cg: 'bern',
            name: 'BERNcash',
            name_cg: 'BERNcash',
            slug: 'berncash'
        },
        'units-gameunits': {
            id: 'units-gameunits',
            id_cg: '',
            symbol: 'UNITS',
            symbol_cg: '',
            name: 'GameUnits',
            name_cg: '',
            slug: ''
        },
        'bsty-globalboost-y': {
            id: 'bsty-globalboost-y',
            id_cg: 'globalboost',
            symbol: 'BSTY',
            symbol_cg: 'bsty',
            name: 'GlobalBoost-Y',
            name_cg: 'GlobalBoost-Y',
            slug: 'globalboost-y'
        },
        'tek-tekcoin': {
            id: 'tek-tekcoin',
            id_cg: '',
            symbol: 'TEK',
            symbol_cg: '',
            name: 'TEKcoin',
            name_cg: '',
            slug: ''
        },
        'boli-bolivarcoin': {
            id: 'boli-bolivarcoin',
            id_cg: 'bolivarcoin',
            symbol: 'BOLI',
            symbol_cg: 'boli',
            name: 'Bolivarcoin',
            name_cg: 'Bolivarcoin',
            slug: 'bolivarcoin'
        },
        'icob-icobid': {
            id: 'icob-icobid',
            id_cg: '',
            symbol: 'ICOB',
            symbol_cg: '',
            name: 'ICOBID',
            name_cg: '',
            slug: 'icobid'
        },
        'cxt-coinonat': {
            id: 'cxt-coinonat',
            id_cg: '',
            symbol: 'CXT',
            symbol_cg: '',
            name: 'Coinonat',
            name_cg: '',
            slug: 'coinonat'
        },
        'pxi-prime-xi': {
            id: 'pxi-prime-xi',
            id_cg: 'prime-xi',
            symbol: 'PXI',
            symbol_cg: 'pxi',
            name: 'Prime-XI',
            name_cg: 'Prime-XI',
            slug: 'prime-xi'
        },
        'xco-x-coin': {
            id: 'xco-x-coin',
            id_cg: 'xcoin',
            symbol: 'XCO',
            symbol_cg: 'xco',
            name: 'X-Coin',
            name_cg: 'X-Coin',
            slug: 'x-coin'
        },
        'fuzz-fuzzballs': {
            id: 'fuzz-fuzzballs',
            id_cg: 'fuzzballs',
            symbol: 'FUZZ',
            symbol_cg: 'fuzz',
            name: 'FuzzBalls',
            name_cg: 'FuzzBalls',
            slug: 'fuzzballs'
        },
        'talk-btctalkcoin': {
            id: 'talk-btctalkcoin',
            id_cg: 'btctalkcoin',
            symbol: 'TALK',
            symbol_cg: 'talk',
            name: 'BTCtalkcoin',
            name_cg: 'BTCtalkcoin',
            slug: 'btctalkcoin'
        },
        'song-songcoin': {
            id: 'song-songcoin',
            id_cg: 'songcoin',
            symbol: 'SONG',
            symbol_cg: 'song',
            name: 'SongCoin',
            name_cg: 'SongCoin',
            slug: 'songcoin'
        },
        'mnc-mincoin': {
            id: 'mnc-mincoin',
            id_cg: 'mincoin',
            symbol: 'MNC',
            symbol_cg: 'mnc',
            name: 'Mincoin',
            name_cg: 'Mincoin',
            slug: 'mincoin'
        },
        'con-paycon': {
            id: 'con-paycon',
            id_cg: '',
            symbol: 'CON',
            symbol_cg: '',
            name: 'PayCon',
            name_cg: '',
            slug: ''
        },
        'jin-jin-coin': {
            id: 'jin-jin-coin',
            id_cg: 'jin-coin',
            symbol: 'JIN',
            symbol_cg: 'jin',
            name: 'Jin Coin',
            name_cg: 'Jin Coin',
            slug: 'jin-coin'
        },
        'xvp-virtacoinplus': {
            id: 'xvp-virtacoinplus',
            id_cg: 'virtacoinplus',
            symbol: 'XVP',
            symbol_cg: 'xvp',
            name: 'Virtacoinplus',
            name_cg: 'Virtacoinplus',
            slug: ''
        },
        'mao-mao-zedong': {
            id: 'mao-mao-zedong',
            id_cg: 'mao-zedong',
            symbol: 'MAO',
            symbol_cg: 'mao',
            name: 'Mao Zedong',
            name_cg: 'Mao Zedong',
            slug: 'mao-zedong'
        },
        'all-allion': {
            id: 'all-allion',
            id_cg: '',
            symbol: 'ALL',
            symbol_cg: '',
            name: 'Allion',
            name_cg: '',
            slug: ''
        },
        'bria-briacoin': {
            id: 'bria-briacoin',
            id_cg: 'briacoin',
            symbol: 'BRIA',
            symbol_cg: 'bria',
            name: 'BriaCoin',
            name_cg: 'BriaCoin',
            slug: 'briacoin'
        },
        'nlx-nullex': {
            id: 'nlx-nullex',
            id_cg: '',
            symbol: 'NLX',
            symbol_cg: '',
            name: 'Nullex',
            name_cg: '',
            slug: ''
        },
        'moto-motocoin': {
            id: 'moto-motocoin',
            id_cg: 'motocoin',
            symbol: 'MOTO',
            symbol_cg: 'moto',
            name: 'Motocoin',
            name_cg: 'Motocoin',
            slug: 'motocoin'
        },
        'glt-globaltoken': {
            id: 'glt-globaltoken',
            id_cg: 'globaltoken',
            symbol: 'GLT',
            symbol_cg: 'glt',
            name: 'GlobalToken',
            name_cg: 'GlobalToken',
            slug: 'globaltoken'
        },
        'sfc-solarflarecoin': {
            id: 'sfc-solarflarecoin',
            id_cg: 'solarflarecoin',
            symbol: 'SFC',
            symbol_cg: 'sfc',
            name: 'Solarflarecoin',
            name_cg: 'SolarFlareCoin',
            slug: ''
        },
        'gp-goldpieces': {
            id: 'gp-goldpieces',
            id_cg: 'goldpieces',
            symbol: 'GP',
            symbol_cg: 'gp',
            name: 'GoldPieces',
            name_cg: 'GoldPieces',
            slug: ''
        },
        'yac-yacoin': {
            id: 'yac-yacoin',
            id_cg: 'yacoin',
            symbol: 'YAC',
            symbol_cg: 'yac',
            name: 'Yacoin',
            name_cg: 'YACoin',
            slug: ''
        },
        'imx-impact': {
            id: 'imx-impact',
            id_cg: '',
            symbol: 'IMX',
            symbol_cg: '',
            name: 'Impact',
            name_cg: '',
            slug: 'impact'
        },
        'rupx-rupaya': {
            id: 'rupx-rupaya',
            id_cg: 'rupaya',
            symbol: 'RUPX',
            symbol_cg: 'rupx',
            name: 'Rupaya',
            name_cg: 'Rupaya',
            slug: 'rupaya'
        },
        'neva-nevacoin': {
            id: 'neva-nevacoin',
            id_cg: 'nevacoin',
            symbol: 'NEVA',
            symbol_cg: 'neva',
            name: 'NevaCoin',
            name_cg: 'NevaCoin',
            slug: 'nevacoin'
        },
        'ctic2-coimatic-20': {
            id: 'ctic2-coimatic-20',
            id_cg: 'coimatic-2',
            symbol: 'CTIC2',
            symbol_cg: 'ctic2',
            name: 'Coimatic 2.0',
            name_cg: 'Coimatic 2.0',
            slug: ''
        },
        'nro-neuro': {
            id: 'nro-neuro',
            id_cg: 'neuro',
            symbol: 'NRO',
            symbol_cg: 'nro',
            name: 'Neuro',
            name_cg: 'Neuro',
            slug: 'neuro'
        },
        'cmt-comet': {
            id: 'cmt-comet',
            id_cg: '',
            symbol: 'CMT',
            symbol_cg: '',
            name: 'Comet',
            name_cg: '',
            slug: 'comet'
        },
        'ltcu-litecoin-ultra': {
            id: 'ltcu-litecoin-ultra',
            id_cg: 'litecoin-ultra',
            symbol: 'LTCU',
            symbol_cg: 'ltcu',
            name: 'LiteCoin Ultra',
            name_cg: 'LiteCoin Ultra',
            slug: 'litecoin-ultra'
        },
        'eco-ecocoin': {
            id: 'eco-ecocoin',
            id_cg: '',
            symbol: 'ECO',
            symbol_cg: '',
            name: 'EcoCoin',
            name_cg: '',
            slug: ''
        },
        'rpc-ronpaulcoin': {
            id: 'rpc-ronpaulcoin',
            id_cg: 'ronpaulcoin',
            symbol: 'RPC',
            symbol_cg: 'rpc',
            name: 'RonPaulCoin',
            name_cg: 'RonPaulCoin',
            slug: ''
        },
        'spt-spots': {
            id: 'spt-spots',
            id_cg: 'spectrum',
            symbol: 'SPT',
            symbol_cg: 'spt',
            name: 'Spots',
            name_cg: 'SPECTRUM',
            slug: 'spectrum'
        },
        'may-theresa-may-coin': {
            id: 'may-theresa-may-coin',
            id_cg: 'theresa-may-coin',
            symbol: 'MAY',
            symbol_cg: 'may',
            name: 'Theresa May Coin',
            name_cg: 'Theresa May Coin',
            slug: 'theresa-may-coin'
        },
        'xbtc21-bitcoin-21': {
            id: 'xbtc21-bitcoin-21',
            id_cg: '',
            symbol: 'XBTC21',
            symbol_cg: '',
            name: 'Bitcoin 21',
            name_cg: '',
            slug: 'bitcoin-21'
        },
        'acp-anarchistsprime': {
            id: 'acp-anarchistsprime',
            id_cg: '',
            symbol: 'ACP',
            symbol_cg: '',
            name: 'AnarchistsPrime',
            name_cg: '',
            slug: 'anarchistsprime'
        },
        'asafe2-allsafe': {
            id: 'asafe2-allsafe',
            id_cg: '',
            symbol: 'ASAFE',
            symbol_cg: '',
            name: 'AllSafe',
            name_cg: '',
            slug: 'allsafe'
        },
        'dbtc-debitcoin': {
            id: 'dbtc-debitcoin',
            id_cg: 'debitcoin',
            symbol: 'DBTC',
            symbol_cg: 'dbtc',
            name: 'Debitcoin',
            name_cg: 'Debitcoin',
            slug: ''
        },
        'boat-boat': {
            id: 'boat-boat',
            id_cg: 'boat',
            symbol: 'BOAT',
            symbol_cg: 'boat',
            name: 'BOAT',
            name_cg: 'BOAT',
            slug: 'doubloon'
        },
        'skc-skeincoin': {
            id: 'skc-skeincoin',
            id_cg: 'skeincoin',
            symbol: 'SKC',
            symbol_cg: 'skc',
            name: 'Skeincoin',
            name_cg: 'Skeincoin',
            slug: 'skeincoin'
        },
        'vprc-vaperscoin': {
            id: 'vprc-vaperscoin',
            id_cg: 'vaperscoin',
            symbol: 'VPRC',
            symbol_cg: 'vprc',
            name: 'VapersCoin',
            name_cg: 'VapersCoin',
            slug: ''
        },
        'taj-tajcoin': {
            id: 'taj-tajcoin',
            id_cg: 'tajcoin',
            symbol: 'TAJ',
            symbol_cg: 'taj',
            name: 'TajCoin',
            name_cg: 'TajCoin',
            slug: 'tajcoin'
        },
        'mscn-master-swiscoin': {
            id: 'mscn-master-swiscoin',
            id_cg: 'master-swiscoin',
            symbol: 'MSCN',
            symbol_cg: 'mscn',
            name: 'Master Swiscoin',
            name_cg: 'Master Swiscoin',
            slug: ''
        },
        'cf-californium': {
            id: 'cf-californium',
            id_cg: 'californium',
            symbol: 'CF',
            symbol_cg: 'cf',
            name: 'Californium',
            name_cg: 'Californium',
            slug: 'californium'
        },
        'roofs-roofs': {
            id: 'roofs-roofs',
            id_cg: 'roofs',
            symbol: 'ROOFS',
            symbol_cg: 'roofs',
            name: 'Roofs',
            name_cg: 'Roofs',
            slug: ''
        },
        'arb-arbit': {
            id: 'arb-arbit',
            id_cg: 'arbit',
            symbol: 'ARB',
            symbol_cg: 'arb',
            name: 'ARbit',
            name_cg: 'ARbit Coin',
            slug: 'arbit'
        },
        'icon-iconic': {
            id: 'icon-iconic',
            id_cg: '',
            symbol: 'ICON',
            symbol_cg: '',
            name: 'Iconic',
            name_cg: '',
            slug: 'iconic'
        },
        'atx-artex-coin': {
            id: 'atx-artex-coin',
            id_cg: 'artex-coin',
            symbol: 'ATX',
            symbol_cg: 'atx',
            name: 'Artex Coin',
            name_cg: 'Artex Coin',
            slug: ''
        },
        'women-womencoin': {
            id: 'women-womencoin',
            id_cg: 'womencoin',
            symbol: 'WOMEN',
            symbol_cg: 'women',
            name: 'WomenCoin',
            name_cg: 'WomenCoin',
            slug: 'women'
        },
        'qbc-quebecoin': {
            id: 'qbc-quebecoin',
            id_cg: 'quebecoin',
            symbol: 'QBC',
            symbol_cg: 'qbc',
            name: 'Quebecoin',
            name_cg: 'Quebecoin',
            slug: 'quebecoin'
        },
        'prx-printerium': {
            id: 'prx-printerium',
            id_cg: '',
            symbol: 'PRX',
            symbol_cg: '',
            name: 'Printerium',
            name_cg: '',
            slug: ''
        },
        'ride-ride-my-car': {
            id: 'ride-ride-my-car',
            id_cg: 'ride-my-car',
            symbol: 'RIDE',
            symbol_cg: 'ride',
            name: 'Ride My Car',
            name_cg: 'Ride My Car',
            slug: ''
        },
        'adcn-asiadigicoin': {
            id: 'adcn-asiadigicoin',
            id_cg: '',
            symbol: 'ADCN',
            symbol_cg: '',
            name: 'Asiadigicoin',
            name_cg: '',
            slug: ''
        },
        'knc-kingn-coin': {
            id: 'knc-kingn-coin',
            id_cg: '',
            symbol: 'KNC',
            symbol_cg: '',
            name: 'KingN Coin',
            name_cg: '',
            slug: ''
        },
        'scs-speedcash': {
            id: 'scs-speedcash',
            id_cg: 'speedcash',
            symbol: 'SCS',
            symbol_cg: 'scs',
            name: 'SpeedCash',
            name_cg: 'Speedcash',
            slug: 'speedcash'
        },
        'crdnc-credence-coin': {
            id: 'crdnc-credence-coin',
            id_cg: '',
            symbol: 'CRDNC',
            symbol_cg: '',
            name: 'Credence Coin',
            name_cg: '',
            slug: ''
        },
        'jobs-jobscoin': {
            id: 'jobs-jobscoin',
            id_cg: 'jobscoin',
            symbol: 'JOBS',
            symbol_cg: 'jobs',
            name: 'JobsCoin',
            name_cg: 'Jobscoin',
            slug: ''
        },
        'volt-bitvolt': {
            id: 'volt-bitvolt',
            id_cg: '',
            symbol: 'VOLT',
            symbol_cg: '',
            name: 'Bitvolt',
            name_cg: '',
            slug: 'bitvolt'
        },
        'argus-argus': {
            id: 'argus-argus',
            id_cg: '',
            symbol: 'ARGUS',
            symbol_cg: '',
            name: 'Argus',
            name_cg: '',
            slug: 'argus'
        },
        'els-elysium': {
            id: 'els-elysium',
            id_cg: '',
            symbol: 'ELS',
            symbol_cg: '',
            name: 'Elysium',
            name_cg: '',
            slug: 'elysium'
        },
        'creva-crevacoin': {
            id: 'creva-crevacoin',
            id_cg: 'crevacoin',
            symbol: 'CREVA',
            symbol_cg: 'creva',
            name: 'CrevaCoin',
            name_cg: 'Crevacoin',
            slug: 'crevacoin'
        },
        'xrc-rawcoin': {
            id: 'xrc-rawcoin',
            id_cg: 'rawcoin',
            symbol: 'XRC',
            symbol_cg: 'xrc',
            name: 'Rawcoin',
            name_cg: 'Rawcoin',
            slug: ''
        },
        'mgm-magnum': {
            id: 'mgm-magnum',
            id_cg: 'magnum',
            symbol: 'MGM',
            symbol_cg: 'mgm',
            name: 'Magnum',
            name_cg: 'Magnum',
            slug: 'magnum'
        },
        'gsr-geysercoin': {
            id: 'gsr-geysercoin',
            id_cg: 'geysercoin',
            symbol: 'GSR',
            symbol_cg: 'gsr',
            name: 'GeyserCoin',
            name_cg: 'GeyserCoin',
            slug: 'geysercoin'
        },
        'dgcs-digital-credits': {
            id: 'dgcs-digital-credits',
            id_cg: '',
            symbol: 'DGCS',
            symbol_cg: '',
            name: 'Digital Credits',
            name_cg: '',
            slug: ''
        },
        'hmc-harmonycoin': {
            id: 'hmc-harmonycoin',
            id_cg: 'harmonycoin',
            symbol: 'HMC',
            symbol_cg: 'hmc',
            name: 'HarmonyCoin',
            name_cg: 'HarmonyCoin',
            slug: 'harmonycoin-hmc'
        },
        'dmb-digital-money-bits': {
            id: 'dmb-digital-money-bits',
            id_cg: 'digital-money-bits',
            symbol: 'DMB',
            symbol_cg: 'dmb',
            name: 'Digital Money Bits',
            name_cg: 'Digital Money Bits',
            slug: 'digital-money-bits'
        },
        'ebt-ebittree-coin': {
            id: 'ebt-ebittree-coin',
            id_cg: '',
            symbol: 'EBT',
            symbol_cg: '',
            name: 'Ebittree Coin',
            name_cg: '',
            slug: ''
        },
        'vta-virtacoin': {
            id: 'vta-virtacoin',
            id_cg: 'virtacoin',
            symbol: 'VTA',
            symbol_cg: 'vta',
            name: 'Virtacoin',
            name_cg: 'VirtaCoin',
            slug: 'virtacoin'
        },
        'bbp-biblepay': {
            id: 'bbp-biblepay',
            id_cg: 'biblepay',
            symbol: 'BBP',
            symbol_cg: 'bbp',
            name: 'BiblePay',
            name_cg: 'BiblePay',
            slug: 'biblepay'
        },
        'shorty-shorty': {
            id: 'shorty-shorty',
            id_cg: 'shorty',
            symbol: 'SHORTY',
            symbol_cg: 'shorty',
            name: 'Shorty',
            name_cg: 'Shorty',
            slug: ''
        },
        'brit-britcoin': {
            id: 'brit-britcoin',
            id_cg: 'britcoin',
            symbol: 'BRIT',
            symbol_cg: 'brit',
            name: 'BritCoin',
            name_cg: 'Britcoin',
            slug: 'britcoin'
        },
        'usc-ultimate-secure-cash': {
            id: 'usc-ultimate-secure-cash',
            id_cg: 'ultimate-secure-cash',
            symbol: 'USC',
            symbol_cg: 'usc',
            name: 'Ultimate Secure Cash',
            name_cg: 'Ultimate Secure Cash',
            slug: 'ultimate-secure-cash'
        },
        'metal-metalcoin': {
            id: 'metal-metalcoin',
            id_cg: '',
            symbol: 'METAL',
            symbol_cg: '',
            name: 'MetalCoin',
            name_cg: '',
            slug: ''
        },
        'vlt-veltor': {
            id: 'vlt-veltor',
            id_cg: '',
            symbol: 'VLT',
            symbol_cg: '',
            name: 'Veltor',
            name_cg: '',
            slug: 'veltor'
        },
        'uni-universe': {
            id: 'uni-universe',
            id_cg: 'universe',
            symbol: 'UNI',
            symbol_cg: 'uni',
            name: 'Universe',
            name_cg: 'Universe',
            slug: 'universe'
        },
        'bitz-bitz': {
            id: 'bitz-bitz',
            id_cg: 'bitz',
            symbol: 'BITZ',
            symbol_cg: 'bitz',
            name: 'Bitz',
            name_cg: 'bitz',
            slug: ''
        },
        'val-valorbit': {
            id: 'val-valorbit',
            id_cg: 'valorbit',
            symbol: 'VAL',
            symbol_cg: 'val',
            name: 'Valorbit',
            name_cg: 'Valorbit',
            slug: ''
        },
        'rbies-rubies': {
            id: 'rbies-rubies',
            id_cg: '',
            symbol: 'RBIES',
            symbol_cg: '',
            name: 'Rubies',
            name_cg: '',
            slug: 'rubies'
        },
        'stv-sativacoin': {
            id: 'stv-sativacoin',
            id_cg: 'sativacoin',
            symbol: 'STV',
            symbol_cg: 'stv',
            name: 'Sativacoin',
            name_cg: 'Sativacoin',
            slug: ''
        },
        'j-joincoin': {
            id: 'j-joincoin',
            id_cg: 'joincoin',
            symbol: 'J',
            symbol_cg: 'j',
            name: 'Joincoin',
            name_cg: 'Joincoin',
            slug: 'joincoin'
        },
        'manna-manna': {
            id: 'manna-manna',
            id_cg: 'manna',
            symbol: 'MANNA',
            symbol_cg: 'manna',
            name: 'Manna',
            name_cg: 'Manna',
            slug: 'manna'
        },
        'vot-votecoin': {
            id: 'vot-votecoin',
            id_cg: 'votecoin',
            symbol: 'VOT',
            symbol_cg: 'vot',
            name: 'VoteCoin',
            name_cg: 'VoteCoin',
            slug: 'votecoin'
        },
        'cyp-cypher': {
            id: 'cyp-cypher',
            id_cg: '',
            symbol: 'CYP',
            symbol_cg: '',
            name: 'Cypher',
            name_cg: '',
            slug: ''
        },
        'fire-firecoin': {
            id: 'fire-firecoin',
            id_cg: '',
            symbol: 'FIRE',
            symbol_cg: '',
            name: 'Firecoin',
            name_cg: '',
            slug: ''
        },
        'scrt-secretcoin': {
            id: 'scrt-secretcoin',
            id_cg: '',
            symbol: 'SCRT',
            symbol_cg: '',
            name: 'SecretCoin',
            name_cg: '',
            slug: 'secretcoin'
        },
        'cash-cashcoin': {
            id: 'cash-cashcoin',
            id_cg: 'cashcoin',
            symbol: 'CASH',
            symbol_cg: 'cash',
            name: 'Cashcoin',
            name_cg: 'Cashcoin',
            slug: 'cashcoin'
        },
        'frc-freicoin': {
            id: 'frc-freicoin',
            id_cg: 'freicoin',
            symbol: 'FRC',
            symbol_cg: 'frc',
            name: 'Freicoin',
            name_cg: 'Freicoin',
            slug: 'freicoin'
        },
        'glc-globalcoin': {
            id: 'glc-globalcoin',
            id_cg: 'globalcoin',
            symbol: 'GLC',
            symbol_cg: 'glc',
            name: 'GlobalCoin',
            name_cg: 'GlobalCoin',
            slug: ''
        },
        'spex-sproutsextreme': {
            id: 'spex-sproutsextreme',
            id_cg: 'sproutsextreme',
            symbol: 'SPEX',
            symbol_cg: 'spex',
            name: 'SproutsExtreme',
            name_cg: 'SproutsExtreme',
            slug: ''
        },
        'isl-islacoin': {
            id: 'isl-islacoin',
            id_cg: '',
            symbol: 'ISL',
            symbol_cg: '',
            name: 'IslaCoin',
            name_cg: '',
            slug: ''
        },
        'anti-antibitcoin': {
            id: 'anti-antibitcoin',
            id_cg: '',
            symbol: 'ANTI',
            symbol_cg: '',
            name: 'AntiBitcoin',
            name_cg: '',
            slug: ''
        },
        'jwl-jewels': {
            id: 'jwl-jewels',
            id_cg: '',
            symbol: 'JWL',
            symbol_cg: '',
            name: 'Jewels',
            name_cg: '',
            slug: 'jewel'
        },
        'pulse-pulse': {
            id: 'pulse-pulse',
            id_cg: '',
            symbol: 'PULSE',
            symbol_cg: '',
            name: 'Pulse',
            name_cg: '',
            slug: ''
        },
        'gcc-guccionecoin': {
            id: 'gcc-guccionecoin',
            id_cg: '',
            symbol: 'GCC',
            symbol_cg: '',
            name: 'GuccioneCoin',
            name_cg: '',
            slug: 'guccionecoin'
        },
        'mtlmc3-metal-music-coin': {
            id: 'mtlmc3-metal-music-coin',
            id_cg: 'metal-music-coin',
            symbol: 'MTLMC3',
            symbol_cg: 'mtlmc3',
            name: 'Metal Music Coin',
            name_cg: 'Metal Music Coin',
            slug: ''
        },
        'uro-uro': {
            id: 'uro-uro',
            id_cg: '',
            symbol: 'URO',
            symbol_cg: '',
            name: 'Uro',
            name_cg: '',
            slug: ''
        },
        'socc-socialcoin': {
            id: 'socc-socialcoin',
            id_cg: 'socialcoin',
            symbol: 'SOCC',
            symbol_cg: 'socc',
            name: 'SocialCoin',
            name_cg: 'SocialCoin',
            slug: 'socialcoin-socc'
        },
        'ponzi-ponzicoin': {
            id: 'ponzi-ponzicoin',
            id_cg: 'ponzicoin',
            symbol: 'PONZI',
            symbol_cg: 'ponzi',
            name: 'PonziCoin',
            name_cg: 'PonziCoin',
            slug: 'ponzicoin'
        },
        'ltcr-litecred': {
            id: 'ltcr-litecred',
            id_cg: '',
            symbol: 'LTCR',
            symbol_cg: '',
            name: 'Litecred',
            name_cg: '',
            slug: 'litecred'
        },
        'plnc-plncoin': {
            id: 'plnc-plncoin',
            id_cg: '',
            symbol: 'PLNC',
            symbol_cg: '',
            name: 'PLNcoin',
            name_cg: '',
            slug: 'plncoin'
        },
        'drm-dreamcoin': {
            id: 'drm-dreamcoin',
            id_cg: 'dreamcoin',
            symbol: 'DRM',
            symbol_cg: 'drm',
            name: 'Dreamcoin',
            name_cg: 'Dreamcoin',
            slug: 'dreamcoin'
        },
        'zyd-zayedcoin': {
            id: 'zyd-zayedcoin',
            id_cg: '',
            symbol: 'ZYD',
            symbol_cg: '',
            name: 'Zayedcoin',
            name_cg: '',
            slug: 'zayedcoin'
        },
        'vip-vip-tokens': {
            id: 'vip-vip-tokens',
            id_cg: '',
            symbol: 'VIP',
            symbol_cg: '',
            name: 'VIP Tokens',
            name_cg: '',
            slug: ''
        },
        'ibank-ibank': {
            id: 'ibank-ibank',
            id_cg: 'ibank',
            symbol: 'IBANK',
            symbol_cg: 'ibank',
            name: 'iBank',
            name_cg: 'iBank',
            slug: 'ibank'
        },
        'bios-bioscrypto': {
            id: 'bios-bioscrypto',
            id_cg: '',
            symbol: 'BIOS',
            symbol_cg: '',
            name: 'BiosCrypto',
            name_cg: '',
            slug: ''
        },
        'tagr-tagrcoin': {
            id: 'tagr-tagrcoin',
            id_cg: 'tagrcoin',
            symbol: 'TAGR',
            symbol_cg: 'tagr',
            name: 'TAGRcoin',
            name_cg: 'TAGRcoin',
            slug: ''
        },
        'urc-unrealcoin': {
            id: 'urc-unrealcoin',
            id_cg: '',
            symbol: 'URC',
            symbol_cg: '',
            name: 'Unrealcoin',
            name_cg: '',
            slug: ''
        },
        'brain-braincoin': {
            id: 'brain-braincoin',
            id_cg: '',
            symbol: 'BRAIN',
            symbol_cg: '',
            name: 'Braincoin',
            name_cg: '',
            slug: ''
        },
        'xoc-xonecoin': {
            id: 'xoc-xonecoin',
            id_cg: '',
            symbol: 'XOC',
            symbol_cg: '',
            name: 'Xonecoin',
            name_cg: '',
            slug: ''
        },
        'lir-letitride': {
            id: 'lir-letitride',
            id_cg: 'letitride',
            symbol: 'LIR',
            symbol_cg: 'lir',
            name: 'LetItRide',
            name_cg: 'LetItRide',
            slug: ''
        },
        'wbb-wild-beast-block': {
            id: 'wbb-wild-beast-block',
            id_cg: 'wild-beast-block',
            symbol: 'WBB',
            symbol_cg: 'wbb',
            name: 'Wild Beast Block',
            name_cg: 'Wild Beast Block',
            slug: 'wild-beast-block'
        },
        'hvco-high-voltage': {
            id: 'hvco-high-voltage',
            id_cg: '',
            symbol: 'HVCO',
            symbol_cg: '',
            name: 'High Voltage',
            name_cg: '',
            slug: 'high-voltage'
        },
        'imps-impulsecoin': {
            id: 'imps-impulsecoin',
            id_cg: '',
            symbol: 'IMPS',
            symbol_cg: '',
            name: 'ImpulseCoin',
            name_cg: '',
            slug: ''
        },
        'sandg-save-and-gain': {
            id: 'sandg-save-and-gain',
            id_cg: '',
            symbol: 'SANDG',
            symbol_cg: '',
            name: 'Save and Gain',
            name_cg: '',
            slug: 'save-and-gain'
        },
        'p7c-p7coin': {
            id: 'p7c-p7coin',
            id_cg: '',
            symbol: 'P7C',
            symbol_cg: '',
            name: 'P7Coin',
            name_cg: '',
            slug: ''
        },
        'conx-concoin': {
            id: 'conx-concoin',
            id_cg: '',
            symbol: 'CONX',
            symbol_cg: '',
            name: 'Concoin',
            name_cg: '',
            slug: 'concoin'
        },
        'slfi-selfiecoin': {
            id: 'slfi-selfiecoin',
            id_cg: '',
            symbol: 'SLFI',
            symbol_cg: '',
            name: 'Selfiecoin',
            name_cg: '',
            slug: ''
        },
        'show-show': {
            id: 'show-show',
            id_cg: 'show',
            symbol: 'SHOW',
            symbol_cg: 'show',
            name: 'Show',
            name_cg: 'Show',
            slug: 'show'
        },
        'bcx-bitcoinx': {
            id: 'bcx-bitcoinx',
            id_cg: 'bitcoinx',
            symbol: 'BCX',
            symbol_cg: 'bcx',
            name: 'BitcoinX',
            name_cg: 'BitcoinX',
            slug: 'bitcoinx'
        },
        'wicc-waykichain': {
            id: 'wicc-waykichain',
            id_cg: 'waykichain',
            symbol: 'WICC',
            symbol_cg: 'wicc',
            name: 'WaykiChain',
            name_cg: 'WaykiChain',
            slug: 'waykichain'
        },
        'adk-aidos-kuneen': {
            id: 'adk-aidos-kuneen',
            id_cg: 'aidos-kuneen',
            symbol: 'ADK',
            symbol_cg: 'adk',
            name: 'Aidos Kuneen',
            name_cg: 'Aidos Kuneen',
            slug: 'aidos-kuneen'
        },
        'bcd-bitcoin-diamond': {
            id: 'bcd-bitcoin-diamond',
            id_cg: 'bitcoin-diamond',
            symbol: 'BCD',
            symbol_cg: 'bcd',
            name: 'Bitcoin Diamond',
            name_cg: 'Bitcoin Diamond',
            slug: 'bitcoin-diamond'
        },
        'topc-topchain': {
            id: 'topc-topchain',
            id_cg: 'topchain',
            symbol: 'TOPC',
            symbol_cg: 'topc',
            name: 'TopChain',
            name_cg: 'TopChain',
            slug: 'topchain'
        },
        'xtz-tezos': {
            id: 'xtz-tezos',
            id_cg: 'tezos',
            symbol: 'XTZ',
            symbol_cg: 'xtz',
            name: 'Tezos',
            name_cg: 'Tezos',
            slug: 'tezos'
        },
        'kcash-kcash': {
            id: 'kcash-kcash',
            id_cg: 'kcash',
            symbol: 'KCASH',
            symbol_cg: 'kcash',
            name: 'Kcash',
            name_cg: 'Kcash',
            slug: 'kcash'
        },
        'sbtc-super-bitcoin': {
            id: 'sbtc-super-bitcoin',
            id_cg: 'super-bitcoin',
            symbol: 'SBTC',
            symbol_cg: 'sbtc',
            name: 'Super Bitcoin',
            name_cg: 'Super Bitcoin',
            slug: 'super-bitcoin'
        },
        'rct-realchain': {
            id: 'rct-realchain',
            id_cg: 'realchain',
            symbol: 'RCT',
            symbol_cg: 'rct',
            name: 'RealChain',
            name_cg: 'RealChain',
            slug: 'realchain'
        },
        'b2x-segwit2x': {
            id: 'b2x-segwit2x',
            id_cg: 'segwit2x',
            symbol: 'B2X',
            symbol_cg: 'b2x',
            name: 'SegWit2x',
            name_cg: 'SegWit2x',
            slug: ''
        },
        'frgc-fargocoin': {
            id: 'frgc-fargocoin',
            id_cg: '',
            symbol: 'FRGC',
            symbol_cg: '',
            name: 'Fargocoin',
            name_cg: '',
            slug: ''
        },
        'xin-mixin': {
            id: 'xin-mixin',
            id_cg: 'mixin',
            symbol: 'XIN',
            symbol_cg: 'xin',
            name: 'Mixin',
            name_cg: 'Mixin',
            slug: 'mixin'
        },
        'ait-aichain': {
            id: 'ait-aichain',
            id_cg: 'aichain',
            symbol: 'AIT',
            symbol_cg: 'ait',
            name: 'AICHAIN',
            name_cg: 'AICHAIN',
            slug: 'aichain'
        },
        'cyder-cyder': {
            id: 'cyder-cyder',
            id_cg: 'cyder',
            symbol: 'CYDER',
            symbol_cg: 'cyder',
            name: 'Cyder',
            name_cg: 'Cyder',
            slug: ''
        },
        'bca-bitcoin-atom': {
            id: 'bca-bitcoin-atom',
            id_cg: 'bitcoin-atom',
            symbol: 'BCA',
            symbol_cg: 'bca',
            name: 'Bitcoin Atom',
            name_cg: 'Bitcoin Atom',
            slug: 'bitcoin-atom'
        },
        'ifc-infinitecoin': {
            id: 'ifc-infinitecoin',
            id_cg: 'infinitecoin',
            symbol: 'IFC',
            symbol_cg: 'ifc',
            name: 'Infinitecoin',
            name_cg: 'Infinitecoin',
            slug: 'infinitecoin'
        },
        'ubtc-united-bitcoin': {
            id: 'ubtc-united-bitcoin',
            id_cg: 'united-bitcoin',
            symbol: 'UBTC',
            symbol_cg: 'ubtc',
            name: 'United Bitcoin',
            name_cg: 'United Bitcoin',
            slug: 'united-bitcoin'
        },
        'atn-atn': {
            id: 'atn-atn',
            id_cg: 'atn',
            symbol: 'ATN',
            symbol_cg: 'atn',
            name: 'ATN',
            name_cg: 'ATN',
            slug: 'atn'
        },
        'ter-terranova': {
            id: 'ter-terranova',
            id_cg: 'terranova',
            symbol: 'TER',
            symbol_cg: 'ter',
            name: 'TerraNova',
            name_cg: 'TerraNova',
            slug: 'terranova'
        },
        'ths-techshares': {
            id: 'ths-techshares',
            id_cg: 'techshares',
            symbol: 'THS',
            symbol_cg: 'ths',
            name: 'TechShares',
            name_cg: 'TechShares',
            slug: ''
        },
        'mdt-measurable-data-token': {
            id: 'mdt-measurable-data-token',
            id_cg: 'measurable-data-token',
            symbol: 'MDT',
            symbol_cg: 'mdt',
            name: 'Measurable Data Token',
            name_cg: 'Measurable Data Token',
            slug: 'measurable-data-token'
        },
        'fil-filecoin-futures': {
            id: 'fil-filecoin-futures',
            id_cg: 'filecoin',
            symbol: 'FIL',
            symbol_cg: 'fil',
            name: 'Filecoin [Futures]',
            name_cg: 'Filecoin [IOU]',
            slug: 'filecoin'
        },
        'shnd-stronghands': {
            id: 'shnd-stronghands',
            id_cg: 'stronghands',
            symbol: 'SHND',
            symbol_cg: 'shnd',
            name: 'StrongHands',
            name_cg: 'StrongHands',
            slug: 'stronghands'
        },
        'bsr-bitsoar': {
            id: 'bsr-bitsoar',
            id_cg: 'bitsoar',
            symbol: 'BSR',
            symbol_cg: 'bsr',
            name: 'BitSoar',
            name_cg: 'BitSoar',
            slug: ''
        },
        'club-clubcoin': {
            id: 'club-clubcoin',
            id_cg: 'clubcoin',
            symbol: 'CLUB',
            symbol_cg: 'club',
            name: 'ClubCoin',
            name_cg: 'Clubcoin',
            slug: 'clubcoin'
        },
        'swtc-jingtum-tech': {
            id: 'swtc-jingtum-tech',
            id_cg: 'jingtum-tech',
            symbol: 'SWTC',
            symbol_cg: 'swtc',
            name: 'Jingtum Tech',
            name_cg: 'SWTC',
            slug: 'jingtum-tech'
        },
        'lbtc-lightning-bitcoin': {
            id: 'lbtc-lightning-bitcoin',
            id_cg: 'lightning-bitcoin',
            symbol: 'LBTC',
            symbol_cg: 'lbtc',
            name: 'Lightning Bitcoin',
            name_cg: 'Lightning Bitcoin',
            slug: 'litebitcoin'
        },
        'tokc-tokyo': {
            id: 'tokc-tokyo',
            id_cg: '',
            symbol: 'TOKC',
            symbol_cg: '',
            name: 'TOKYO',
            name_cg: '',
            slug: 'tokyo'
        },
        'xin-infinity-economics': {
            id: 'xin-infinity-economics',
            id_cg: 'infinity-economics',
            symbol: 'XIN',
            symbol_cg: 'xin',
            name: 'Infinity Economics',
            name_cg: 'Infinity Economics',
            slug: 'infinity-economics'
        },
        'bos-boscoin': {
            id: 'bos-boscoin',
            id_cg: 'boscoin-2',
            symbol: 'BOS',
            symbol_cg: 'bos',
            name: 'BOScoin',
            name_cg: 'BOScoin',
            slug: 'boscoin'
        },
        'god-bitcoin-god': {
            id: 'god-bitcoin-god',
            id_cg: 'bitcoin-god',
            symbol: 'GOD',
            symbol_cg: 'god',
            name: 'Bitcoin God',
            name_cg: 'Bitcoin God',
            slug: 'bitcoin-god'
        },
        'ore-galactrum': {
            id: 'ore-galactrum',
            id_cg: 'galactrum',
            symbol: 'ORE',
            symbol_cg: 'ore',
            name: 'Galactrum',
            name_cg: 'Galactrum',
            slug: 'galactrum'
        },
        'edrc-edrcoin': {
            id: 'edrc-edrcoin',
            id_cg: 'edrcoin',
            symbol: 'EDRC',
            symbol_cg: 'edrc',
            name: 'EDRCoin',
            name_cg: 'EDRCoin',
            slug: 'edrcoin'
        },
        'ic-ignition': {
            id: 'ic-ignition',
            id_cg: 'ignition',
            symbol: 'IC',
            symbol_cg: 'ic',
            name: 'Ignition',
            name_cg: 'Ignition',
            slug: 'ignition'
        },
        'pnx-phantomx': {
            id: 'pnx-phantomx',
            id_cg: 'phantomx',
            symbol: 'PNX',
            symbol_cg: 'pnx',
            name: 'Phantomx',
            name_cg: 'Phantomx',
            slug: 'phantomx'
        },
        'today-todaycoin': {
            id: 'today-todaycoin',
            id_cg: '',
            symbol: 'TODAY',
            symbol_cg: '',
            name: 'TodayCoin',
            name_cg: '',
            slug: ''
        },
        'msd-msd': {
            id: 'msd-msd',
            id_cg: 'msd',
            symbol: 'MSD',
            symbol_cg: 'msd',
            name: 'MSD',
            name_cg: 'MSD',
            slug: 'msd'
        },
        'vash-vpncoin': {
            id: 'vash-vpncoin',
            id_cg: 'vpncoin',
            symbol: 'VASH',
            symbol_cg: 'vash',
            name: 'VPNCoin',
            name_cg: 'VPNCoin',
            slug: ''
        },
        'aces-aces': {
            id: 'aces-aces',
            id_cg: '',
            symbol: 'ACES',
            symbol_cg: '',
            name: 'Aces',
            name_cg: '',
            slug: 'aces'
        },
        'csc-casinocoin': {
            id: 'csc-casinocoin',
            id_cg: 'casinocoin',
            symbol: 'CSC',
            symbol_cg: 'csc',
            name: 'CasinoCoin',
            name_cg: 'Casinocoin',
            slug: 'casinocoin'
        },
        'pcn-peepcoin': {
            id: 'pcn-peepcoin',
            id_cg: 'peepcoin',
            symbol: 'PCN',
            symbol_cg: 'pcn',
            name: 'PeepCoin',
            name_cg: 'Peepcoin',
            slug: 'peepcoin'
        },
        'fazz-fazzcoin': {
            id: 'fazz-fazzcoin',
            id_cg: '',
            symbol: 'FAZZ',
            symbol_cg: '',
            name: 'Fazzcoin',
            name_cg: '',
            slug: ''
        },
        'sigma-sigmacoin': {
            id: 'sigma-sigmacoin',
            id_cg: 'sigmacoin',
            symbol: 'SIGMA',
            symbol_cg: 'sigma',
            name: 'SIGMAcoin',
            name_cg: 'SIGMAcoin',
            slug: 'sigmacoin'
        },
        'zbc-zilbercoin': {
            id: 'zbc-zilbercoin',
            id_cg: '',
            symbol: 'ZBC',
            symbol_cg: '',
            name: 'Zilbercoin',
            name_cg: '',
            slug: ''
        },
        'dmc-dynamiccoin': {
            id: 'dmc-dynamiccoin',
            id_cg: 'dynamiccoin',
            symbol: 'DMC',
            symbol_cg: 'dmc',
            name: 'DynamicCoin',
            name_cg: 'DynamicCoin'
        },
        'high-high-gain': {
            id: 'high-high-gain',
            id_cg: 'high-gain',
            symbol: 'HIGH',
            symbol_cg: 'high',
            name: 'High Gain',
            name_cg: 'High Gain',
            slug: ''
        },
        'turbo-turbocoin': {
            id: 'turbo-turbocoin',
            id_cg: 'turbocoin',
            symbol: 'TURBO',
            symbol_cg: 'turbo',
            name: 'TurboCoin',
            name_cg: 'Turbocoin',
            slug: ''
        },
        'bitok-bitok': {
            id: 'bitok-bitok',
            id_cg: '',
            symbol: 'BITOK',
            symbol_cg: '',
            name: 'Bitok',
            name_cg: '',
            slug: ''
        },
        'ctl-citadel': {
            id: 'ctl-citadel',
            id_cg: 'citadel',
            symbol: 'CTL',
            symbol_cg: 'ctl',
            name: 'Citadel',
            name_cg: 'Citadel',
            slug: 'citadel'
        },
        'irl-irishcoin': {
            id: 'irl-irishcoin',
            id_cg: 'irishcoin',
            symbol: 'IRL',
            symbol_cg: 'irl',
            name: 'IrishCoin',
            name_cg: 'IrishCoin',
            slug: 'irishcoin'
        },
        'ldcn-landcoin': {
            id: 'ldcn-landcoin',
            id_cg: 'landcoin',
            symbol: 'LDCN',
            symbol_cg: 'ldcn',
            name: 'LandCoin',
            name_cg: 'Landcoin',
            slug: ''
        },
        'gain-ugain': {
            id: 'gain-ugain',
            id_cg: '',
            symbol: 'GAIN',
            symbol_cg: '',
            name: 'UGAIN',
            name_cg: '',
            slug: ''
        },
        'golf-golfcoin': {
            id: 'golf-golfcoin',
            id_cg: '',
            symbol: 'GOLF',
            symbol_cg: '',
            name: 'Golfcoin',
            name_cg: '',
            slug: 'golfcoin'
        },
        'rcn-rcoin': {
            id: 'rcn-rcoin',
            id_cg: 'ripio-credit-network',
            symbol: 'RCN',
            symbol_cg: 'rcn',
            name: 'Rcoin',
            name_cg: 'Ripio Credit Network',
            slug: 'ripio-credit-network'
        },
        'pcs-pabyosi-coin-special': {
            id: 'pcs-pabyosi-coin-special',
            id_cg: '',
            symbol: 'PCS',
            symbol_cg: '',
            name: 'Pabyosi Coin (Special)',
            name_cg: '',
            slug: 'pabyosi-coin-special'
        },
        'wink-wink': {
            id: 'wink-wink',
            id_cg: 'wink',
            symbol: 'WINK',
            symbol_cg: 'win',
            name: 'Wink',
            name_cg: 'WINk',
            slug: 'wink'
        },
        'cc-cybercoin': {
            id: 'cc-cybercoin',
            id_cg: '',
            symbol: 'CC',
            symbol_cg: '',
            name: 'CyberCoin',
            name_cg: '',
            slug: ''
        },
        'dutch-dutch-coin': {
            id: 'dutch-dutch-coin',
            id_cg: 'dutchcoin',
            symbol: 'DUTCH',
            symbol_cg: 'dutch',
            name: 'Dutch Coin',
            name_cg: 'Dutch Coin',
            slug: 'dutch-coin'
        },
        'unrc-universalroyalcoin': {
            id: 'unrc-universalroyalcoin',
            id_cg: 'universalroyalcoin',
            symbol: 'UNRC',
            symbol_cg: 'unrc',
            name: 'UniversalRoyalCoin',
            name_cg: 'UniversalRoyalCoin',
            slug: ''
        },
        'gmx-goldmaxcoin': {
            id: 'gmx-goldmaxcoin',
            id_cg: 'goldmaxcoin',
            symbol: 'GMX',
            symbol_cg: 'gmx',
            name: 'GoldMaxCoin',
            name_cg: 'Goldmaxcoin',
            slug: ''
        },
        'dashs-dashs': {
            id: 'dashs-dashs',
            id_cg: '',
            symbol: 'DASHS',
            symbol_cg: '',
            name: 'Dashs',
            name_cg: '',
            slug: ''
        },
        'xve-the-vegan-initiative': {
            id: 'xve-the-vegan-initiative',
            id_cg: '',
            symbol: 'XVE',
            symbol_cg: '',
            name: 'The Vegan Initiative',
            name_cg: '',
            slug: ''
        },
        'hnc-huncoin': {
            id: 'hnc-huncoin',
            id_cg: 'huncoin',
            symbol: 'HNC',
            symbol_cg: 'hnc',
            name: 'Huncoin',
            name_cg: 'Huncoin',
            slug: ''
        },
        'bet-betacoin': {
            id: 'bet-betacoin',
            id_cg: '',
            symbol: 'BET',
            symbol_cg: '',
            name: 'BetaCoin',
            name_cg: '',
            slug: 'betacoin'
        },
        'dbg-digital-bullion-gold': {
            id: 'dbg-digital-bullion-gold',
            id_cg: '',
            symbol: 'DBG',
            symbol_cg: '',
            name: 'Digital Bullion Gold',
            name_cg: '',
            slug: ''
        },
        'hallo-halloween-coin': {
            id: 'hallo-halloween-coin',
            id_cg: '',
            symbol: 'HALLO',
            symbol_cg: '',
            name: 'Halloween Coin',
            name_cg: '',
            slug: 'halloween-coin'
        },
        'karma-karmacoin': {
            id: 'karma-karmacoin',
            id_cg: 'karma-coin',
            symbol: 'KARMA',
            symbol_cg: 'karma',
            name: 'Karmacoin',
            name_cg: 'KARMA Coin',
            slug: ''
        },
        'tell-tellurion': {
            id: 'tell-tellurion',
            id_cg: '',
            symbol: 'TELL',
            symbol_cg: '',
            name: 'Tellurion',
            name_cg: '',
            slug: 'tellurion'
        },
        'skull-pirate-blocks': {
            id: 'skull-pirate-blocks',
            id_cg: '',
            symbol: 'SKULL',
            symbol_cg: '',
            name: 'Pirate Blocks',
            name_cg: '',
            slug: ''
        },
        'bsn-bastonet': {
            id: 'bsn-bastonet',
            id_cg: 'bastonet',
            symbol: 'BSN',
            symbol_cg: 'bsn',
            name: 'Bastonet',
            name_cg: 'Bastonet',
            slug: 'bastonet'
        },
        'blazr-blazercoin': {
            id: 'blazr-blazercoin',
            id_cg: '',
            symbol: 'BLAZR',
            symbol_cg: '',
            name: 'BlazerCoin',
            name_cg: '',
            slug: 'blazercoin'
        },
        'rubit-rublebit': {
            id: 'rubit-rublebit',
            id_cg: '',
            symbol: 'RUBIT',
            symbol_cg: '',
            name: 'RubleBit',
            name_cg: '',
            slug: ''
        },
        'bub-bubble': {
            id: 'bub-bubble',
            id_cg: '',
            symbol: 'BUB',
            symbol_cg: '',
            name: 'Bubble',
            name_cg: '',
            slug: 'bubble'
        },
        'lepen-lepen': {
            id: 'lepen-lepen',
            id_cg: 'lepen',
            symbol: 'LEPEN',
            symbol_cg: 'lepen',
            name: 'LePen',
            name_cg: 'LePen',
            slug: ''
        },
        'payp-paypeer': {
            id: 'payp-paypeer',
            id_cg: '',
            symbol: 'PAYP',
            symbol_cg: '',
            name: 'PayPeer',
            name_cg: '',
            slug: ''
        },
        'unc-uncoin': {
            id: 'unc-uncoin',
            id_cg: 'unigame',
            symbol: 'UNC',
            symbol_cg: 'unc',
            name: 'UNCoin',
            name_cg: 'UniGame',
            slug: ''
        },
        'opes-opescoin': {
            id: 'opes-opescoin',
            id_cg: '',
            symbol: 'OPES',
            symbol_cg: '',
            name: 'Opescoin',
            name_cg: '',
            slug: ''
        },
        'laz-lazaruscoin': {
            id: 'laz-lazaruscoin',
            id_cg: '',
            symbol: 'LAZ',
            symbol_cg: '',
            name: 'Lazaruscoin',
            name_cg: '',
            slug: ''
        },
        'tle-tattoocoin-limited-edition': {
            id: 'tle-tattoocoin-limited-edition',
            id_cg: 'tattoocoin-limited',
            symbol: 'TLE',
            symbol_cg: 'tle',
            name: 'Tattoocoin (Limited Edition)',
            name_cg: 'Tattoocoin (Limited Edition)',
            slug: ''
        },
        'xau-xaucoin': {
            id: 'xau-xaucoin',
            id_cg: '',
            symbol: 'XAU',
            symbol_cg: '',
            name: 'Xaucoin',
            name_cg: '',
            slug: ''
        },
        'bit-first-bitcoin': {
            id: 'bit-first-bitcoin',
            id_cg: 'bitmoney',
            symbol: 'BIT',
            symbol_cg: 'bit',
            name: 'First Bitcoin',
            name_cg: 'BitMoney',
            slug: 'bitmoney'
        },
        'sport-sportscoin': {
            id: 'sport-sportscoin',
            id_cg: '',
            symbol: 'SPORT',
            symbol_cg: '',
            name: 'SportsCoin',
            name_cg: '',
            slug: ''
        },
        'voya-voyacoin': {
            id: 'voya-voyacoin',
            id_cg: '',
            symbol: 'VOYA',
            symbol_cg: '',
            name: 'Voyacoin',
            name_cg: '',
            slug: ''
        },
        'royal-royalcoin': {
            id: 'royal-royalcoin',
            id_cg: '',
            symbol: 'ROYAL',
            symbol_cg: '',
            name: 'RoyalCoin',
            name_cg: ''
        },
        'av-avatarcoin': {
            id: 'av-avatarcoin',
            id_cg: '',
            symbol: 'AV',
            symbol_cg: '',
            name: 'AvatarCoin',
            name_cg: '',
            slug: 'avatarcoin'
        },
        'dcre-deltacredits': {
            id: 'dcre-deltacredits',
            id_cg: '',
            symbol: 'DCRE',
            symbol_cg: '',
            name: 'DeltaCredits',
            name_cg: '',
            slug: ''
        },
        'trick-trickycoin': {
            id: 'trick-trickycoin',
            id_cg: '',
            symbol: 'TRICK',
            symbol_cg: '',
            name: 'TrickyCoin',
            name_cg: '',
            slug: ''
        },
        'team-teamup': {
            id: 'team-teamup',
            id_cg: '',
            symbol: 'TEAM',
            symbol_cg: '',
            name: 'TeamUp',
            name_cg: '',
            slug: ''
        },
        'bac-bitalphacoin': {
            id: 'bac-bitalphacoin',
            id_cg: 'btc-alpha-token',
            symbol: 'BAC',
            symbol_cg: 'bac',
            name: 'BitAlphaCoin',
            name_cg: 'BTC-Alpha Token',
            slug: ''
        },
        'cyc-cycling-coin': {
            id: 'cyc-cycling-coin',
            id_cg: '',
            symbol: 'CYC',
            symbol_cg: '',
            name: 'Cycling Coin',
            name_cg: '',
            slug: ''
        },
        'x2-x2': {
            id: 'x2-x2',
            id_cg: '',
            symbol: 'X2',
            symbol_cg: '',
            name: 'X2',
            name_cg: '',
            slug: ''
        },
        'shell-shellcoin': {
            id: 'shell-shellcoin',
            id_cg: 'shell-chain',
            symbol: 'SHELL',
            symbol_cg: 'shell',
            name: 'ShellCoin',
            name_cg: 'Shell Chain',
            slug: ''
        },
        'omc-omicron': {
            id: 'omc-omicron',
            id_cg: '',
            symbol: 'OMC',
            symbol_cg: '',
            name: 'Omicron',
            name_cg: '',
            slug: ''
        },
        'cme-cashme': {
            id: 'cme-cashme',
            id_cg: '',
            symbol: 'CME',
            symbol_cg: '',
            name: 'Cashme',
            name_cg: '',
            slug: ''
        },
        'hcc-happy-creator-coin': {
            id: 'hcc-happy-creator-coin',
            id_cg: '',
            symbol: 'HCC',
            symbol_cg: '',
            name: 'Happy Creator Coin',
            name_cg: '',
            slug: ''
        },
        'lth-lathaan': {
            id: 'lth-lathaan',
            id_cg: '',
            symbol: 'LTH',
            symbol_cg: '',
            name: 'LAthaan',
            name_cg: '',
            slug: ''
        },
        'egg-eggcoin': {
            id: 'egg-eggcoin',
            id_cg: '',
            symbol: 'EGG',
            symbol_cg: '',
            name: 'EggCoin',
            name_cg: '',
            slug: ''
        },
        'disk-darklisk': {
            id: 'disk-darklisk',
            id_cg: 'darklisk',
            symbol: 'DISK',
            symbol_cg: 'disk',
            name: 'DarkLisk',
            name_cg: 'DarkLisk',
            slug: ''
        },
        'dub-dubstep': {
            id: 'dub-dubstep',
            id_cg: '',
            symbol: 'DUB',
            symbol_cg: '',
            name: 'Dubstep',
            name_cg: '',
            slug: ''
        },
        'mmxvi-mmxvi': {
            id: 'mmxvi-mmxvi',
            id_cg: '',
            symbol: 'MMXVI',
            symbol_cg: '',
            name: 'MMXVI',
            name_cg: '',
            slug: ''
        },
        'tcr-thecreed': {
            id: 'tcr-thecreed',
            id_cg: '',
            symbol: 'TCR',
            symbol_cg: '',
            name: 'TheCreed',
            name_cg: '',
            slug: ''
        },
        'frwc-frankywillcoin': {
            id: 'frwc-frankywillcoin',
            id_cg: '',
            symbol: 'FRWC',
            symbol_cg: '',
            name: 'FrankyWillCoin',
            name_cg: '',
            slug: ''
        },
        'wc-wincoin': {
            id: 'wc-wincoin',
            id_cg: 'wincoin',
            symbol: 'WC',
            symbol_cg: 'wc',
            name: 'WINCOIN',
            name_cg: 'WINCOIN',
            slug: 'win-coin'
        },
        'ocow-ocow': {
            id: 'ocow-ocow',
            id_cg: '',
            symbol: 'OCOW',
            symbol_cg: '',
            name: 'OCOW',
            name_cg: '',
            slug: ''
        },
        'trx-tron': {
            id: 'trx-tron',
            id_cg: 'tron',
            symbol: 'TRX',
            symbol_cg: 'trx',
            name: 'TRON',
            name_cg: 'TRON',
            slug: 'tron'
        },
        'icx-icon': {
            id: 'icx-icon',
            id_cg: 'icon',
            symbol: 'ICX',
            symbol_cg: 'icx',
            name: 'ICON',
            name_cg: 'ICON',
            slug: 'icon'
        },
        'omg-omisego': {
            id: 'omg-omisego',
            id_cg: 'omisego',
            symbol: 'OMG',
            symbol_cg: 'omg',
            name: 'OmiseGO',
            name_cg: 'OmiseGO',
            slug: 'omisego'
        },
        'usdt-tether': {
            id: 'usdt-tether',
            id_cg: 'tether',
            symbol: 'USDT',
            symbol_cg: 'usdt',
            name: 'Tether',
            name_cg: 'Tether',
            slug: 'tether'
        },
        'ppt-populous': {
            id: 'ppt-populous',
            id_cg: 'populous',
            symbol: 'PPT',
            symbol_cg: 'ppt',
            name: 'Populous',
            name_cg: 'Populous',
            slug: 'populous'
        },
        'bnb-binance-coin': {
            id: 'bnb-binance-coin',
            id_cg: 'binancecoin',
            symbol: 'BNB',
            symbol_cg: 'bnb',
            name: 'Binance Coin',
            name_cg: 'Binance Coin',
            slug: 'binance-coin'
        },
        'ardr-ardor': {
            id: 'ardr-ardor',
            id_cg: 'ardor',
            symbol: 'ARDR',
            symbol_cg: 'ardr',
            name: 'Ardor',
            name_cg: 'Ardor',
            slug: 'ardor'
        },
        'snt-status': {
            id: 'snt-status',
            id_cg: '',
            symbol: 'SNT',
            symbol_cg: '',
            name: 'Status',
            name_cg: '',
            slug: 'status'
        },
        'mkr-maker': {
            id: 'mkr-maker',
            id_cg: 'maker',
            symbol: 'MKR',
            symbol_cg: 'mkr',
            name: 'Maker',
            name_cg: 'Maker',
            slug: 'maker'
        },
        'zrx-0x': {
            id: 'zrx-0x',
            id_cg: '0x',
            symbol: 'ZRX',
            symbol_cg: 'zrx',
            name: '0x',
            name_cg: '0x',
            slug: '0x'
        },
        'rep-augur': {
            id: 'rep-augur',
            id_cg: 'augur',
            symbol: 'REP',
            symbol_cg: 'rep',
            name: 'Augur',
            name_cg: 'Augur',
            slug: 'augur'
        },
        'veri-veritaseum': {
            id: 'veri-veritaseum',
            id_cg: 'veritaseum',
            symbol: 'VERI',
            symbol_cg: 'veri',
            name: 'Veritaseum',
            name_cg: 'Veritaseum',
            slug: 'veritaseum'
        },
        'dcn-dentacoin': {
            id: 'dcn-dentacoin',
            id_cg: 'dentacoin',
            symbol: 'DCN',
            symbol_cg: 'dcn',
            name: 'Dentacoin',
            name_cg: 'Dentacoin',
            slug: 'dentacoin'
        },
        'drgn-dragonchain': {
            id: 'drgn-dragonchain',
            id_cg: 'dragonchain',
            symbol: 'DRGN',
            symbol_cg: 'drgn',
            name: 'Dragonchain',
            name_cg: 'Dragonchain',
            slug: 'dragonchain'
        },
        'fun-funfair': {
            id: 'fun-funfair',
            id_cg: 'funfair',
            symbol: 'FUN',
            symbol_cg: 'fun',
            name: 'FunFair',
            name_cg: 'FunFair',
            slug: 'funfair'
        },
        'salt-salt': {
            id: 'salt-salt',
            id_cg: 'salt',
            symbol: 'SALT',
            symbol_cg: 'salt',
            name: 'SALT',
            name_cg: 'SALT',
            slug: 'salt'
        },
        'bat-basic-attention-token': {
            id: 'bat-basic-attention-token',
            id_cg: 'basic-attention-token',
            symbol: 'BAT',
            symbol_cg: 'bat',
            name: 'Basic Attention Token',
            name_cg: 'Basic Attention Token',
            slug: 'basic-attention-token'
        },
        'qash-qash': {
            id: 'qash-qash',
            id_cg: 'qash',
            symbol: 'QASH',
            symbol_cg: 'qash',
            name: 'QASH',
            name_cg: 'QASH',
            slug: 'qash'
        },
        'wax-wax': {
            id: 'wax-wax',
            id_cg: 'wax',
            symbol: 'WAX',
            symbol_cg: 'wax',
            name: 'WAX',
            name_cg: 'WAX',
            slug: 'wax'
        },
        'wtc-waltonchain': {
            id: 'wtc-waltonchain',
            id_cg: 'waltonchain',
            symbol: 'WTC',
            symbol_cg: 'wtc',
            name: 'Waltonchain',
            name_cg: 'Waltonchain',
            slug: 'waltonchain'
        },
        'gas-gas': {
            id: 'gas-gas',
            id_cg: 'gas',
            symbol: 'GAS',
            symbol_cg: 'gas',
            name: 'Gas',
            name_cg: 'Gas',
            slug: 'gas'
        },
        'gnt-golem': {
            id: 'gnt-golem',
            id_cg: 'golem',
            symbol: 'GNT',
            symbol_cg: 'gnt',
            name: 'Golem',
            name_cg: 'Golem',
            slug: 'golem-network-tokens'
        },
        'ethos-ethos': {
            id: 'ethos-ethos',
            id_cg: 'ethos',
            symbol: 'ETHOS',
            symbol_cg: 'ethos',
            name: 'Ethos',
            name_cg: 'Ethos',
            slug: 'ethos'
        },
        'lrc-loopring': {
            id: 'lrc-loopring',
            id_cg: 'loopring',
            symbol: 'LRC',
            symbol_cg: 'lrc',
            name: 'Loopring',
            name_cg: 'Loopring',
            slug: 'loopring'
        },
        'knc-kyber-network': {
            id: 'knc-kyber-network',
            id_cg: 'kyber-network',
            symbol: 'KNC',
            symbol_cg: 'knc',
            name: 'Kyber Network',
            name_cg: 'Kyber Network',
            slug: 'kyber-network'
        },
        'dent-dent': {
            id: 'dent-dent',
            id_cg: 'dent',
            symbol: 'DENT',
            symbol_cg: 'dent',
            name: 'Dent',
            name_cg: 'Dent',
            slug: 'dent'
        },
        'rhoc-rchain': {
            id: 'rhoc-rchain',
            id_cg: 'rchain',
            symbol: 'RHOC',
            symbol_cg: 'rhoc',
            name: 'RChain',
            name_cg: 'RChain',
            slug: 'rchain'
        },
        'powr-power-ledger': {
            id: 'powr-power-ledger',
            id_cg: 'power-ledger',
            symbol: 'POWR',
            symbol_cg: 'powr',
            name: 'Power Ledger',
            name_cg: 'Power Ledger',
            slug: 'power-ledger'
        },
        'req-request-network': {
            id: 'req-request-network',
            id_cg: 'request-network',
            symbol: 'REQ',
            symbol_cg: 'req',
            name: 'Request',
            name_cg: 'Request',
            slug: 'request'
        },
        'kin-kin': {
            id: 'kin-kin',
            id_cg: 'kin',
            symbol: 'KIN',
            symbol_cg: 'kin',
            name: 'Kin',
            name_cg: 'Kin',
            slug: 'kin'
        },
        'aion-aion': {
            id: 'aion-aion',
            id_cg: 'aion',
            symbol: 'AION',
            symbol_cg: 'aion',
            name: 'Aion',
            name_cg: 'Aion',
            slug: 'aion'
        },
        'dgd-digixdao': {
            id: 'dgd-digixdao',
            id_cg: 'digixdao',
            symbol: 'DGD',
            symbol_cg: 'dgd',
            name: 'DigixDAO',
            name_cg: 'DigixDAO',
            slug: 'digixdao'
        },
        'elf-aelf': {
            id: 'elf-aelf',
            id_cg: 'aelf',
            symbol: 'ELF',
            symbol_cg: 'elf',
            name: 'aelf',
            name_cg: 'aelf',
            slug: 'aelf'
        },
        'btm-bytom': {
            id: 'btm-bytom',
            id_cg: 'bytom',
            symbol: 'BTM',
            symbol_cg: 'btm',
            name: 'Bytom',
            name_cg: 'Bytom',
            slug: 'bytom'
        },
        'ae-aeternity': {
            id: 'ae-aeternity',
            id_cg: 'aeternity',
            symbol: 'AE',
            symbol_cg: 'ae',
            name: 'Aeternity',
            name_cg: 'Aeternity',
            slug: 'aeternity'
        },
        'sub-substratum': {
            id: 'sub-substratum',
            id_cg: 'substratum',
            symbol: 'SUB',
            symbol_cg: 'sub',
            name: 'Substratum',
            name_cg: 'Substratum',
            slug: 'substratum'
        },
        'maid-maidsafecoin': {
            id: 'maid-maidsafecoin',
            id_cg: 'maidsafecoin',
            symbol: 'MAID',
            symbol_cg: 'maid',
            name: 'MaidSafeCoin',
            name_cg: 'MaidSafeCoin',
            slug: 'maidsafecoin'
        },
        'qsp-quantstamp': {
            id: 'qsp-quantstamp',
            id_cg: 'quantstamp',
            symbol: 'QSP',
            symbol_cg: 'qsp',
            name: 'Quantstamp',
            name_cg: 'Quantstamp',
            slug: 'quantstamp'
        },
        'nas-nebulas': {
            id: 'nas-nebulas',
            id_cg: 'nebulas',
            symbol: 'NAS',
            symbol_cg: 'nas',
            name: 'Nebulas',
            name_cg: 'Nebulas',
            slug: 'nebulas-token'
        },
        'link-chainlink': {
            id: 'link-chainlink',
            id_cg: 'chainlink',
            symbol: 'LINK',
            symbol_cg: 'link',
            name: 'Chainlink',
            name_cg: 'ChainLink',
            slug: 'chainlink'
        },
        'bnt-bancor': {
            id: 'bnt-bancor',
            id_cg: 'bancor',
            symbol: 'BNT',
            symbol_cg: 'bnt',
            name: 'Bancor',
            name_cg: 'Bancor Network Token',
            slug: 'bancor'
        },
        'cnd-cindicator': {
            id: 'cnd-cindicator',
            id_cg: 'cindicator',
            symbol: 'CND',
            symbol_cg: 'cnd',
            name: 'Cindicator',
            name_cg: 'Cindicator',
            slug: 'cindicator'
        },
        'cvc-civic': {
            id: 'cvc-civic',
            id_cg: 'civic',
            symbol: 'CVC',
            symbol_cg: 'cvc',
            name: 'Civic',
            name_cg: 'Civic',
            slug: 'civic'
        },
        'pay-tenx': {
            id: 'pay-tenx',
            id_cg: 'tenx',
            symbol: 'PAY',
            symbol_cg: 'pay',
            name: 'TenX',
            name_cg: 'TenX',
            slug: 'tenx'
        },
        'icn-iconomi': {
            id: 'icn-iconomi',
            id_cg: '',
            symbol: 'ICN',
            symbol_cg: '',
            name: 'Iconomi',
            name_cg: '',
            slug: ''
        },
        'gno-gnosis': {
            id: 'gno-gnosis',
            id_cg: 'gnosis',
            symbol: 'GNO',
            symbol_cg: 'gno',
            name: 'Gnosis',
            name_cg: 'Gnosis',
            slug: 'gnosis-gno'
        },
        'vee-blockv': {
            id: 'vee-blockv',
            id_cg: 'blockv',
            symbol: 'VEE',
            symbol_cg: 'vee',
            name: 'BLOCKv',
            name_cg: 'BLOCKv',
            slug: 'blockv'
        },
        'poe-poet': {
            id: 'poe-poet',
            id_cg: 'poet',
            symbol: 'POE',
            symbol_cg: 'poe',
            name: 'Po.et',
            name_cg: 'Po.et',
            slug: 'poet'
        },
        'rdn-raiden-network-token': {
            id: 'rdn-raiden-network-token',
            id_cg: 'raiden-network',
            symbol: 'RDN',
            symbol_cg: 'rdn',
            name: 'Raiden Network Token',
            name_cg: 'Raiden Network Token',
            slug: 'raiden-network-token'
        },
        'cob-cobinhood': {
            id: 'cob-cobinhood',
            id_cg: 'cobinhood',
            symbol: 'COB',
            symbol_cg: 'cob',
            name: 'Cobinhood',
            name_cg: 'Cobinhood',
            slug: 'cobinhood'
        },
        'sphtx-sophiatx': {
            id: 'sphtx-sophiatx',
            id_cg: 'sophiatx',
            symbol: 'SPHTX',
            symbol_cg: 'sphtx',
            name: 'SophiaTX',
            name_cg: 'SophiaTX',
            slug: 'sophiatx'
        },
        'plr-pillar': {
            id: 'plr-pillar',
            id_cg: 'pillar',
            symbol: 'PLR',
            symbol_cg: 'plr',
            name: 'Pillar',
            name_cg: 'Pillar',
            slug: 'pillar'
        },
        'dew-dew': {
            id: 'dew-dew',
            id_cg: 'dew',
            symbol: 'DEW',
            symbol_cg: 'dew',
            name: 'DEW',
            name_cg: 'DEW',
            slug: 'dew'
        },
        'xpa-xpa': {
            id: 'xpa-xpa',
            id_cg: 'xpa',
            symbol: 'XPA',
            symbol_cg: 'xpa',
            name: 'XPA',
            name_cg: 'XPA',
            slug: 'xpa'
        },
        'tnb-time-new-bank': {
            id: 'tnb-time-new-bank',
            id_cg: 'time-new-bank',
            symbol: 'TNB',
            symbol_cg: 'tnb',
            name: 'Time New Bank',
            name_cg: 'Time New Bank',
            slug: 'time-new-bank'
        },
        'san-santiment-network-token': {
            id: 'san-santiment-network-token',
            id_cg: 'santiment-network-token',
            symbol: 'SAN',
            symbol_cg: 'san',
            name: 'Santiment Network Token',
            name_cg: 'Santiment Network Token',
            slug: 'santiment'
        },
        'storj-storj': {
            id: 'storj-storj',
            id_cg: 'storj',
            symbol: 'STORJ',
            symbol_cg: 'storj',
            name: 'Storj',
            name_cg: 'Storj',
            slug: 'storj'
        },
        'lend-ethlend': {
            id: 'lend-ethlend',
            id_cg: 'ethlend',
            symbol: 'LEND',
            symbol_cg: 'lend',
            name: 'ETHLend',
            name_cg: 'Aave',
            slug: ''
        },
        'enj-enjin-coin': {
            id: 'enj-enjin-coin',
            id_cg: 'enjincoin',
            symbol: 'ENJ',
            symbol_cg: 'enj',
            name: 'Enjin Coin',
            name_cg: 'Enjin Coin',
            slug: 'enjin-coin'
        },
        'ppp-paypie': {
            id: 'ppp-paypie',
            id_cg: 'paypie',
            symbol: 'PPP',
            symbol_cg: 'ppp',
            name: 'PayPie',
            name_cg: 'PayPie',
            slug: 'paypie'
        },
        'vibe-vibe': {
            id: 'vibe-vibe',
            id_cg: 'vibe',
            symbol: 'VIBE',
            symbol_cg: 'vibe',
            name: 'VIBE',
            name_cg: 'VIBE',
            slug: 'vibe'
        },
        'rlc-iexec-rlc': {
            id: 'rlc-iexec-rlc',
            id_cg: 'iexec-rlc',
            symbol: 'RLC',
            symbol_cg: 'rlc',
            name: 'iExec RLC',
            name_cg: 'iExec RLC',
            slug: 'rlc'
        },
        'storm-storm': {
            id: 'storm-storm',
            id_cg: 'storm',
            symbol: 'STORM',
            symbol_cg: 'storm',
            name: 'Storm',
            name_cg: 'Storm',
            slug: 'storm'
        },
        'dtr-dynamic-trading-rights': {
            id: 'dtr-dynamic-trading-rights',
            id_cg: 'dynamic-trading-rights',
            symbol: 'DTR',
            symbol_cg: 'dtr',
            name: 'Dynamic Trading Rights',
            name_cg: 'Dynamic Trading Rights',
            slug: 'dynamic-trading-rights'
        },
        'srn-sirin-labs-token': {
            id: 'srn-sirin-labs-token',
            id_cg: 'sirin-labs-token',
            symbol: 'SRN',
            symbol_cg: 'srn',
            name: 'SIRIN LABS Token',
            name_cg: 'Sirin Labs Token',
            slug: 'sirin-labs-token'
        },
        'mco-mco': {
            id: 'mco-mco',
            id_cg: 'monaco',
            symbol: 'MCO',
            symbol_cg: 'mco',
            name: 'Crypto.com',
            name_cg: 'Crypto.com',
            slug: 'crypto-com'
        },
        'bix-bibox-token': {
            id: 'bix-bibox-token',
            id_cg: 'bibox-token',
            symbol: 'BIX',
            symbol_cg: 'bix',
            name: 'Bibox Token',
            name_cg: 'Bibox Token',
            slug: 'bibox-token'
        },
        'edg-edgeless': {
            id: 'edg-edgeless',
            id_cg: 'edgeless',
            symbol: 'EDG',
            symbol_cg: 'edg',
            name: 'Edgeless',
            name_cg: 'Edgeless',
            slug: 'edgeless'
        },
        'ast-airswap': {
            id: 'ast-airswap',
            id_cg: 'airswap',
            symbol: 'AST',
            symbol_cg: 'ast',
            name: 'AirSwap',
            name_cg: 'AirSwap',
            slug: 'airswap'
        },
        'ost-ost': {
            id: 'ost-ost',
            id_cg: 'simple-token',
            symbol: 'OST',
            symbol_cg: 'ost',
            name: 'OST',
            name_cg: 'OST',
            slug: 'ost'
        },
        'r-revain': {
            id: 'r-revain',
            id_cg: 'revain',
            symbol: 'R',
            symbol_cg: 'r',
            name: 'Revain',
            name_cg: 'Revain',
            slug: 'revain'
        },
        'appc-appcoins': {
            id: 'appc-appcoins',
            id_cg: 'appcoins',
            symbol: 'APPC',
            symbol_cg: 'appc',
            name: 'AppCoins',
            name_cg: 'AppCoins',
            slug: 'appcoins'
        },
        'dbc-deepbrain-chain': {
            id: 'dbc-deepbrain-chain',
            id_cg: 'deepbrain-chain',
            symbol: 'DBC',
            symbol_cg: 'dbc',
            name: 'DeepBrain Chain',
            name_cg: 'DeepBrain Chain',
            slug: 'deepbrain-chain'
        },
        'tel-telcoin': {
            id: 'tel-telcoin',
            id_cg: 'telcoin',
            symbol: 'TEL',
            symbol_cg: 'tel',
            name: 'Telcoin',
            name_cg: 'Telcoin',
            slug: 'telcoin'
        },
        'phx-red-pulse-phoenix': {
            id: 'phx-red-pulse-phoenix',
            id_cg: 'red-pulse',
            symbol: 'PHX',
            symbol_cg: 'phx',
            name: 'Red Pulse Phoenix',
            name_cg: 'Red Pulse Phoenix',
            slug: 'red-pulse'
        },
        'rcn-ripio-credit-network': {
            id: 'rcn-ripio-credit-network',
            id_cg: 'ripio-credit-network',
            symbol: 'RCN',
            symbol_cg: 'rcn',
            name: 'Ripio Credit Network',
            name_cg: 'Ripio Credit Network',
            slug: 'ripio-credit-network'
        },
        'sngls-singulardtv': {
            id: 'sngls-singulardtv',
            id_cg: 'singulardtv',
            symbol: 'SNGLS',
            symbol_cg: 'sngls',
            name: 'SingularDTV',
            name_cg: 'SingularDTV',
            slug: 'singulardtv'
        },
        'ins-insolar': {
            id: 'ins-insolar',
            id_cg: 'ins-ecosystem',
            symbol: 'INS',
            symbol_cg: 'ins',
            name: 'Insolar',
            name_cg: 'Insolar',
            slug: 'insolar'
        },
        'wabi-wabi': {
            id: 'wabi-wabi',
            id_cg: 'wabi',
            symbol: 'WABI',
            symbol_cg: 'wabi',
            name: 'Tael',
            name_cg: 'Tael',
            slug: 'tael'
        },
        'mana-decentraland': {
            id: 'mana-decentraland',
            id_cg: 'decentraland',
            symbol: 'MANA',
            symbol_cg: 'mana',
            name: 'Decentraland',
            name_cg: 'Decentraland',
            slug: 'decentraland'
        },
        'spank-spankchain': {
            id: 'spank-spankchain',
            id_cg: 'spankchain',
            symbol: 'SPANK',
            symbol_cg: 'spank',
            name: 'SpankChain',
            name_cg: 'SpankChain',
            slug: 'spankchain'
        },
        'utk-utrust': {
            id: 'utk-utrust',
            id_cg: 'utrust',
            symbol: 'UTK',
            symbol_cg: 'utk',
            name: 'UTRUST',
            name_cg: 'UTRUST',
            slug: 'utrust'
        },
        'snm-sonm': {
            id: 'snm-sonm',
            id_cg: 'sonm',
            symbol: 'SNM',
            symbol_cg: 'snm',
            name: 'SONM',
            name_cg: 'SONM',
            slug: 'sonm'
        },
        'nuls-nuls': {
            id: 'nuls-nuls',
            id_cg: 'nuls',
            symbol: 'NULS',
            symbol_cg: 'nuls',
            name: 'NULS',
            name_cg: 'Nuls',
            slug: 'nuls'
        },
        'ant-aragon': {
            id: 'ant-aragon',
            id_cg: 'aragon',
            symbol: 'ANT',
            symbol_cg: 'ant',
            name: 'Aragon',
            name_cg: 'Aragon',
            slug: 'aragon'
        },
        'adx-adex': {
            id: 'adx-adex',
            id_cg: 'adex',
            symbol: 'ADX',
            symbol_cg: 'adx',
            name: 'AdEx',
            name_cg: 'AdEx',
            slug: 'adx-net'
        },
        'qrl-quantum-resistant-ledger': {
            id: 'qrl-quantum-resistant-ledger',
            id_cg: 'quantum-resistant-ledger',
            symbol: 'QRL',
            symbol_cg: 'qrl',
            name: 'Quantum Resistant Ledger',
            name_cg: 'Quantum Resistant Ledger',
            slug: 'quantum-resistant-ledger'
        },
        'data-streamr-datacoin': {
            id: 'data-streamr-datacoin',
            id_cg: 'streamr-datacoin',
            symbol: 'DATA',
            symbol_cg: 'data',
            name: 'Streamr DATAcoin',
            name_cg: 'Streamr DATAcoin',
            slug: 'streamr-datacoin'
        },
        'itc-iot-chain': {
            id: 'itc-iot-chain',
            id_cg: 'iot-chain',
            symbol: 'ITC',
            symbol_cg: 'itc',
            name: 'IoT Chain',
            name_cg: 'IoT Chain',
            slug: 'iot-chain'
        },
        'cmt-cybermiles': {
            id: 'cmt-cybermiles',
            id_cg: 'cybermiles',
            symbol: 'CMT',
            symbol_cg: 'cmt',
            name: 'CyberMiles',
            name_cg: 'CyberMiles',
            slug: 'cybermiles'
        },
        'atm-atmchain': {
            id: 'atm-atmchain',
            id_cg: 'atmchain',
            symbol: 'ATM',
            symbol_cg: 'atm',
            name: 'ATMChain',
            name_cg: 'ATMChain',
            slug: 'attention-token-of-media'
        },
        'qlc-qlc-chain': {
            id: 'qlc-qlc-chain',
            id_cg: 'qlink',
            symbol: 'QLC',
            symbol_cg: 'qlc',
            name: 'QLC Chain',
            name_cg: 'QLC Chain',
            slug: 'qlink'
        },
        'ukg-unikoin-gold': {
            id: 'ukg-unikoin-gold',
            id_cg: 'unikoin-gold',
            symbol: 'UKG',
            symbol_cg: 'ukg',
            name: 'Unikoin Gold',
            name_cg: 'Unikoin Gold',
            slug: 'unikoin-gold'
        },
        'fuel-etherparty': {
            id: 'fuel-etherparty',
            id_cg: 'etherparty',
            symbol: 'FUEL',
            symbol_cg: 'fuel',
            name: 'Etherparty',
            name_cg: 'Etherparty',
            slug: 'etherparty'
        },
        'dnt-district0x': {
            id: 'dnt-district0x',
            id_cg: 'district0x',
            symbol: 'DNT',
            symbol_cg: 'dnt',
            name: 'district0x',
            name_cg: 'district0x',
            slug: 'district0x'
        },
        'wgr-wagerr': {
            id: 'wgr-wagerr',
            id_cg: 'wagerr',
            symbol: 'WGR',
            symbol_cg: 'wgr',
            name: 'Wagerr',
            name_cg: 'Wagerr',
            slug: 'wagerr'
        },
        'mln-melon': {
            id: 'mln-melon',
            id_cg: 'melon',
            symbol: 'MLN',
            symbol_cg: 'mln',
            name: 'Melon',
            name_cg: 'Melon',
            slug: 'melon'
        },
        'tau-lamden': {
            id: 'tau-lamden',
            id_cg: 'lamden',
            symbol: 'TAU',
            symbol_cg: 'tau',
            name: 'Lamden',
            name_cg: 'Lamden',
            slug: 'lamden'
        },
        'ngc-naga': {
            id: 'ngc-naga',
            id_cg: 'naga',
            symbol: 'NGC',
            symbol_cg: 'ngc',
            name: 'NAGA',
            name_cg: 'NAGA',
            slug: 'naga'
        },
        'wings-wings': {
            id: 'wings-wings',
            id_cg: 'wings',
            symbol: 'WINGS',
            symbol_cg: 'wings',
            name: 'Wings',
            name_cg: 'Wings',
            slug: 'wings'
        },
        'amb-ambrosus': {
            id: 'amb-ambrosus',
            id_cg: 'amber',
            symbol: 'AMB',
            symbol_cg: 'amb',
            name: 'Ambrosus',
            name_cg: 'Ambrosus',
            slug: 'amber'
        },
        'hvn-hive-project': {
            id: 'hvn-hive-project',
            id_cg: 'hive',
            symbol: 'HVN',
            symbol_cg: 'hvn',
            name: 'Hiveterminal Token',
            name_cg: 'Hiveterminal token',
            slug: 'hiveterminal-token'
        },
        'hst-decision-token': {
            id: 'hst-decision-token',
            id_cg: 'decision-token',
            symbol: 'HST',
            symbol_cg: 'hst',
            name: 'Decision Token',
            name_cg: 'Decision Token',
            slug: 'decision-token'
        },
        'mgo-mobilego': {
            id: 'mgo-mobilego',
            id_cg: 'mobilego',
            symbol: 'MGO',
            symbol_cg: 'mgo',
            name: 'MobileGo',
            name_cg: 'MobileGo',
            slug: 'mobilego'
        },
        'edo-eidoo': {
            id: 'edo-eidoo',
            id_cg: 'eidoo',
            symbol: 'EDO',
            symbol_cg: 'edo',
            name: 'Eidoo',
            name_cg: 'Eidoo',
            slug: 'eidoo'
        },
        'int-internet-node-token': {
            id: 'int-internet-node-token',
            id_cg: 'internet-node-token',
            symbol: 'INT',
            symbol_cg: 'int',
            name: 'Internet Node Token',
            name_cg: 'Internet Node Token',
            slug: 'internet-node-token'
        },
        'brd-bread': {
            id: 'brd-bread',
            id_cg: 'bread',
            symbol: 'BRD',
            symbol_cg: 'brd',
            name: 'Bread',
            name_cg: 'Bread',
            slug: 'bread'
        },
        'agrs-agoras-tokens': {
            id: 'agrs-agoras-tokens',
            id_cg: 'agoras',
            symbol: 'AGRS',
            symbol_cg: 'agrs',
            name: 'Agoras Tokens',
            name_cg: 'Agoras Tauchain',
            slug: 'agoras-tokens'
        },
        'mtl-metal': {
            id: 'mtl-metal',
            id_cg: 'metal',
            symbol: 'MTL',
            symbol_cg: 'mtl',
            name: 'Metal',
            name_cg: 'Metal',
            slug: 'metal'
        },
        '1st-firstblood': {
            id: '1st-firstblood',
            id_cg: 'first-blood',
            symbol: '1ST',
            symbol_cg: '1st',
            name: 'FirstBlood',
            name_cg: 'First Blood',
            slug: 'firstblood'
        },
        'tnt-tierion': {
            id: 'tnt-tierion',
            id_cg: 'tierion',
            symbol: 'TNT',
            symbol_cg: 'tnt',
            name: 'Tierion',
            name_cg: 'Tierion',
            slug: 'tierion'
        },
        'gto-gifto': {
            id: 'gto-gifto',
            id_cg: 'gifto',
            symbol: 'GTO',
            symbol_cg: 'gto',
            name: 'Gifto',
            name_cg: 'Gifto',
            slug: 'gifto'
        },
        'grid-grid': {
            id: 'grid-grid',
            id_cg: 'grid',
            symbol: 'GRID',
            symbol_cg: 'grid',
            name: 'Grid+',
            name_cg: 'Grid+',
            slug: 'grid'
        },
        'evx-everex': {
            id: 'evx-everex',
            id_cg: 'everex',
            symbol: 'EVX',
            symbol_cg: 'evx',
            name: 'Everex',
            name_cg: 'Everex',
            slug: 'everex'
        },
        'lun-lunyr': {
            id: 'lun-lunyr',
            id_cg: 'lunyr',
            symbol: 'LUN',
            symbol_cg: 'lun',
            name: 'Lunyr',
            name_cg: 'Lunyr',
            slug: 'lunyr'
        },
        'gvt-genesis-vision': {
            id: 'gvt-genesis-vision',
            id_cg: 'genesis-vision',
            symbol: 'GVT',
            symbol_cg: 'gvt',
            name: 'Genesis Vision',
            name_cg: 'Genesis Vision',
            slug: 'genesis-vision'
        },
        'trst-wetrust': {
            id: 'trst-wetrust',
            id_cg: 'wetrust',
            symbol: 'TRST',
            symbol_cg: 'trst',
            name: 'WeTrust',
            name_cg: 'WeTrust',
            slug: 'trust'
        },
        'ixt-ixt': {
            id: 'ixt-ixt',
            id_cg: 'insurex',
            symbol: 'IXT',
            symbol_cg: 'ixt',
            name: 'IXT',
            name_cg: 'iXledger',
            slug: 'ixledger'
        },
        'cat-bitclave': {
            id: 'cat-bitclave',
            id_cg: 'bitclave',
            symbol: 'CAT',
            symbol_cg: 'cat',
            name: 'BitClave',
            name_cg: 'BitClave',
            slug: 'bitclave'
        },
        'mth-monetha': {
            id: 'mth-monetha',
            id_cg: 'monetha',
            symbol: 'MTH',
            symbol_cg: 'mth',
            name: 'Monetha',
            name_cg: 'Monetha',
            slug: 'monetha'
        },
        'coss-coss': {
            id: 'coss-coss',
            id_cg: 'coss',
            symbol: 'COSS',
            symbol_cg: 'coss',
            name: 'COSS',
            name_cg: 'COSS',
            slug: ''
        },
        'mds-medishares': {
            id: 'mds-medishares',
            id_cg: 'medishares',
            symbol: 'MDS',
            symbol_cg: 'mds',
            name: 'MediShares',
            name_cg: 'MediShares',
            slug: 'medishares'
        },
        'taas-taas': {
            id: 'taas-taas',
            id_cg: 'taas',
            symbol: 'TAAS',
            symbol_cg: 'taas',
            name: 'TaaS',
            name_cg: 'TaaS',
            slug: 'taas'
        },
        'hgt-hellogold': {
            id: 'hgt-hellogold',
            id_cg: 'hellogold',
            symbol: 'HGT',
            symbol_cg: 'hgt',
            name: 'HelloGold',
            name_cg: 'HelloGold',
            slug: 'hellogold'
        },
        'dlt-agrello': {
            id: 'dlt-agrello',
            id_cg: 'agrello',
            symbol: 'DLT',
            symbol_cg: 'dlt',
            name: 'Agrello',
            name_cg: 'Agrello',
            slug: 'agrello-delta'
        },
        'adt-adtoken': {
            id: 'adt-adtoken',
            id_cg: 'adtoken',
            symbol: 'ADT',
            symbol_cg: 'adt',
            name: 'adToken',
            name_cg: 'adToken',
            slug: 'adtoken'
        },
        'pre-presearch': {
            id: 'pre-presearch',
            id_cg: 'presearch',
            symbol: 'PRE',
            symbol_cg: 'pre',
            name: 'Presearch',
            name_cg: 'Presearch',
            slug: 'presearch'
        },
        'dat-datum': {
            id: 'dat-datum',
            id_cg: 'datum',
            symbol: 'DAT',
            symbol_cg: 'dat',
            name: 'Datum',
            name_cg: 'Datum',
            slug: 'datum'
        },
        'tkn-tokencard': {
            id: 'tkn-tokencard',
            id_cg: 'tokencard',
            symbol: 'TKN',
            symbol_cg: 'tkn',
            name: 'TokenCard',
            name_cg: 'TokenCard',
            slug: ''
        },
        'wrc-worldcore': {
            id: 'wrc-worldcore',
            id_cg: 'worldcore',
            symbol: 'WRC',
            symbol_cg: 'wrc',
            name: 'Worldcore',
            name_cg: 'Worldcore',
            slug: 'worldcore'
        },
        'safex-safe-exchange-coin': {
            id: 'safex-safe-exchange-coin',
            id_cg: 'safex-token',
            symbol: 'SFT',
            symbol_cg: 'sft',
            name: 'Safex Token',
            name_cg: 'Safex Token',
            slug: 'safex-token'
        },
        'voise-voise': {
            id: 'voise-voise',
            id_cg: 'voise',
            symbol: 'VOISE',
            symbol_cg: 'voise',
            name: 'Voise',
            name_cg: 'VOISE',
            slug: 'voisecom'
        },
        'payx-paypex': {
            id: 'payx-paypex',
            id_cg: 'paypex',
            symbol: 'PAYX',
            symbol_cg: 'payx',
            name: 'Paypex',
            name_cg: 'Paypex',
            slug: 'paypex'
        },
        'ink-ink': {
            id: 'ink-ink',
            id_cg: 'ink',
            symbol: 'INK',
            symbol_cg: 'ink',
            name: 'Ink',
            name_cg: 'Ink',
            slug: 'ink'
        },
        'blt-bloom': {
            id: 'blt-bloom',
            id_cg: 'bloom',
            symbol: 'BLT',
            symbol_cg: 'blt',
            name: 'Bloom',
            name_cg: 'Bloom',
            slug: 'bloomtoken'
        },
        'yoyow-yoyow': {
            id: 'yoyow-yoyow',
            id_cg: 'yoyow',
            symbol: 'YOYOW',
            symbol_cg: 'yoyow',
            name: 'YOYOW',
            name_cg: 'YOYOW',
            slug: 'yoyow'
        },
        'dna-encrypgen': {
            id: 'dna-encrypgen',
            id_cg: 'encrypgen',
            symbol: 'DNA',
            symbol_cg: 'dna',
            name: 'EncrypGen',
            name_cg: 'EncrypGen',
            slug: 'encrypgen'
        },
        'snov-snovio': {
            id: 'snov-snovio',
            id_cg: 'snovio',
            symbol: 'SNOV',
            symbol_cg: 'snov',
            name: 'Snovian.Space',
            name_cg: 'Snovian.Space',
            slug: 'snov'
        },
        'nsr-nushares': {
            id: 'nsr-nushares',
            id_cg: 'nushares',
            symbol: 'NSR',
            symbol_cg: 'nsr',
            name: 'NuShares',
            name_cg: 'NuShares',
            slug: 'nushares'
        },
        'pepecash-pepe-cash': {
            id: 'pepecash-pepe-cash',
            id_cg: 'pepecash',
            symbol: 'PEPECASH',
            symbol_cg: 'pepecash',
            name: 'Pepe Cash',
            name_cg: 'PepeCash',
            slug: 'pepe-cash'
        },
        'snc-suncontract': {
            id: 'snc-suncontract',
            id_cg: 'suncontract',
            symbol: 'SNC',
            symbol_cg: 'snc',
            name: 'SunContract',
            name_cg: 'SunContract',
            slug: 'suncontract'
        },
        'gup-matchpool': {
            id: 'gup-matchpool',
            id_cg: 'matchpool',
            symbol: 'GUP',
            symbol_cg: 'gup',
            name: 'Matchpool',
            name_cg: 'Guppy',
            slug: 'guppy'
        },
        'mer-mercury': {
            id: 'mer-mercury',
            id_cg: 'mercury',
            symbol: 'MER',
            symbol_cg: 'mer',
            name: 'Mercury',
            name_cg: 'Mercury',
            slug: 'mercury'
        },
        'vib-viberate': {
            id: 'vib-viberate',
            id_cg: 'viberate',
            symbol: 'VIB',
            symbol_cg: 'vib',
            name: 'Viberate',
            name_cg: 'Viberate',
            slug: 'viberate'
        },
        'neu-neumark': {
            id: 'neu-neumark',
            id_cg: 'neumark',
            symbol: 'NEU',
            symbol_cg: 'neu',
            name: 'Neumark',
            name_cg: 'Neumark',
            slug: 'neumark'
        },
        'hmq-humaniq': {
            id: 'hmq-humaniq',
            id_cg: 'humaniq',
            symbol: 'HMQ',
            symbol_cg: 'hmq',
            name: 'Humaniq',
            name_cg: 'Humaniq',
            slug: 'humaniq'
        },
        'amp-synereo': {
            id: 'amp-synereo',
            id_cg: 'synereo',
            symbol: 'AMP',
            symbol_cg: 'amp',
            name: 'HyperSpace',
            name_cg: 'HyperSpace (Synereo)',
            slug: 'synereo'
        },
        'la-latoken': {
            id: 'la-latoken',
            id_cg: 'latoken',
            symbol: 'LA',
            symbol_cg: 'la',
            name: 'LATOKEN',
            name_cg: 'LATOKEN',
            slug: 'latoken'
        },
        'dpy-delphy': {
            id: 'dpy-delphy',
            id_cg: 'delphy',
            symbol: 'DPY',
            symbol_cg: 'dpy',
            name: 'Delphy',
            name_cg: 'Delphy',
            slug: 'delphy'
        },
        'bitcny-bitcny': {
            id: 'bitcny-bitcny',
            id_cg: 'bitCNY',
            symbol: 'BITCNY',
            symbol_cg: 'bitcny',
            name: 'bitCNY',
            name_cg: 'bitCNY',
            slug: 'bitcny'
        },
        'gtc-gamecom': {
            id: 'gtc-gamecom',
            id_cg: 'game',
            symbol: 'GTC',
            symbol_cg: 'gtc',
            name: 'Game.com',
            name_cg: 'Game',
            slug: 'game'
        },
        'tix-blocktix': {
            id: 'tix-blocktix',
            id_cg: 'blocktix',
            symbol: 'TIX',
            symbol_cg: 'tix',
            name: 'Blocktix',
            name_cg: 'Blocktix',
            slug: 'blocktix'
        },
        'drt-domraider': {
            id: 'drt-domraider',
            id_cg: 'domraider',
            symbol: 'DRT',
            symbol_cg: 'drt',
            name: 'DomRaider',
            name_cg: 'DomRaider',
            slug: 'domraider'
        },
        'art-maecenas': {
            id: 'art-maecenas',
            id_cg: 'maecenas',
            symbol: 'ART',
            symbol_cg: 'art',
            name: 'Maecenas',
            name_cg: 'Maecenas',
            slug: 'maecenas'
        },
        'zsc-zeusshield': {
            id: 'zsc-zeusshield',
            id_cg: 'zeusshield',
            symbol: 'ZSC',
            symbol_cg: 'zsc',
            name: 'Zeusshield',
            name_cg: 'Zeusshield',
            slug: 'zeusshield'
        },
        'bnty-bounty0x': {
            id: 'bnty-bounty0x',
            id_cg: 'bounty0x',
            symbol: 'BNTY',
            symbol_cg: 'bnty',
            name: 'Bounty0x',
            name_cg: 'Bounty0x',
            slug: 'bounty0x'
        },
        'orme-ormeus-coin': {
            id: 'orme-ormeus-coin',
            id_cg: 'ormeuscoin',
            symbol: 'ORME',
            symbol_cg: 'orme',
            name: 'Ormeus Coin',
            name_cg: 'Ormeus Coin',
            slug: 'ormeus-coin'
        },
        'divx-divi': {
            id: 'divx-divi',
            id_cg: '',
            symbol: 'DIVX',
            symbol_cg: '',
            name: 'Divi Exchange Token',
            name_cg: '',
            slug: ''
        },
        'credo-credo': {
            id: 'credo-credo',
            id_cg: 'credo',
            symbol: 'CREDO',
            symbol_cg: 'credo',
            name: 'Credo',
            name_cg: 'Credo',
            slug: 'credo'
        },
        'bot-bodhi': {
            id: 'bot-bodhi',
            id_cg: 'bodhi',
            symbol: 'BOT',
            symbol_cg: 'bot',
            name: 'Bodhi',
            name_cg: 'Bodhi',
            slug: ''
        },
        'nmr-numeraire': {
            id: 'nmr-numeraire',
            id_cg: 'numeraire',
            symbol: 'NMR',
            symbol_cg: 'nmr',
            name: 'Numeraire',
            name_cg: 'Numeraire',
            slug: 'numeraire'
        },
        'dov-dovu': {
            id: 'dov-dovu',
            id_cg: 'dovu',
            symbol: 'DOV',
            symbol_cg: 'dov',
            name: 'Dovu',
            name_cg: 'Dovu',
            slug: 'dovu'
        },
        'mda-moeda-loyalty-points': {
            id: 'mda-moeda-loyalty-points',
            id_cg: 'moeda-loyalty-points',
            symbol: 'MDA',
            symbol_cg: 'mda',
            name: 'Moeda Loyalty Points',
            name_cg: 'Moeda Loyalty Points',
            slug: 'moeda-loyalty-points'
        },
        'arn-aeron': {
            id: 'arn-aeron',
            id_cg: 'aeron',
            symbol: 'ARN',
            symbol_cg: 'arn',
            name: 'Aeron',
            name_cg: 'Aeron',
            slug: 'aeron'
        },
        'pro-propy': {
            id: 'pro-propy',
            id_cg: 'propy',
            symbol: 'PRO',
            symbol_cg: 'pro',
            name: 'Propy',
            name_cg: 'Propy',
            slug: 'propy'
        },
        'rvt-rivetz': {
            id: 'rvt-rivetz',
            id_cg: 'rivetz',
            symbol: 'RVT',
            symbol_cg: 'rvt',
            name: 'Rivetz',
            name_cg: 'Rivetz',
            slug: 'rivetz'
        },
        'ift-investfeed': {
            id: 'ift-investfeed',
            id_cg: 'investfeed',
            symbol: 'IFT',
            symbol_cg: 'ift',
            name: 'InvestFeed',
            name_cg: 'InvestFeed',
            slug: 'investfeed'
        },
        'bcpt-blockmason-credit-protocol': {
            id: 'bcpt-blockmason-credit-protocol',
            id_cg: 'blockmason-credit-protocol',
            symbol: 'BCPT',
            symbol_cg: 'bcpt',
            name: 'BlockMason Credit Protocol',
            name_cg: 'BlockMason Credit Protocol',
            slug: 'blockmason'
        },
        'bmc-blackmoon': {
            id: 'bmc-blackmoon',
            id_cg: 'blackmoon-crypto',
            symbol: 'BMC',
            symbol_cg: 'bmc',
            name: 'Blackmoon',
            name_cg: 'Blackmoon Crypto',
            slug: 'blackmoon'
        },
        'stx-stox': {
            id: 'stx-stox',
            id_cg: 'stox',
            symbol: 'STX',
            symbol_cg: 'stx',
            name: 'Stox',
            name_cg: 'Stox',
            slug: 'stox'
        },
        'alis-alis': {
            id: 'alis-alis',
            id_cg: 'alis',
            symbol: 'ALIS',
            symbol_cg: 'alis',
            name: 'ALIS',
            name_cg: 'ALIS',
            slug: 'alis'
        },
        'blue-blue-protocol': {
            id: 'blue-blue-protocol',
            id_cg: 'blue',
            symbol: 'BLUE',
            symbol_cg: 'blue',
            name: 'Blue Protocol',
            name_cg: 'Blue Protocol',
            slug: 'ethereum-blue'
        },
        'nxc-nexium': {
            id: 'nxc-nexium',
            id_cg: 'nexium',
            symbol: 'NXC',
            symbol_cg: 'nxc',
            name: 'Nexium',
            name_cg: 'Nexium',
            slug: ''
        },
        'pkt-playkey': {
            id: 'pkt-playkey',
            id_cg: 'playkey',
            symbol: 'PKT',
            symbol_cg: 'pkt',
            name: 'Playkey',
            name_cg: 'PlayKey',
            slug: 'playkey'
        },
        'life-life': {
            id: 'life-life',
            id_cg: 'life',
            symbol: 'LIFE',
            symbol_cg: 'life',
            name: 'LIFE',
            name_cg: 'LIFE',
            slug: 'life'
        },
        'oax-oax': {
            id: 'oax-oax',
            id_cg: 'openanx',
            symbol: 'OAX',
            symbol_cg: 'oax',
            name: 'OAX',
            name_cg: 'OpenANX',
            slug: 'oax'
        },
        'prg-paragon': {
            id: 'prg-paragon',
            id_cg: 'paragon',
            symbol: 'PRG',
            symbol_cg: 'prg',
            name: 'Paragon',
            name_cg: 'Paragon',
            slug: 'paragon'
        },
        'hdg-hedge': {
            id: 'hdg-hedge',
            id_cg: '',
            symbol: 'HDG',
            symbol_cg: '',
            name: 'Hedge',
            name_cg: '',
            slug: ''
        },
        'qun-qunqun': {
            id: 'qun-qunqun',
            id_cg: 'qunqun',
            symbol: 'QUN',
            symbol_cg: 'qun',
            name: 'QunQun',
            name_cg: 'QunQun',
            slug: 'qunqun'
        },
        'otn-open-trading-network': {
            id: 'otn-open-trading-network',
            id_cg: 'open-trading-network',
            symbol: 'OTN',
            symbol_cg: 'otn',
            name: 'Open Trading Network',
            name_cg: 'Open Trading Network',
            slug: 'open-trading-network'
        },
        'kick-kickcoin': {
            id: 'kick-kickcoin',
            id_cg: 'kickico',
            symbol: 'KICK',
            symbol_cg: 'kick',
            name: 'KickCoin',
            name_cg: 'KickCoin',
            slug: 'kickico'
        },
        'myb-mybit': {
            id: 'myb-mybit',
            id_cg: 'mybit-token',
            symbol: 'MYB',
            symbol_cg: 'myb',
            name: 'MyBit',
            name_cg: 'MyBit Token',
            slug: 'mybit'
        },
        'aix-aigang': {
            id: 'aix-aigang',
            id_cg: 'aigang',
            symbol: 'AIX',
            symbol_cg: 'aix',
            name: 'Aigang',
            name_cg: 'Aigang',
            slug: 'aigang'
        },
        'elix-elixir': {
            id: 'elix-elixir',
            id_cg: 'elixir',
            symbol: 'ELIX',
            symbol_cg: 'elix',
            name: 'Elixir',
            name_cg: 'Elixir',
            slug: 'elixir'
        },
        'incnt-incent': {
            id: 'incnt-incent',
            id_cg: 'incent',
            symbol: 'INCNT',
            symbol_cg: 'incnt',
            name: 'Incent',
            name_cg: 'Incent',
            slug: 'incent'
        },
        'ptoy-patientory': {
            id: 'ptoy-patientory',
            id_cg: 'patientory',
            symbol: 'PTOY',
            symbol_cg: 'ptoy',
            name: 'Patientory',
            name_cg: 'Patientory',
            slug: 'patientory'
        },
        'cred-verify': {
            id: 'cred-verify',
            id_cg: 'verify',
            symbol: 'CRED',
            symbol_cg: 'cred',
            name: 'Verify',
            name_cg: 'Verify',
            slug: 'verify'
        },
        'swt-swarm-city': {
            id: 'swt-swarm-city',
            id_cg: 'swarm-city',
            symbol: 'SWT',
            symbol_cg: 'swt',
            name: 'Swarm City',
            name_cg: 'Swarm City',
            slug: 'swarm-city'
        },
        'xaur-xaurum': {
            id: 'xaur-xaurum',
            id_cg: 'xaurum',
            symbol: 'XAUR',
            symbol_cg: 'xaur',
            name: 'Xaurum',
            name_cg: 'Xaurum',
            slug: 'xaurum'
        },
        'bq-bitqy': {
            id: 'bq-bitqy',
            id_cg: 'bitqy',
            symbol: 'BQ',
            symbol_cg: 'bq',
            name: 'bitqy',
            name_cg: 'bitqy',
            slug: 'bitqy'
        },
        'soar-soarcoin': {
            id: 'soar-soarcoin',
            id_cg: 'soarcoin',
            symbol: 'SOAR',
            symbol_cg: 'soar',
            name: 'Soarcoin',
            name_cg: 'Soarcoin',
            slug: 'soarcoin'
        },
        'loc-locktrip': {
            id: 'loc-locktrip',
            id_cg: 'lockchain',
            symbol: 'LOC',
            symbol_cg: 'loc',
            name: 'LockTrip',
            name_cg: 'LockTrip',
            slug: 'lockchain'
        },
        'fldc-foldingcoin': {
            id: 'fldc-foldingcoin',
            id_cg: 'foldingcoin',
            symbol: 'FLDC',
            symbol_cg: 'fldc',
            name: 'FoldingCoin',
            name_cg: 'Foldingcoin',
            slug: 'foldingcoin'
        },
        'csno-bitdice': {
            id: 'csno-bitdice',
            id_cg: 'bitdice',
            symbol: 'CSNO',
            symbol_cg: 'csno',
            name: 'BitDice',
            name_cg: 'BitDice',
            slug: 'bitdice'
        },
        'icos-icos': {
            id: 'icos-icos',
            id_cg: 'icos',
            symbol: 'ICOS',
            symbol_cg: 'icos',
            name: 'ICOS',
            name_cg: 'ICOS',
            slug: ''
        },
        'xrl-rialto': {
            id: 'xrl-rialto',
            id_cg: '',
            symbol: 'XRL',
            symbol_cg: '',
            name: 'Rialto',
            name_cg: '',
            slug: ''
        },
        'flixx-flixxo': {
            id: 'flixx-flixxo',
            id_cg: 'flixxo',
            symbol: 'FLIXX',
            symbol_cg: 'flixx',
            name: 'Flixxo',
            name_cg: 'Flixxo',
            slug: 'flixxo'
        },
        'wct-waves-community-token': {
            id: 'wct-waves-community-token',
            id_cg: 'waves-community-token',
            symbol: 'WCT',
            symbol_cg: 'wct',
            name: 'Waves Community Token',
            name_cg: 'Waves Community Token',
            slug: 'waves-community-token'
        },
        'poll-clearpoll': {
            id: 'poll-clearpoll',
            id_cg: 'clearpoll',
            symbol: 'POLL',
            symbol_cg: 'poll',
            name: 'ClearPoll',
            name_cg: 'ClearPoll',
            slug: 'clearpoll'
        },
        'spf-sportyco': {
            id: 'spf-sportyco',
            id_cg: 'sportyco',
            symbol: 'SPF',
            symbol_cg: 'spf',
            name: 'SportyCo',
            name_cg: 'SportyCo',
            slug: 'sportyco'
        },
        'plbt-polybius': {
            id: 'plbt-polybius',
            id_cg: 'polybius',
            symbol: 'PLBT',
            symbol_cg: 'plbt',
            name: 'Polybius',
            name_cg: 'Polybius',
            slug: 'polybius'
        },
        'cag-change': {
            id: 'cag-change',
            id_cg: 'change',
            symbol: 'CAG',
            symbol_cg: 'cag',
            name: 'Change',
            name_cg: 'Change',
            slug: 'change'
        },
        'oct-oraclechain': {
            id: 'oct-oraclechain',
            id_cg: 'oraclechain',
            symbol: 'OCT',
            symbol_cg: 'oct',
            name: 'OracleChain',
            name_cg: 'OracleChain',
            slug: 'oraclechain'
        },
        'myst-mysterium': {
            id: 'myst-mysterium',
            id_cg: 'mysterium',
            symbol: 'MYST',
            symbol_cg: 'myst',
            name: 'Mysterium',
            name_cg: 'Mysterium',
            slug: 'mysterium'
        },
        'gmt-mercury-protocol': {
            id: 'gmt-mercury-protocol',
            id_cg: 'mercury-protocol',
            symbol: 'GMT',
            symbol_cg: 'gmt',
            name: 'Mercury Protocol',
            name_cg: 'Mercury Protocol',
            slug: ''
        },
        'bitusd-bitusd': {
            id: 'bitusd-bitusd',
            id_cg: 'bitusd',
            symbol: 'BITUSD',
            symbol_cg: 'bitusd',
            name: 'bitUSD',
            name_cg: 'BitUSD',
            slug: 'bitusd'
        },
        'plu-pluton': {
            id: 'plu-pluton',
            id_cg: 'pluton',
            symbol: 'PLU',
            symbol_cg: 'plu',
            name: 'Pluton',
            name_cg: 'Pluton',
            slug: 'pluton'
        },
        'dice-etheroll': {
            id: 'dice-etheroll',
            id_cg: 'etheroll',
            symbol: 'DICE',
            symbol_cg: 'dice',
            name: 'Etheroll',
            name_cg: 'Etheroll',
            slug: 'etheroll'
        },
        'time-chronobank': {
            id: 'time-chronobank',
            id_cg: 'chronobank',
            symbol: 'TIME',
            symbol_cg: 'time',
            name: 'Chronobank',
            name_cg: 'Chronobank',
            slug: 'chronobank'
        },
        'avt-aventus': {
            id: 'avt-aventus',
            id_cg: 'aventus',
            symbol: 'AVT',
            symbol_cg: 'avt',
            name: 'Aventus',
            name_cg: 'Aventus',
            slug: 'aventus'
        },
        'bet-daocasino': {
            id: 'bet-daocasino',
            id_cg: 'dao-casino',
            symbol: 'BET',
            symbol_cg: 'bet',
            name: 'DAO.Casino',
            name_cg: 'DAO.Casino',
            slug: 'dao-casino'
        },
        'pst-primas': {
            id: 'pst-primas',
            id_cg: 'primas',
            symbol: 'PST',
            symbol_cg: 'pst',
            name: 'Primas',
            name_cg: 'Primas',
            slug: 'primas'
        },
        'obits-obits': {
            id: 'obits-obits',
            id_cg: 'obits',
            symbol: 'OBITS',
            symbol_cg: 'obits',
            name: 'OBITS',
            name_cg: 'OBITS',
            slug: 'obits'
        },
        'ufr-upfiring': {
            id: 'ufr-upfiring',
            id_cg: 'upfiring',
            symbol: 'UFR',
            symbol_cg: 'ufr',
            name: 'Upfiring',
            name_cg: 'Upfiring',
            slug: 'upfiring'
        },
        'hkn-hacken': {
            id: 'hkn-hacken',
            id_cg: 'hacken',
            symbol: 'HKN',
            symbol_cg: 'hkn',
            name: 'Hacken',
            name_cg: 'Hacken',
            slug: 'hacken'
        },
        'ecob-ecobit': {
            id: 'ecob-ecobit',
            id_cg: 'ecobit',
            symbol: 'ECOB',
            symbol_cg: 'ecob',
            name: 'Ecobit',
            name_cg: 'Ecobit',
            slug: 'ecobit'
        },
        'rnt-oneroot-network': {
            id: 'rnt-oneroot-network',
            id_cg: 'oneroot-network',
            symbol: 'RNT',
            symbol_cg: 'rnt',
            name: 'OneRoot Network',
            name_cg: 'OneRoot Network',
            slug: 'oneroot-network'
        },
        'cvn-cvcoin': {
            id: 'cvn-cvcoin',
            id_cg: 'cvcoin',
            symbol: 'CVN',
            symbol_cg: 'cvn',
            name: 'CVCoin',
            name_cg: 'CVCoin',
            slug: 'cvcoin'
        },
        'ong-someesocial': {
            id: 'ong-someesocial',
            id_cg: 'ong-social',
            symbol: 'ONG',
            symbol_cg: 'ong',
            name: 'SoMee.Social',
            name_cg: 'onG.social',
            slug: 'ongsocial'
        },
        'atl-atlant': {
            id: 'atl-atlant',
            id_cg: 'atlant',
            symbol: 'ATL',
            symbol_cg: 'atl',
            name: 'ATLANT',
            name_cg: 'Atlant',
            slug: 'atlant'
        },
        'fyp-flypme': {
            id: 'fyp-flypme',
            id_cg: 'flypme',
            symbol: 'FYP',
            symbol_cg: 'fyp',
            name: 'FlypMe',
            name_cg: 'FlypMe',
            slug: 'flypme'
        },
        'nio-autonio': {
            id: 'nio-autonio',
            id_cg: 'autonio',
            symbol: 'NIO',
            symbol_cg: 'nio',
            name: 'Autonio',
            name_cg: 'Autonio',
            slug: 'autonio'
        },
        'uqc-uquid-coin': {
            id: 'uqc-uquid-coin',
            id_cg: 'uquid-coin',
            symbol: 'UQC',
            symbol_cg: 'uqc',
            name: 'Uquid Coin',
            name_cg: 'Uquid Coin',
            slug: 'uquid-coin'
        },
        'tie-tiesdb': {
            id: 'tie-tiesdb',
            id_cg: 'ties-network',
            symbol: 'TIE',
            symbol_cg: 'tie',
            name: 'Ties.DB',
            name_cg: 'Ties.DB',
            slug: 'tiesdb'
        },
        'pra-prochain': {
            id: 'pra-prochain',
            id_cg: 'prochain',
            symbol: 'PRA',
            symbol_cg: 'pra',
            name: 'ProChain',
            name_cg: 'ProChain',
            slug: 'prochain'
        },
        'wish-mywish': {
            id: 'wish-mywish',
            id_cg: 'mywish',
            symbol: 'WISH',
            symbol_cg: 'wish',
            name: 'MyWish',
            name_cg: 'MyWish',
            slug: 'mywish'
        },
        'bon-bonpay': {
            id: 'bon-bonpay',
            id_cg: 'bonpay',
            symbol: 'BON',
            symbol_cg: 'bon',
            name: 'Bonpay',
            name_cg: 'Bonpay',
            slug: 'bonpay'
        },
        'astro-astro': {
            id: 'astro-astro',
            id_cg: 'astro',
            symbol: 'ASTRO',
            symbol_cg: 'astro',
            name: 'Astro',
            name_cg: 'Astro',
            slug: ''
        },
        'pix-lampix': {
            id: 'pix-lampix',
            id_cg: 'lampix',
            symbol: 'PIX',
            symbol_cg: 'pix',
            name: 'Lampix',
            name_cg: 'Lampix',
            slug: 'lampix'
        },
        'qwark-qwark': {
            id: 'qwark-qwark',
            id_cg: 'qwark',
            symbol: 'QWARK',
            symbol_cg: 'qwark',
            name: 'Qwark',
            name_cg: 'Qwark',
            slug: ''
        },
        'xuc-exchange-union': {
            id: 'xuc-exchange-union',
            id_cg: 'exchange-union',
            symbol: 'XUC',
            symbol_cg: 'xuc',
            name: 'Exchange Union',
            name_cg: 'Exchange Union',
            slug: 'exchange-union'
        },
        'crb-creditbit': {
            id: 'crb-creditbit',
            id_cg: 'creditbit',
            symbol: 'CRB',
            symbol_cg: 'crb',
            name: 'Creditbit',
            name_cg: 'Creditbit',
            slug: 'creditbit'
        },
        'b2b-b2bx': {
            id: 'b2b-b2bx',
            id_cg: 'b2b',
            symbol: 'B2B',
            symbol_cg: 'b2b',
            name: 'B2BX',
            name_cg: 'B2BX',
            slug: 'b2bx'
        },
        'opt-opus': {
            id: 'opt-opus',
            id_cg: 'opus',
            symbol: 'OPT',
            symbol_cg: 'opt',
            name: 'Opus',
            name_cg: 'Opus',
            slug: 'opus'
        },
        'play-herocoin': {
            id: 'play-herocoin',
            id_cg: 'herocoin',
            symbol: 'PLAY',
            symbol_cg: 'play',
            name: 'HEROcoin',
            name_cg: 'HEROcoin',
            slug: 'herocoin'
        },
        'amm-micromoney': {
            id: 'amm-micromoney',
            id_cg: 'micromoney',
            symbol: 'AMM',
            symbol_cg: 'amm',
            name: 'MicroMoney',
            name_cg: 'MicroMoney',
            slug: 'micromoney'
        },
        'prix-privatix': {
            id: 'prix-privatix',
            id_cg: 'privatix',
            symbol: 'PRIX',
            symbol_cg: 'prix',
            name: 'Privatix',
            name_cg: 'Privatix',
            slug: 'privatix'
        },
        'tfl-trueflip': {
            id: 'tfl-trueflip',
            id_cg: 'trueflip',
            symbol: 'TFL',
            symbol_cg: 'tfl',
            name: 'TrueFlip',
            name_cg: 'TrueFlip',
            slug: 'trueflip'
        },
        'hbt-hubii-network': {
            id: 'hbt-hubii-network',
            id_cg: 'hubii-network',
            symbol: 'HBT',
            symbol_cg: 'hbt',
            name: 'Hubii Network',
            name_cg: 'Hubii Network',
            slug: 'hubii-network'
        },
        'scl-sociall': {
            id: 'scl-sociall',
            id_cg: 'sociall',
            symbol: 'SCL',
            symbol_cg: 'scl',
            name: 'Sociall',
            name_cg: 'Sociall',
            slug: 'sociall'
        },
        'cdx-network': {
            id: 'cdx-network',
            id_cg: 'commodity-ad-network',
            symbol: 'CDX',
            symbol_cg: 'cdx',
            name: 'CDX Network',
            name_cg: 'CDX Network',
            slug: 'cdx-network'
        },
        'ebtc-ebitcoin': {
            id: 'ebtc-ebitcoin',
            id_cg: 'ebitcoin',
            symbol: 'EBTC',
            symbol_cg: 'ebtc',
            name: 'eBitcoin',
            name_cg: 'eBitcoin',
            slug: 'ebtcnew'
        },
        'dai-dai': {
            id: 'dai-dai',
            id_cg: 'dai',
            symbol: 'DAI',
            symbol_cg: 'dai',
            name: 'Dai',
            name_cg: 'Dai',
            slug: 'dai'
        },
        'drp-dcorp': {
            id: 'drp-dcorp',
            id_cg: 'dcorp',
            symbol: 'DRP',
            symbol_cg: 'drp',
            name: 'DCORP',
            name_cg: 'DCORP',
            slug: ''
        },
        'inxt-internxt': {
            id: 'inxt-internxt',
            id_cg: 'internxt',
            symbol: 'INXT',
            symbol_cg: 'inxt',
            name: 'Internxt',
            name_cg: 'Internxt',
            slug: 'internxt'
        },
        'ind-indorse-token': {
            id: 'ind-indorse-token',
            id_cg: 'indorse',
            symbol: 'IND',
            symbol_cg: 'ind',
            name: 'Indorse Token',
            name_cg: 'Indorse',
            slug: 'indorse-token'
        },
        'zrc-zrcoin': {
            id: 'zrc-zrcoin',
            id_cg: 'zrcoin',
            symbol: 'ZRC',
            symbol_cg: 'zrc',
            name: 'ZrCoin',
            name_cg: 'ZrCoin',
            slug: 'zrcoin'
        },
        'sta-starta': {
            id: 'sta-starta',
            id_cg: 'starta',
            symbol: 'STA',
            symbol_cg: 'sta',
            name: 'Starta',
            name_cg: 'Starta',
            slug: 'starta'
        },
        'adl-adelphoi': {
            id: 'adl-adelphoi',
            id_cg: 'adelphoi',
            symbol: 'ADL',
            symbol_cg: 'adl',
            name: 'Adelphoi',
            name_cg: 'Adelphoi',
            slug: 'adelphoi'
        },
        'wand-wandx': {
            id: 'wand-wandx',
            id_cg: 'wandx',
            symbol: 'WAND',
            symbol_cg: 'wand',
            name: 'WandX',
            name_cg: 'WandX',
            slug: 'wandx'
        },
        'erc20-erc20': {
            id: 'erc20-erc20',
            id_cg: 'erc20',
            symbol: 'ERC20',
            symbol_cg: 'erc20',
            name: 'ERC20',
            name_cg: 'ERC20',
            slug: 'erc20'
        },
        'ero-eroscoin': {
            id: 'ero-eroscoin',
            id_cg: 'eroscoin',
            symbol: 'ERO',
            symbol_cg: 'ero',
            name: 'Eroscoin',
            name_cg: 'Eroscoin',
            slug: 'eroscoin'
        },
        'real-real': {
            id: 'real-real',
            id_cg: 'real',
            symbol: 'REAL',
            symbol_cg: 'real',
            name: 'REAL',
            name_cg: 'Real Estate Asset Ledger',
            slug: 'real'
        },
        'ping-cryptoping': {
            id: 'ping-cryptoping',
            id_cg: 'cryptoping',
            symbol: 'PING',
            symbol_cg: 'ping',
            name: 'CryptoPing',
            name_cg: 'CryptoPing',
            slug: 'cryptoping'
        },
        'eltcoin-eltcoin': {
            id: 'eltcoin-eltcoin',
            id_cg: 'eltcoin',
            symbol: 'ELTCOIN',
            symbol_cg: 'eltcoin',
            name: 'ELTCOIN',
            name_cg: 'Eltcoin',
            slug: 'eltcoin'
        },
        'good-goodomy': {
            id: 'good-goodomy',
            id_cg: 'goodomy',
            symbol: 'GOOD',
            symbol_cg: 'good',
            name: 'Goodomy',
            name_cg: 'Goodomy',
            slug: 'goodomy'
        },
        'etbs-ethbits': {
            id: 'etbs-ethbits',
            id_cg: 'ethbits',
            symbol: 'ETBS',
            symbol_cg: 'etbs',
            name: 'Ethbits',
            name_cg: 'Ethbits',
            slug: 'ethbits'
        },
        'efyt-ergo': {
            id: 'efyt-ergo',
            id_cg: 'ergo',
            symbol: 'EFYT',
            symbol_cg: 'efyt',
            name: 'Ergo',
            name_cg: 'Ergo',
            slug: 'ergo'
        },
        'stu-bitjob': {
            id: 'stu-bitjob',
            id_cg: 'bitjob',
            symbol: 'STU',
            symbol_cg: 'stu',
            name: 'bitJob',
            name_cg: 'bitJob',
            slug: 'student-coin'
        },
        'pbt-primalbase-token': {
            id: 'pbt-primalbase-token',
            id_cg: 'primalbase',
            symbol: 'PBT',
            symbol_cg: 'pbt',
            name: 'Primalbase Token',
            name_cg: 'Primalbase',
            slug: 'primalbase'
        },
        'flik-flik': {
            id: 'flik-flik',
            id_cg: 'flik',
            symbol: 'FLIK',
            symbol_cg: 'flik',
            name: 'FLiK',
            name_cg: 'FLiK',
            slug: ''
        },
        'ecash-ethereum-cash': {
            id: 'ecash-ethereum-cash',
            id_cg: 'ethereum-cash',
            symbol: 'ECASH',
            symbol_cg: 'ecash',
            name: 'Ethereum Cash',
            name_cg: 'Ethereum Cash',
            slug: 'ethereumcash'
        },
        'epy-emphy': {
            id: 'epy-emphy',
            id_cg: 'emphy',
            symbol: 'EPY',
            symbol_cg: 'epy',
            name: 'Emphy',
            name_cg: 'Emphy',
            slug: 'emphy'
        },
        'pipl-piplcoin': {
            id: 'pipl-piplcoin',
            id_cg: 'piplcoin',
            symbol: 'PIPL',
            symbol_cg: 'pipl',
            name: 'PiplCoin',
            name_cg: 'PiplCoin',
            slug: 'piplcoin'
        },
        'more-more-coin': {
            id: 'more-more-coin',
            id_cg: '',
            symbol: 'MORE',
            symbol_cg: '',
            name: 'More Coin',
            name_cg: '',
            slug: 'more-coin'
        },
        'kln-kolion': {
            id: 'kln-kolion',
            id_cg: 'kolion',
            symbol: 'KLN',
            symbol_cg: 'kln',
            name: 'Kolion',
            name_cg: 'Kolion',
            slug: 'kolion'
        },
        'ocl-oceanlab': {
            id: 'ocl-oceanlab',
            id_cg: 'oceanlab',
            symbol: 'OCL',
            symbol_cg: 'ocl',
            name: 'Oceanlab',
            name_cg: 'Oceanlab',
            slug: 'oceanlab'
        },
        'etg-ethereum-gold': {
            id: 'etg-ethereum-gold',
            id_cg: 'ethereum-gold',
            symbol: 'ETG',
            symbol_cg: 'etg',
            name: 'Ethereum Gold',
            name_cg: 'Ethereum Gold',
            slug: 'ethereum-gold'
        },
        'jet-jetcoin': {
            id: 'jet-jetcoin',
            id_cg: 'jetcoin',
            symbol: 'JET',
            symbol_cg: 'jet',
            name: 'Jetcoin',
            name_cg: 'Jetcoin',
            slug: 'jetcoin'
        },
        'cpay-cryptopay': {
            id: 'cpay-cryptopay',
            id_cg: 'cryptopay',
            symbol: 'CPAY',
            symbol_cg: 'cpay',
            name: 'Cryptopay',
            name_cg: 'Cryptopay',
            slug: 'cryptopay'
        },
        'mrt-miners-reward-token': {
            id: 'mrt-miners-reward-token',
            id_cg: 'miners-reward-token',
            symbol: 'MRT',
            symbol_cg: 'mrt',
            name: "Miners' Reward Token",
            name_cg: "Miners' Reward Token",
            slug: 'miners-reward-token'
        },
        'trct-tracto': {
            id: 'trct-tracto',
            id_cg: 'tracto',
            symbol: 'TRCT',
            symbol_cg: 'trct',
            name: 'Tracto',
            name_cg: 'Tracto',
            slug: 'tracto'
        },
        'ace-ace-tokenstars': {
            id: 'ace-ace-tokenstars',
            id_cg: 'tokenstars-ace',
            symbol: 'ACE',
            symbol_cg: 'ace',
            name: 'ACE (TokenStars)',
            name_cg: 'ACE',
            slug: 'ace'
        },
        'skin-skincoin': {
            id: 'skin-skincoin',
            id_cg: 'skincoin',
            symbol: 'SKIN',
            symbol_cg: 'skin',
            name: 'SkinCoin',
            name_cg: 'SkinCoin',
            slug: 'skincoin'
        },
        'ieth-iethereum': {
            id: 'ieth-iethereum',
            id_cg: 'iethereum',
            symbol: 'IETH',
            symbol_cg: 'ieth',
            name: 'iEthereum',
            name_cg: 'iEthereum',
            slug: 'iethereum'
        },
        'btcred-bitcoin-red': {
            id: 'btcred-bitcoin-red',
            id_cg: 'bitcoin-red',
            symbol: 'BTCRED',
            symbol_cg: 'btcred',
            name: 'Bitcoin Red',
            name_cg: 'Bitcoin Red',
            slug: 'bitcoin-red'
        },
        'mne-minereum': {
            id: 'mne-minereum',
            id_cg: 'minereum',
            symbol: 'MNE',
            symbol_cg: 'mne',
            name: 'Minereum',
            name_cg: 'Minereum',
            slug: 'minereum'
        },
        'xbl-billionaire-token': {
            id: 'xbl-billionaire-token',
            id_cg: 'billionaire-token',
            symbol: 'XBL',
            symbol_cg: 'xbl',
            name: 'Billionaire Token',
            name_cg: 'Billionaire Token',
            slug: 'billionaire-token'
        },
        'sgr-sugar-exchange': {
            id: 'sgr-sugar-exchange',
            id_cg: 'sugar-exchange',
            symbol: 'SGR',
            symbol_cg: 'sgr',
            name: 'Sugar Exchange',
            name_cg: 'Sugar Exchange',
            slug: 'sugar-exchange'
        },
        'cco-ccore': {
            id: 'cco-ccore',
            id_cg: 'ccore',
            symbol: 'CCO',
            symbol_cg: 'cco',
            name: 'Ccore',
            name_cg: 'Ccore',
            slug: 'ccore'
        },
        'cct-crystal-clear': {
            id: 'cct-crystal-clear',
            id_cg: 'crystal-clear',
            symbol: 'CCT',
            symbol_cg: 'cct',
            name: 'Crystal Clear',
            name_cg: 'Crystal Clear',
            slug: 'crystal-clear'
        },
        'func-funcoin': {
            id: 'func-funcoin',
            id_cg: 'funcoin',
            symbol: 'FUNC',
            symbol_cg: 'func',
            name: 'FUNCoin',
            name_cg: 'FUNCoin',
            slug: ''
        },
        'rlt-roulettetoken': {
            id: 'rlt-roulettetoken',
            id_cg: 'roulettetoken',
            symbol: 'RLT',
            symbol_cg: 'rlt',
            name: 'RouletteToken',
            name_cg: 'RouletteToken',
            slug: 'roulettetoken'
        },
        'brat-brother': {
            id: 'brat-brother',
            id_cg: 'brother',
            symbol: 'BRAT',
            symbol_cg: 'brat',
            name: 'BROTHER',
            name_cg: 'BROTHER',
            slug: 'brat'
        },
        'dalc-dalecoin': {
            id: 'dalc-dalecoin',
            id_cg: 'dalecoin',
            symbol: 'DALC',
            symbol_cg: 'dalc',
            name: 'Dalecoin',
            name_cg: 'Dalecoin',
            slug: 'dalecoin'
        },
        'ice-idice': {
            id: 'ice-idice',
            id_cg: '',
            symbol: 'ICE',
            symbol_cg: '',
            name: 'iDice',
            name_cg: '',
            slug: ''
        },
        'bln-bolenum': {
            id: 'bln-bolenum',
            id_cg: 'bolenum',
            symbol: 'BLN',
            symbol_cg: 'bln',
            name: 'Bolenum',
            name_cg: 'Bolenum',
            slug: 'bolenum'
        },
        'vrs-veros': {
            id: 'vrs-veros',
            id_cg: 'veros',
            symbol: 'VRS',
            symbol_cg: 'vrs',
            name: 'Veros',
            name_cg: 'Veros',
            slug: 'veros'
        },
        'ctic3-coimatic-30': {
            id: 'ctic3-coimatic-30',
            id_cg: 'coimatic-3',
            symbol: 'CTIC3',
            symbol_cg: 'ctic3',
            name: 'Coimatic 3.0',
            name_cg: 'Coimatic 3.0',
            slug: 'coimatic-3'
        },
        'exrn-exrnchain': {
            id: 'exrn-exrnchain',
            id_cg: 'exrnchain',
            symbol: 'EXRN',
            symbol_cg: 'exrn',
            name: 'EXRNchain',
            name_cg: 'EXRNchain',
            slug: 'exrnchain'
        },
        'ett-encryptotel-waves': {
            id: 'ett-encryptotel-waves',
            id_cg: 'encryptotel-eth',
            symbol: 'ETT',
            symbol_cg: 'ett',
            name: 'EncryptoTel [WAVES]',
            name_cg: 'EncryptoTel [Waves]',
            slug: 'encryptotel'
        },
        'dar-darcrus': {
            id: 'dar-darcrus',
            id_cg: 'darcrus',
            symbol: 'DAR',
            symbol_cg: 'dar',
            name: 'Darcrus',
            name_cg: 'Darcrus',
            slug: 'darcrus'
        },
        'inpay-inpay': {
            id: 'inpay-inpay',
            id_cg: '',
            symbol: 'INPAY',
            symbol_cg: '',
            name: 'InPay',
            name_cg: '',
            slug: ''
        },
        'b-bankcoin': {
            id: 'b-bankcoin',
            id_cg: 'bankcoin',
            symbol: 'B@',
            symbol_cg: 'b@',
            name: 'Bankcoin',
            name_cg: 'Bankcoin',
            slug: 'bankcoin'
        },
        'shdw-shadow-token': {
            id: 'shdw-shadow-token',
            id_cg: 'shadow-token',
            symbol: 'SHDW',
            symbol_cg: 'shdw',
            name: 'Shadow Token',
            name_cg: 'Shadow Token',
            slug: 'shadow-token'
        },
        'js-javascript-token': {
            id: 'js-javascript-token',
            id_cg: 'javascript-token',
            symbol: 'JS',
            symbol_cg: 'js',
            name: 'JavaScript Token',
            name_cg: 'JavaScript Token',
            slug: 'javascript-token'
        },
        'iost-iost': {
            id: 'iost-iost',
            id_cg: 'iostoken',
            symbol: 'IOST',
            symbol_cg: 'iost',
            name: 'IOST',
            name_cg: 'IOST',
            slug: 'iostoken'
        },
        'swftc-swftcoin': {
            id: 'swftc-swftcoin',
            id_cg: 'swftcoin',
            symbol: 'SWFTC',
            symbol_cg: 'swftc',
            name: 'SwftCoin',
            name_cg: 'SwftCoin',
            slug: 'swftcoin'
        },
        'gnx-genaro-network': {
            id: 'gnx-genaro-network',
            id_cg: 'genaro-network',
            symbol: 'GNX',
            symbol_cg: 'gnx',
            name: 'Genaro Network',
            name_cg: 'Genaro Network',
            slug: 'genaro-network'
        },
        'smt-smartmesh': {
            id: 'smt-smartmesh',
            id_cg: 'smartmesh',
            symbol: 'SMT',
            symbol_cg: 'smt',
            name: 'SmartMesh',
            name_cg: 'SmartMesh',
            slug: 'smartmesh'
        },
        'bto-bottos': {
            id: 'bto-bottos',
            id_cg: 'bottos',
            symbol: 'BTO',
            symbol_cg: 'bto',
            name: 'Bottos',
            name_cg: 'Bottos',
            slug: 'bottos'
        },
        'aidoc-ai-doctor': {
            id: 'aidoc-ai-doctor',
            id_cg: 'ai-doctor',
            symbol: 'AIDOC',
            symbol_cg: 'aidoc',
            name: 'AI Doctor',
            name_cg: 'AI Doctor',
            slug: 'aidoc'
        },
        'theta-theta-token': {
            id: 'theta-theta-token',
            id_cg: 'theta-token',
            symbol: 'THETA',
            symbol_cg: 'theta',
            name: 'THETA',
            name_cg: 'Theta Network',
            slug: 'theta'
        },
        'spc-spacechain': {
            id: 'spc-spacechain',
            id_cg: 'spacechain',
            symbol: 'SPC',
            symbol_cg: 'spc',
            name: 'SpaceChain',
            name_cg: 'SpaceChain',
            slug: 'spacechain'
        },
        'mot-olympus-labs': {
            id: 'mot-olympus-labs',
            id_cg: 'olympus-labs',
            symbol: 'MOT',
            symbol_cg: 'mot',
            name: 'Olympus Labs',
            name_cg: 'Olympus Labs',
            slug: 'olympus-labs'
        },
        'key-selfkey': {
            id: 'key-selfkey',
            id_cg: 'selfkey',
            symbol: 'KEY',
            symbol_cg: 'key',
            name: 'Selfkey',
            name_cg: 'SelfKey',
            slug: 'selfkey'
        },
        'tsl-energo': {
            id: 'tsl-energo',
            id_cg: 'energo',
            symbol: 'TSL',
            symbol_cg: 'tsl',
            name: 'Energo',
            name_cg: 'Tesla',
            slug: 'energo'
        },
        'agi-singularitynet': {
            id: 'agi-singularitynet',
            id_cg: 'singularitynet',
            symbol: 'AGI',
            symbol_cg: 'agi',
            name: 'SingularityNET',
            name_cg: 'SingularityNET',
            slug: 'singularitynet'
        },
        'put-profile-utility-token': {
            id: 'put-profile-utility-token',
            id_cg: 'profile-utility-token',
            symbol: 'PUT',
            symbol_cg: 'put',
            name: 'Profile Utility Token',
            name_cg: 'Profile Utility Token',
            slug: 'profile-utility-token'
        },
        'qbt-qbao': {
            id: 'qbt-qbao',
            id_cg: 'qbao',
            symbol: 'QBT',
            symbol_cg: 'qbt',
            name: 'Qbao',
            name_cg: 'Qbao',
            slug: 'qbao'
        },
        'ignis-ignis': {
            id: 'ignis-ignis',
            id_cg: 'ignis',
            symbol: 'IGNIS',
            symbol_cg: 'ignis',
            name: 'Ignis',
            name_cg: 'Ignis',
            slug: 'ignis'
        },
        'eko-echolink': {
            id: 'eko-echolink',
            id_cg: 'echolink',
            symbol: 'EKO',
            symbol_cg: 'eko',
            name: 'EchoLink',
            name_cg: 'EchoLink',
            slug: 'echolink'
        },
        'ipl-vouchforme': {
            id: 'ipl-vouchforme',
            id_cg: 'insurepal',
            symbol: 'IPL',
            symbol_cg: 'ipl',
            name: 'VouchForMe',
            name_cg: 'InsurePal',
            slug: 'insurepal'
        },
        'fair-fairgame': {
            id: 'fair-fairgame',
            id_cg: 'fairgame',
            symbol: 'FAIR',
            symbol_cg: 'fair',
            name: 'FairGame',
            name_cg: 'FairGame',
            slug: 'fairgame'
        },
        'cl-coinlancer': {
            id: 'cl-coinlancer',
            id_cg: 'coinlancer',
            symbol: 'CL',
            symbol_cg: 'cl',
            name: 'Coinlancer',
            name_cg: 'Coinlancer',
            slug: 'coinlancer'
        },
        'can-canyacoin': {
            id: 'can-canyacoin',
            id_cg: 'canyacoin',
            symbol: 'CAN',
            symbol_cg: 'can',
            name: 'CanYaCoin',
            name_cg: 'CanYaCoin',
            slug: 'canyacoin'
        },
        'capp-cappasity': {
            id: 'capp-cappasity',
            id_cg: 'cappasity',
            symbol: 'CAPP',
            symbol_cg: 'capp',
            name: 'Cappasity',
            name_cg: 'Cappasity',
            slug: 'cappasity'
        },
        'cms-comsa-eth': {
            id: 'cms-comsa-eth',
            id_cg: 'comsa',
            symbol: 'CMS',
            symbol_cg: 'cms',
            name: 'COMSA [ETH]',
            name_cg: 'COMSA',
            slug: 'comsa-eth'
        },
        'ugc-ugchain': {
            id: 'ugc-ugchain',
            id_cg: 'ugchain',
            symbol: 'UGC',
            symbol_cg: 'ugc',
            name: 'ugChain',
            name_cg: 'ugChain',
            slug: 'ugchain'
        },
        'moac-moac': {
            id: 'moac-moac',
            id_cg: 'moac',
            symbol: 'MOAC',
            symbol_cg: 'moac',
            name: 'MOAC',
            name_cg: 'MOAC',
            slug: 'moac'
        },
        'bdg-bitdegree': {
            id: 'bdg-bitdegree',
            id_cg: 'bitdegree',
            symbol: 'BDG',
            symbol_cg: 'bdg',
            name: 'BitDegree',
            name_cg: 'BitDegree',
            slug: 'bitdegree'
        },
        'idxm-idex-membership': {
            id: 'idxm-idex-membership',
            id_cg: 'idex-membership',
            symbol: 'IDXM',
            symbol_cg: 'idxm',
            name: 'IDEX Membership',
            name_cg: 'IDEX Membership',
            slug: 'idex-membership'
        },
        'bkx-bankex': {
            id: 'bkx-bankex',
            id_cg: 'bankex',
            symbol: 'BKX',
            symbol_cg: 'bkx',
            name: 'BANKEX',
            name_cg: 'BANKEX',
            slug: 'bankex'
        },
        'idt-investdigital': {
            id: 'idt-investdigital',
            id_cg: 'investdigital',
            symbol: 'IDT',
            symbol_cg: 'idt',
            name: 'InvestDigital',
            name_cg: 'InvestDigital',
            slug: 'investdigital'
        },
        'arct-arbitragect': {
            id: 'arct-arbitragect',
            id_cg: 'arbitragect',
            symbol: 'ARCT',
            symbol_cg: 'arct',
            name: 'ArbitrageCT',
            name_cg: 'ArbitrageCT',
            slug: 'arbitragect'
        },
        'weth-weth': {
            id: 'weth-weth',
            id_cg: 'weth',
            symbol: 'WETH',
            symbol_cg: 'weth',
            name: 'WETH',
            name_cg: 'WETH',
            slug: 'weth'
        },
        'zap-zap': {
            id: 'zap-zap',
            id_cg: 'zap',
            symbol: 'ZAP',
            symbol_cg: 'zap',
            name: 'Zap',
            name_cg: 'Zap',
            slug: 'zap'
        },
        'qube-qube': {
            id: 'qube-qube',
            id_cg: 'qube',
            symbol: 'QUBE',
            symbol_cg: 'qube',
            name: 'Qube',
            name_cg: 'Qube',
            slug: 'qube'
        },
        'dim-dimcoin': {
            id: 'dim-dimcoin',
            id_cg: 'dimcoin',
            symbol: 'DIM',
            symbol_cg: 'dim',
            name: 'DIMCOIN',
            name_cg: 'DIMCOIN',
            slug: 'dimcoin'
        },
        'mvc-maverick-chain': {
            id: 'mvc-maverick-chain',
            id_cg: 'maverick-chain',
            symbol: 'MVC',
            symbol_cg: 'mvc',
            name: 'Maverick Chain',
            name_cg: 'Maverick Chain',
            slug: 'maverick-chain'
        },
        'grx-gold-reward-token': {
            id: 'grx-gold-reward-token',
            id_cg: 'gold-reward-token',
            symbol: 'GRX',
            symbol_cg: 'grx',
            name: 'GOLD Reward Token',
            name_cg: 'GOLD Reward Token',
            slug: 'gold-reward-token'
        },
        'sxdt-spectreai-dividend-token': {
            id: 'sxdt-spectreai-dividend-token',
            id_cg: 'spectre-dividend-token',
            symbol: 'SXDT',
            symbol_cg: 'sxdt',
            name: 'Spectre.ai Dividend Token',
            name_cg: 'Spectre.ai Dividend Token',
            slug: 'spectre-dividend'
        },
        'cld-cloud': {
            id: 'cld-cloud',
            id_cg: 'cloud',
            symbol: 'CLD',
            symbol_cg: 'cld',
            name: 'Cloud',
            name_cg: 'Cloud',
            slug: ''
        },
        'tct-tokenclub': {
            id: 'tct-tokenclub',
            id_cg: 'tokenclub',
            symbol: 'TCT',
            symbol_cg: 'tct',
            name: 'TokenClub',
            name_cg: 'TokenClub',
            slug: 'tokenclub'
        },
        'bcdn-blockcdn': {
            id: 'bcdn-blockcdn',
            id_cg: 'blockcdn',
            symbol: 'BCDN',
            symbol_cg: 'bcdn',
            name: 'BlockCDN',
            name_cg: 'BlockCDN',
            slug: 'blockcdn'
        },
        'utt-united-traders-token': {
            id: 'utt-united-traders-token',
            id_cg: 'united-traders-token',
            symbol: 'UTT',
            symbol_cg: 'utt',
            name: 'United Traders Token',
            name_cg: 'United Traders Token',
            slug: 'uttoken'
        },
        'sxut-spectreai-utility-token': {
            id: 'sxut-spectreai-utility-token',
            id_cg: 'spectre-utility-token',
            symbol: 'SXUT',
            symbol_cg: 'sxut',
            name: 'Spectre.ai Utility Token',
            name_cg: 'Spectre.ai Utility Token',
            slug: 'spectre-utility'
        },
        'sur-suretly': {
            id: 'sur-suretly',
            id_cg: 'suretly',
            symbol: 'SUR',
            symbol_cg: 'sur',
            name: 'Suretly',
            name_cg: 'Suretly',
            slug: 'suretly'
        },
        'day-chronologic': {
            id: 'day-chronologic',
            id_cg: 'chronologic',
            symbol: 'DAY',
            symbol_cg: 'day',
            name: 'Chronologic',
            name_cg: 'Chronologic',
            slug: 'chronologic'
        },
        'zengold-zengold': {
            id: 'zengold-zengold',
            id_cg: 'zengold',
            symbol: 'ZENGOLD',
            symbol_cg: 'zengold',
            name: 'ZenGold',
            name_cg: 'ZenGold',
            slug: ''
        },
        'get-get-protocol': {
            id: 'get-get-protocol',
            id_cg: 'get-token',
            symbol: 'GET',
            symbol_cg: 'get',
            name: 'GET Protocol',
            name_cg: 'GET Protocol',
            slug: 'get-protocol'
        },
        'evc-eventchain': {
            id: 'evc-eventchain',
            id_cg: 'eventchain',
            symbol: 'EVC',
            symbol_cg: 'evc',
            name: 'EventChain',
            name_cg: 'EventChain',
            slug: 'eventchain'
        },
        'iqt-iquant': {
            id: 'iqt-iquant',
            id_cg: 'iquant',
            symbol: 'IQT',
            symbol_cg: 'iqt',
            name: 'iQuant',
            name_cg: 'iQuant',
            slug: 'iquant'
        },
        'krm-karma': {
            id: 'krm-karma',
            id_cg: 'karma',
            symbol: 'KRM',
            symbol_cg: 'krm',
            name: 'Karma',
            name_cg: 'Karma',
            slug: 'karma'
        },
        'fap-fapcoin': {
            id: 'fap-fapcoin',
            id_cg: 'fapcoin',
            symbol: 'FAP',
            symbol_cg: 'fap',
            name: 'FAPcoin',
            name_cg: 'FAPcoin',
            slug: ''
        },
        'btcs-bitcoin-silver': {
            id: 'btcs-bitcoin-silver',
            id_cg: 'bitcoin-silver',
            symbol: 'BTCS',
            symbol_cg: 'btcs',
            name: 'Bitcoin Silver',
            name_cg: 'Bitcoin Silver',
            slug: ''
        },
        'nox-nitro': {
            id: 'nox-nitro',
            id_cg: 'nitro',
            symbol: 'NOX',
            symbol_cg: 'nox',
            name: 'Nitro',
            name_cg: 'NITRO',
            slug: 'nitro'
        },
        'can-content-and-ad-network': {
            id: 'can-content-and-ad-network',
            id_cg: 'content-and-ad-network',
            symbol: 'CAN',
            symbol_cg: 'can',
            name: 'Content and AD Network',
            name_cg: 'Content and AD Network',
            slug: 'content-and-ad-network'
        },
        'btcm-btcmoon': {
            id: 'btcm-btcmoon',
            id_cg: 'btcmoon',
            symbol: 'BTCM',
            symbol_cg: 'btcm',
            name: 'BTCMoon',
            name_cg: 'BTCMoon',
            slug: 'btcmoon'
        },
        'evr-everus': {
            id: 'evr-everus',
            id_cg: 'everus',
            symbol: 'EVR',
            symbol_cg: 'evr',
            name: 'Everus',
            name_cg: 'Everus',
            slug: 'everus'
        },
        'mcr-macro': {
            id: 'mcr-macro',
            id_cg: 'macro',
            symbol: 'MCR',
            symbol_cg: 'mcr',
            name: 'Macro',
            name_cg: 'Macro',
            slug: ''
        },
        'elite-ethereum-lite': {
            id: 'elite-ethereum-lite',
            id_cg: 'ethereum-lite',
            symbol: 'ELITE',
            symbol_cg: 'elite',
            name: 'Ethereum Lite',
            name_cg: 'Ethereum Lite',
            slug: 'ethereum-lite'
        },
        'sjcx-storjcoin-x': {
            id: 'sjcx-storjcoin-x',
            id_cg: '',
            symbol: 'SJCX',
            symbol_cg: '',
            name: 'Storjcoin X',
            name_cg: '',
            slug: 'storjcoin-x'
        },
        'ett-encryptotel-eth': {
            id: 'ett-encryptotel-eth',
            id_cg: 'encryptotel-eth',
            symbol: 'ETT',
            symbol_cg: 'ett',
            name: 'EncryptoTel [ETH]',
            name_cg: 'EncryptoTel [Waves]',
            slug: 'encryptotel'
        },
        'minex-minex': {
            id: 'minex-minex',
            id_cg: 'minex',
            symbol: 'MINEX',
            symbol_cg: 'minex',
            name: 'Minex',
            name_cg: 'Minex',
            slug: 'minex'
        },
        'wic-wi-coin': {
            id: 'wic-wi-coin',
            id_cg: 'wicoin',
            symbol: 'WIC',
            symbol_cg: 'wic',
            name: 'Wi Coin',
            name_cg: 'Wi Coin',
            slug: ''
        },
        'ibtc-ibtc': {
            id: 'ibtc-ibtc',
            id_cg: 'ibtc',
            symbol: 'IBTC',
            symbol_cg: 'ibtc',
            name: 'iBTC',
            name_cg: 'iBTC',
            slug: 'ibtc'
        },
        'mtx-matryx': {
            id: 'mtx-matryx',
            id_cg: 'matryx',
            symbol: 'MTX',
            symbol_cg: 'mtx',
            name: 'Matryx',
            name_cg: 'MATRYX',
            slug: 'matryx'
        },
        'pres-president-trump': {
            id: 'pres-president-trump',
            id_cg: 'president-trump',
            symbol: 'PRES',
            symbol_cg: 'pres',
            name: 'President Trump',
            name_cg: 'President Trump',
            slug: ''
        },
        'egold-egold': {
            id: 'egold-egold',
            id_cg: 'egold',
            symbol: 'EGOLD',
            symbol_cg: 'egold',
            name: 'eGold',
            name_cg: 'eGold',
            slug: ''
        },
        'ntc-natcoin': {
            id: 'ntc-natcoin',
            id_cg: 'natcoin',
            symbol: 'NTC',
            symbol_cg: 'ntc',
            name: 'Natcoin',
            name_cg: 'Natcoin',
            slug: ''
        },
        'hmp-hempcoin': {
            id: 'hmp-hempcoin',
            id_cg: 'hempcoin-thc',
            symbol: 'THC',
            symbol_cg: 'thc',
            name: 'HempCoin',
            name_cg: 'Hempcoin',
            slug: 'hempcoin'
        },
        'aac-acute-angle-cloud': {
            id: 'aac-acute-angle-cloud',
            id_cg: 'acute-angle-cloud',
            symbol: 'AAC',
            symbol_cg: 'aac',
            name: 'Acute Angle Cloud',
            name_cg: 'Acute Angle Cloud',
            slug: 'acute-angle-cloud'
        },
        'ssc-selfsell': {
            id: 'ssc-selfsell',
            id_cg: 'selfsell',
            symbol: 'SSC',
            symbol_cg: 'ssc',
            name: 'SelfSell',
            name_cg: 'SelfSell',
            slug: 'selfsell'
        },
        'chat-chatcoin': {
            id: 'chat-chatcoin',
            id_cg: 'chatcoin',
            symbol: 'CHAT',
            symbol_cg: 'chat',
            name: 'ChatCoin',
            name_cg: 'ChatCoin',
            slug: 'chatcoin'
        },
        'light-lightchain': {
            id: 'light-lightchain',
            id_cg: 'lightchain',
            symbol: 'LIGHT',
            symbol_cg: 'light',
            name: 'LightChain',
            name_cg: 'LightChain',
            slug: 'lightchain'
        },
        'ipc-ipchain': {
            id: 'ipc-ipchain',
            id_cg: 'ipchain',
            symbol: 'IPC',
            symbol_cg: 'ipc',
            name: 'IPChain',
            name_cg: 'IPChain',
            slug: 'ipchain'
        },
        'ddd-scryinfo': {
            id: 'ddd-scryinfo',
            id_cg: 'scry-info',
            symbol: 'DDD',
            symbol_cg: 'ddd',
            name: 'Scry.info',
            name_cg: 'Scry.info',
            slug: 'scryinfo'
        },
        'rbbt-rabbitcoin': {
            id: 'rbbt-rabbitcoin',
            id_cg: 'rabbitcoin',
            symbol: 'RBBT',
            symbol_cg: 'rbbt',
            name: 'RabbitCoin',
            name_cg: 'Rabbitcoin',
            slug: 'rabbitcoin'
        },
        'eng-enigma': {
            id: 'eng-enigma',
            id_cg: 'enigma',
            symbol: 'ENG',
            symbol_cg: 'eng',
            name: 'Enigma',
            name_cg: 'Enigma',
            slug: 'enigma'
        },
        'yee-yee': {
            id: 'yee-yee',
            id_cg: 'yee',
            symbol: 'YEE',
            symbol_cg: 'yee',
            name: 'YEE',
            name_cg: 'Yee',
            slug: 'yee'
        },
        'stc-starchain': {
            id: 'stc-starchain',
            id_cg: 'starchain',
            symbol: 'STC',
            symbol_cg: 'stc',
            name: 'StarChain',
            name_cg: 'StarChain',
            slug: 'starchain'
        },
        'mobi-mobius': {
            id: 'mobi-mobius',
            id_cg: 'mobinode',
            symbol: 'MOBI',
            symbol_cg: 'mobi',
            name: 'Mobius',
            name_cg: 'Mobinode',
            slug: 'mobius'
        },
        'read-read': {
            id: 'read-read',
            id_cg: 'read',
            symbol: 'READ',
            symbol_cg: 'read',
            name: 'Read',
            name_cg: 'Read',
            slug: 'read'
        },
        'gat-gatcoin': {
            id: 'gat-gatcoin',
            id_cg: 'gatcoin',
            symbol: 'GAT',
            symbol_cg: 'gat',
            name: 'Global Awards Token',
            name_cg: 'Gatcoin',
            slug: 'global-awards-token'
        },
        'mag-maggie': {
            id: 'mag-maggie',
            id_cg: 'maggie',
            symbol: 'MAG',
            symbol_cg: 'mag',
            name: 'Maggie',
            name_cg: 'Maggie',
            slug: 'maggie'
        },
        'hot-hydro-protocol': {
            id: 'hot-hydro-protocol',
            id_cg: 'hydro-protocol',
            symbol: 'HOT',
            symbol_cg: 'hot',
            name: 'Hydro Protocol',
            name_cg: 'Hydro Protocol',
            slug: 'hydro-protocol'
        },
        'ref-reftoken': {
            id: 'ref-reftoken',
            id_cg: 'reftoken',
            symbol: 'REF',
            symbol_cg: 'ref',
            name: 'RefToken',
            name_cg: 'RefToken',
            slug: 'reftoken'
        },
        'of-ofcoin': {
            id: 'of-ofcoin',
            id_cg: 'ofcoin',
            symbol: 'OF',
            symbol_cg: 'of',
            name: 'OFCOIN',
            name_cg: 'OFCOIN',
            slug: 'ofcoin'
        },
        'ocn-odyssey': {
            id: 'ocn-odyssey',
            id_cg: 'odyssey',
            symbol: 'OCN',
            symbol_cg: 'ocn',
            name: 'Odyssey',
            name_cg: 'Odyssey',
            slug: 'odyssey'
        },
        'let-linkeye': {
            id: 'let-linkeye',
            id_cg: 'linkeye',
            symbol: 'LET',
            symbol_cg: 'let',
            name: 'LinkEye',
            name_cg: 'Linkeye',
            slug: 'linkeye'
        },
        'mof-molecular-future': {
            id: 'mof-molecular-future',
            id_cg: 'molecular-future',
            symbol: 'MOF',
            symbol_cg: 'mof',
            name: 'Molecular Future',
            name_cg: 'Molecular Future',
            slug: 'molecular-future'
        },
        'uip-unlimitedip': {
            id: 'uip-unlimitedip',
            id_cg: 'unlimitedip',
            symbol: 'UIP',
            symbol_cg: 'uip',
            name: 'UnlimitedIP',
            name_cg: 'UnlimitedIP',
            slug: 'unlimitedip'
        },
        'true-truechain': {
            id: 'true-truechain',
            id_cg: 'true-chain',
            symbol: 'TRUE',
            symbol_cg: 'true',
            name: 'TrueChain',
            name_cg: 'TrueChain',
            slug: 'truechain'
        },
        'qbic-qbic': {
            id: 'qbic-qbic',
            id_cg: 'qbic',
            symbol: 'QBIC',
            symbol_cg: 'qbic',
            name: 'Qbic',
            name_cg: 'Qbic',
            slug: 'qbic'
        },
        'prs-pressone': {
            id: 'prs-pressone',
            id_cg: 'pressone',
            symbol: 'PRS',
            symbol_cg: 'prs',
            name: 'PressOne',
            name_cg: 'PressOne',
            slug: 'pressone'
        },
        'bltg-block-logic': {
            id: 'bltg-block-logic',
            id_cg: 'bitcoin-lightning',
            symbol: 'BLTG',
            symbol_cg: 'bltg',
            name: 'Block-Logic',
            name_cg: 'Block-Logic',
            slug: 'block-logic'
        },
        'spk-sparks': {
            id: 'spk-sparks',
            id_cg: 'sparks',
            symbol: 'SPK',
            symbol_cg: 'spk',
            name: 'SparksPay',
            name_cg: 'SparksPay',
            slug: 'sparkspay'
        },
        'tnc-trinity-network-credit': {
            id: 'tnc-trinity-network-credit',
            id_cg: 'trinity-network-credit',
            symbol: 'TNC',
            symbol_cg: 'tnc',
            name: 'Trinity Network Credit',
            name_cg: 'Trinity Network Credit',
            slug: 'trinity-network-credit'
        },
        'cov-covesting': {
            id: 'cov-covesting',
            id_cg: 'covesting',
            symbol: 'COV',
            symbol_cg: 'cov',
            name: 'Covesting',
            name_cg: 'Covesting',
            slug: 'covesting'
        },
        'eve-devery': {
            id: 'eve-devery',
            id_cg: 'devery',
            symbol: 'EVE',
            symbol_cg: 'eve',
            name: 'Devery',
            name_cg: 'Devery',
            slug: 'devery'
        },
        'dta-data': {
            id: 'dta-data',
            id_cg: 'data',
            symbol: 'DTA',
            symbol_cg: 'dta',
            name: 'DATA',
            name_cg: 'DATA',
            slug: 'data'
        },
        'cv-carvertical': {
            id: 'cv-carvertical',
            id_cg: 'carvertical',
            symbol: 'CV',
            symbol_cg: 'cv',
            name: 'carVertical',
            name_cg: 'carVertical',
            slug: 'carvertical'
        },
        'c20-crypto20': {
            id: 'c20-crypto20',
            id_cg: 'crypto20',
            symbol: 'C20',
            symbol_cg: 'c20',
            name: 'CRYPTO20',
            name_cg: 'CRYPTO20',
            slug: 'c20'
        },
        'idh-indahash': {
            id: 'idh-indahash',
            id_cg: 'indahash',
            symbol: 'IDH',
            symbol_cg: 'idh',
            name: 'indaHash',
            name_cg: 'indaHash',
            slug: 'indahash'
        },
        'aid-aidcoin': {
            id: 'aid-aidcoin',
            id_cg: 'aidcoin',
            symbol: 'AID',
            symbol_cg: 'aid',
            name: 'AidCoin',
            name_cg: 'AidCoin',
            slug: 'aidcoin'
        },
        'trac-origintrail': {
            id: 'trac-origintrail',
            id_cg: 'origintrail',
            symbol: 'TRAC',
            symbol_cg: 'trac',
            name: 'OriginTrail',
            name_cg: 'OriginTrail',
            slug: 'origintrail'
        },
        'bpt-blockport': {
            id: 'bpt-blockport',
            id_cg: 'blockport',
            symbol: 'BPT',
            symbol_cg: 'bpt',
            name: 'Blockport',
            name_cg: 'Blockport',
            slug: 'blockport'
        },
        'ekt-educare': {
            id: 'ekt-educare',
            id_cg: 'educare',
            symbol: 'EKT',
            symbol_cg: 'ekt',
            name: 'EDUCare',
            name_cg: 'EDUCare',
            slug: 'educare'
        },
        'crpt-crypterium': {
            id: 'crpt-crypterium',
            id_cg: 'crypterium',
            symbol: 'CRPT',
            symbol_cg: 'crpt',
            name: 'Crypterium',
            name_cg: 'Crypterium',
            slug: 'crpt'
        },
        'axpr-axpire': {
            id: 'axpr-axpire',
            id_cg: 'axpire',
            symbol: 'AXPR',
            symbol_cg: 'axpr',
            name: 'aXpire',
            name_cg: 'aXpire',
            slug: 'axpire'
        },
        'guess-peerguess': {
            id: 'guess-peerguess',
            id_cg: 'peerguess',
            symbol: 'GUESS',
            symbol_cg: 'guess',
            name: 'Peerguess',
            name_cg: 'PeerGuess',
            slug: 'guess'
        },
        'tbx-tokenbox': {
            id: 'tbx-tokenbox',
            id_cg: 'tokenbox',
            symbol: 'TBX',
            symbol_cg: 'tbx',
            name: 'Tokenbox',
            name_cg: 'Tokenbox',
            slug: 'tokenbox'
        },
        'fota-fortuna': {
            id: 'fota-fortuna',
            id_cg: 'fortuna',
            symbol: 'FOTA',
            symbol_cg: 'fota',
            name: 'Fortuna',
            name_cg: 'Fortuna',
            slug: 'fortuna'
        },
        'zil-zilliqa': {
            id: 'zil-zilliqa',
            id_cg: 'zilliqa',
            symbol: 'ZIL',
            symbol_cg: 'zil',
            name: 'Zilliqa',
            name_cg: 'Zilliqa',
            slug: 'zilliqa'
        },
        'meet-coinmeet': {
            id: 'meet-coinmeet',
            id_cg: 'coinmeet',
            symbol: 'MEET',
            symbol_cg: 'meet',
            name: 'CoinMeet',
            name_cg: 'CoinMeet',
            slug: 'coinmeet'
        },
        'npxs-pundi-x': {
            id: 'npxs-pundi-x',
            id_cg: 'pundi-x',
            symbol: 'NPXS',
            symbol_cg: 'npxs',
            name: 'Pundi X',
            name_cg: 'Pundi X',
            slug: 'pundi-x'
        },
        'slt-smartlands': {
            id: 'slt-smartlands',
            id_cg: 'smartlands',
            symbol: 'SLT',
            symbol_cg: 'slt',
            name: 'Smartlands',
            name_cg: 'Smartlands',
            slug: 'smartlands'
        },
        'pho-photon': {
            id: 'pho-photon',
            id_cg: 'photon',
            symbol: 'PHO',
            symbol_cg: 'pho',
            name: 'Photon',
            name_cg: 'Photon',
            slug: 'photon'
        },
        'soc-all-sports': {
            id: 'soc-all-sports',
            id_cg: 'all-sports',
            symbol: 'SOC',
            symbol_cg: 'soc',
            name: 'All Sports',
            name_cg: 'All Sports',
            slug: 'all-sports'
        },
        'grlc-garlicoin': {
            id: 'grlc-garlicoin',
            id_cg: 'garlicoin',
            symbol: 'GRLC',
            symbol_cg: 'grlc',
            name: 'Garlicoin',
            name_cg: 'Garlicoin',
            slug: 'garlicoin'
        },
        'man-matrix-ai-network': {
            id: 'man-matrix-ai-network',
            id_cg: 'matrix-ai-network',
            symbol: 'MAN',
            symbol_cg: 'man',
            name: 'Matrix AI Network',
            name_cg: 'Matrix AI Network',
            slug: 'matrix-ai-network'
        },
        'epc-electronic-pk-chain': {
            id: 'epc-electronic-pk-chain',
            id_cg: 'electronic-pk-chain',
            symbol: 'EPC',
            symbol_cg: 'epc',
            name: 'Electronic PK Chain',
            name_cg: 'Electronic PK Chain',
            slug: ''
        },
        'btw-bitwhite': {
            id: 'btw-bitwhite',
            id_cg: 'bitwhite',
            symbol: 'BTW',
            symbol_cg: 'btw',
            name: 'BitWhite',
            name_cg: 'BitWhite',
            slug: 'bitwhite'
        },
        'hmc-hi-mutual-society': {
            id: 'hmc-hi-mutual-society',
            id_cg: 'hi-mutual-society',
            symbol: 'HMC',
            symbol_cg: 'hmc',
            name: 'Hi Mutual Society',
            name_cg: 'Hi Mutual Society',
            slug: 'hi-mutual-society'
        },
        'candy-candy': {
            id: 'candy-candy',
            id_cg: 'candy',
            symbol: 'CANDY',
            symbol_cg: 'candy',
            name: 'Candy',
            name_cg: 'Candy',
            slug: ''
        },
        'trf-travelflex': {
            id: 'trf-travelflex',
            id_cg: 'travelflex',
            symbol: 'TRF',
            symbol_cg: 'trf',
            name: 'Travelflex',
            name_cg: 'TravelFlex',
            slug: 'travelflex'
        },
        'ruff-ruff': {
            id: 'ruff-ruff',
            id_cg: 'ruff',
            symbol: 'RUFF',
            symbol_cg: 'ruff',
            name: 'Ruff',
            name_cg: 'Ruff',
            slug: 'ruff'
        },
        'zpt-zeepin': {
            id: 'zpt-zeepin',
            id_cg: 'zeepin',
            symbol: 'ZPT',
            symbol_cg: 'zpt',
            name: 'Zeepin',
            name_cg: 'Zeepin',
            slug: 'zeepin'
        },
        'hlc-halalchain': {
            id: 'hlc-halalchain',
            id_cg: 'halalchain',
            symbol: 'HLC',
            symbol_cg: 'hlc',
            name: 'HalalChain',
            name_cg: 'HalalChain',
            slug: ''
        },
        'cofi-coinfi': {
            id: 'cofi-coinfi',
            id_cg: 'coinfi',
            symbol: 'COFI',
            symbol_cg: 'cofi',
            name: 'CoinFi',
            name_cg: 'CoinFi',
            slug: 'coinfi'
        },
        'cxo-cargox': {
            id: 'cxo-cargox',
            id_cg: 'cargox',
            symbol: 'CXO',
            symbol_cg: 'cxo',
            name: 'CargoX',
            name_cg: 'CargoX',
            slug: 'cargox'
        },
        'cpc-cpchain': {
            id: 'cpc-cpchain',
            id_cg: 'cpchain',
            symbol: 'CPC',
            symbol_cg: 'cpc',
            name: 'CPChain',
            name_cg: 'Cyber Physical Chain Foudation',
            slug: 'cpchain'
        },
        'eql-equal': {
            id: 'eql-equal',
            id_cg: 'equal',
            symbol: 'EQL',
            symbol_cg: 'eql',
            name: 'Equal',
            name_cg: 'Equal',
            slug: 'equal'
        },
        'sense-sense': {
            id: 'sense-sense',
            id_cg: 'sense',
            symbol: 'SENSE',
            symbol_cg: 'sense',
            name: 'Sense',
            name_cg: 'Sense',
            slug: 'sense'
        },
        'ht-huobi-token': {
            id: 'ht-huobi-token',
            id_cg: 'huobi-token',
            symbol: 'HT',
            symbol_cg: 'ht',
            name: 'Huobi Token',
            name_cg: 'Huobi Token',
            slug: 'huobi-token'
        },
        'ela-elastos': {
            id: 'ela-elastos',
            id_cg: 'elastos',
            symbol: 'ELA',
            symbol_cg: 'ela',
            name: 'Elastos',
            name_cg: 'Elastos',
            slug: 'elastos'
        },
        'blz-bluzelle': {
            id: 'blz-bluzelle',
            id_cg: 'bluzelle',
            symbol: 'BLZ',
            symbol_cg: 'blz',
            name: 'Bluzelle',
            name_cg: 'Bluzelle',
            slug: 'bluzelle'
        },
        'ing-iungo': {
            id: 'ing-iungo',
            id_cg: 'iungo',
            symbol: 'ING',
            symbol_cg: 'ing',
            name: 'Iungo',
            name_cg: 'Iungo',
            slug: 'iungo'
        },
        'pareto-pareto-network': {
            id: 'pareto-pareto-network',
            id_cg: 'pareto-network',
            symbol: 'PARETO',
            symbol_cg: 'pareto',
            name: 'PARETO Rewards',
            name_cg: 'Pareto Network',
            slug: 'pareto-rewards'
        },
        'jnt-jibrel-network': {
            id: 'jnt-jibrel-network',
            id_cg: 'jibrel',
            symbol: 'JNT',
            symbol_cg: 'jnt',
            name: 'Jibrel Network',
            name_cg: 'Jibrel Network',
            slug: 'jibrel-network'
        },
        'stk-stk': {
            id: 'stk-stk',
            id_cg: 'stk',
            symbol: 'STK',
            symbol_cg: 'stk',
            name: 'STK',
            name_cg: 'STK',
            slug: 'stk'
        },
        'mtn-medicalchain': {
            id: 'mtn-medicalchain',
            id_cg: 'medicalchain',
            symbol: 'MTN',
            symbol_cg: 'mtn',
            name: 'Medicalchain',
            name_cg: 'Medicalchain',
            slug: 'medical-chain'
        },
        'tky-thekey': {
            id: 'tky-thekey',
            id_cg: 'thekey',
            symbol: 'TKY',
            symbol_cg: 'tky',
            name: 'THEKEY',
            name_cg: 'THEKEY',
            slug: 'thekey'
        },
        'zla-zilla': {
            id: 'zla-zilla',
            id_cg: 'zilla',
            symbol: 'ZLA',
            symbol_cg: 'zla',
            name: 'Zilla',
            name_cg: 'Zilla',
            slug: 'zilla'
        },
        'wpr-wepower': {
            id: 'wpr-wepower',
            id_cg: 'wepower',
            symbol: 'WPR',
            symbol_cg: 'wpr',
            name: 'WePower',
            name_cg: 'WePower',
            slug: 'wepower'
        },
        'chsb-swissborg': {
            id: 'chsb-swissborg',
            id_cg: 'swissborg',
            symbol: 'CHSB',
            symbol_cg: 'chsb',
            name: 'SwissBorg',
            name_cg: 'SwissBorg',
            slug: 'swissborg'
        },
        'adb-adbank': {
            id: 'adb-adbank',
            id_cg: 'adbank',
            symbol: 'ADB',
            symbol_cg: 'adb',
            name: 'adbank',
            name_cg: 'adbank',
            slug: 'adbank'
        },
        'poly-polymath': {
            id: 'poly-polymath',
            id_cg: 'polymath-network',
            symbol: 'POLY',
            symbol_cg: 'poly',
            name: 'Polymath',
            name_cg: 'Polymath Network',
            slug: 'polymath-network'
        },
        'drpu-dcorp-utility': {
            id: 'drpu-dcorp-utility',
            id_cg: 'drp-utility',
            symbol: 'DRPU',
            symbol_cg: 'drpu',
            name: 'DCORP Utility',
            name_cg: 'DRP Utility',
            slug: 'drp-utility'
        },
        'dxt-datawallet': {
            id: 'dxt-datawallet',
            id_cg: 'datawallet',
            symbol: 'DXT',
            symbol_cg: 'dxt',
            name: 'Datawallet',
            name_cg: 'Datawallet',
            slug: 'datawallet'
        },
        'esz-ethersportz': {
            id: 'esz-ethersportz',
            id_cg: 'ethersportz',
            symbol: 'ESZ',
            symbol_cg: 'esz',
            name: 'EtherSportz',
            name_cg: 'EtherSportz',
            slug: 'ethersportz'
        },
        'swm-swarm': {
            id: 'swm-swarm',
            id_cg: 'swarm',
            symbol: 'SWM',
            symbol_cg: 'swm',
            name: 'Swarm',
            name_cg: 'Swarm Fund',
            slug: 'swarm-fund'
        },
        'dmt-dmarket': {
            id: 'dmt-dmarket',
            id_cg: 'dmarket',
            symbol: 'DMT',
            symbol_cg: 'dmt',
            name: 'DMarket',
            name_cg: 'DMarket',
            slug: 'dmarket'
        },
        'acc-acchain': {
            id: 'acc-acchain',
            id_cg: 'acchain',
            symbol: 'ACC',
            symbol_cg: 'acc',
            name: 'ACChain',
            name_cg: 'ACChain',
            slug: 'acchain'
        },
        'mlm-mktcoin': {
            id: 'mlm-mktcoin',
            id_cg: 'mktcoin',
            symbol: 'MLM',
            symbol_cg: 'mlm',
            name: 'MktCoin',
            name_cg: 'MktCoin',
            slug: 'mktcoin'
        },
        'jew-shekel': {
            id: 'jew-shekel',
            id_cg: 'shekel',
            symbol: 'JEW',
            symbol_cg: 'jew',
            name: 'Shekel',
            name_cg: 'Shekel',
            slug: 'shekel'
        },
        'mntp-goldmint': {
            id: 'mntp-goldmint',
            id_cg: 'goldmint',
            symbol: 'MNTP',
            symbol_cg: 'mntp',
            name: 'GoldMint',
            name_cg: 'Goldmint',
            slug: 'goldmint'
        },
        'ucash-universal-cash': {
            id: 'ucash-universal-cash',
            id_cg: 'ucash',
            symbol: 'UCASH',
            symbol_cg: 'ucash',
            name: 'UNIVERSAL CASH',
            name_cg: 'U.CASH',
            slug: 'ucash'
        },
        'loci-locicoin': {
            id: 'loci-locicoin',
            id_cg: 'locicoin',
            symbol: 'LOCI',
            symbol_cg: 'loci',
            name: 'LOCIcoin',
            name_cg: 'LOCIcoin',
            slug: 'locicoin'
        },
        'avh-animation-vision-cash': {
            id: 'avh-animation-vision-cash',
            id_cg: 'animation-vision-cash',
            symbol: 'AVH',
            symbol_cg: 'avh',
            name: 'Animation Vision Cash',
            name_cg: 'Animation Vision Cash',
            slug: 'animation-vision-cash'
        },
        'jc-jesus-coin': {
            id: 'jc-jesus-coin',
            id_cg: 'jesuscoin',
            symbol: 'JC',
            symbol_cg: 'jc',
            name: 'Jesus Coin',
            name_cg: 'Jesus Coin',
            slug: 'jesus-coin'
        },
        'sup-superior-coin': {
            id: 'sup-superior-coin',
            id_cg: 'superior-coin',
            symbol: 'SUP',
            symbol_cg: 'sup',
            name: 'Superior Coin',
            name_cg: 'Superior Coin',
            slug: 'superior-coin'
        },
        'levo-levocoin': {
            id: 'levo-levocoin',
            id_cg: 'levocoin',
            symbol: 'LEVO',
            symbol_cg: 'levo',
            name: 'Levocoin',
            name_cg: 'Levocoin',
            slug: 'levocoin'
        },
        'bio-biocoin': {
            id: 'bio-biocoin',
            id_cg: '',
            symbol: 'BIO',
            symbol_cg: '',
            name: 'BioCoin',
            name_cg: '',
            slug: 'biocoin'
        },
        'rmt-sureremit': {
            id: 'rmt-sureremit',
            id_cg: 'sureremit',
            symbol: 'RMT',
            symbol_cg: 'rmt',
            name: 'SureRemit',
            name_cg: 'SureRemit',
            slug: 'sureremit'
        },
        'fsn-fusion': {
            id: 'fsn-fusion',
            id_cg: 'fsn',
            symbol: 'FSN',
            symbol_cg: 'fsn',
            name: 'Fusion',
            name_cg: 'FUSION',
            slug: 'fusion'
        },
        'utnp-universa': {
            id: 'utnp-universa',
            id_cg: 'universa',
            symbol: 'UTNP',
            symbol_cg: 'utnp',
            name: 'Universa',
            name_cg: 'Universa',
            slug: 'universa'
        },
        'acat-alphacat': {
            id: 'acat-alphacat',
            id_cg: 'alphacat',
            symbol: 'ACAT',
            symbol_cg: 'acat',
            name: 'Alphacat',
            name_cg: 'Alphacat',
            slug: 'alphacat'
        },
        'evn-envion': {
            id: 'evn-envion',
            id_cg: 'envion',
            symbol: 'EVN',
            symbol_cg: 'evn',
            name: 'Envion',
            name_cg: 'Envion',
            slug: 'envion'
        },
        'tig-tigereum': {
            id: 'tig-tigereum',
            id_cg: 'tigereum',
            symbol: 'TIG',
            symbol_cg: 'tig',
            name: 'Tigereum',
            name_cg: 'Tigereum',
            slug: 'tigereum'
        },
        'dth-dether': {
            id: 'dth-dether',
            id_cg: '',
            symbol: 'DTH',
            symbol_cg: '',
            name: 'Dether',
            name_cg: '',
            slug: 'dether'
        },
        'nano-nano': {
            id: 'nano-nano',
            id_cg: 'nano',
            symbol: 'NANO',
            symbol_cg: 'nano',
            name: 'Nano',
            name_cg: 'Nano',
            slug: 'nano'
        },
        'w3c-w3coin': {
            id: 'w3c-w3coin',
            id_cg: 'w3coin',
            symbol: 'W3C',
            symbol_cg: 'w3c',
            name: 'W3Coin',
            name_cg: 'W3Coin',
            slug: ''
        },
        'mwat-restart-energy-mwat': {
            id: 'mwat-restart-energy-mwat',
            id_cg: 'restart-energy',
            symbol: 'MWAT',
            symbol_cg: 'mwat',
            name: 'Restart Energy MWAT',
            name_cg: 'Restart Energy',
            slug: 'restart-energy-mwat'
        },
        'ech-etherecash': {
            id: 'ech-etherecash',
            id_cg: '',
            symbol: 'ECH',
            symbol_cg: '',
            name: 'Etherecash',
            name_cg: '',
            slug: ''
        },
        'dadi-dadi': {
            id: 'dadi-dadi',
            id_cg: 'dadi',
            symbol: 'DADI',
            symbol_cg: 'dadi',
            name: 'DADI',
            name_cg: 'DADI',
            slug: 'dadi'
        },
        'ntk-neurotoken': {
            id: 'ntk-neurotoken',
            id_cg: 'neurotoken',
            symbol: 'NTK',
            symbol_cg: 'ntk',
            name: 'Neurotoken',
            name_cg: 'Neurotoken',
            slug: 'neurotoken'
        },
        'dtc-datacoin': {
            id: 'dtc-datacoin',
            id_cg: 'datacoin',
            symbol: 'DTC',
            symbol_cg: 'dtc',
            name: 'Datacoin',
            name_cg: 'Datacoin',
            slug: 'datacoin'
        },
        'xsd-soundac': {
            id: 'xsd-soundac',
            id_cg: 'muse',
            symbol: 'XSD',
            symbol_cg: 'xsd',
            name: 'SounDAC',
            name_cg: 'SounDAC',
            slug: 'bitshares-music'
        },
        'gem-gems': {
            id: 'gem-gems',
            id_cg: 'gems-2',
            symbol: 'GEM',
            symbol_cg: 'gem',
            name: 'Gems',
            name_cg: 'Gems',
            slug: ''
        },
        'lcc-litecoin-cash': {
            id: 'lcc-litecoin-cash',
            id_cg: 'litecoin-cash',
            symbol: 'LCC',
            symbol_cg: 'lcc',
            name: 'Litecoin Cash',
            name_cg: 'Litecoin Cash',
            slug: 'litecoin-cash'
        },
        'ren-republic-protocol': {
            id: 'ren-republic-protocol',
            id_cg: 'republic-protocol',
            symbol: 'REN',
            symbol_cg: 'ren',
            name: 'Ren',
            name_cg: 'REN',
            slug: 'ren'
        },
        'poa-poa-network': {
            id: 'poa-poa-network',
            id_cg: 'poa-network',
            symbol: 'POA',
            symbol_cg: 'poa',
            name: 'POA Network',
            name_cg: 'POA Network',
            slug: 'poa-network'
        },
        'abt-arcblock': {
            id: 'abt-arcblock',
            id_cg: 'arcblock',
            symbol: 'ABT',
            symbol_cg: 'abt',
            name: 'Arcblock',
            name_cg: 'Arcblock',
            slug: 'arcblock'
        },
        'cs-credits': {
            id: 'cs-credits',
            id_cg: 'credits',
            symbol: 'CS',
            symbol_cg: 'cs',
            name: 'Credits',
            name_cg: 'CREDITS',
            slug: 'credits'
        },
        'rfr-refereum': {
            id: 'rfr-refereum',
            id_cg: 'refereum',
            symbol: 'RFR',
            symbol_cg: 'rfr',
            name: 'Refereum',
            name_cg: 'Refereum',
            slug: 'refereum'
        },
        'cdt-blox': {
            id: 'cdt-blox',
            id_cg: 'blox',
            symbol: 'CDT',
            symbol_cg: 'cdt',
            name: 'Blox',
            name_cg: 'Blox',
            slug: 'blox'
        },
        'rem-remme': {
            id: 'rem-remme',
            id_cg: 'remme',
            symbol: 'REM',
            symbol_cg: 'rem',
            name: 'Remme',
            name_cg: 'REMME',
            slug: 'remme'
        },
        'xnk-ink-protocol': {
            id: 'xnk-ink-protocol',
            id_cg: 'ink-protocol',
            symbol: 'XNK',
            symbol_cg: 'xnk',
            name: 'Ink Protocol',
            name_cg: 'Ink Protocol',
            slug: 'ink-protocol'
        },
        'bez-bezop': {
            id: 'bez-bezop',
            id_cg: 'bezop',
            symbol: 'BEZ',
            symbol_cg: 'bez',
            name: 'Bezop',
            name_cg: 'Bezop',
            slug: 'bezop'
        },
        'ont-ontology': {
            id: 'ont-ontology',
            id_cg: 'ontology',
            symbol: 'ONT',
            symbol_cg: 'ont',
            name: 'Ontology',
            name_cg: 'Ontology',
            slug: 'ontology'
        },
        'ncash-nucleus-vision': {
            id: 'ncash-nucleus-vision',
            id_cg: 'nucleus-vision',
            symbol: 'NCASH',
            symbol_cg: 'ncash',
            name: 'Nucleus Vision',
            name_cg: 'Nucleus Vision',
            slug: 'nucleus-vision'
        },
        'ledu-education-ecosystem': {
            id: 'ledu-education-ecosystem',
            id_cg: 'education-ecosystem',
            symbol: 'LEDU',
            symbol_cg: 'ledu',
            name: 'Education Ecosystem',
            name_cg: 'Education Ecosystem',
            slug: 'education-ecosystem'
        },
        'tusd-trueusd': {
            id: 'tusd-trueusd',
            id_cg: 'true-usd',
            symbol: 'TUSD',
            symbol_cg: 'tusd',
            name: 'TrueUSD',
            name_cg: 'TrueUSD',
            slug: 'trueusd'
        },
        'auto-cube': {
            id: 'auto-cube',
            id_cg: 'cube',
            symbol: 'AUTO',
            symbol_cg: 'auto',
            name: 'Cube',
            name_cg: 'Cube',
            slug: 'cube'
        },
        'iht-iht-real-estate-protocol': {
            id: 'iht-iht-real-estate-protocol',
            id_cg: 'iht-real-estate-protocol',
            symbol: 'IHT',
            symbol_cg: 'iht',
            name: 'IHT Real Estate Protocol',
            name_cg: 'IHT Real Estate Protocol',
            slug: 'iht-real-estate-protocol'
        },
        'datx-datx': {
            id: 'datx-datx',
            id_cg: 'datx',
            symbol: 'DATX',
            symbol_cg: 'datx',
            name: 'DATx',
            name_cg: 'DATx',
            slug: 'datx'
        },
        'lym-lympo': {
            id: 'lym-lympo',
            id_cg: 'lympo',
            symbol: 'LYM',
            symbol_cg: 'lym',
            name: 'Lympo',
            name_cg: 'Lympo',
            slug: 'lympo'
        },
        'bee-bee-token': {
            id: 'bee-bee-token',
            id_cg: 'bee-token',
            symbol: 'BEE',
            symbol_cg: 'bee',
            name: 'Bee Token',
            name_cg: 'Bee Token',
            slug: 'bee-token'
        },
        'tdx-tidex-token': {
            id: 'tdx-tidex-token',
            id_cg: 'tidex-token',
            symbol: 'TDX',
            symbol_cg: 'tdx',
            name: 'Tidex Token',
            name_cg: 'Tidex Token',
            slug: 'tidex-token'
        },
        'instar-insights-network': {
            id: 'instar-insights-network',
            id_cg: 'insights-network',
            symbol: 'INSTAR',
            symbol_cg: 'instar',
            name: 'Insights Network',
            name_cg: 'INSTAR',
            slug: 'insights-network'
        },
        'hqx-hoqu': {
            id: 'hqx-hoqu',
            id_cg: 'hoqu',
            symbol: 'HQX',
            symbol_cg: 'hqx',
            name: 'HOQU',
            name_cg: 'HOQU',
            slug: 'hoqu'
        },
        'exy-experty': {
            id: 'exy-experty',
            id_cg: 'experty',
            symbol: 'EXY',
            symbol_cg: 'exy',
            name: 'Experty',
            name_cg: 'Experty',
            slug: 'experty'
        },
        'stac-startercoin': {
            id: 'stac-startercoin',
            id_cg: '',
            symbol: 'STAC',
            symbol_cg: '',
            name: 'StarterCoin',
            name_cg: '',
            slug: 'startercoin'
        },
        'seth-sether': {
            id: 'seth-sether',
            id_cg: 'sether',
            symbol: 'SETH',
            symbol_cg: 'seth',
            name: 'Sether',
            name_cg: 'Sether',
            slug: 'sether'
        },
        'cpy-copytrack': {
            id: 'cpy-copytrack',
            id_cg: 'copytrack',
            symbol: 'CPY',
            symbol_cg: 'cpy',
            name: 'COPYTRACK',
            name_cg: 'COPYTRACK',
            slug: 'copytrack'
        },
        'j8t-jet8': {
            id: 'j8t-jet8',
            id_cg: 'jet8',
            symbol: 'J8T',
            symbol_cg: 'j8t',
            name: 'JET8',
            name_cg: 'JET8',
            slug: 'jet8'
        },
        'tomo-tomochain': {
            id: 'tomo-tomochain',
            id_cg: 'tomochain',
            symbol: 'TOMO',
            symbol_cg: 'tomo',
            name: 'TomoChain',
            name_cg: 'TomoChain',
            slug: 'tomochain'
        },
        'chp-coinpoker': {
            id: 'chp-coinpoker',
            id_cg: 'coinpoker',
            symbol: 'CHP',
            symbol_cg: 'chp',
            name: 'CoinPoker',
            name_cg: 'CoinPoker',
            slug: 'coinpoker'
        },
        'grft-graft': {
            id: 'grft-graft',
            id_cg: 'graft-blockchain',
            symbol: 'GRFT',
            symbol_cg: 'grft',
            name: 'Graft',
            name_cg: 'Graft Blockchain',
            slug: 'graft'
        },
        'elec-electrifyasia': {
            id: 'elec-electrifyasia',
            id_cg: 'electrify-asia',
            symbol: 'ELEC',
            symbol_cg: 'elec',
            name: 'Electrify.Asia',
            name_cg: 'Electrify.Asia',
            slug: 'electrifyasia'
        },
        'bax-babb': {
            id: 'bax-babb',
            id_cg: 'babb',
            symbol: 'BAX',
            symbol_cg: 'bax',
            name: 'BABB',
            name_cg: 'BABB',
            slug: 'babb'
        },
        'btcp-bitcoin-private': {
            id: 'btcp-bitcoin-private',
            id_cg: 'bitcoin-private',
            symbol: 'BTCP',
            symbol_cg: 'btcp',
            name: 'Bitcoin Private',
            name_cg: 'Bitcoin Private',
            slug: 'bitcoin-private'
        },
        'rvn-ravencoin': {
            id: 'rvn-ravencoin',
            id_cg: 'ravencoin',
            symbol: 'RVN',
            symbol_cg: 'rvn',
            name: 'Ravencoin',
            name_cg: 'Ravencoin',
            slug: 'ravencoin'
        },
        'ten-tokenomy': {
            id: 'ten-tokenomy',
            id_cg: 'tokenomy',
            symbol: 'TEN',
            symbol_cg: 'ten',
            name: 'Tokenomy',
            name_cg: 'Tokenomy',
            slug: 'tokenomy'
        },
        'tfd-te-food': {
            id: 'tfd-te-food',
            id_cg: 'te-food',
            symbol: 'TFD',
            symbol_cg: 'tfd',
            name: 'TE-FOOD',
            name_cg: 'TE-FOOD',
            slug: 'te-food'
        },
        'ship-shipchain': {
            id: 'ship-shipchain',
            id_cg: 'shipchain',
            symbol: 'SHIP',
            symbol_cg: 'ship',
            name: 'ShipChain',
            name_cg: 'ShipChain',
            slug: 'shipchain'
        },
        'occ-octoin-coin': {
            id: 'occ-octoin-coin',
            id_cg: '',
            symbol: 'OCC',
            symbol_cg: '',
            name: 'Octoin Coin',
            name_cg: '',
            slug: 'octoin-coin'
        },
        'ldc-leadcoin': {
            id: 'ldc-leadcoin',
            id_cg: 'leadcoin',
            symbol: 'LDC',
            symbol_cg: 'ldc',
            name: 'Leadcoin',
            name_cg: 'LeadCoin',
            slug: 'leadcoin'
        },
        'lala-lala-world': {
            id: 'lala-lala-world',
            id_cg: 'lala-world',
            symbol: 'LALA',
            symbol_cg: 'lala',
            name: 'LALA World',
            name_cg: 'LALA World',
            slug: 'lala-world'
        },
        'deb-debitum': {
            id: 'deb-debitum',
            id_cg: 'debitum-network',
            symbol: 'DEB',
            symbol_cg: 'deb',
            name: 'Debitum',
            name_cg: 'Debitum Network',
            slug: 'debitum-network'
        },
        'cennz-centrality': {
            id: 'cennz-centrality',
            id_cg: 'centrality',
            symbol: 'CENNZ',
            symbol_cg: 'cennz',
            name: 'Centrality',
            name_cg: 'Centrality',
            slug: 'centrality'
        },
        'hav-havven': {
            id: 'hav-havven',
            id_cg: 'havven',
            symbol: 'SNX',
            symbol_cg: 'snx',
            name: 'Synthetix Network Token',
            name_cg: 'Synthetix Network Token',
            slug: 'synthetix-network-token'
        },
        'stq-storiqa': {
            id: 'stq-storiqa',
            id_cg: 'storiqa',
            symbol: 'STQ',
            symbol_cg: 'stq',
            name: 'Storiqa',
            name_cg: 'Storiqa',
            slug: 'storiqa'
        },
        'loom-loom-network': {
            id: 'loom-loom-network',
            id_cg: 'loom-network',
            symbol: 'LOOM',
            symbol_cg: 'loom',
            name: 'Loom Network',
            name_cg: 'Loom Network',
            slug: 'loom-network'
        },
        'getx-guaranteed-ethurance-token-extra': {
            id: 'getx-guaranteed-ethurance-token-extra',
            id_cg: 'guaranteed-ethurance-token-extra',
            symbol: 'GETX',
            symbol_cg: 'getx',
            name: 'Guaranteed Ethurance Token Extra',
            name_cg: 'Guaranteed Ethurance Token Extra',
            slug: 'guaranteed-ethurance-token-extra'
        },
        'fluz-fluz-fluz': {
            id: 'fluz-fluz-fluz',
            id_cg: 'fluzfluz',
            symbol: 'FLUZ',
            symbol_cg: 'fluz',
            name: 'Fluz Fluz',
            name_cg: 'FluzFluz',
            slug: ''
        },
        'drop-dropil': {
            id: 'drop-dropil',
            id_cg: 'dropil',
            symbol: 'DROP',
            symbol_cg: 'drop',
            name: 'Dropil',
            name_cg: 'Dropil',
            slug: 'dropil'
        },
        'banca-banca': {
            id: 'banca-banca',
            id_cg: 'banca',
            symbol: 'BANCA',
            symbol_cg: 'banca',
            name: 'Banca',
            name_cg: 'Banca',
            slug: 'banca'
        },
        'drg-dragon-coins': {
            id: 'drg-dragon-coins',
            id_cg: 'dragon-coin',
            symbol: 'DRG',
            symbol_cg: 'drg',
            name: 'Dragon Coins',
            name_cg: 'Dragon Coin',
            slug: 'dragon-coins'
        },
        'nanj-nanjcoin': {
            id: 'nanj-nanjcoin',
            id_cg: 'nanjcoin',
            symbol: 'NANJ',
            symbol_cg: 'nanj',
            name: 'NANJCOIN',
            name_cg: 'NANJCOIN',
            slug: 'nanjcoin'
        },
        'up-uptoken': {
            id: 'up-uptoken',
            id_cg: 'uptoken',
            symbol: 'UP',
            symbol_cg: 'up',
            name: 'UpToken',
            name_cg: 'UpToken',
            slug: 'uptoken'
        },
        'bbn-banyan-network': {
            id: 'bbn-banyan-network',
            id_cg: 'banyan-network',
            symbol: 'BBN',
            symbol_cg: 'bbn',
            name: 'Banyan Network',
            name_cg: 'Banyan Network',
            slug: 'banyan-network'
        },
        'noah-noah-coin': {
            id: 'noah-noah-coin',
            id_cg: 'noah-coin',
            symbol: 'NOAH',
            symbol_cg: 'noah',
            name: 'Noah Coin',
            name_cg: 'Noah Coin',
            slug: 'noah-coin'
        },
        'lgo-lgo-exchange': {
            id: 'lgo-lgo-exchange',
            id_cg: 'legolas-exchange',
            symbol: 'LGO',
            symbol_cg: 'lgo',
            name: 'LGO Exchange',
            name_cg: 'Legolas Exchange',
            slug: ''
        },
        '1wo-1world': {
            id: '1wo-1world',
            id_cg: '1world',
            symbol: '1WO',
            symbol_cg: '1wo',
            name: '1World',
            name_cg: '1World',
            slug: '1world'
        },
        'latx-latiumx': {
            id: 'latx-latiumx',
            id_cg: 'latiumx',
            symbol: 'LATX',
            symbol_cg: 'latx',
            name: 'LatiumX',
            name_cg: 'LatiumX',
            slug: 'latiumx'
        },
        'npx-napoleonx': {
            id: 'npx-napoleonx',
            id_cg: 'napoleon-x',
            symbol: 'NPX',
            symbol_cg: 'npx',
            name: 'NaPoleonX',
            name_cg: 'Napoleon X',
            slug: 'napoleonx'
        },
        'bitg-bitcoin-green': {
            id: 'bitg-bitcoin-green',
            id_cg: 'bitcoin-green',
            symbol: 'BITG',
            symbol_cg: 'bitg',
            name: 'BitGreen',
            name_cg: 'BitGreen',
            slug: 'bitgreen'
        },
        'medic-mediccoin': {
            id: 'medic-mediccoin',
            id_cg: 'medic-coin',
            symbol: 'MEDIC',
            symbol_cg: 'medic',
            name: 'MedicCoin',
            name_cg: 'Medic Coin',
            slug: 'mediccoin'
        },
        'bft-bnktothefuture': {
            id: 'bft-bnktothefuture',
            id_cg: 'bnktothefuture',
            symbol: 'BFT',
            symbol_cg: 'bft',
            name: 'BnkToTheFuture',
            name_cg: 'BnkToTheFuture',
            slug: 'bnktothefuture'
        },
        'slm-slimcoin': {
            id: 'slm-slimcoin',
            id_cg: 'slimcoin',
            symbol: 'SLM',
            symbol_cg: 'slm',
            name: 'Slimcoin',
            name_cg: 'Slimcoin',
            slug: ''
        },
        'wan-wanchain': {
            id: 'wan-wanchain',
            id_cg: 'wanchain',
            symbol: 'WAN',
            symbol_cg: 'wan',
            name: 'Wanchain',
            name_cg: 'Wanchain',
            slug: 'wanchain'
        },
        'amlt-amlt': {
            id: 'amlt-amlt',
            id_cg: 'coinfirm-amlt',
            symbol: 'AMLT',
            symbol_cg: 'amlt',
            name: 'AMLT',
            name_cg: 'Coinfirm AMLT',
            slug: 'amlt'
        },
        'mith-mithril': {
            id: 'mith-mithril',
            id_cg: 'mithril',
            symbol: 'MITH',
            symbol_cg: 'mith',
            name: 'Mithril',
            name_cg: 'Mithril',
            slug: 'mithril'
        },
        'lst-lendroid-support-token': {
            id: 'lst-lendroid-support-token',
            id_cg: 'lendroid-support-token',
            symbol: 'LST',
            symbol_cg: 'lst',
            name: 'Lendroid Support Token',
            name_cg: 'Lendroid Support Token',
            slug: 'lendroid-support-token'
        },
        'pcl-peculium': {
            id: 'pcl-peculium',
            id_cg: 'peculium',
            symbol: 'PCL',
            symbol_cg: 'pcl',
            name: 'Peculium',
            name_cg: 'Peculium',
            slug: 'peculium'
        },
        'sig-spectiv': {
            id: 'sig-spectiv',
            id_cg: 'spectiv',
            symbol: 'SIG',
            symbol_cg: 'sigs',
            name: 'Spectiv',
            name_cg: 'Spectiv',
            slug: 'signal-token'
        },
        'rntb-bitrent': {
            id: 'rntb-bitrent',
            id_cg: 'bitrent',
            symbol: 'RNTB',
            symbol_cg: 'rntb',
            name: 'BitRent',
            name_cg: 'BitRent',
            slug: 'bitrent'
        },
        'xbp-blitzpredict': {
            id: 'xbp-blitzpredict',
            id_cg: 'blitzpredict',
            symbol: 'XBP',
            symbol_cg: 'xbp',
            name: 'BlitzPredict',
            name_cg: 'BlitzPredict',
            slug: 'blitzpredict'
        },
        'lnc-blocklancer': {
            id: 'lnc-blocklancer',
            id_cg: 'blocklancer',
            symbol: 'LNC',
            symbol_cg: 'lnc',
            name: 'Blocklancer',
            name_cg: 'Blocklancer',
            slug: 'blocklancer'
        },
        'spd-stipend': {
            id: 'spd-stipend',
            id_cg: 'stipend',
            symbol: 'SPD',
            symbol_cg: 'spd',
            name: 'Stipend',
            name_cg: 'Stipend',
            slug: 'stipend'
        },
        'ipsx-ip-exchange': {
            id: 'ipsx-ip-exchange',
            id_cg: 'ip-sharing-exchange',
            symbol: 'IPSX',
            symbol_cg: 'ipsx',
            name: 'IP Exchange',
            name_cg: 'IP Exchange',
            slug: 'ip-exchange'
        },
        'bstn-bitstation': {
            id: 'bstn-bitstation',
            id_cg: 'bitstation',
            symbol: 'BSTN',
            symbol_cg: 'bstn',
            name: 'BitStation',
            name_cg: 'BitStation',
            slug: 'bitstation'
        },
        'scc-stockchain': {
            id: 'scc-stockchain',
            id_cg: 'stockchain',
            symbol: 'SCC',
            symbol_cg: 'scc',
            name: 'StockChain',
            name_cg: 'StockChain',
            slug: 'stockchain'
        },
        'emb-embercoin': {
            id: 'emb-embercoin',
            id_cg: 'embercoin',
            symbol: 'EMB',
            symbol_cg: 'emb',
            name: 'EmberCoin',
            name_cg: 'EmberCoin',
            slug: 'embercoin'
        },
        'itz-interzone': {
            id: 'itz-interzone',
            id_cg: 'interzone',
            symbol: 'ITZ',
            symbol_cg: 'itz',
            name: 'Interzone',
            name_cg: 'Interzone',
            slug: 'interzone'
        },
        'sen-consensus': {
            id: 'sen-consensus',
            id_cg: 'consensus',
            symbol: 'SEN',
            symbol_cg: 'sen',
            name: 'Consensus',
            name_cg: 'Consensus',
            slug: 'consensus'
        },
        'swth-switcheo': {
            id: 'swth-switcheo',
            id_cg: 'switcheo',
            symbol: 'SWTH',
            symbol_cg: 'swth',
            name: 'Switcheo',
            name_cg: 'Switcheo',
            slug: 'switcheo'
        },
        'xclr-clearcoin': {
            id: 'xclr-clearcoin',
            id_cg: 'clearcoin',
            symbol: 'XCLR',
            symbol_cg: 'xclr',
            name: 'ClearCoin',
            name_cg: 'ClearCoin',
            slug: 'clearcoin'
        },
        'senc-sentinel-chain': {
            id: 'senc-sentinel-chain',
            id_cg: 'sentinel-chain',
            symbol: 'SENC',
            symbol_cg: 'senc',
            name: 'Sentinel Chain',
            name_cg: 'Sentinel Chain',
            slug: 'sentinel-chain'
        },
        'vit-vice-industry-token': {
            id: 'vit-vice-industry-token',
            id_cg: 'vice-industry-token',
            symbol: 'VIT',
            symbol_cg: 'vit',
            name: 'VIT',
            name_cg: 'Vice Industry Token',
            slug: 'vision-industry-token'
        },
        'fdz-friendz': {
            id: 'fdz-friendz',
            id_cg: 'friendz',
            symbol: 'FDZ',
            symbol_cg: 'fdz',
            name: 'Friendz',
            name_cg: 'Friendz',
            slug: 'friends'
        },
        'tpay-tokenpay': {
            id: 'tpay-tokenpay',
            id_cg: 'tokenpay',
            symbol: 'TPAY',
            symbol_cg: 'tpay',
            name: 'TokenPay',
            name_cg: 'TokenPay',
            slug: 'tokenpay'
        },
        'berry-rentberry': {
            id: 'berry-rentberry',
            id_cg: 'rentberry',
            symbol: 'BERRY',
            symbol_cg: 'berry',
            name: 'Rentberry',
            name_cg: 'Rentberry',
            slug: 'rentberry'
        },
        'xtl-stellite': {
            id: 'xtl-stellite',
            id_cg: 'stellite',
            symbol: 'XTC',
            symbol_cg: 'xtc',
            name: 'Torque',
            name_cg: 'Torque',
            slug: ''
        },
        'nct-polyswarm': {
            id: 'nct-polyswarm',
            id_cg: 'polyswarm',
            symbol: 'NCT',
            symbol_cg: 'nct',
            name: 'PolySwarm',
            name_cg: 'PolySwarm',
            slug: 'polyswarm'
        },
        'ode-odem': {
            id: 'ode-odem',
            id_cg: 'odem',
            symbol: 'ODE',
            symbol_cg: 'ode',
            name: 'ODEM',
            name_cg: 'ODEM',
            slug: 'odem'
        },
        'ckusd-ck-usd': {
            id: 'ckusd-ck-usd',
            id_cg: '',
            symbol: 'CKUSD',
            symbol_cg: '',
            name: 'CK USD',
            name_cg: '',
            slug: 'ckusd'
        },
        'itt-intelligent-trading-foundation': {
            id: 'itt-intelligent-trading-foundation',
            id_cg: 'intelligent-trading-tech',
            symbol: 'ITT',
            symbol_cg: 'itt',
            name: 'Intelligent Trading Foundation',
            name_cg: 'Intelligent Trading Foundation',
            slug: 'intelligent-trading-foundation'
        },
        'xsn-stakenet': {
            id: 'xsn-stakenet',
            id_cg: 'stakenet',
            symbol: 'XSN',
            symbol_cg: 'xsn',
            name: 'Stakenet',
            name_cg: 'Stakenet',
            slug: 'stakenet'
        },
        'xdce-xinfin-network': {
            id: 'xdce-xinfin-network',
            id_cg: 'xdce-crowd-sale',
            symbol: 'XDCE',
            symbol_cg: 'xdce',
            name: 'XinFin Network',
            name_cg: 'XinFin',
            slug: 'xinfin-network'
        },
        'tds-tokendesk': {
            id: 'tds-tokendesk',
            id_cg: 'tokendesk',
            symbol: 'TDS',
            symbol_cg: 'tds',
            name: 'TokenDesk',
            name_cg: 'TokenDesk',
            slug: 'tokendesk'
        },
        'cpx-apex': {
            id: 'cpx-apex',
            id_cg: 'apex',
            symbol: 'CPX',
            symbol_cg: 'cpx',
            name: 'Apex',
            name_cg: 'Apex Network',
            slug: 'apex'
        },
        'ctxc-cortex': {
            id: 'ctxc-cortex',
            id_cg: 'cortex',
            symbol: 'CTXC',
            symbol_cg: 'ctxc',
            name: 'Cortex',
            name_cg: 'Cortex',
            slug: 'cortex'
        },
        'bsm-bitsum': {
            id: 'bsm-bitsum',
            id_cg: 'bitsum',
            symbol: 'BSM',
            symbol_cg: 'bsm',
            name: 'Bitsum',
            name_cg: 'Bitsum',
            slug: 'bitsum'
        },
        'uuu-u-network': {
            id: 'uuu-u-network',
            id_cg: 'u-network',
            symbol: 'UUU',
            symbol_cg: 'uuu',
            name: 'U Network',
            name_cg: 'U Network',
            slug: 'u-network'
        },
        'adh-adhive': {
            id: 'adh-adhive',
            id_cg: 'adhive',
            symbol: 'ADH',
            symbol_cg: 'adh',
            name: 'AdHive',
            name_cg: 'AdHive',
            slug: 'adhive'
        },
        'dev-deviantcoin': {
            id: 'dev-deviantcoin',
            id_cg: 'deviantcoin',
            symbol: 'DEV',
            symbol_cg: 'dev',
            name: 'DeviantCoin',
            name_cg: 'Deviant Coin',
            slug: 'deviantcoin'
        },
        'eosdac-eosdac': {
            id: 'eosdac-eosdac',
            id_cg: 'eosdac',
            symbol: 'EOSDAC',
            symbol_cg: 'eosdac',
            name: 'eosDAC',
            name_cg: 'eosDAC',
            slug: 'eosdac'
        },
        'cbt-commerceblock': {
            id: 'cbt-commerceblock',
            id_cg: 'commerceblock-token',
            symbol: 'CBT',
            symbol_cg: 'cbt',
            name: 'CommerceBlock',
            name_cg: 'CommerceBlock Token',
            slug: 'commerceblock'
        },
        'sent-sentinel': {
            id: 'sent-sentinel',
            id_cg: 'sentinel-group',
            symbol: 'SENT',
            symbol_cg: 'sent',
            name: 'Sentinel',
            name_cg: 'Sentinel',
            slug: 'sentinel'
        },
        'cvt-cybervein': {
            id: 'cvt-cybervein',
            id_cg: 'cybervein',
            symbol: 'CVT',
            symbol_cg: 'cvt',
            name: 'CyberVein',
            name_cg: 'CyberVeinToken',
            slug: 'cybervein'
        },
        'rex-imbrex': {
            id: 'rex-imbrex',
            id_cg: 'rex',
            symbol: 'REX',
            symbol_cg: 'rex',
            name: 'imbrex',
            name_cg: 'Imbrex',
            slug: 'imbrex'
        },
        'prn-ironcoin': {
            id: 'prn-ironcoin',
            id_cg: 'protean',
            symbol: 'PRN',
            symbol_cg: 'prn',
            name: 'IronCoin',
            name_cg: 'Proteania',
            slug: ''
        },
        'auc-auctus': {
            id: 'auc-auctus',
            id_cg: 'auctus',
            symbol: 'AUC',
            symbol_cg: 'auc',
            name: 'Auctus',
            name_cg: 'Auctus',
            slug: 'auctus'
        },
        'bbi-belugapay': {
            id: 'bbi-belugapay',
            id_cg: 'belugapay',
            symbol: 'BBI',
            symbol_cg: 'bbi',
            name: 'BelugaPay',
            name_cg: 'BelugaPay',
            slug: ''
        },
        'dig-dignity': {
            id: 'dig-dignity',
            id_cg: 'dignity',
            symbol: 'DIG',
            symbol_cg: 'dig',
            name: 'Dignity',
            name_cg: 'Dignity',
            slug: 'dignity'
        },
        'cvh-curriculum-vitae': {
            id: 'cvh-curriculum-vitae',
            id_cg: 'curriculum-vitae',
            symbol: 'CVH',
            symbol_cg: 'cvh',
            name: 'Curriculum Vitae',
            name_cg: 'Curriculum Vitae',
            slug: ''
        },
        'brm-brahmaos': {
            id: 'brm-brahmaos',
            id_cg: 'brahmaos',
            symbol: 'BRM',
            symbol_cg: 'brm',
            name: 'BrahmaOS',
            name_cg: 'BrahmaOS',
            slug: ''
        },
        'mfg-syncfab': {
            id: 'mfg-syncfab',
            id_cg: 'syncfab',
            symbol: 'MFG',
            symbol_cg: 'mfg',
            name: 'SyncFab',
            name_cg: 'SyncFab',
            slug: 'syncfab'
        },
        'xmc-monero-classic': {
            id: 'xmc-monero-classic',
            id_cg: 'monero-classic-xmc',
            symbol: 'XMC',
            symbol_cg: 'xmc',
            name: 'Monero Classic',
            name_cg: 'Monero-Classic',
            slug: 'monero-classic'
        },
        'dan-daneel': {
            id: 'dan-daneel',
            id_cg: 'daneel',
            symbol: 'DAN',
            symbol_cg: 'dan',
            name: 'Daneel',
            name_cg: 'Daneel',
            slug: 'daneel'
        },
        'dero-dero': {
            id: 'dero-dero',
            id_cg: 'dero',
            symbol: 'DERO',
            symbol_cg: 'dero',
            name: 'Dero',
            name_cg: 'Dero',
            slug: 'dero'
        },
        'mrk-markspace': {
            id: 'mrk-markspace',
            id_cg: 'mark-space',
            symbol: 'MRK',
            symbol_cg: 'mrk',
            name: 'MARK.SPACE',
            name_cg: 'MARK.SPACE',
            slug: 'mark-space'
        },
        'ftx-fintrux-network': {
            id: 'ftx-fintrux-network',
            id_cg: 'fintrux',
            symbol: 'FTX',
            symbol_cg: 'ftx',
            name: 'FintruX Network',
            name_cg: 'FintruX',
            slug: 'fintrux-network'
        },
        'adi-aditus': {
            id: 'adi-aditus',
            id_cg: 'aditus',
            symbol: 'ADI',
            symbol_cg: 'adi',
            name: 'Aditus',
            name_cg: 'Aditus',
            slug: 'aditus'
        },
        'crc-crycash': {
            id: 'crc-crycash',
            id_cg: 'crycash',
            symbol: 'CRC',
            symbol_cg: 'crc',
            name: 'CryCash',
            name_cg: 'CRYCASH',
            slug: 'crycash'
        },
        'xhv-haven-protocol': {
            id: 'xhv-haven-protocol',
            id_cg: 'haven',
            symbol: 'XHV',
            symbol_cg: 'xhv',
            name: 'Haven Protocol',
            name_cg: 'Haven',
            slug: 'haven-protocol'
        },
        'efx-effectai': {
            id: 'efx-effectai',
            id_cg: 'effect-ai',
            symbol: 'EFX',
            symbol_cg: 'efx',
            name: 'Effect.AI',
            name_cg: 'Effect.AI',
            slug: 'effect-ai'
        },
        'phi-phi-token': {
            id: 'phi-phi-token',
            id_cg: 'phi-token',
            symbol: 'PHI',
            symbol_cg: 'phi',
            name: 'PHI Token',
            name_cg: 'PHI TOKEN',
            slug: 'phi-token'
        },
        'srcoin-srcoin': {
            id: 'srcoin-srcoin',
            id_cg: 'srcoin',
            symbol: 'SRCOIN',
            symbol_cg: 'srcoin',
            name: 'SRCOIN',
            name_cg: 'SRCoin',
            slug: 'srcoin'
        },
        'lnc-linker-coin': {
            id: 'lnc-linker-coin',
            id_cg: 'linker-coin',
            symbol: 'LNC',
            symbol_cg: 'lnc',
            name: 'Linker Coin',
            name_cg: 'Linker Coin',
            slug: ''
        },
        'dock-dock': {
            id: 'dock-dock',
            id_cg: 'dock',
            symbol: 'DOCK',
            symbol_cg: 'dock',
            name: 'Dock',
            name_cg: 'Dock',
            slug: 'dock'
        },
        'msr-masari': {
            id: 'msr-masari',
            id_cg: 'masari',
            symbol: 'MSR',
            symbol_cg: 'msr',
            name: 'Masari',
            name_cg: 'Masari',
            slug: 'masari'
        },
        'crop-cropcoin': {
            id: 'crop-cropcoin',
            id_cg: '',
            symbol: 'CROP',
            symbol_cg: '',
            name: 'Cropcoin',
            name_cg: '',
            slug: 'cropcoin'
        },
        'chx-own': {
            id: 'chx-own',
            id_cg: 'chainium',
            symbol: 'CHX',
            symbol_cg: 'chx',
            name: 'Own',
            name_cg: 'Own',
            slug: 'own'
        },
        'hbz-helbiz': {
            id: 'hbz-helbiz',
            id_cg: 'helbiz',
            symbol: 'HBZ',
            symbol_cg: 'hbz',
            name: 'HBZ coin',
            name_cg: 'HBZ',
            slug: 'hbz-coin'
        },
        'zco-zebi': {
            id: 'zco-zebi',
            id_cg: 'zebi',
            symbol: 'ZCO',
            symbol_cg: 'zco',
            name: 'Zebi',
            name_cg: 'Zebi',
            slug: 'zebi'
        },
        'trak-trakinvest': {
            id: 'trak-trakinvest',
            id_cg: 'trakinvest',
            symbol: 'TRAK',
            symbol_cg: 'trak',
            name: 'TrakInvest',
            name_cg: 'TrakInvest',
            slug: 'trakinvest'
        },
        'dml-decentralized-machine-learning': {
            id: 'dml-decentralized-machine-learning',
            id_cg: 'decentralized-machine-learning',
            symbol: 'DML',
            symbol_cg: 'dml',
            name: 'Decentralized Machine Learning',
            name_cg: 'Decentralized Machine Learning Protocol',
            slug: 'decentralized-machine-learning'
        },
        'hot-holo': {
            id: 'hot-holo',
            id_cg: 'holotoken',
            symbol: 'HOT',
            symbol_cg: 'hot',
            name: 'Holo',
            name_cg: 'Holo',
            slug: 'holo'
        },
        'xes-proxeus': {
            id: 'xes-proxeus',
            id_cg: 'proxeus',
            symbol: 'XES',
            symbol_cg: 'xes',
            name: 'Proxeus',
            name_cg: 'Proxeus',
            slug: 'proxeus'
        },
        'rblx-rublix': {
            id: 'rblx-rublix',
            id_cg: 'rublix',
            symbol: 'RBLX',
            symbol_cg: 'rblx',
            name: 'Rublix',
            name_cg: 'Rublix',
            slug: 'rublix'
        },
        'aph-aphelion': {
            id: 'aph-aphelion',
            id_cg: 'aphelion',
            symbol: 'APH',
            symbol_cg: 'aph',
            name: 'Aphelion',
            name_cg: 'Aphelion',
            slug: 'aphelion'
        },
        'btrn-biotron': {
            id: 'btrn-biotron',
            id_cg: 'biotron',
            symbol: 'BTRN',
            symbol_cg: 'btrn',
            name: 'Biotron',
            name_cg: 'Biotron',
            slug: 'biotron'
        },
        'vips-vipstar-coin': {
            id: 'vips-vipstar-coin',
            id_cg: 'vipstarcoin',
            symbol: 'VIPS',
            symbol_cg: 'vips',
            name: 'Vipstar Coin',
            name_cg: 'VIPSTARCOIN',
            slug: 'vipstar-coin'
        },
        'pnt-penta': {
            id: 'pnt-penta',
            id_cg: 'penta',
            symbol: 'PNT',
            symbol_cg: 'pnt',
            name: 'Penta',
            name_cg: 'Penta Network Token',
            slug: 'penta'
        },
        'lnd-lendingblock': {
            id: 'lnd-lendingblock',
            id_cg: 'lendingblock',
            symbol: 'LND',
            symbol_cg: 'lnd',
            name: 'Lendingblock',
            name_cg: 'Lendingblock',
            slug: 'lendingblock'
        },
        'nexo-nexo': {
            id: 'nexo-nexo',
            id_cg: 'nexo',
            symbol: 'NEXO',
            symbol_cg: 'nexo',
            name: 'Nexo',
            name_cg: 'NEXO',
            slug: 'nexo'
        },
        'dax-daex': {
            id: 'dax-daex',
            id_cg: 'daex',
            symbol: 'DAX',
            symbol_cg: 'dax',
            name: 'DAEX',
            name_cg: 'DAEX',
            slug: 'daex'
        },
        'nbai-nebula-ai': {
            id: 'nbai-nebula-ai',
            id_cg: 'nebula-ai',
            symbol: 'NBAI',
            symbol_cg: 'nbai',
            name: 'Nebula AI',
            name_cg: 'Nebula AI',
            slug: 'nebula-ai'
        },
        'lrn-loopring-neo': {
            id: 'lrn-loopring-neo',
            id_cg: 'loopring-neo',
            symbol: 'LRN',
            symbol_cg: 'lrn',
            name: 'Loopring [NEO]',
            name_cg: 'Loopring [NEO]',
            slug: 'loopring-neo'
        },
        'vme-verime': {
            id: 'vme-verime',
            id_cg: 'verime',
            symbol: 'VME',
            symbol_cg: 'vme',
            name: 'VeriME',
            name_cg: 'VeriME',
            slug: 'verime'
        },
        'hydro-hydro': {
            id: 'hydro-hydro',
            id_cg: 'hydro',
            symbol: 'HYDRO',
            symbol_cg: 'hydro',
            name: 'Hydro',
            name_cg: 'Hydro',
            slug: 'hydrogen'
        },
        'ttt-trustnote': {
            id: 'ttt-trustnote',
            id_cg: 'trustnote',
            symbol: 'TTT',
            symbol_cg: 'ttt',
            name: 'TrustNote',
            name_cg: 'TrustNote',
            slug: 'trustnote'
        },
        'ss-sharder': {
            id: 'ss-sharder',
            id_cg: 'sharder-protocol',
            symbol: 'SS',
            symbol_cg: 'ss',
            name: 'Sharder',
            name_cg: 'sharder protocol',
            slug: 'sharder'
        },
        'cel-celsius': {
            id: 'cel-celsius',
            id_cg: 'celsius-degree-token',
            symbol: 'CEL',
            symbol_cg: 'cel',
            name: 'Celsius',
            name_cg: 'Celsius Network',
            slug: 'celsius'
        },
        'betr-betterbetting': {
            id: 'betr-betterbetting',
            id_cg: 'betterbetting',
            symbol: 'BETR',
            symbol_cg: 'betr',
            name: 'BetterBetting',
            name_cg: 'BetterBetting',
            slug: 'betterbetting'
        },
        'bci-bitcoin-interest': {
            id: 'bci-bitcoin-interest',
            id_cg: 'bitcoin-interest',
            symbol: 'BCI',
            symbol_cg: 'bci',
            name: 'Bitcoin Interest',
            name_cg: 'Bitcoin Interest',
            slug: 'bitcoin-interest'
        },
        'amn-amon': {
            id: 'amn-amon',
            id_cg: 'amon',
            symbol: 'AMN',
            symbol_cg: 'amn',
            name: 'Amon',
            name_cg: 'Amon',
            slug: 'amon'
        },
        'cmct-crowd-machine': {
            id: 'cmct-crowd-machine',
            id_cg: 'crowd-machine',
            symbol: 'CMCT',
            symbol_cg: 'cmct',
            name: 'Crowd Machine',
            name_cg: 'Crowd Machine',
            slug: 'crowd-machine'
        },
        'tns-transcodium': {
            id: 'tns-transcodium',
            id_cg: 'transcodium',
            symbol: 'TNS',
            symbol_cg: 'tns',
            name: 'Transcodium',
            name_cg: 'Transcodium',
            slug: 'transcodium'
        },
        'flp-flip': {
            id: 'flp-flip',
            id_cg: '',
            symbol: 'FLP',
            symbol_cg: '',
            name: 'FLIP',
            name_cg: '',
            slug: 'flip'
        },
        'mitx-morpheus-labs': {
            id: 'mitx-morpheus-labs',
            id_cg: 'morpheus-labs',
            symbol: 'MITX',
            symbol_cg: 'mitx',
            name: 'Morpheus Labs',
            name_cg: 'Morpheus Labs',
            slug: 'morpheus-labs'
        },
        'proud-proud-money': {
            id: 'proud-proud-money',
            id_cg: 'proud-money',
            symbol: 'PROUD',
            symbol_cg: 'proud',
            name: 'PROUD Money',
            name_cg: 'Proud Money',
            slug: 'proud-money'
        },
        'nty-nexty': {
            id: 'nty-nexty',
            id_cg: 'nexty',
            symbol: 'NTY',
            symbol_cg: 'nty',
            name: 'Nexty',
            name_cg: 'Nexty',
            slug: 'nexty'
        },
        'mtc-docademic': {
            id: 'mtc-docademic',
            id_cg: 'medical-token-currency',
            symbol: 'MTC',
            symbol_cg: 'mtc',
            name: 'doc.com Token',
            name_cg: 'Docademic',
            slug: 'doc-com-token'
        },
        'key-key': {
            id: 'key-key',
            id_cg: 'key',
            symbol: 'KEY',
            symbol_cg: 'key',
            name: 'KEY',
            name_cg: 'Key',
            slug: 'key'
        },
        'mt-mytoken': {
            id: 'mt-mytoken',
            id_cg: 'mytoken',
            symbol: 'MT',
            symbol_cg: 'mt',
            name: 'MyToken',
            name_cg: 'MyToken',
            slug: 'mytoken'
        },
        'trio-tripio': {
            id: 'trio-tripio',
            id_cg: 'tripio',
            symbol: 'TRIO',
            symbol_cg: 'trio',
            name: 'Tripio',
            name_cg: 'Tripio',
            slug: 'tripio'
        },
        'ucom-united-crypto-community': {
            id: 'ucom-united-crypto-community',
            id_cg: 'kzcash',
            symbol: 'KZC',
            symbol_cg: 'kzc',
            name: 'KZ Cash',
            name_cg: 'Kzcash',
            slug: 'kz-cash'
        },
        'apr-apr-coin': {
            id: 'apr-apr-coin',
            id_cg: 'apr-coin',
            symbol: 'APR',
            symbol_cg: 'apr',
            name: 'APR Coin',
            name_cg: 'APR Coin',
            slug: 'apr-coin'
        },
        'bouts-boutspro': {
            id: 'bouts-boutspro',
            id_cg: 'boutspro',
            symbol: 'BOUTS',
            symbol_cg: 'bouts',
            name: 'BoutsPro',
            name_cg: 'BoutsPro',
            slug: 'boutspro'
        },
        'ac3-ac3': {
            id: 'ac3-ac3',
            id_cg: 'ac3',
            symbol: 'AC3',
            symbol_cg: 'ac3',
            name: 'AC3',
            name_cg: 'AC3',
            slug: 'ac3'
        },
        'cre-cybereits': {
            id: 'cre-cybereits',
            id_cg: 'cybereits',
            symbol: 'CRE',
            symbol_cg: 'cre',
            name: 'Cybereits',
            name_cg: 'Cybereits',
            slug: 'cybereits'
        },
        'pal-policypal-network': {
            id: 'pal-policypal-network',
            id_cg: 'policypal',
            symbol: 'PAL',
            symbol_cg: 'pal',
            name: 'PAL Network',
            name_cg: 'PAL Network',
            slug: 'pal-network'
        },
        'gene-parkgene': {
            id: 'gene-parkgene',
            id_cg: 'parkgene',
            symbol: 'GENE',
            symbol_cg: 'gene',
            name: 'Parkgene',
            name_cg: 'Parkgene',
            slug: 'parkgene'
        },
        'fxt-fuzex': {
            id: 'fxt-fuzex',
            id_cg: 'fuzex',
            symbol: 'FXT',
            symbol_cg: 'fxt',
            name: 'FuzeX',
            name_cg: 'FuzeX',
            slug: 'fuzex'
        },
        'skm-skrumble-network': {
            id: 'skm-skrumble-network',
            id_cg: 'skrumble-network',
            symbol: 'SKM',
            symbol_cg: 'skm',
            name: 'Skrumble Network',
            name_cg: 'Skrumble Network',
            slug: 'skrumble-network'
        },
        'gen-daostack': {
            id: 'gen-daostack',
            id_cg: 'daostack',
            symbol: 'GEN',
            symbol_cg: 'gen',
            name: 'DAOstack',
            name_cg: 'DAOstack',
            slug: 'daostack'
        },
        'frec-freyrchain': {
            id: 'frec-freyrchain',
            id_cg: 'freyrchain',
            symbol: 'FREC',
            symbol_cg: 'frec',
            name: 'Freyrchain',
            name_cg: 'Freyrchain',
            slug: 'freyrchain'
        },
        'bznt-bezant': {
            id: 'bznt-bezant',
            id_cg: 'bezant',
            symbol: 'BZNT',
            symbol_cg: 'bznt',
            name: 'Bezant',
            name_cg: 'Bezant',
            slug: 'bezant'
        },
        'oot-utrum': {
            id: 'oot-utrum',
            id_cg: 'utrum',
            symbol: 'OOT',
            symbol_cg: 'oot',
            name: 'Utrum',
            name_cg: 'Utrum',
            slug: 'utrum'
        },
        'cnn-content-neutrality-network': {
            id: 'cnn-content-neutrality-network',
            id_cg: 'cnn',
            symbol: 'CNN',
            symbol_cg: 'cnn',
            name: 'Content Neutrality Network',
            name_cg: 'Content Neutrality Network',
            slug: 'content-neutrality-network'
        },
        'edu-educoin': {
            id: 'edu-educoin',
            id_cg: 'educoin',
            symbol: 'EDU',
            symbol_cg: 'edu',
            name: 'EduCoin',
            name_cg: 'Educoin',
            slug: 'edu-coin'
        },
        'insur-insurchain': {
            id: 'insur-insurchain',
            id_cg: 'insurchain',
            symbol: 'INSUR',
            symbol_cg: 'insur',
            name: 'InsurChain',
            name_cg: 'InsurChain',
            slug: 'insurchain'
        },
        'zipt-zippie': {
            id: 'zipt-zippie',
            id_cg: 'zippie',
            symbol: 'ZIPT',
            symbol_cg: 'zipt',
            name: 'Zippie',
            name_cg: 'Zippie',
            slug: 'zippie'
        },
        'nper-nper': {
            id: 'nper-nper',
            id_cg: 'nper',
            symbol: 'NPER',
            symbol_cg: 'nper',
            name: 'NPER',
            name_cg: 'NPER',
            slug: ''
        },
        'inc-influence-chain': {
            id: 'inc-influence-chain',
            id_cg: 'influence-chain',
            symbol: 'INC',
            symbol_cg: 'inc',
            name: 'Influence Chain',
            name_cg: 'Influence Chain',
            slug: 'influence-chain'
        },
        'dgx-digix-gold-token': {
            id: 'dgx-digix-gold-token',
            id_cg: 'digix-gold',
            symbol: 'DGX',
            symbol_cg: 'dgx',
            name: 'Digix Gold Token',
            name_cg: 'Digix Gold',
            slug: 'digix-gold-token'
        },
        'skb-sakura-bloom': {
            id: 'skb-sakura-bloom',
            id_cg: 'sakura-bloom',
            symbol: 'SKB',
            symbol_cg: 'skb',
            name: 'Sakura Bloom',
            name_cg: 'Sakura Bloom',
            slug: 'sakura-bloom'
        },
        'gsc-global-social-chain': {
            id: 'gsc-global-social-chain',
            id_cg: 'global-social-chain',
            symbol: 'GSC',
            symbol_cg: 'gsc',
            name: 'Global Social Chain',
            name_cg: 'Global Social Chain',
            slug: 'global-social-chain'
        },
        'iic-intelligent-investment-chain': {
            id: 'iic-intelligent-investment-chain',
            id_cg: 'intelligent-investment-chain',
            symbol: 'IIC',
            symbol_cg: 'iic',
            name: 'Intelligent Investment Chain',
            name_cg: 'Intelligent Investment Chain',
            slug: 'intelligent-investment-chain'
        },
        'tube-bittube': {
            id: 'tube-bittube',
            id_cg: 'bittube',
            symbol: 'TUBE',
            symbol_cg: 'tube',
            name: 'BitTube',
            name_cg: 'BitTube',
            slug: 'bit-tube'
        },
        'sgn-signals-network': {
            id: 'sgn-signals-network',
            id_cg: 'signals',
            symbol: 'SGN',
            symbol_cg: 'sgn',
            name: 'Signals Network',
            name_cg: 'Signals',
            slug: 'signals-network'
        },
        'loki-loki': {
            id: 'loki-loki',
            id_cg: 'loki-network',
            symbol: 'LOKI',
            symbol_cg: 'loki',
            name: 'Loki',
            name_cg: 'Loki Network',
            slug: 'loki'
        },
        'cln-colu-local-network': {
            id: 'cln-colu-local-network',
            id_cg: 'colu',
            symbol: 'CLN',
            symbol_cg: 'cln',
            name: 'Colu Local Network',
            name_cg: 'Colu Local Network',
            slug: 'colu-local-network'
        },
        'bmh-blockmesh': {
            id: 'bmh-blockmesh',
            id_cg: 'blockmesh-2',
            symbol: 'BMH',
            symbol_cg: 'bmh',
            name: 'BlockMesh',
            name_cg: 'BlockMesh',
            slug: 'blockmesh'
        },
        'her-heronode': {
            id: 'her-heronode',
            id_cg: 'hero-node',
            symbol: 'HER',
            symbol_cg: 'her',
            name: 'HeroNode',
            name_cg: 'Hero Node Token',
            slug: 'heronode'
        },
        'ubt-unibright': {
            id: 'ubt-unibright',
            id_cg: 'unibright',
            symbol: 'UBT',
            symbol_cg: 'ubt',
            name: 'Unibright',
            name_cg: 'Unibright',
            slug: 'unibright'
        },
        'clo-callisto-network': {
            id: 'clo-callisto-network',
            id_cg: 'callisto',
            symbol: 'CLO',
            symbol_cg: 'clo',
            name: 'Callisto Network',
            name_cg: 'Callisto Network',
            slug: 'callisto-network'
        },
        'xyo-xyo-network': {
            id: 'xyo-xyo-network',
            id_cg: 'xyo-network',
            symbol: 'XYO',
            symbol_cg: 'xyo',
            name: 'XYO',
            name_cg: 'XYO Network',
            slug: 'xyo'
        },
        'lba-libra-credit': {
            id: 'lba-libra-credit',
            id_cg: 'cred',
            symbol: 'LBA',
            symbol_cg: 'lba',
            name: 'Cred',
            name_cg: 'Cred',
            slug: 'libra-credit'
        },
        'pat-patron': {
            id: 'pat-patron',
            id_cg: 'patron',
            symbol: 'PAT',
            symbol_cg: 'pat',
            name: 'Patron',
            name_cg: 'Patron',
            slug: 'patron'
        },
        'open-open-platform': {
            id: 'open-open-platform',
            id_cg: 'open-platform',
            symbol: 'OPEN',
            symbol_cg: 'open',
            name: 'Open Platform',
            name_cg: 'Open Platform',
            slug: 'open-platform'
        },
        'hero-hero': {
            id: 'hero-hero',
            id_cg: 'hero-token',
            symbol: 'HERO',
            symbol_cg: 'hero',
            name: 'Hero',
            name_cg: 'Hero Token',
            slug: 'hero'
        },
        'mrph-morpheusnetwork': {
            id: 'mrph-morpheusnetwork',
            id_cg: 'morpheus-network',
            symbol: 'MRPH',
            symbol_cg: 'mrph',
            name: 'Morpheus Network',
            name_cg: 'Morpheus Network',
            slug: 'morpheus-network'
        },
        'sntr-silent-notary': {
            id: 'sntr-silent-notary',
            id_cg: 'silent-notary',
            symbol: 'SNTR',
            symbol_cg: 'sntr',
            name: 'Silent Notary',
            name_cg: 'Silent Notary',
            slug: 'silent-notary'
        },
        'inv-invacio': {
            id: 'inv-invacio',
            id_cg: 'invacio',
            symbol: 'INV',
            symbol_cg: 'inv',
            name: 'Invacio',
            name_cg: 'Invacio',
            slug: 'invacio'
        },
        'apis-apis': {
            id: 'apis-apis',
            id_cg: 'apis',
            symbol: 'APIS',
            symbol_cg: 'apis',
            name: 'APIS',
            name_cg: 'APIS',
            slug: 'apis'
        },
        'red-red': {
            id: 'red-red',
            id_cg: '',
            symbol: 'RED',
            symbol_cg: '',
            name: 'RED',
            name_cg: '',
            slug: 'red'
        },
        'gin-gincoin': {
            id: 'gin-gincoin',
            id_cg: 'gincoin',
            symbol: 'GIN',
            symbol_cg: 'gin',
            name: 'GINcoin',
            name_cg: 'GINcoin',
            slug: 'gincoin'
        },
        'ft-fabric-token': {
            id: 'ft-fabric-token',
            id_cg: 'fabric-token',
            symbol: 'FT',
            symbol_cg: 'ft',
            name: 'Fabric Token',
            name_cg: 'Fabric Token',
            slug: 'fabric-token'
        },
        'dgtx-digitex-futures': {
            id: 'dgtx-digitex-futures',
            id_cg: 'digitex-futures-exchange',
            symbol: 'DGTX',
            symbol_cg: 'dgtx',
            name: 'Digitex Futures',
            name_cg: 'Digitex Futures Exchange',
            slug: 'digitex-futures'
        },
        'caz-cazcoin': {
            id: 'caz-cazcoin',
            id_cg: 'cazcoin',
            symbol: 'CAZ',
            symbol_cg: 'caz',
            name: 'Cazcoin',
            name_cg: 'Cazcoin',
            slug: 'cazcoin'
        },
        'iotx-iotex': {
            id: 'iotx-iotex',
            id_cg: 'iotex',
            symbol: 'IOTX',
            symbol_cg: 'iotx',
            name: 'IoTeX',
            name_cg: 'IoTeX',
            slug: 'iotex'
        },
        'soul-phantasma': {
            id: 'soul-phantasma',
            id_cg: 'phantasma',
            symbol: 'SOUL',
            symbol_cg: 'soul',
            name: 'Phantasma',
            name_cg: 'Phantasma',
            slug: 'phantasma'
        },
        'ava-travala': {
            id: 'ava-travala',
            id_cg: 'concierge-io',
            symbol: 'AVA',
            symbol_cg: 'ava',
            name: 'Travala.com',
            name_cg: 'Travala.com',
            slug: 'travala'
        },
        'luc-level-up-coin': {
            id: 'luc-level-up-coin',
            id_cg: 'play2live',
            symbol: 'LUC',
            symbol_cg: 'luc',
            name: 'Level Up Coin',
            name_cg: 'Level-Up Coin',
            slug: 'level-up'
        },
        'spd-spindle': {
            id: 'spd-spindle',
            id_cg: 'spindle',
            symbol: 'SPD',
            symbol_cg: 'spd',
            name: 'SPINDLE',
            name_cg: 'SPINDLE',
            slug: 'spindle'
        },
        'face-faceter': {
            id: 'face-faceter',
            id_cg: 'face',
            symbol: 'FACE',
            symbol_cg: 'face',
            name: 'Faceter',
            name_cg: 'Faceter',
            slug: 'faceter'
        },
        'repo-repo': {
            id: 'repo-repo',
            id_cg: 'repo',
            symbol: 'REPO',
            symbol_cg: 'repo',
            name: 'REPO',
            name_cg: 'Repo Coin',
            slug: 'repo'
        },
        'nkn-nkn': {
            id: 'nkn-nkn',
            id_cg: 'nkn',
            symbol: 'NKN',
            symbol_cg: 'nkn',
            name: 'NKN',
            name_cg: 'NKN',
            slug: 'nkn'
        },
        'zip-zipper': {
            id: 'zip-zipper',
            id_cg: 'zip',
            symbol: 'ZIP',
            symbol_cg: 'zip',
            name: 'Zipper',
            name_cg: 'Zipper Network',
            slug: 'zip'
        },
        'exc-eximchain': {
            id: 'exc-eximchain',
            id_cg: 'eximchain',
            symbol: 'EXC',
            symbol_cg: 'exc',
            name: 'Eximchain',
            name_cg: 'Eximchain',
            slug: ''
        },
        'navi-naviaddress': {
            id: 'navi-naviaddress',
            id_cg: 'naviaddress',
            symbol: 'NAVI',
            symbol_cg: 'navi',
            name: 'Naviaddress',
            name_cg: 'Naviaddress',
            slug: 'naviaddress'
        },
        'imt-moneytoken': {
            id: 'imt-moneytoken',
            id_cg: 'moneytoken',
            symbol: 'IMT',
            symbol_cg: 'imt',
            name: 'Moneytoken',
            name_cg: 'MoneyToken',
            slug: 'moneytoken'
        },
        'ely-elysian': {
            id: 'ely-elysian',
            id_cg: 'elysian',
            symbol: 'ELY',
            symbol_cg: 'ely',
            name: 'Elysian',
            name_cg: 'Elysian',
            slug: 'elysian'
        },
        'bit-bitrewards': {
            id: 'bit-bitrewards',
            id_cg: 'bitrewards-token',
            symbol: 'BIT',
            symbol_cg: 'bit',
            name: 'BitRewards',
            name_cg: 'BitRewards Token',
            slug: 'bitrewards'
        },
        'ecom-omnitude': {
            id: 'ecom-omnitude',
            id_cg: 'omnitude',
            symbol: 'ECOM',
            symbol_cg: 'ecom',
            name: 'Omnitude',
            name_cg: 'Omnitude',
            slug: 'omnitude'
        },
        'bbo-bigbom': {
            id: 'bbo-bigbom',
            id_cg: 'bigbom-eco',
            symbol: 'BBO',
            symbol_cg: 'bbo',
            name: 'Bigbom',
            name_cg: 'Bigbom',
            slug: 'bigbom'
        },
        'vra-verasity': {
            id: 'vra-verasity',
            id_cg: 'verasity',
            symbol: 'VRA',
            symbol_cg: 'vra',
            name: 'Verasity',
            name_cg: 'Verasity',
            slug: 'verasity'
        },
        'pnk-kleros': {
            id: 'pnk-kleros',
            id_cg: 'kleros',
            symbol: 'PNK',
            symbol_cg: 'pnk',
            name: 'Kleros',
            name_cg: 'Kleros',
            slug: 'kleros'
        },
        'ess-essentia': {
            id: 'ess-essentia',
            id_cg: 'essentia',
            symbol: 'ESS',
            symbol_cg: 'ess',
            name: 'Essentia',
            name_cg: 'Essentia',
            slug: 'essentia'
        },
        'rmesh-rightmesh': {
            id: 'rmesh-rightmesh',
            id_cg: 'rightmesh',
            symbol: 'RMESH',
            symbol_cg: 'rmesh',
            name: 'RightMesh',
            name_cg: 'RightMesh',
            slug: 'rightmesh'
        },
        'card-cardstack': {
            id: 'card-cardstack',
            id_cg: 'cardstack',
            symbol: 'CARD',
            symbol_cg: 'card',
            name: 'Cardstack',
            name_cg: 'Cardstack',
            slug: 'cardstack'
        },
        'asa-asura-coin': {
            id: 'asa-asura-coin',
            id_cg: 'asura',
            symbol: 'ASA',
            symbol_cg: 'asa',
            name: 'Asura Coin',
            name_cg: 'Asura',
            slug: 'asura-coin'
        },
        'qkc-quarkchain': {
            id: 'qkc-quarkchain',
            id_cg: 'quark-chain',
            symbol: 'QKC',
            symbol_cg: 'qkc',
            name: 'QuarkChain',
            name_cg: 'QuarkChain',
            slug: 'quarkchain'
        },
        'got-gonetwork': {
            id: 'got-gonetwork',
            id_cg: 'gonetwork',
            symbol: 'GOT',
            symbol_cg: 'got',
            name: 'GoNetwork',
            name_cg: 'GoNetwork',
            slug: 'gonetwork'
        },
        'ftm-fantom': {
            id: 'ftm-fantom',
            id_cg: 'fantom',
            symbol: 'FTM',
            symbol_cg: 'ftm',
            name: 'Fantom',
            name_cg: 'Fantom',
            slug: 'fantom'
        },
        'coti-coti': {
            id: 'coti-coti',
            id_cg: 'coti',
            symbol: 'COTI',
            symbol_cg: 'coti',
            name: 'COTI',
            name_cg: 'COTI',
            slug: 'coti'
        },
        'olt-oneledger': {
            id: 'olt-oneledger',
            id_cg: 'one-ledger',
            symbol: 'OLT',
            symbol_cg: 'olt',
            name: 'OneLedger',
            name_cg: 'OneLedger',
            slug: 'oneledger'
        },
        'atmi-atonomi': {
            id: 'atmi-atonomi',
            id_cg: 'atonomi',
            symbol: 'ATMI',
            symbol_cg: 'atmi',
            name: 'Atonomi',
            name_cg: 'Atonomi',
            slug: 'atonomi'
        },
        'ucn-uchain': {
            id: 'ucn-uchain',
            id_cg: 'uchain',
            symbol: 'UCN',
            symbol_cg: 'ucn',
            name: 'UChain',
            name_cg: 'UChain',
            slug: 'uchain'
        },
        'nos-nos': {
            id: 'nos-nos',
            id_cg: 'nos',
            symbol: 'NOS',
            symbol_cg: 'nos',
            name: 'nOS',
            name_cg: 'nOS',
            slug: 'nos'
        },
        'car-carblock': {
            id: 'car-carblock',
            id_cg: 'carblock',
            symbol: 'CAR',
            symbol_cg: 'car',
            name: 'CarBlock',
            name_cg: 'CarBlock',
            slug: 'carblock'
        },
        'ankr-ankr-network': {
            id: 'ankr-ankr-network',
            id_cg: 'ankr',
            symbol: 'ANKR',
            symbol_cg: 'ankr',
            name: 'Ankr Network',
            name_cg: 'Ankr Network',
            slug: 'ankr'
        },
        'atp-atlas-protocol': {
            id: 'atp-atlas-protocol',
            id_cg: 'atlas-protocol',
            symbol: 'ATP',
            symbol_cg: 'ATP',
            name: 'Atlas Protocol',
            name_cg: 'Atlas Protocol',
            slug: 'atlas-protocol'
        },
        'nec-nectar': {
            id: 'nec-nectar',
            id_cg: 'nectar-token',
            symbol: 'NEC',
            symbol_cg: 'nec',
            name: 'Nectar',
            name_cg: 'Nectar Token',
            slug: 'nectar'
        },
        'pwr-pwr-coin': {
            id: 'pwr-pwr-coin',
            id_cg: 'powercoin',
            symbol: 'PWR',
            symbol_cg: 'pwr',
            name: 'PWR Coin',
            name_cg: 'PWR Coin',
            slug: 'powercoin'
        },
        'ivy-ivy': {
            id: 'ivy-ivy',
            id_cg: 'ivy',
            symbol: 'IVY',
            symbol_cg: 'ivy',
            name: 'Ivy',
            name_cg: 'Ivy',
            slug: 'ivy'
        },
        'seele-seele': {
            id: 'seele-seele',
            id_cg: 'seele',
            symbol: 'SEELE',
            symbol_cg: 'seele',
            name: 'Seele',
            name_cg: 'Seele',
            slug: 'seele'
        },
        'edr-endor-protocol': {
            id: 'edr-endor-protocol',
            id_cg: 'endor',
            symbol: 'EDR',
            symbol_cg: 'edr',
            name: 'Endor Protocol',
            name_cg: 'Endor Protocol Token',
            slug: 'endor-protocol'
        },
        'pai-pchain': {
            id: 'pai-pchain',
            id_cg: 'pchain',
            symbol: 'PI',
            symbol_cg: 'pi',
            name: 'PCHAIN',
            name_cg: 'Pchain',
            slug: 'pchain'
        },
        '0xbtc-0xbitcoin': {
            id: '0xbtc-0xbitcoin',
            id_cg: 'oxbitcoin',
            symbol: '0xBTC',
            symbol_cg: '0xbtc',
            name: '0xBitcoin',
            name_cg: '0xBitcoin',
            slug: '0xbtc'
        },
        'kwatt-4new': {
            id: 'kwatt-4new',
            id_cg: '4new',
            symbol: 'KWATT',
            symbol_cg: 'kwatt',
            name: '4NEW',
            name_cg: '4New',
            slug: '4new'
        },
        'cpt-cryptaur': {
            id: 'cpt-cryptaur',
            id_cg: 'cryptaur',
            symbol: 'CPT',
            symbol_cg: 'cpt',
            name: 'Cryptaur',
            name_cg: 'Cryptaur',
            slug: 'cryptaur'
        },
        'etz-ether-zero': {
            id: 'etz-ether-zero',
            id_cg: 'etherzero',
            symbol: 'ETZ',
            symbol_cg: 'etz',
            name: 'Ether Zero',
            name_cg: 'Ether Zero',
            slug: 'ether-zero'
        },
        'lyl-loyalcoin': {
            id: 'lyl-loyalcoin',
            id_cg: 'loyalcoin',
            symbol: 'LYL',
            symbol_cg: 'lyl',
            name: 'LoyalCoin',
            name_cg: 'LoyalCoin',
            slug: 'loyalcoin'
        },
        'bnk-bankera': {
            id: 'bnk-bankera',
            id_cg: 'bankera',
            symbol: 'BNK',
            symbol_cg: 'bnk',
            name: 'Bankera',
            name_cg: 'Bankera',
            slug: 'bankera'
        },
        'medx-medibloc-erc20': {
            id: 'medx-medibloc-erc20',
            id_cg: 'mediblocx',
            symbol: 'MEDX',
            symbol_cg: 'medx',
            name: 'MediBloc [ERC20]',
            name_cg: 'MediBlocX',
            slug: 'medx'
        },
        'ubex-ubex': {
            id: 'ubex-ubex',
            id_cg: 'ubex',
            symbol: 'UBEX',
            symbol_cg: 'ubex',
            name: 'Ubex',
            name_cg: 'Ubex',
            slug: 'ubex'
        },
        'dacc-dacc': {
            id: 'dacc-dacc',
            id_cg: 'dacc',
            symbol: 'DACC',
            symbol_cg: 'dacc',
            name: 'DACC',
            name_cg: 'DACC',
            slug: 'dacc'
        },
        'fto-futurocoin': {
            id: 'fto-futurocoin',
            id_cg: 'futurocoin',
            symbol: 'FTO',
            symbol_cg: 'fto',
            name: 'FuturoCoin',
            name_cg: 'FuturoCoin',
            slug: 'futurocoin'
        },
        'abyss-the-abyss': {
            id: 'abyss-the-abyss',
            id_cg: 'the-abyss',
            symbol: 'ABYSS',
            symbol_cg: 'abyss',
            name: 'Abyss Token',
            name_cg: 'Abyss Token',
            slug: 'abyss-token'
        },
        'omx-shivom': {
            id: 'omx-shivom',
            id_cg: 'project-shivom',
            symbol: 'OMX',
            symbol_cg: 'omx',
            name: 'Shivom',
            name_cg: 'Project SHIVOM',
            slug: 'shivom'
        },
        'pmnt-paymon': {
            id: 'pmnt-paymon',
            id_cg: 'paymon',
            symbol: 'PMNT',
            symbol_cg: 'pmnt',
            name: 'Paymon',
            name_cg: 'Paymon',
            slug: 'paymon'
        },
        'hur-hurify': {
            id: 'hur-hurify',
            id_cg: 'hurify',
            symbol: 'HUR',
            symbol_cg: 'hur',
            name: 'Hurify',
            name_cg: 'Hurify',
            slug: 'hurify'
        },
        'tmt-traxia': {
            id: 'tmt-traxia',
            id_cg: 'traxia',
            symbol: 'TMT',
            symbol_cg: 'tmt',
            name: 'TRAXIA',
            name_cg: 'Traxia',
            slug: 'traxia'
        },
        'ftt-farmatrust': {
            id: 'ftt-farmatrust',
            id_cg: 'farmatrust',
            symbol: 'FTT',
            symbol_cg: 'ftt',
            name: 'FarmaTrust',
            name_cg: 'FarmaTrust',
            slug: 'farmatrust'
        },
        'vite-vite': {
            id: 'vite-vite',
            id_cg: 'vite',
            symbol: 'VITE',
            symbol_cg: 'vite',
            name: 'VITE',
            name_cg: 'Vite',
            slug: 'vite'
        },
        'egcc-engine': {
            id: 'egcc-engine',
            id_cg: 'engine',
            symbol: 'EGCC',
            symbol_cg: 'egcc',
            name: 'Engine',
            name_cg: 'Engine',
            slug: 'engine'
        },
        'cbc-cashbet-coin': {
            id: 'cbc-cashbet-coin',
            id_cg: 'cashbet-coin',
            symbol: 'CBC',
            symbol_cg: 'cbc',
            name: 'CashBet Coin',
            name_cg: 'CashBet Coin',
            slug: 'cashbet-coin'
        },
        'cou-couchain': {
            id: 'cou-couchain',
            id_cg: 'couchain',
            symbol: 'COU',
            symbol_cg: 'cou',
            name: 'Couchain',
            name_cg: 'Couchain',
            slug: 'couchain'
        },
        'pkc-pikciochain': {
            id: 'pkc-pikciochain',
            id_cg: 'pikciochain',
            symbol: 'PKC',
            symbol_cg: 'pkc',
            name: 'PikcioChain',
            name_cg: 'PikcioChain',
            slug: 'pikciochain'
        },
        'ceek-ceek-vr': {
            id: 'ceek-ceek-vr',
            id_cg: 'ceek',
            symbol: 'CEEK',
            symbol_cg: 'ceek',
            name: 'CEEK VR',
            name_cg: 'CEEK Smart VR Token',
            slug: 'ceek-vr'
        },
        'go-gochain': {
            id: 'go-gochain',
            id_cg: 'gochain',
            symbol: 'GO',
            symbol_cg: 'go',
            name: 'GoChain',
            name_cg: 'GoChain',
            slug: 'gochain'
        },
        'ssp-smartshare': {
            id: 'ssp-smartshare',
            id_cg: 'smartshare',
            symbol: 'SSP',
            symbol_cg: 'ssp',
            name: 'Smartshare',
            name_cg: 'Smartshare',
            slug: 'smartshare'
        },
        'xmx-xmax': {
            id: 'xmx-xmax',
            id_cg: 'xmax',
            symbol: 'XMX',
            symbol_cg: 'xmx',
            name: 'XMax',
            name_cg: 'XMax',
            slug: 'xmax'
        },
        'gmb-gamb': {
            id: 'gmb-gamb',
            id_cg: 'gamb',
            symbol: 'GMB',
            symbol_cg: 'gmb',
            name: 'GAMB',
            name_cg: 'GAMB',
            slug: 'gamb'
        },
        'upp-sentinel-protocol': {
            id: 'upp-sentinel-protocol',
            id_cg: 'sentinel-protocol',
            symbol: 'UPP',
            symbol_cg: 'upp',
            name: 'Sentinel Protocol',
            name_cg: 'Sentinel Protocol',
            slug: 'sentinel-protocol'
        },
        'dag-constellation': {
            id: 'dag-constellation',
            id_cg: 'constellation-labs',
            symbol: 'DAG',
            symbol_cg: 'dag',
            name: 'Constellation',
            name_cg: 'Constellation',
            slug: 'constellation'
        },
        'mvp-merculet': {
            id: 'mvp-merculet',
            id_cg: 'merculet',
            symbol: 'MVP',
            symbol_cg: 'mvp',
            name: 'Merculet',
            name_cg: 'Merculet',
            slug: 'merculet'
        },
        'fgc-fantasygold': {
            id: 'fgc-fantasygold',
            id_cg: 'fantasy-gold',
            symbol: 'FGC',
            symbol_cg: 'fgc',
            name: 'FantasyGold',
            name_cg: 'Fantasy Gold',
            slug: 'fantasygold'
        },
        'bwt-bittwatt': {
            id: 'bwt-bittwatt',
            id_cg: 'bittwatt',
            symbol: 'BWT',
            symbol_cg: 'bwt',
            name: 'Bittwatt',
            name_cg: 'Bittwatt',
            slug: 'bittwatt'
        },
        'box-contentbox': {
            id: 'box-contentbox',
            id_cg: 'contentbox',
            symbol: 'BOX',
            symbol_cg: 'box',
            name: 'ContentBox',
            name_cg: 'ContentBox',
            slug: 'contentbox'
        },
        'aoa-aurora': {
            id: 'aoa-aurora',
            id_cg: 'aurora',
            symbol: 'AOA',
            symbol_cg: 'aoa',
            name: 'Aurora',
            name_cg: 'Aurora',
            slug: 'auroracoin'
        },
        'etk-energitoken': {
            id: 'etk-energitoken',
            id_cg: 'energi-token',
            symbol: 'ETK',
            symbol_cg: 'etk',
            name: 'EnergiToken',
            name_cg: 'Energi Token',
            slug: 'energitoken'
        },
        'met-metronome': {
            id: 'met-metronome',
            id_cg: 'metronome',
            symbol: 'MET',
            symbol_cg: 'met',
            name: 'Metronome',
            name_cg: 'Metronome',
            slug: 'metronome'
        },
        'alx-alax': {
            id: 'alx-alax',
            id_cg: 'alax',
            symbol: 'ALX',
            symbol_cg: 'alx',
            name: 'ALAX',
            name_cg: 'ALAX',
            slug: 'alax'
        },
        'ors-origin-sport': {
            id: 'ors-origin-sport',
            id_cg: 'origin-sport',
            symbol: 'ORS',
            symbol_cg: 'ors',
            name: 'Origin Sport',
            name_cg: 'Origin Sport',
            slug: 'origin-sport'
        },
        'boe-bodhi-eth': {
            id: 'boe-bodhi-eth',
            id_cg: 'bodhi-eth',
            symbol: 'BOE',
            symbol_cg: 'boe',
            name: 'Bodhi [ETH]',
            name_cg: 'Bodhi [ETH]',
            slug: ''
        },
        'rte-rate3': {
            id: 'rte-rate3',
            id_cg: 'rate3',
            symbol: 'RTE',
            symbol_cg: 'rte',
            name: 'Rate3',
            name_cg: 'Rate3',
            slug: 'rate3'
        },
        'tern-ternio': {
            id: 'tern-ternio',
            id_cg: 'ternio',
            symbol: 'TERN',
            symbol_cg: 'tern',
            name: 'Ternio',
            name_cg: 'Ternio',
            slug: 'ternio'
        },
        'zcn-0chain': {
            id: 'zcn-0chain',
            id_cg: '0chain',
            symbol: 'ZCN',
            symbol_cg: 'zcn',
            name: '0Chain',
            name_cg: '0chain',
            slug: '0chain'
        },
        'egt-egretia': {
            id: 'egt-egretia',
            id_cg: 'egretia',
            symbol: 'EGT',
            symbol_cg: 'egt',
            name: 'Egretia',
            name_cg: 'Egretia',
            slug: 'egretia'
        },
        'kndc-kanadecoin': {
            id: 'kndc-kanadecoin',
            id_cg: 'kanadecoin',
            symbol: 'KNDC',
            symbol_cg: 'kndc',
            name: 'KanadeCoin',
            name_cg: 'KanadeCoin',
            slug: 'kanadecoin'
        },
        'bob-bobs-repair': {
            id: 'bob-bobs-repair',
            id_cg: 'bobs_repair',
            symbol: 'BOB',
            symbol_cg: 'bob',
            name: "Bob's Repair",
            name_cg: "Bob's Repair",
            slug: 'bobs-repair'
        },
        'wwb-wowbit': {
            id: 'wwb-wowbit',
            id_cg: 'wowbit',
            symbol: 'WWB',
            symbol_cg: 'wwb',
            name: 'Wowbit',
            name_cg: 'Wowbit',
            slug: 'wowbit'
        },
        'vld-vetri': {
            id: 'vld-vetri',
            id_cg: 'valid',
            symbol: 'VLD',
            symbol_cg: 'vld',
            name: 'Vetri',
            name_cg: 'Vetri',
            slug: 'vetri'
        },
        'mft-mainframe': {
            id: 'mft-mainframe',
            id_cg: 'mainframe',
            symbol: 'MFT',
            symbol_cg: 'mft',
            name: 'Mainframe',
            name_cg: 'Mainframe',
            slug: 'mainframe'
        },
        'orbs-orbs': {
            id: 'orbs-orbs',
            id_cg: 'orbs',
            symbol: 'ORBS',
            symbol_cg: 'orbs',
            name: 'Orbs',
            name_cg: 'Orbs',
            slug: 'orbs'
        },
        'lif-winding-tree': {
            id: 'lif-winding-tree',
            id_cg: 'winding-tree',
            symbol: 'LIF',
            symbol_cg: 'lif',
            name: 'Winding Tree',
            name_cg: 'Winding Tree',
            slug: 'winding-tree'
        },
        'ebc-ebcoin': {
            id: 'ebc-ebcoin',
            id_cg: 'ebcoin',
            symbol: 'EBC',
            symbol_cg: 'ebc',
            name: 'EBCoin',
            name_cg: 'EBCoin',
            slug: 'ebcoin'
        },
        'gbx-globitex': {
            id: 'gbx-globitex',
            id_cg: 'globitex',
            symbol: 'GBX',
            symbol_cg: 'gbx',
            name: 'Globitex',
            name_cg: 'Globitex',
            slug: ''
        },
        'wiz-crowdwiz': {
            id: 'wiz-crowdwiz',
            id_cg: 'crowdwiz',
            symbol: 'WIZ',
            symbol_cg: 'wiz',
            name: 'CrowdWiz',
            name_cg: 'CrowdWiz',
            slug: 'crowdwiz'
        },
        'pyn-paycent': {
            id: 'pyn-paycent',
            id_cg: 'paycent',
            symbol: 'PYN',
            symbol_cg: 'pyn',
            name: 'PAYCENT',
            name_cg: 'Paycent',
            slug: 'paycent'
        },
        'isr-insureum': {
            id: 'isr-insureum',
            id_cg: 'insureum',
            symbol: 'ISR',
            symbol_cg: 'isr',
            name: 'Insureum',
            name_cg: 'Insureum',
            slug: 'insureum'
        },
        'ttc-ttc-protocol': {
            id: 'ttc-ttc-protocol',
            id_cg: 'ttc-protocol',
            symbol: 'TTC',
            symbol_cg: 'ttc',
            name: 'TTC Protocol',
            name_cg: 'TTC PROTOCOL',
            slug: 'ttc'
        },
        'hold-hold': {
            id: 'hold-hold',
            id_cg: 'hold',
            symbol: 'HOLD',
            symbol_cg: 'hold',
            name: 'HOLD',
            name_cg: 'Hold',
            slug: 'hold'
        },
        'lemo-lemochain': {
            id: 'lemo-lemochain',
            id_cg: 'lemochain',
            symbol: 'LEMO',
            symbol_cg: 'lemo',
            name: 'LemoChain',
            name_cg: 'LemoChain',
            slug: 'lemochain'
        },
        'fsbt-fsbt-api-token': {
            id: 'fsbt-fsbt-api-token',
            id_cg: 'forty-seven-bank',
            symbol: 'FSBT',
            symbol_cg: 'fsbt',
            name: 'FSBT API Token',
            name_cg: 'FSBT API',
            slug: 'fsbt-api-token'
        },
        'thrt-thrive-token': {
            id: 'thrt-thrive-token',
            id_cg: 'thrive',
            symbol: 'THRT',
            symbol_cg: 'thrt',
            name: 'Thrive Token',
            name_cg: 'Thrive',
            slug: 'thrive-token'
        },
        'otb-otcbtc-token': {
            id: 'otb-otcbtc-token',
            id_cg: 'otcbtc-token',
            symbol: 'OTB',
            symbol_cg: 'otb',
            name: 'OTCBTC Token',
            name_cg: 'OTCBTC Token',
            slug: 'otcbtc-token'
        },
        'onl-onlive': {
            id: 'onl-onlive',
            id_cg: 'on-live',
            symbol: 'ONL',
            symbol_cg: 'onl',
            name: 'On.Live',
            name_cg: 'On.Live',
            slug: 'on-live'
        },
        'pai-project-pai': {
            id: 'pai-project-pai',
            id_cg: 'project-pai',
            symbol: 'PAI',
            symbol_cg: 'pai',
            name: 'Project Pai',
            name_cg: 'Project Pai',
            slug: 'project-pai'
        },
        'cccx-clipper-coin': {
            id: 'cccx-clipper-coin',
            id_cg: 'clipper-coin-capital',
            symbol: 'CCCX',
            symbol_cg: 'cccx',
            name: 'Clipper Coin',
            name_cg: 'Clipper Coin Capital',
            slug: 'clipper-coin'
        },
        'pch-popchain': {
            id: 'pch-popchain',
            id_cg: 'popchain',
            symbol: 'PCH',
            symbol_cg: 'pch',
            name: 'POPCHAIN',
            name_cg: 'Popchain',
            slug: 'popchain'
        },
        'seer-seer': {
            id: 'seer-seer',
            id_cg: 'seer',
            symbol: 'SEER',
            symbol_cg: 'seer',
            name: 'SEER',
            name_cg: 'Seer',
            slug: 'seer'
        },
        'fti-fanstime': {
            id: 'fti-fanstime',
            id_cg: 'fanstime',
            symbol: 'FTI',
            symbol_cg: 'fti',
            name: 'FansTime',
            name_cg: 'FansTime',
            slug: 'fanstime'
        },
        'coni-coni': {
            id: 'coni-coni',
            id_cg: 'coinbene-token',
            symbol: 'CONI',
            symbol_cg: 'coni',
            name: 'Coni',
            name_cg: 'Coinbene Token',
            slug: 'coni'
        },
        'kbc-karatgold-coin': {
            id: 'kbc-karatgold-coin',
            id_cg: 'karatgold-coin',
            symbol: 'KBC',
            symbol_cg: 'kbc',
            name: 'Karatgold Coin',
            name_cg: 'Karatgold Coin',
            slug: 'karatgold-coin'
        },
        'hsc-hashcoin': {
            id: 'hsc-hashcoin',
            id_cg: 'hashcoin',
            symbol: 'HSC',
            symbol_cg: 'hsc',
            name: 'HashCoin',
            name_cg: 'HashCoin',
            slug: 'hashcoin'
        },
        'yup-crowdholding': {
            id: 'yup-crowdholding',
            id_cg: 'crowdholding',
            symbol: 'YUP',
            symbol_cg: 'yup',
            name: 'Crowdholding',
            name_cg: 'Crowdholding',
            slug: 'crowdholding'
        },
        'like-likecoin': {
            id: 'like-likecoin',
            id_cg: 'likecoin',
            symbol: 'LIKE',
            symbol_cg: 'like',
            name: 'LikeCoin',
            name_cg: 'LikeCoin',
            slug: 'likecoin'
        },
        'ors-ors-group': {
            id: 'ors-ors-group',
            id_cg: 'orsgroup-io',
            symbol: 'ORS',
            symbol_cg: 'ors',
            name: 'ORS Group',
            name_cg: 'ORS Group',
            slug: 'ors-group'
        },
        'xsg-snowgem': {
            id: 'xsg-snowgem',
            id_cg: 'snowgem',
            symbol: 'XSG',
            symbol_cg: 'xsg',
            name: 'SnowGem',
            name_cg: 'SnowGem',
            slug: 'snowgem'
        },
        'moc-mossland': {
            id: 'moc-mossland',
            id_cg: 'mossland',
            symbol: 'MOC',
            symbol_cg: 'moc',
            name: 'Moss Coin',
            name_cg: 'Mossland',
            slug: 'moss-coin'
        },
        'dtx-data-exchange': {
            id: 'dtx-data-exchange',
            id_cg: 'databroker-dao',
            symbol: 'DTX',
            symbol_cg: 'dtx',
            name: 'DaTa eXchange',
            name_cg: 'DaTa eXchange Token',
            slug: 'data-exchange'
        },
        'bkbt-beekan': {
            id: 'bkbt-beekan',
            id_cg: 'beekan',
            symbol: 'BKBT',
            symbol_cg: 'bkbt',
            name: 'BeeKan',
            name_cg: 'BeeKan / Beenews',
            slug: 'beekan'
        },
        'cgen-communitygeneration': {
            id: 'cgen-communitygeneration',
            id_cg: 'community-generation',
            symbol: 'CGEN',
            symbol_cg: 'cgen',
            name: 'Community Generation',
            name_cg: 'Community Generation Core',
            slug: 'communitygeneration'
        },
        'bitv-bitvier': {
            id: 'bitv-bitvier',
            id_cg: 'bitvier',
            symbol: 'BITV',
            symbol_cg: 'bitv',
            name: 'Bitvier',
            name_cg: 'Bitvier',
            slug: ''
        },
        'zxc-0xcert': {
            id: 'zxc-0xcert',
            id_cg: '0xcert',
            symbol: 'ZXC',
            symbol_cg: 'zxc',
            name: '0xcert',
            name_cg: '0xcert',
            slug: '0xcert'
        },
        'dws-dws': {
            id: 'dws-dws',
            id_cg: 'dws',
            symbol: 'DWS',
            symbol_cg: 'dws',
            name: 'DWS',
            name_cg: 'DWS',
            slug: 'dws'
        },
        'nusd-nusd': {
            id: 'nusd-nusd',
            id_cg: 'nusd',
            symbol: 'SUSD',
            symbol_cg: 'susd',
            name: 'sUSD',
            name_cg: 'sUSD',
            slug: 'susd'
        },
        'iq-everipedia': {
            id: 'iq-everipedia',
            id_cg: 'everipedia',
            symbol: 'IQ',
            symbol_cg: 'iq',
            name: 'Everipedia',
            name_cg: 'Everipedia',
            slug: 'everipedia'
        },
        'trtt-trittium': {
            id: 'trtt-trittium',
            id_cg: 'trittium',
            symbol: 'TRTT',
            symbol_cg: 'trtt',
            name: 'Trittium',
            name_cg: 'Trittium',
            slug: 'trittium'
        },
        'bmx-bitmart-token': {
            id: 'bmx-bitmart-token',
            id_cg: 'bitmart-token',
            symbol: 'BMX',
            symbol_cg: 'bmx',
            name: 'BitMart Token',
            name_cg: 'BitMart Token',
            slug: 'bitmart-token'
        },
        'fnkos-fnkos': {
            id: 'fnkos-fnkos',
            id_cg: 'fnkos',
            symbol: 'FNKOS',
            symbol_cg: 'fnkos',
            name: 'FNKOS',
            name_cg: 'FNKOS',
            slug: 'fnkos'
        },
        'ply-playcoin': {
            id: 'ply-playcoin',
            id_cg: 'playcoin',
            symbol: 'PLY',
            symbol_cg: 'ply',
            name: 'PlayCoin [QRC20]',
            name_cg: 'PlayCoin',
            slug: 'playcoin'
        },
        'nobs-no-bs-crypto': {
            id: 'nobs-no-bs-crypto',
            id_cg: 'no-bs-crypto',
            symbol: 'NOBS',
            symbol_cg: 'nobs',
            name: 'No BS Crypto',
            name_cg: 'No BS Crypto',
            slug: 'no-bs-crypto'
        },
        'xmct-xmct': {
            id: 'xmct-xmct',
            id_cg: 'xmct',
            symbol: 'XMCT',
            symbol_cg: 'xmct',
            name: 'XMCT',
            name_cg: 'XMED Chain Token',
            slug: 'xmct'
        },
        'rpl-rocket-pool': {
            id: 'rpl-rocket-pool',
            id_cg: 'rocket-pool',
            symbol: 'RPL',
            symbol_cg: 'rpl',
            name: 'Rocket Pool',
            name_cg: 'Rocket Pool',
            slug: 'rocket-pool'
        },
        'xd-xd': {
            id: 'xd-xd',
            id_cg: 'scroll-token',
            symbol: 'XD',
            symbol_cg: 'xd',
            name: 'Data Transaction Token',
            name_cg: 'Data Transaction Token',
            slug: 'data-transaction-token'
        },
        'aeg-aegeus': {
            id: 'aeg-aegeus',
            id_cg: 'aegeus',
            symbol: 'AEG',
            symbol_cg: 'aeg',
            name: 'Aegeus',
            name_cg: 'Aegeus',
            slug: 'aegeus'
        },
        'engt-engagement-token': {
            id: 'engt-engagement-token',
            id_cg: 'engagement-token',
            symbol: 'ENGT',
            symbol_cg: 'engt',
            name: 'Engagement Token',
            name_cg: 'Engagement Token',
            slug: 'engagement-token'
        },
        'tgame-truegame': {
            id: 'tgame-truegame',
            id_cg: 'truegame',
            symbol: 'TGAME',
            symbol_cg: 'tgame',
            name: 'Truegame',
            name_cg: 'Truegame',
            slug: 'tgame'
        },
        'gard-hashgard': {
            id: 'gard-hashgard',
            id_cg: 'hashgard',
            symbol: 'GARD',
            symbol_cg: 'gard',
            name: 'Hashgard',
            name_cg: 'Hashgard',
            slug: 'hashgard'
        },
        'drep-drep': {
            id: 'drep-drep',
            id_cg: 'drep',
            symbol: 'DREP',
            symbol_cg: 'drep',
            name: 'DREP',
            name_cg: 'Drep',
            slug: 'drep'
        },
        'jot-juryonline-token': {
            id: 'jot-juryonline-token',
            id_cg: 'jury-online-token',
            symbol: 'JOT',
            symbol_cg: 'jot',
            name: 'Jury.Online Token',
            name_cg: 'Jury.Online Token',
            slug: 'jury-online-token'
        },
        'sop-sopay': {
            id: 'sop-sopay',
            id_cg: 'sopay',
            symbol: 'SOP',
            symbol_cg: 'sop',
            name: 'SoPay',
            name_cg: 'SoPay',
            slug: 'sopay'
        },
        'ptt-proton-token': {
            id: 'ptt-proton-token',
            id_cg: 'proton-token',
            symbol: 'PTT',
            symbol_cg: 'ptt',
            name: 'Proton Token',
            name_cg: 'Proton Token',
            slug: 'proton-token'
        },
        'krl-kryll': {
            id: 'krl-kryll',
            id_cg: 'kryll',
            symbol: 'KRL',
            symbol_cg: 'krl',
            name: 'Kryll',
            name_cg: 'KRYLL',
            slug: 'kryll'
        },
        'meta-metadium': {
            id: 'meta-metadium',
            id_cg: 'metadium',
            symbol: 'META',
            symbol_cg: 'meta',
            name: 'Metadium',
            name_cg: 'Metadium',
            slug: 'metadium'
        },
        'wys-wys-token': {
            id: 'wys-wys-token',
            id_cg: 'wysker',
            symbol: 'WYS',
            symbol_cg: 'wys',
            name: 'wys Token',
            name_cg: 'Wysker Token',
            slug: 'wys-token'
        },
        'gbc-gold-bits-coin': {
            id: 'gbc-gold-bits-coin',
            id_cg: 'gold-bits-coin',
            symbol: 'GBC',
            symbol_cg: 'gbc',
            name: 'Gold Bits Coin',
            name_cg: 'Gold Bits Coin',
            slug: 'gold-bits-coin'
        },
        'cosm-cosmo-coin': {
            id: 'cosm-cosmo-coin',
            id_cg: 'cosmo-coin',
            symbol: 'COSM',
            symbol_cg: 'cosm',
            name: 'Cosmo Coin',
            name_cg: 'Cosmo Coin',
            slug: 'cosmo-coin'
        },
        'bwx-blue-whale-token': {
            id: 'bwx-blue-whale-token',
            id_cg: 'blue-whale',
            symbol: 'BWX',
            symbol_cg: 'bwx',
            name: 'Blue Whale EXchange',
            name_cg: 'Blue Whale',
            slug: 'blue-whale-exchange'
        },
        'wt-wetoken': {
            id: 'wt-wetoken',
            id_cg: 'worldwifi',
            symbol: 'WT',
            symbol_cg: 'wt',
            name: 'WeToken',
            name_cg: 'World Wi-Fi WeToken',
            slug: 'wetoken'
        },
        'trtl-turtlecoin': {
            id: 'trtl-turtlecoin',
            id_cg: 'turtlecoin',
            symbol: 'TRTL',
            symbol_cg: 'trtl',
            name: 'TurtleCoin',
            name_cg: 'TurtleCoin',
            slug: 'turtlecoin'
        },
        'ole-olive': {
            id: 'ole-olive',
            id_cg: 'olive',
            symbol: 'OLE',
            symbol_cg: 'ole',
            name: 'Olive',
            name_cg: 'Olive',
            slug: 'olive'
        },
        'nrve-narrative': {
            id: 'nrve-narrative',
            id_cg: 'narrative',
            symbol: 'NRVE',
            symbol_cg: 'nrve',
            name: 'Narrative',
            name_cg: 'Narrative',
            slug: 'narrative'
        },
        'lcs-localcoinswap': {
            id: 'lcs-localcoinswap',
            id_cg: 'localcoinswap',
            symbol: 'LCS',
            symbol_cg: 'lcs',
            name: 'LocalCoinSwap',
            name_cg: 'LocalCoinSwap',
            slug: 'local-coin-swap'
        },
        'zpr-zper': {
            id: 'zpr-zper',
            id_cg: 'zper',
            symbol: 'ZPR',
            symbol_cg: 'zpr',
            name: 'ZPER',
            name_cg: 'ZPER',
            slug: 'zper'
        },
        'vikky-vikkytoken': {
            id: 'vikky-vikkytoken',
            id_cg: 'vikkytoken',
            symbol: 'VIKKY',
            symbol_cg: 'vikky',
            name: 'VikkyToken',
            name_cg: 'VikkyToken',
            slug: 'vikkytoken'
        },
        'toto-tourist-token': {
            id: 'toto-tourist-token',
            id_cg: 'tourist-token',
            symbol: 'TOTO',
            symbol_cg: 'toto',
            name: 'Tourist Token',
            name_cg: 'Tourist Token',
            slug: 'tourist-token'
        },
        'gve-globalvillage-ecosystem': {
            id: 'gve-globalvillage-ecosystem',
            id_cg: 'globalvillage-ecosystem',
            symbol: 'GVE',
            symbol_cg: 'gve',
            name: 'Globalvillage Ecosystem',
            name_cg: 'Globalvillage Ecosystem',
            slug: 'globalvillage-ecosystem'
        },
        'lpc-lightpaycoin': {
            id: 'lpc-lightpaycoin',
            id_cg: 'lightpaycoin',
            symbol: 'LPC',
            symbol_cg: 'lpc',
            name: 'Lightpaycoin',
            name_cg: 'LightPayCoin',
            slug: 'lightpaycoin'
        },
        'empr-empowr-coin': {
            id: 'empr-empowr-coin',
            id_cg: 'empowr-coin',
            symbol: 'EMPR',
            symbol_cg: 'empr',
            name: 'empowr coin',
            name_cg: 'empowr Coin',
            slug: 'empowr-coin'
        },
        'foxt-fox-trading': {
            id: 'foxt-fox-trading',
            id_cg: 'fox-trading-token',
            symbol: 'FOXT',
            symbol_cg: 'foxt',
            name: 'Fox Trading',
            name_cg: 'Fox Trading Token',
            slug: 'fox-trading'
        },
        'view-view': {
            id: 'view-view',
            id_cg: 'viewly',
            symbol: 'VIEW',
            symbol_cg: 'view',
            name: 'View',
            name_cg: 'View',
            slug: 'view'
        },
        'chex-chex': {
            id: 'chex-chex',
            id_cg: 'chex-2',
            symbol: 'CHEX',
            symbol_cg: 'chex',
            name: 'CHEX',
            name_cg: 'CHEX',
            slug: 'chex'
        },
        'toll-bridge-protocol': {
            id: 'toll-bridge-protocol',
            id_cg: 'bridge-protocol',
            symbol: 'BRDG',
            symbol_cg: 'brdg',
            name: 'Bridge Protocol',
            name_cg: 'Bridge Protocol',
            slug: 'bridge-protocol'
        },
        'rlx-relex': {
            id: 'rlx-relex',
            id_cg: 'relex',
            symbol: 'RLX',
            symbol_cg: 'rlx',
            name: 'Relex',
            name_cg: 'Relex',
            slug: 'relex'
        },
        'nim-nimiq': {
            id: 'nim-nimiq',
            id_cg: 'nimiq-2',
            symbol: 'NIM',
            symbol_cg: 'nim',
            name: 'Nimiq',
            name_cg: 'Nimiq',
            slug: 'nimiq'
        },
        'ryo-ryo-currency': {
            id: 'ryo-ryo-currency',
            id_cg: 'ryo',
            symbol: 'RYO',
            symbol_cg: 'ryo',
            name: 'Ryo Currency',
            name_cg: 'Ryo Currency',
            slug: 'ryo-currency'
        },
        'xxx-adultchain': {
            id: 'xxx-adultchain',
            id_cg: 'adultchain',
            symbol: 'XXX',
            symbol_cg: 'xxx',
            name: 'AdultChain',
            name_cg: 'AdultChain',
            slug: 'adultchain'
        },
        'lft-linfinity': {
            id: 'lft-linfinity',
            id_cg: '',
            symbol: 'LFC',
            symbol_cg: '',
            name: 'Linfinity',
            name_cg: '',
            slug: 'linfinity'
        },
        'fundz-fundtoken': {
            id: 'fundz-fundtoken',
            id_cg: 'fundfantasy',
            symbol: 'FUNDZ',
            symbol_cg: 'fundz',
            name: 'FundToken',
            name_cg: 'FundFantasy',
            slug: 'fundtoken'
        },
        'mvl-mass-vehicle-ledger': {
            id: 'mvl-mass-vehicle-ledger',
            id_cg: 'mass-vehicle-ledger',
            symbol: 'MVL',
            symbol_cg: 'mvl',
            name: 'MVL',
            name_cg: 'MVL',
            slug: 'mvl'
        },
        'csm-consentium': {
            id: 'csm-consentium',
            id_cg: 'consentium',
            symbol: 'CSM',
            symbol_cg: 'csm',
            name: 'Consentium',
            name_cg: 'Consentium',
            slug: 'consentium'
        },
        'ncp-newton-coin-project': {
            id: 'ncp-newton-coin-project',
            id_cg: 'newton-coin-project',
            symbol: 'NCP',
            symbol_cg: 'ncp',
            name: 'Newton Coin Project',
            name_cg: 'Newton Coin Project',
            slug: 'newton-coin-project'
        },
        'wab-wabnetwork': {
            id: 'wab-wabnetwork',
            id_cg: 'wab-network',
            symbol: 'WAB',
            symbol_cg: 'wab',
            name: 'WABnetwork',
            name_cg: 'WAB Network',
            slug: 'wabnetwork'
        },
        'arb-arbitrage': {
            id: 'arb-arbitrage',
            id_cg: 'arbitraging',
            symbol: 'ARB',
            symbol_cg: 'arb',
            name: 'ARBITRAGE',
            name_cg: 'ARBITRAGE',
            slug: 'arbitrage'
        },
        'tos-thingsoperatingsystem': {
            id: 'tos-thingsoperatingsystem',
            id_cg: 'thingsoperatingsystem',
            symbol: 'TOS',
            symbol_cg: 'tos',
            name: 'ThingsOperatingSystem',
            name_cg: 'ThingsOperatingSystem',
            slug: 'thingsoperatingsystem'
        },
        'mtc-mtc-mesh-network': {
            id: 'mtc-mtc-mesh-network',
            id_cg: 'mtc-mesh-network',
            symbol: 'MTC',
            symbol_cg: 'mtc',
            name: 'MTC Mesh Network',
            name_cg: 'MTC Mesh Network',
            slug: 'mtc-mesh-network'
        },
        'nix-nix': {
            id: 'nix-nix',
            id_cg: 'nix-platform',
            symbol: 'NIX',
            symbol_cg: 'nix',
            name: 'NIX',
            name_cg: 'NIX',
            slug: 'nix'
        },
        'apl-apollo-currency': {
            id: 'apl-apollo-currency',
            id_cg: 'apollo',
            symbol: 'APL',
            symbol_cg: 'apl',
            name: 'Apollo Currency',
            name_cg: 'Apollo',
            slug: 'apollo-currency'
        },
        'bifi-bitcoin-file': {
            id: 'bifi-bitcoin-file',
            id_cg: 'bitcoin-file',
            symbol: 'BIFI',
            symbol_cg: 'bifi',
            name: 'Bitcoin File',
            name_cg: 'Bitcoin File',
            slug: 'bitcoin-file'
        },
        'web-webchain': {
            id: 'web-webchain',
            id_cg: 'webchain',
            symbol: 'WEB',
            symbol_cg: 'web',
            name: 'Webchain',
            name_cg: 'Webchain',
            slug: 'webchain'
        },
        'sbit-stackbit': {
            id: 'sbit-stackbit',
            id_cg: 'stackbit',
            symbol: 'SBIT',
            symbol_cg: 'sbit',
            name: 'StackBIT',
            name_cg: 'Stackbit',
            slug: ''
        },
        'ocp-oc-protocol': {
            id: 'ocp-oc-protocol',
            id_cg: 'oc-protocol',
            symbol: 'OCP',
            symbol_cg: 'ocp',
            name: 'OC Protocol',
            name_cg: 'OC Protocol',
            slug: ''
        },
        'cnmc-cryptonodes': {
            id: 'cnmc-cryptonodes',
            id_cg: 'cryptonodes',
            symbol: 'CNMC',
            symbol_cg: 'cnmc',
            name: 'Cryptonodes',
            name_cg: 'Cryptonodes',
            slug: ''
        },
        'mcc-moving-cloud-coin': {
            id: 'mcc-moving-cloud-coin',
            id_cg: 'moving-cloud-chain',
            symbol: 'MCC',
            symbol_cg: 'mcc',
            name: 'Moving Cloud Coin',
            name_cg: 'Moving Cloud Chain',
            slug: 'moving-cloud-coin'
        },
        'cet-coinex-token': {
            id: 'cet-coinex-token',
            id_cg: 'chaince-token',
            symbol: 'CET',
            symbol_cg: 'cet',
            name: 'CoinEx Token',
            name_cg: 'Chaince Token',
            slug: 'coinex-token'
        },
        'eurs-stasis-eurs': {
            id: 'eurs-stasis-eurs',
            id_cg: 'stasis-eurs',
            symbol: 'EURS',
            symbol_cg: 'eurs',
            name: 'STASIS EURS',
            name_cg: 'STASIS EURS',
            slug: 'stasis-eurs'
        },
        'kan-bitkan': {
            id: 'kan-bitkan',
            id_cg: 'kan',
            symbol: 'KAN',
            symbol_cg: 'kan',
            name: 'BitKan',
            name_cg: 'BitKan',
            slug: 'bitkan'
        },
        'pgn-pigeoncoin': {
            id: 'pgn-pigeoncoin',
            id_cg: 'pigeoncoin',
            symbol: 'PGN',
            symbol_cg: 'pgn',
            name: 'Pigeoncoin',
            name_cg: 'Pigeoncoin',
            slug: 'pigeoncoin'
        },
        'aced-aced': {
            id: 'aced-aced',
            id_cg: 'aced',
            symbol: 'ACED',
            symbol_cg: 'aced',
            name: 'AceD',
            name_cg: 'Aced',
            slug: 'aced'
        },
        'horus-horuspay': {
            id: 'horus-horuspay',
            id_cg: 'horuspay',
            symbol: 'HORUS',
            symbol_cg: 'horus',
            name: 'HorusPay',
            name_cg: 'HorusPay',
            slug: 'horuspay'
        },
        'cdm-condominium': {
            id: 'cdm-condominium',
            id_cg: 'condominium',
            symbol: 'CDM',
            symbol_cg: 'cdm',
            name: 'CDMCOIN',
            name_cg: 'CDMCOIN',
            slug: 'cdmcoin'
        },
        'cen-coinsuper-ecosystem-network': {
            id: 'cen-coinsuper-ecosystem-network',
            id_cg: 'centaure',
            symbol: 'CEN',
            symbol_cg: 'cen',
            name: 'Coinsuper Ecosystem Network',
            name_cg: 'Centaure',
            slug: 'centaure'
        },
        'vtho-vethor-token': {
            id: 'vtho-vethor-token',
            id_cg: 'vethor-token',
            symbol: 'VTHO',
            symbol_cg: 'vtho',
            name: 'VeThor Token',
            name_cg: 'VeThor Token',
            slug: 'vethor-token'
        },
        'kyd-know-your-developer': {
            id: 'kyd-know-your-developer',
            id_cg: 'know-your-developer',
            symbol: 'KYD',
            symbol_cg: 'kyd',
            name: 'Know Your Developer',
            name_cg: 'Know Your Developer',
            slug: ''
        },
        'atcc-atc-coin': {
            id: 'atcc-atc-coin',
            id_cg: '',
            symbol: 'ATCC',
            symbol_cg: '',
            name: 'ATC Coin',
            name_cg: '',
            slug: 'atc-coin'
        },
        'wsd-white-standard': {
            id: 'wsd-white-standard',
            id_cg: '',
            symbol: 'WSD',
            symbol_cg: '',
            name: 'White Standard',
            name_cg: '',
            slug: 'white-standard'
        },
        'vex-vexanium': {
            id: 'vex-vexanium',
            id_cg: 'vexanium',
            symbol: 'VEX',
            symbol_cg: 'vex',
            name: 'Vexanium',
            name_cg: 'Vexanium',
            slug: 'vexanium'
        },
        'nbr-niobio-cash': {
            id: 'nbr-niobio-cash',
            id_cg: 'niobio-cash',
            symbol: 'NBR',
            symbol_cg: 'nbr',
            name: 'Niobio Cash',
            name_cg: 'Niobio Cash',
            slug: 'niobio-cash'
        },
        'bitx-bitscreener-token': {
            id: 'bitx-bitscreener-token',
            id_cg: 'bitifex',
            symbol: 'BITX',
            symbol_cg: 'bitx',
            name: 'BitScreener Token',
            name_cg: 'BITIFEX',
            slug: 'bitscreener-token'
        },
        'acdc-volt': {
            id: 'acdc-volt',
            id_cg: 'volt',
            symbol: 'ACDC',
            symbol_cg: 'acdc',
            name: 'Volt',
            name_cg: 'Volt',
            slug: 'volt'
        },
        'mct-master-contract-token': {
            id: 'mct-master-contract-token',
            id_cg: 'master-contract-token',
            symbol: 'MCT',
            symbol_cg: 'mct',
            name: 'Master Contract Token',
            name_cg: 'Master Contract Token',
            slug: 'master-contract-token'
        },
        'priv-privcy': {
            id: 'priv-privcy',
            id_cg: 'privcy',
            symbol: 'PRIV',
            symbol_cg: 'priv',
            name: 'PRiVCY',
            name_cg: 'PRiVCY',
            slug: 'privcy'
        },
        'purex-pure': {
            id: 'purex-pure',
            id_cg: 'purex',
            symbol: 'PUREX',
            symbol_cg: 'purex',
            name: 'Pure',
            name_cg: 'Purex',
            slug: 'purex'
        },
        'dpn-dipnet': {
            id: 'dpn-dipnet',
            id_cg: 'dipnet',
            symbol: 'DPN',
            symbol_cg: 'dpn',
            name: 'DIPNET',
            name_cg: 'Dipnet',
            slug: 'dipnet'
        },
        'czr-canonchain': {
            id: 'czr-canonchain',
            id_cg: 'canonchain',
            symbol: 'CZR',
            symbol_cg: 'czr',
            name: 'CanonChain',
            name_cg: 'CanonChain',
            slug: 'cononchain'
        },
        'exmr-exmr': {
            id: 'exmr-exmr',
            id_cg: 'exmr-monero',
            symbol: 'EXMR',
            symbol_cg: 'exmr',
            name: 'EXMR',
            name_cg: 'EXMR',
            slug: 'exmr'
        },
        'hdac-hdac': {
            id: 'hdac-hdac',
            id_cg: 'hdac',
            symbol: 'HDAC',
            symbol_cg: 'hdac',
            name: 'Hdac',
            name_cg: 'Hyundai DAC',
            slug: 'hdac'
        },
        'kwh-kwhcoin': {
            id: 'kwh-kwhcoin',
            id_cg: 'kwhcoin',
            symbol: 'KWH',
            symbol_cg: 'kwh',
            name: 'KWHCoin',
            name_cg: 'KwhCoin',
            slug: 'kwhcoin'
        },
        'hrc-haracoin': {
            id: 'hrc-haracoin',
            id_cg: 'haracoin',
            symbol: 'HRC',
            symbol_cg: 'hrc',
            name: 'Haracoin',
            name_cg: 'Haracoin',
            slug: 'haracoin'
        },
        'zmn-zmine': {
            id: 'zmn-zmine',
            id_cg: 'zmine',
            symbol: 'ZMN',
            symbol_cg: 'zmn',
            name: 'ZMINE',
            name_cg: 'ZMINE',
            slug: 'zmine'
        },
        'bbk-brickblock': {
            id: 'bbk-brickblock',
            id_cg: 'bitblocks-project',
            symbol: 'BBK',
            symbol_cg: 'bbk',
            name: 'Brickblock',
            name_cg: 'BitBlocks',
            slug: 'bitblocks'
        },
        'ncc-neurochain': {
            id: 'ncc-neurochain',
            id_cg: 'needscoin',
            symbol: 'NCC',
            symbol_cg: 'ncc',
            name: 'NeuroChain',
            name_cg: 'NeedsCoin',
            slug: 'neurochain'
        },
        'klks-kalkulus': {
            id: 'klks-kalkulus',
            id_cg: 'kalkulus',
            symbol: 'KLKS',
            symbol_cg: 'klks',
            name: 'Kalkulus',
            name_cg: 'Kalkulus',
            slug: 'kalkulus'
        },
        'you-you-coin': {
            id: 'you-you-coin',
            id_cg: 'you-chain',
            symbol: 'YOU',
            symbol_cg: 'you',
            name: 'YOU COIN',
            name_cg: 'YOU Chain',
            slug: 'you-coin'
        },
        'aro-arionum': {
            id: 'aro-arionum',
            id_cg: 'arionum',
            symbol: 'ARO',
            symbol_cg: 'aro',
            name: 'Arionum',
            name_cg: 'Arionum',
            slug: 'arionum'
        },
        'sem-semux': {
            id: 'sem-semux',
            id_cg: 'semux',
            symbol: 'SEM',
            symbol_cg: 'sem',
            name: 'Semux',
            name_cg: 'Semux',
            slug: 'semux'
        },
        'bcv-bitcapitalvendor': {
            id: 'bcv-bitcapitalvendor',
            id_cg: 'bcv',
            symbol: 'BCV',
            symbol_cg: 'bcv',
            name: 'BitCapitalVendor',
            name_cg: 'BitCapitalVendor',
            slug: 'bitcapitalvendor'
        },
        'incx-internationalcryptox': {
            id: 'incx-internationalcryptox',
            id_cg: 'international-cryptox',
            symbol: 'INCX',
            symbol_cg: 'incx',
            name: 'InternationalCryptoX',
            name_cg: 'International CryptoX',
            slug: 'internationalcryptox'
        },
        'lxt-litex': {
            id: 'lxt-litex',
            id_cg: 'lexit',
            symbol: 'LXT',
            symbol_cg: 'lxt',
            name: 'Litex',
            name_cg: 'LEXIT',
            slug: 'litex'
        },
        'web-webcoin': {
            id: 'web-webcoin',
            id_cg: 'webchain',
            symbol: 'WEB',
            symbol_cg: 'web',
            name: 'Webcoin',
            name_cg: 'Webchain',
            slug: 'webchain'
        },
        'pc-promotion-coin': {
            id: 'pc-promotion-coin',
            id_cg: 'promotionchain',
            symbol: 'PC',
            symbol_cg: 'pc',
            name: 'Promotion Coin',
            name_cg: 'PromotionChain',
            slug: 'promotion-coin'
        },
        'ycc-yuan-chain-coin': {
            id: 'ycc-yuan-chain-coin',
            id_cg: 'yuan-chain-coin',
            symbol: 'YCC',
            symbol_cg: 'ycc',
            name: 'Yuan Chain Coin',
            name_cg: 'Yuan Chain Coin',
            slug: 'yuan-chain-coin'
        },
        'xtrd-xtrd': {
            id: 'xtrd-xtrd',
            id_cg: 'xtrade',
            symbol: 'XTRD',
            symbol_cg: 'xtrd',
            name: 'XTRD',
            name_cg: 'XTRD',
            slug: 'xtrd'
        },
        'zel-zelcash': {
            id: 'zel-zelcash',
            id_cg: 'zelcash',
            symbol: 'ZEL',
            symbol_cg: 'zel',
            name: 'ZelCash',
            name_cg: 'ZelCash',
            slug: 'zelcash'
        },
        'btcn-bitcoinote': {
            id: 'btcn-bitcoinote',
            id_cg: 'bitcoinote',
            symbol: 'BTCN',
            symbol_cg: 'btcn',
            name: 'BitcoiNote',
            name_cg: 'BitcoiNote',
            slug: 'bitcoinote'
        },
        'acre-acre': {
            id: 'acre-acre',
            id_cg: 'acrecoin',
            symbol: 'ACRE',
            symbol_cg: 'acre',
            name: 'ACRE',
            name_cg: 'Acrecoin',
            slug: 'acre'
        },
        'fmf-formosa-financial': {
            id: 'fmf-formosa-financial',
            id_cg: 'formosa-financial',
            symbol: 'FMF',
            symbol_cg: 'fmf',
            name: 'Formosa Financial',
            name_cg: 'Formosa Financial',
            slug: 'formosa-financial'
        },
        'kind-kind-ads-token': {
            id: 'kind-kind-ads-token',
            id_cg: 'kind-ads-token',
            symbol: 'KIND',
            symbol_cg: 'kind',
            name: 'Kind Ads Token',
            name_cg: 'Kind Ads Token',
            slug: 'kind-ads-token'
        },
        'dtem-dystem': {
            id: 'dtem-dystem',
            id_cg: 'dsystem',
            symbol: 'DTEM',
            symbol_cg: 'dtem',
            name: 'Dystem',
            name_cg: 'Dystem',
            slug: 'dystem'
        },
        'euno-euno': {
            id: 'euno-euno',
            id_cg: 'euno',
            symbol: 'EUNO',
            symbol_cg: 'euno',
            name: 'EUNO',
            name_cg: 'EUNO',
            slug: 'euno'
        },
        'est-esports-token': {
            id: 'est-esports-token',
            id_cg: 'esports-token',
            symbol: 'EST',
            symbol_cg: 'est',
            name: 'Esports Token',
            name_cg: 'ESports Token',
            slug: 'esports-token'
        },
        'eds-endorsit': {
            id: 'eds-endorsit',
            id_cg: 'eidas',
            symbol: 'EDS',
            symbol_cg: 'eds',
            name: 'Endorsit',
            name_cg: 'Eidas',
            slug: 'endorsit'
        },
        'bnd-blocknode': {
            id: 'bnd-blocknode',
            id_cg: 'blocknode',
            symbol: 'BND',
            symbol_cg: 'bnd',
            name: 'Blocknode',
            name_cg: 'Blocknode',
            slug: 'blocknode'
        },
        'opcx-opcoinx': {
            id: 'opcx-opcoinx',
            id_cg: 'over-powered-coin',
            symbol: 'OPCX',
            symbol_cg: 'opcx',
            name: 'OPCoinX',
            name_cg: 'Over Powered Coin',
            slug: 'opcoinx'
        },
        'ext-experience-token': {
            id: 'ext-experience-token',
            id_cg: 'exchain',
            symbol: 'EXT',
            symbol_cg: 'ext',
            name: 'Experience Token',
            name_cg: 'ExChain Token',
            slug: 'experience-token'
        },
        'btk-bitcoin-token': {
            id: 'btk-bitcoin-token',
            id_cg: 'bitcointoken',
            symbol: 'BTK',
            symbol_cg: 'btk',
            name: 'Bitcoin Turbo Koin',
            name_cg: 'Bitcoin Turbo Koin',
            slug: 'bitcoin-turbo-koin'
        },
        'eli-eligma-token': {
            id: 'eli-eligma-token',
            id_cg: 'elicoin',
            symbol: 'ELI',
            symbol_cg: 'eli',
            name: 'Eligma Token',
            name_cg: 'Elicoin',
            slug: 'eligma-token'
        },
        'bbk-bitblocks': {
            id: 'bbk-bitblocks',
            id_cg: 'bitblocks-project',
            symbol: 'BBK',
            symbol_cg: 'bbk',
            name: 'Bitblocks',
            name_cg: 'BitBlocks',
            slug: 'bitblocks'
        },
        'pts-pitiscoin': {
            id: 'pts-pitiscoin',
            id_cg: 'pitiscoin',
            symbol: 'PTS',
            symbol_cg: 'pts',
            name: 'PitisCoin',
            name_cg: 'Pitiscoin',
            slug: 'pitiscoin'
        },
        'xun-ultranote-coin': {
            id: 'xun-ultranote-coin',
            id_cg: 'ultra-note',
            symbol: 'XUN',
            symbol_cg: 'xun',
            name: 'UltraNote Coin',
            name_cg: 'UltraNote',
            slug: 'ultranote-coin'
        },
        'bti-bitcoin-instant': {
            id: 'bti-bitcoin-instant',
            id_cg: 'bitcoin-instant',
            symbol: 'BTI',
            symbol_cg: 'bti',
            name: 'Bitcoin Instant',
            name_cg: 'Bitcoin Instant',
            slug: ''
        },
        'crp-cryply': {
            id: 'crp-cryply',
            id_cg: 'cryply',
            symbol: 'CRP',
            symbol_cg: 'crp',
            name: 'Cryply',
            name_cg: 'Cranepay',
            slug: ''
        },
        'nbc-niobium-coin': {
            id: 'nbc-niobium-coin',
            id_cg: 'niobium-coin',
            symbol: 'NBC',
            symbol_cg: 'nbc',
            name: 'Niobium Coin',
            name_cg: 'Niobium Coin',
            slug: 'niobium-coin'
        },
        'gmcn-gamblecoin': {
            id: 'gmcn-gamblecoin',
            id_cg: 'gamblecoin',
            symbol: 'GMCN',
            symbol_cg: 'gmcn',
            name: 'GambleCoin',
            name_cg: 'GambleCoin',
            slug: 'gamblecoin'
        },
        'tch-thore-cash': {
            id: 'tch-thore-cash',
            id_cg: 'tchain',
            symbol: 'TCH',
            symbol_cg: 'tch',
            name: 'Thore Cash',
            name_cg: 'Tchain',
            slug: 'thore-cash'
        },
        'vin-vinchain': {
            id: 'vin-vinchain',
            id_cg: 'vinchain',
            symbol: 'VIN',
            symbol_cg: 'vin',
            name: 'VINchain',
            name_cg: 'VINchain',
            slug: 'vinchain'
        },
        'knt-kora-network-token': {
            id: 'knt-kora-network-token',
            id_cg: 'knekted',
            symbol: 'KNT',
            symbol_cg: 'knt',
            name: 'Kora Network Token',
            name_cg: 'Knekted',
            slug: 'knekted'
        },
        'btt-blocktrade-token': {
            id: 'btt-blocktrade-token',
            id_cg: 'bittorrent-2',
            symbol: 'BTT',
            symbol_cg: 'btt',
            name: 'Blocktrade Token',
            name_cg: 'BitTorrent',
            slug: 'bittorrent'
        },
        'x8x-x8x-token': {
            id: 'x8x-x8x-token',
            id_cg: 'x8-project',
            symbol: 'X8X',
            symbol_cg: 'x8x',
            name: 'X8X Token',
            name_cg: 'X8X Token',
            slug: 'x8x-token'
        },
        'xov-xovbank': {
            id: 'xov-xovbank',
            id_cg: 'xov',
            symbol: 'XOV',
            symbol_cg: 'xov',
            name: 'XOVBank',
            name_cg: 'XOVBank',
            slug: 'xovbank'
        },
        'croat-croat': {
            id: 'croat-croat',
            id_cg: 'croat',
            symbol: 'CROAT',
            symbol_cg: 'croat',
            name: 'CROAT',
            name_cg: 'CROAT',
            slug: 'croat'
        },
        'ino-ino-coin': {
            id: 'ino-ino-coin',
            id_cg: 'ino-coin',
            symbol: 'INO',
            symbol_cg: 'ino',
            name: 'INO COIN',
            name_cg: 'Ino Coin',
            slug: 'ino-coin'
        },
        'spn-sapien': {
            id: 'spn-sapien',
            id_cg: 'sapien',
            symbol: 'SPN',
            symbol_cg: 'spn',
            name: 'Sapien',
            name_cg: 'Sapien',
            slug: 'sapien'
        },
        'sld-soldo': {
            id: 'sld-soldo',
            id_cg: 'soldo',
            symbol: 'SLD',
            symbol_cg: 'sld',
            name: 'Soldo',
            name_cg: 'Soldo',
            slug: ''
        },
        'cmm-commercium': {
            id: 'cmm-commercium',
            id_cg: 'commercium',
            symbol: 'CMM',
            symbol_cg: 'cmm',
            name: 'Commercium',
            name_cg: 'Commercium',
            slug: 'commercium'
        },
        'lina-lina': {
            id: 'lina-lina',
            id_cg: 'lina',
            symbol: 'LINA',
            symbol_cg: 'lina',
            name: 'LINA',
            name_cg: 'LINA',
            slug: 'lina'
        },
        'rock2-ice-rock-mining': {
            id: 'rock2-ice-rock-mining',
            id_cg: 'ice-rock-mining',
            symbol: 'ROCK2',
            symbol_cg: 'rock2',
            name: 'ICE ROCK MINING',
            name_cg: 'Ice Rock Mining',
            slug: 'ice-rock-mining'
        },
        'wiki-wiki-token': {
            id: 'wiki-wiki-token',
            id_cg: 'wiki-token',
            symbol: 'WIKI',
            symbol_cg: 'wiki',
            name: 'Wiki Token',
            name_cg: 'Wiki Token',
            slug: 'wiki-token'
        },
        'mxm-maximine-coin': {
            id: 'mxm-maximine-coin',
            id_cg: 'maximine',
            symbol: 'MXM',
            symbol_cg: 'mxm',
            name: 'Maximine Coin',
            name_cg: 'Maximine',
            slug: 'maximine-coin'
        },
        'exc-excaliburcoin': {
            id: 'exc-excaliburcoin',
            id_cg: 'excaliburcoin',
            symbol: 'EXC',
            symbol_cg: 'exc',
            name: 'Excaliburcoin',
            name_cg: 'Excaliburcoin',
            slug: 'excaliburcoin'
        },
        'slt-social-lending-token': {
            id: 'slt-social-lending-token',
            id_cg: 'slt',
            symbol: 'SLT',
            symbol_cg: 'slt',
            name: 'Social Lending Token',
            name_cg: 'SLT',
            slug: 'social-lending-token'
        },
        'opti-optitoken': {
            id: 'opti-optitoken',
            id_cg: 'optitoken',
            symbol: 'OPTI',
            symbol_cg: 'opti',
            name: 'OptiToken',
            name_cg: 'Optitoken',
            slug: 'optitoken'
        },
        'btcone-bitcoin-one': {
            id: 'btcone-bitcoin-one',
            id_cg: 'bitcoin-one',
            symbol: 'BTCONE',
            symbol_cg: 'btcone',
            name: 'BitCoin One',
            name_cg: 'BitCoin One',
            slug: 'bitcoin-one'
        },
        'npxsxem-pundi-x-nem': {
            id: 'npxsxem-pundi-x-nem',
            id_cg: 'pundi-x-nem',
            symbol: 'NPXSXEM',
            symbol_cg: 'npxsxem',
            name: 'Pundi X NEM',
            name_cg: 'Pundi X NEM',
            slug: 'pundi-x-nem'
        },
        'xpat-bitnation': {
            id: 'xpat-bitnation',
            id_cg: 'pangea',
            symbol: 'XPAT',
            symbol_cg: 'xpat',
            name: 'Bitnation',
            name_cg: 'Pangea Arbitration Token (Bitnation)',
            slug: 'bitnation'
        },
        'scr-scorum-coins': {
            id: 'scr-scorum-coins',
            id_cg: 'scorum',
            symbol: 'SCR',
            symbol_cg: 'scr',
            name: 'Scorum Coins',
            name_cg: 'Scorum',
            slug: 'scorum-coins'
        },
        'gic-giant': {
            id: 'gic-giant',
            id_cg: 'giant',
            symbol: 'GIC',
            symbol_cg: 'gic',
            name: 'Giant',
            name_cg: 'Giant',
            slug: 'giant-coin'
        },
        'gio-graviocoin': {
            id: 'gio-graviocoin',
            id_cg: 'graviocoin',
            symbol: 'GIO',
            symbol_cg: 'gio',
            name: 'Graviocoin',
            name_cg: 'Graviocoin',
            slug: 'graviocoin'
        },
        'boc-bingocoin': {
            id: 'boc-bingocoin',
            id_cg: 'bingocoin',
            symbol: 'BOC',
            symbol_cg: 'boc',
            name: 'BingoCoin',
            name_cg: 'BingoCoin',
            slug: 'bingocoin'
        },
        'own-owndata': {
            id: 'own-owndata',
            id_cg: 'owndata',
            symbol: 'OWN',
            symbol_cg: 'own',
            name: 'OWNDATA',
            name_cg: 'OWNDATA',
            slug: 'owndata'
        },
        'inb-insight-chain': {
            id: 'inb-insight-chain',
            id_cg: 'insight-chain',
            symbol: 'INB',
            symbol_cg: 'inb',
            name: 'Insight Chain',
            name_cg: 'Insight Chain',
            slug: 'insight-chain'
        },
        'uct-ubique-chain-of-things': {
            id: 'uct-ubique-chain-of-things',
            id_cg: 'ucot',
            symbol: 'UCT',
            symbol_cg: 'uct',
            name: 'Ubique Chain Of Things',
            name_cg: 'Ubique Chain of Things (UCOT)',
            slug: 'ubique-chain-of-things'
        },
        'abdt-atlantis-blue-digital-token': {
            id: 'abdt-atlantis-blue-digital-token',
            id_cg: '',
            symbol: 'ABDT',
            symbol_cg: '',
            name: 'Atlantis Blue Digital Token',
            name_cg: '',
            slug: 'atlantis-blue-digital-token'
        },
        'icr-intercrone': {
            id: 'icr-intercrone',
            id_cg: 'intercrone',
            symbol: 'ICR',
            symbol_cg: 'icr',
            name: 'InterCrone',
            name_cg: 'InterCrone',
            slug: 'intercrone'
        },
        'pkg-pkg-token': {
            id: 'pkg-pkg-token',
            id_cg: 'pkg-token',
            symbol: 'PKG',
            symbol_cg: 'pkg',
            name: 'PKG Token',
            name_cg: 'PKG Token',
            slug: 'pkg-token'
        },
        'gse-gsenetwork': {
            id: 'gse-gsenetwork',
            id_cg: 'gsenetwork',
            symbol: 'GSE',
            symbol_cg: 'gse',
            name: 'GSENetwork',
            name_cg: 'GSENetwork',
            slug: 'gsenetwork'
        },
        'xpx-proximax': {
            id: 'xpx-proximax',
            id_cg: 'proximax',
            symbol: 'XPX',
            symbol_cg: 'xpx',
            name: 'ProximaX',
            name_cg: 'ProximaX',
            slug: 'proximax'
        },
        'arepa-arepacoin': {
            id: 'arepa-arepacoin',
            id_cg: 'arepacoin',
            symbol: 'AREPA',
            symbol_cg: 'arepa',
            name: 'Arepacoin',
            name_cg: 'Arepacoin',
            slug: 'arepacoin'
        },
        'sds-alchemint-standards': {
            id: 'sds-alchemint-standards',
            id_cg: 'alchemint',
            symbol: 'SDS',
            symbol_cg: 'sds',
            name: 'Alchemint Standards',
            name_cg: 'Alchemint',
            slug: 'alchemint-standards'
        },
        'xet-eternal-token': {
            id: 'xet-eternal-token',
            id_cg: 'eternal-token',
            symbol: 'XET',
            symbol_cg: 'xet',
            name: 'ETERNAL TOKEN',
            name_cg: 'Eternal Token',
            slug: 'eternal-token'
        },
        'ig-igtoken': {
            id: 'ig-igtoken',
            id_cg: 'igtoken',
            symbol: 'IG',
            symbol_cg: 'ig',
            name: 'IGToken',
            name_cg: 'IGToken',
            slug: 'igtoken'
        },
        'hth-help-the-homeless-coin': {
            id: 'hth-help-the-homeless-coin',
            id_cg: 'help-the-homeless-coin',
            symbol: 'HTH',
            symbol_cg: 'hth',
            name: 'Help The Homeless Coin',
            name_cg: 'Help The Homeless Coin',
            slug: ''
        },
        'tic-thingschain': {
            id: 'tic-thingschain',
            id_cg: 'ititaniumcoin',
            symbol: 'TIC',
            symbol_cg: 'tic',
            name: 'Thingschain',
            name_cg: 'ItitaniumCoin',
            slug: 'thingschain'
        },
        'get-themis': {
            id: 'get-themis',
            id_cg: 'get-token',
            symbol: 'GET',
            symbol_cg: 'get',
            name: 'Themis',
            name_cg: 'GET Protocol',
            slug: 'themis'
        },
        'nyex-nyerium': {
            id: 'nyex-nyerium',
            id_cg: 'nyerium',
            symbol: 'NYEX',
            symbol_cg: 'nyex',
            name: 'Nyerium',
            name_cg: 'Nyerium',
            slug: 'nyerium'
        },
        'egem-ethergem': {
            id: 'egem-ethergem',
            id_cg: 'ethergem',
            symbol: 'EGEM',
            symbol_cg: 'egem',
            name: 'EtherGem',
            name_cg: 'EtherGem',
            slug: 'ethergem'
        },
        'scc-siacashcoin': {
            id: 'scc-siacashcoin',
            id_cg: 'coindom',
            symbol: 'SCC',
            symbol_cg: 'scc',
            name: 'SiaCashCoin',
            name_cg: 'Stem Cell Coin',
            slug: 'siacashcoin'
        },
        'xdna-xdna': {
            id: 'xdna-xdna',
            id_cg: 'xdna',
            symbol: 'XDNA',
            symbol_cg: 'xdna',
            name: 'XDNA',
            name_cg: 'XDNA',
            slug: 'xdna'
        },
        'ntk-netkoin': {
            id: 'ntk-netkoin',
            id_cg: 'netkoin',
            symbol: 'NTK',
            symbol_cg: 'ntk',
            name: 'NetKoin',
            name_cg: 'Netkoin',
            slug: 'netkoin'
        },
        'pass-blockpass': {
            id: 'pass-blockpass',
            id_cg: 'blockpass',
            symbol: 'PASS',
            symbol_cg: 'pass',
            name: 'Blockpass',
            name_cg: 'Blockpass',
            slug: 'blockpass'
        },
        'baas-baasid': {
            id: 'baas-baasid',
            id_cg: 'baasid',
            symbol: 'BAAS',
            symbol_cg: 'baas',
            name: 'BaaSid',
            name_cg: 'BaaSid',
            slug: 'baasid'
        },
        'noku-noku': {
            id: 'noku-noku',
            id_cg: 'noku',
            symbol: 'NOKU',
            symbol_cg: 'noku',
            name: 'Noku',
            name_cg: 'Noku',
            slug: 'noku'
        },
        'qnt-quant': {
            id: 'qnt-quant',
            id_cg: 'quant-network',
            symbol: 'QNT',
            symbol_cg: 'qnt',
            name: 'Quant',
            name_cg: 'Quant',
            slug: 'quant'
        },
        'thr-thorecoin': {
            id: 'thr-thorecoin',
            id_cg: 'thorecoin',
            symbol: 'THR',
            symbol_cg: 'thr',
            name: 'ThoreCoin',
            name_cg: 'Thorecoin',
            slug: 'thorecoin'
        },
        'hyc-hycon': {
            id: 'hyc-hycon',
            id_cg: 'hycon',
            symbol: 'HYC',
            symbol_cg: 'hyc',
            name: 'HYCON',
            name_cg: 'Hycon',
            slug: 'hycon'
        },
        'dx-dxchain-token': {
            id: 'dx-dxchain-token',
            id_cg: 'dxchain',
            symbol: 'DX',
            symbol_cg: 'dx',
            name: 'DxChain Token',
            name_cg: 'DxChain Token',
            slug: 'dxchain-token'
        },
        'cyfm-cyberfm': {
            id: 'cyfm-cyberfm',
            id_cg: 'cyberfm',
            symbol: 'CYFM',
            symbol_cg: 'cyfm',
            name: 'CyberFM',
            name_cg: 'CyberFM',
            slug: 'cyberfm'
        },
        'karma-karma': {
            id: 'karma-karma',
            id_cg: 'karma-coin',
            symbol: 'KARMA',
            symbol_cg: 'karma',
            name: 'KARMA',
            name_cg: 'KARMA Coin',
            slug: 'karma'
        },
        'aka-akroma': {
            id: 'aka-akroma',
            id_cg: 'akroma',
            symbol: 'AKA',
            symbol_cg: 'aka',
            name: 'Akroma',
            name_cg: 'Akroma',
            slug: 'akroma'
        },
        'lamb-lambda': {
            id: 'lamb-lambda',
            id_cg: 'lambda',
            symbol: 'LAMB',
            symbol_cg: 'lamb',
            name: 'Lambda',
            name_cg: 'Lambda',
            slug: 'lambda'
        },
        'abl-airbloc': {
            id: 'abl-airbloc',
            id_cg: 'airbloc-protocol',
            symbol: 'ABL',
            symbol_cg: 'abl',
            name: 'Airbloc',
            name_cg: 'Airbloc',
            slug: 'airbloc'
        },
        'dac-davinci-coin': {
            id: 'dac-davinci-coin',
            id_cg: 'dacash',
            symbol: 'DAC',
            symbol_cg: 'dac',
            name: 'Davinci Coin',
            name_cg: 'DACash',
            slug: 'davinci-coin'
        },
        'zcr-zcore': {
            id: 'zcr-zcore',
            id_cg: 'zcore',
            symbol: 'ZCR',
            symbol_cg: 'zcr',
            name: 'ZCore',
            name_cg: 'ZCore',
            slug: 'zcore'
        },
        'metm-metamorph': {
            id: 'metm-metamorph',
            id_cg: 'metamorph',
            symbol: 'METM',
            symbol_cg: 'metm',
            name: 'MetaMorph',
            name_cg: 'MetaMorph',
            slug: 'metamorph'
        },
        'xap-apollon': {
            id: 'xap-apollon',
            id_cg: 'apollon',
            symbol: 'XAP',
            symbol_cg: 'xap',
            name: 'Apollon',
            name_cg: 'Apollon Network',
            slug: 'apollon'
        },
        'svd-savedroid': {
            id: 'svd-savedroid',
            id_cg: 'savedroid',
            symbol: 'SVD',
            symbol_cg: 'svd',
            name: 'savedroid',
            name_cg: 'Savedroid',
            slug: 'savedroid'
        },
        'arion-arion': {
            id: 'arion-arion',
            id_cg: 'arion',
            symbol: 'ARION',
            symbol_cg: 'arion',
            name: 'Arion',
            name_cg: 'Arion',
            slug: 'arion'
        },
        'pma-pumapay': {
            id: 'pma-pumapay',
            id_cg: 'pumapay',
            symbol: 'PMA',
            symbol_cg: 'pma',
            name: 'PumaPay',
            name_cg: 'PumaPay',
            slug: 'pumapay'
        },
        'ylc-yolocash': {
            id: 'ylc-yolocash',
            id_cg: 'yolo-cash',
            symbol: 'YLC',
            symbol_cg: 'ylc',
            name: 'YoloCash',
            name_cg: 'YOLOCash',
            slug: 'yolocash'
        },
        'ifp-infinipay': {
            id: 'ifp-infinipay',
            id_cg: 'infinipay',
            symbol: 'IFP',
            symbol_cg: 'ifp',
            name: 'Infinipay',
            name_cg: 'Infinipay',
            slug: 'infinipay'
        },
        'xbi-bitcoin-incognito': {
            id: 'xbi-bitcoin-incognito',
            id_cg: 'bitcoin-incognito',
            symbol: 'XBI',
            symbol_cg: 'xbi',
            name: 'Bitcoin Incognito',
            name_cg: 'Bitcoin Incognito',
            slug: 'bitcoin-incognito'
        },
        'food-foodcoin': {
            id: 'food-foodcoin',
            id_cg: 'foodcoin',
            symbol: 'FOOD',
            symbol_cg: 'food',
            name: 'FoodCoin',
            name_cg: 'FoodCoin',
            slug: ''
        },
        'lgs-logiscoin': {
            id: 'lgs-logiscoin',
            id_cg: 'logiscoin',
            symbol: 'LGS',
            symbol_cg: 'lgs',
            name: 'LogisCoin',
            name_cg: 'LogisCoin',
            slug: 'logiscoin'
        },
        'vitae-vitae': {
            id: 'vitae-vitae',
            id_cg: 'vitae',
            symbol: 'VITAE',
            symbol_cg: 'vitae',
            name: 'Vitae',
            name_cg: 'Vitae',
            slug: 'vitae'
        },
        'fntb-fintab': {
            id: 'fntb-fintab',
            id_cg: 'fintab',
            symbol: 'FNTB',
            symbol_cg: 'fntb',
            name: 'Fintab',
            name_cg: 'FinTab',
            slug: 'fintab'
        },
        'hyb-hybrid-block': {
            id: 'hyb-hybrid-block',
            id_cg: 'hybridblock',
            symbol: 'HYB',
            symbol_cg: 'hyb',
            name: 'Hybrid Block',
            name_cg: 'HybridBlock',
            slug: 'hybrid-block'
        },
        'hb-heartbout': {
            id: 'hb-heartbout',
            id_cg: 'heartbout',
            symbol: 'HB',
            symbol_cg: 'hb',
            name: 'HeartBout',
            name_cg: 'HeartBout',
            slug: 'heartbout'
        },
        'bws-bitcoin-w-spectrum': {
            id: 'bws-bitcoin-w-spectrum',
            id_cg: 'bitcoin-w-spectrum',
            symbol: 'BWS',
            symbol_cg: 'bws',
            name: 'Bitcoin W Spectrum',
            name_cg: 'Bitcoin W Spectrum',
            slug: 'bitcoin-w-spectrum'
        },
        'abx-arbidex': {
            id: 'abx-arbidex',
            id_cg: 'arbidex',
            symbol: 'ABX',
            symbol_cg: 'abx',
            name: 'Arbidex',
            name_cg: 'Arbidex',
            slug: 'arbidex'
        },
        'hand-showhand': {
            id: 'hand-showhand',
            id_cg: 'showhand',
            symbol: 'HAND',
            symbol_cg: 'hand',
            name: 'ShowHand',
            name_cg: 'ShowHand',
            slug: 'showhand'
        },
        'comp-compound-coin': {
            id: 'comp-compound-coin',
            id_cg: 'compound',
            symbol: 'COMP',
            symbol_cg: 'comp',
            name: 'Compound Coin',
            name_cg: 'Compound Coin',
            slug: ''
        },
        'hit-hitchain': {
            id: 'hit-hitchain',
            id_cg: 'hitchain',
            symbol: 'HIT',
            symbol_cg: 'hit',
            name: 'HitChain',
            name_cg: 'HitChain',
            slug: 'hitchain'
        },
        'gpkr-gold-poker': {
            id: 'gpkr-gold-poker',
            id_cg: 'gold-poker',
            symbol: 'GPKR',
            symbol_cg: 'gpkr',
            name: 'Gold Poker',
            name_cg: 'Gold Poker',
            slug: 'gold-poker'
        },
        'seal-seal-network': {
            id: 'seal-seal-network',
            id_cg: 'seal',
            symbol: 'SEAL',
            symbol_cg: 'seal',
            name: 'Seal Network',
            name_cg: 'Seal Network',
            slug: 'seal-network'
        },
        'mftu-mainstream-for-the-underground': {
            id: 'mftu-mainstream-for-the-underground',
            id_cg: 'mainstream-for-the-underground',
            symbol: 'MFTU',
            symbol_cg: 'mftu',
            name: 'Mainstream For The Underground',
            name_cg: 'Mainstream For The Underground',
            slug: 'mainstream-for-the-underground'
        },
        'cato-catocoin': {
            id: 'cato-catocoin',
            id_cg: 'catocoin',
            symbol: 'CATO',
            symbol_cg: 'cato',
            name: 'CatoCoin',
            name_cg: 'CatoCoin',
            slug: 'catocoin'
        },
        'zp-zen-protocol': {
            id: 'zp-zen-protocol',
            id_cg: 'zen-protocol',
            symbol: 'ZP',
            symbol_cg: 'zp',
            name: 'Zen Protocol',
            name_cg: 'Zen Protocol',
            slug: 'zen-protocol'
        },
        'rtl-rentledger': {
            id: 'rtl-rentledger',
            id_cg: 'rentledger',
            symbol: 'RTL',
            symbol_cg: 'rtl',
            name: 'Rentledger',
            name_cg: 'Rentledger',
            slug: ''
        },
        'rating-dprating': {
            id: 'rating-dprating',
            id_cg: 'dprating',
            symbol: 'RATING',
            symbol_cg: 'rating',
            name: 'DPRating',
            name_cg: 'DPRating',
            slug: 'dprating'
        },
        'obt-orbis-token': {
            id: 'obt-orbis-token',
            id_cg: 'orbis-token',
            symbol: 'OBT',
            symbol_cg: 'obt',
            name: 'Orbis Token',
            name_cg: 'Orbis Token',
            slug: 'orbis-token'
        },
        'aux-auxilium': {
            id: 'aux-auxilium',
            id_cg: 'auxilium',
            symbol: 'AUX',
            symbol_cg: 'aux',
            name: 'Auxilium',
            name_cg: 'Auxilium',
            slug: 'auxilium'
        },
        'mib-mib-coin': {
            id: 'mib-mib-coin',
            id_cg: 'mib-coin',
            symbol: 'MIB',
            symbol_cg: 'mib',
            name: 'MIB Coin',
            name_cg: 'MIB Coin',
            slug: 'mib-coin'
        },
        'kxc-kingxchain': {
            id: 'kxc-kingxchain',
            id_cg: 'kingxchain',
            symbol: 'KXC',
            symbol_cg: 'kxc',
            name: 'KingXChain',
            name_cg: 'KingXChain',
            slug: 'kingxchain'
        },
        'cbc-cashbery-coin': {
            id: 'cbc-cashbery-coin',
            id_cg: 'cashbery-coin',
            symbol: 'CBC',
            symbol_cg: 'cbc',
            name: 'Cashbery Coin',
            name_cg: 'Cashbery Coin',
            slug: 'cashbery-coin'
        },
        'qno-qyno': {
            id: 'qno-qyno',
            id_cg: 'qyno',
            symbol: 'QNO',
            symbol_cg: 'qno',
            name: 'QYNO',
            name_cg: 'QYNO',
            slug: 'qyno'
        },
        'nsd-nasdacoin': {
            id: 'nsd-nasdacoin',
            id_cg: 'nasdacoin',
            symbol: 'NSD',
            symbol_cg: 'nsd',
            name: 'Nasdacoin',
            name_cg: 'Nasdacoin',
            slug: 'nasdacoin'
        },
        'lobs-lobstex': {
            id: 'lobs-lobstex',
            id_cg: 'lobstex-coin',
            symbol: 'LOBS',
            symbol_cg: 'lobs',
            name: 'Lobstex',
            name_cg: 'LOBSTEX Coin',
            slug: 'lobstex'
        },
        'vdg-veridocglobal': {
            id: 'vdg-veridocglobal',
            id_cg: 'veridocglobal',
            symbol: 'VDG',
            symbol_cg: 'vdg',
            name: 'VeriDocGlobal',
            name_cg: 'VeriDocGlobal',
            slug: 'veridocglobal'
        },
        'ong-ong': {
            id: 'ong-ong',
            id_cg: 'ong',
            symbol: 'ONG',
            symbol_cg: 'ong',
            name: 'Ontology Gas',
            name_cg: 'Ontology Gas',
            slug: 'ontology-gas'
        },
        'soniq-soniq': {
            id: 'soniq-soniq',
            id_cg: 'soniq',
            symbol: 'SONIQ',
            symbol_cg: 'soniq',
            name: 'Soniq',
            name_cg: 'Soniq',
            slug: ''
        },
        'more-mithril-ore': {
            id: 'more-mithril-ore',
            id_cg: 'legends-room',
            symbol: 'MORE',
            symbol_cg: 'more',
            name: 'Mithril Ore',
            name_cg: 'Legends Room',
            slug: 'mithril-ore'
        },
        'nrg-energi': {
            id: 'nrg-energi',
            id_cg: 'energi',
            symbol: 'NRG',
            symbol_cg: 'nrg',
            name: 'Energi',
            name_cg: 'Energi',
            slug: 'energi'
        },
        'gtm-gentarium': {
            id: 'gtm-gentarium',
            id_cg: 'gentarium',
            symbol: 'GTM',
            symbol_cg: 'gtm',
            name: 'Gentarium',
            name_cg: 'Gentarium',
            slug: 'gentarium'
        },
        'dav-dav-coin': {
            id: 'dav-dav-coin',
            id_cg: 'dav',
            symbol: 'DAV',
            symbol_cg: 'dav',
            name: 'DAV Coin',
            name_cg: 'DAV Network',
            slug: 'dav-coin'
        },
        'know-know': {
            id: 'know-know',
            id_cg: 'know',
            symbol: 'KNOW',
            symbol_cg: 'know',
            name: 'KNOW',
            name_cg: 'KNOW',
            slug: 'know'
        },
        'ftxt-futurax': {
            id: 'ftxt-futurax',
            id_cg: 'futurax',
            symbol: 'FTXT',
            symbol_cg: 'ftxt',
            name: 'FUTURAX',
            name_cg: 'FUTURAX',
            slug: 'futurax'
        },
        'delta-deltachain': {
            id: 'delta-deltachain',
            id_cg: 'deltachain',
            symbol: 'DELTA',
            symbol_cg: 'delta',
            name: 'DeltaChain',
            name_cg: 'DeltaChain',
            slug: 'delta-chain'
        },
        'vulc-vulcano': {
            id: 'vulc-vulcano',
            id_cg: 'vulcano',
            symbol: 'VULC',
            symbol_cg: 'vulc',
            name: 'VULCANO',
            name_cg: 'Vulcano',
            slug: 'vulcano'
        },
        'qbit-qubitica': {
            id: 'qbit-qubitica',
            id_cg: 'qubitica',
            symbol: 'QBIT',
            symbol_cg: 'qbit',
            name: 'Qubitica',
            name_cg: 'Qubitica',
            slug: 'qubitica'
        },
        'dow-dowcoin': {
            id: 'dow-dowcoin',
            id_cg: 'dowcoin',
            symbol: 'DOW',
            symbol_cg: 'dow',
            name: 'DOWCOIN',
            name_cg: 'Dowcoin',
            slug: 'dowcoin'
        },
        'bnc-bionic': {
            id: 'bnc-bionic',
            id_cg: 'bionic',
            symbol: 'BNC',
            symbol_cg: 'bnc',
            name: 'Bionic',
            name_cg: 'Bionic',
            slug: 'bionic'
        },
        'tac-traceability-chain': {
            id: 'tac-traceability-chain',
            id_cg: 'traceability-chain',
            symbol: 'TAC',
            symbol_cg: 'tac',
            name: 'Traceability Chain',
            name_cg: 'Traceability Chain',
            slug: 'traceability-chain'
        },
        'cen-centaure': {
            id: 'cen-centaure',
            id_cg: 'centaure',
            symbol: 'CEN',
            symbol_cg: 'cen',
            name: 'Centaure',
            name_cg: 'Centaure',
            slug: 'centaure'
        },
        'pdx-payday-coin': {
            id: 'pdx-payday-coin',
            id_cg: 'payday-coin',
            symbol: 'PDX',
            symbol_cg: 'pdx',
            name: 'PayDay Coin',
            name_cg: 'PayDay Coin',
            slug: 'payday-coin'
        },
        'win-wintoken': {
            id: 'win-wintoken',
            id_cg: 'tronwin',
            symbol: 'WIN',
            symbol_cg: 'win',
            name: 'WinToken',
            name_cg: 'TronWin',
            slug: 'wintoken'
        },
        'tmc-timicoin': {
            id: 'tmc-timicoin',
            id_cg: 'timicoin',
            symbol: 'TMC',
            symbol_cg: 'tmc',
            name: 'Timicoin',
            name_cg: 'Timicoin',
            slug: ''
        },
        'xra-xriba': {
            id: 'xra-xriba',
            id_cg: 'ratecoin',
            symbol: 'XRA',
            symbol_cg: 'xra',
            name: 'Xriba',
            name_cg: 'Ratecoin',
            slug: 'ratecoin'
        },
        'at-abcc-token': {
            id: 'at-abcc-token',
            id_cg: 'abcc-token',
            symbol: 'AT',
            symbol_cg: 'at',
            name: 'ABCC Token',
            name_cg: 'ABCC Token',
            slug: 'abcc-token'
        },
        'bqt-blockchain-quotations-index-token': {
            id: 'bqt-blockchain-quotations-index-token',
            id_cg: 'blockchain-quotations-index-token',
            symbol: 'BQT',
            symbol_cg: 'bqt',
            name: 'Blockchain Quotations Index Token',
            name_cg: 'Blockchain Quotations Index Token',
            slug: 'blockchain-quotations-index-token'
        },
        'flm-folmcoin': {
            id: 'flm-folmcoin',
            id_cg: 'folm',
            symbol: 'FLM',
            symbol_cg: 'flm',
            name: 'FolmCoin',
            name_cg: 'Folm',
            slug: 'folmcoin'
        },
        'str-staker': {
            id: 'str-staker',
            id_cg: 'staker',
            symbol: 'STR',
            symbol_cg: 'str',
            name: 'Staker',
            name_cg: 'Staker Token',
            slug: 'staker'
        },
        'bbs-bbscoin': {
            id: 'bbs-bbscoin',
            id_cg: 'bbscoin',
            symbol: 'BBS',
            symbol_cg: 'bbs',
            name: 'BBSCoin',
            name_cg: 'BBSCoin',
            slug: 'bbscoin'
        },
        'peng-penguin-coin': {
            id: 'peng-penguin-coin',
            id_cg: 'penguin',
            symbol: 'PENG',
            symbol_cg: 'peng',
            name: 'PENG',
            name_cg: 'PENG',
            slug: 'peng'
        },
        'ubc-ubcoin-market': {
            id: 'ubc-ubcoin-market',
            id_cg: 'ubcoin-market',
            symbol: 'UBC',
            symbol_cg: 'ubc',
            name: 'Ubcoin Market',
            name_cg: 'Ubcoin Market',
            slug: 'ubcoin-market'
        },
        'ali-ailink-token': {
            id: 'ali-ailink-token',
            id_cg: 'ailink-token',
            symbol: 'ALI',
            symbol_cg: 'ali',
            name: 'AiLink Token',
            name_cg: 'AiLink Token',
            slug: 'ailink-token'
        },
        'use-usechain-token': {
            id: 'use-usechain-token',
            id_cg: 'usechain',
            symbol: 'USE',
            symbol_cg: 'use',
            name: 'Usechain Token',
            name_cg: 'Usechain',
            slug: 'usechain-token'
        },
        'flot-fire-lotto': {
            id: 'flot-fire-lotto',
            id_cg: 'fire-lotto',
            symbol: 'FLOT',
            symbol_cg: 'flot',
            name: 'Fire Lotto',
            name_cg: 'Fire Lotto',
            slug: 'fire-lotto'
        },
        'zba-zoomba': {
            id: 'zba-zoomba',
            id_cg: 'zoomba',
            symbol: 'ZBA',
            symbol_cg: 'zba',
            name: 'Zoomba',
            name_cg: 'Zoomba',
            slug: 'zoomba'
        },
        'mic-mindexcoin': {
            id: 'mic-mindexcoin',
            id_cg: 'mindexcoin',
            symbol: 'MIC',
            symbol_cg: 'mic',
            name: 'Mindexcoin',
            name_cg: 'Mindexcoin',
            slug: 'mindexcoin'
        },
        'got-parkingo': {
            id: 'got-parkingo',
            id_cg: 'goeureka',
            symbol: 'GOT',
            symbol_cg: 'got',
            name: 'ParkinGo',
            name_cg: 'GOeureka',
            slug: 'parkingo'
        },
        'she-shinechain': {
            id: 'she-shinechain',
            id_cg: 'shinechain',
            symbol: 'SHE',
            symbol_cg: 'she',
            name: 'ShineChain',
            name_cg: 'ShineChain',
            slug: 'shinechain'
        },
        'beet-beetle-coin': {
            id: 'beet-beetle-coin',
            id_cg: 'beetle-coin',
            symbol: 'BEET',
            symbol_cg: 'beet',
            name: 'Beetle Coin',
            name_cg: 'Beetle Coin',
            slug: 'beetle-coin'
        },
        'ut-ulord': {
            id: 'ut-ulord',
            id_cg: 'ulord',
            symbol: 'UT',
            symbol_cg: 'ut',
            name: 'Ulord',
            name_cg: 'Ulord',
            slug: 'ulord'
        },
        'black-eosblack': {
            id: 'black-eosblack',
            id_cg: 'eosblack',
            symbol: 'BLACK',
            symbol_cg: 'black',
            name: 'eosBLACK',
            name_cg: 'eosBLACK',
            slug: 'eosblack'
        },
        'btr-bitether': {
            id: 'btr-bitether',
            id_cg: 'bitether',
            symbol: 'BTR',
            symbol_cg: 'btr',
            name: 'Bitether',
            name_cg: 'Bitether',
            slug: 'bitether'
        },
        'cymt-cybermusic': {
            id: 'cymt-cybermusic',
            id_cg: 'cybermusic',
            symbol: 'CYMT',
            symbol_cg: 'cymt',
            name: 'CyberMusic',
            name_cg: 'CyberMusic',
            slug: 'cybermusic'
        },
        'mri-mirai': {
            id: 'mri-mirai',
            id_cg: 'mirai',
            symbol: 'MRI',
            symbol_cg: 'mri',
            name: 'Mirai',
            name_cg: 'Mirai',
            slug: 'mirai'
        },
        'but-bitup-token': {
            id: 'but-bitup-token',
            id_cg: 'bitup-token',
            symbol: 'BUT',
            symbol_cg: 'but',
            name: 'BitUP Token',
            name_cg: 'BitUP Token',
            slug: 'bitup-token'
        },
        'gze-gazecoin': {
            id: 'gze-gazecoin',
            id_cg: 'gazecoin',
            symbol: 'GZE',
            symbol_cg: 'gze',
            name: 'GazeCoin',
            name_cg: 'GazeCoin',
            slug: 'gazecoin'
        },
        'ccl-cyclean': {
            id: 'ccl-cyclean',
            id_cg: 'cyclean',
            symbol: 'CCL',
            symbol_cg: 'ccl',
            name: 'CYCLEAN',
            name_cg: 'CyClean',
            slug: 'cyclean'
        },
        'amo-amo-coin': {
            id: 'amo-amo-coin',
            id_cg: 'amo',
            symbol: 'AMO',
            symbol_cg: 'amo',
            name: 'AMO Coin',
            name_cg: 'AMO Coin',
            slug: 'amo-coin'
        },
        'evn-evencoin': {
            id: 'evn-evencoin',
            id_cg: 'envion',
            symbol: 'EVN',
            symbol_cg: 'evn',
            name: 'EvenCoin',
            name_cg: 'Envion',
            slug: 'envion'
        },
        'uc-youlive-coin': {
            id: 'uc-youlive-coin',
            id_cg: 'youlive-coin',
            symbol: 'UC',
            symbol_cg: 'uc',
            name: 'YouLive Coin',
            name_cg: 'YouLive Coin',
            slug: 'youlive-coin'
        },
        'din-dinero': {
            id: 'din-dinero',
            id_cg: 'dinero',
            symbol: 'DIN',
            symbol_cg: 'din',
            name: 'Dinero',
            name_cg: 'Dinero',
            slug: 'dinero'
        },
        'prj-project-coin': {
            id: 'prj-project-coin',
            id_cg: 'project-coin',
            symbol: 'PRJ',
            symbol_cg: 'prj',
            name: 'Project Coin',
            name_cg: 'Project Coin',
            slug: 'project-coin'
        },
        'dit-digital-insurance-token': {
            id: 'dit-digital-insurance-token',
            id_cg: 'ditcoin',
            symbol: 'DIT',
            symbol_cg: 'dit',
            name: 'Digital Insurance Token',
            name_cg: 'Ditcoin',
            slug: 'digital-insurance-token'
        },
        'havy-havy': {
            id: 'havy-havy',
            id_cg: 'havy-2',
            symbol: 'HAVY',
            symbol_cg: 'havy',
            name: 'Havy',
            name_cg: 'Havy',
            slug: 'havy'
        },
        'care-carebit': {
            id: 'care-carebit',
            id_cg: 'carebit',
            symbol: 'CARE',
            symbol_cg: 'care',
            name: 'Carebit',
            name_cg: 'Carebit',
            slug: 'carebit'
        },
        'c2p-coin2play': {
            id: 'c2p-coin2play',
            id_cg: 'coin2play',
            symbol: 'C2P',
            symbol_cg: 'c2p',
            name: 'Coin2Play',
            name_cg: 'Coin2Play',
            slug: 'coin2play'
        },
        'c8-carboneum-c8-token': {
            id: 'c8-carboneum-c8-token',
            id_cg: 'carboneum',
            symbol: 'C8',
            symbol_cg: 'c8',
            name: 'Carboneum [C8] Token',
            name_cg: 'Carboneum',
            slug: 'carboneum-c8-token'
        },
        'vsc-vsportcoin': {
            id: 'vsc-vsportcoin',
            id_cg: 'vsportcoin',
            symbol: 'VSC',
            symbol_cg: 'vsc',
            name: 'vSportCoin',
            name_cg: 'vSportCoin',
            slug: 'vsportcoin'
        },
        'sno-savenode': {
            id: 'sno-savenode',
            id_cg: 'savenode',
            symbol: 'SNO',
            symbol_cg: 'sno',
            name: 'SaveNode',
            name_cg: 'savenode',
            slug: 'savenode'
        },
        'imp-ether-kingdoms-token': {
            id: 'imp-ether-kingdoms-token',
            id_cg: 'ether-kingdoms-token',
            symbol: 'IMP',
            symbol_cg: 'imp',
            name: 'Ether Kingdoms Token',
            name_cg: 'Ether Kingdoms Token',
            slug: 'ether-kingdoms-token'
        },
        'iq-iqcash': {
            id: 'iq-iqcash',
            id_cg: 'everipedia',
            symbol: 'IQ',
            symbol_cg: 'iq',
            name: 'IQ.cash',
            name_cg: 'Everipedia',
            slug: 'everipedia'
        },
        'rth-rotharium': {
            id: 'rth-rotharium',
            id_cg: 'rotharium',
            symbol: 'RTH',
            symbol_cg: 'rth',
            name: 'Rotharium',
            name_cg: 'Rotharium',
            slug: 'rotharium'
        },
        'qntu-quanta-utility-token': {
            id: 'qntu-quanta-utility-token',
            id_cg: 'qntu',
            symbol: 'QNTU',
            symbol_cg: 'qntu',
            name: 'Quanta Utility Token',
            name_cg: 'Quanta',
            slug: 'quanta-utility-token'
        },
        'ret-realtract': {
            id: 'ret-realtract',
            id_cg: 'realtract',
            symbol: 'RET',
            symbol_cg: 'ret',
            name: 'RealTract',
            name_cg: 'RealTract',
            slug: 'realtract'
        },
        'mex-mex': {
            id: 'mex-mex',
            id_cg: 'mex',
            symbol: 'MEX',
            symbol_cg: 'mex',
            name: 'MEX',
            name_cg: 'MEX',
            slug: 'mex'
        },
        'bir-birake': {
            id: 'bir-birake',
            id_cg: 'birake',
            symbol: 'BIR',
            symbol_cg: 'bir',
            name: 'Birake',
            name_cg: 'Birake',
            slug: 'birake'
        },
        'foin-foin': {
            id: 'foin-foin',
            id_cg: 'foincoin',
            symbol: 'FOIN',
            symbol_cg: 'foin',
            name: 'FOIN',
            name_cg: 'Foin',
            slug: 'foin'
        },
        'tv-ti-value': {
            id: 'tv-ti-value',
            id_cg: 'ti-value',
            symbol: 'TV',
            symbol_cg: 'tv',
            name: 'Ti-Value',
            name_cg: 'Ti-Value',
            slug: 'ti-value'
        },
        'btxc-bettex-coin': {
            id: 'btxc-bettex-coin',
            id_cg: 'bettex-coin',
            symbol: 'BTXC',
            symbol_cg: 'btxc',
            name: 'Bettex Coin',
            name_cg: 'Bettex coin',
            slug: 'bettex-coin'
        },
        'aaa-abulaba': {
            id: 'aaa-abulaba',
            id_cg: 'abulaba',
            symbol: 'AAA',
            symbol_cg: 'aaa',
            name: 'Abulaba',
            name_cg: 'Abulaba',
            slug: 'abulaba'
        },
        'elli-elliot-coin': {
            id: 'elli-elliot-coin',
            id_cg: 'elliotcoin',
            symbol: 'ELLI',
            symbol_cg: 'elli',
            name: 'Elliot Coin',
            name_cg: 'Elliotcoin',
            slug: 'elliot-coin'
        },
        'bu-bumo': {
            id: 'bu-bumo',
            id_cg: 'bumo',
            symbol: 'BU',
            symbol_cg: 'bu',
            name: 'BUMO',
            name_cg: 'BUMO',
            slug: 'bumo'
        },
        'gene-gene-source-code-chain': {
            id: 'gene-gene-source-code-chain',
            id_cg: 'gene-source-code-token',
            symbol: 'GENE',
            symbol_cg: 'gene',
            name: 'Gene Source Code Chain',
            name_cg: 'Gene Source Code Token',
            slug: 'gene-source-code-chain'
        },
        'btad-bitcoin-adult': {
            id: 'btad-bitcoin-adult',
            id_cg: 'bitcoin-adult',
            symbol: 'BTAD',
            symbol_cg: 'btad',
            name: 'Bitcoin Adult',
            name_cg: 'Bitcoin Adult',
            slug: 'bitcoin-adult'
        },
        'olmp-olympic': {
            id: 'olmp-olympic',
            id_cg: 'olympic-coin',
            symbol: 'OLMP',
            symbol_cg: 'olmp',
            name: 'Olympic',
            name_cg: 'Olympic Coin',
            slug: 'olympic'
        },
        'ptm-potentiam': {
            id: 'ptm-potentiam',
            id_cg: 'potentiam',
            symbol: 'PTM',
            symbol_cg: 'ptm',
            name: 'Potentiam',
            name_cg: 'Potentiam',
            slug: ''
        },
        'rap-rapture': {
            id: 'rap-rapture',
            id_cg: 'rapture',
            symbol: 'RAP',
            symbol_cg: 'rap',
            name: 'RAPTURE',
            name_cg: 'Rapture',
            slug: ''
        },
        'traid-traid': {
            id: 'traid-traid',
            id_cg: 'traid',
            symbol: 'TRAID',
            symbol_cg: 'traid',
            name: 'Traid',
            name_cg: 'Traid',
            slug: 'traid'
        },
        'cfl-cryptoflow': {
            id: 'cfl-cryptoflow',
            id_cg: 'cryptoflow',
            symbol: 'CFL',
            symbol_cg: 'cfl',
            name: 'CryptoFlow',
            name_cg: 'Cryptoflow',
            slug: 'cryptoflow'
        },
        'mac-matrexcoin': {
            id: 'mac-matrexcoin',
            id_cg: 'machinecoin',
            symbol: 'MAC',
            symbol_cg: 'mac',
            name: 'Matrexcoin',
            name_cg: 'Machinecoin',
            slug: 'matrexcoin'
        },
        'edn-eden': {
            id: 'edn-eden',
            id_cg: 'edenchain',
            symbol: 'EDN',
            symbol_cg: 'edn',
            name: 'Eden',
            name_cg: 'Edenchain',
            slug: 'eden'
        },
        'ihf-invictus-hyperion-fund': {
            id: 'ihf-invictus-hyperion-fund',
            id_cg: 'invictus-hyprion-fund',
            symbol: 'IHF',
            symbol_cg: 'ihf',
            name: 'Invictus Hyperion Fund',
            name_cg: 'Invictus Hyperion Fund',
            slug: 'invictus-hyperion-fund'
        },
        'urals-uralscoin': {
            id: 'urals-uralscoin',
            id_cg: 'uralscoin',
            symbol: 'URALS',
            symbol_cg: 'urals',
            name: 'UralsCoin',
            name_cg: 'Uralscoin',
            slug: 'uralscoin'
        },
        'joint-joint-ventures': {
            id: 'joint-joint-ventures',
            id_cg: 'joint',
            symbol: 'JOINT',
            symbol_cg: 'joint',
            name: 'Joint Ventures',
            name_cg: 'Joint Ventures',
            slug: 'joint-ventures'
        },
        'molk-mobilinktoken': {
            id: 'molk-mobilinktoken',
            id_cg: 'mobilink-coin',
            symbol: 'MOLK',
            symbol_cg: 'molk',
            name: 'MobilinkToken',
            name_cg: 'MobilinkToken',
            slug: 'mobilinktoken'
        },
        'spnd-spendcoin': {
            id: 'spnd-spendcoin',
            id_cg: 'spendcoin',
            symbol: 'SPND',
            symbol_cg: 'spnd',
            name: 'Spendcoin',
            name_cg: 'Spendcoin',
            slug: 'spendcoin'
        },
        'cstl-castle': {
            id: 'cstl-castle',
            id_cg: 'cstl',
            symbol: 'CSTL',
            symbol_cg: 'cstl',
            name: 'Castle',
            name_cg: 'Castle',
            slug: 'castle'
        },
        'evi-evimeria': {
            id: 'evi-evimeria',
            id_cg: 'evimeria',
            symbol: 'EVI',
            symbol_cg: 'evi',
            name: 'Evimeria',
            name_cg: 'Evimeria',
            slug: 'evimeria'
        },
        'bolt-bolt': {
            id: 'bolt-bolt',
            id_cg: 'bolt',
            symbol: 'BOLT',
            symbol_cg: 'bolt',
            name: 'BOLT',
            name_cg: 'Bolt',
            slug: 'bolt'
        },
        'lkn-linkcoin-token': {
            id: 'lkn-linkcoin-token',
            id_cg: 'linkcoin-token',
            symbol: 'LKN',
            symbol_cg: 'lkn',
            name: 'LinkCoin Token',
            name_cg: 'LinkCoin Token',
            slug: ''
        },
        'hwi-hawaii': {
            id: 'hwi-hawaii',
            id_cg: 'hawaii-coin',
            symbol: 'HWI',
            symbol_cg: 'hwi',
            name: 'Hawaii',
            name_cg: 'Hawaii Coin',
            slug: ''
        },
        'aog-smartofgiving': {
            id: 'aog-smartofgiving',
            id_cg: 'smartofgiving',
            symbol: 'AOG',
            symbol_cg: 'aog',
            name: 'smARTOFGIVING',
            name_cg: 'smARTOFGIVING',
            slug: 'smartofgiving'
        },
        'ctrt-cryptrust': {
            id: 'ctrt-cryptrust',
            id_cg: 'cryptrust',
            symbol: 'CTRT',
            symbol_cg: 'ctrt',
            name: 'Cryptrust',
            name_cg: 'Cryptrust',
            slug: 'cryptrust'
        },
        'boxx-boxx-token-blockparty': {
            id: 'boxx-boxx-token-blockparty',
            id_cg: 'boxx',
            symbol: 'BOXX',
            symbol_cg: 'boxx',
            name: 'Blockparty (BOXX Token)',
            name_cg: 'Blockparty',
            slug: 'blockparty-boxx-token'
        },
        'che-crypto-harbor-exchange': {
            id: 'che-crypto-harbor-exchange',
            id_cg: 'cryptoharbor',
            symbol: 'CHE',
            symbol_cg: 'che',
            name: 'Crypto Harbor Exchange',
            name_cg: 'Crypto Harbor',
            slug: 'crypto-harbor-exchange'
        },
        'six-six': {
            id: 'six-six',
            id_cg: 'six-network',
            symbol: 'SIX',
            symbol_cg: 'six',
            name: 'SIX',
            name_cg: 'SIX Network',
            slug: 'six'
        },
        'rox-robotina': {
            id: 'rox-robotina',
            id_cg: 'robotina',
            symbol: 'ROX',
            symbol_cg: 'rox',
            name: 'Robotina',
            name_cg: 'Robotina',
            slug: 'robotina'
        },
        'cmit-cmitcoin': {
            id: 'cmit-cmitcoin',
            id_cg: 'cmitcoin',
            symbol: 'CMIT',
            symbol_cg: 'cmit',
            name: 'CMITCOIN',
            name_cg: 'CMITCOIN',
            slug: 'cmitcoin'
        },
        'plus1-plusonecoin': {
            id: 'plus1-plusonecoin',
            id_cg: 'plusonecoin',
            symbol: 'PLUS1',
            symbol_cg: 'plus1',
            name: 'PlusOneCoin',
            name_cg: 'PlusOneCoin',
            slug: 'plusonecoin'
        },
        'vlu-valuto': {
            id: 'vlu-valuto',
            id_cg: 'valuto',
            symbol: 'VLU',
            symbol_cg: 'vlu',
            name: 'Valuto',
            name_cg: 'Valuto',
            slug: 'valuto'
        },
        'goss-gossipcoin': {
            id: 'goss-gossipcoin',
            id_cg: 'gossipcoin',
            symbol: 'GOSS',
            symbol_cg: 'goss',
            name: 'Gossipcoin',
            name_cg: 'GOSSIP-Coin',
            slug: 'gossipcoin'
        },
        'iqn-iqeon': {
            id: 'iqn-iqeon',
            id_cg: 'iqeon',
            symbol: 'IQN',
            symbol_cg: 'iqn',
            name: 'IQeon',
            name_cg: 'IQeon',
            slug: 'iqeon'
        },
        'xcash-x-cash': {
            id: 'xcash-x-cash',
            id_cg: 'x-cash',
            symbol: 'XCASH',
            symbol_cg: 'xcash',
            name: 'X-CASH',
            name_cg: 'X-CASH',
            slug: 'x-cash'
        },
        'paxex-paxex': {
            id: 'paxex-paxex',
            id_cg: 'paxex',
            symbol: 'PAXEX',
            symbol_cg: 'paxex',
            name: 'PAXEX',
            name_cg: 'PAXEX',
            slug: 'paxex'
        },
        'shard-shard': {
            id: 'shard-shard',
            id_cg: 'shard',
            symbol: 'SHARD',
            symbol_cg: 'shard',
            name: 'Shard',
            name_cg: 'Shard Coin',
            slug: 'sharder'
        },
        'mnp-mnpcoin': {
            id: 'mnp-mnpcoin',
            id_cg: 'mnpcoin',
            symbol: 'MNP',
            symbol_cg: 'mnp',
            name: 'MNPCoin',
            name_cg: 'MNPCoin',
            slug: 'mnpcoin'
        },
        'dachx-dach-coin': {
            id: 'dachx-dach-coin',
            id_cg: 'dachcoin',
            symbol: 'DACHX',
            symbol_cg: 'dachx',
            name: 'Dach Coin',
            name_cg: 'DACH Coin',
            slug: 'dach-coin'
        },
        'ecoreal-ecoreal-estate': {
            id: 'ecoreal-ecoreal-estate',
            id_cg: 'ecoreal-estate',
            symbol: 'ECOREAL',
            symbol_cg: 'ecoreal',
            name: 'Ecoreal Estate',
            name_cg: 'Ecoreal Estate',
            slug: 'ecoreal-estate'
        },
        'daps-daps-token': {
            id: 'daps-daps-token',
            id_cg: 'daps-token',
            symbol: 'DAPS',
            symbol_cg: 'daps',
            name: 'DAPS Token',
            name_cg: 'DAPS Token',
            slug: 'daps-token'
        },
        'vstr-vestoria': {
            id: 'vstr-vestoria',
            id_cg: 'vestoria',
            symbol: 'VSTR',
            symbol_cg: 'vstr',
            name: 'Vestoria',
            name_cg: 'Vestoria',
            slug: ''
        },
        'carat-carat': {
            id: 'carat-carat',
            id_cg: 'carat',
            symbol: 'CARAT',
            symbol_cg: 'carat',
            name: 'CARAT',
            name_cg: 'CARAT',
            slug: 'carat'
        },
        'phon-phonecoin': {
            id: 'phon-phonecoin',
            id_cg: 'phonecoin',
            symbol: 'PHON',
            symbol_cg: 'phon',
            name: 'Phonecoin',
            name_cg: 'Phonecoin',
            slug: 'phonecoin'
        },
        'anon-anon': {
            id: 'anon-anon',
            id_cg: 'anon',
            symbol: 'ANON',
            symbol_cg: 'anon',
            name: 'ANON',
            name_cg: 'ANON',
            slug: 'anon'
        },
        'mlc-mallcoin': {
            id: 'mlc-mallcoin',
            id_cg: 'flogmall',
            symbol: 'MLC',
            symbol_cg: 'mlc',
            name: 'Mallcoin',
            name_cg: 'FLOGmall',
            slug: 'mallcoin'
        },
        'actp-archetypal-network': {
            id: 'actp-archetypal-network',
            id_cg: 'archetypal-network',
            symbol: 'ACTP',
            symbol_cg: 'actp',
            name: 'Archetypal Network',
            name_cg: 'Archetypal Network',
            slug: ''
        },
        'veo-amoveo': {
            id: 'veo-amoveo',
            id_cg: 'amoveo',
            symbol: 'VEO',
            symbol_cg: 'veo',
            name: 'Amoveo',
            name_cg: 'Amoveo',
            slug: 'amoveo'
        },
        'trxc-tronclassic': {
            id: 'trxc-tronclassic',
            id_cg: 'tronclassic',
            symbol: 'TRXC',
            symbol_cg: 'trxc',
            name: 'TRONCLASSIC',
            name_cg: 'TronClassic',
            slug: 'tronclassic'
        },
        'mas-midasprotocol': {
            id: 'mas-midasprotocol',
            id_cg: 'midas-protocol',
            symbol: 'MAS',
            symbol_cg: 'mas',
            name: 'MidasProtocol',
            name_cg: 'Midas Protocol',
            slug: 'midasprotocol'
        },
        'zb-zb': {
            id: 'zb-zb',
            id_cg: 'zb-token',
            symbol: 'ZB',
            symbol_cg: 'zb',
            name: 'ZB',
            name_cg: 'ZB Token',
            slug: 'zb'
        },
        'azart-azart': {
            id: 'azart-azart',
            id_cg: 'azart',
            symbol: 'AZART',
            symbol_cg: 'azart',
            name: 'Azart',
            name_cg: 'Azart',
            slug: 'azart'
        },
        'tmtg-the-midas-touch-gold': {
            id: 'tmtg-the-midas-touch-gold',
            id_cg: 'the-midas-touch-gold',
            symbol: 'TMTG',
            symbol_cg: 'tmtg',
            name: 'The Midas Touch Gold',
            name_cg: 'The Midas Touch Gold',
            slug: 'the-midas-touch-gold'
        },
        'pax-paxos-standard-token': {
            id: 'pax-paxos-standard-token',
            id_cg: 'paxos-standard',
            symbol: 'PAX',
            symbol_cg: 'pax',
            name: 'Paxos Standard Token',
            name_cg: 'Paxos Standard',
            slug: 'paxos-standard-token'
        },
        'ert-eristica': {
            id: 'ert-eristica',
            id_cg: 'eristica',
            symbol: 'ERT',
            symbol_cg: 'ert',
            name: 'Eristica',
            name_cg: 'Eristica',
            slug: 'eristica'
        },
        'dagt-digital-asset-guarantee-token': {
            id: 'dagt-digital-asset-guarantee-token',
            id_cg: 'digitalassets',
            symbol: 'DAGT',
            symbol_cg: 'dagt',
            name: 'Digital Asset Guarantee Token',
            name_cg: 'Digital Asset Guarantee Token',
            slug: 'digital-asset-guarantee-token'
        },
        'wit-witchain': {
            id: 'wit-witchain',
            id_cg: 'wealth-in-token',
            symbol: 'WIT',
            symbol_cg: 'wit',
            name: 'WITChain',
            name_cg: 'Wealth in Token',
            slug: 'witchain'
        },
        'hsn-helper-search-token': {
            id: 'hsn-helper-search-token',
            id_cg: 'helper-search-token',
            symbol: 'HSN',
            symbol_cg: 'hsn',
            name: 'Helper Search Token',
            name_cg: 'Helper Search Token',
            slug: 'helper-search-token'
        },
        'wxc-wxcoins': {
            id: 'wxc-wxcoins',
            id_cg: 'wxcoin',
            symbol: 'WXC',
            symbol_cg: 'wxc',
            name: 'WXCOINS',
            name_cg: 'WXCOINS',
            slug: 'wxcoins'
        },
        'plc-platincoin': {
            id: 'plc-platincoin',
            id_cg: 'platincoin',
            symbol: 'PLC',
            symbol_cg: 'plc',
            name: 'PLATINCOIN',
            name_cg: 'PlatinCoin',
            slug: 'platincoin'
        },
        'sins-safeinsure': {
            id: 'sins-safeinsure',
            id_cg: 'safeinsure',
            symbol: 'SINS',
            symbol_cg: 'sins',
            name: 'SafeInsure',
            name_cg: 'SafeInsure',
            slug: 'safeinsure'
        },
        'excc-exchangecoin': {
            id: 'excc-exchangecoin',
            id_cg: 'exchangecoin',
            symbol: 'EXCC',
            symbol_cg: 'excc',
            name: 'ExchangeCoin',
            name_cg: 'ExchangeCoin',
            slug: ''
        },
        'crd-cryptaldash': {
            id: 'crd-cryptaldash',
            id_cg: 'cryptaldash',
            symbol: 'CRD',
            symbol_cg: 'crd',
            name: 'CryptalDash',
            name_cg: 'CryptalDash',
            slug: 'cryptaldash'
        },
        'mir-mir-coin': {
            id: 'mir-mir-coin',
            id_cg: 'mir-coin',
            symbol: 'MIR',
            symbol_cg: 'mir',
            name: 'MIR COIN',
            name_cg: 'MIR COIN',
            slug: 'mir-coin'
        },
        'bether-bethereum': {
            id: 'bether-bethereum',
            id_cg: 'bethereum',
            symbol: 'BETHER',
            symbol_cg: 'bether',
            name: 'Bethereum',
            name_cg: 'Bethereum',
            slug: 'bethereum'
        },
        'rpm-repme': {
            id: 'rpm-repme',
            id_cg: 'repme',
            symbol: 'RPM',
            symbol_cg: 'rpm',
            name: 'Repme',
            name_cg: 'Repme',
            slug: 'repme'
        },
        'ragna-ragnarok': {
            id: 'ragna-ragnarok',
            id_cg: 'ragnarok',
            symbol: 'RAGNA',
            symbol_cg: 'ragna',
            name: 'Ragnarok',
            name_cg: 'Ragnarok',
            slug: 'ragnarok'
        },
        'xgs-genesisx': {
            id: 'xgs-genesisx',
            id_cg: 'genesisx',
            symbol: 'XGS',
            symbol_cg: 'xgs',
            name: 'GenesisX',
            name_cg: 'GenesisX',
            slug: 'genesisx'
        },
        'knt-knekted': {
            id: 'knt-knekted',
            id_cg: 'knekted',
            symbol: 'KNT',
            symbol_cg: 'knt',
            name: 'Knekted',
            name_cg: 'Knekted',
            slug: 'knekted'
        },
        'bcard-cardbuyers': {
            id: 'bcard-cardbuyers',
            id_cg: 'cardbuyers',
            symbol: 'BCARD',
            symbol_cg: 'bcard',
            name: 'CARDbuyers',
            name_cg: 'CardBuyers',
            slug: 'cardbuyers'
        },
        'labh-labh-coin': {
            id: 'labh-labh-coin',
            id_cg: 'labh-coin',
            symbol: 'LABH',
            symbol_cg: 'labh',
            name: 'Labh Coin',
            name_cg: 'Labh Coin',
            slug: 'labh-coin'
        },
        'wbl-wizbl': {
            id: 'wbl-wizbl',
            id_cg: 'wizbl',
            symbol: 'WBL',
            symbol_cg: 'wbl',
            name: 'WIZBL',
            name_cg: 'WIZBL',
            slug: 'wizbl'
        },
        'civ-civitas': {
            id: 'civ-civitas',
            id_cg: 'civitas',
            symbol: 'CIV',
            symbol_cg: 'civ',
            name: 'Civitas',
            name_cg: 'Civitas',
            slug: 'civitas'
        },
        'ath-atheios': {
            id: 'ath-atheios',
            id_cg: 'atheios',
            symbol: 'ATH',
            symbol_cg: 'ath',
            name: 'Atheios',
            name_cg: 'Atheios',
            slug: 'atheios'
        },
        'mash-masternet': {
            id: 'mash-masternet',
            id_cg: 'masternet',
            symbol: 'MASH',
            symbol_cg: 'mash',
            name: 'MASTERNET',
            name_cg: 'Masternet',
            slug: 'masternet'
        },
        'tol-tolar': {
            id: 'tol-tolar',
            id_cg: 'tolar',
            symbol: 'TOL',
            symbol_cg: 'tol',
            name: 'Tolar',
            name_cg: 'Tolar',
            slug: 'tolar'
        },
        'benz-benz': {
            id: 'benz-benz',
            id_cg: 'benz',
            symbol: 'BENZ',
            symbol_cg: 'benz',
            name: 'Benz',
            name_cg: 'Benz'
        },
        'our-ourcoin': {
            id: 'our-ourcoin',
            id_cg: 'o-crypto-union',
            symbol: 'OUR',
            symbol_cg: 'our',
            name: 'Ourcoin',
            name_cg: 'ￃﾘ Union Revolution',
            slug: 'ourcoin'
        },
        'acm-actinium': {
            id: 'acm-actinium',
            id_cg: 'actinium',
            symbol: 'ACM',
            symbol_cg: 'acm',
            name: 'Actinium',
            name_cg: 'Actinium',
            slug: 'actinium'
        },
        'free-free-coin': {
            id: 'free-free-coin',
            id_cg: 'free-coin',
            symbol: 'FREE',
            symbol_cg: 'free',
            name: 'FREE Coin',
            name_cg: 'FREE coin',
            slug: 'free-coin'
        },
        'steep-steepcoin': {
            id: 'steep-steepcoin',
            id_cg: 'steepcoin',
            symbol: 'STEEP',
            symbol_cg: 'steep',
            name: 'SteepCoin',
            name_cg: 'SteepCoin',
            slug: 'steepcoin'
        },
        'nrp-neural-protocol': {
            id: 'nrp-neural-protocol',
            id_cg: 'neural-protocol',
            symbol: 'NRP',
            symbol_cg: 'nrp',
            name: 'Neural Protocol',
            name_cg: 'Neural Protocol',
            slug: 'neural-protocol'
        },
        'quan-quantis-net': {
            id: 'quan-quantis-net',
            id_cg: 'quantis',
            symbol: 'QUAN',
            symbol_cg: 'quan',
            name: 'Quantis Net',
            name_cg: 'Quantis',
            slug: 'quantis-network'
        },
        'kai-kaicoin': {
            id: 'kai-kaicoin',
            id_cg: 'kaicoin',
            symbol: 'KAI',
            symbol_cg: 'kai',
            name: 'kaicoin',
            name_cg: 'Kaicoin',
            slug: ''
        },
        'wix-wixlar': {
            id: 'wix-wixlar',
            id_cg: 'wixlar',
            symbol: 'WIX',
            symbol_cg: 'wix',
            name: 'Wixlar',
            name_cg: 'Wixlar',
            slug: 'wixlar'
        },
        'ifood-ifoods-chain': {
            id: 'ifood-ifoods-chain',
            id_cg: 'ifoods-chain',
            symbol: 'IFOOD',
            symbol_cg: 'ifood',
            name: 'Ifoods Chain',
            name_cg: 'Ifoods Chain',
            slug: 'ifoods-chain'
        },
        'egx-eaglex': {
            id: 'egx-eaglex',
            id_cg: 'eaglex',
            symbol: 'EGX',
            symbol_cg: 'egx',
            name: 'EagleX',
            name_cg: 'EagleX',
            slug: 'eaglex'
        },
        'scriv-scriv-network': {
            id: 'scriv-scriv-network',
            id_cg: 'scriv',
            symbol: 'SCRIV',
            symbol_cg: 'scriv',
            name: 'SCRIV NETWORK',
            name_cg: 'SCRIV',
            slug: 'scriv-network'
        },
        'gusd-gemini-dollar': {
            id: 'gusd-gemini-dollar',
            id_cg: 'gemini-dollar',
            symbol: 'GUSD',
            symbol_cg: 'gusd',
            name: 'Gemini Dollar',
            name_cg: 'Gemini Dollar',
            slug: 'gemini-dollar'
        },
        'sim-simmitri': {
            id: 'sim-simmitri',
            id_cg: 'simmitri',
            symbol: 'SIM',
            symbol_cg: 'sim',
            name: 'Simmitri',
            name_cg: 'Simmitri',
            slug: 'simmitri'
        },
        'wtl-welltrado': {
            id: 'wtl-welltrado',
            id_cg: 'welltrado',
            symbol: 'WTL',
            symbol_cg: 'wtl',
            name: 'Welltrado',
            name_cg: 'Welltrado',
            slug: ''
        },
        'blast-blast': {
            id: 'blast-blast',
            id_cg: 'blast',
            symbol: 'BLAST',
            symbol_cg: 'blast',
            name: 'BLAST',
            name_cg: 'BLAST',
            slug: 'blast'
        },
        'usdc-usd-coin': {
            id: 'usdc-usd-coin',
            id_cg: 'usd-coin',
            symbol: 'USDC',
            symbol_cg: 'usdc',
            name: 'USD Coin',
            name_cg: 'USD Coin',
            slug: 'usd-coin'
        },
        'help-helpico': {
            id: 'help-helpico',
            id_cg: 'helpico',
            symbol: 'HELP',
            symbol_cg: 'help',
            name: 'Helpico',
            name_cg: 'Helpico',
            slug: 'helpico'
        },
        'evos-evos': {
            id: 'evos-evos',
            id_cg: 'evos',
            symbol: 'EVOS',
            symbol_cg: 'evos',
            name: 'EVOS',
            name_cg: 'EVOS',
            slug: 'evos'
        },
        'ndx-ndex': {
            id: 'ndx-ndex',
            id_cg: 'ndex',
            symbol: 'NDX',
            symbol_cg: 'ndx',
            name: 'nDEX',
            name_cg: 'nDEX',
            slug: 'ndex'
        },
        'wage-digiwage': {
            id: 'wage-digiwage',
            id_cg: 'philscurrency',
            symbol: 'WAGE',
            symbol_cg: 'wage',
            name: 'Digiwage',
            name_cg: 'Digiwage',
            slug: 'digiwage'
        },
        'bczero-buggyra-coin-zero': {
            id: 'bczero-buggyra-coin-zero',
            id_cg: 'buggyra-coin-zero',
            symbol: 'BCZERO',
            symbol_cg: 'bczero',
            name: 'Buggyra Coin Zero',
            name_cg: 'Buggyra Coin Zero',
            slug: 'buggyra-coin-zero'
        },
        'f1c-future1coin': {
            id: 'f1c-future1coin',
            id_cg: 'future1coin',
            symbol: 'F1C',
            symbol_cg: 'f1c',
            name: 'Future1coin',
            name_cg: 'Future1Coin',
            slug: 'future1coin'
        },
        'qac-quasarcoin': {
            id: 'qac-quasarcoin',
            id_cg: 'quasarcoin',
            symbol: 'QAC',
            symbol_cg: 'qac',
            name: 'Quasarcoin',
            name_cg: 'Quasarcoin',
            slug: 'quasarcoin'
        },
        'pyx-pyrexcoin': {
            id: 'pyx-pyrexcoin',
            id_cg: 'priorityex',
            symbol: 'PYX',
            symbol_cg: 'pyx',
            name: 'PyrexCoin',
            name_cg: 'PriorityEx',
            slug: 'pyrexcoin'
        },
        'dlx-diplexcoin': {
            id: 'dlx-diplexcoin',
            id_cg: 'diplexcoin',
            symbol: 'DLX',
            symbol_cg: 'dlx',
            name: 'Diplexcoin',
            name_cg: 'Diplexcoin',
            slug: ''
        },
        'shping-shping': {
            id: 'shping-shping',
            id_cg: 'shping',
            symbol: 'SHPING',
            symbol_cg: 'shping',
            name: 'SHPING',
            name_cg: 'Shping',
            slug: 'shping'
        },
        'aglt-agrolot': {
            id: 'aglt-agrolot',
            id_cg: 'agrolot',
            symbol: 'AGLT',
            symbol_cg: 'aglt',
            name: 'Agrolot',
            name_cg: 'AGROLOT',
            slug: 'agrolot'
        },
        'psc-primestone': {
            id: 'psc-primestone',
            id_cg: 'primestone',
            symbol: 'PSC',
            symbol_cg: 'psc',
            name: 'PrimeStone',
            name_cg: 'PrimeStone',
            slug: 'primestone'
        },
        's-sharpay': {
            id: 's-sharpay',
            id_cg: 'sharpay',
            symbol: 'S',
            symbol_cg: 's',
            name: 'Sharpay',
            name_cg: 'Sharpay',
            slug: 'sharpay'
        },
        'cobra-cobrabytes': {
            id: 'cobra-cobrabytes',
            id_cg: 'cobrabytes',
            symbol: 'COBRA',
            symbol_cg: 'cobra',
            name: 'Cobrabytes',
            name_cg: 'Cobrabytes',
            slug: 'cobrabytes'
        },
        'bc-block-chaincom': {
            id: 'bc-block-chaincom',
            id_cg: 'bitcoin-confidential',
            symbol: 'BC',
            symbol_cg: 'bc',
            name: 'Block-Chain.com',
            name_cg: 'Bitcoin Confidential',
            slug: 'bitcoin-confidential'
        },
        'cmct-cyber-movie-chain': {
            id: 'cmct-cyber-movie-chain',
            id_cg: 'crowd-machine',
            symbol: 'CMCT',
            symbol_cg: 'cmct',
            name: 'Cyber Movie Chain',
            name_cg: 'Crowd Machine',
            slug: 'crowd-machine'
        },
        'ents-eunomia': {
            id: 'ents-eunomia',
            id_cg: 'eunomia',
            symbol: 'ENTS',
            symbol_cg: 'ents',
            name: 'EUNOMIA',
            name_cg: 'EUNOMIA',
            slug: 'eunomia'
        },
        'rpd-rapids': {
            id: 'rpd-rapids',
            id_cg: 'rapids',
            symbol: 'RPD',
            symbol_cg: 'rpd',
            name: 'Rapids',
            name_cg: 'Rapids',
            slug: 'rapids'
        },
        'dec-darico-ecosystem-coin': {
            id: 'dec-darico-ecosystem-coin',
            id_cg: 'darico',
            symbol: 'DEC',
            symbol_cg: 'dec',
            name: 'Darico Ecosystem Coin',
            name_cg: 'Darico Ecosystem Coin',
            slug: 'darcio-ecosystem-coin'
        },
        'snet-snetwork': {
            id: 'snet-snetwork',
            id_cg: 'snetwork',
            symbol: 'SNET',
            symbol_cg: 'snet',
            name: 'Snetwork',
            name_cg: 'Snetwork',
            slug: 'zeusnetwork'
        },
        'ndb-nodebase': {
            id: 'ndb-nodebase',
            id_cg: 'nodebase',
            symbol: 'NDB',
            symbol_cg: 'ndb',
            name: 'NodeBase',
            name_cg: 'NodeBase',
            slug: ''
        },
        'xind-indinode': {
            id: 'xind-indinode',
            id_cg: 'indinode',
            symbol: 'XIND',
            symbol_cg: 'xind',
            name: 'INDINODE',
            name_cg: 'INDINODE',
            slug: 'indinode'
        },
        'divi-divi': {
            id: 'divi-divi',
            id_cg: 'divi',
            symbol: 'DIVI',
            symbol_cg: 'divi',
            name: 'Divi',
            name_cg: 'Divi',
            slug: 'divi'
        },
        'huzu-huzu': {
            id: 'huzu-huzu',
            id_cg: 'huzu',
            symbol: 'HUZU',
            symbol_cg: 'huzu',
            name: 'HUZU',
            name_cg: 'HUZU',
            slug: ''
        },
        'abbc-alibabacoin': {
            id: 'abbc-alibabacoin',
            id_cg: 'alibabacoin',
            symbol: 'ABBC',
            symbol_cg: 'abbc',
            name: 'ABBC Coin',
            name_cg: 'ABBC',
            slug: 'abbc-coin'
        },
        'wire-airwire': {
            id: 'wire-airwire',
            id_cg: 'wire',
            symbol: 'WIRE',
            symbol_cg: 'wire',
            name: 'AirWire',
            name_cg: 'AirWire',
            slug: 'airwire'
        },
        'deal-idealcash': {
            id: 'deal-idealcash',
            id_cg: 'idealcash',
            symbol: 'DEAL',
            symbol_cg: 'deal',
            name: 'iDealCash',
            name_cg: 'IdealCash',
            slug: 'idealcash'
        },
        'dogec-dogecash': {
            id: 'dogec-dogecash',
            id_cg: 'dogecash',
            symbol: 'DOGEC',
            symbol_cg: 'dogec',
            name: 'DogeCash',
            name_cg: 'DogeCash',
            slug: 'dogecash'
        },
        'dic-daikicoin': {
            id: 'dic-daikicoin',
            id_cg: 'daikicoin',
            symbol: 'DIC',
            symbol_cg: 'dic',
            name: 'DAIKICOIN',
            name_cg: 'Daikicoin',
            slug: ''
        },
        'cbtc-classicbitcoin': {
            id: 'cbtc-classicbitcoin',
            id_cg: 'classicbitcoin',
            symbol: 'CBTC',
            symbol_cg: 'cbtc',
            name: 'Classic Bitcoin',
            name_cg: 'ClassicBitcoin',
            slug: ''
        },
        'znt-zenswap-network-token': {
            id: 'znt-zenswap-network-token',
            id_cg: 'zenswap-network-token',
            symbol: 'ZNT',
            symbol_cg: 'znt',
            name: 'Zenswap Network Token',
            name_cg: 'Zenswap Network Token',
            slug: 'zenswap-network-token'
        },
        'mmo-mmocoin': {
            id: 'mmo-mmocoin',
            id_cg: 'mmocoin',
            symbol: 'MMO',
            symbol_cg: 'mmo',
            name: 'MMOCoin',
            name_cg: 'MMOCoin',
            slug: 'mmocoin'
        },
        'szc-shopzcoin': {
            id: 'szc-shopzcoin',
            id_cg: 'shopzcoin',
            symbol: 'SZC',
            symbol_cg: 'szc',
            name: 'ShopZcoin',
            name_cg: 'ShopZcoin',
            slug: 'shopzcoin'
        },
        'kun-kun': {
            id: 'kun-kun',
            id_cg: 'kun',
            symbol: 'KUN',
            symbol_cg: 'kun',
            name: 'KUN',
            name_cg: 'KUN',
            slug: 'kun'
        },
        'ccx-conceal': {
            id: 'ccx-conceal',
            id_cg: 'conceal',
            symbol: 'CCX',
            symbol_cg: 'ccx',
            name: 'Conceal',
            name_cg: 'Conceal',
            slug: 'conceal'
        },
        'etho-ether-1': {
            id: 'etho-ether-1',
            id_cg: '',
            symbol: 'ETHO',
            symbol_cg: '',
            name: 'Ether-1',
            name_cg: '',
            slug: 'ether-1'
        },
        'cjs-cjs': {
            id: 'cjs-cjs',
            id_cg: '',
            symbol: 'CJS',
            symbol_cg: '',
            name: 'CJs',
            name_cg: '',
            slug: 'cjs'
        },
        'bloc-blocmoney': {
            id: 'bloc-blocmoney',
            id_cg: 'blockcloud',
            symbol: 'BLOC',
            symbol_cg: 'bloc',
            name: 'BLOC.MONEY',
            name_cg: 'Blockcloud',
            slug: 'blockcloud'
        },
        'datp-decentralized-asset-trading-platform': {
            id: 'datp-decentralized-asset-trading-platform',
            id_cg: 'decentralized-asset-trading-platform',
            symbol: 'DATP',
            symbol_cg: 'datp',
            name: 'Decentralized Asset Trading Platform',
            name_cg: 'Decentralized Asset Trading Platform',
            slug: 'decentralized-asset-trading-platform'
        },
        'ird-iridium': {
            id: 'ird-iridium',
            id_cg: 'iridium',
            symbol: 'IRD',
            symbol_cg: 'ird',
            name: 'Iridium',
            name_cg: 'Iridium',
            slug: 'iridium'
        },
        'deex-deex': {
            id: 'deex-deex',
            id_cg: 'deex',
            symbol: 'DEEX',
            symbol_cg: 'deex',
            name: 'DEEX',
            name_cg: 'Deex',
            slug: 'deex'
        },
        'ply-playcoin-erc20': {
            id: 'ply-playcoin-erc20',
            id_cg: 'playcoin',
            symbol: 'PLY',
            symbol_cg: 'ply',
            name: 'PlayCoin [ERC20]',
            name_cg: 'PlayCoin',
            slug: 'playcoin-erc20'
        },
        'midas-midas': {
            id: 'midas-midas',
            id_cg: 'midas',
            symbol: 'MIDAS',
            symbol_cg: 'midas',
            name: 'Midas',
            name_cg: 'Midas',
            slug: 'midasprotocol'
        },
        'help-gohelpfund': {
            id: 'help-gohelpfund',
            id_cg: 'helpico',
            symbol: 'HELP',
            symbol_cg: 'help',
            name: 'GoHelpFund',
            name_cg: 'Helpico',
            slug: 'helpico'
        },
        'bits-bitcoinus': {
            id: 'bits-bitcoinus',
            id_cg: 'bitcoinus',
            symbol: 'BITS',
            symbol_cg: 'bits',
            name: 'Bitcoinus',
            name_cg: 'Bitcoinus',
            slug: 'bitcoinus'
        },
        'rpi-rpicoin': {
            id: 'rpi-rpicoin',
            id_cg: 'rpicoin',
            symbol: 'RPI',
            symbol_cg: 'rpi',
            name: 'RPICoin',
            name_cg: 'RPICoin',
            slug: 'rpicoin'
        },
        'cheese-cheesecoin': {
            id: 'cheese-cheesecoin',
            id_cg: 'cheese',
            symbol: 'CHEESE',
            symbol_cg: 'cheese',
            name: 'Cheesecoin',
            name_cg: 'CHEESE',
            slug: 'cheesecoin'
        },
        'alt-altestate-token': {
            id: 'alt-altestate-token',
            id_cg: 'alt-estate',
            symbol: 'ALT',
            symbol_cg: 'alt',
            name: 'Alt.Estate token',
            name_cg: 'AltEstate Token',
            slug: 'alt-estate-token'
        },
        'bull-buysell': {
            id: 'bull-buysell',
            id_cg: 'buysell',
            symbol: 'BULL',
            symbol_cg: 'bull',
            name: 'BuySell',
            name_cg: 'BuySell',
            slug: ''
        },
        'hlm-helium': {
            id: 'hlm-helium',
            id_cg: 'helium-chain',
            symbol: 'HLM',
            symbol_cg: 'hlm',
            name: 'Helium',
            name_cg: 'Helium Chain',
            slug: 'helium'
        },
        'tdp-truedeck': {
            id: 'tdp-truedeck',
            id_cg: 'truedeck',
            symbol: 'TDP',
            symbol_cg: 'tdp',
            name: 'TrueDeck',
            name_cg: 'TrueDeck',
            slug: 'truedeck'
        },
        'fbn-fivebalance': {
            id: 'fbn-fivebalance',
            id_cg: 'five-balance',
            symbol: 'FBN',
            symbol_cg: 'fbn',
            name: 'Fivebalance',
            name_cg: 'five balance',
            slug: 'fivebalance'
        },
        'robet-robet': {
            id: 'robet-robet',
            id_cg: 'robet-coin',
            symbol: 'ROBET',
            symbol_cg: 'robet',
            name: 'RoBET',
            name_cg: 'RoBet Coin',
            slug: 'robet'
        },
        'pmc-primebank-coin': {
            id: 'pmc-primebank-coin',
            id_cg: 'primebank-coin',
            symbol: 'PMC',
            symbol_cg: 'pmc',
            name: 'Primebank Coin',
            name_cg: 'Primebank Coin',
            slug: ''
        },
        'bit-bitmoney': {
            id: 'bit-bitmoney',
            id_cg: 'bitmoney',
            symbol: 'BIT',
            symbol_cg: 'bit',
            name: 'BitMoney',
            name_cg: 'BitMoney',
            slug: 'bitmoney'
        },
        'itl-italian-lira': {
            id: 'itl-italian-lira',
            id_cg: 'italian-lira',
            symbol: 'ITL',
            symbol_cg: 'itl',
            name: 'Italian Lira',
            name_cg: 'Italian Lira',
            slug: 'italian-lira'
        },
        'yeed-yggdrash': {
            id: 'yeed-yggdrash',
            id_cg: 'yggdrash',
            symbol: 'YEED',
            symbol_cg: 'yeed',
            name: 'YGGDRASH',
            name_cg: 'Yggdrash',
            slug: 'yeed'
        },
        'box-box-token': {
            id: 'box-box-token',
            id_cg: 'box-token',
            symbol: 'BOX',
            symbol_cg: 'box',
            name: 'BOX Token',
            name_cg: 'BOX Token',
            slug: 'box-token'
        },
        'obx-obxcoin': {
            id: 'obx-obxcoin',
            id_cg: 'obxcoin',
            symbol: 'OBX',
            symbol_cg: 'obx',
            name: 'OBXcoin',
            name_cg: 'OBXcoin',
            slug: ''
        },
        'telos-teloscoin': {
            id: 'telos-teloscoin',
            id_cg: 'telos-coin',
            symbol: 'TELOS',
            symbol_cg: 'telos',
            name: 'Teloscoin',
            name_cg: 'Teloscoin',
            slug: 'teloscoin'
        },
        'modx-model-x-coin': {
            id: 'modx-model-x-coin',
            id_cg: 'model-x-coin',
            symbol: 'MODX',
            symbol_cg: 'modx',
            name: 'MODEL-X-coin',
            name_cg: 'MODEL-X-coin',
            slug: 'model-x-coin'
        },
        'ddx-dietbitcoin': {
            id: 'ddx-dietbitcoin',
            id_cg: 'dietbitcoin',
            symbol: 'DDX',
            symbol_cg: 'ddx',
            name: 'dietbitcoin',
            name_cg: 'dietbitcoin',
            slug: 'dietbitcoin'
        },
        'gst-game-stars': {
            id: 'gst-game-stars',
            id_cg: 'game-stars',
            symbol: 'GST',
            symbol_cg: 'gst',
            name: 'Game Stars',
            name_cg: 'Game Stars',
            slug: 'game-stars'
        },
        'wtn-waletoken': {
            id: 'wtn-waletoken',
            id_cg: 'waletoken',
            symbol: 'WTN',
            symbol_cg: 'wtn',
            name: 'Waletoken',
            name_cg: 'Waletoken',
            slug: 'waletoken'
        },
        'gzro-gravity': {
            id: 'gzro-gravity',
            id_cg: 'gravity',
            symbol: 'GZRO',
            symbol_cg: 'gzro',
            name: 'Gravity',
            name_cg: 'Gravity',
            slug: 'gravity'
        },
        'pedi-pedity': {
            id: 'pedi-pedity',
            id_cg: 'pedity',
            symbol: 'PEDI',
            symbol_cg: 'pedi',
            name: 'Pedity',
            name_cg: 'Pedity',
            slug: 'pedity'
        },
        'esce-escroco-emerald': {
            id: 'esce-escroco-emerald',
            id_cg: 'escroco',
            symbol: 'ESCE',
            symbol_cg: 'esce',
            name: 'Escroco Emerald',
            name_cg: 'Escroco Emerald',
            slug: 'escroco-emerald'
        },
        'bzx-bitcoin-zero': {
            id: 'bzx-bitcoin-zero',
            id_cg: 'bitcoin-zero',
            symbol: 'BZX',
            symbol_cg: 'bzx',
            name: 'Bitcoin Zero',
            name_cg: 'Bitcoin Zero',
            slug: 'bitcoin-zero'
        },
        'sake-sakecoin': {
            id: 'sake-sakecoin',
            id_cg: 'sakecoin',
            symbol: 'SAKE',
            symbol_cg: 'sake',
            name: 'SAKECOIN',
            name_cg: 'SAKECOIN',
            slug: 'sakecoin'
        },
        'lqd-liquidity-network': {
            id: 'lqd-liquidity-network',
            id_cg: 'liquidity-network',
            symbol: 'LQD',
            symbol_cg: 'lqd',
            name: 'Liquidity Network',
            name_cg: 'Liquidity Network',
            slug: 'liquidity-network'
        },
        'soul-cryptosoul': {
            id: 'soul-cryptosoul',
            id_cg: 'cryptosoul',
            symbol: 'SOUL',
            symbol_cg: 'soul',
            name: 'CryptoSoul',
            name_cg: 'CryptoSoul',
            slug: 'cryptosoul'
        },
        'type-typerium': {
            id: 'type-typerium',
            id_cg: 'typerium',
            symbol: 'TYPE',
            symbol_cg: 'type',
            name: 'Typerium',
            name_cg: 'Typerium',
            slug: 'typerium'
        },
        'hndc-hondaiscoin': {
            id: 'hndc-hondaiscoin',
            id_cg: 'hondaiscoin',
            symbol: 'HNDC',
            symbol_cg: 'hndc',
            name: 'HondaisCoin',
            name_cg: 'HondaisCoin',
            slug: 'hondaiscoin'
        },
        'stor-self-storage-coin': {
            id: 'stor-self-storage-coin',
            id_cg: 'self-storage-coin',
            symbol: 'STOR',
            symbol_cg: 'stor',
            name: 'Self Storage Coin',
            name_cg: 'Self Storage Coin',
            slug: ''
        },
        'sierra-sierracoin': {
            id: 'sierra-sierracoin',
            id_cg: 'sierracoin',
            symbol: 'SIERRA',
            symbol_cg: 'sierra',
            name: 'Sierracoin',
            name_cg: 'Sierracoin',
            slug: ''
        },
        'lto-lto-network': {
            id: 'lto-lto-network',
            id_cg: 'lto-network',
            symbol: 'LTO',
            symbol_cg: 'lto',
            name: 'LTO Network',
            name_cg: 'LTO Network',
            slug: 'lto-network'
        },
        'mbc-microbitcoin': {
            id: 'mbc-microbitcoin',
            id_cg: 'masterbit',
            symbol: 'MBC',
            symbol_cg: 'mbc',
            name: 'MicroBitcoin',
            name_cg: 'MasterBit',
            slug: 'microbitcoin'
        },
        'voco-provoco-token': {
            id: 'voco-provoco-token',
            id_cg: 'provoco',
            symbol: 'VOCO',
            symbol_cg: 'voco',
            name: 'Provoco Token',
            name_cg: 'Provoco',
            slug: 'provoco-token'
        },
        'btb-bitibu-coin': {
            id: 'btb-bitibu-coin',
            id_cg: 'bitball',
            symbol: 'BTB',
            symbol_cg: 'btb',
            name: 'Bitibu Coin',
            name_cg: 'Bitball',
            slug: 'bitball'
        },
        'ionc-ionchain': {
            id: 'ionc-ionchain',
            id_cg: 'ionchain-token',
            symbol: 'IONC',
            symbol_cg: 'ionc',
            name: 'IONChain',
            name_cg: 'IONChain',
            slug: 'ionchain'
        },
        'apc-alpha-coin': {
            id: 'apc-alpha-coin',
            id_cg: 'alpha-coin',
            symbol: 'APC',
            symbol_cg: 'apc',
            name: 'Alpha Coin',
            name_cg: 'Alpha Coin',
            slug: 'alpha-coin'
        },
        'dkpc-darkpaycoin': {
            id: 'dkpc-darkpaycoin',
            id_cg: 'darkpaycoin',
            symbol: 'DKPC',
            symbol_cg: 'dkpc',
            name: 'DarkPayCoin',
            name_cg: 'DarkPayCoin',
            slug: ''
        },
        'vnx-visionx': {
            id: 'vnx-visionx',
            id_cg: 'venox',
            symbol: 'VNX',
            symbol_cg: 'vnx',
            name: 'VisionX',
            name_cg: 'Venox',
            slug: 'visionx'
        },
        'dex-dex': {
            id: 'dex-dex',
            id_cg: 'dex',
            symbol: 'DEX',
            symbol_cg: 'dex',
            name: 'DEX',
            name_cg: 'DEX',
            slug: 'dex'
        },
        'snr-sonder': {
            id: 'snr-sonder',
            id_cg: 'sonder',
            symbol: 'SNR',
            symbol_cg: 'snr',
            name: 'SONDER',
            name_cg: 'SONDER',
            slug: 'sonder'
        },
        'suqa-suqa': {
            id: 'suqa-suqa',
            id_cg: 'suqa',
            symbol: 'SIN',
            symbol_cg: 'sin',
            name: 'SINOVATE',
            name_cg: 'SINOVATE',
            slug: 'sinovate'
        },
        'snd-snodecoin': {
            id: 'snd-snodecoin',
            id_cg: 'sandcoin',
            symbol: 'SND',
            symbol_cg: 'snd',
            name: 'SnodeCoin',
            name_cg: 'Sandcoin',
            slug: 'snodecoin'
        },
        'paws-paws-fund': {
            id: 'paws-paws-fund',
            id_cg: 'paws-funds',
            symbol: 'PAWS',
            symbol_cg: 'paws',
            name: 'PAWS Fund',
            name_cg: 'Paws Funds',
            slug: 'paws-fund'
        },
        'messe-messe-token': {
            id: 'messe-messe-token',
            id_cg: 'messe',
            symbol: 'MESSE',
            symbol_cg: 'messe',
            name: 'MESSE TOKEN',
            name_cg: 'Messe',
            slug: 'messe-token'
        },
        'lpk-kripton': {
            id: 'lpk-kripton',
            id_cg: 'l-pesa',
            symbol: 'LPK',
            symbol_cg: 'lpk',
            name: 'Kripton',
            name_cg: 'Kripton',
            slug: ''
        },
        'qbs-qbase': {
            id: 'qbs-qbase',
            id_cg: 'qbase',
            symbol: 'QBS',
            symbol_cg: 'qbs',
            name: 'Qbase',
            name_cg: 'QBase',
            slug: ''
        },
        'abet-altbet': {
            id: 'abet-altbet',
            id_cg: 'altbet',
            symbol: 'Abet',
            symbol_cg: 'abet',
            name: 'Altbet',
            name_cg: 'Altbet',
            slug: ''
        },
        'qch-qchi': {
            id: 'qch-qchi',
            id_cg: 'qchi',
            symbol: 'QCH',
            symbol_cg: 'qch',
            name: 'QChi',
            name_cg: 'QChi',
            slug: 'qchi'
        },
        'cyl-crystal-token': {
            id: 'cyl-crystal-token',
            id_cg: 'crystal-token',
            symbol: 'CYL',
            symbol_cg: 'cyl',
            name: 'Crystal Token',
            name_cg: 'Crystal Token',
            slug: 'crystal-token'
        },
        'wet-weshow-token': {
            id: 'wet-weshow-token',
            id_cg: 'weshow',
            symbol: 'WET',
            symbol_cg: 'wet',
            name: 'WeShow Token',
            name_cg: 'WeShow Token',
            slug: 'weshow-token'
        },
        'medibit-medibit': {
            id: 'medibit-medibit',
            id_cg: 'medibit',
            symbol: 'MEDIBIT',
            symbol_cg: 'medibit',
            name: 'MediBit',
            name_cg: 'MEDIBIT',
            slug: 'medibit'
        },
        'aias-aias-coin': {
            id: 'aias-aias-coin',
            id_cg: 'aiascoin',
            symbol: 'AIAS',
            symbol_cg: 'aias',
            name: 'AIAS Coin',
            name_cg: 'AIAScoin',
            slug: ''
        },
        'abs-absolute': {
            id: 'abs-absolute',
            id_cg: 'abs-chain',
            symbol: 'ABS',
            symbol_cg: 'abs',
            name: 'Absolute',
            name_cg: 'ABS Chain',
            slug: 'absolute'
        },
        'bgg-bgogo-token': {
            id: 'bgg-bgogo-token',
            id_cg: 'bgogo',
            symbol: 'BGG',
            symbol_cg: 'bgg',
            name: 'Bgogo Token',
            name_cg: 'Bgogo Token',
            slug: 'bgogo-token'
        },
        'ethm-ethereum-meta': {
            id: 'ethm-ethereum-meta',
            id_cg: 'ethereum-meta',
            symbol: 'ETHM',
            symbol_cg: 'ethm',
            name: 'Ethereum Meta',
            name_cg: 'Ethereum Meta',
            slug: 'ethereum-meta'
        },
        'cryp-crypticcoin': {
            id: 'cryp-crypticcoin',
            id_cg: 'cryptic-coin',
            symbol: 'CRYP',
            symbol_cg: 'cryp',
            name: 'CrypticCoin',
            name_cg: 'Cryptic Coin',
            slug: 'crypticcoin'
        },
        'btx-bitcoin-x': {
            id: 'btx-bitcoin-x',
            id_cg: 'bitcore',
            symbol: 'BTX',
            symbol_cg: 'btx',
            name: 'Bitcoin X',
            name_cg: 'Bitcore',
            slug: 'bitcore'
        },
        'ptn-palletone': {
            id: 'ptn-palletone',
            id_cg: 'palletone',
            symbol: 'PTN',
            symbol_cg: 'ptn',
            name: 'PalletOne',
            name_cg: 'PalletOneToken',
            slug: 'palletone'
        },
        'lion-coin-lion': {
            id: 'lion-coin-lion',
            id_cg: 'coinlion',
            symbol: 'LION',
            symbol_cg: 'lion',
            name: 'Coin Lion',
            name_cg: 'CoinLion',
            slug: 'coin-lion'
        },
        'bzl-bzlcoin': {
            id: 'bzl-bzlcoin',
            id_cg: 'bzlcoin',
            symbol: 'BZL',
            symbol_cg: 'bzl',
            name: 'BZLCOIN',
            name_cg: 'BZLCoin',
            slug: 'bzlcoin'
        },
        'inve-intervalue': {
            id: 'inve-intervalue',
            id_cg: 'intervalue',
            symbol: 'INVE',
            symbol_cg: 'inve',
            name: 'InterValue',
            name_cg: 'InterValue',
            slug: 'intervalue'
        },
        'xnv-nerva': {
            id: 'xnv-nerva',
            id_cg: 'nerva',
            symbol: 'XNV',
            symbol_cg: 'xnv',
            name: 'Nerva',
            name_cg: 'Nerva',
            slug: 'nerva'
        },
        'cdzc-cryptodezirecash': {
            id: 'cdzc-cryptodezirecash',
            id_cg: 'cryptodezirecash',
            symbol: 'CDZC',
            symbol_cg: 'cdzc',
            name: 'Crypto Dezire Cash',
            name_cg: 'CryptoDezireCash',
            slug: ''
        },
        'ncc-needscoin': {
            id: 'ncc-needscoin',
            id_cg: 'needscoin',
            symbol: 'NCC',
            symbol_cg: 'ncc',
            name: 'NeedsCoin',
            name_cg: 'NeedsCoin',
            slug: ''
        },
        'gali-galilel': {
            id: 'gali-galilel',
            id_cg: 'galilel',
            symbol: 'GALI',
            symbol_cg: 'gali',
            name: 'Galilel',
            name_cg: 'Galilel',
            slug: 'galilel'
        },
        'eti-etherinc': {
            id: 'eti-etherinc',
            id_cg: 'etherinc',
            symbol: 'ETI',
            symbol_cg: 'eti',
            name: 'EtherInc',
            name_cg: 'EtherInc',
            slug: 'etherinc'
        },
        'osa-optimal-shelf-availability-token': {
            id: 'osa-optimal-shelf-availability-token',
            id_cg: 'osa-decentralized',
            symbol: 'OSA',
            symbol_cg: 'osa',
            name: 'Optimal Shelf Availability Token',
            name_cg: 'Optimal Shelf Availability Token',
            slug: 'optimal-shelf-availability-token'
        },
        'impl-impleum': {
            id: 'impl-impleum',
            id_cg: 'impleum',
            symbol: 'IMPL',
            symbol_cg: 'impl',
            name: 'Impleum',
            name_cg: 'Impleum',
            slug: 'impleum'
        },
        'hum-humanscape': {
            id: 'hum-humanscape',
            id_cg: 'humanscape',
            symbol: 'HUM',
            symbol_cg: 'hum',
            name: 'Humanscape',
            name_cg: 'Humanscape',
            slug: 'humanscape'
        },
        'bsv-bitcoin-sv': {
            id: 'bsv-bitcoin-sv',
            id_cg: 'bitcoin-cash-sv',
            symbol: 'BSV',
            symbol_cg: 'bsv',
            name: 'Bitcoin SV',
            name_cg: 'Bitcoin SV',
            slug: 'bitcoin-sv'
        },
        'shmn-stronghands-masternode': {
            id: 'shmn-stronghands-masternode',
            id_cg: 'stronghands-masternode',
            symbol: 'SHMN',
            symbol_cg: 'shmn',
            name: 'StrongHands Masternode',
            name_cg: 'StrongHands Masternode',
            slug: 'stronghands-masternode'
        },
        'znz-zenzo': {
            id: 'znz-zenzo',
            id_cg: 'zenzo',
            symbol: 'ZNZ',
            symbol_cg: 'znz',
            name: 'Zenzo',
            name_cg: 'ZENZO',
            slug: ''
        },
        'shb-skyhub-coin': {
            id: 'shb-skyhub-coin',
            id_cg: 'skyhub',
            symbol: 'SHB',
            symbol_cg: 'shb',
            name: 'SkyHub Coin',
            name_cg: 'SkyHub',
            slug: 'skyhub-coin'
        },
        'bcdt-blockchain-certified-data-token': {
            id: 'bcdt-blockchain-certified-data-token',
            id_cg: 'bcdiploma',
            symbol: 'BCDT',
            symbol_cg: 'bcdt',
            name: 'Blockchain Certified Data Token',
            name_cg: 'BCDiploma',
            slug: 'blockchain-certified-data-token'
        },
        'athr-authora': {
            id: 'athr-authora',
            id_cg: 'authora-coin',
            symbol: 'ATHR',
            symbol_cg: 'athr',
            name: 'Authora',
            name_cg: 'Authora Coin',
            slug: ''
        },
        'vites-vites': {
            id: 'vites-vites',
            id_cg: 'vites',
            symbol: 'VITES',
            symbol_cg: 'vites',
            name: 'Vites',
            name_cg: 'Vites',
            slug: 'vites'
        },
        'vest-vestchain': {
            id: 'vest-vestchain',
            id_cg: 'vestchain',
            symbol: 'VEST',
            symbol_cg: 'vest',
            name: 'VestChain',
            name_cg: 'VestChain',
            slug: 'vestchain'
        },
        'udoo-howdoo': {
            id: 'udoo-howdoo',
            id_cg: 'howdoo',
            symbol: 'UDOO',
            symbol_cg: 'udoo',
            name: 'Howdoo',
            name_cg: 'Howdoo',
            slug: 'howdoo'
        },
        'dashg-dash-green': {
            id: 'dashg-dash-green',
            id_cg: 'dash-green',
            symbol: 'DASHG',
            symbol_cg: 'dashg',
            name: 'Dash Green',
            name_cg: 'Dash Green',
            slug: 'dash-green'
        },
        'cwv-cwv-chain': {
            id: 'cwv-cwv-chain',
            id_cg: 'cryptoworld-vip',
            symbol: 'CWV',
            symbol_cg: 'cwv',
            name: 'CWV Chain',
            name_cg: 'CryptoWorld.VIP',
            slug: 'cwv-chain'
        },
        'kat-kambria': {
            id: 'kat-kambria',
            id_cg: 'fund-yourself-now',
            symbol: 'KAT',
            symbol_cg: 'kat',
            name: 'Kambria',
            name_cg: 'Katalyse',
            slug: 'kambria'
        },
        'micro-micromines': {
            id: 'micro-micromines',
            id_cg: 'micromines',
            symbol: 'MICRO',
            symbol_cg: 'micro',
            name: 'Micromines',
            name_cg: 'Micromines',
            slug: 'micromines'
        },
        'arrr-pirate': {
            id: 'arrr-pirate',
            id_cg: 'pirate-chain',
            symbol: 'ARRR',
            symbol_cg: 'arrr',
            name: 'Pirate',
            name_cg: 'Pirate Chain',
            slug: 'pirate-chain'
        },
        'bold-boldman-capital': {
            id: 'bold-boldman-capital',
            id_cg: 'bold',
            symbol: 'BOLD',
            symbol_cg: 'bold',
            name: 'Boldman Capital',
            name_cg: 'Bold',
            slug: ''
        },
        'zex-zaddex': {
            id: 'zex-zaddex',
            id_cg: '',
            symbol: 'ZEXO',
            symbol_cg: '',
            name: 'Zaddex',
            name_cg: '',
            slug: ''
        },
        'ilc-ilcoin': {
            id: 'ilc-ilcoin',
            id_cg: 'ilcoin',
            symbol: 'ILC',
            symbol_cg: 'ilc',
            name: 'ILCoin',
            name_cg: 'ILCoin',
            slug: 'ilcoin'
        },
        'hqt-hyperquant': {
            id: 'hqt-hyperquant',
            id_cg: 'hyperquant',
            symbol: 'HQT',
            symbol_cg: 'hqt',
            name: 'HyperQuant',
            name_cg: 'HyperQuant',
            slug: 'hyperquant'
        },
        'stacs-stacs': {
            id: 'stacs-stacs',
            id_cg: 'stacs-token',
            symbol: 'STACS',
            symbol_cg: 'stacs',
            name: 'STACS',
            name_cg: 'STACS Token',
            slug: 'stacs'
        },
        'beat-beat': {
            id: 'beat-beat',
            id_cg: 'beat',
            symbol: 'BEAT',
            symbol_cg: 'beat',
            name: 'BEAT',
            name_cg: 'BEAT',
            slug: 'beat'
        },
        'gxe-crypto-union': {
            id: 'gxe-crypto-union',
            id_cg: '',
            symbol: 'OURC',
            symbol_cg: '',
            name: 'Union Revolution',
            name_cg: '',
            slug: ''
        },
        'ssx-stake-share': {
            id: 'ssx-stake-share',
            id_cg: 'stakeshare',
            symbol: 'SSX',
            symbol_cg: 'ssx',
            name: 'Stake Share',
            name_cg: 'StakeShare',
            slug: ''
        },
        'btnt-bitnautic-token': {
            id: 'btnt-bitnautic-token',
            id_cg: 'bitnautic',
            symbol: 'BTNT',
            symbol_cg: 'btnt',
            name: 'BitNautic Token',
            name_cg: 'BitNautic',
            slug: 'bitnautic-token'
        },
        'vrsc-verus-coin': {
            id: 'vrsc-verus-coin',
            id_cg: 'verus-coin',
            symbol: 'VRSC',
            symbol_cg: 'vrsc',
            name: 'Verus Coin',
            name_cg: 'Verus Coin',
            slug: ''
        },
        'btcl-btc-lite': {
            id: 'btcl-btc-lite',
            id_cg: 'btc-lite',
            symbol: 'BTCL',
            symbol_cg: 'btcl',
            name: 'BTC Lite',
            name_cg: 'BTC Lite',
            slug: 'btc-lite'
        },
        'btb-bitball': {
            id: 'btb-bitball',
            id_cg: 'bitball',
            symbol: 'BTB',
            symbol_cg: 'btb',
            name: 'BitBall',
            name_cg: 'Bitball',
            slug: 'bitball'
        },
        'xbase-eterbase': {
            id: 'xbase-eterbase',
            id_cg: 'eterbase',
            symbol: 'XBASE',
            symbol_cg: 'xbase',
            name: 'Eterbase Coin',
            name_cg: 'Eterbase Coin',
            slug: 'eterbase-coin'
        },
        'oio-online': {
            id: 'oio-online',
            id_cg: 'online',
            symbol: 'OIO',
            symbol_cg: 'oio',
            name: 'Online',
            name_cg: 'Online',
            slug: 'online'
        },
        'agcmn-agricoin-masternode': {
            id: 'agcmn-agricoin-masternode',
            id_cg: 'agricoin',
            symbol: 'AGCMN',
            symbol_cg: 'agcmn',
            name: 'Agricoin Masternode',
            name_cg: 'Agricoin',
            slug: ''
        },
        'nzl-zealium': {
            id: 'nzl-zealium',
            id_cg: 'zealium',
            symbol: 'NZL',
            symbol_cg: 'nzl',
            name: 'Zealium',
            name_cg: 'Zealium',
            slug: 'zealium'
        },
        'equad-quadrantprotocol': {
            id: 'equad-quadrantprotocol',
            id_cg: 'quadrant-protocol',
            symbol: 'EQUAD',
            symbol_cg: 'equad',
            name: 'QuadrantProtocol',
            name_cg: 'Quadrant Protocol',
            slug: 'quadrantprotocol'
        },
        'rbtc-smart-bitcoin': {
            id: 'rbtc-smart-bitcoin',
            id_cg: 'rootstock',
            symbol: 'RBTC',
            symbol_cg: 'rbtc',
            name: 'RSK Smart Bitcoin',
            name_cg: 'Rootstock RSK',
            slug: 'rsk-smart-bitcoin'
        },
        'odin-odin': {
            id: 'odin-odin',
            id_cg: 'odin-blockchain',
            symbol: 'ODIN',
            symbol_cg: 'odin',
            name: 'ODIN Blockchain',
            name_cg: 'ODIN Blockchain',
            slug: ''
        },
        'mxc-machine-xchange-coin': {
            id: 'mxc-machine-xchange-coin',
            id_cg: 'mxc',
            symbol: 'MXC',
            symbol_cg: 'mxc',
            name: 'Machine Xchange Coin',
            name_cg: 'Machine Xchange Coin',
            slug: 'machine-xchange-coin'
        },
        'bkc-bankcoin-cash': {
            id: 'bkc-bankcoin-cash',
            id_cg: 'balkan-coin',
            symbol: 'BKC',
            symbol_cg: 'bkc',
            name: 'Bankcoin Cash',
            name_cg: 'Balkan coin',
            slug: ''
        },
        'axe-axe': {
            id: 'axe-axe',
            id_cg: 'axe',
            symbol: 'AXE',
            symbol_cg: 'axe',
            name: 'AXE',
            name_cg: 'Axe',
            slug: 'axe'
        },
        'lkr-lkrcoin': {
            id: 'lkr-lkrcoin',
            id_cg: 'lkr-coin',
            symbol: 'LKR',
            symbol_cg: 'lkr',
            name: 'LKRcoin',
            name_cg: 'LKR Coin',
            slug: ''
        },
        'znd-zenad': {
            id: 'znd-zenad',
            id_cg: 'zenad',
            symbol: 'ZND',
            symbol_cg: 'znd',
            name: 'Zenad',
            name_cg: 'Zenad',
            slug: ''
        },
        'seko-sekopay': {
            id: 'seko-sekopay',
            id_cg: 'sekopay',
            symbol: 'SEKO',
            symbol_cg: 'seko',
            name: 'Sekopay',
            name_cg: 'Sekopay',
            slug: ''
        },
        'bze-bzedge': {
            id: 'bze-bzedge',
            id_cg: 'bzedge',
            symbol: 'BZE',
            symbol_cg: 'bze',
            name: 'BZEdge',
            name_cg: 'BZEdge',
            slug: 'bzedge'
        },
        'lrm-lrm-coin': {
            id: 'lrm-lrm-coin',
            id_cg: 'liquid-regenerative-medicine-coin',
            symbol: 'LRM',
            symbol_cg: 'lrm',
            name: 'LRM Coin',
            name_cg: 'Liquid Regenerative Medicine Coin',
            slug: 'lrm-coin'
        },
        'sat-social-activity-token': {
            id: 'sat-social-activity-token',
            id_cg: 'sphere-social',
            symbol: 'SAT',
            symbol_cg: 'sat',
            name: 'Social Activity Token',
            name_cg: 'Social Activity Token',
            slug: 'sphere'
        },
        'safe-safecoin': {
            id: 'safe-safecoin',
            id_cg: 'safe-coin',
            symbol: 'SAFE',
            symbol_cg: 'safe',
            name: 'SafeCoin',
            name_cg: 'Safe',
            slug: 'safecoin'
        },
        'foam-foam': {
            id: 'foam-foam',
            id_cg: 'foam-protocol',
            symbol: 'FOAM',
            symbol_cg: 'foam',
            name: 'FOAM',
            name_cg: 'FOAM',
            slug: 'foam'
        },
        'lml-lisk-machine-learning': {
            id: 'lml-lisk-machine-learning',
            id_cg: 'lisk-machine-learning',
            symbol: 'LML',
            symbol_cg: 'lml',
            name: 'Lisk Machine Learning',
            name_cg: 'Lisk Machine Learning',
            slug: 'lisk-machine-learning'
        },
        'frag-fragcash': {
            id: 'frag-fragcash',
            id_cg: 'fragcash',
            symbol: 'FRAG',
            symbol_cg: 'frag',
            name: 'FragCash',
            name_cg: 'FragCash',
            slug: ''
        },
        'temco-temco': {
            id: 'temco-temco',
            id_cg: 'temco',
            symbol: 'TEMCO',
            symbol_cg: 'temco',
            name: 'TEMCO',
            name_cg: 'TEMCO',
            slug: 'temco'
        },
        'xsc-hyperspace': {
            id: 'xsc-hyperspace',
            id_cg: 'crowdstart-coin',
            symbol: 'XSC',
            symbol_cg: 'xsc',
            name: 'Hyperspace',
            name_cg: 'Crowdstart Coin',
            slug: ''
        },
        'dlb-dlb-token': {
            id: 'dlb-dlb-token',
            id_cg: 'data-link-base',
            symbol: 'DLB',
            symbol_cg: 'dlb',
            name: 'DLB token',
            name_cg: 'Data Link Base',
            slug: ''
        },
        'opq-opacity': {
            id: 'opq-opacity',
            id_cg: 'opacity',
            symbol: 'OPQ',
            symbol_cg: 'opq',
            name: 'Opacity',
            name_cg: 'Opacity',
            slug: 'opacity'
        },
        'cro-cryptocom-chain': {
            id: 'cro-cryptocom-chain',
            id_cg: 'crypto-com-chain',
            symbol: 'CRO',
            symbol_cg: 'cro',
            name: 'Crypto.com Chain',
            name_cg: 'Crypto.com Chain',
            slug: 'crypto-com-chain'
        },
        'actn-action-coin': {
            id: 'actn-action-coin',
            id_cg: 'action-coin',
            symbol: 'ACTN',
            symbol_cg: 'actn',
            name: 'Action Coin',
            name_cg: 'Action Coin',
            slug: ''
        },
        'aergo-aergo': {
            id: 'aergo-aergo',
            id_cg: 'aergo',
            symbol: 'AERGO',
            symbol_cg: 'aergo',
            name: 'Aergo',
            name_cg: 'Aergo',
            slug: 'aergo'
        },
        'skch-skychain': {
            id: 'skch-skychain',
            id_cg: 'skychain',
            symbol: 'SKCH',
            symbol_cg: 'skch',
            name: 'Skychain',
            name_cg: 'Skychain',
            slug: 'skychain'
        },
        'exo-exosis': {
            id: 'exo-exosis',
            id_cg: 'exosis',
            symbol: 'EXO',
            symbol_cg: 'exo',
            name: 'Exosis',
            name_cg: 'Exosis',
            slug: 'exosis'
        },
        'vdl-vidulum': {
            id: 'vdl-vidulum',
            id_cg: 'vidulum',
            symbol: 'VDL',
            symbol_cg: 'vdl',
            name: 'Vidulum',
            name_cg: 'Vidulum',
            slug: ''
        },
        'bid-blockbid-token': {
            id: 'bid-blockbid-token',
            id_cg: 'bidcoin',
            symbol: 'BID',
            symbol_cg: 'bid',
            name: 'Blockbid Token',
            name_cg: 'Bidcoin',
            slug: ''
        },
        'cpt-contents-protocol': {
            id: 'cpt-contents-protocol',
            id_cg: 'contents-protocol',
            symbol: 'CPT',
            symbol_cg: 'cpt',
            name: 'Contents Protocol',
            name_cg: 'Contents Protocol',
            slug: 'contents-protocol'
        },
        'pxg-playgame-token': {
            id: 'pxg-playgame-token',
            id_cg: 'playgame',
            symbol: 'PXG',
            symbol_cg: 'pxg',
            name: 'PlayGame',
            name_cg: 'PlayGame',
            slug: 'playgame'
        },
        'tret-tourist-review-token': {
            id: 'tret-tourist-review-token',
            id_cg: 'tourist-review-token',
            symbol: 'TRET',
            symbol_cg: 'tret',
            name: 'Tourist Review Token',
            name_cg: 'Tourist Review Token',
            slug: ''
        },
        'usds-stronghold-usd': {
            id: 'usds-stronghold-usd',
            id_cg: '',
            symbol: 'USDS',
            symbol_cg: '',
            name: 'Stronghold USD',
            name_cg: '',
            slug: ''
        },
        'lpt-livepeer': {
            id: 'lpt-livepeer',
            id_cg: 'livepeer',
            symbol: 'LPT',
            symbol_cg: 'lpt',
            name: 'Livepeer',
            name_cg: 'Livepeer',
            slug: 'livepeer'
        },
        'tnpc-the-new-public-coin': {
            id: 'tnpc-the-new-public-coin',
            id_cg: 'the-new-public-coin',
            symbol: 'TNPC',
            symbol_cg: 'tnpc',
            name: 'THE NEW PUBLIC COIN',
            name_cg: 'THE NEW PUBLIC COIN',
            slug: ''
        },
        'yce-myce': {
            id: 'yce-myce',
            id_cg: 'myce',
            symbol: 'YCE',
            symbol_cg: 'yce',
            name: 'MYCE',
            name_cg: 'MYCE',
            slug: ''
        },
        'eli-elicoin': {
            id: 'eli-elicoin',
            id_cg: 'elicoin',
            symbol: 'ELI',
            symbol_cg: 'eli',
            name: 'Elicoin',
            name_cg: 'Elicoin',
            slug: ''
        },
        'echt-e-chat': {
            id: 'echt-e-chat',
            id_cg: 'e-chat',
            symbol: 'ECHT',
            symbol_cg: 'echt',
            name: 'e-Chat',
            name_cg: 'e-Chat',
            slug: 'e-chat'
        },
        'tiox-trade-token-x': {
            id: 'tiox-trade-token-x',
            id_cg: 'trade-token',
            symbol: 'TIOX',
            symbol_cg: 'tiox',
            name: 'Trade Token X',
            name_cg: 'Trade Token X',
            slug: 'trade-token-x'
        },
        'tena-tena': {
            id: 'tena-tena',
            id_cg: 'tena',
            symbol: 'TENA',
            symbol_cg: 'tena',
            name: 'TENA',
            name_cg: 'TENA',
            slug: 'tena'
        },
        'snow-snowblossom': {
            id: 'snow-snowblossom',
            id_cg: 'snowblossom',
            symbol: 'SNOW',
            symbol_cg: 'snow',
            name: 'SnowBlossom',
            name_cg: 'SnowBlossom',
            slug: ''
        },
        'xorn-xorn': {
            id: 'xorn-xorn',
            id_cg: 'xorn',
            symbol: 'XORN',
            symbol_cg: 'xorn',
            name: 'Xorn',
            name_cg: 'XORN',
            slug: ''
        },
        'herb-herbalist-token': {
            id: 'herb-herbalist-token',
            id_cg: 'herb',
            symbol: 'HERB',
            symbol_cg: 'herb',
            name: 'Herbalist Token',
            name_cg: 'HERB',
            slug: 'herbalist-token'
        },
        'becn-beacon': {
            id: 'becn-beacon',
            id_cg: 'beacon',
            symbol: 'BECN',
            symbol_cg: 'becn',
            name: 'Beacon',
            name_cg: 'Beacon',
            slug: 'beacon'
        },
        'hmn-hostmasternode': {
            id: 'hmn-hostmasternode',
            id_cg: 'hostmasternode',
            symbol: 'HMN',
            symbol_cg: 'hmn',
            name: 'Hostmasternode',
            name_cg: 'Hostmasternode',
            slug: ''
        },
        'cnus-coinus': {
            id: 'cnus-coinus',
            id_cg: 'coinus',
            symbol: 'CNUS',
            symbol_cg: 'cnus',
            name: 'CoinUs',
            name_cg: 'CoinUs',
            slug: 'coinus'
        },
        'cova-cova': {
            id: 'cova-cova',
            id_cg: 'covalent',
            symbol: 'COVA',
            symbol_cg: 'cova',
            name: 'COVA',
            name_cg: 'Covalent',
            slug: 'cova'
        },
        'tvnt-travelnote': {
            id: 'tvnt-travelnote',
            id_cg: 'travelnote',
            symbol: 'TVNT',
            symbol_cg: 'tvnt',
            name: 'TravelNote',
            name_cg: 'TravelNote',
            slug: 'travelnote'
        },
        'nplc-plus-coin': {
            id: 'nplc-plus-coin',
            id_cg: 'plus-coin',
            symbol: 'NPLC',
            symbol_cg: 'nplc',
            name: 'Plus-Coin',
            name_cg: 'Plus Coin',
            slug: 'plus-coin'
        },
        'xfc-footballcoin': {
            id: 'xfc-footballcoin',
            id_cg: 'football-coin',
            symbol: 'XFC',
            symbol_cg: 'xfc',
            name: 'Footballcoin',
            name_cg: 'Football Coin',
            slug: 'footballcoin'
        },
        'b2n-bitcoin2network': {
            id: 'b2n-bitcoin2network',
            id_cg: 'bitcoin2network',
            symbol: 'B2N',
            symbol_cg: 'b2n',
            name: 'bitcoin2network',
            name_cg: 'Bitcoin2network',
            slug: 'bitcoin2network'
        },
        'next-nextexchange': {
            id: 'next-nextexchange',
            id_cg: 'nextexchange',
            symbol: 'NEXT',
            symbol_cg: 'next',
            name: 'Next.exchange',
            name_cg: 'NEXT.exchange',
            slug: 'next-exchange'
        },
        'brc-baer-chain': {
            id: 'brc-baer-chain',
            id_cg: 'baer-chain',
            symbol: 'BRC',
            symbol_cg: 'brc',
            name: 'Baer Chain',
            name_cg: 'Baer Chain',
            slug: 'baer-chain'
        },
        'hlix-helix': {
            id: 'hlix-helix',
            id_cg: 'helix',
            symbol: 'HLIX',
            symbol_cg: 'hlix',
            name: 'Helix',
            name_cg: 'Helix',
            slug: ''
        },
        'upx-uplexa': {
            id: 'upx-uplexa',
            id_cg: 'uplexa',
            symbol: 'UPX',
            symbol_cg: 'upx',
            name: 'uPlexa',
            name_cg: 'uPlexa',
            slug: 'uplexa'
        },
        'fiii-fiii': {
            id: 'fiii-fiii',
            id_cg: 'fiii',
            symbol: 'FIII',
            symbol_cg: 'fiii',
            name: 'Fiii',
            name_cg: 'Fiii',
            slug: 'fiii'
        },
        'herc-hercules': {
            id: 'herc-hercules',
            id_cg: 'hercules',
            symbol: 'HERC',
            symbol_cg: 'herc',
            name: 'Hercules',
            name_cg: 'Hercules',
            slug: 'hercules'
        },
        'reex-reecore': {
            id: 'reex-reecore',
            id_cg: 'reecore',
            symbol: 'REEX',
            symbol_cg: 'reex',
            name: 'Reecore',
            name_cg: 'Reecore',
            slug: ''
        },
        'ftn-fountain': {
            id: 'ftn-fountain',
            id_cg: 'fountain',
            symbol: 'FTN',
            symbol_cg: 'ftn',
            name: 'Fountain',
            name_cg: 'Fountain',
            slug: 'fountain'
        },
        'btt-bittorrent': {
            id: 'btt-bittorrent',
            id_cg: 'bittorrent-2',
            symbol: 'BTT',
            symbol_cg: 'btt',
            name: 'BitTorrent',
            name_cg: 'BitTorrent',
            slug: 'bittorrent'
        },
        'fetch-ai': {
            id: 'fetch-ai',
            id_cg: 'fetch-ai',
            symbol: 'FET',
            symbol_cg: 'fet',
            name: 'Fetch AI',
            name_cg: 'Fetch AI',
            slug: 'fetch'
        },
        'hedg-hedgetrade': {
            id: 'hedg-hedgetrade',
            id_cg: 'hedgetrade',
            symbol: 'HEDG',
            symbol_cg: 'hedg',
            name: 'HedgeTrade',
            name_cg: 'HedgeTrade',
            slug: 'hedgetrade'
        },
        'quin-quinads': {
            id: 'quin-quinads',
            id_cg: 'quinads',
            symbol: 'QUIN',
            symbol_cg: 'quin',
            name: 'QUINADS',
            name_cg: 'QUINADS',
            slug: 'quinads'
        },
        'shx-stronghold-token': {
            id: 'shx-stronghold-token',
            id_cg: 'stronghold-token',
            symbol: 'SHX',
            symbol_cg: 'shx',
            name: 'Stronghold Token',
            name_cg: 'Stronghold Token',
            slug: 'stronghold-token'
        },
        'xpc-experience-chain': {
            id: 'xpc-experience-chain',
            id_cg: 'experience-chain',
            symbol: 'XPC',
            symbol_cg: 'xpc',
            name: 'eXPerience Chain',
            name_cg: 'eXPerience Chain',
            slug: 'experience-chain'
        },
        'bsh-bitcoin-stash': {
            id: 'bsh-bitcoin-stash',
            id_cg: 'bitcoin-stash',
            symbol: 'BSH',
            symbol_cg: 'bsh',
            name: 'Bitcoin Stash',
            name_cg: 'Bitcoin Stash',
            slug: ''
        },
        'prx-proxynode': {
            id: 'prx-proxynode',
            id_cg: 'proxynode',
            symbol: 'PRX',
            symbol_cg: 'prx',
            name: 'ProxyNode',
            name_cg: 'ProxyNode',
            slug: 'proxynode'
        },
        'wco-winco': {
            id: 'wco-winco',
            id_cg: 'winco',
            symbol: 'WCO',
            symbol_cg: 'wco',
            name: 'Winco',
            name_cg: 'Winco',
            slug: 'winco'
        },
        'agvc-agavecoin': {
            id: 'agvc-agavecoin',
            id_cg: 'agavecoin',
            symbol: 'AGVC',
            symbol_cg: 'agvc',
            name: 'AgaveCoin',
            name_cg: 'AgaveCoin',
            slug: 'agavecoin'
        },
        'awc-atomic-wallet-coin': {
            id: 'awc-atomic-wallet-coin',
            id_cg: 'atomic-wallet-coin',
            symbol: 'AWC',
            symbol_cg: 'awc',
            name: 'Atomic Wallet Coin',
            name_cg: 'Atomic Wallet Coin',
            slug: 'atomic-wallet-coin'
        },
        'rom-romtoken': {
            id: 'rom-romtoken',
            id_cg: 'rom-token',
            symbol: 'ROM',
            symbol_cg: 'rom',
            name: 'ROMToken',
            name_cg: 'ROM Token',
            slug: 'romtoken'
        },
        'swipp-swipp': {
            id: 'swipp-swipp',
            id_cg: 'swipp',
            symbol: 'SWIPP',
            symbol_cg: 'swipp',
            name: 'Swipp',
            name_cg: 'Swipp',
            slug: ''
        },
        'fxp-fxpay': {
            id: 'fxp-fxpay',
            id_cg: 'fxpay',
            symbol: 'FXP',
            symbol_cg: 'fxp',
            name: 'FXPay',
            name_cg: 'FXPay',
            slug: ''
        },
        'kze-almeela': {
            id: 'kze-almeela',
            id_cg: 'almeela',
            symbol: 'KZE',
            symbol_cg: 'kze',
            name: 'Almeela',
            name_cg: 'Almeela',
            slug: 'almeela'
        },
        'ult-ultiledger': {
            id: 'ult-ultiledger',
            id_cg: 'ultiledger',
            symbol: 'ULT',
            symbol_cg: 'ult',
            name: 'Ultiledger',
            name_cg: 'Ultiledger',
            slug: 'ultiledger'
        },
        'btmx-bitmax-token': {
            id: 'btmx-bitmax-token',
            id_cg: 'bmax',
            symbol: 'BTMX',
            symbol_cg: 'btmx',
            name: 'BitMax Token',
            name_cg: 'Bitmax Token',
            slug: 'bitmax-token'
        },
        'btcc-bitcoincore': {
            id: 'btcc-bitcoincore',
            id_cg: 'bitcoin-core',
            symbol: 'BTCC',
            symbol_cg: 'btcc',
            name: 'BitcoinCore',
            name_cg: 'Bitcoin Core',
            slug: ''
        },
        'ctt-cryptoinvest': {
            id: 'ctt-cryptoinvest',
            id_cg: 'cryptoinvest',
            symbol: 'CTT',
            symbol_cg: 'ctt',
            name: 'Cryptoinvest',
            name_cg: 'cryptoinvest',
            slug: 'cryptoinvest'
        },
        'roco-roiyal-coin': {
            id: 'roco-roiyal-coin',
            id_cg: 'roiyal-coin',
            symbol: 'ROCO',
            symbol_cg: 'roco',
            name: 'ROIyal Coin',
            name_cg: 'ROIyal Coin',
            slug: 'roiyal-coin'
        },
        'cent-centercoin': {
            id: 'cent-centercoin',
            id_cg: 'centercoin',
            symbol: 'CENT',
            symbol_cg: 'cent',
            name: 'CENTERCOIN',
            name_cg: 'CENTERCOIN',
            slug: 'centercoin'
        },
        'snpc-snapcoin': {
            id: 'snpc-snapcoin',
            id_cg: 'snapparazzi',
            symbol: 'SNPC',
            symbol_cg: 'snpc',
            name: 'SnapCoin',
            name_cg: 'Snapparazzi',
            slug: 'snapcoin'
        },
        'aen-aencoin': {
            id: 'aen-aencoin',
            id_cg: 'aenco',
            symbol: 'AEN',
            symbol_cg: 'aen',
            name: 'Aencoin',
            name_cg: 'Aenco',
            slug: 'aencoin'
        },
        'mox-mox': {
            id: 'mox-mox',
            id_cg: 'mox',
            symbol: 'MOX',
            symbol_cg: 'mox',
            name: 'MoX',
            name_cg: 'MoX',
            slug: 'mox'
        },
        'cvnt-content-value-network': {
            id: 'cvnt-content-value-network',
            id_cg: 'content-value-network',
            symbol: 'CVNT',
            symbol_cg: 'cvnt',
            name: 'Content Value Network',
            name_cg: 'Content Value Network',
            slug: 'content-value-network'
        },
        'imgc-imagecash': {
            id: 'imgc-imagecash',
            id_cg: 'imagecash',
            symbol: 'IMGC',
            symbol_cg: 'imgc',
            name: 'ImageCash',
            name_cg: 'ImageCash',
            slug: ''
        },
        'b2g-bitcoiin': {
            id: 'b2g-bitcoiin',
            id_cg: 'bitcoiin',
            symbol: 'B2G',
            symbol_cg: 'b2g',
            name: 'Bitcoiin',
            name_cg: 'Bitcoiin',
            slug: 'bitcoiin'
        },
        'xta-italo': {
            id: 'xta-italo',
            id_cg: 'italo',
            symbol: 'XTA',
            symbol_cg: 'xta',
            name: 'Italo',
            name_cg: 'Italo',
            slug: 'italo'
        },
        'mcw-mocrow': {
            id: 'mcw-mocrow',
            id_cg: 'mocrow',
            symbol: 'MCW',
            symbol_cg: 'mcw',
            name: 'Mocrow',
            name_cg: 'Mocrow',
            slug: 'mocrow'
        },
        'vnt-vanta-network': {
            id: 'vnt-vanta-network',
            id_cg: 'vanta-network',
            symbol: 'VNT',
            symbol_cg: 'vnt',
            name: 'Vanta Network',
            name_cg: 'Vanta Network',
            slug: 'vanta-network'
        },
        'sedo-sedo-pow-token': {
            id: 'sedo-sedo-pow-token',
            id_cg: 'sedo-pow-token',
            symbol: 'SEDO',
            symbol_cg: 'sedo',
            name: 'SEDO POW TOKEN',
            name_cg: 'SEDO POW TOKEN',
            slug: ''
        },
        'pdg-private-datagram': {
            id: 'pdg-private-datagram',
            id_cg: 'private-datagram',
            symbol: 'PDG',
            symbol_cg: 'pdg',
            name: 'Private DataGram',
            name_cg: 'Private DataGram',
            slug: ''
        },
        'm2o-m2o': {
            id: 'm2o-m2o',
            id_cg: 'm20-project',
            symbol: 'M2O',
            symbol_cg: 'm2o',
            name: 'M2O',
            name_cg: 'M2O',
            slug: 'm2o'
        },
        'inx-inmax': {
            id: 'inx-inmax',
            id_cg: 'inmax',
            symbol: 'INX',
            symbol_cg: 'inx',
            name: 'INMAX',
            name_cg: 'InMax',
            slug: 'inmax'
        },
        'gbt-globatalent': {
            id: 'gbt-globatalent',
            id_cg: 'globatalent',
            symbol: 'GBT',
            symbol_cg: 'gbt',
            name: 'Globatalent',
            name_cg: 'Globatalent',
            slug: 'globatalent'
        },
        'sntvt-sentivate': {
            id: 'sntvt-sentivate',
            id_cg: 'sentivate',
            symbol: 'SNTVT',
            symbol_cg: 'sntvt',
            name: 'Sentivate',
            name_cg: 'Sentivate',
            slug: 'sentivate'
        },
        'quot-quotation-projects': {
            id: 'quot-quotation-projects',
            id_cg: 'quotation-coin',
            symbol: 'QUOT',
            symbol_cg: 'quot',
            name: 'QUOTATION PROJECTS',
            name_cg: 'Quotation Coin',
            slug: ''
        },
        'marc-market-arbitrage-coin': {
            id: 'marc-market-arbitrage-coin',
            id_cg: 'market-arbitrage-coin',
            symbol: 'MARC',
            symbol_cg: 'marc',
            name: 'Market Arbitrage Coin',
            name_cg: 'Market Arbitrage Coin',
            slug: 'arbitragect'
        },
        'pcr-paycore': {
            id: 'pcr-paycore',
            id_cg: 'paycore',
            symbol: 'PCR',
            symbol_cg: 'pcr',
            name: 'Paycore',
            name_cg: 'Paycore',
            slug: ''
        },
        'xsm-spectrumcash': {
            id: 'xsm-spectrumcash',
            id_cg: 'spectrum-cash',
            symbol: 'XSM',
            symbol_cg: 'xsm',
            name: 'SpectrumCash',
            name_cg: 'Spectrum Cash',
            slug: 'spectrumcash'
        },
        'hyn-hyperion': {
            id: 'hyn-hyperion',
            id_cg: 'hyperion',
            symbol: 'HYN',
            symbol_cg: 'hyn',
            name: 'Hyperion',
            name_cg: 'Hyperion',
            slug: 'hyperion'
        },
        'okb-okb': {
            id: 'okb-okb',
            id_cg: 'okb',
            symbol: 'OKB',
            symbol_cg: 'okb',
            name: 'OKB',
            name_cg: 'OKB',
            slug: 'okb'
        },
        'obsr-observer': {
            id: 'obsr-observer',
            id_cg: 'observer-coin',
            symbol: 'OBSR',
            symbol_cg: 'obsr',
            name: 'Observer',
            name_cg: 'OBSERVER Coin',
            slug: 'observer'
        },
        'gmbc-gamblica': {
            id: 'gmbc-gamblica',
            id_cg: 'gamblica',
            symbol: 'GMBC',
            symbol_cg: 'gmbc',
            name: 'Gamblica',
            name_cg: 'Gamblica',
            slug: 'gamblica'
        },
        'lumber-lumber': {
            id: 'lumber-lumber',
            id_cg: '',
            symbol: 'LUMBER',
            symbol_cg: '',
            name: 'LUMBER',
            name_cg: '',
            slug: ''
        },
        'cof-coffeecoin': {
            id: 'cof-coffeecoin',
            id_cg: 'coffeecoin',
            symbol: 'COF',
            symbol_cg: 'cof',
            name: 'CoffeeCoin',
            name_cg: 'CoffeeCoin',
            slug: ''
        },
        'ctx-centauri': {
            id: 'ctx-centauri',
            id_cg: 'centauri-coin',
            symbol: 'CTX',
            symbol_cg: 'ctx',
            name: 'Centauri',
            name_cg: 'Centauri Coin',
            slug: 'centauri'
        },
        'rif-rif-token': {
            id: 'rif-rif-token',
            id_cg: 'rif-token',
            symbol: 'RIF',
            symbol_cg: 'rif',
            name: 'RIF Token',
            name_cg: 'RIF Token',
            slug: 'rif-token'
        },
        'bf-bitforex': {
            id: 'bf-bitforex',
            id_cg: 'bitforex',
            symbol: 'BF',
            symbol_cg: 'bf',
            name: 'Bitforex',
            name_cg: 'Bitforex Token',
            slug: ''
        },
        '1sg-1sg': {
            id: '1sg-1sg',
            id_cg: '1sg',
            symbol: '1SG',
            symbol_cg: '1sg',
            name: '1SG',
            name_cg: '1SG',
            slug: '1sg'
        },
        'dali-dalichain': {
            id: 'dali-dalichain',
            id_cg: 'dalichain',
            symbol: 'DALI',
            symbol_cg: 'dali',
            name: 'Dalichain',
            name_cg: 'Dalichain',
            slug: ''
        },
        'dice-betdice': {
            id: 'dice-betdice',
            id_cg: 'betdice',
            symbol: 'DICE',
            symbol_cg: 'dice',
            name: 'BetDice',
            name_cg: 'BetDice',
            slug: ''
        },
        'btp-bitcoin-pay': {
            id: 'btp-bitcoin-pay',
            id_cg: 'bitcoin-pay',
            symbol: 'BTP',
            symbol_cg: 'btp',
            name: 'Bitcoin Pay',
            name_cg: 'Bitcoin Pay',
            slug: ''
        },
        'ggt-global-gold-token': {
            id: 'ggt-global-gold-token',
            id_cg: 'global-gold-token',
            symbol: 'GGT',
            symbol_cg: 'ggt',
            name: 'Global Gold Token',
            name_cg: 'Global Gold Token',
            slug: ''
        },
        'hpt-huobi-pool-token': {
            id: 'hpt-huobi-pool-token',
            id_cg: 'huobi-pool-token',
            symbol: 'HPT',
            symbol_cg: 'hpt',
            name: 'Huobi Pool Token',
            name_cg: 'Huobi Pool Token',
            slug: 'huobi-pool-token'
        },
        'smartup-smartup': {
            id: 'smartup-smartup',
            id_cg: 'smartup',
            symbol: 'SMARTUP',
            symbol_cg: 'smartup',
            name: 'Smartup',
            name_cg: 'Smartup',
            slug: 'smartup'
        },
        'bgc-bagcoin': {
            id: 'bgc-bagcoin',
            id_cg: 'bagcoin',
            symbol: 'BGC',
            symbol_cg: 'bgc',
            name: 'Bagcoin',
            name_cg: 'Bagcoin',
            slug: ''
        },
        'eosc-eosforce': {
            id: 'eosc-eosforce',
            id_cg: 'eosforce',
            symbol: 'EOSC',
            symbol_cg: 'eosc',
            name: 'EosForce',
            name_cg: 'EosForce',
            slug: ''
        },
        'htb-hotbit-token': {
            id: 'htb-hotbit-token',
            id_cg: 'hotbit-token',
            symbol: 'HTB',
            symbol_cg: 'htb',
            name: 'Hotbit Token',
            name_cg: 'Hotbit Token',
            slug: ''
        },
        'ytc-yibitcoin': {
            id: 'ytc-yibitcoin',
            id_cg: 'yibitcoin',
            symbol: 'YTC',
            symbol_cg: 'ytc',
            name: 'Yibitcoin',
            name_cg: 'Yibitcoin',
            slug: ''
        },
        'ida-ida': {
            id: 'ida-ida',
            id_cg: 'ida',
            symbol: 'IDA',
            symbol_cg: 'ida',
            name: 'IDA',
            name_cg: 'IDA',
            slug: ''
        },
        's4f-s4fe': {
            id: 's4f-s4fe',
            id_cg: 's4fe',
            symbol: 'S4F',
            symbol_cg: 's4f',
            name: 'S4FE',
            name_cg: 'S4FE',
            slug: 's4fe'
        },
        'fcc-filecash': {
            id: 'fcc-filecash',
            id_cg: 'filecash',
            symbol: 'FCC',
            symbol_cg: 'fcc',
            name: 'FileCash',
            name_cg: 'FileCash',
            slug: ''
        },
        'zat-zatgo': {
            id: 'zat-zatgo',
            id_cg: 'zatgo',
            symbol: 'ZAT',
            symbol_cg: 'zat',
            name: 'Zatgo',
            name_cg: 'Zatgo',
            slug: ''
        },
        'cai-cai-token': {
            id: 'cai-cai-token',
            id_cg: 'cai-token',
            symbol: 'CAI',
            symbol_cg: 'cai',
            name: 'Cai Token',
            name_cg: 'Cai Token',
            slug: ''
        },
        'lx-lunarx': {
            id: 'lx-lunarx',
            id_cg: 'lunarx',
            symbol: 'LX',
            symbol_cg: 'lx',
            name: 'LunarX',
            name_cg: 'LunarX',
            slug: ''
        },
        'nova-nova': {
            id: 'nova-nova',
            id_cg: 'nova',
            symbol: 'NOVA',
            symbol_cg: 'nova',
            name: 'NOVA',
            name_cg: 'NOVA',
            slug: ''
        },
        'topb-topbtc-token': {
            id: 'topb-topbtc-token',
            id_cg: 'topb',
            symbol: 'TOPB',
            symbol_cg: 'topb',
            name: 'TOPBTC Token',
            name_cg: 'TOPBTC Token',
            slug: ''
        },
        'idhub-idhub': {
            id: 'idhub-idhub',
            id_cg: 'idhub',
            symbol: 'IDHUB',
            symbol_cg: 'idhub',
            name: 'IDHUB',
            name_cg: 'IDHUB',
            slug: ''
        },
        'tosc-tos': {
            id: 'tosc-tos',
            id_cg: 't-os',
            symbol: 'TOSC',
            symbol_cg: 'tosc',
            name: 'T.OS',
            name_cg: 'T.OS',
            slug: 't-os'
        },
        'cr-eos-chrome': {
            id: 'cr-eos-chrome',
            id_cg: 'eos-chrome',
            symbol: 'CR',
            symbol_cg: 'cr',
            name: 'EOS Chrome',
            name_cg: 'EOS Chrome',
            slug: ''
        },
        'tavitt-tavittcoin': {
            id: 'tavitt-tavittcoin',
            id_cg: 'tavittcoin',
            symbol: 'TAVITT',
            symbol_cg: 'tavitt',
            name: 'Tavittcoin',
            name_cg: 'Tavittcoin',
            slug: ''
        },
        'hkdt-hkd-tether': {
            id: 'hkdt-hkd-tether',
            id_cg: 'hkd-tether',
            symbol: 'HKDT',
            symbol_cg: 'hkdt',
            name: 'HKD Tether',
            name_cg: 'HKD Tether',
            slug: ''
        },
        'brn-burn-coin': {
            id: 'brn-burn-coin',
            id_cg: 'burn-coin',
            symbol: 'BRN',
            symbol_cg: 'brn',
            name: 'Burn Coin',
            name_cg: 'Burn Coin',
            slug: ''
        },
        'bth-bitcoin-hot': {
            id: 'bth-bitcoin-hot',
            id_cg: 'bitcoin-hot',
            symbol: 'BTH',
            symbol_cg: 'bth',
            name: 'Bitcoin Hot',
            name_cg: 'Bitcoin Hot',
            slug: ''
        },
        'eai-ethereumai': {
            id: 'eai-ethereumai',
            id_cg: 'ethereumai',
            symbol: 'EAI',
            symbol_cg: 'eai',
            name: 'EthereumAI',
            name_cg: 'EthereumAI',
            slug: ''
        },
        'bds-borderless': {
            id: 'bds-borderless',
            id_cg: 'borderless',
            symbol: 'BDS',
            symbol_cg: 'bds',
            name: 'Borderless',
            name_cg: 'Borderless',
            slug: ''
        },
        'tch-tchain': {
            id: 'tch-tchain',
            id_cg: 'tchain',
            symbol: 'TCH',
            symbol_cg: 'tch',
            name: 'Tchain',
            name_cg: 'Tchain',
            slug: ''
        },
        'skyft-skyfchain': {
            id: 'skyft-skyfchain',
            id_cg: 'skyfchain',
            symbol: 'SKYFT',
            symbol_cg: 'skyft',
            name: 'SKYFchain',
            name_cg: 'SKYFchain',
            slug: ''
        },
        'fml-formula': {
            id: 'fml-formula',
            id_cg: 'formula',
            symbol: 'FML',
            symbol_cg: 'fml',
            name: 'FormulA',
            name_cg: 'FormulA',
            slug: ''
        },
        'yue-yue-chain': {
            id: 'yue-yue-chain',
            id_cg: 'yue-chain',
            symbol: 'YUE',
            symbol_cg: 'yue',
            name: 'Yue Chain',
            name_cg: 'Yue Chain',
            slug: ''
        },
        'bxc-bonuscloud': {
            id: 'bxc-bonuscloud',
            id_cg: 'bonuscloud',
            symbol: 'BXC',
            symbol_cg: 'bxc',
            name: 'BonusCloud',
            name_cg: 'BonusCloud',
            slug: ''
        },
        'ngot-ngot': {
            id: 'ngot-ngot',
            id_cg: 'ngot',
            symbol: 'NGOT',
            symbol_cg: 'ngot',
            name: 'ngot',
            name_cg: 'ngot',
            slug: ''
        },
        'krex-kronn': {
            id: 'krex-kronn',
            id_cg: 'kronn',
            symbol: 'KREX',
            symbol_cg: 'krex',
            name: 'Kronn',
            name_cg: 'Kronn',
            slug: ''
        },
        'qos-qos-chain': {
            id: 'qos-qos-chain',
            id_cg: 'qos-chain',
            symbol: 'QOS',
            symbol_cg: 'qos',
            name: 'QOS Chain',
            name_cg: 'QOS Chain',
            slug: ''
        },
        'brc-bryllite': {
            id: 'brc-bryllite',
            id_cg: 'bryllite',
            symbol: 'BRC',
            symbol_cg: 'brc',
            name: 'Bryllite',
            name_cg: 'Bryllite',
            slug: ''
        },
        'ggc-gramgold-coin': {
            id: 'ggc-gramgold-coin',
            id_cg: 'gramgold-coin',
            symbol: 'GGC',
            symbol_cg: 'ggc',
            name: 'GramGold Coin',
            name_cg: 'GramGold Coin',
            slug: ''
        },
        'bec-beauty-chain': {
            id: 'bec-beauty-chain',
            id_cg: 'beauty-chain',
            symbol: 'BEC',
            symbol_cg: 'bec',
            name: 'Beauty Chain',
            name_cg: 'Beauty Chain',
            slug: ''
        },
        'vres-virtual-reality-electronic-sports': {
            id: 'vres-virtual-reality-electronic-sports',
            id_cg: 'virtual-reality-electronic-sports',
            symbol: 'VRES',
            symbol_cg: 'vres',
            name: 'Virtual Reality Electronic Sports',
            name_cg: 'Virtual Reality Electronic Sports',
            slug: ''
        },
        'portal-portal': {
            id: 'portal-portal',
            id_cg: 'portal',
            symbol: 'PORTAL',
            symbol_cg: 'portal',
            name: 'Portal',
            name_cg: 'Portal',
            slug: ''
        },
        'doc-doc': {
            id: 'doc-doc',
            id_cg: 'doc',
            symbol: 'DOC',
            symbol_cg: 'doc',
            name: 'Doc',
            name_cg: 'Doc',
            slug: ''
        },
        'locus-locus-chain': {
            id: 'locus-locus-chain',
            id_cg: 'locus-chain',
            symbol: 'LOCUS',
            symbol_cg: 'locus',
            name: 'Locus Chain',
            name_cg: 'Locus Chain',
            slug: 'locus-chain'
        },
        'ct-coinmex-token': {
            id: 'ct-coinmex-token',
            id_cg: 'coinmex-token',
            symbol: 'CT',
            symbol_cg: 'ct',
            name: 'CoinMex Token',
            name_cg: 'CoinMex Token',
            slug: ''
        },
        '1x2-1x2-coin': {
            id: '1x2-1x2-coin',
            id_cg: '1x2-coin',
            symbol: '1X2',
            symbol_cg: '1x2',
            name: '1X2 COIN',
            name_cg: '1X2 Coin',
            slug: '1x2-coin'
        },
        'ccc-coin-controller-cash': {
            id: 'ccc-coin-controller-cash',
            id_cg: 'coin-controller-cash',
            symbol: 'CCC',
            symbol_cg: 'ccc',
            name: 'Coin Controller Cash',
            name_cg: 'Coindom',
            slug: ''
        },
        'rccc-rccc': {
            id: 'rccc-rccc',
            id_cg: 'rccc',
            symbol: 'RCCC',
            symbol_cg: 'rccc',
            name: 'RCCC',
            name_cg: 'RCCC',
            slug: ''
        },
        'baic-baic': {
            id: 'baic-baic',
            id_cg: 'baic',
            symbol: 'BAIC',
            symbol_cg: 'baic',
            name: 'BAIC',
            name_cg: 'BAIC',
            slug: ''
        },
        'ddm-ddmcoin': {
            id: 'ddm-ddmcoin',
            id_cg: 'ddmcoin',
            symbol: 'DDM',
            symbol_cg: 'ddm',
            name: 'DDMCoin',
            name_cg: 'DDMCoin',
            slug: ''
        },
        'tclb-tclb': {
            id: 'tclb-tclb',
            id_cg: 'tclb',
            symbol: 'TCLB',
            symbol_cg: 'tclb',
            name: 'TCLB',
            name_cg: 'TCLB',
            slug: ''
        },
        'jmt-jmtime': {
            id: 'jmt-jmtime',
            id_cg: 'jmtime',
            symbol: 'JMT',
            symbol_cg: 'jmt',
            name: 'JMTIME',
            name_cg: 'JMTIME',
            slug: ''
        },
        'gold-gold': {
            id: 'gold-gold',
            id_cg: 'gold',
            symbol: 'GOLD',
            symbol_cg: 'gold',
            name: 'GOLD',
            name_cg: 'GOLD',
            slug: ''
        },
        'it-idc-token': {
            id: 'it-idc-token',
            id_cg: 'idc-token',
            symbol: 'IT',
            symbol_cg: 'it',
            name: 'IDC Token',
            name_cg: 'IDC Token',
            slug: ''
        },
        'vnt-vntchain': {
            id: 'vnt-vntchain',
            id_cg: 'vanta-network',
            symbol: 'VNT',
            symbol_cg: 'vnt',
            name: 'VNTchain',
            name_cg: 'Vanta Network',
            slug: 'vanta-network'
        },
        'miami-miami': {
            id: 'miami-miami',
            id_cg: 'miami',
            symbol: 'MIAMI',
            symbol_cg: 'miami',
            name: 'MIAMI',
            name_cg: 'MIAMI',
            slug: ''
        },
        'sbtc-siambitcoin': {
            id: 'sbtc-siambitcoin',
            id_cg: 'siambitcoin',
            symbol: 'SBTC',
            symbol_cg: 'sbtc',
            name: 'SiamBitcoin',
            name_cg: 'SiamBitcoin',
            slug: ''
        },
        'vkt-vankia-chain': {
            id: 'vkt-vankia-chain',
            id_cg: 'vankia-chain',
            symbol: 'VKT',
            symbol_cg: 'vkt',
            name: 'Vankia Chain',
            name_cg: 'Vankia Chain',
            slug: ''
        },
        'gxi-genexi': {
            id: 'gxi-genexi',
            id_cg: 'genexi',
            symbol: 'GXI',
            symbol_cg: 'gxi',
            name: 'Genexi',
            name_cg: 'Genexi',
            slug: ''
        },
        'btmc-bit-miner-chain': {
            id: 'btmc-bit-miner-chain',
            id_cg: 'bit-miner-chain',
            symbol: 'BTMC',
            symbol_cg: 'btmc',
            name: 'Bit Miner Chain',
            name_cg: 'Bit Miner Chain',
            slug: ''
        },
        'tat-leblock': {
            id: 'tat-leblock',
            id_cg: 'leblock',
            symbol: 'TAT',
            symbol_cg: 'tat',
            name: 'Leblock',
            name_cg: 'Leblock',
            slug: ''
        },
        'zcc-zccoin': {
            id: 'zcc-zccoin',
            id_cg: 'zccoin',
            symbol: 'ZCC',
            symbol_cg: 'zcc',
            name: 'ZcCoin',
            name_cg: 'ZcCoin',
            slug: ''
        },
        'musk-musk': {
            id: 'musk-musk',
            id_cg: 'musk',
            symbol: 'MUSK',
            symbol_cg: 'musk',
            name: 'Musk',
            name_cg: 'Musk',
            slug: ''
        },
        'min-mindol': {
            id: 'min-mindol',
            id_cg: 'mindol',
            symbol: 'MIN',
            symbol_cg: 'min',
            name: 'MINDOL',
            name_cg: 'MINDOL',
            slug: 'mindol'
        },
        'jbc-japan-brand-coin': {
            id: 'jbc-japan-brand-coin',
            id_cg: 'japan-brand-coin',
            symbol: 'JBC',
            symbol_cg: 'jbc',
            name: 'Japan Brand Coin',
            name_cg: 'Japan Brand Coin'
        },
        'tcash-tcash': {
            id: 'tcash-tcash',
            id_cg: 'tcash',
            symbol: 'TCASH',
            symbol_cg: 'tcash',
            name: 'TCASH',
            name_cg: 'TCASH',
            slug: 'tcash'
        },
        'gfc-gfc-gold-coin': {
            id: 'gfc-gfc-gold-coin',
            id_cg: 'gfc-gold-coin',
            symbol: 'GFC',
            symbol_cg: 'gfc',
            name: 'GFC Gold Coin',
            name_cg: 'GFC Gold Coin',
            slug: ''
        },
        'fc-feicoin': {
            id: 'fc-feicoin',
            id_cg: 'facecoin',
            symbol: 'FC',
            symbol_cg: 'fc',
            name: 'FeiCoin',
            name_cg: 'Facecoin',
            slug: ''
        },
        'jic-joorschain': {
            id: 'jic-joorschain',
            id_cg: 'joorschain',
            symbol: 'JIC',
            symbol_cg: 'jic',
            name: 'JoorsChain',
            name_cg: 'JoorsChain',
            slug: ''
        },
        'safe-safe': {
            id: 'safe-safe',
            id_cg: 'safe-coin',
            symbol: 'SAFE',
            symbol_cg: 'safe',
            name: 'Safe',
            name_cg: 'Safe',
            slug: 'safecoin'
        },
        'rya-ryacoin': {
            id: 'rya-ryacoin',
            id_cg: 'ryacoin',
            symbol: 'RYA',
            symbol_cg: 'rya',
            name: 'RYAcoin',
            name_cg: 'RYAcoin',
            slug: ''
        },
        'penc-pencecoin': {
            id: 'penc-pencecoin',
            id_cg: 'pencecoin',
            symbol: 'PENC',
            symbol_cg: 'penc',
            name: 'Pencecoin',
            name_cg: 'Pencecoin',
            slug: ''
        },
        'zaif-zaif-token': {
            id: 'zaif-zaif-token',
            id_cg: 'zaif-token',
            symbol: 'ZAIF',
            symbol_cg: 'zaif',
            name: 'Zaif Token',
            name_cg: 'Zaif Token',
            slug: ''
        },
        'gooc-goocoin': {
            id: 'gooc-goocoin',
            id_cg: 'goocoin',
            symbol: 'GOOC',
            symbol_cg: 'gooc',
            name: 'GooCoin',
            name_cg: 'GooCoin',
            slug: ''
        },
        'bdx-beldex': {
            id: 'bdx-beldex',
            id_cg: 'beldex',
            symbol: 'BDX',
            symbol_cg: 'bdx',
            name: 'Beldex',
            name_cg: 'Beldex',
            slug: 'beldex'
        },
        'fgc-foundgame': {
            id: 'fgc-foundgame',
            id_cg: 'fantasy-gold',
            symbol: 'FGC',
            symbol_cg: 'fgc',
            name: 'FoundGame',
            name_cg: 'Fantasy Gold',
            slug: 'fantasygold'
        },
        'cic-cloud-insurance-chain': {
            id: 'cic-cloud-insurance-chain',
            id_cg: 'cloud-insurance-chain',
            symbol: 'CIC',
            symbol_cg: 'cic',
            name: 'Cloud-Insurance Chain',
            name_cg: 'Cloud-Insurance Chain',
            slug: ''
        },
        'bdc-bei-dou-chain': {
            id: 'bdc-bei-dou-chain',
            id_cg: 'bei-dou-chain',
            symbol: 'BDC',
            symbol_cg: 'bdc',
            name: 'Bei Dou Chain',
            name_cg: 'Bei Dou Chain',
            slug: ''
        },
        'rsx-raisex-token': {
            id: 'rsx-raisex-token',
            id_cg: 'raisextoken',
            symbol: 'RSX',
            symbol_cg: 'rsx',
            name: 'Raisex Token',
            name_cg: 'Raisex Token',
            slug: ''
        },
        'zpay-zantepay': {
            id: 'zpay-zantepay',
            id_cg: 'zantepay',
            symbol: 'ZPAY',
            symbol_cg: 'zpay',
            name: 'Zantepay',
            name_cg: 'Zantepay',
            slug: ''
        },
        'ccp-cryptocoinpay': {
            id: 'ccp-cryptocoinpay',
            id_cg: 'cryptocoinpay',
            symbol: 'CCP',
            symbol_cg: 'ccp',
            name: 'CryptoCoinPay',
            name_cg: 'CryptoCoinPay',
            slug: ''
        },
        'gram-opengram': {
            id: 'gram-opengram',
            id_cg: 'gram',
            symbol: 'GRAM',
            symbol_cg: 'gram',
            name: 'OpenGram',
            name_cg: 'OpenGram',
            slug: ''
        },
        'loto-lotoblock': {
            id: 'loto-lotoblock',
            id_cg: 'lotoblock',
            symbol: 'LOTO',
            symbol_cg: 'loto',
            name: 'Lotoblock',
            name_cg: 'Lotoblock',
            slug: ''
        },
        'dkyc-datakyc': {
            id: 'dkyc-datakyc',
            id_cg: 'datakyc',
            symbol: 'DKYC',
            symbol_cg: 'dkyc',
            name: 'DataKYC',
            name_cg: 'DataKYC',
            slug: ''
        },
        'fund-fundchains': {
            id: 'fund-fundchains',
            id_cg: 'fundchains',
            symbol: 'FUND',
            symbol_cg: 'fund',
            name: 'FUNDChains',
            name_cg: 'FUNDChains',
            slug: ''
        },
        'sunc-sunchain': {
            id: 'sunc-sunchain',
            id_cg: 'sunchain',
            symbol: 'SUNC',
            symbol_cg: 'sunc',
            name: 'Sunchain',
            name_cg: 'Sunchain',
            slug: ''
        },
        'zxt-zhixin-chain': {
            id: 'zxt-zhixin-chain',
            id_cg: 'zhixin-chain',
            symbol: 'ZXT',
            symbol_cg: 'zxt',
            name: 'Zhixin Chain',
            name_cg: 'Zhixin Chain',
            slug: ''
        },
        'sha-safe-haven': {
            id: 'sha-safe-haven',
            id_cg: 'safe-haven',
            symbol: 'SHA',
            symbol_cg: 'sha',
            name: 'Safe Haven',
            name_cg: 'Safe Haven',
            slug: 'safe-haven'
        },
        'ctc-culture-ticket-chain': {
            id: 'ctc-culture-ticket-chain',
            id_cg: 'credit-tag-chain',
            symbol: 'CTC',
            symbol_cg: 'ctc',
            name: 'Culture Ticket Chain',
            name_cg: 'Credit Tag Chain',
            slug: 'credit-tag-chain'
        },
        'brt-berith-token': {
            id: 'brt-berith-token',
            id_cg: 'berith-token',
            symbol: 'BRT',
            symbol_cg: 'brt',
            name: 'Berith Token',
            name_cg: 'Berith Token',
            slug: ''
        },
        'buc-bit-union-coin': {
            id: 'buc-bit-union-coin',
            id_cg: 'bit-union-coin',
            symbol: 'BUC',
            symbol_cg: 'buc',
            name: 'Bit Union Coin',
            name_cg: 'Bit Union Coin',
            slug: ''
        },
        'pccm-poseidon-chain': {
            id: 'pccm-poseidon-chain',
            id_cg: 'poseidon-chain',
            symbol: 'PCCM',
            symbol_cg: 'pccm',
            name: 'Poseidon Chain',
            name_cg: 'Poseidon Chain',
            slug: ''
        },
        'zeon-zeon-network': {
            id: 'zeon-zeon-network',
            id_cg: 'zeon',
            symbol: 'ZEON',
            symbol_cg: 'zeon',
            name: 'ZEON Network',
            name_cg: 'ZEON Network',
            slug: 'zeon'
        },
        'neal-coineal-token': {
            id: 'neal-coineal-token',
            id_cg: 'neal',
            symbol: 'NEAL',
            symbol_cg: 'neal',
            name: 'Coineal Token',
            name_cg: 'Coineal Token',
            slug: 'coineal-token'
        },
        'caj-cajutel': {
            id: 'caj-cajutel',
            id_cg: 'cajutel',
            symbol: 'CAJ',
            symbol_cg: 'caj',
            name: 'Cajutel',
            name_cg: 'Cajutel',
            slug: 'cajutel'
        },
        'esbc-e-sport-betting-coin': {
            id: 'esbc-e-sport-betting-coin',
            id_cg: 'e-sport-betting-coin',
            symbol: 'ESBC',
            symbol_cg: 'esbc',
            name: 'e-Sport Betting Coin',
            name_cg: 'ESBC',
            slug: 'esbc'
        },
        'etnx-electronero': {
            id: 'etnx-electronero',
            id_cg: 'electronero',
            symbol: 'ETNX',
            symbol_cg: 'etnx',
            name: 'Electronero',
            name_cg: 'Electronero',
            slug: ''
        },
        'eubc-eub-chain': {
            id: 'eubc-eub-chain',
            id_cg: 'eub-chain',
            symbol: 'EUBC',
            symbol_cg: 'eubc',
            name: 'EUB Chain',
            name_cg: 'EUB Chain',
            slug: ''
        },
        'bhd-bitcoin-hd': {
            id: 'bhd-bitcoin-hd',
            id_cg: 'bitcoin-hd',
            symbol: 'BHD',
            symbol_cg: 'bhd',
            name: 'Bitcoin HD',
            name_cg: 'Bitcoin HD',
            slug: 'bitcoinhd'
        },
        'plg-plug': {
            id: 'plg-plug',
            id_cg: 'plug',
            symbol: 'PLG',
            symbol_cg: 'plg',
            name: 'Plug',
            name_cg: 'Plug',
            slug: ''
        },
        'gex-globex': {
            id: 'gex-globex',
            id_cg: 'gexan',
            symbol: 'GEX',
            symbol_cg: 'gex',
            name: 'Globex',
            name_cg: 'Gexan',
            slug: 'gexan'
        },
        'scc-softchain': {
            id: 'scc-softchain',
            id_cg: 'coindom',
            symbol: 'SCC',
            symbol_cg: 'scc',
            name: 'SoftChain',
            name_cg: 'Stem Cell Coin',
            slug: ''
        },
        'gent-genesis-token': {
            id: 'gent-genesis-token',
            id_cg: 'genesis-token',
            symbol: 'GENT',
            symbol_cg: 'gent',
            name: 'Genesis Token',
            name_cg: 'Genesis Token',
            slug: ''
        },
        'swl-swiftlance-token': {
            id: 'swl-swiftlance-token',
            id_cg: 'swiftlance-token',
            symbol: 'SWL',
            symbol_cg: 'swl',
            name: 'Swiftlance Token',
            name_cg: 'Swiftlance Token',
            slug: ''
        },
        'webn-webn-token': {
            id: 'webn-webn-token',
            id_cg: 'web-innovation-ph',
            symbol: 'WEBN',
            symbol_cg: 'webn',
            name: 'WEBN token',
            name_cg: 'WEBN token',
            slug: 'webn-token'
        },
        'pbtt-purple-butterfly-trading': {
            id: 'pbtt-purple-butterfly-trading',
            id_cg: 'purple-butterfly-trading',
            symbol: 'PBTT',
            symbol_cg: 'pbtt',
            name: 'Purple Butterfly Trading',
            name_cg: 'Purple Butterfly Trading',
            slug: ''
        },
        'iftc-internet-fintech-coin': {
            id: 'iftc-internet-fintech-coin',
            id_cg: 'internet-fintech-coin',
            symbol: 'IFTC',
            symbol_cg: 'iftc',
            name: 'Internet Fintech Coin',
            name_cg: 'Internet Fintech Coin',
            slug: ''
        },
        'vit-vitalcoin': {
            id: 'vit-vitalcoin',
            id_cg: 'vice-industry-token',
            symbol: 'VIT',
            symbol_cg: 'vit',
            name: 'Vitalcoin',
            name_cg: 'Vice Industry Token',
            slug: ''
        },
        'vgw-vegawallet-token': {
            id: 'vgw-vegawallet-token',
            id_cg: 'vegawallet-token',
            symbol: 'VGW',
            symbol_cg: 'vgw',
            name: 'VegaWallet Token',
            name_cg: 'VegaWallet Token',
            slug: 'vegawallet-token'
        },
        'arq-arqma': {
            id: 'arq-arqma',
            id_cg: 'arqma',
            symbol: 'ARQ',
            symbol_cg: 'arq',
            name: 'Arqma',
            name_cg: 'ArQmA',
            slug: 'arqma'
        },
        'fex-fidex-exchange': {
            id: 'fex-fidex-exchange',
            id_cg: 'fex-token',
            symbol: 'FEX',
            symbol_cg: 'fex',
            name: 'FIDEX Exchange',
            name_cg: 'FEX Token',
            slug: 'fidex-token'
        },
        'dcnt-decenturion': {
            id: 'dcnt-decenturion',
            id_cg: 'decenturion',
            symbol: 'DCNT',
            symbol_cg: 'dcnt',
            name: 'Decenturion',
            name_cg: 'Decenturion',
            slug: ''
        },
        'amt-ameitoken': {
            id: 'amt-ameitoken',
            id_cg: 'ameitoken',
            symbol: 'AMT',
            symbol_cg: 'amt',
            name: 'AMeiToken',
            name_cg: 'AMeiToken',
            slug: ''
        },
        'gmci-game-city': {
            id: 'gmci-game-city',
            id_cg: 'game-city',
            symbol: 'GMCI',
            symbol_cg: 'gmci',
            name: 'Game City',
            name_cg: 'Game City',
            slug: ''
        },
        'tcnx-tercet-network': {
            id: 'tcnx-tercet-network',
            id_cg: 'tercet-network',
            symbol: 'TCNX',
            symbol_cg: 'tcnx',
            name: 'Tercet Network',
            name_cg: 'Tercet Network',
            slug: ''
        },
        'slx-slate': {
            id: 'slx-slate',
            id_cg: 'slate',
            symbol: 'SLX',
            symbol_cg: 'slx',
            name: 'Slate',
            name_cg: 'Slate',
            slug: ''
        },
        'sfcp-sf-capital': {
            id: 'sfcp-sf-capital',
            id_cg: 'sf-capital',
            symbol: 'SFCP',
            symbol_cg: 'sfcp',
            name: 'SF Capital',
            name_cg: 'SF Capital',
            slug: 'sf-capital'
        },
        'pop-pop-chest-token': {
            id: 'pop-pop-chest-token',
            id_cg: 'pop-chest-token',
            symbol: 'POP',
            symbol_cg: 'pop',
            name: 'Pop Chest Token',
            name_cg: 'Pop Chest Token',
            slug: ''
        },
        'pvb-points-value-bank': {
            id: 'pvb-points-value-bank',
            id_cg: 'points-value-bank',
            symbol: 'PVB',
            symbol_cg: 'pvb',
            name: 'Points Value Bank',
            name_cg: 'Points Value Bank',
            slug: ''
        },
        'eon-eos-network': {
            id: 'eon-eos-network',
            id_cg: 'eon',
            symbol: 'EON',
            symbol_cg: 'eon',
            name: 'EOS Network',
            name_cg: 'EOS Network',
            slug: ''
        },
        'silk-silkchain': {
            id: 'silk-silkchain',
            id_cg: 'silkchain',
            symbol: 'SILK',
            symbol_cg: 'silk',
            name: 'SilkChain',
            name_cg: 'SilkChain',
            slug: ''
        },
        'sgc-stargram-coin': {
            id: 'sgc-stargram-coin',
            id_cg: 'stargram-coin',
            symbol: 'SGC',
            symbol_cg: 'sgc',
            name: 'Stargram Coin',
            name_cg: 'Stargram Coin',
            slug: ''
        },
        'dsc-dreamscape': {
            id: 'dsc-dreamscape',
            id_cg: 'data-saver-coin',
            symbol: 'DSC',
            symbol_cg: 'dsc',
            name: 'Dreamscape',
            name_cg: 'Data Saver Coin',
            slug: ''
        },
        'ivo-iveryone': {
            id: 'ivo-iveryone',
            id_cg: 'iveryone',
            symbol: 'IVO',
            symbol_cg: 'ivo',
            name: 'iVeryOne',
            name_cg: 'iVeryOne',
            slug: ''
        },
        'mrc-meritcoins': {
            id: 'mrc-meritcoins',
            id_cg: 'meritcoins',
            symbol: 'MRC',
            symbol_cg: 'mrc',
            name: 'Meritcoins',
            name_cg: 'Meritcoins',
            slug: ''
        },
        'elet-elementium-token': {
            id: 'elet-elementium-token',
            id_cg: 'elementium-token',
            symbol: 'ELET',
            symbol_cg: 'elet',
            name: 'Elementium token',
            name_cg: 'Elementium token',
            slug: 'elementeum'
        },
        'kec-keyco': {
            id: 'kec-keyco',
            id_cg: 'keyco',
            symbol: 'KEC',
            symbol_cg: 'kec',
            name: 'Keyco',
            name_cg: 'Keyco',
            slug: ''
        },
        'enu-enumivo': {
            id: 'enu-enumivo',
            id_cg: 'enumivo',
            symbol: 'ENU',
            symbol_cg: 'enu',
            name: 'Enumivo',
            name_cg: 'Enumivo',
            slug: ''
        },
        'satc-satoshicoin': {
            id: 'satc-satoshicoin',
            id_cg: 'satoshicoin',
            symbol: 'SATC',
            symbol_cg: 'satc',
            name: 'Satoshicoin',
            name_cg: 'SWYFT.Network',
            slug: ''
        },
        'bak-baconcoin': {
            id: 'bak-baconcoin',
            id_cg: 'baconcoin',
            symbol: 'BAK',
            symbol_cg: 'bak',
            name: 'BaconCoin',
            name_cg: 'BaconCoin',
            slug: ''
        },
        'xuez-xuez-coin': {
            id: 'xuez-xuez-coin',
            id_cg: 'xuez',
            symbol: 'XUEZ',
            symbol_cg: 'xuez',
            name: 'Xuez Coin',
            name_cg: 'Xuez Coin',
            slug: 'xuez'
        },
        'octc-octcoin': {
            id: 'octc-octcoin',
            id_cg: 'octcoin',
            symbol: 'OCTC',
            symbol_cg: 'octc',
            name: 'OCTCOIN',
            name_cg: 'OCTCOIN',
            slug: ''
        },
        'chg-charg-coin': {
            id: 'chg-charg-coin',
            id_cg: 'charg-coin',
            symbol: 'CHG',
            symbol_cg: 'chg',
            name: 'Charg Coin',
            name_cg: 'Charg Coin',
            slug: ''
        },
        'gtmr-getmoder': {
            id: 'gtmr-getmoder',
            id_cg: 'getmoder',
            symbol: 'GTMR',
            symbol_cg: 'gtmr',
            name: 'GETModer',
            name_cg: 'GETModer',
            slug: ''
        },
        'sica-signaturechain': {
            id: 'sica-signaturechain',
            id_cg: 'signaturechain',
            symbol: 'SICA',
            symbol_cg: 'sica',
            name: 'SignatureChain',
            name_cg: 'SignatureChain',
            slug: ''
        },
        'btrl-bitcoinregular': {
            id: 'btrl-bitcoinregular',
            id_cg: 'bitcoinregular',
            symbol: 'BTRL',
            symbol_cg: 'btrl',
            name: 'BitcoinRegular',
            name_cg: 'BitcoinRegular',
            slug: ''
        },
        'edra-edra': {
            id: 'edra-edra',
            id_cg: 'edra',
            symbol: 'EDRA',
            symbol_cg: 'edra',
            name: 'EDRA',
            name_cg: 'EDRA',
            slug: ''
        },
        '4ac-4a-coin': {
            id: '4ac-4a-coin',
            id_cg: '4a-coin',
            symbol: '4AC',
            symbol_cg: '4ac',
            name: '4A Coin',
            name_cg: '4A Coin',
            slug: ''
        },
        'dtx-digital-ticks': {
            id: 'dtx-digital-ticks',
            id_cg: 'databroker-dao',
            symbol: 'DTX',
            symbol_cg: 'dtx',
            name: 'Digital Ticks',
            name_cg: 'DaTa eXchange Token',
            slug: 'data-exchange'
        },
        'clc-caluracoin': {
            id: 'clc-caluracoin',
            id_cg: 'caluracoin',
            symbol: 'CLC',
            symbol_cg: 'clc',
            name: 'CaluraCoin',
            name_cg: 'CaluraCoin',
            slug: ''
        },
        'bst-bitsten-token': {
            id: 'bst-bitsten-token',
            id_cg: 'bitsten-token',
            symbol: 'BST',
            symbol_cg: 'bst',
            name: 'Bitsten Token',
            name_cg: 'Bitsten Token',
            slug: ''
        },
        'npc-npcoin': {
            id: 'npc-npcoin',
            id_cg: 'npccoin',
            symbol: 'NPC',
            symbol_cg: 'npc',
            name: 'NPCoin',
            name_cg: 'NPCcoin',
            slug: 'npcoin'
        },
        'bchip-bluechips-token': {
            id: 'bchip-bluechips-token',
            id_cg: 'bluechips-token',
            symbol: 'BCHIP',
            symbol_cg: 'bchip',
            name: 'BLUECHIPS Token',
            name_cg: 'BLUECHIPS Token',
            slug: ''
        },
        'trad-tradcoin': {
            id: 'trad-tradcoin',
            id_cg: 'tradcoin',
            symbol: 'TRAD',
            symbol_cg: 'trad',
            name: 'Tradcoin',
            name_cg: 'Tradcoin',
            slug: ''
        },
        'mesh-meshbox': {
            id: 'mesh-meshbox',
            id_cg: 'meshbox',
            symbol: 'MESH',
            symbol_cg: 'mesh',
            name: 'MeshBox',
            name_cg: 'MeshBox',
            slug: ''
        },
        'reosc-reosc-ecosystem': {
            id: 'reosc-reosc-ecosystem',
            id_cg: 'reosc-ecosystem',
            symbol: 'REOSC',
            symbol_cg: 'reosc',
            name: 'REOSC Ecosystem',
            name_cg: 'REOSC Ecosystem',
            slug: ''
        },
        'fscc-fisco': {
            id: 'fscc-fisco',
            id_cg: 'fisco',
            symbol: 'FSCC',
            symbol_cg: 'fscc',
            name: 'Fisco',
            name_cg: 'Fisco',
            slug: ''
        },
        'afro-afro': {
            id: 'afro-afro',
            id_cg: 'afro',
            symbol: 'AFRO',
            symbol_cg: 'afro',
            name: 'Afro',
            name_cg: 'Afro',
            slug: ''
        },
        'trat-tratok': {
            id: 'trat-tratok',
            id_cg: 'tratin',
            symbol: 'TRAT',
            symbol_cg: 'trat',
            name: 'Tratok',
            name_cg: 'Tratin',
            slug: 'tratin'
        },
        'phl-placeh': {
            id: 'phl-placeh',
            id_cg: 'placeh',
            symbol: 'PHL',
            symbol_cg: 'phl',
            name: 'placeh',
            name_cg: 'Placeholders',
            slug: ''
        },
        'oas-oases-chain': {
            id: 'oas-oases-chain',
            id_cg: 'oases-chain',
            symbol: 'OAS',
            symbol_cg: 'oas',
            name: 'Oases Chain',
            name_cg: 'Oases Chain',
            slug: ''
        },
        'dca-dcaex': {
            id: 'dca-dcaex',
            id_cg: 'dcaex',
            symbol: 'DCA',
            symbol_cg: 'dca',
            name: 'DCAex',
            name_cg: 'DCAex',
            slug: ''
        },
        'xnb-xeonbit': {
            id: 'xnb-xeonbit',
            id_cg: 'xeonbit',
            symbol: 'XNB',
            symbol_cg: 'xnb',
            name: 'Xeonbit',
            name_cg: 'Xeonbit',
            slug: ''
        },
        'etgp-ethereum-gold-project': {
            id: 'etgp-ethereum-gold-project',
            id_cg: 'ethereum-gold-project',
            symbol: 'ETGP',
            symbol_cg: 'etgp',
            name: 'Ethereum Gold Project',
            name_cg: 'Ethereum Gold Project',
            slug: 'ethereum-gold-project'
        },
        'etnxp-electronero-pulse': {
            id: 'etnxp-electronero-pulse',
            id_cg: 'electronero-pulse',
            symbol: 'ETNXP',
            symbol_cg: 'etnxp',
            name: 'Electronero Pulse',
            name_cg: 'Electronero Pulse',
            slug: ''
        },
        'woc-worldwoc': {
            id: 'woc-worldwoc',
            id_cg: 'worldwoc',
            symbol: 'WOC',
            symbol_cg: 'woc',
            name: 'WorldWoc',
            name_cg: 'WorldWoc',
            slug: ''
        },
        'tlc-tl-coin': {
            id: 'tlc-tl-coin',
            id_cg: 'tl-coin',
            symbol: 'TLC',
            symbol_cg: 'tlc',
            name: 'TL Coin',
            name_cg: 'TL Coin',
            slug: ''
        },
        'vxv-vectorspace-ai': {
            id: 'vxv-vectorspace-ai',
            id_cg: 'vectorspace',
            symbol: 'VXV',
            symbol_cg: 'vxv',
            name: 'Vectorspace AI',
            name_cg: 'Vectorspace AI',
            slug: ''
        },
        'brix-brixcoin': {
            id: 'brix-brixcoin',
            id_cg: 'brixcoin',
            symbol: 'BRIX',
            symbol_cg: 'brix',
            name: 'BrixCoin',
            name_cg: 'BrixCoin',
            slug: ''
        },
        'orm-orium': {
            id: 'orm-orium',
            id_cg: 'orium',
            symbol: 'ORM',
            symbol_cg: 'orm',
            name: 'ORIUM',
            name_cg: 'ORIUM',
            slug: ''
        },
        '1337-1337': {
            id: '1337-1337',
            id_cg: '1337',
            symbol: '1337',
            symbol_cg: '1337',
            name: '1337',
            name_cg: 'Elite',
            slug: '1337coin'
        },
        'snbl-snowball': {
            id: 'snbl-snowball',
            id_cg: 'snowball',
            symbol: 'SNBL',
            symbol_cg: 'snbl',
            name: 'Snowball',
            name_cg: 'Snowball',
            slug: ''
        },
        'dcto-decentralized-crypto-token': {
            id: 'dcto-decentralized-crypto-token',
            id_cg: 'decentralized-crypto-token',
            symbol: 'DCTO',
            symbol_cg: 'dcto',
            name: 'Decentralized Crypto Token',
            name_cg: 'Decentralized Crypto Token',
            slug: 'decentralized-crypto-token'
        },
        'beam-beam': {
            id: 'beam-beam',
            id_cg: 'beam',
            symbol: 'BEAM',
            symbol_cg: 'beam',
            name: 'Beam',
            name_cg: 'BEAM',
            slug: 'beam'
        },
        'crv-crowdvilla-ownership': {
            id: 'crv-crowdvilla-ownership',
            id_cg: 'crowdvilla',
            symbol: 'CRV',
            symbol_cg: 'crv',
            name: 'Crowdvilla Ownership',
            name_cg: 'Crowdvilla Ownership',
            slug: ''
        },
        'grin-grin': {
            id: 'grin-grin',
            id_cg: 'grin',
            symbol: 'GRIN',
            symbol_cg: 'grin',
            name: 'Grin',
            name_cg: 'Grin',
            slug: 'grin'
        },
        'xbx-bitex': {
            id: 'xbx-bitex',
            id_cg: 'bitex-global',
            symbol: 'XBX',
            symbol_cg: 'xbx',
            name: 'Bitex',
            name_cg: 'Bitex Global XBX Coin',
            slug: 'bitex-global-xbx-coin'
        },
        'sft-safex-token': {
            id: 'sft-safex-token',
            id_cg: 'sportsfix',
            symbol: 'SFT',
            symbol_cg: 'sft',
            name: 'Safex Token',
            name_cg: 'SportsFix',
            slug: 'safex-token'
        },
        'lunes-lunes': {
            id: 'lunes-lunes',
            id_cg: 'lunes',
            symbol: 'LUNES',
            symbol_cg: 'lunes',
            name: 'Lunes',
            name_cg: 'Lunes',
            slug: 'lunes'
        },
        'cht-countinghouse': {
            id: 'cht-countinghouse',
            id_cg: 'countinghouse-fund',
            symbol: 'CHT',
            symbol_cg: 'cht',
            name: 'Countinghouse',
            name_cg: 'Countinghouse Fund',
            slug: 'countinghouse'
        },
        'ads-adshares': {
            id: 'ads-adshares',
            id_cg: 'adshares',
            symbol: 'ADS',
            symbol_cg: 'ads',
            name: 'Adshares',
            name_cg: 'Adshares',
            slug: 'adshares'
        },
        'city-city-coin': {
            id: 'city-city-coin',
            id_cg: 'city-coin',
            symbol: 'CITY',
            symbol_cg: 'city',
            name: 'City Coin',
            name_cg: 'City Coin',
            slug: ''
        },
        'c4l-crypto4likes': {
            id: 'c4l-crypto4likes',
            id_cg: 'crypto4like',
            symbol: 'C4L',
            symbol_cg: 'c4l',
            name: 'Crypto4Likes',
            name_cg: 'Crypto4Like',
            slug: ''
        },
        'bst-blockstamp': {
            id: 'bst-blockstamp',
            id_cg: 'bitsten-token',
            symbol: 'BST',
            symbol_cg: 'bst',
            name: 'BlockStamp',
            name_cg: 'Bitsten Token',
            slug: 'blockstamp'
        },
        'orox-cointorox': {
            id: 'orox-cointorox',
            id_cg: 'cointorox',
            symbol: 'OROX',
            symbol_cg: 'orox',
            name: 'Cointorox',
            name_cg: 'Cointorox',
            slug: 'cointorox'
        },
        'stish-stish': {
            id: 'stish-stish',
            id_cg: 'stish',
            symbol: 'stish',
            symbol_cg: 'stish',
            name: 'Stish',
            name_cg: 'Stish',
            slug: ''
        },
        'varius-varius': {
            id: 'varius-varius',
            id_cg: 'varius',
            symbol: 'VARIUS',
            symbol_cg: 'varius',
            name: 'VARIUS',
            name_cg: 'Varius',
            slug: ''
        },
        'onex-onex-network': {
            id: 'onex-onex-network',
            id_cg: 'onex',
            symbol: 'ONEX',
            symbol_cg: 'onex',
            name: 'ONEX Network',
            name_cg: 'Onex',
            slug: ''
        },
        'pla-plair': {
            id: 'pla-plair',
            id_cg: 'plair',
            symbol: 'PLA',
            symbol_cg: 'pla',
            name: 'Plair',
            name_cg: 'Plair',
            slug: 'plair'
        },
        'uxet-unity-eth-token': {
            id: 'uxet-unity-eth-token',
            id_cg: 'unity-eth-token',
            symbol: 'UXET',
            symbol_cg: 'uxet',
            name: 'Unity ETH token',
            name_cg: 'Unity ETH token',
            slug: ''
        },
        'xlb-stellarpay': {
            id: 'xlb-stellarpay',
            id_cg: 'stellarpay-public',
            symbol: 'XLB',
            symbol_cg: 'xlb',
            name: 'StellarPay',
            name_cg: 'StellarPay',
            slug: 'stellarpay'
        },
        'clb-cloudbric': {
            id: 'clb-cloudbric',
            id_cg: 'clbcoin',
            symbol: 'CLB',
            symbol_cg: 'clb',
            name: 'Cloudbric',
            name_cg: 'CLBcoin',
            slug: 'cloudbric'
        },
        'pbc-parinita-bansode-coin': {
            id: 'pbc-parinita-bansode-coin',
            id_cg: 'parinita-bansode-coin',
            symbol: 'PBC',
            symbol_cg: 'pbc',
            name: 'Parinita Bansode Coin',
            name_cg: 'Parinita Bansode Coin',
            slug: ''
        },
        'zoc-01coin': {
            id: 'zoc-01coin',
            id_cg: '01coin',
            symbol: 'ZOC',
            symbol_cg: 'zoc',
            name: '01coin',
            name_cg: '01coin',
            slug: ''
        },
        'sth-smartholdem': {
            id: 'sth-smartholdem',
            id_cg: '',
            symbol: 'STH',
            symbol_cg: '',
            name: 'Smartholdem',
            name_cg: '',
            slug: ''
        },
        'wbtc-wrapped-bitcoin': {
            id: 'wbtc-wrapped-bitcoin',
            id_cg: 'wrapped-bitcoin',
            symbol: 'WBTC',
            symbol_cg: 'wbtc',
            name: 'Wrapped Bitcoin',
            name_cg: 'Wrapped Bitcoin',
            slug: 'wrapped-bitcoin'
        },
        'nxb-nxboost': {
            id: 'nxb-nxboost',
            id_cg: 'nxboost',
            symbol: 'NXB',
            symbol_cg: 'nxb',
            name: 'NXBoost',
            name_cg: 'NXBoost',
            slug: ''
        },
        'saturn-saturn-dao-token': {
            id: 'saturn-saturn-dao-token',
            id_cg: 'saturn-network',
            symbol: 'SATURN',
            symbol_cg: 'saturn',
            name: 'Saturn DAO Token',
            name_cg: 'Saturn DAO Token',
            slug: ''
        },
        'ethw-ethereum-wizard': {
            id: 'ethw-ethereum-wizard',
            id_cg: 'ethereum-wizard',
            symbol: 'ETHW',
            symbol_cg: 'ethw',
            name: 'Ethereum wizard',
            name_cg: 'Ethereum wizard',
            slug: ''
        },
        'tm-tokenmom': {
            id: 'tm-tokenmom',
            id_cg: '',
            symbol: 'TM',
            symbol_cg: '',
            name: 'Tokenmom',
            name_cg: '',
            slug: ''
        },
        'wib-wibson': {
            id: 'wib-wibson',
            id_cg: 'wibson',
            symbol: 'WIB',
            symbol_cg: 'wib',
            name: 'Wibson',
            name_cg: 'WIBSON',
            slug: 'wibson'
        },
        'sdusd-sdusd': {
            id: 'sdusd-sdusd',
            id_cg: 'sdusd',
            symbol: 'SDUSD',
            symbol_cg: 'sdusd',
            name: 'SDUSD',
            name_cg: 'SDUSD',
            slug: 'sdusd'
        },
        'nobt-nobt': {
            id: 'nobt-nobt',
            id_cg: '',
            symbol: 'NOBT',
            symbol_cg: '',
            name: 'Nobt',
            name_cg: '',
            slug: ''
        },
        'peo-proelio': {
            id: 'peo-proelio',
            id_cg: 'proelio',
            symbol: 'PEO',
            symbol_cg: 'peo',
            name: 'Proeliocoin',
            name_cg: 'Proelio',
            slug: ''
        },
        'gfn-game-fanz': {
            id: 'gfn-game-fanz',
            id_cg: 'game-fanz',
            symbol: 'GFN',
            symbol_cg: 'gfn',
            name: 'Game Fanz',
            name_cg: 'Game Fanz',
            slug: ''
        },
        'solve-solve': {
            id: 'solve-solve',
            id_cg: 'solve-care',
            symbol: 'SOLVE',
            symbol_cg: 'solve',
            name: 'SOLVE',
            name_cg: 'Solve.Care',
            slug: 'solve'
        },
        'atcp-atccoinplus': {
            id: 'atcp-atccoinplus',
            id_cg: '',
            symbol: 'ATCP',
            symbol_cg: '',
            name: 'Atccoinplus',
            name_cg: '',
            slug: ''
        },
        'aristo-aristo': {
            id: 'aristo-aristo',
            id_cg: '',
            symbol: 'ARISTO',
            symbol_cg: '',
            name: 'ARISTO',
            name_cg: '',
            slug: ''
        },
        'bcim-bitcoin-improve': {
            id: 'bcim-bitcoin-improve',
            id_cg: '',
            symbol: 'BCIM',
            symbol_cg: '',
            name: 'Bitcoin Improve',
            name_cg: '',
            slug: ''
        },
        'btsl-bitcoin-sleek': {
            id: 'btsl-bitcoin-sleek',
            id_cg: '',
            symbol: 'BTSL',
            symbol_cg: '',
            name: 'Bitcoin Sleek',
            name_cg: '',
            slug: ''
        },
        'stew-stewcoin': {
            id: 'stew-stewcoin',
            id_cg: '',
            symbol: 'STEW',
            symbol_cg: '',
            name: 'Stewcoin',
            name_cg: '',
            slug: ''
        },
        'uma-uma': {
            id: 'uma-uma',
            id_cg: 'uma',
            symbol: 'UMA',
            symbol_cg: 'uma',
            name: 'UMA',
            name_cg: 'UMA',
            slug: 'uma'
        },
        'lmx-lumaxcoin': {
            id: 'lmx-lumaxcoin',
            id_cg: '',
            symbol: 'LMX',
            symbol_cg: '',
            name: 'Lumaxcoin',
            name_cg: '',
            slug: ''
        },
        'usds-stableusd': {
            id: 'usds-stableusd',
            id_cg: '',
            symbol: 'USDS',
            symbol_cg: '',
            name: 'StableUSD',
            name_cg: '',
            slug: 'stableusd'
        },
        'yfi-yearnfinance': {
            id: 'yfi-yearnfinance',
            id_cg: 'yearn-finance',
            symbol: 'YFI',
            symbol_cg: 'yfi',
            name: 'yearn.finance',
            name_cg: 'yearn.finance',
            slug: 'yearn.finance'
        },
        'ksm-kusama': {
            id: 'ksm-kusama',
            id_cg: 'kusama',
            symbol: 'KSM',
            symbol_cg: 'ksm',
            name: 'Kusama',
            name_cg: 'Kusama',
            slug: 'kusama'
        },
        'mynt-mynt': {
            id: 'mynt-mynt',
            id_cg: 'mynt',
            symbol: 'MYNT',
            symbol_cg: 'mynt',
            name: 'Mynt',
            name_cg: 'Mynt',
            slug: ''
        },
        'dt3-dreamteam3': {
            id: 'dt3-dreamteam3',
            id_cg: 'dreamteam3',
            symbol: 'DT3',
            symbol_cg: 'dt3',
            name: 'DreamTeam3',
            name_cg: 'DreamTeam3',
            slug: ''
        },
        'hash-hash': {
            id: 'hash-hash',
            id_cg: 'eoshash',
            symbol: 'HASH',
            symbol_cg: 'hash',
            name: 'HASH',
            name_cg: 'EOSHASH',
            slug: ''
        },
        'wlo-wollo': {
            id: 'wlo-wollo',
            id_cg: 'wollo',
            symbol: 'WLO',
            symbol_cg: 'wlo',
            name: 'WOLLO',
            name_cg: 'WOLLO',
            slug: 'wollo'
        },
        'dooh-bidooh-dooh-token': {
            id: 'dooh-bidooh-dooh-token',
            id_cg: 'bidooh',
            symbol: 'DOOH',
            symbol_cg: 'dooh',
            name: 'Bidooh DOOH Token',
            name_cg: 'Bidooh',
            slug: 'bidooh-dooh-token'
        },
        'ntm-netm': {
            id: 'ntm-netm',
            id_cg: '',
            symbol: 'NTM',
            symbol_cg: '',
            name: 'NetM',
            name_cg: '',
            slug: ''
        },
        'elac-ela-coin': {
            id: 'elac-ela-coin',
            id_cg: 'elamachain',
            symbol: 'ELAC',
            symbol_cg: 'elac',
            name: 'ELA Coin',
            name_cg: 'ELA Coin',
            slug: 'ela-coin'
        },
        'bcash-bankcoin': {
            id: 'bcash-bankcoin',
            id_cg: 'bankcoincash',
            symbol: 'BCASH',
            symbol_cg: 'bcash',
            name: 'Bankcoin',
            name_cg: 'BankCoin BCash',
            slug: ''
        },
        'mymn-mymn-coin': {
            id: 'mymn-mymn-coin',
            id_cg: 'mymn',
            symbol: 'MYMN',
            symbol_cg: 'mymn',
            name: 'MyMN coin',
            name_cg: 'MyMN',
            slug: ''
        },
        'tcat-the-currency-analytics': {
            id: 'tcat-the-currency-analytics',
            id_cg: 'the-currency-analytics',
            symbol: 'TCAT',
            symbol_cg: 'tcat',
            name: 'The Currency Analytics',
            name_cg: 'The Currency Analytics',
            slug: 'the-currency-analytics'
        },
        'pla-playchip': {
            id: 'pla-playchip',
            id_cg: 'plair',
            symbol: 'PLA',
            symbol_cg: 'pla',
            name: 'PlayChip',
            name_cg: 'Plair',
            slug: 'plair'
        },
        'agu-agouti': {
            id: 'agu-agouti',
            id_cg: 'agouti',
            symbol: 'AGU',
            symbol_cg: 'agu',
            name: 'Agouti',
            name_cg: 'Agouti',
            slug: ''
        },
        'xn35-projecton': {
            id: 'xn35-projecton',
            id_cg: 'projecton',
            symbol: 'XN35',
            symbol_cg: 'xn35',
            name: 'Projecton',
            name_cg: 'Projecton',
            slug: ''
        },
        'btu-btu-protocol': {
            id: 'btu-btu-protocol',
            id_cg: 'bitsou',
            symbol: 'BTU',
            symbol_cg: 'btu',
            name: 'BTU Protocol',
            name_cg: 'Bitsou',
            slug: 'btu-protocol'
        },
        'mrs-marginless': {
            id: 'mrs-marginless',
            id_cg: 'marginless',
            symbol: 'MRS',
            symbol_cg: 'mrs',
            name: 'Marginless',
            name_cg: 'Marginless',
            slug: 'marginless'
        },
        'img-imagecoin': {
            id: 'img-imagecoin',
            id_cg: 'imagecoin',
            symbol: 'IMG',
            symbol_cg: 'img',
            name: 'ImageCoin',
            name_cg: 'ImageCoin',
            slug: 'imagecoin'
        },
        'lyfe-lyfe': {
            id: 'lyfe-lyfe',
            id_cg: 'lyfe',
            symbol: 'LYFE',
            symbol_cg: 'lyfe',
            name: 'Lyfe',
            name_cg: 'Lyfe',
            slug: ''
        },
        'fgp-fingerprint': {
            id: 'fgp-fingerprint',
            id_cg: 'fingerprint',
            symbol: 'FGP',
            symbol_cg: 'fgp',
            name: 'FingerPrint',
            name_cg: 'FingerPrint',
            slug: ''
        },
        'cyr-cypher': {
            id: 'cyr-cypher',
            id_cg: 'cypher',
            symbol: 'CYR',
            symbol_cg: 'cyr',
            name: 'Cypher',
            name_cg: 'Cypher',
            slug: ''
        },
        'adv2-adevplus': {
            id: 'adv2-adevplus',
            id_cg: 'adevplus2-0',
            symbol: 'ADV2',
            symbol_cg: 'adv2',
            name: 'AdevPlus',
            name_cg: 'AdevPlus2.0',
            slug: ''
        },
        'pos-proof-of-stake-coin': {
            id: 'pos-proof-of-stake-coin',
            id_cg: 'pos-coin',
            symbol: 'PoS',
            symbol_cg: 'pos',
            name: 'Proof of Stake Coin',
            name_cg: 'POS Coin',
            slug: ''
        },
        'nawras-nawras': {
            id: 'nawras-nawras',
            id_cg: 'nawras',
            symbol: 'NAWRAS',
            symbol_cg: 'nawras',
            name: 'NAWRAS',
            name_cg: 'NAWRAS',
            slug: ''
        },
        'xnos-nos': {
            id: 'xnos-nos',
            id_cg: 'xnos',
            symbol: 'XNOS',
            symbol_cg: 'xnos',
            name: 'NOS',
            name_cg: 'NOS Project',
            slug: ''
        },
        'hts-hotshot': {
            id: 'hts-hotshot',
            id_cg: 'hotshot',
            symbol: 'HTS',
            symbol_cg: 'hts',
            name: 'Hotshot',
            name_cg: 'Hotshot',
            slug: ''
        },
        'blcr-blacer-coin': {
            id: 'blcr-blacer-coin',
            id_cg: 'blacer-coin',
            symbol: 'BLCR',
            symbol_cg: 'blcr',
            name: 'Blacer Coin',
            name_cg: 'Blacer Coin',
            slug: 'blacer-coin'
        },
        'flc-flowchain': {
            id: 'flc-flowchain',
            id_cg: 'flowchaincoin',
            symbol: 'FLC',
            symbol_cg: 'flc',
            name: 'Flowchain',
            name_cg: 'FlowChainCoin',
            slug: 'flowchain'
        },
        'veil-veil': {
            id: 'veil-veil',
            id_cg: 'veil',
            symbol: 'VEIL',
            symbol_cg: 'veil',
            name: 'VEIL',
            name_cg: 'VEIL',
            slug: 'veil'
        },
        'get-green-energy-token': {
            id: 'get-green-energy-token',
            id_cg: 'get-token',
            symbol: 'GET',
            symbol_cg: 'get',
            name: 'Green Energy Token',
            name_cg: 'GET Protocol',
            slug: ''
        },
        'nollar-nollar': {
            id: 'nollar-nollar',
            id_cg: 'nollar',
            symbol: 'NOLLAR',
            symbol_cg: 'nollar',
            name: 'Nollar',
            name_cg: 'NOLLAR',
            slug: ''
        },
        'ecte-eurocointoken': {
            id: 'ecte-eurocointoken',
            id_cg: 'eurocoinpay',
            symbol: 'ECTE',
            symbol_cg: 'ecte',
            name: 'EurocoinToken',
            name_cg: 'EurocoinToken',
            slug: 'eurocoin-token'
        },
        'altm-altmarkets-coin': {
            id: 'altm-altmarkets-coin',
            id_cg: 'altmarkets-coin',
            symbol: 'ALTM',
            symbol_cg: 'altm',
            name: 'Altmarkets Coin',
            name_cg: 'Altmarkets Coin',
            slug: ''
        },
        'runes-runebase': {
            id: 'runes-runebase',
            id_cg: 'runebase',
            symbol: 'RUNES',
            symbol_cg: 'runes',
            name: 'Runebase',
            name_cg: 'Runebase',
            slug: ''
        },
        'ban-banano': {
            id: 'ban-banano',
            id_cg: 'banano',
            symbol: 'BAN',
            symbol_cg: 'ban',
            name: 'Banano',
            name_cg: 'Banano'
        },
        'adsx-addictsx': {
            id: 'adsx-addictsx',
            id_cg: '',
            symbol: 'ADSX',
            symbol_cg: '',
            name: 'Addictsx',
            name_cg: '',
            slug: ''
        },
        'gtc-gtib': {
            id: 'gtc-gtib',
            id_cg: 'game',
            symbol: 'GTC',
            symbol_cg: 'gtc',
            name: 'GTIB',
            name_cg: 'Game',
            slug: 'game'
        },
        'xspc-spectresecuritycoin': {
            id: 'xspc-spectresecuritycoin',
            id_cg: 'spectresecuritycoin',
            symbol: 'XSPC',
            symbol_cg: 'xspc',
            name: 'Spectre Security Coin',
            name_cg: 'SpectreSecurityCoin',
            slug: ''
        },
        'hxro-hxro': {
            id: 'hxro-hxro',
            id_cg: 'hxro',
            symbol: 'HXRO',
            symbol_cg: 'hxro',
            name: 'Hxro',
            name_cg: 'Hxro',
            slug: 'hxro'
        },
        'rat-ratcoin': {
            id: 'rat-ratcoin',
            id_cg: '',
            symbol: 'RAT',
            symbol_cg: '',
            name: 'RATCOIN',
            name_cg: '',
            slug: ''
        },
        'ichx-icechain': {
            id: 'ichx-icechain',
            id_cg: 'icechain',
            symbol: 'ICHX',
            symbol_cg: 'ichx',
            name: 'IceChain',
            name_cg: 'IceChain',
            slug: 'icechain'
        },
        'eld-electrumdark': {
            id: 'eld-electrumdark',
            id_cg: 'electrum-dark',
            symbol: 'ELD',
            symbol_cg: 'eld',
            name: 'electrumdark',
            name_cg: 'Electrum Dark',
            slug: 'electrumdark'
        },
        'rdct-rdctoken': {
            id: 'rdct-rdctoken',
            id_cg: 'rdctoken',
            symbol: 'RDCT',
            symbol_cg: 'rdct',
            name: 'RDCToken',
            name_cg: 'RDCToken',
            slug: ''
        },
        'exr-exserion': {
            id: 'exr-exserion',
            id_cg: '',
            symbol: 'EXR',
            symbol_cg: '',
            name: 'EXSERION',
            name_cg: '',
            slug: ''
        },
        'owo-oneworld': {
            id: 'owo-oneworld',
            id_cg: 'one-world-coin',
            symbol: 'OWO',
            symbol_cg: 'owo',
            name: 'Oneworld',
            name_cg: 'One World Coin',
            slug: ''
        },
        'x42-x42': {
            id: 'x42-x42',
            id_cg: 'x42-protocol',
            symbol: 'X42',
            symbol_cg: 'x42',
            name: 'x42',
            name_cg: 'X42 Protocol',
            slug: ''
        },
        'yoi-yoi-crypto': {
            id: 'yoi-yoi-crypto',
            id_cg: '',
            symbol: 'YOI',
            symbol_cg: '',
            name: 'Yoi Crypto',
            name_cg: '',
            slug: ''
        },
        'vip-vip-coin': {
            id: 'vip-vip-coin',
            id_cg: 'vipchain',
            symbol: 'VIP',
            symbol_cg: 'vip',
            name: 'Vip Coin',
            name_cg: 'VIPChain',
            slug: ''
        },
        'cfcc-cryptofightclub-coin': {
            id: 'cfcc-cryptofightclub-coin',
            id_cg: 'cryptofightclub',
            symbol: 'CFCC',
            symbol_cg: 'cfcc',
            name: 'Crypto FightClub Coin',
            name_cg: 'CryptoFightClub',
            slug: ''
        },
        'bper-black-panther': {
            id: 'bper-black-panther',
            id_cg: 'black-panther',
            symbol: 'BPER',
            symbol_cg: 'bper',
            name: 'BLACK PANTHER',
            name_cg: 'BLACK PANTHER',
            slug: ''
        },
        'evraz-evraz': {
            id: 'evraz-evraz',
            id_cg: '',
            symbol: 'EVRAZ',
            symbol_cg: '',
            name: 'EVRAZ',
            name_cg: '',
            slug: ''
        },
        'iex-internal-exchange-coin': {
            id: 'iex-internal-exchange-coin',
            id_cg: 'internal-exchange-coin',
            symbol: 'IEX',
            symbol_cg: 'iex',
            name: 'Internal Exchange Coin',
            name_cg: 'Internal Exchange Coin',
            slug: ''
        },
        'boo-bamboo': {
            id: 'boo-bamboo',
            id_cg: 'bamboo-token',
            symbol: 'BOO',
            symbol_cg: 'boo',
            name: 'Bamboo',
            name_cg: 'Bamboo',
            slug: ''
        },
        'xlc-ethereum-lite-cash': {
            id: 'xlc-ethereum-lite-cash',
            id_cg: 'ethereum-lite-cash',
            symbol: 'XLC',
            symbol_cg: 'xlc',
            name: 'Ethereum Lite Cash',
            name_cg: 'Ethereum Lite Cash',
            slug: ''
        },
        'aunit-aunite': {
            id: 'aunit-aunite',
            id_cg: 'aunit',
            symbol: 'AUNIT',
            symbol_cg: 'aunit',
            name: 'Aunite',
            name_cg: 'Aunit',
            slug: 'aunite'
        },
        'hbx-hashbx': {
            id: 'hbx-hashbx',
            id_cg: 'hashbx',
            symbol: 'HBX',
            symbol_cg: 'hbx',
            name: 'HashBX',
            name_cg: 'HashBX',
            slug: 'hashsbx'
        },
        'mnpr-mnpro': {
            id: 'mnpr-mnpro',
            id_cg: 'mnpro',
            symbol: 'MNPR',
            symbol_cg: 'mnpr',
            name: 'MNPRO',
            name_cg: 'MNPRO'
        },
        'evy-everycoin': {
            id: 'evy-everycoin',
            id_cg: 'everycoin',
            symbol: 'EVY',
            symbol_cg: 'evy',
            name: 'EveryCoin',
            name_cg: 'EveryCoin',
            slug: 'everycoin'
        },
        'bnana-banana-token': {
            id: 'bnana-banana-token',
            id_cg: 'banana-token',
            symbol: 'BNANA',
            symbol_cg: 'bnana',
            name: 'Chimpion',
            name_cg: 'Chimpion',
            slug: 'chimpion'
        },
        'mhc-metahash': {
            id: 'mhc-metahash',
            id_cg: 'metahash',
            symbol: 'MHC',
            symbol_cg: 'mhc',
            name: '#MetaHash',
            name_cg: '#MetaHash',
            slug: 'metahash'
        },
        'tkp-tokpie': {
            id: 'tkp-tokpie',
            id_cg: 'tokpie',
            symbol: 'TKP',
            symbol_cg: 'tkp',
            name: 'TOKPIE',
            name_cg: 'TOKPIE',
            slug: ''
        },
        'vls-veles': {
            id: 'vls-veles',
            id_cg: 'veles',
            symbol: 'VLS',
            symbol_cg: 'vls',
            name: 'Veles',
            name_cg: 'Veles',
            slug: ''
        },
        'gmb-gmb': {
            id: 'gmb-gmb',
            id_cg: 'gamb',
            symbol: 'GMB',
            symbol_cg: 'gmb',
            name: 'GMB',
            name_cg: 'GAMB',
            slug: 'gmb'
        },
        'jnb-jinbi-token': {
            id: 'jnb-jinbi-token',
            id_cg: 'jinbi-token',
            symbol: 'JNB',
            symbol_cg: 'jnb',
            name: 'Jinbi Token',
            name_cg: 'Jinbi Token',
            slug: 'jinbi-token'
        },
        'mpg-max-property-group': {
            id: 'mpg-max-property-group',
            id_cg: 'max-property-group',
            symbol: 'MPG',
            symbol_cg: 'mpg',
            name: 'Max Property Group',
            name_cg: 'Max Property Group',
            slug: 'max-property-group'
        },
        'swc-scanet-world-coin': {
            id: 'swc-scanet-world-coin',
            id_cg: 'scanetchain',
            symbol: 'SWC',
            symbol_cg: 'swc',
            name: 'Scanetchain',
            name_cg: 'Scanetchain',
            slug: 'scanetchain'
        },
        'owc-oduwa': {
            id: 'owc-oduwa',
            id_cg: 'oduwa-coin',
            symbol: 'OWC',
            symbol_cg: 'owc',
            name: 'ODUWA',
            name_cg: 'Oduwa Coin',
            slug: 'oduwa'
        },
        'labx-stakinglab': {
            id: 'labx-stakinglab',
            id_cg: 'stakinglab',
            symbol: 'LABX',
            symbol_cg: 'labx',
            name: 'Stakinglab',
            name_cg: 'Stakinglab',
            slug: 'stakinglab'
        },
        'wrkz-wrkzcoin': {
            id: 'wrkz-wrkzcoin',
            id_cg: 'wrkzcoin',
            symbol: 'WRKZ',
            symbol_cg: 'wrkz',
            name: 'WrkzCoin',
            name_cg: 'WrkzCoin',
            slug: ''
        },
        'serv-serve': {
            id: 'serv-serve',
            id_cg: 'serve',
            symbol: 'SERV',
            symbol_cg: 'serv',
            name: 'Serve',
            name_cg: 'Serve',
            slug: ''
        },
        'cspn-crypto-sports': {
            id: 'cspn-crypto-sports',
            id_cg: 'crypto-sports',
            symbol: 'CSPN',
            symbol_cg: 'cspn',
            name: 'Crypto Sports',
            name_cg: 'Crypto Sports',
            slug: 'crypto-sports'
        },
        'swift-swiftcash': {
            id: 'swift-swiftcash',
            id_cg: 'swiftcash',
            symbol: 'SWIFT',
            symbol_cg: 'swift',
            name: 'SwiftCash',
            name_cg: 'SwiftCash',
            slug: 'swiftcash'
        },
        'regi-regium': {
            id: 'regi-regium',
            id_cg: 'regium',
            symbol: 'REGI',
            symbol_cg: 'regi',
            name: 'Regium',
            name_cg: 'Regium',
            slug: ''
        },
        'fln-fline': {
            id: 'fln-fline',
            id_cg: 'fline',
            symbol: 'FLN',
            symbol_cg: 'fln',
            name: 'Fline',
            name_cg: 'Fline',
            slug: ''
        },
        'xqr-qredit': {
            id: 'xqr-qredit',
            id_cg: 'qredit',
            symbol: 'XQR',
            symbol_cg: 'xqr',
            name: 'Qredit',
            name_cg: 'Qredit',
            slug: 'qredit'
        },
        'skrp-skraps': {
            id: 'skrp-skraps',
            id_cg: 'skraps',
            symbol: 'SKRP',
            symbol_cg: 'skrp',
            name: 'Skraps',
            name_cg: 'Skraps',
            slug: ''
        },
        'bcp-bcp-token': {
            id: 'bcp-bcp-token',
            id_cg: 'bitcoin-platinum',
            symbol: 'BCP',
            symbol_cg: 'bcp',
            name: 'BCP TOKEN',
            name_cg: 'Bitcoin Platinums',
            slug: ''
        },
        'nyzo-nyzo': {
            id: 'nyzo-nyzo',
            id_cg: 'nyzo',
            symbol: 'NYZO',
            symbol_cg: 'nyzo',
            name: 'Nyzo',
            name_cg: 'Nyzo',
            slug: ''
        },
        'parq-parq': {
            id: 'parq-parq',
            id_cg: 'parq',
            symbol: 'PARQ',
            symbol_cg: 'parq',
            name: 'PARQ',
            name_cg: 'PARQ',
            slug: ''
        },
        'pib-pibble': {
            id: 'pib-pibble',
            id_cg: 'pibble',
            symbol: 'PIB',
            symbol_cg: 'pib',
            name: 'PIBBLE',
            name_cg: 'Pibble',
            slug: 'pibble'
        },
        'isf-insifa': {
            id: 'isf-insifa',
            id_cg: '',
            symbol: 'ISF',
            symbol_cg: '',
            name: 'Insifa',
            name_cg: '',
            slug: ''
        },
        'scc-stem-cell-coin': {
            id: 'scc-stem-cell-coin',
            id_cg: 'coindom',
            symbol: 'SCC',
            symbol_cg: 'scc',
            name: 'STEM CELL COIN',
            name_cg: 'Stem Cell Coin',
            slug: 'stem-cell-coin'
        },
        'etx-ethereumx': {
            id: 'etx-ethereumx',
            id_cg: 'ethereumx',
            symbol: 'ETX',
            symbol_cg: 'etx',
            name: 'EthereumX',
            name_cg: 'EthereumX',
            slug: 'ethereumx'
        },
        'ccn-customcontractnetwork': {
            id: 'ccn-customcontractnetwork',
            id_cg: 'cannacoin',
            symbol: 'CCN',
            symbol_cg: 'ccn',
            name: 'CustomContractNetwork',
            name_cg: 'Cannacoin',
            slug: 'customcontractnetwork'
        },
        'eum-elitium': {
            id: 'eum-elitium',
            id_cg: 'elitium',
            symbol: 'EUM',
            symbol_cg: 'eum',
            name: 'ELITIUM',
            name_cg: 'Elitium',
            slug: 'elitium'
        },
        'blur-blur-network': {
            id: 'blur-blur-network',
            id_cg: 'blur-network',
            symbol: 'BLUR',
            symbol_cg: 'blur',
            name: 'Blur Network',
            name_cg: 'Blur Network',
            slug: ''
        },
        'kts-klimatas': {
            id: 'kts-klimatas',
            id_cg: 'klimatas',
            symbol: 'KTS',
            symbol_cg: 'kts',
            name: 'Klimatas',
            name_cg: 'Klimatas',
            slug: 'klimatas'
        },
        'gcash-go-cash-coin': {
            id: 'gcash-go-cash-coin',
            id_cg: 'gigacash',
            symbol: 'GCASH',
            symbol_cg: 'gcash',
            name: 'Go Cash Coin',
            name_cg: 'GigaCash',
            slug: ''
        },
        'mnc-maincoin': {
            id: 'mnc-maincoin',
            id_cg: 'maincoin',
            symbol: 'MNC',
            symbol_cg: 'mnc',
            name: 'Maincoin',
            name_cg: 'MainCoin',
            slug: 'maincoin'
        },
        'spt-spectrum': {
            id: 'spt-spectrum',
            id_cg: 'spectrum',
            symbol: 'SPT',
            symbol_cg: 'spt',
            name: 'Spectrum',
            name_cg: 'SPECTRUM',
            slug: 'spectrum'
        },
        'jurm-juriseum': {
            id: 'jurm-juriseum',
            id_cg: 'juriseum',
            symbol: 'JURM',
            symbol_cg: 'jurm',
            name: 'Juriseum',
            name_cg: 'Juriseum',
            slug: ''
        },
        'gad-garuda-token': {
            id: 'gad-garuda-token',
            id_cg: 'garuda-token',
            symbol: 'GAD',
            symbol_cg: 'gad',
            name: 'Garuda Token',
            name_cg: 'Garuda Token',
            slug: ''
        },
        'goat-goat-cash': {
            id: 'goat-goat-cash',
            id_cg: 'goat-cash',
            symbol: 'GOAT',
            symbol_cg: 'goat',
            name: 'Goat Cash',
            name_cg: 'Goat Cash',
            slug: ''
        },
        'omega-omega': {
            id: 'omega-omega',
            id_cg: 'omega',
            symbol: 'OMEGA',
            symbol_cg: 'omega',
            name: 'OMEGA',
            name_cg: 'OMEGA',
            slug: ''
        },
        'mon-bitcoin-monster': {
            id: 'mon-bitcoin-monster',
            id_cg: 'bitcoin-monster',
            symbol: 'MON',
            symbol_cg: 'mon',
            name: 'Bitcoin Monster',
            name_cg: 'Bitcoin Monster',
            slug: ''
        },
        'vsys-v-systems': {
            id: 'vsys-v-systems',
            id_cg: 'v-systems',
            symbol: 'VSYS',
            symbol_cg: 'vsys',
            name: 'V Systems',
            name_cg: 'VSYS Coin',
            slug: 'v-systems'
        },
        'thx-thorenext': {
            id: 'thx-thorenext',
            id_cg: 'thorenext',
            symbol: 'THX',
            symbol_cg: 'thx',
            name: 'ThoreNext',
            name_cg: 'Thorenext',
            slug: 'thorenext'
        },
        'hiphop-4hiphop': {
            id: 'hiphop-4hiphop',
            id_cg: '4hiphop',
            symbol: 'HIPHOP',
            symbol_cg: 'hiphop',
            name: '4hiphop',
            name_cg: '4Hiphop',
            slug: ''
        },
        'onot-onotoken': {
            id: 'onot-onotoken',
            id_cg: 'ono',
            symbol: 'ONOT',
            symbol_cg: 'onot',
            name: 'ONOToken',
            name_cg: 'ONO',
            slug: 'onotoken'
        },
        'cot-cotrader': {
            id: 'cot-cotrader',
            id_cg: 'cotrader',
            symbol: 'COT',
            symbol_cg: 'cot',
            name: 'CoTrader',
            name_cg: 'CoTrader',
            slug: 'cotrader'
        },
        'ovc-ovcode': {
            id: 'ovc-ovcode',
            id_cg: 'ovcode',
            symbol: 'OVC',
            symbol_cg: 'ovc',
            name: 'OVCODE',
            name_cg: 'OVCODE',
            slug: 'ovcode'
        },
        'vd-bitcoin-card': {
            id: 'vd-bitcoin-card',
            id_cg: 'bitcoin-card',
            symbol: 'VD',
            symbol_cg: 'vd',
            name: 'Bitcoin Card',
            name_cg: 'Bitcoin Card',
            slug: ''
        },
        'sprkl-sparkle': {
            id: 'sprkl-sparkle',
            id_cg: 'sparkle',
            symbol: 'SPRKL',
            symbol_cg: 'sprkl',
            name: 'Sparkle',
            name_cg: 'Sparkle',
            slug: 'sparkle'
        },
        'dos-dos-network': {
            id: 'dos-dos-network',
            id_cg: 'dosancoin',
            symbol: 'DOS',
            symbol_cg: 'dos',
            name: 'DOS Network',
            name_cg: 'DOSANCOIN',
            slug: ''
        },
        'bear-voytek-bear-coin': {
            id: 'bear-voytek-bear-coin',
            id_cg: 'voytek-bear-coin',
            symbol: 'BEAR',
            symbol_cg: 'bear',
            name: 'Voytek BEAR Coin',
            name_cg: 'Voytek BEAR Coin',
            slug: ''
        },
        'bot-bostravel': {
            id: 'bot-bostravel',
            id_cg: 'bodhi',
            symbol: 'BOT',
            symbol_cg: 'bot',
            name: 'BosTravel',
            name_cg: 'Bodhi',
            slug: ''
        },
        'mdl-mdl': {
            id: 'mdl-mdl',
            id_cg: '',
            symbol: 'MDL',
            symbol_cg: '',
            name: 'MDL Talent Hub',
            name_cg: '',
            slug: ''
        },
        'het-havethertoken': {
            id: 'het-havethertoken',
            id_cg: 'havethertoken',
            symbol: 'HET',
            symbol_cg: 'het',
            name: 'HavEtherToken',
            name_cg: 'HavEtherToken',
            slug: ''
        },
        'miac-miacoin': {
            id: 'miac-miacoin',
            id_cg: 'miac',
            symbol: 'MIAC',
            symbol_cg: 'miac',
            name: 'Miacoin',
            name_cg: 'MIAC',
            slug: ''
        },
        'kazu-kazucoin': {
            id: 'kazu-kazucoin',
            id_cg: 'kazucoin',
            symbol: 'KAZU',
            symbol_cg: 'kazu',
            name: 'Kazucoin',
            name_cg: 'Kazucoin',
            slug: ''
        },
        'net-next': {
            id: 'net-next',
            id_cg: 'netcoin',
            symbol: 'NET',
            symbol_cg: 'net',
            name: 'NEXT',
            name_cg: 'Netcoin',
            slug: ''
        },
        'kbyte-kazubyte': {
            id: 'kbyte-kazubyte',
            id_cg: 'kazubyte',
            symbol: 'KBYTE',
            symbol_cg: 'kbyte',
            name: 'KazuByte',
            name_cg: 'KazuByte',
            slug: ''
        },
        'hypx-hypnoxys': {
            id: 'hypx-hypnoxys',
            id_cg: 'hypnoxys',
            symbol: 'HYPX',
            symbol_cg: 'hypx',
            name: 'Hypnoxys',
            name_cg: 'HYPNOXYS',
            slug: 'hypnoxys'
        },
        'araw-araw': {
            id: 'araw-araw',
            id_cg: 'araw-token',
            symbol: 'ARAW',
            symbol_cg: 'araw',
            name: 'ARAW',
            name_cg: 'ARAW Token',
            slug: 'araw'
        },
        'rito-rito': {
            id: 'rito-rito',
            id_cg: 'rito',
            symbol: 'RITO',
            symbol_cg: 'rito',
            name: 'RITO',
            name_cg: 'Rito',
            slug: ''
        },
        'jwl-jewel': {
            id: 'jwl-jewel',
            id_cg: 'jewel',
            symbol: 'JWL',
            symbol_cg: 'jwl',
            name: 'Jewel',
            name_cg: 'Jewel',
            slug: 'jewel'
        },
        'innbcl-innovativebioresearchclassic': {
            id: 'innbcl-innovativebioresearchclassic',
            id_cg: 'innovativebioresearchclassic',
            symbol: 'INNBCL',
            symbol_cg: 'innbcl',
            name: 'InnovativeBioresearchClassic',
            name_cg: 'InnovativeBioresearchClassic',
            slug: 'innovative-bioresearch-classic'
        },
        'rc20-robocalls': {
            id: 'rc20-robocalls',
            id_cg: 'robocalls',
            symbol: 'RC20',
            symbol_cg: 'rc20',
            name: 'RoboCalls',
            name_cg: 'RoboCalls',
            slug: 'robocalls'
        },
        'atom-cosmos': {
            id: 'atom-cosmos',
            id_cg: 'cosmos',
            symbol: 'ATOM',
            symbol_cg: 'atom',
            name: 'Cosmos',
            name_cg: 'Cosmos',
            slug: 'cosmos'
        },
        'spdr-spidervps': {
            id: 'spdr-spidervps',
            id_cg: 'spidervps',
            symbol: 'SPDR',
            symbol_cg: 'spdr',
            name: 'SpiderVPS',
            name_cg: 'Spider VPS',
            slug: 'spider-vps'
        },
        'catt-catex-token': {
            id: 'catt-catex-token',
            id_cg: 'catex-token',
            symbol: 'CATT',
            symbol_cg: 'catt',
            name: 'Catex Token',
            name_cg: 'Catex Token',
            slug: ''
        },
        'mesg-mesg': {
            id: 'mesg-mesg',
            id_cg: 'mesg',
            symbol: 'MESG',
            symbol_cg: 'mesg',
            name: 'MESG',
            name_cg: 'MESG',
            slug: 'mesg'
        },
        'dashp-dash-platinum': {
            id: 'dashp-dash-platinum',
            id_cg: 'dash-platinum',
            symbol: 'DASHP',
            symbol_cg: 'dashp',
            name: 'DASH PLATINUM',
            name_cg: 'DASH PLATINUM',
            slug: ''
        },
        'bora-bora': {
            id: 'bora-bora',
            id_cg: 'bora',
            symbol: 'BORA',
            symbol_cg: 'bora',
            name: 'BORA',
            name_cg: 'BORA',
            slug: 'bora'
        },
        'xwp-swap': {
            id: 'xwp-swap',
            id_cg: 'swap',
            symbol: 'XWP',
            symbol_cg: 'xwp',
            name: 'Swap',
            name_cg: 'Swap',
            slug: 'swap'
        },
        'xbx-bitex-global-xbx-coin': {
            id: 'xbx-bitex-global-xbx-coin',
            id_cg: 'bitex-global',
            symbol: 'XBX',
            symbol_cg: 'xbx',
            name: 'Bitex Global XBX Coin',
            name_cg: 'Bitex Global XBX Coin',
            slug: 'bitex-global-xbx-coin'
        },
        'const-constant': {
            id: 'const-constant',
            id_cg: 'constant',
            symbol: 'CONST',
            symbol_cg: 'const',
            name: 'Constant',
            name_cg: 'Constant',
            slug: 'constant'
        },
        'dra-diruna': {
            id: 'dra-diruna',
            id_cg: 'diruna',
            symbol: 'DRA',
            symbol_cg: 'dra',
            name: 'Diruna',
            name_cg: 'Diruna',
            slug: 'diruna'
        },
        'credit-credit': {
            id: 'credit-credit',
            id_cg: 'credit',
            symbol: 'CREDIT',
            symbol_cg: 'credit',
            name: 'CREDIT',
            name_cg: 'CREDIT',
            slug: 'credit'
        },
        'btcv-bitcoinv': {
            id: 'btcv-bitcoinv',
            id_cg: 'bitcoinv',
            symbol: 'BTCV',
            symbol_cg: 'btcv',
            name: 'BitcoinV',
            name_cg: 'BitcoinV',
            slug: ''
        },
        'ubit-ubit-cash': {
            id: 'ubit-ubit-cash',
            id_cg: '',
            symbol: 'UBIT',
            symbol_cg: '',
            name: 'Ubit Cash',
            name_cg: '',
            slug: ''
        },
        'xsc-xscoin': {
            id: 'xsc-xscoin',
            id_cg: 'crowdstart-coin',
            symbol: 'XSC',
            symbol_cg: 'xsc',
            name: 'XSCOIN',
            name_cg: 'Crowdstart Coin',
            slug: ''
        },
        'navy-boatpilot-token': {
            id: 'navy-boatpilot-token',
            id_cg: 'boatpilot',
            symbol: 'NAVY',
            symbol_cg: 'navy',
            name: 'BoatPilot Token',
            name_cg: 'BoatPilot',
            slug: 'boat-pilot-token'
        },
        'bzc-bitzec': {
            id: 'bzc-bitzec',
            id_cg: '',
            symbol: 'BZC',
            symbol_cg: '',
            name: 'Bitzec',
            name_cg: '',
            slug: ''
        },
        'genx-genesis': {
            id: 'genx-genesis',
            id_cg: 'genesis-network',
            symbol: 'GENX',
            symbol_cg: 'genx',
            name: 'Genesis',
            name_cg: 'Genesis Network',
            slug: ''
        },
        'ine-intellishare': {
            id: 'ine-intellishare',
            id_cg: 'intellishare',
            symbol: 'INE',
            symbol_cg: 'ine',
            name: 'IntelliShare',
            name_cg: 'IntelliShare',
            slug: 'intellishare'
        },
        'fxc-flexacoin': {
            id: 'fxc-flexacoin',
            id_cg: 'flexacoin',
            symbol: 'FXC',
            symbol_cg: 'fxc',
            name: 'Flexacoin',
            name_cg: 'Flexacoin',
            slug: 'flexacoin'
        },
        'celr-celer-network': {
            id: 'celr-celer-network',
            id_cg: 'celer-network',
            symbol: 'CELR',
            symbol_cg: 'celr',
            name: 'Celer Network',
            name_cg: 'Celer Network',
            slug: 'celer-network'
        },
        'xcom-xcom-pay': {
            id: 'xcom-xcom-pay',
            id_cg: 'xcom-pay',
            symbol: 'XCOM',
            symbol_cg: 'xcom',
            name: 'XCOM PAY',
            name_cg: 'XCOM Pay',
            slug: ''
        },
        'xmn-motion': {
            id: 'xmn-motion',
            id_cg: 'motion',
            symbol: 'XMN',
            symbol_cg: 'xmn',
            name: 'Motion',
            name_cg: 'Motion',
            slug: ''
        },
        'zmy-zumy': {
            id: 'zmy-zumy',
            id_cg: 'zumy',
            symbol: 'ZMY',
            symbol_cg: 'zmy',
            name: 'Zumy',
            name_cg: 'Zumy',
            slug: ''
        },
        'x6-x6coin': {
            id: 'x6-x6coin',
            id_cg: 'x6coin',
            symbol: 'X6',
            symbol_cg: 'x6',
            name: 'X6coin',
            name_cg: 'x6coin',
            slug: ''
        },
        'mic3-mousecoin': {
            id: 'mic3-mousecoin',
            id_cg: 'mousecoin',
            symbol: 'MIC3',
            symbol_cg: 'mic3',
            name: 'Mousecoin',
            name_cg: 'MOUSECOIN',
            slug: ''
        },
        'pton-pton': {
            id: 'pton-pton',
            id_cg: 'foresting',
            symbol: 'PTON',
            symbol_cg: 'pton',
            name: 'PTON',
            name_cg: 'Foresting',
            slug: 'pton'
        },
        'slrm-solareum': {
            id: 'slrm-solareum',
            id_cg: 'solareum',
            symbol: 'SLRM',
            symbol_cg: 'slrm',
            name: 'Solareum',
            name_cg: 'Solareum',
            slug: ''
        },
        'info-info-coin': {
            id: 'info-info-coin',
            id_cg: 'infocoin',
            symbol: 'INFO',
            symbol_cg: 'info',
            name: 'INFO Coin',
            name_cg: 'INFOCoin',
            slug: ''
        },
        'dof-door-of-future': {
            id: 'dof-door-of-future',
            id_cg: '',
            symbol: 'DOF',
            symbol_cg: '',
            name: 'Door Of Future',
            name_cg: '',
            slug: ''
        },
        'dream-dreamteam-token': {
            id: 'dream-dreamteam-token',
            id_cg: 'dreamteam',
            symbol: 'DREAM',
            symbol_cg: 'dream',
            name: 'DreamTeam Token',
            name_cg: 'DreamTeam',
            slug: 'dreamteam-token'
        },
        'bhig-buckhathcoin': {
            id: 'bhig-buckhathcoin',
            id_cg: 'buckhath-coin',
            symbol: 'BHIG',
            symbol_cg: 'bhig',
            name: 'BuckHathCoin',
            name_cg: 'BuckHath Coin',
            slug: 'buck-hath-coin'
        },
        'gpt-gopower': {
            id: 'gpt-gopower',
            id_cg: 'tokengo',
            symbol: 'GPT',
            symbol_cg: 'gpt',
            name: 'GoPower',
            name_cg: 'GoPower',
            slug: 'gopower'
        },
        'amit-amitycoin': {
            id: 'amit-amitycoin',
            id_cg: '',
            symbol: 'AMIT',
            symbol_cg: '',
            name: 'AmityCoin',
            name_cg: '',
            slug: ''
        },
        'gal-galore': {
            id: 'gal-galore',
            id_cg: 'galore',
            symbol: 'GAL',
            symbol_cg: 'gal',
            name: 'Galore',
            name_cg: 'Galore',
            slug: ''
        },
        'bgx-bitcoingenx': {
            id: 'bgx-bitcoingenx',
            id_cg: 'bgx',
            symbol: 'BGX',
            symbol_cg: 'bgx',
            name: 'BitcoinGenX',
            name_cg: 'BGX',
            slug: ''
        },
        'olxa-olxa': {
            id: 'olxa-olxa',
            id_cg: 'olxa',
            symbol: 'OLXA',
            symbol_cg: 'olxa',
            name: 'OLXA',
            name_cg: 'OLXA',
            slug: 'olxa'
        },
        'alcup-alphacup': {
            id: 'alcup-alphacup',
            id_cg: 'alphacup',
            symbol: 'ALCUP',
            symbol_cg: 'alcup',
            name: 'AlphaCup',
            name_cg: 'AlphaCup',
            slug: ''
        },
        'slc-slice': {
            id: 'slc-slice',
            id_cg: 'slice',
            symbol: 'SLC',
            symbol_cg: 'slc',
            name: 'Slice',
            name_cg: 'Slice',
            slug: ''
        },
        'tfuel-theta-fuel': {
            id: 'tfuel-theta-fuel',
            id_cg: 'theta-fuel',
            symbol: 'TFUEL',
            symbol_cg: 'tfuel',
            name: 'Theta Fuel',
            name_cg: 'Theta Fuel',
            slug: 'theta-fuel'
        },
        'top-top': {
            id: 'top-top',
            id_cg: 'top-network',
            symbol: 'TOP',
            symbol_cg: 'top',
            name: 'TOP',
            name_cg: 'TOP Network',
            slug: 'top'
        },
        'pub-publyto-token': {
            id: 'pub-publyto-token',
            id_cg: 'publyto',
            symbol: 'PUB',
            symbol_cg: 'pub',
            name: 'PUBLYTO Token',
            name_cg: 'PUBLYTO',
            slug: 'publyto-token'
        },
        'bud-buddy': {
            id: 'bud-buddy',
            id_cg: 'buddy',
            symbol: 'BUD',
            symbol_cg: 'bud',
            name: 'BUDDY',
            name_cg: 'Buddy',
            slug: 'buddy'
        },
        'ulg-ultragate': {
            id: 'ulg-ultragate',
            id_cg: 'ultragate',
            symbol: 'ULG',
            symbol_cg: 'ulg',
            name: 'Ultragate',
            name_cg: 'Ultragate',
            slug: ''
        },
        'ztc-zent-cash': {
            id: 'ztc-zent-cash',
            id_cg: 'zent-cash',
            symbol: 'ZTC',
            symbol_cg: 'ztc',
            name: 'Zent Cash',
            name_cg: 'Zent Cash',
            slug: ''
        },
        'kubo-kubocoin': {
            id: 'kubo-kubocoin',
            id_cg: 'kubocoin',
            symbol: 'KUBO',
            symbol_cg: 'kubo',
            name: 'KuboCoin',
            name_cg: 'KuboCoin',
            slug: 'kubocoin'
        },
        'und-unification': {
            id: 'und-unification',
            id_cg: 'unification',
            symbol: 'UND',
            symbol_cg: 'und',
            name: 'Unification',
            name_cg: 'Unification',
            slug: 'unification'
        },
        'nex-nash-exchange-token': {
            id: 'nex-nash-exchange-token',
            id_cg: 'neon-exchange',
            symbol: 'NEX',
            symbol_cg: 'nex',
            name: 'Nash Exchange',
            name_cg: 'Nash Exchange',
            slug: 'nash-exchange'
        },
        'jct-japan-content-token': {
            id: 'jct-japan-content-token',
            id_cg: 'japan-content-token',
            symbol: 'JCT',
            symbol_cg: 'jct',
            name: 'Japan Content Token',
            name_cg: 'Japan Content Token',
            slug: 'japan-content-token'
        },
        'mog-mogwaicoin': {
            id: 'mog-mogwaicoin',
            id_cg: 'mogwai',
            symbol: 'MOG',
            symbol_cg: 'mog',
            name: 'Mogwaicoin',
            name_cg: 'mogwai',
            slug: ''
        },
        'bbgc-big-bang-game-coin': {
            id: 'bbgc-big-bang-game-coin',
            id_cg: 'bigbang-game',
            symbol: 'BBGC',
            symbol_cg: 'bbgc',
            name: 'Big Bang Game Coin',
            name_cg: 'BigBang Game',
            slug: 'big-bang-game-coin'
        },
        'hot-hotnow': {
            id: 'hot-hotnow',
            id_cg: 'holotoken',
            symbol: 'HOT',
            symbol_cg: 'hot',
            name: 'HOT Token',
            name_cg: 'Holo',
            slug: 'holo'
        },
        'artis-artis': {
            id: 'artis-artis',
            id_cg: '',
            symbol: 'ARTIS',
            symbol_cg: '',
            name: 'Artis',
            name_cg: '',
            slug: ''
        },
        'hlt-hyperloot': {
            id: 'hlt-hyperloot',
            id_cg: 'hyperloot',
            symbol: 'HLT',
            symbol_cg: 'hlt',
            name: 'Esportbits',
            name_cg: 'Hyperloot',
            slug: 'esportbits'
        },
        'xrc-bitcoin-rhodium': {
            id: 'xrc-bitcoin-rhodium',
            id_cg: 'bitcoin-rhodium',
            symbol: 'XRC',
            symbol_cg: 'xrc',
            name: 'Bitcoin Rhodium',
            name_cg: 'Bitcoin Rhodium',
            slug: 'bitcoin-rhodium'
        },
        'xtri-triton': {
            id: 'xtri-triton',
            id_cg: 'triton',
            symbol: 'XTRI',
            symbol_cg: 'xtri',
            name: 'Triton',
            name_cg: 'Triton',
            slug: ''
        },
        'xcy-cypruscoin': {
            id: 'xcy-cypruscoin',
            id_cg: 'cypruscoin',
            symbol: 'XCY',
            symbol_cg: 'xcy',
            name: 'CyprusCoin',
            name_cg: 'CyprusCoin',
            slug: ''
        },
        'cbu-banque-universal': {
            id: 'cbu-banque-universal',
            id_cg: 'banque-universal',
            symbol: 'CBU',
            symbol_cg: 'cbu',
            name: 'Banque Universal',
            name_cg: 'Banque Universal',
            slug: ''
        },
        'xsr-sucrecoin': {
            id: 'xsr-sucrecoin',
            id_cg: 'sucrecoin',
            symbol: 'XSR',
            symbol_cg: 'xsr',
            name: 'SucreCoin',
            name_cg: 'Sucrecoin',
            slug: ''
        },
        'hisc-high-stakes-coin': {
            id: 'hisc-high-stakes-coin',
            id_cg: 'high-stakes-coin',
            symbol: 'HISC',
            symbol_cg: 'hisc',
            name: 'High Stakes Coin',
            name_cg: 'High Stakes Coin',
            slug: ''
        },
        'vbk-veriblock': {
            id: 'vbk-veriblock',
            id_cg: 'veriblock',
            symbol: 'VBK',
            symbol_cg: 'vbk',
            name: 'VeriBlock',
            name_cg: 'VeriBlock',
            slug: 'veriblock'
        },
        'vidt-v-id': {
            id: 'vidt-v-id',
            id_cg: 'v-id-blockchain',
            symbol: 'VIDT',
            symbol_cg: 'vidt',
            name: 'V-ID',
            name_cg: 'V-ID blockchain',
            slug: 'v-id'
        },
        'csp-caspian': {
            id: 'csp-caspian',
            id_cg: 'caspian',
            symbol: 'CSP',
            symbol_cg: 'csp',
            name: 'Caspian',
            name_cg: 'Caspian',
            slug: 'caspian'
        },
        'qrs-qrstars': {
            id: 'qrs-qrstars',
            id_cg: '',
            symbol: 'QRS',
            symbol_cg: '',
            name: 'QRStars',
            name_cg: '',
            slug: ''
        },
        'jmc-junson-ming-chan-coin': {
            id: 'jmc-junson-ming-chan-coin',
            id_cg: 'junsonmingchancoin',
            symbol: 'JMC',
            symbol_cg: 'jmc',
            name: 'Junson Ming Chan Coin',
            name_cg: 'Junsonmingchancoin',
            slug: ''
        },
        '404-404-coin': {
            id: '404-404-coin',
            id_cg: '404',
            symbol: '404',
            symbol_cg: '404',
            name: '404 coin',
            name_cg: '404',
            slug: ''
        },
        'aus-australia-cash': {
            id: 'aus-australia-cash',
            id_cg: 'australia-cash',
            symbol: 'AUS',
            symbol_cg: 'aus',
            name: 'Australia Cash',
            name_cg: 'Australia Cash',
            slug: ''
        },
        'hnst-honest': {
            id: 'hnst-honest',
            id_cg: 'honest-mining',
            symbol: 'HNST',
            symbol_cg: 'hnst',
            name: 'Honest',
            name_cg: 'Honest',
            slug: 'honest'
        },
        'xdc-xdc': {
            id: 'xdc-xdc',
            id_cg: '',
            symbol: 'XDC',
            symbol_cg: '',
            name: 'XDC',
            name_cg: '',
            slug: ''
        },
        'kgs-kingscoin': {
            id: 'kgs-kingscoin',
            id_cg: 'kingscoin',
            symbol: 'KGS',
            symbol_cg: 'kgs',
            name: 'KingsCoin',
            name_cg: 'KINGSCOIN',
            slug: ''
        },
        'fst-1irstcoin': {
            id: 'fst-1irstcoin',
            id_cg: '1irstcoin',
            symbol: 'FST',
            symbol_cg: 'fst',
            name: '1irstcoin',
            name_cg: '1irstcoin',
            slug: '1irstcoin'
        },
        'xtx-xtock': {
            id: 'xtx-xtock',
            id_cg: 'xtock',
            symbol: 'XTX',
            symbol_cg: 'xtx',
            name: 'Xtock',
            name_cg: 'Xtock',
            slug: 'xtock'
        },
        'when-when-token': {
            id: 'when-when-token',
            id_cg: 'when-token',
            symbol: 'WHEN',
            symbol_cg: 'when',
            name: 'WHEN Token',
            name_cg: 'WHEN Token',
            slug: 'when-token'
        },
        'oto-otocash': {
            id: 'oto-otocash',
            id_cg: 'otocash',
            symbol: 'OTO',
            symbol_cg: 'oto',
            name: 'OTOCASH',
            name_cg: 'OTOCASH',
            slug: 'otocash'
        },
        'genix-genix': {
            id: 'genix-genix',
            id_cg: 'genix',
            symbol: 'GENIX',
            symbol_cg: 'genix',
            name: 'Genix',
            name_cg: 'Genix',
            slug: ''
        },
        'alln-airline-amp-life-networking-token': {
            id: 'alln-airline-amp-life-networking-token',
            id_cg: 'airline-and-life-networking',
            symbol: 'ALLN',
            symbol_cg: 'alln',
            name: 'Airline & Life Networking Token',
            name_cg: 'Airline and Life Networking',
            slug: 'airline-and-life-networking-token'
        },
        'gfun-goldfund': {
            id: 'gfun-goldfund',
            id_cg: 'goldfund-ico',
            symbol: 'GFUN',
            symbol_cg: 'gfun',
            name: 'GoldFund',
            name_cg: 'GoldFund',
            slug: 'goldfund'
        },
        'mtv-multivac': {
            id: 'mtv-multivac',
            id_cg: 'multivac',
            symbol: 'MTV',
            symbol_cg: 'mtv',
            name: 'MultiVAC',
            name_cg: 'MultiVAC',
            slug: 'multivac'
        },
        'bloc-blockcloud': {
            id: 'bloc-blockcloud',
            id_cg: 'blockcloud',
            symbol: 'BLOC',
            symbol_cg: 'bloc',
            name: 'Blockcloud',
            name_cg: 'Blockcloud',
            slug: 'blockcloud'
        },
        'fnb-fnb-protocol': {
            id: 'fnb-fnb-protocol',
            id_cg: 'finexbox-token',
            symbol: 'FNB',
            symbol_cg: 'fnb',
            name: 'FNB Protocol',
            name_cg: 'FinexboxToken',
            slug: 'fnb-protocol'
        },
        'pti-paytomat': {
            id: 'pti-paytomat',
            id_cg: 'paytomat',
            symbol: 'PTI',
            symbol_cg: 'pti',
            name: 'Paytomat',
            name_cg: 'Paytomat',
            slug: 'paytomat'
        },
        'mar-mchain': {
            id: 'mar-mchain',
            id_cg: 'mchain',
            symbol: 'MAR',
            symbol_cg: 'mar',
            name: 'Mchain',
            name_cg: 'Mchain',
            slug: ''
        },
        'p59-prometheus-59': {
            id: 'p59-prometheus-59',
            id_cg: 'prometheus-59',
            symbol: 'P59',
            symbol_cg: 'p59',
            name: 'Prometheus 59',
            name_cg: 'Prometheus 59',
            slug: ''
        },
        'gfr-goldenfever': {
            id: 'gfr-goldenfever',
            id_cg: 'goldenfever',
            symbol: 'GFR',
            symbol_cg: 'gfr',
            name: 'GoldenFever',
            name_cg: 'GoldenFever',
            slug: 'goldenfever'
        },
        'inf-infinitus-token': {
            id: 'inf-infinitus-token',
            id_cg: 'infinitus-token',
            symbol: 'INF',
            symbol_cg: 'inf',
            name: 'Infinitus Token',
            name_cg: 'Infinitus Token',
            slug: 'infinitus-token'
        },
        'eved-evedo': {
            id: 'eved-evedo',
            id_cg: 'evedo',
            symbol: 'EVED',
            symbol_cg: 'eved',
            name: 'Evedo',
            name_cg: 'Evedo',
            slug: 'evedo'
        },
        'sky-scopuly': {
            id: 'sky-scopuly',
            id_cg: 'scopuly',
            symbol: 'SKY',
            symbol_cg: 'sky',
            name: 'Scopuly',
            name_cg: 'Scopuly',
            slug: 'scopuly'
        },
        'hemp-hempora': {
            id: 'hemp-hempora',
            id_cg: 'hempora',
            symbol: 'HEMP',
            symbol_cg: 'hemp',
            name: 'Hempora',
            name_cg: 'Hempora',
            slug: ''
        },
        'deq-dequant': {
            id: 'deq-dequant',
            id_cg: 'dequant',
            symbol: 'DEQ',
            symbol_cg: 'deq',
            name: 'Dequant',
            name_cg: 'Dequant',
            slug: ''
        },
        'scp-siaprime-coin': {
            id: 'scp-siaprime-coin',
            id_cg: 'siaprime-coin',
            symbol: 'SCP',
            symbol_cg: 'scp',
            name: 'SiaPrime Coin',
            name_cg: 'SiaPrime Coin',
            slug: ''
        },
        'lno-livenodes': {
            id: 'lno-livenodes',
            id_cg: 'livenodes',
            symbol: 'LNO',
            symbol_cg: 'lno',
            name: 'Livenodes',
            name_cg: 'Livenodes',
            slug: ''
        },
        'ugas-ugas': {
            id: 'ugas-ugas',
            id_cg: 'ultrain',
            symbol: 'UGAS',
            symbol_cg: 'ugas',
            name: 'UGAS',
            name_cg: 'Ultrain',
            slug: 'ugas'
        },
        'nash-neoworld-cash': {
            id: 'nash-neoworld-cash',
            id_cg: 'neoworld-cash',
            symbol: 'NASH',
            symbol_cg: 'nash',
            name: 'NeoWorld Cash',
            name_cg: 'NeoWorld Cash',
            slug: 'neoworld-cash'
        },
        'bzky-bizkey': {
            id: 'bzky-bizkey',
            id_cg: 'bizkey',
            symbol: 'BZKY',
            symbol_cg: 'bzky',
            name: 'BIZKEY',
            name_cg: 'Bizkey',
            slug: 'bizkey'
        },
        'a-alpha-token': {
            id: 'a-alpha-token',
            id_cg: 'alpha-platform',
            symbol: 'A',
            symbol_cg: 'a',
            name: 'Alpha Token',
            name_cg: 'Alpha Token',
            slug: 'alpha-token'
        },
        'cnns-cnns': {
            id: 'cnns-cnns',
            id_cg: 'cnns',
            symbol: 'CNNS',
            symbol_cg: 'cnns',
            name: 'CNNS',
            name_cg: 'CNNS',
            slug: 'cnns'
        },
        'con-conun': {
            id: 'con-conun',
            id_cg: 'conun',
            symbol: 'CON',
            symbol_cg: 'con',
            name: 'CONUN',
            name_cg: 'CONUN',
            slug: 'conun'
        },
        'new-newton': {
            id: 'new-newton',
            id_cg: 'newton-project',
            symbol: 'NEW',
            symbol_cg: 'new',
            name: 'Newton',
            name_cg: 'Newton Project',
            slug: 'newton'
        },
        'lit-lition': {
            id: 'lit-lition',
            id_cg: 'lithium',
            symbol: 'LIT',
            symbol_cg: 'lit',
            name: 'Lition',
            name_cg: 'Lithium',
            slug: ''
        },
        'fbc-fibercoin': {
            id: 'fbc-fibercoin',
            id_cg: 'fibercoin',
            symbol: 'FBC',
            symbol_cg: 'fbc',
            name: 'Fibercoin',
            name_cg: 'Fibercoin',
            slug: ''
        },
        'zeon-zeon-': {
            id: 'zeon-zeon-',
            id_cg: 'zeon',
            symbol: 'ZEON',
            symbol_cg: 'zeon',
            name: 'Zeon',
            name_cg: 'ZEON Network',
            slug: 'zeon'
        },
        'evc-eva-cash': {
            id: 'evc-eva-cash',
            id_cg: 'eco-value-coin',
            symbol: 'EVC',
            symbol_cg: 'evc',
            name: 'Eva Cash',
            name_cg: 'Eco Value Coin',
            slug: 'eva-cash'
        },
        'pbc-profitbase': {
            id: 'pbc-profitbase',
            id_cg: 'parinita-bansode-coin',
            symbol: 'PBC',
            symbol_cg: 'pbc',
            name: 'Profitbase',
            name_cg: 'Parinita Bansode Coin',
            slug: ''
        },
        'she-sternium-huge-elligence-coin': {
            id: 'she-sternium-huge-elligence-coin',
            id_cg: 'shinechain',
            symbol: 'SHE',
            symbol_cg: 'she',
            name: 'Sternium Huge Elligence coin',
            name_cg: 'ShineChain',
            slug: 'shinechain'
        },
        'mcc-microcoin': {
            id: 'mcc-microcoin',
            id_cg: 'microcoin',
            symbol: 'MCC',
            symbol_cg: 'mcc',
            name: 'MicroCoin',
            name_cg: 'MicroCoin',
            slug: ''
        },
        'iris-irisnet': {
            id: 'iris-irisnet',
            id_cg: 'iris-network',
            symbol: 'IRIS',
            symbol_cg: 'iris',
            name: 'IRISnet',
            name_cg: 'IRIS Network',
            slug: 'irisnet'
        },
        'botx-botxcoin': {
            id: 'botx-botxcoin',
            id_cg: 'botxcoin',
            symbol: 'BOTX',
            symbol_cg: 'botx',
            name: 'botXcoin',
            name_cg: 'BOTXCOIN',
            slug: 'botxcoin'
        },
        'valor-valor-token': {
            id: 'valor-valor-token',
            id_cg: 'smart-valor',
            symbol: 'VALOR',
            symbol_cg: 'valor',
            name: 'Valor Token',
            name_cg: 'Smart Valor',
            slug: 'valor-token'
        },
        'entrc-entercoin': {
            id: 'entrc-entercoin',
            id_cg: 'entercoin',
            symbol: 'ENTRC',
            symbol_cg: 'entrc',
            name: 'EnterCoin',
            name_cg: 'EnterCoin',
            slug: 'entercoin'
        },
        'webd-webdollar': {
            id: 'webd-webdollar',
            id_cg: 'webdollar',
            symbol: 'WEBD',
            symbol_cg: 'webd',
            name: 'WebDollar',
            name_cg: 'webdollar',
            slug: 'webdollar'
        },
        'rf-rf': {
            id: 'rf-rf',
            id_cg: '',
            symbol: 'RF',
            symbol_cg: '',
            name: 'RF',
            name_cg: '',
            slug: ''
        },
        'cow-cowry': {
            id: 'cow-cowry',
            id_cg: 'cowry',
            symbol: 'COW',
            symbol_cg: 'cow',
            name: 'COWRY',
            name_cg: 'COWRY',
            slug: ''
        },
        'dln-delion': {
            id: 'dln-delion',
            id_cg: 'delion',
            symbol: 'DLN',
            symbol_cg: 'dln',
            name: 'Delion',
            name_cg: 'Delion',
            slug: ''
        },
        'tera-tera': {
            id: 'tera-tera',
            id_cg: 'tera-smart-money',
            symbol: 'TERA',
            symbol_cg: 'tera',
            name: 'TERA',
            name_cg: 'TERA',
            slug: ''
        },
        'xlic-lico': {
            id: 'xlic-lico',
            id_cg: '',
            symbol: 'XLIC',
            symbol_cg: '',
            name: 'Lico',
            name_cg: '',
            slug: ''
        },
        'mrp-moneyrebel': {
            id: 'mrp-moneyrebel',
            id_cg: 'money-rebel',
            symbol: 'MRP',
            symbol_cg: 'mrp',
            name: 'MoneyRebel',
            name_cg: 'Money Rebel',
            slug: ''
        },
        'rfox-redfox-labs': {
            id: 'rfox-redfox-labs',
            id_cg: 'redfox-labs',
            symbol: 'RFOX',
            symbol_cg: 'rfox',
            name: 'RedFOX Labs',
            name_cg: 'RedFOX Labs',
            slug: 'redfox-labs'
        },
        'qcx-quickx-protocol': {
            id: 'qcx-quickx-protocol',
            id_cg: 'quickx-protocol',
            symbol: 'QCX',
            symbol_cg: 'qcx',
            name: 'QuickX Protocol',
            name_cg: 'QuickX Protocol',
            slug: 'quickx-protocol'
        },
        'fx-function-x': {
            id: 'fx-function-x',
            id_cg: 'fx-coin',
            symbol: 'FX',
            symbol_cg: 'fx',
            name: 'Function X',
            name_cg: 'f(x) Coin',
            slug: 'function-x'
        },
        'bttr-bittracksystems': {
            id: 'bttr-bittracksystems',
            id_cg: 'bittracksystems',
            symbol: 'BTTR',
            symbol_cg: 'bttr',
            name: 'BittrackSystems',
            name_cg: 'BittrackSystems',
            slug: ''
        },
        'bby-blocbuy': {
            id: 'bby-blocbuy',
            id_cg: 'blocbuy',
            symbol: 'BBY',
            symbol_cg: 'bby',
            name: 'BlocBuy',
            name_cg: 'BlocBuy',
            slug: ''
        },
        'bitc-bitcash': {
            id: 'bitc-bitcash',
            id_cg: 'bitcash',
            symbol: 'BITC',
            symbol_cg: 'bitc',
            name: 'BitCash',
            name_cg: 'BitCash',
            slug: 'bitcash'
        },
        'cgcx-cgcx': {
            id: 'cgcx-cgcx',
            id_cg: 'cgcx',
            symbol: 'CGCX',
            symbol_cg: 'cgcx',
            name: 'CGCX',
            name_cg: 'CGCX',
            slug: ''
        },
        'bceo-bitceo': {
            id: 'bceo-bitceo',
            id_cg: 'bitceo',
            symbol: 'BCEO',
            symbol_cg: 'bceo',
            name: 'bitCEO',
            name_cg: 'bitCEO',
            slug: 'bitceo'
        },
        'ict-icocalendartoday': {
            id: 'ict-icocalendartoday',
            id_cg: 'icocalendar-today',
            symbol: 'ICT',
            symbol_cg: 'ict',
            name: 'ICOCalendar.Today',
            name_cg: 'ICOCalendar.Today',
            slug: 'icocalendar-today'
        },
        'matic-matic-network': {
            id: 'matic-matic-network',
            id_cg: 'matic-network',
            symbol: 'MATIC',
            symbol_cg: 'matic',
            name: 'Matic Network',
            name_cg: 'Matic Network',
            slug: 'matic-network'
        },
        'nat-natmin': {
            id: 'nat-natmin',
            id_cg: 'natmin-pure-escrow',
            symbol: 'NAT',
            symbol_cg: 'nat',
            name: 'Natmin Pure Escrow',
            name_cg: 'Natmin',
            slug: 'natmin-pure-escrow'
        },
        'xtnc-xtendcash': {
            id: 'xtnc-xtendcash',
            id_cg: '',
            symbol: 'XTNC',
            symbol_cg: '',
            name: 'XtendCash',
            name_cg: '',
            slug: ''
        },
        'ple-plenteum': {
            id: 'ple-plenteum',
            id_cg: 'plenteum',
            symbol: 'PLE',
            symbol_cg: 'ple',
            name: 'Plenteum',
            name_cg: 'Plenteum',
            slug: ''
        },
        'xbb-billionbond': {
            id: 'xbb-billionbond',
            id_cg: 'billionbond',
            symbol: 'XBB',
            symbol_cg: 'xbb',
            name: 'Billionbond',
            name_cg: 'BillionBond',
            slug: ''
        },
        'p2p-p2pcoin-': {
            id: 'p2p-p2pcoin-',
            id_cg: 'p2pcoin',
            symbol: 'P2P',
            symbol_cg: 'p2p',
            name: 'P2PCOIN',
            name_cg: 'P2PCOIN',
            slug: ''
        },
        'wopc-work-place-coin': {
            id: 'wopc-work-place-coin',
            id_cg: 'work-place-coin',
            symbol: 'WOPC',
            symbol_cg: 'wopc',
            name: 'Work Place Coin',
            name_cg: 'Work Place Coin',
            slug: ''
        },
        'alth-alioth': {
            id: 'alth-alioth',
            id_cg: 'alioth',
            symbol: 'ALTH',
            symbol_cg: 'alth',
            name: 'Alioth',
            name_cg: 'Alioth',
            slug: ''
        },
        'vollar-v-dimension': {
            id: 'vollar-v-dimension',
            id_cg: 'vollar',
            symbol: 'VOLLAR',
            symbol_cg: 'vollar',
            name: 'V-Dimension',
            name_cg: 'V-Dimension',
            slug: 'v-dimension'
        },
        'now-changenow': {
            id: 'now-changenow',
            id_cg: 'changenow-token',
            symbol: 'NOW',
            symbol_cg: 'now',
            name: 'NOW Token',
            name_cg: 'Now Token',
            slug: 'now-token'
        },
        'osc-oasiscity': {
            id: 'osc-oasiscity',
            id_cg: 'oasis-city',
            symbol: 'OSC',
            symbol_cg: 'osc',
            name: 'OasisCity',
            name_cg: 'Oasis City',
            slug: 'oasis-city'
        },
        'hyt-horyoutoken': {
            id: 'hyt-horyoutoken',
            id_cg: 'horyou',
            symbol: 'HYT',
            symbol_cg: 'hyt',
            name: 'HoryouToken',
            name_cg: 'HoryouToken',
            slug: 'horyoutoken'
        },
        '7e-7eleven': {
            id: '7e-7eleven',
            id_cg: '7eleven',
            symbol: '7E',
            symbol_cg: '7e',
            name: '7ELEVEN',
            name_cg: '7ELEVEN',
            slug: ''
        },
        'xmv-monerov': {
            id: 'xmv-monerov',
            id_cg: 'monerov',
            symbol: 'XMV',
            symbol_cg: 'xmv',
            name: 'MoneroV',
            name_cg: 'MoneroV',
            slug: 'monero-v'
        },
        'duo-duo-network-token': {
            id: 'duo-duo-network-token',
            id_cg: 'duo',
            symbol: 'DUO',
            symbol_cg: 'duo',
            name: 'DUO Network Token',
            name_cg: 'DUO Network',
            slug: 'duo-network-token'
        },
        'e2c-electronic-energy-coin': {
            id: 'e2c-electronic-energy-coin',
            id_cg: 'electronic-energy-coin',
            symbol: 'E2C',
            symbol_cg: 'e2c',
            name: 'Electronic Energy Coin',
            name_cg: 'Electronic Energy Coin',
            slug: 'electronic-energy-coin'
        },
        'dio-decimated': {
            id: 'dio-decimated',
            id_cg: 'decimated',
            symbol: 'DIO',
            symbol_cg: 'dio',
            name: 'Decimated',
            name_cg: 'Decimated',
            slug: 'decimated'
        },
        'mcm-mochimo': {
            id: 'mcm-mochimo',
            id_cg: 'mochimo',
            symbol: 'MCM',
            symbol_cg: 'mcm',
            name: 'Mochimo',
            name_cg: 'Mochimo',
            slug: ''
        },
        'ocean-ocean-protocol': {
            id: 'ocean-ocean-protocol',
            id_cg: 'ocean-protocol',
            symbol: 'OCEAN',
            symbol_cg: 'ocean',
            name: 'Ocean Protocol',
            name_cg: 'Ocean Protocol',
            slug: 'ocean-protocol'
        },
        'ttn-titan-coin': {
            id: 'ttn-titan-coin',
            id_cg: 'titan-coin',
            symbol: 'TTN',
            symbol_cg: 'ttn',
            name: 'Titan Coin',
            name_cg: 'Titan Coin',
            slug: 'titan-coin'
        },
        'doget-doge-token': {
            id: 'doget-doge-token',
            id_cg: '',
            symbol: 'DOGET',
            symbol_cg: '',
            name: 'Doge Token',
            name_cg: '',
            slug: 'doge-token'
        },
        'lcrt-lucre': {
            id: 'lcrt-lucre',
            id_cg: 'lucre',
            symbol: 'LCRT',
            symbol_cg: 'lcrt',
            name: 'LUCRE',
            name_cg: 'LUCRE',
            slug: ''
        },
        'less-lordless-token': {
            id: 'less-lordless-token',
            id_cg: 'lordless',
            symbol: 'LESS',
            symbol_cg: 'less',
            name: 'LORDLESS Token',
            name_cg: 'LORDLESS',
            slug: ''
        },
        'peps-peps-coin': {
            id: 'peps-peps-coin',
            id_cg: 'pepegold',
            symbol: 'PEPS',
            symbol_cg: 'peps',
            name: 'PEPS Coin',
            name_cg: 'PEPS Coin',
            slug: ''
        },
        'gtn-glitzkoin': {
            id: 'gtn-glitzkoin',
            id_cg: 'glitzkoin',
            symbol: 'GTN',
            symbol_cg: 'gtn',
            name: 'GlitzKoin',
            name_cg: 'GlitzKoin',
            slug: 'glitzkoin'
        },
        'vjc-venjocoin': {
            id: 'vjc-venjocoin',
            id_cg: 'venjocoin',
            symbol: 'VJC',
            symbol_cg: 'vjc',
            name: 'VENJOCOIN',
            name_cg: 'VENJOCOIN',
            slug: 'venjocoin'
        },
        'soci-bank-society-coin': {
            id: 'soci-bank-society-coin',
            id_cg: 'bank-society-coin',
            symbol: 'SOCI',
            symbol_cg: 'soci',
            name: 'Bank Society Coin',
            name_cg: 'Bank Society Coin',
            slug: ''
        },
        'meri-merebel': {
            id: 'meri-merebel',
            id_cg: 'merebel',
            symbol: 'MERI',
            symbol_cg: 'meri',
            name: 'Merebel',
            name_cg: 'Merebel',
            slug: 'merebel'
        },
        'tas-tarush': {
            id: 'tas-tarush',
            id_cg: 'tarush',
            symbol: 'TAS',
            symbol_cg: 'tas',
            name: 'Tarush',
            name_cg: 'TARUSH',
            slug: 'tarush'
        },
        'wgp-w-green-pay': {
            id: 'wgp-w-green-pay',
            id_cg: 'w-green-pay',
            symbol: 'WGP',
            symbol_cg: 'wgp',
            name: 'W Green Pay',
            name_cg: 'W Green Pay',
            slug: 'w-green-pay'
        },
        'xlmg-stellar-gold': {
            id: 'xlmg-stellar-gold',
            id_cg: 'stellar-gold',
            symbol: 'XLMG',
            symbol_cg: 'xlmg',
            name: 'Stellar Gold',
            name_cg: 'Stellar Gold',
            slug: 'stellar-gold'
        },
        'darc-konstellation': {
            id: 'darc-konstellation',
            id_cg: 'darcmatter-coin',
            symbol: 'DARC',
            symbol_cg: 'darc',
            name: 'Konstellation',
            name_cg: 'Konstellation',
            slug: ''
        },
        'atls-atlas-token': {
            id: 'atls-atlas-token',
            id_cg: 'atlas',
            symbol: 'ATLS',
            symbol_cg: 'atls',
            name: 'Atlas Token',
            name_cg: 'Atlas Network',
            slug: 'atlas-token'
        },
        'idex-idex': {
            id: 'idex-idex',
            id_cg: 'aurora-dao',
            symbol: 'IDEX',
            symbol_cg: 'idex',
            name: 'IDEX',
            name_cg: 'IDEX',
            slug: 'idex'
        },
        'peos-peos': {
            id: 'peos-peos',
            id_cg: 'peos',
            symbol: 'PEOS',
            symbol_cg: 'peos',
            name: 'pEOS',
            name_cg: 'pEOS',
            slug: 'peos'
        },
        'bcz-bitcoin-cash-zero': {
            id: 'bcz-bitcoin-cash-zero',
            id_cg: 'bitcoin-cz',
            symbol: 'BCZ',
            symbol_cg: 'bcz',
            name: 'Bitcoin CZ',
            name_cg: 'Bitcoin CZ',
            slug: 'bitcoin-cz'
        },
        'tt-thunder-token': {
            id: 'tt-thunder-token',
            id_cg: 'thunder-token',
            symbol: 'TT',
            symbol_cg: 'tt',
            name: 'Thunder Token',
            name_cg: 'ThunderCore',
            slug: 'thunder-token'
        },
        'bqtx-bqt': {
            id: 'bqtx-bqt',
            id_cg: 'bqt',
            symbol: 'BQTX',
            symbol_cg: 'bqtx',
            name: 'BQT',
            name_cg: 'BQT',
            slug: 'bqt'
        },
        'hatch-hatch': {
            id: 'hatch-hatch',
            id_cg: 'hatch',
            symbol: 'HATCH',
            symbol_cg: 'hatch',
            name: 'Hatch',
            name_cg: 'Hatch',
            slug: ''
        },
        'earths-earths': {
            id: 'earths-earths',
            id_cg: '',
            symbol: 'EARTHS',
            symbol_cg: '',
            name: 'Earths',
            name_cg: '',
            slug: ''
        },
        'ntbc-note-blockchain': {
            id: 'ntbc-note-blockchain',
            id_cg: 'note-blockchain',
            symbol: 'NTBC',
            symbol_cg: 'ntbc',
            name: 'Note Blockchain',
            name_cg: 'Note Blockchain',
            slug: ''
        },
        'hlx-hilux': {
            id: 'hlx-hilux',
            id_cg: 'hilux',
            symbol: 'HLX',
            symbol_cg: 'hlx',
            name: 'Hilux',
            name_cg: 'Hilux',
            slug: 'hilux'
        },
        'tftn-tft-network': {
            id: 'tftn-tft-network',
            id_cg: 'tft-network',
            symbol: 'TFTN',
            symbol_cg: 'tftn',
            name: 'TFT Network',
            name_cg: 'TFT Network',
            slug: ''
        },
        'vco-voucher-coin': {
            id: 'vco-voucher-coin',
            id_cg: 'voucher-coin',
            symbol: 'VCO',
            symbol_cg: 'vco',
            name: 'Voucher Coin',
            name_cg: 'Voucher Coin',
            slug: ''
        },
        'zano-zano': {
            id: 'zano-zano',
            id_cg: 'zano',
            symbol: 'ZANO',
            symbol_cg: 'zano',
            name: 'Zano',
            name_cg: 'Zano',
            slug: ''
        },
        'nnb-nnb-token': {
            id: 'nnb-nnb-token',
            id_cg: 'nnb-token',
            symbol: 'NNB',
            symbol_cg: 'nnb',
            name: 'NNB Token',
            name_cg: 'NNB Token',
            slug: 'nnb-token'
        },
        'srk-sparkpoint': {
            id: 'srk-sparkpoint',
            id_cg: 'sparkpoint',
            symbol: 'SRK',
            symbol_cg: 'srk',
            name: 'Sparkpoint',
            name_cg: 'SparkPoint',
            slug: 'sparkpoint'
        },
        'gny-gny': {
            id: 'gny-gny',
            id_cg: 'gny',
            symbol: 'GNY',
            symbol_cg: 'gny',
            name: 'GNY',
            name_cg: 'GNY',
            slug: 'gny'
        },
        'xcon-connect-coin': {
            id: 'xcon-connect-coin',
            id_cg: 'connect-coin',
            symbol: 'XCON',
            symbol_cg: 'xcon',
            name: 'Connect Coin',
            name_cg: 'Connect Coin',
            slug: 'connect-coin'
        },
        'p2px-p2p-global-network': {
            id: 'p2px-p2p-global-network',
            id_cg: 'p2p-global-network',
            symbol: 'P2PX',
            symbol_cg: 'p2px',
            name: 'P2P Global Network',
            name_cg: 'P2P Global Network',
            slug: 'p2p-global-network'
        },
        'trp-tronipay': {
            id: 'trp-tronipay',
            id_cg: 'tronipay',
            symbol: 'TRP',
            symbol_cg: 'trp',
            name: 'Tronipay',
            name_cg: 'Tronipay',
            slug: 'tronipay'
        },
        'bc-bitcoin-confidential': {
            id: 'bc-bitcoin-confidential',
            id_cg: 'bitcoin-confidential',
            symbol: 'BC',
            symbol_cg: 'bc',
            name: 'Bitcoin Confidential',
            name_cg: 'Bitcoin Confidential',
            slug: 'bitcoin-confidential'
        },
        'vdx-vodi-x': {
            id: 'vdx-vodi-x',
            id_cg: 'vodi-x',
            symbol: 'VDX',
            symbol_cg: 'vdx',
            name: 'Vodi X',
            name_cg: 'Vodi X',
            slug: 'vodi-x'
        },
        'qwc-qwertycoin': {
            id: 'qwc-qwertycoin',
            id_cg: 'qwertycoin',
            symbol: 'QWC',
            symbol_cg: 'qwc',
            name: 'Qwertycoin',
            name_cg: 'Qwertycoin',
            slug: 'qwertycoin'
        },
        'fab-fast-access-blockchain': {
            id: 'fab-fast-access-blockchain',
            id_cg: 'fabcoin',
            symbol: 'FAB',
            symbol_cg: 'fab',
            name: 'Fast Access Blockchain',
            name_cg: 'Fabcoin',
            slug: 'fast-access-blockchain'
        },
        'neox-neox': {
            id: 'neox-neox',
            id_cg: '',
            symbol: 'NEOX',
            symbol_cg: '',
            name: 'NEOX',
            name_cg: '',
            slug: 'neox'
        },
        'admn-adioman': {
            id: 'admn-adioman',
            id_cg: 'adioman',
            symbol: 'ADMN',
            symbol_cg: 'admn',
            name: 'Adioman',
            name_cg: 'ADIOMAN',
            slug: ''
        },
        'at-artfinity': {
            id: 'at-artfinity',
            id_cg: 'abcc-token',
            symbol: 'AT',
            symbol_cg: 'at',
            name: 'Artfinity',
            name_cg: 'ABCC Token',
            slug: 'abcc-token'
        },
        'cre-carry': {
            id: 'cre-carry',
            id_cg: 'carry',
            symbol: 'CRE',
            symbol_cg: 'cre',
            name: 'Carry',
            name_cg: 'Carry',
            slug: 'carry'
        },
        'leo-leo-token': {
            id: 'leo-leo-token',
            id_cg: 'leocoin',
            symbol: 'LEO',
            symbol_cg: 'leo',
            name: 'LEO Token',
            name_cg: 'LEOcoin',
            slug: 'leocoin'
        },
        'ntr-netrum': {
            id: 'ntr-netrum',
            id_cg: 'netrum',
            symbol: 'NTR',
            symbol_cg: 'ntr',
            name: 'Netrum',
            name_cg: 'Netrum',
            slug: 'netrum'
        },
        'hnb-hashnet-biteco': {
            id: 'hnb-hashnet-biteco',
            id_cg: 'hashnet-biteco',
            symbol: 'HNB',
            symbol_cg: 'hnb',
            name: 'HashNet BitEco',
            name_cg: 'HashNet BitEco',
            slug: 'hashnet-biteco'
        },
        'afin-asian-fintech': {
            id: 'afin-asian-fintech',
            id_cg: 'afin-coin',
            symbol: 'AFIN',
            symbol_cg: 'afin',
            name: 'Asian Fintech',
            name_cg: 'Asian Fintech',
            slug: 'asian-fintech'
        },
        'aevo-aevo': {
            id: 'aevo-aevo',
            id_cg: 'aevo',
            symbol: 'AEVO',
            symbol_cg: 'aevo',
            name: 'AEVO',
            name_cg: 'Always Evolving',
            slug: ''
        },
        'edc-edcash': {
            id: 'edc-edcash',
            id_cg: 'edcash',
            symbol: 'EDC',
            symbol_cg: 'edc',
            name: 'Edcash',
            name_cg: 'EDCASH',
            slug: ''
        },
        'mintd-mintd': {
            id: 'mintd-mintd',
            id_cg: 'mintd',
            symbol: 'MINTD',
            symbol_cg: 'mintd',
            name: 'MINTD',
            name_cg: 'MINTD',
            slug: ''
        },
        'iotw-iotw': {
            id: 'iotw-iotw',
            id_cg: 'iot-world',
            symbol: 'IOTW',
            symbol_cg: 'iotw',
            name: 'IOTW',
            name_cg: 'IOTW',
            slug: 'iotw'
        },
        'b2b-b2bcoin': {
            id: 'b2b-b2bcoin',
            id_cg: 'b2b',
            symbol: 'B2B',
            symbol_cg: 'b2b',
            name: 'B2Bcoin',
            name_cg: 'B2BX',
            slug: 'b2bx'
        },
        'awr-award-coin': {
            id: 'awr-award-coin',
            id_cg: 'awardcoin',
            symbol: 'AWR',
            symbol_cg: 'awr',
            name: 'Award Coin',
            name_cg: 'Award',
            slug: ''
        },
        'alv-alluva': {
            id: 'alv-alluva',
            id_cg: 'allive',
            symbol: 'ALV',
            symbol_cg: 'alv',
            name: 'ALLUVA',
            name_cg: 'Allive',
            slug: 'alluva'
        },
        'bomb-bomb': {
            id: 'bomb-bomb',
            id_cg: 'bomb',
            symbol: 'BOMB',
            symbol_cg: 'bomb',
            name: 'BOMB',
            name_cg: 'BOMB',
            slug: 'bomb'
        },
        'bnode-beenode': {
            id: 'bnode-beenode',
            id_cg: 'beenode',
            symbol: 'BNODE',
            symbol_cg: 'bnode',
            name: 'BeeNode',
            name_cg: 'Beenode',
            slug: ''
        },
        'zarh-zarcash': {
            id: 'zarh-zarcash',
            id_cg: 'zarcash',
            symbol: 'ZARH',
            symbol_cg: 'zarh',
            name: 'Zarcash',
            name_cg: 'Zarcash',
            slug: ''
        },
        'toc-touchcon': {
            id: 'toc-touchcon',
            id_cg: 'tobigca',
            symbol: 'TOC',
            symbol_cg: 'toc',
            name: 'TouchCon',
            name_cg: 'Tobigca',
            slug: 'touchcon'
        },
        'rsr-reserve-rights': {
            id: 'rsr-reserve-rights',
            id_cg: 'reserve-rights-token',
            symbol: 'RSR',
            symbol_cg: 'rsr',
            name: 'Reserve Rights',
            name_cg: 'Reserve Rights Token',
            slug: 'reserve-rights'
        },
        'dream-dreamteam': {
            id: 'dream-dreamteam',
            id_cg: 'dreamteam',
            symbol: 'DREAM',
            symbol_cg: 'dream',
            name: 'DreamTeam Token',
            name_cg: 'DreamTeam',
            slug: 'dreamteam-token'
        },
        'zyrk-zyrk': {
            id: 'zyrk-zyrk',
            id_cg: '',
            symbol: 'ZYRK',
            symbol_cg: '',
            name: 'Zyrk',
            name_cg: '',
            slug: ''
        },
        'k64-komodore64': {
            id: 'k64-komodore64',
            id_cg: 'komodore64',
            symbol: 'K64',
            symbol_cg: 'k64',
            name: 'Komodore64',
            name_cg: 'Komodore64',
            slug: ''
        },
        'tro-trunk-coin': {
            id: 'tro-trunk-coin',
            id_cg: 'trunk-coin',
            symbol: 'TRO',
            symbol_cg: 'tro',
            name: 'TRUNK COIN',
            name_cg: 'Trunk Coin',
            slug: 'trunk-coin'
        },
        'aya-aryacoin': {
            id: 'aya-aryacoin',
            id_cg: 'aryacoin',
            symbol: 'AYA',
            symbol_cg: 'aya',
            name: 'Aryacoin',
            name_cg: 'Aryacoin',
            slug: 'aryacoin'
        },
        'odex-one-dex': {
            id: 'odex-one-dex',
            id_cg: 'one-dex',
            symbol: 'ODEX',
            symbol_cg: 'odex',
            name: 'One DEX',
            name_cg: 'One DEX',
            slug: 'one-dex'
        },
        'grat-gratz': {
            id: 'grat-gratz',
            id_cg: '',
            symbol: 'GRAT',
            symbol_cg: '',
            name: 'Gratz',
            name_cg: '',
            slug: 'gratz'
        },
        'ksg-kings-global-token': {
            id: 'ksg-kings-global-token',
            id_cg: 'king-s-global-token',
            symbol: 'KSG',
            symbol_cg: 'ksg',
            name: "King's Global Token ",
            name_cg: "KING'S GLOBAL TOKEN",
            slug: ''
        },
        'btc2-bitcoin-2': {
            id: 'btc2-bitcoin-2',
            id_cg: 'bitcoin-2',
            symbol: 'BTC2',
            symbol_cg: 'btc2',
            name: 'Bitcoin 2',
            name_cg: 'Bitcoin 2',
            slug: 'bitcoin2'
        },
        'chr-chromia': {
            id: 'chr-chromia',
            id_cg: 'chromaway',
            symbol: 'CHR',
            symbol_cg: 'chr',
            name: 'Chromia',
            name_cg: 'Chromia',
            slug: 'chromia'
        },
        'snl-sport-and-leisure': {
            id: 'snl-sport-and-leisure',
            id_cg: 'sport-and-leisure',
            symbol: 'SNL',
            symbol_cg: 'snl',
            name: 'Sport and Leisure',
            name_cg: 'Sport and Leisure',
            slug: 'sport-and-leisure'
        },
        'mcpc-mobile-crypto-pay-coin': {
            id: 'mcpc-mobile-crypto-pay-coin',
            id_cg: 'mobile-crypto-pay-coin',
            symbol: 'MCPC',
            symbol_cg: 'mcpc',
            name: 'Mobile Crypto Pay Coin',
            name_cg: 'Mobile Crypto Pay Coin',
            slug: 'mobile-crypto-pay-coin'
        },
        'rnrc-rocknraincoin': {
            id: 'rnrc-rocknraincoin',
            id_cg: '',
            symbol: 'RNRC',
            symbol_cg: '',
            name: 'RocknRainCoin',
            name_cg: '',
            slug: ''
        },
        'pec-poverty-eradication-coin': {
            id: 'pec-poverty-eradication-coin',
            id_cg: 'pe-chain',
            symbol: 'PEC',
            symbol_cg: 'pec',
            name: 'Poverty Eradication Coin',
            name_cg: 'PE Chain',
            slug: ''
        },
        'nbx-nibbleclassic': {
            id: 'nbx-nibbleclassic',
            id_cg: 'nibbleclassic',
            symbol: 'NBX',
            symbol_cg: 'nbx',
            name: 'NibbleClassic',
            name_cg: 'NibbleClassic',
            slug: ''
        },
        'tqn-toqqn': {
            id: 'tqn-toqqn',
            id_cg: 'toqqn',
            symbol: 'TQN',
            symbol_cg: 'tqn',
            name: 'Toqqn',
            name_cg: 'Toqqn',
            slug: 'toqqn'
        },
        'one-harmony': {
            id: 'one-harmony',
            id_cg: 'harmony',
            symbol: 'ONE',
            symbol_cg: 'one',
            name: 'Harmony',
            name_cg: 'Harmony',
            slug: 'harmony'
        },
        'phv-pathhive': {
            id: 'phv-pathhive',
            id_cg: 'pathhive',
            symbol: 'PHV',
            symbol_cg: 'phv',
            name: 'PATHHIVE',
            name_cg: 'PATHHIVE',
            slug: 'phv'
        },
        'lbn-lucky-block-network': {
            id: 'lbn-lucky-block-network',
            id_cg: 'lucky-block-network',
            symbol: 'LBN',
            symbol_cg: 'lbn',
            name: 'Lucky Block Network',
            name_cg: 'Lucky Block Network',
            slug: 'lucky-block-network'
        },
        'hrd-hoard': {
            id: 'hrd-hoard',
            id_cg: 'hrd',
            symbol: 'HRD',
            symbol_cg: 'hrd',
            name: 'Hoard',
            name_cg: 'Hoard Token',
            slug: ''
        },
        'betty-betty': {
            id: 'betty-betty',
            id_cg: 'betty',
            symbol: 'BETTY',
            symbol_cg: 'betty',
            name: 'Betty',
            name_cg: 'Betty',
            slug: ''
        },
        'tagz-tagz': {
            id: 'tagz-tagz',
            id_cg: 'tagz-token',
            symbol: 'TAGZ',
            symbol_cg: 'tagz',
            name: 'TAGZ',
            name_cg: 'TAGZ',
            slug: 'tagz'
        },
        'scc-stakecubecoin': {
            id: 'scc-stakecubecoin',
            id_cg: 'coindom',
            symbol: 'SCC',
            symbol_cg: 'scc',
            name: 'StakeCubeCoin',
            name_cg: 'Stem Cell Coin',
            slug: 'stem-cell-coin'
        },
        'ogo-origo': {
            id: 'ogo-origo',
            id_cg: 'origo',
            symbol: 'OGO',
            symbol_cg: 'ogo',
            name: 'Origo',
            name_cg: 'Origo',
            slug: 'origo'
        },
        'vnt-vnt-chain': {
            id: 'vnt-vnt-chain',
            id_cg: 'vntchain',
            symbol: 'VNT',
            symbol_cg: 'vnt',
            name: 'VNT Chain',
            name_cg: 'VNT Chain',
            slug: 'vnt-chain'
        },
        'nut-nut': {
            id: 'nut-nut',
            id_cg: 'native-utility-token',
            symbol: 'NUT',
            symbol_cg: 'nut',
            name: 'NUT',
            name_cg: 'Native Utility Token',
            slug: ''
        },
        'wfx-webflix-token': {
            id: 'wfx-webflix-token',
            id_cg: 'webflix',
            symbol: 'WFX',
            symbol_cg: 'wfx',
            name: 'Webflix Token',
            name_cg: 'WebFlix',
            slug: 'webflix-token'
        },
        'lvl-levelapp-token': {
            id: 'lvl-levelapp-token',
            id_cg: 'levelapp',
            symbol: 'LVL',
            symbol_cg: 'lvl',
            name: 'LevelApp Token',
            name_cg: 'LevelApp',
            slug: 'levelapp-token'
        },
        'crad-crad-cash': {
            id: 'crad-crad-cash',
            id_cg: 'cryptoads-marketplace',
            symbol: 'CRAD',
            symbol_cg: 'crad',
            name: 'CRAD CASH',
            name_cg: 'CryptoAds Marketplace',
            slug: ''
        },
        'ira-diligence': {
            id: 'ira-diligence',
            id_cg: 'deligence',
            symbol: 'IRA',
            symbol_cg: 'ira',
            name: 'Diligence',
            name_cg: 'Deligence',
            slug: ''
        },
        'gos-gosama': {
            id: 'gos-gosama',
            id_cg: 'gosama',
            symbol: 'GOS',
            symbol_cg: 'gos',
            name: 'Gosama',
            name_cg: 'Gosama',
            slug: 'gosama'
        },
        'ioux-iou': {
            id: 'ioux-iou',
            id_cg: 'iou',
            symbol: 'IOUX',
            symbol_cg: 'ioux',
            name: 'IOU',
            name_cg: 'IOU',
            slug: 'iou'
        },
        'emt-emanate': {
            id: 'emt-emanate',
            id_cg: 'emanate',
            symbol: 'EMT',
            symbol_cg: 'emt',
            name: 'Emanate',
            name_cg: 'Emanate',
            slug: 'emanate'
        },
        'pals-pals': {
            id: 'pals-pals',
            id_cg: 'pals',
            symbol: 'PALS',
            symbol_cg: 'pals',
            name: 'PALS',
            name_cg: 'PALS',
            slug: ''
        },
        'alp-alphacon': {
            id: 'alp-alphacon',
            id_cg: 'alphacon',
            symbol: 'ALP',
            symbol_cg: 'alp',
            name: 'Alphacon',
            name_cg: 'Alphacon',
            slug: 'alphacon'
        },
        'kri-krios': {
            id: 'kri-krios',
            id_cg: 'krios',
            symbol: 'KRI',
            symbol_cg: 'kri',
            name: 'Krios',
            name_cg: 'Krios',
            slug: 'krios'
        },
        'expi-expi': {
            id: 'expi-expi',
            id_cg: 'expi',
            symbol: 'EXPI',
            symbol_cg: 'expi',
            name: 'EXPi',
            name_cg: 'EXPi',
            slug: ''
        },
        'gfncash-grafenocoin': {
            id: 'gfncash-grafenocoin',
            id_cg: 'grafenocoin',
            symbol: 'GFNCASH',
            symbol_cg: 'gfncash',
            name: 'GrafenoCoin',
            name_cg: 'GrafenoCoin',
            slug: ''
        },
        'gex-gexan': {
            id: 'gex-gexan',
            id_cg: 'gexan',
            symbol: 'GEX',
            symbol_cg: 'gex',
            name: 'Gexan',
            name_cg: 'Gexan',
            slug: 'gexan'
        },
        'zdx-zer-dex': {
            id: 'zdx-zer-dex',
            id_cg: 'zer-dex',
            symbol: 'ZDX',
            symbol_cg: 'zdx',
            name: 'Zer-Dex',
            name_cg: 'Zer-Dex',
            slug: ''
        },
        'fastx-transfast': {
            id: 'fastx-transfast',
            id_cg: 'transfast',
            symbol: 'FASTX',
            symbol_cg: 'fastx',
            name: 'TRANSFAST',
            name_cg: 'TRANSFAST',
            slug: ''
        },
        'mota-motacoin': {
            id: 'mota-motacoin',
            id_cg: 'motacoin',
            symbol: 'MOTA',
            symbol_cg: 'mota',
            name: 'MotaCoin',
            name_cg: 'MotaCoin',
            slug: ''
        },
        'elph-elphyrecoin': {
            id: 'elph-elphyrecoin',
            id_cg: 'elphyrecoin',
            symbol: 'ELPH',
            symbol_cg: 'elph',
            name: 'Elphyrecoin',
            name_cg: 'Elphyrecoin',
            slug: ''
        },
        'sero-super-zero': {
            id: 'sero-super-zero',
            id_cg: 'super-zero',
            symbol: 'SERO',
            symbol_cg: 'sero',
            name: 'Super Zero',
            name_cg: 'Super Zero',
            slug: 'super-zero'
        },
        'lad-lemonad': {
            id: 'lad-lemonad',
            id_cg: 'lemonad',
            symbol: 'LAD',
            symbol_cg: 'lad',
            name: 'LemonAd',
            name_cg: 'LemonAd',
            slug: ''
        },
        'andes-andescoin': {
            id: 'andes-andescoin',
            id_cg: 'andes-coin',
            symbol: 'ANDES',
            symbol_cg: 'andes',
            name: 'AndesCoin',
            name_cg: 'AndesCoin',
            slug: ''
        },
        'dud-jacek-dudzic-token': {
            id: 'dud-jacek-dudzic-token',
            id_cg: '',
            symbol: 'DUD',
            symbol_cg: '',
            name: 'Jacek Dudzic Token',
            name_cg: '',
            slug: ''
        },
        'qdao-qdao': {
            id: 'qdao-qdao',
            id_cg: 'q-dao-governance-token-v1-0',
            symbol: 'QDAO',
            symbol_cg: 'qdao',
            name: 'QDAO',
            name_cg: 'Q DAO Governance token v1.0',
            slug: 'q-dao-governance-token'
        },
        'func-funtimecoin': {
            id: 'func-funtimecoin',
            id_cg: 'funcoin',
            symbol: 'FUNC',
            symbol_cg: 'func',
            name: 'FunTimeCoin',
            name_cg: 'FunTime Coin',
            slug: ''
        },
        'thore-thore-token': {
            id: 'thore-thore-token',
            id_cg: '',
            symbol: 'THORE',
            symbol_cg: '',
            name: 'THORE Token',
            name_cg: '',
            slug: ''
        },
        'hora-hydnora': {
            id: 'hora-hydnora',
            id_cg: 'hydnora',
            symbol: 'HORA',
            symbol_cg: 'hora',
            name: 'HYDNORA',
            name_cg: 'HYDNORA',
            slug: ''
        },
        'axa-foundation': {
            id: 'axa-foundation',
            id_cg: '',
            symbol: 'AXA',
            symbol_cg: '',
            name: 'AXA Foundation',
            name_cg: '',
            slug: ''
        },
        'nuke-half-life': {
            id: 'nuke-half-life',
            id_cg: 'half-life',
            symbol: 'NUKE',
            symbol_cg: 'nuke',
            name: 'Half Life',
            name_cg: 'Half Life',
            slug: ''
        },
        'pirate-piratecash': {
            id: 'pirate-piratecash',
            id_cg: 'piratecash',
            symbol: 'PIRATE',
            symbol_cg: 'pirate',
            name: 'PirateCash',
            name_cg: 'PirateCash',
            slug: ''
        },
        'mx-mx-token': {
            id: 'mx-mx-token',
            id_cg: 'mx-token',
            symbol: 'MX',
            symbol_cg: 'mx',
            name: 'MX Token',
            name_cg: 'MX Token',
            slug: ''
        }
    };

    hasCGid(cpSym: string): boolean {
        return this.coin_ids[cpSym].id_cg !== '';
    }
}
