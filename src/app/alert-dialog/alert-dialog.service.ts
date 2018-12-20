import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AlertDialogComponent} from './alert-dialog.component';
import {Injectable} from '@angular/core';

@Injectable()
export class AlertDialogService {
  constructor(private modalService: BsModalService) {}

  show(message: string, wait: boolean = false) {
    const modal: BsModalRef = this.modalService.show(AlertDialogComponent, {
      initialState: {
        message: message,
        wait: wait
      },
      backdrop: 'static',
      keyboard: false
    });
    return (<AlertDialogComponent>modal.content).waited;
  }
}
