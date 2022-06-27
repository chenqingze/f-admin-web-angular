import {NgModule, Optional, SkipSelf} from '@angular/core';
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

const interceptors = [
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true},
]

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
    providers: [...interceptors]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule')
    }
}
