import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPage1Component } from './user-page1/user-page1.component';
import { UserPage2Component } from './user-page2/user-page2.component';

const routes: Routes = [
  { path: 'page1', component: UserPage1Component },
  { path: 'page2', component: UserPage2Component },
  { path: '', redirectTo: '/page1', pathMatch: 'full' }, // Redirect to page1 by default
  { path: '**', redirectTo: '/page1' }, // Handle unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
