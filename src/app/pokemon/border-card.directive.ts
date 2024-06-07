import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[pkmnBorderCard]",
    standalone: true,
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultHeigth: number = 180;

  constructor(private el: ElementRef) {
    this.setHeigth(180);
    this.setBorder("#f5f5f5");
  }

  @Input("pkmnBorderCard") borderColor: string | undefined; // alias
  //@Input() pkmnBorderCard: string; // sans alias

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeigth(heigth: number) {
    this.el.nativeElement.style.heigth = this.defaultHeigth;
  }

  setBorder(color: string) {
    let border = "solid 4px" + color;
    this.el.nativeElement.style.border = border;
  }
}
