import { Injectable } from '@angular/core';

@Injectable()
export class DataSamplerProvider {

    public largestTriangleThreeBuckets(data: any[], threshold: number, xAccessor: string, yAccessor: string): any[] {

        let floor = Math.floor,
            abs = Math.abs,
            dataLength = data.length,
            sampled = [],
            sampledIndex = 0,
            every = (dataLength - 2) / (threshold - 2), // Bucket size. Leave room for start and end data points
            a = 0, // Initially a is the first point in the triangle
            maxAreaPoint,
            maxArea,
            area,
            nextA,
            i: number,
            avgX = 0,
            avgY = 0,
            avgRangeStart,
            avgRangeEnd,
            avgRangeLength: number,
            rangeOffs,
            rangeTo,
            pointAX,
            pointAY;

        if (threshold >= dataLength || threshold === 0) {
            return data; // Nothing to do
        }

        sampled[sampledIndex++] = data[a]; // Always add the first point

        for (i = 0; i < threshold - 2; i++) {

            // Calculate point average for next bucket (containing c)
            avgX = 0;
            avgY = 0;
            avgRangeStart = floor((i + 1) * every) + 1;
            avgRangeEnd = floor((i + 2) * every) + 1;
            avgRangeEnd = avgRangeEnd < dataLength ? avgRangeEnd : dataLength;

            avgRangeLength = avgRangeEnd - avgRangeStart;

            for (; avgRangeStart < avgRangeEnd; avgRangeStart++) {
                avgX += data[avgRangeStart][xAccessor] * 1; // * 1 enforces Number (value may be Date)
                avgY += data[avgRangeStart][yAccessor] * 1;
            }
            avgX /= avgRangeLength;
            avgY /= avgRangeLength;

            // Get the range for this bucket
            rangeOffs = floor((i + 0) * every) + 1;
            rangeTo = floor((i + 1) * every) + 1;

            // Point a
            pointAX = data[a][xAccessor] * 1; // enforce Number (value may be Date)
            pointAY = data[a][yAccessor] * 1;

            maxArea = area = -1;

            for (; rangeOffs < rangeTo; rangeOffs++) {
                // Calculate triangle area over three buckets
                area = abs((pointAX - avgX) * (data[rangeOffs][yAccessor] - pointAY) -
                    (pointAX - data[rangeOffs][xAccessor]) * (avgY - pointAY)
                ) * 0.5;
                if (area > maxArea) {
                    maxArea = area;
                    maxAreaPoint = data[rangeOffs];
                    nextA = rangeOffs; // Next a is this b
                }
            }

            sampled[sampledIndex++] = maxAreaPoint; // Pick this point from the bucket
            a = nextA; // This a is the next a (chosen b)
        }

        sampled[sampledIndex++] = data[dataLength - 1]; // Always add last

        return sampled;
    }

}