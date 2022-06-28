import {LOCALE_ID, NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {LayoutComponent} from './components/layout/layout.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {throwIfAlreadyLoaded} from "./guards/module-import.guard";
import {LoggingInterceptor} from "./interceptors/logging.interceptor";
import {ResponseInterceptor} from "./interceptors/response.interceptor";
import {RequestInterceptor} from "./interceptors/request.interceptor";
import {en_US, NZ_I18N, NzI18nService, zh_CN} from "ng-zorro-antd/i18n";
import {registerLocaleData} from "@angular/common";
import en from '@angular/common/locales/en';
import zh from "@angular/common/locales/zh";

const interceptors = [
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true},
]

registerLocaleData(en);
registerLocaleData(zh);

@NgModule({
    declarations: [
        LayoutComponent,
        NavComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        // angular
        HttpClientModule,
        RouterModule,
        // the third party
        NzIconModule,
        NzLayoutModule,
        NzMenuModule,
        NzBreadCrumbModule
    ],
    providers: [
        ...interceptors,
        {
            provide: NZ_I18N,
            useFactory: (localId: string) => {
                switch (localId) {
                    case 'en':
                        return en_US;
                    /** 与 angular.json i18n/locales 配置一致 **/
                    case 'zh':
                        return zh_CN;
                    default:
                        return en_US;
                }
            },
            deps: [LOCALE_ID]
        }]
})
export class CoreModule {

    constructor(private i18n: NzI18nService, @Optional() @SkipSelf() parentModule?: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule')
        this.i18n.setLocale(zh_CN);
    }
}
