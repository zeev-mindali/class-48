import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appMarkAttribute]',
    standalone: true
})
export class MarkAttributeDirective implements OnInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.background="blue";
        this.elementRef.nativeElement.style.color="red";
    }

}
