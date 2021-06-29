import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from '../course-info/course-info.component';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from './../shared/component/pipe/app-pipe.module';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    StarModule,
    AppPipeModule
  ]
})
export class CourseModule {

}
