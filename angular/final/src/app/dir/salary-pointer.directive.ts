import { Directive, ElementRef, OnInit ,HostListener,HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[appSalaryPointer]',
    standalone: true
})
export class SalaryPointerDirective implements OnInit {
    @HostBinding('style.background') txtBackground = "white";
    @HostBinding('style.color') txtColor = "red";
    @Input() bgColor = "white";

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.txtBackground = this.bgColor;    
    }

    @HostListener('mouseover') mouseover(){
        this.txtBackground='yellow';
        this.txtColor="green";    
    }

    @HostListener('mouseleave') mouseleave(){
        this.txtBackground="white";
        this.txtColor = "red";
    }

}
