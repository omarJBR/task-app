import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'records' },
  { path: 'records', loadChildren: () => import('./features/records/records.module').then((m) => m.RecordsModule) },
  { path: '**', redirectTo: 'records' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
