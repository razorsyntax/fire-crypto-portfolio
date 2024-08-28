import { Injectable } from '@angular/core';
import { EncryptionProvider } from '~/app/providers/encryption.provider';
import * as fs from '@nativescript/core/file-system';
import { Transaction } from '~/app/shared/interfaces/database.interface';

@Injectable()
export class UtilitiesProvider {

    constructor(private encryption: EncryptionProvider) { }

    /**
     * String Manipulation Ultilities
     */
    // Trims price depending on its value
    // [Specific to Nomics]
    priceFormat(price: number): number {
        if (price === undefined || price === null) {
            return undefined;
        }
        const parsedPrice: number = price;
        // if (parsedPrice > 1) {
        //     return this.addCommasToNumbers(parsedPrice.toFixed(2));
        // }
        return parsedPrice; // this.trimDecimals(parsedPrice.toString());
    }

    addCommasToNumbers(price: number): string {
        const parts = price.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (parts[1] === '00') {
            return parts[0];
        }
        return parts.join('.');
    }

    // Price data comes is recieved from the backend as a string
    trimDecimals(price: string): string {
        if (price === '0') {
            return price;
        } else {
            if (price.includes('.')) {
                const parts = price.toString().split('.');
                parts[1] = parts[1].slice(0, 8);
                return parts.join('.');
            }
            return price;
        }
    }

    doesCryptoIconExist(fileName: string): boolean {
        if (fs.File.exists(`${fs.knownFolders.currentApp().path}/images/cryptoicons/${fileName.toLowerCase()}.png`)) {
            return true;
        }
        return false;
    }

    // Returns the path to the crypto icon image
    setCryptoIconPath(symbol: string): string {
        const fileExists = this.doesCryptoIconExist(symbol);
        if (!fileExists) {
            symbol = 'genericicon';
        }
        return `~/images/cryptoicons/${symbol.toLowerCase()}.png`;
    }

    // Returns a color depending on its value
    priceColor(val: number): string {
        return ((val < 0) ? '#a82f27' : '#88e05c');
    }

    /**
     * Formats a number to include a letter
     *      Ex: 10,000,000 --> 10M
     * @param num
     * @param precision
     */
    formatToUnits(num: number, precision: number): string {
        if (num === 0) {
            return '0';
        }
        const abbrev = ['', 'K', 'M', 'B', 'T'];
        const order = Math.min(
            Math.floor(Math.log10(Math.abs(num)) / 3),
            abbrev.length - 1
        );
        const suffix = abbrev[order];
        return (num / Math.pow(10, order * 3)).toFixed(precision) + suffix;
    }

    /**
     * Returns array of crypto tickers
     * @param coinList string[]
     */
    createSymbolArr(coinList): string[] {
        // const coinArr = [];
        // for (let i = 0; i < coinList.length; i++) {
        //     coinArr.push(coinList[i].data.symbol);
        // }
        // return coinArr;

        return coinList.map(x => x.data.symbol);
    }

    /**
     * DataBase Document Parsing Utilities
     */

    /**
     * Calculates the total amount of holdings for a particular coin based on transactions
     * @param coinTransactions
     */
    calculateTotalAmount(coinTransactions: Transaction[]): number {
        let total: number = 0;

        const numArr: number[] = coinTransactions.map(item => item.amount);
        const decPlaces: number = this.longestDecimal(numArr);
        for (let i = 0; i < coinTransactions.length; i++) {
            if (coinTransactions[i].transactiontype !== 'transfer') {
                total = total + coinTransactions[i].amount;
            }
        }

        return parseFloat(total.toFixed(decPlaces));
    }

    longestDecimal(numArr: number[]): number {
        const dec = [];
        for (let i = 0; i < numArr.length; i++) {
            const decimalPlaces = this.decimalPlaces(numArr[i]);
            dec.push(decimalPlaces);
        }
        return Math.max.apply(Math, dec);
    }

    decimalPlaces(num: number): number {
        const match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) { return 0; }
        return Math.max(
            0,
            // Number of digits right of decimal point.
            (match[1] ? match[1].length : 0)
            // Adjust for scientific notation.
            - (match[2] ? +match[2] : 0));
    }

    // Returns the Id of a DB document with matching symbol
    getDBDocumentIdBySymbol(docs, symbol: string) {
        for (let i = 0; i < docs.length; i++) {
            if (docs[i].data === undefined) {
                if (symbol === docs[i].symbol) {
                    return docs[i]._id;
                }
            } else {
                if (symbol === docs[i].data.symbol) {
                    return docs[i]._id;
                }
            }
        }
        return null;
    }

    getDBDocumentIdByName(docs, coin) {
        for (let i = 0; i < docs.length; i++) {

            if (docs[i].data === undefined) {
                if (coin === docs[i].coin) {
                    return docs[i]._id;
                }
            } else {
                if (coin === docs[i].data.coin) {
                    return docs[i]._id;
                }
            }
        }
        return null;
    }

    //  Returns boolean if it's in the Document by it's Symbol
    isSymbolInDBList(docs, symbol: string): boolean {
        for (let i = 0; i < docs.length; i++) {

            if (docs[i].data === undefined) {
                if (symbol === docs[i].symbol) {
                    return true;
                }
            } else {
                if (symbol === docs[i].data.symbol) {
                    return true;
                }
            }
        }
        return false;
    }

    //  Returns document if it's in the DB by it's Symbol
    getDocumentbySymbol(docs, symbol: string) {
        for (let i = 0; i < docs.length; i++) {

            if (docs[i].data === undefined) {
                if (symbol === docs[i].symbol) {
                    return docs[i];
                }
            } else {
                if (symbol === docs[i].data.symbol) {
                    return docs[i];
                }
            }
        }
        return false;
    }

    isNameInDBList(docs, coin) {
        for (let i = 0; i < docs.length; i++) {
            if (docs[i].data === undefined) {
                if (coin === docs[i].coin) {
                    return true;
                }
            } else {
                if (coin === docs[i].data.coin) {
                    return true;
                }
            }
        }
        return false;
    }

    //  Returns the DB Document by it's Id
    getDocumentById(docs, id: string) {
        for (let i = 0; i < docs.length; i++) {
            if (id === docs[i]._id) {
                return docs[i];
            }
        }
    }

    // Executes a DB Query by its Type
    executeDBQuery(database, dbType: string) {
        let docs;
        try {
            docs = database.executeQuery(dbType);
        } catch (e) {
            docs = [];
        }
        if (dbType === 'portfolio') {
            docs = this.encryption.decryptDocs(docs);
        }
        return docs;
    }

    // Generates a random number between 0 and some provided value
    randomNumber(maxVal: number): number {
        if (maxVal === 0) {
            return maxVal;
        }
        return Math.floor((Math.random() * maxVal) + 1);
    }

    // Generates a simulated UUID v4
    UUID(): string {
        // tslint:disable-next-line: no-bitwise
        const s = (n) => h((Math.random() * (1 << (n << 2))) ^ Date.now()).slice(-n);
        // tslint:disable-next-line: no-bitwise
        const h = (n) => (n | 0).toString(16);
        return [
            s(4) + s(4), s(4),
            '4' + s(3),                    // UUID version 4
            // tslint:disable-next-line: no-bitwise
            h(8 | (Math.random() * 4)) + s(3), // {8|9|A|B}xxx
            // s(4) + s(4) + s(4),
            Date.now().toString(16).slice(-10) + s(2) // Use timestamp to avoid collisions
        ].join('-');
    }
}
