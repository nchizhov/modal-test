import {NgModule} from '@angular/core';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ConfirmDialogComponent} from './confirm-dialog.component';
import {ConfirmDialogService} from './confirm-dialog.service';

@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    ModalModule.forRoot()
  ],
  exports: [
    ConfirmDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [
    ConfirmDialogService
  ]
})
export class ConfirmDialogModule {}
