import { Injectable } from '@angular/core';

interface NationalCurrency {
    locale?: string;
    currencycode?: string;
}

@Injectable()
export class IntlUtilitiesProvider {

    readonly currencies = [
        "USD", "AUD", "BRL", "CAD", "CHF", "CLP", 
        "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", 
        "HUF", "IDR", "ILS", "INR", "JPY", "KRW", 
        "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", 
        "PLN", "RUB", "SEK", "SGD", "THB", "TRY", 
        "TWD", "ZAR"
    ];

    // AED, ARS, BGN, BSD, COP, DOP, EGP, FJD
    // GTQ, HRK, ISK, KZT, PAB, PEN, PYG, RON
    // SAR, UAH, UYU, VND

    readonly defaultnationalCurrency = {
        locale: 'en',
        currencycode: 'EN'
    }
    /**
     * International Locale Codes
     * http://www.lingoes.net/en/translator/langcode.htm
     * 
     * language: 'en'
     * locale: 'EN'
     * combined locale code: en-EN
     */

    nationalCurrenciesData = [
        {
            country: 'Australia',
            currencycode: 'AUD',
            language: 'en',
            locale: 'AU'
        },
        {
            country: 'Brazil',
            currencycode: 'BRL',
            language: 'pt',
            locale: 'BR'
        },
        {
            country: 'Canada',
            currencycode: 'CAD',
            language: 'en',
            locale: 'CA'
        },
        {
            country: 'Switzerland',
            currencycode: 'CHF',
            language: 'fr',
            locale: 'CH'
        },
        {
            country: 'Switzerland',
            currencycode: 'CHF',
            language: 'it',
            locale: 'CH'
        },
        {
            country: 'Switzerland',
            currencycode: 'CHF',
            language: 'de',
            locale: 'CH'
        },
        {
            country: 'Chile',
            currencycode: 'CLP',
            language: 'es',
            locale: 'CL'
        },
        {
            country: 'China',
            currencycode: 'CNY',
            language: 'zh',
            locale: 'CN'
        },
        {
            country: 'Czech Republic',
            currencycode: 'CZK',
            language: 'cs',
            locale: 'CZ'
        },
        {
            country: 'Denmark',
            currencycode: 'DKK',
            language: 'da',
            locale: 'DK'
        },
        {
            country: 'United Kingdom',
            currencycode: 'EUR',
            language: 'en',
            locale: 'GB'
        },
        {
            country: 'United Kingdom',
            currencycode: 'GBP',
            language: 'en',
            locale: 'GB'
        },
        {
            country: 'Hong Kong',
            currencycode: 'HKD',
            language: 'zh',
            locale: 'HK'
        },
        {
            country: 'Hungary',
            currencycode: 'HUF',
            language: 'hu',
            locale: 'HU'
        },
        {
            country: 'Indonesia',
            currencycode: 'IDR',
            language: 'id',
            locale: 'ID'
        },
        {
            country: 'Israel',
            currencycode: 'ILS',
            language: 'he',
            locale: 'IL'
        },
        {
            country: 'India',
            currencycode: 'INR',
            language: 'hi',
            locale: 'IN'
        },
        {
            country: 'Japan',
            currencycode: 'JPY',
            language: 'ja',
            locale: 'JP'
        },
        {
            country: 'South Korea',
            currencycode: 'KRW',
            language: 'ko',
            locale: 'KR'
        },
        {
            country: 'Mexico',
            currencycode: 'MXN',
            language: 'es',
            locale: 'MX'
        },
        {
            country: 'Malaysia',
            currencycode: 'MYR',
            language: 'ms',
            locale: 'MY'
        },
        {
            country: 'Norway',
            currencycode: 'NOK',
            language: 'nb',
            locale: 'NO'
        },
        {
            country: 'New Zealand',
            currencycode: 'NZD',
            language: 'es',
            locale: 'NZ'
        },
        {
            country: 'Philippines',
            currencycode: 'PHP',
            language: 'tl',
            locale: 'PH'
        },
        {
            country: 'Pakistan',
            currencycode: 'PKR',
            language: 'ur',
            locale: 'PK'
        },
        {
            country: 'Poland',
            currencycode: 'PLN',
            language: 'pl',
            locale: 'PL'
        },
        {
            country: 'Russia',
            currencycode: 'RUB',
            language: 'ru',
            locale: 'RU'
        },
        {
            country: 'Sweden',
            currencycode: 'SEK',
            language: 'sv',
            locale: 'SE'
        },
        {
            country: 'Singapore',
            currencycode: 'SGD',
            language: 'zh',
            locale: 'SG'
        },
        {
            country: 'Thailand',
            currencycode: 'THB',
            language: 'th',
            locale: 'TH'
        },
        {
            country: 'Turkey',
            currencycode: 'TRY',
            language: 'tr',
            locale: 'TR'
        },
        {
            country: 'Taiwan',
            currencycode: 'TWD',
            language: 'zh',
            locale: 'TW'
        },
        {
            country: 'United States',
            currencycode: 'USD',
            language: 'en',
            locale: 'EN'
        },
        {
            country: 'South Africa',
            currencycode: 'ZAR',
            language: 'af',
            locale: 'ZA'
        }
    ]

    /**
     * 
     * DEPRECATION Warning: Replaced by Angular Currency Pipe
     */
    /**
     * Returns formated price
     * Ex. let price = 123456.789;
     * new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);
     * expected output: "￥123,457"
     */
    IntlPriceFormatting(currencyAbbr: string, price: number, nationalCurrency: NationalCurrency = this.defaultnationalCurrency, min?: number, max?: number): string {
        const options = this.setCurrencyOptions(currencyAbbr, min, max);
        return new Intl.NumberFormat(nationalCurrency.locale, options).format(price);
    }

    private setCurrencyOptions(currencyAbbr: string, min: number, max: number) {
        return {
            style: 'currency',
            currency: currencyAbbr,
            minimumFractionDigits: min,
            maximumFractionDigits: max
        }
    }


    setCurrencyDecimalPlaces() {

    }
}

