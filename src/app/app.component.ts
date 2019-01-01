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
           {id: 3,
            data: 'INNER',
            items: [{
              id: 4,
              data: 'INSIDE TEST 1'
            }, {
              id: 5,
              data: 'INSIDE TEST 2'
            }]},
           {id: 2,
            data: 'TEST2'}];

  formattedItems: number[];

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
  }

  onInnerDrop(item, dropResult: IDropResult) {
    const newItems = [...this.items];
    const index = newItems.indexOf(item);
    newItems[index].items = applyDrag(newItems[index].items, dropResult);
    this.items = newItems;
    this.formatItems();
  }

  formatItems() {
    this.formattedItems = [];
    this.items.every(item => {
      if (item.hasOwnProperty('items')) {
        item.items.every(subitem => !!this.formattedItems.push(subitem.id));
        return true;
      }
      return !!this.formattedItems.push(item.id);
    });
    console.log(this.formattedItems);
  }
}
