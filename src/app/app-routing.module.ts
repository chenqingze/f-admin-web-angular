import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./core/components/layout/layout.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/welcome'},
    {
        path: '',
        component: LayoutComponent,
        // canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
        children: [
            {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
        ],

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
