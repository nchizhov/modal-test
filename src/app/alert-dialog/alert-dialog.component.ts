import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styles: [
    `.btn { width: 100px; }`
  ]
})
export class AlertDialogComponent {
  message: string;
  wait = false;

  waited = new Subject<boolean>();

  constructor(public modalRef: BsModalRef) {}

  onClose() {
    if (this.wait) {
      this.waited.next(true);
    }
    this.modalRef.hide();
  }
}
