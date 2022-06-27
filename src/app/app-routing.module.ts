import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./core/components/layout/layout.component";
import {AuthComponent} from "./pages/auth/auth.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/welcome'},
    {
        path: '',
        component: LayoutComponent,
        // canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
        children: [
            {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
        ],

    },
    {
        path: 'auth',
        component: AuthComponent,
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
    },
    // Fallback when no prior routes is matched
    { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
