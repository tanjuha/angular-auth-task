import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';


const routes: Routes = [
    {path: '', redirectTo: 'join', pathMatch: 'full'},
    {path: 'join', component: AuthComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {

}
