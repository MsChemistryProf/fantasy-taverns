import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TavernsComponent } from './taverns.component';
import { AuthGuard } from '../common/auth/auth.guard';

const routes: Routes = [
    { path: 'taverns', component: TavernsComponent, canActivate: [AuthGuard] },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class TavernsRoutingModule {}

