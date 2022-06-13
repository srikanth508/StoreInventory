import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectIndentComponent } from '../../ProjectCordinator/add-project-indent/add-project-indent.component';
import { ProjectCordinatorComponent } from './project-cordinator.component';


const routes: Routes = [
  { path: '', component: ProjectCordinatorComponent },
  { path: 'AddProjectIndent', component: AddProjectIndentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCordinatorRoutingModule { }
