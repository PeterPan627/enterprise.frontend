

import { Observable } from 'rxjs';
import { User, UserData } from '../../@core/interfaces/common/users';
import { tap } from 'rxjs/operators';
import { UserStore } from '../../@core/stores/user.store';
import { Injectable } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Injectable()
export class InitUserService {
    constructor(protected userStore: UserStore,
        protected usersService: UserData,
        protected themeService: NbThemeService) { }

    initCurrentUser(): Observable<User> {
      return this.usersService.getCurrentUser()
            .pipe(
                tap(
                    (user: User) => {
                        if (user) {
                            this.userStore.setUser(user);
                            this.usersService.getUserPhoto(user.id).subscribe(response => {
                                const dataType = response.type;
                                const binaryData = [];
                                binaryData.push(response.body as Blob);
                                const reader = new window.FileReader();
                                reader.readAsDataURL(new Blob(binaryData, { type: dataType }));
                                reader.onloadend = () =>  {
                                    this.userStore.setUserPhoto(reader.result as string);
                                };
                            });
                            if (user.settings && user.settings.themeName) {
                                this.themeService.changeTheme(user.settings.themeName);
                            }
                        }
                    },
                ),
                tap(
                    (user: User) => {
                    },
                ),
            );
    }
}
