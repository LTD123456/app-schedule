import { NgModule  } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginPageModule } from './pages/login/login.module';
import { HttpService } from './core/HttpService';
import { CommonServiceModule } from './core/common-service.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastService } from './core/ToastService';
import { MainComponent } from './pages/main/main.component';
import { StorageService } from './core/StorageService';
import { BaseController } from './core/baseController';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { HttpConfigInterceptor } from './core/httpconfig.interceptor';
import { IonicGestureConfig } from './core/ionic-gesture-config';
import { UserServiceModule } from './services/user/user-service.module';
import { ErrorDialogService } from './core/errordialog.service';

@NgModule({
  declarations: [AppComponent,MenuItemComponent],
  imports: [HttpClientModule,BrowserModule, IonicModule.forRoot({
    backButtonText: '',
  }), AppRoutingModule,LoginPageModule,CommonServiceModule,UserServiceModule],
  providers: [ErrorDialogService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: IonicGestureConfig
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
 
})
export class AppModule {}
