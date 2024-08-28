import { Injectable } from '@angular/core';
import { CoinAPIDetails, TransactionData } from './../shared/interfaces/coin.interface';

@Injectable()
export class DataStorageProvider {

    // stores DB details for single coin
    dbStorage: any;

    // stores API data for single coin
    coinAPIDetails: CoinAPIDetails;

    // List of transactions
    transactions: TransactionData;

    constructor() { }
}
