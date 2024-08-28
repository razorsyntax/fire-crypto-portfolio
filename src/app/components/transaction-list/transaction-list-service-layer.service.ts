import { Injectable } from '@angular/core';

@Injectable()
export class TransactionListServiceLayer {

    constructor() { }

    createTransactionString(transaction, symbol): object {
        let lineOne = '';
        let transactionClass = '';
        const hasExchange = (transaction.exchange !== '') ? `from ${transaction.exchange}` : '';
        let amount = transaction.amount;

        // START TEST
        if (symbol === undefined) {
            console.log(`symbol is undefined: ${symbol}`);
        }
        if (hasExchange === undefined) {
            console.log(`hasExchange is undefined: ${hasExchange}`);
        }
        if (amount === undefined) {
            console.log(`amount is undefined: ${amount}`);
        }
        if (amount === undefined) {
            console.log(`transaction.exchange is undefined: ${transaction.exchange}`);
        }

        // END TEST

        if (transaction.amount < 0) {
            amount = Math.abs(transaction.amount);
        }
        switch (transaction.transactiontype) {
            case 'buy':
                switch (transaction.obtained) {
                    case 'Mined':
                        lineOne = `Mined ${amount} ${symbol} on`;
                        break;
                    case 'Transfer':
                        lineOne = `Received ${amount} ${symbol} from transfer on`;
                        break;
                    case 'Dividend':
                        lineOne = `Recieved ${amount} ${symbol} from dividend on`;
                        break;
                    case 'Airdrop':
                        lineOne = `${amount} ${symbol} was Airdropped to ${transaction.exchange} on`;
                        break;
                    case 'On Exchange':
                        lineOne = `Bought ${amount} ${symbol} from ${transaction.exchange} on`;
                        break;
                    default:
                        lineOne = `Obtained ${amount} ${symbol} ${hasExchange} on`;
                        break;
                }
                transactionClass = 'green-background';
                break;
            case 'sell':
                switch (transaction.obtained) {
                    case 'Sold':
                        lineOne = `Sold ${amount} ${symbol} on`;
                        break;
                    case 'Transfer':
                        lineOne = `Transferred ${amount} ${symbol} on`;
                        break;
                    case 'Swapped':
                        lineOne = `Swapped ${amount} ${symbol} on`;
                        break;
                    case 'On Exchange':
                        lineOne = `Traded ${amount} ${symbol} from ${transaction.exchange} on`;
                        break;
                    case 'Released':
                        lineOne = `Released ${amount} ${symbol} ${hasExchange} on`;
                        break;
                    default:
                        lineOne = `Released ${amount} ${symbol} ${hasExchange} on`;
                        break;
                }
                transactionClass = 'red-background';
                break;
            case 'transfer':
                lineOne = `Transferred ${amount} ${symbol} from ${transaction.transferredFrom} to ${transaction.transferredTo} on`;
                transactionClass = 'blue-background';
                break;
        }

        return {
            lineOne: lineOne,
            lineTwo: `${transaction.dateadded} ${transaction.timeadded}`,
            backgroundType: transactionClass,
            datetime: transaction.datetime,
            transaction: transaction
        };
    }

    sortTransactionsByDate(transactionArray, orderBy) {
        let compare;
        switch (orderBy) {
            case 'ASC':
                compare = (a, b) => {
                    if (a.datetime < b.datetime) {
                        return -1;
                    }
                    if (a.datetime > b.datetime) {
                        return 1;
                    }
                };
                break;
            case 'DESC':
                compare = (a, b) => {
                    if (a.datetime > b.datetime) {
                        return -1;
                    }

                    if (a.datetime < b.datetime) {
                        return 1;
                    }
                };
                break;
            default:
                break;
        }

        return transactionArray.sort(compare);
    }

    mapButtons(dialogButtons, inPortfolio) {
        if (inPortfolio) {
            return dialogButtons.map((x) => {
                switch (x.buttonvalue) {
                    case 'Edit Transaction':
                        x.buttonvisibility = true;
                        break;
                    case 'Remove Transaction':
                        x.buttonvisibility = true;
                        break;
                    case 'Remove from Portfolio':
                        x.buttonvisibility = false;
                        break;
                    case 'Ok':
                        x.buttonvisibility = false;
                        break;
                }
                return x;
            });
        } else {
            return dialogButtons.map((x) => {
                switch (x.buttonvalue) {
                    case 'Edit Transaction':
                        x.buttonvisibility = false;
                        break;
                    case 'Remove Transaction':
                        x.buttonvisibility = false;
                        break;
                    case 'Remove from Portfolio':
                        x.buttonvisibility = false;
                        break;
                    case 'Ok':
                        x.buttonvisibility = true;
                        break;
                }
                return x;
            });
        }
    }

}
