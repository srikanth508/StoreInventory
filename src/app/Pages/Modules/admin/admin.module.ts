import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
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
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    AdminComponent,
    CategoryMasterComponent,
    CategoryDashboardComponent,
    SubCategoryMasterComponent,
    SubCategoryDashboardComponent,
    ItemDashboardComponent,
    ItemMasterComponent,
    VendorMasterComponent,
    VendorDashboardComponent,
    ProjectCreationMasterComponent,
    ProjectCreationDashboardComponent,
    AuthorizationMasterComponent,
    AuthorizationDashboardComponent,
    VendorLoginDashboardComponent,
    VendorDetailsComponent,
    AuthorizationLoginDashboardComponent,
    AuthorizationDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxDropzoneModule
  ]
})
export class AdminModule { }
