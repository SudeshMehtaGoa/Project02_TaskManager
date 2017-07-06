/* Mouse over anywhere on Row and it changes color of Task Name and Task status */
import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRowHeighlighter]'
})
export class RowHeighlighterDirective {

  constructor(private el: ElementRef) { }

  /* read task completion date from "tr" tag of table */
  @Input() taskCompletionDate:String;
  
  tcd_string :String;
  tcd_number :number;
  today_number:number; 
    
  @HostListener('mouseenter', ['$event'])
  OnMouseEnter(event: any) {
    this.tcd_string = new String(this.taskCompletionDate);
    this.tcd_string = this.tcd_string.replace("-","");
    this.tcd_string = this.tcd_string.replace("-","");
    this.tcd_number = +(this.tcd_string);

    this.today_number = new Date().getFullYear()*100;
    this.today_number = this.today_number + (new Date().getMonth()+1);
    this.today_number = this.today_number * 100;
    this.today_number = this.today_number + (new Date().getDate());
    
    if(this.tcd_number==this.today_number){
        this.highlight('Yellow');
     }
     else if(this.tcd_number>this.today_number){
        this.highlight('Green');
     }
     else if(this.tcd_number<this.today_number){
        this.highlight('Red');
     }
     else
     {
        this.highlight('Grey');
     }
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.highlight(null);
  }

/* On Row mouseover it checks the task completion date and changes the 
   backgroundcolor of task name and task status */
  private highlight(color: string) {
     this.el.nativeElement.cells[1].style.backgroundColor = color;
     this.el.nativeElement.cells[2].style.backgroundColor = color;
  }
}
