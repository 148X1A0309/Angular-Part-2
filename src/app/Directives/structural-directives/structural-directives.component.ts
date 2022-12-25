import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
showDetails=false;
log=[];
  constructor() { }

  ngOnInit() {
  }
  OnToggleData(){
    this.showDetails=!this.showDetails
    // this.log.push(this.log.length+1);
    this.log.push(new Date());
    }
}