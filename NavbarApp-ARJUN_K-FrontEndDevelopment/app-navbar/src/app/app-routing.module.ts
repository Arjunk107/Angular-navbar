import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: AboutusComponent,
    path: 'aboutus'
  },
  {
    component: FeaturesComponent,
    path: 'feature'
  },
  {
    component: ContactComponent,
    path: 'contact'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
