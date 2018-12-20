import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [
    `.btn { width: 100px; }`
  ]
})
export class ConfirmDialogComponent {
  message: string;

  confirmed = new Subject<boolean>();

  constructor(public modalRef: BsModalRef) {}

  onClose(confirmed: boolean) {
    this.confirmed.next(confirmed);
    this.modalRef.hide();
  }
}
