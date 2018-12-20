import {Component, Input} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html'
})
export class DialogHeaderComponent {
  @Input() title: string;
  @Input() modalRef: BsModalRef;

  onDialogClose() {
    let allowClose = true;
    if (typeof this.modalRef.content.onClose === 'function') {
      allowClose = this.modalRef.content.onClose();
    }
    if (allowClose) {
      this.modalRef.hide();
    }
  }
}
