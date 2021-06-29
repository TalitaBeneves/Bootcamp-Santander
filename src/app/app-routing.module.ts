import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';

import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  { path: 'courses', component: CourseListComponent},
  { path: 'courses/info/:id', component: CourseInfoComponent},
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: '**', component: Error404Component}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



