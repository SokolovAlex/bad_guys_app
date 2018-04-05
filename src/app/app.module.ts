import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

import { MyApp } from './app.component';
import { GamePage } from '../pages/game/game';
import { MenuPage } from '../pages/menu/menu';
import { RoomsPage } from '../pages/rooms/rooms';

import { EditRoom } from '../pages/rooms/edit-room/edit-room';
import { RoomList } from '../pages/rooms/room-list/room-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { StoreModule, MetaReducer} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from "ngrx-store-logger";

import { environment } from '../environments/environment';
import { reducers, initialState, AppState } from '../store/reducers';

const metaReducers: MetaReducer<AppState>[] = !environment.production ?
    [storeFreeze, storeLogger()]
    : [];

@NgModule({
    declarations: [
        MyApp,
        GamePage,
        MenuPage,
        RoomsPage,

        EditRoom,
        RoomList,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        StoreModule.forRoot(reducers, { initialState, metaReducers }),
        StoreDevtoolsModule.instrument({
            name: 'NgRx Store DevTools',
            logOnly: environment.production,
        }),
        LoadingModule.forRoot({
            animationType: ANIMATION_TYPES.wanderingCubes,
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        GamePage,
        MenuPage,
        RoomsPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ScreenOrientation,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}
