import { Injectable } from '@angular/core';
import { DatabaseService } from './database-service/database.service';
import { UtilitiesProvider } from '../providers/utilities.provider';
import { UserPrefs } from '../shared/interfaces/database.interface';
import { Observable } from 'rxjs';

@Injectable()
export class UserPrefsService {
  userPrefs$: Observable<any>; // Update this to not any
  userPrefsDocs;
  userpreferencesDB;

  constructor(private usersPrefsDB: DatabaseService, private utilities: UtilitiesProvider) {
  }

  setUserPrefsOnLoad() {
    this.userpreferencesDB = this.usersPrefsDB.getDataBase('userprefs');
    this.userPrefsDocs = this.utilities.executeDBQuery(this.userpreferencesDB, 'userprefs');
    if (this.userPrefsDocs && this.userPrefsDocs.length > 0) {
      return this.userPrefsDocs[0];
    } else {
      this.userpreferencesDB.createDocument(
        this.setDefaultUserPrefs()
      );
      // return this.utilities.executeDBQuery(this.userpreferencesDB, 'userprefs');
    }
  }

  private setDefaultUserPrefs(): UserPrefs {
    return {
      type: 'userprefs',
      defaultcurrency: 'USD',
      authsettings: {
        userpin: 0,
        authenticationenabled: false
      },
      theme: 'default',
      membership: 'free',
      firstrun: true,
      ratedapp: false,
      showtooltips: false
    }
  }
}