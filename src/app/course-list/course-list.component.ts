import { CourseListService } from './course-list.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  courses: Course[] = [];

  _filterBy: string;

  constructor(private courseService: CourseListService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error: err => console.log('Error', err)
    })
  }

  deleteById(courseId): void{
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Delete with success');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    })
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this.courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }
}
