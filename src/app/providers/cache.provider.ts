import { Injectable } from '@angular/core';
import { CacheTypes } from './../shared/interfaces/coin.interface';

@Injectable()
export class CacheProvider {

    cache: CacheTypes = {};

    constructor() { }

    private setCacheTimeout(type: string, expirationTime: number): void {
        setTimeout(() => {
            this.clearCacheByType(type);
        }, expirationTime);
    }

    /**
     * Sets Cache w/optional expiration time
     * 
     * @param data 
     * @param type 
     * @param expirationTime 
     */
    setCache(data: any, type: string, expirationTime?: number): void {
        this.cache[type] = data;
        if (expirationTime && expirationTime > 0) {
            this.setCacheTimeout(type, Math.abs(expirationTime));
        }
    }

    /**
     * Gets Cache by type
     * 
     * @param type 
     */
    getCache(type: string) {
        let cacheData;
        try {
            cacheData = this.cache[type] || null;
        } catch (e) {
            cacheData = null;
        }
        return cacheData;
    }

    /**
     * Clears the Cache by type
     * 
     * @param type 
     */
    clearCacheByType(type: string): void {
        this.cache[type] = null;
    }

    /**
     * Clears the entire cache.
     */
    clearCache(): void {
        this.cache = undefined;
    }

    /**
     * Returns an array of multiple cached items in the order of the 
     * provided string array
     * @param cachedList string[]
     */
    getMultipleItemsFromCache(cachedList: string[]): any[] {
        if (cachedList.length === 0) {
            return [];
        }
        return cachedList.map(cachedName => this.getCache(cachedName));
    }

}