import { HomeComponent } from './pages/home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  {
    path: 'characters',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
