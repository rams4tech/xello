import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tooltip-component',
  templateUrl: './tooltip-component.component.html',
  styleUrls: ['./tooltip-component.component.css']
})
export class TooltipComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TooltipComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
