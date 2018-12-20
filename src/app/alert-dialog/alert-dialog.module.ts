import {NgModule} from '@angular/core';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AlertDialogComponent} from './alert-dialog.component';
import {AlertDialogService} from './alert-dialog.service';

@NgModule({
  declarations: [
    AlertDialogComponent
  ],
  imports: [
    ModalModule.forRoot()
  ],
  exports: [
    AlertDialogComponent
  ],
  entryComponents: [
    AlertDialogComponent
  ],
  providers: [
    AlertDialogService
  ]
})
export class AlertDialogModule {}
