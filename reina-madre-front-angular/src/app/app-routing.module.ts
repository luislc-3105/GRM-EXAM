import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { VisitsModule } from './modules/visits/visits.module';

const routes: Routes = [
  {
    path : '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'visits/list', pathMatch: 'prefix' },
			{
				path: 'visits',
				loadChildren: () => import('./modules/visits/visits.module').then((m): typeof VisitsModule => m.VisitsModule),
			}
    ]
  },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
