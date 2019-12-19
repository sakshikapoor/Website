import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../app/about/about.component';
import { AddContentComponent } from '../app/add-content/add-content.component';
import { BuildComponent} from '../app/build/build.component';
import { MainpageComponent } from '../app/mainpage/mainpage.component';
import { EditComponent } from '../app/edit/edit.component';
import { LayoutComponent } from '../app/layout/layout.component';
import { LeftLayoutComponent } from '../app/left-layout/left-layout.component';
import { RightLayoutComponent } from '../app/right-layout/right-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'build', component: BuildComponent },
  { path: 'edit', component: EditComponent },
  { path: 'left-align', component: LeftLayoutComponent },
  { path: 'right-align', component: RightLayoutComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'addContent', component: AddContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
