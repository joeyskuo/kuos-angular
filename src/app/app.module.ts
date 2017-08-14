import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsSectionComponent } from './resume/projects-section/projects-section.component';
import { AdditionalSkillsSectionComponent } from './resume/additional-skills-section/additional-skills-section.component';
import { ExperienceSectionComponent } from './resume/experience-section/experience-section.component';
import { GitGlassComponent } from './git-glass/git-glass.component';
import { SkillsSectionComponent } from './resume/skills-section/skills-section.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectDetailComponent } from './resume/projects-section/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeComponent,
    ProjectsSectionComponent,
    AdditionalSkillsSectionComponent,
    ExperienceSectionComponent,
    GitGlassComponent,
    SkillsSectionComponent,
    FooterComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
