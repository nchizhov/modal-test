import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ConfirmDialogComponent} from './confirm-dialog.component';
import {Injectable} from '@angular/core';

@Injectable()
export class ConfirmDialogService {
  constructor(private modalService: BsModalService) {}

  show(message: string) {
    const modal: BsModalRef = this.modalService.show(ConfirmDialogComponent, {
      initialState: {
        message: message
      },
      backdrop: 'static',
      keyboard: false
    });
    return (<ConfirmDialogComponent>modal.content).confirmed;
  }
}
