import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Admin', loadChildren: () => import('./Pages/Modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'projectCordinator', loadChildren: () => import('./Pages/Modules/project-cordinator/project-cordinator.module').then(m => m.ProjectCordinatorModule) },
  { path: 'ProjectManager', loadChildren: () => import('./Pages/Modules/projectmanager/projectmanager.module').then(m => m.ProjectmanagerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
