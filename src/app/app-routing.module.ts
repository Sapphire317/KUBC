import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SangwonComponent } from './sangwon/sangwon.component';
import { JaehyungComponent } from './jaehyung/jaehyung.component';
import { JinbeomComponent } from './jinbeom/jinbeom.component';

const routes: Routes = [
  {
    path : 'sw',
    component: SangwonComponent
  },
  {
    path : 'jh',
    component: JaehyungComponent
  },
  {
    path : 'jb',
    component: JinbeomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
