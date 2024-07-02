import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appCenter]',
    standalone: true
})
export class CenterDirective implements OnInit {

    constructor(private elementRef:ElementRef) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.textAlign = "center";
    }

}
