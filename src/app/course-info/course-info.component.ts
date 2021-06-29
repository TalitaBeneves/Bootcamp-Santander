import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseListService } from './../course-list/course-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course-list/course';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  course: Course;


  constructor(private activatedRouter: ActivatedRoute,
              private courseService: CourseListService) { }

  ngOnInit(): void {
     this.courseService.retrieveById(+this.activatedRouter.snapshot.paramMap.get('id')).subscribe({
       next: course => this.course = course,
       error: err => console.log('Error', err)
     });
  }

  Save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Saved with success', course),
      error: err => console.log('Error', err)
    });
  }

}
