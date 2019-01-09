import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxSmoothDnDModule} from 'ngx-smooth-dnd';
import {AngularDraggableModule} from 'angular2-draggable';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AlertDialogModule} from './alert-dialog/alert-dialog.module';
import {ConfirmDialogModule} from './confirm-dialog/confirm-dialog.module';
import {DialogComponent} from './dialog/dialog.component';
import {DialogHeaderComponent} from './dialog-header/dialog-header.component';
import {SelectModule} from '@inok/ng-select';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {defineLocale} from 'ngx-bootstrap/chronos';
import {ruLocale} from 'ngx-bootstrap/locale';

defineLocale('ru', ruLocale);

@NgModule({
  declarations: [
    AppComponent,
    DialogHeaderComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule,
    AlertDialogModule,
    ConfirmDialogModule,
    NgxSmoothDnDModule,
    BsDatepickerModule.forRoot(),
    SelectModule
  ],
  providers: [],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
