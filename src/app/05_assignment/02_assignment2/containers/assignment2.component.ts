import { Component } from '@angular/core';
imports:[CommonModule]
import { CommonModule } from '@angular/common';
import { Todo, AssignmentComponent } from './../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {

  
  selectedRow:Number
    
  
  mylist=new AssignmentComponent
  todos:Todo[]=this.mylist.todos
  getClickedRow :Function = function(index){
    this.selectedRow = index; }
  
}
