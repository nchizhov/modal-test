import {Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {DialogHeaderComponent} from '../dialog-header/dialog-header.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {

  constructor(public modalRef: BsModalRef) {}

  onClose(): boolean {
    return false;
  }
}
