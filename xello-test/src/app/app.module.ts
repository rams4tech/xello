import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TooltipComponentComponent } from './tooltip-component/tooltip-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    AppComponent,
    TooltipComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
