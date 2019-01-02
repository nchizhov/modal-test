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
    SelectModule
  ],
  providers: [],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
