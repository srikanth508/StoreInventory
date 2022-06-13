import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoryMasterComponent } from './adminPages/category-master/category-master.component';
import { CategoryDashboardComponent } from './adminPages/category-dashboard/category-dashboard.component';
import { SubCategoryMasterComponent } from './adminPages/sub-category-master/sub-category-master.component';
import { SubCategoryDashboardComponent } from './adminPages/sub-category-dashboard/sub-category-dashboard.component';
import { ItemDashboardComponent } from './adminPages/item-dashboard/item-dashboard.component';
import { ItemMasterComponent } from './adminPages/item-master/item-master.component';
import { VendorMasterComponent } from './adminPages/vendor-master/vendor-master.component';
import { VendorDashboardComponent } from './adminPages/vendor-dashboard/vendor-dashboard.component';
import { ProjectCreationMasterComponent } from './adminPages/project-creation-master/project-creation-master.component';
import { ProjectCreationDashboardComponent } from './adminPages/project-creation-dashboard/project-creation-dashboard.component';
import { AuthorizationMasterComponent } from './adminPages/authorization-master/authorization-master.component';
import { AuthorizationDashboardComponent } from './adminPages/authorization-dashboard/authorization-dashboard.component';
import { VendorDetailsComponent } from 'src/app/vendor-details/vendor-details.component';
import { AuthorizationLoginDashboardComponent } from 'src/app/authorization-login-dashboard/authorization-login-dashboard.component';
import { AuthorizationDetailsComponent } from 'src/app/authorization-details/authorization-details.component';
import { VendorLoginDashboardComponent } from 'src/app/vendor-login-dashboard/vendor-login-dashboard.component';

const routes: Routes = [
  { path: '', component: CategoryDashboardComponent },
  { path: 'CategoryMaster', component: CategoryMasterComponent },
  { path: 'CategoryDashboard', component: CategoryDashboardComponent },
  { path: 'SubCategoryMaster', component: SubCategoryMasterComponent },
  { path: 'SubCategoryDashboard', component: SubCategoryDashboardComponent },
  { path: 'ItemDashboard', component: ItemDashboardComponent },
  { path: 'ItemMaster', component: ItemMasterComponent },
  { path: 'VendorMaster', component: VendorMasterComponent },
  { path: 'VendorDashboard', component: VendorDashboardComponent },
  { path: 'ProjectCreationMaster', component: ProjectCreationMasterComponent },
  { path: 'ProjectCreationDashboard', component: ProjectCreationDashboardComponent },
  { path: 'AuthorizationMaster', component: AuthorizationMasterComponent },
  { path: 'AuthorizationDashboard', component: AuthorizationDashboardComponent },
  { path: 'VendorDetails', component: VendorDetailsComponent },
  { path: 'AuthorizationLoginDashboard', component: AuthorizationLoginDashboardComponent },
  { path: 'AuthorizationDetails', component: AuthorizationDetailsComponent },
  { path: 'VendorLoginDashboard', component: VendorLoginDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
