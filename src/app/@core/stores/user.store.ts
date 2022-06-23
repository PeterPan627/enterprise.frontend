import { Injectable } from '@angular/core';
import { User } from '../interfaces/common/users';
import { Settings, SettingsData } from '../interfaces/common/settings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
    private user: User;

    constructor(
      private settingsService: SettingsData,
    ) {}

    getUser(): User {
        return this.user;
    }

    setUser(paramUser: User) {
        this.user = paramUser;
        if (this.user.picture === null || this.user.picture === undefined) {
          this.user.picture = '';
        }
    }

    getUserPhoto(): string {
      return this.user.picture;
    }

    setUserPhoto(picture: string) {
        this.user.picture = picture;
    }

    setSetting(themeName: string): Observable<Settings> {
      if (this.user) {
        if (this.user.settings) {
          this.user.settings.themeName = themeName;
        } else {
          this.user.settings = { themeName: themeName };
        }
        return this.settingsService.updateCurrent(this.user.settings);
      } else {
        return of({ themeName: themeName });
      }
    }
}
