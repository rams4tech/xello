import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TooltipComponentComponent } from './tooltip-component/tooltip-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isDialogOpen = false;
  constructor(public dialog: MatDialog) {
  }
  openDialog(tooltip): void {
    const dialogRef = this.dialog.open(TooltipComponentComponent, {
      width: '250px',
      position: {top: '0px', left: '40%'},
      data: { name: tooltip }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
