import { Injectable } from '@angular/core';

@Injectable()
export class CoinCalculationsProvider {

    /**
     * Calculates the change percentage of some price
     * @param oldPrice number
     * @param newPrice number
     * 
     * (y2-y1) / y1
     */
    priceChangePercent(oldPrice: number, newPrice: number): number {
        return ((newPrice - oldPrice) / oldPrice) * 100;
    }

    
}