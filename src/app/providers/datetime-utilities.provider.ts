import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DateTimeUtilitiesProvider {

    /**
        * Creates UTC format from date and time strings. Ex: 123456789000
        */
    dateTimeFormat(date, time): any {
        const dateFormat = date.split('-');
        const dayNight = time.slice(0, 6);
        let timeHour = time.slice(0, 2);
        timeHour = (dayNight === 'PM') ? (parseInt(timeHour) + 12) : timeHour;
        const timeMin = time.slice(3, 5);

        return moment(`${dateFormat[2]}-${dateFormat[0]}-${dateFormat[1]}T${timeHour}:${timeMin}`).valueOf();
    }

    get30DaysTimeFormat() {
        let date = new Date();
        let newDate = new Date(date.setDate(date.getDate() - 30)).toISOString();
        return newDate.replace(/:/g, '%3A');
    }

    get24HrTimeFormat() {
        let date = new Date(Date.now() - 86400 * 1000).toISOString();
        return date.replace(/:/g, '%3A');
    }

    getCurrentTime() {
        let date = new Date().toISOString();
        return date.replace(/:/g, '%3A');
    }

    getCurrentDateTimeInMillis(): number {
        const currentDate = new Date();
        return currentDate.getTime();
    }

    isOlderThanAMinute(previousDateTime: number): boolean {
        const oneMinuteAgo = new Date().getMilliseconds() - 60000; // 60 * 1000
        if (previousDateTime < oneMinuteAgo) {
            return true;
        }
        return false;
    }

    /**
     * Gets date from X number days ago
     * @param numOfDays number
     */
    getDateFromDaysAgo(numOfDays: number) {
        let date = new Date();
        let newDate = new Date(date.setDate(date.getDate() - numOfDays)).toISOString();
        return newDate.replace(/:/g, '%3A');
    }

    getAllDatesBetweenTwoDates(startDate, stopDate) {
        const dateArray = [];
        let currentDate = moment(startDate);
        stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('DD/MM/YYYY') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }

    getAllDatesBetweenTwoDatesFormatted(startDate, stopDate) {
        const dateArray = [];
        let currentDate = moment(startDate);
        stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('MM/DD/YYYY') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }

    /**
     * @param dateTimeA
     * @param dateTimeB
     * returns 1  if dateTimeA  >  dateTimeB
     * returns 0  if dateTimeA === dateTimeB
     * returns -1 if dateTimeA  <  dateTimeB
     */
    compareDates(dateTimeA: number, dateTimeB: number): number {
        const momentA = this.normalizeDateFormat(dateTimeA);
        const momentB = this.normalizeDateFormat(dateTimeB);
        if (momentA > momentB) return 1;
        else if (momentA < momentB) return -1;
        else return 0;
    }

    /**
     * Formats datetime to 'DD/MM/YYYY' string
     */
    normalizeDateFormat(datetime) {
        return moment(datetime).format('DD/MM/YYYY');
    }

    customFormat(utc, format) {
        return moment(utc * 1000).format(format);
    }

}