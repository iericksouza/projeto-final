import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfFormComponent } from './prof-form/prof-form.component';
import { ProfComponent } from './prof/prof.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoComponent } from './aluno/aluno.component';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfFormComponent,
    ProfComponent,
    AlunoFormComponent,
    AlunoComponent,
    HomeComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
