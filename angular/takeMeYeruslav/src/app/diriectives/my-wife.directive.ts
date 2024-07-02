import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyWife]',
  standalone: true
})
export class MyWifeDirective implements OnInit{

  constructor(private elementRef:ElementRef) { }
    ngOnInit(): void {
        this.elementRef.nativeElement.style.background="green";
        this.elementRef.nativeElement.style.color="white";
    }

  

}
