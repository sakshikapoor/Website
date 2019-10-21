import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../app/about/about.component';
import { AddContentComponent } from '../app/add-content/add-content.component';
import { BuildComponent} from '../app/build/build.component';
import { MainpageComponent } from '../app/mainpage/mainpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'build', component: BuildComponent },
  { path: 'addContent', component: AddContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
