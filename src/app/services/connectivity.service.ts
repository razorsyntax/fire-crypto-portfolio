import { Injectable } from '@angular/core';
import { Connectivity } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class ConnectivityService {

    private updateConnectionService = new BehaviorSubject('connectivity');
    currentConnection = this.updateConnectionService.asObservable();

    constructor(private routerExtensions: RouterExtensions) { }

    updateConnection(updateConnection: string) {
        this.updateConnectionService.next(updateConnection);
    }

    connectivityType(): string {
        const userConnectionType = Connectivity.getConnectionType();
        let type: string = '';
        switch (userConnectionType) {
            case Connectivity.connectionType.none:
                // Denotes no Internet connection.
                type = 'No connection'
                break;
            case Connectivity.connectionType.wifi:
                // Denotes a WiFi connection.
                type = 'WiFi connection'
                break;
            case Connectivity.connectionType.mobile:
                // Denotes a mobile connection, i.e. cellular network or WAN.
                type = 'Mobile connection'
                break;
            case Connectivity.connectionType.ethernet:
                // Denotes a ethernet connection.
                type = 'Ethernet connection'
                break;
            // Bluetooth functionality in master branch (to be released with 5.0.0)
            case Connectivity.connectionType.bluetooth:
                // Denotes a bluetooth connection.
                type = 'Bluetooth connection'
                break;
            default:
                break;
        }
        return type;
    }

    /**
     * Returns a boolean describing whether connectivity exists
     */
    hasConnectivity(): boolean {
        const connection: string = this.connectivityType();

        if (connection === 'No connection') {
            return false;
        }

        return true;
    }

    /**
     * Navigates to loading page when internet not available
     */
    noInternetNav() {
        this.routerExtensions.navigate(['/noconnection'], { clearHistory: true });
    }

}