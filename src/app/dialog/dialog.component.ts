import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  selects: IOption[] = [
    {value: '1',
     label: 'One'},
    {value: '2',
      label: 'Two'},
    {value: '3',
      label: 'Three fdgsdgfsdg'},
    {value: '4',
      label: 'Four sdgdgdgf'},
    {value: '5',
      label: 'Five dgsdgsgf'},
    {value: '6',
      label: 'Six'}
  ];

  constructor(public modalRef: BsModalRef) {}

  onClose(): boolean {
    return false;
  }
}
