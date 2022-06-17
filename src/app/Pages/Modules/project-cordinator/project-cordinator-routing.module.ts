import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPoComponent } from 'src/app/StoreManager/add-po/add-po.component';
import { AddPoDashComponent } from '../../ProjectCordinator/add-po-dash/add-po-dash.component';
import { AddProjectIndentComponent } from '../../ProjectCordinator/add-project-indent/add-project-indent.component';
import { ApproveProjectComponent } from '../../ProjectCordinator/approve-project/approve-project.component';
import { InventoryComponent } from '../../ProjectCordinator/inventory/inventory.component';
import { ProjectCordinatorComponent } from './project-cordinator.component';
import { ReturnItemsComponent } from '../../ProjectCordinator/return-items/return-items.component';
import { ReturnItemsReportComponent } from '../../ProjectCordinator/return-items-report/return-items-report.component';
import { ExpiringinventoryComponent } from 'src/app/StoreManager/Inventory/expiringinventory/expiringinventory.component';
import { ExpiredInventoryComponent } from 'src/app/StoreManager/Inventory/expired-inventory/expired-inventory.component';
import { UnUsedinventoryComponent } from 'src/app/StoreManager/Inventory/un-usedinventory/un-usedinventory.component';
import { SellOffInventoryComponent } from 'src/app/StoreManager/Inventory/sell-off-inventory/sell-off-inventory.component';
import { ObseletaedInventoryComponent } from 'src/app/StoreManager/Inventory/obseletaed-inventory/obseletaed-inventory.component';
import { ClosedPOComponent } from 'src/app/StoreManager/PO/closed-po/closed-po.component';
import { ProjectIssuVoucherComponent } from 'src/app/StoreManager/Cosumables/project-issu-voucher/project-issu-voucher.component';

const routes: Routes = [
  { path: '', component: ProjectCordinatorComponent },
  { path: 'AddProjectIndent', component: AddProjectIndentComponent },
  { path: 'ApproveProject', component: ApproveProjectComponent },
  { path: 'AddPo', component: AddPoComponent },
  { path: 'AddPoDash', component: AddPoDashComponent },
  { path: 'Inventory', component: InventoryComponent },
  { path: 'ReturnItems', component: ReturnItemsComponent },
  { path: 'ReturnItemsReport', component: ReturnItemsReportComponent },

  { path: 'Expiringinventory', component: ExpiringinventoryComponent },
  { path: 'ExpiredInventory', component: ExpiredInventoryComponent },
  { path: 'UnUsedinventory', component: UnUsedinventoryComponent },
  { path: 'SellOffInventory', component: SellOffInventoryComponent },
  { path: 'ObseletaedInventory', component: ObseletaedInventoryComponent },
  { path: 'ClosedPO', component: ClosedPOComponent },
  { path: 'ProjectIssuVoucher', component: ProjectIssuVoucherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCordinatorRoutingModule { }
