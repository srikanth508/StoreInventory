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
    AuthorizationDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
