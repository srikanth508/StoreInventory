import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCordinatorRoutingModule } from './project-cordinator-routing.module';
import { ProjectCordinatorComponent } from './project-cordinator.component';
import { AddProjectIndentComponent } from '../../ProjectCordinator/add-project-indent/add-project-indent.component';
import { ApproveProjectComponent } from '../../ProjectCordinator/approve-project/approve-project.component';
import { AddPoComponent } from 'src/app/StoreManager/add-po/add-po.component';
import { AddPoDashComponent } from '../../ProjectCordinator/add-po-dash/add-po-dash.component';
import { InventoryComponent } from '../../ProjectCordinator/inventory/inventory.component';
import { ReturnItemsComponent } from '../../ProjectCordinator/return-items/return-items.component';
import { ReturnItemsReportComponent } from '../../ProjectCordinator/return-items-report/return-items-report.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ExpiringinventoryComponent } from 'src/app/StoreManager/Inventory/expiringinventory/expiringinventory.component';
import { ExpiredInventoryComponent } from 'src/app/StoreManager/Inventory/expired-inventory/expired-inventory.component';
import { UnUsedinventoryComponent } from 'src/app/StoreManager/Inventory/un-usedinventory/un-usedinventory.component';
import { SellOffInventoryComponent } from 'src/app/StoreManager/Inventory/sell-off-inventory/sell-off-inventory.component';
import { ObseletaedInventoryComponent } from 'src/app/StoreManager/Inventory/obseletaed-inventory/obseletaed-inventory.component';
import { ClosedPOComponent } from 'src/app/StoreManager/PO/closed-po/closed-po.component';
import { ProjectIssuVoucherComponent } from 'src/app/StoreManager/Cosumables/project-issu-voucher/project-issu-voucher.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ProjectCordinatorComponent,
    AddProjectIndentComponent,
    ApproveProjectComponent,
    AddPoComponent,
    AddPoDashComponent,
    InventoryComponent,
    ReturnItemsComponent,
    ReturnItemsReportComponent,
    ExpiringinventoryComponent,
    ExpiredInventoryComponent,
    UnUsedinventoryComponent,
    SellOffInventoryComponent,
    ObseletaedInventoryComponent,
    ClosedPOComponent,
    ProjectIssuVoucherComponent,
  ],
  imports: [
    CommonModule,
    ProjectCordinatorRoutingModule,
    NgxDropzoneModule,
    SharedModule
  
  ]
})
export class ProjectCordinatorModule { }
