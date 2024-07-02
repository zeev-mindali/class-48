import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appOutOfBounds]',
    standalone: true
})
export class OutOfBoundsDirective implements OnInit {

    constructor(private elementRef:ElementRef) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.background="red";
        this.elementRef.nativeElement.style.color="white";
    }

}
  