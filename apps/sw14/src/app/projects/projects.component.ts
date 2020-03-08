import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, ProjectsService } from '@bb/core-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bb-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Project[] = [
    {id: '1', title: 'Proj One', details: 'Some details', importanceLevel: 5}
  ];
  project: Project;
  selectedProject: Project;
  formGroup: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  select(project: Project) {
    this.selectedProject = project;
    this.formGroup.patchValue(project);
  }

  delete(project: Project) {
console.log('Deleting ...')
  }

  save(project: Project) {
    console.log('Saving ...')

  }

  reset() {
    console.log('Resetting ...')

  }




  initForm() {
    this.formGroup = this.formBuilder.group({
      id: [null],
      title: ['', Validators.compose([
        Validators.required
      ])],
      details: ['', Validators.compose([
        Validators.required
      ])],
      importanceLevel: [0]
    })
  }
}
