import {Component} from '@angular/core';
import {AlertDialogService} from './alert-dialog/alert-dialog.service';
import {ConfirmDialogService} from './confirm-dialog/confirm-dialog.service';
import {BsModalService, ModalOptions} from 'ngx-bootstrap';
import {DialogComponent} from './dialog/dialog.component';
import {IDropResult} from 'ngx-smooth-dnd';
import {applyDrag} from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private dialogConfig: ModalOptions = {
    backdrop: 'static',
    keyboard: true
  };

  items = [{id: 1,
            data: 'TEST1'},
           {id: 2,
            data: 'TEST2'}];

  constructor(private alertDialogService: AlertDialogService,
              private confirmDialogService: ConfirmDialogService,
              private modalService: BsModalService) {}

  onClick() {
    this.confirmDialogService.show('Вы точно видите это сообщение?').subscribe(
      (confirmed: boolean) => {
        console.log('Confirmed', confirmed);
      }
    );
  }

  onClick2() {
    this.alertDialogService.show('Привет мир');
  }

  onClick3() {
    this.modalService.show(DialogComponent, this.dialogConfig);
  }

  onDrop(dropResult: IDropResult) {
    this.items = applyDrag(this.items, dropResult);
    console.log(this.items);
    //console.log(applyDrag(this.items, dropResult));
  }
}
