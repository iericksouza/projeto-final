import { AlunoService } from '../aluno.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunosFormComponent implements OnInit {
  formGroupStudent: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;
  courseOptions: string[] = ['Análise e desenvolvimento de Sistemas', 'Gestão Empresarial', 'Design de Interiores', 'Meio Ambiente'];
  semesterOptions: string[] = ['1º Semestre', '2º Semestre', '3º Semestre', '4º Semestre', '5º Semestre', '6º Semestre', '7º Semestre', '8º Semestre', '9º Semestre', '10º Semestre'];
  constructor(private formBuilder: FormBuilder,
    private AlunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.formGroupStudent = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      data: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      course: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      status: [false]
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getStudentbyId(id);
  }
  getStudentbyId(id: number) {
    this.AlunoService.getStudent(id).subscribe({
      next: data => {
        this.formGroupStudent.setValue(data);
        this.isEditing = true;
      }
    })
  }

  save() {
    this.submitted = true;
    if (this.formGroupStudent.valid) {
      if (this.isEditing) {
        this.AlunoService.update(this.formGroupStudent.value).subscribe({
          next: () => {
            this.router.navigate(['student']);
          }
        })
      }
      else {
        this.AlunoService.save(this.formGroupStudent.value).subscribe({
          next: () => {
            this.router.navigate(['student']);
          }
        })
      }
    }
  }
  cancel() {
    this.router.navigate(['student']);
  }

  get name(): any {
    return this.formGroupStudent.get("name");
  }
  get email(): any {
    return this.formGroupStudent.get("email");
  }
  get data(): any {
    return this.formGroupStudent.get("data");
  }
  get phone(): any {
    return this.formGroupStudent.get("phone");
  }
}
