import { CommonModule } from "@angular/common";
import { Component, Directive, Input, TemplateRef, ViewContainerRef, inject } from "@angular/core";

const takeANap = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

@Directive({
  selector: '[delay]',
  standalone: true,
})
export class Delay {
  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainer = inject(ViewContainerRef);

  @Input({ required: true, alias: 'delay' })
  delayMs: number = 0;

  async ngOnInit() {
    await takeANap(this.delayMs);

    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, Delay],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css"
})
export class HomeComponent {

}
