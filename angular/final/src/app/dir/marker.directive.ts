import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appMarker]',
    standalone: true
})
export class MarkerDirective implements OnInit {
    originalTxt ="";
    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        console.log("Yeruslav is in the house...");
        this.elementRef.nativeElement.style.background = "green";
        this.elementRef.nativeElement.style.color = "white";
    }

    @HostListener('mouseenter') mouseover() {
        this.elementRef.nativeElement.style.background = "red";
        let txt = this.elementRef.nativeElement.innerHTML;
        
        if (!txt.includes("marry")) {
            this.elementRef.nativeElement.innerHTML = "Gabriel going to marry " + txt;
            console.log(txt);
        }
    }

    @HostListener('mouseleave') mouseleave() {
        this.elementRef.nativeElement.style.background = "green";
        let txt = this.elementRef.nativeElement.innerHTML;
        this.elementRef.nativeElement.innerHTML = txt.replace("Gabriel going to marry ","");
    }
}
