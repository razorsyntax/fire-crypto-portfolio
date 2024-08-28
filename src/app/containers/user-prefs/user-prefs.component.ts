import { Component, OnInit, ContentChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from '~/app/services/database-service/database.service';
import { UserPrefs } from '~/app/shared/interfaces/database.interface';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';

@Component({
  selector: 'app-user-prefs',
  moduleId: module.id,
  templateUrl: './user-prefs.component.html',
  styleUrls: ['./user-prefs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPrefsComponent implements OnInit {
  @ContentChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>;
  userPrefs$: Observable<UserPrefs>;
  userPrefsDocs;
  userpreferencesDB;

  constructor(private usersPrefsDB: DatabaseService, private utilities: UtilitiesProvider) { 
    this.userpreferencesDB = this.usersPrefsDB.getDataBase('userprefs');
    this.userPrefsDocs = this.utilities.executeDBQuery(this.userpreferencesDB, 'userprefs');
    const userPrefDoc = this.setUserPrefsOnLoad(this.userPrefsDocs);
    this.userPrefs$ = new Observable(observer => observer.next(userPrefDoc));
  }

  ngOnInit() { }

  private setUserPrefsOnLoad(userPrefsDoc) {
    if (userPrefsDoc && userPrefsDoc.length > 0) {
      return userPrefsDoc[0];
    } else {
      this.userpreferencesDB.createDocument(
        this.setDefaultUserPrefs()
      );
      return this.utilities.executeDBQuery(this.userpreferencesDB, 'userprefs');
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
      firstrun: true
    }
  }

}
