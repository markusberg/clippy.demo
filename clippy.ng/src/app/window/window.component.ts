import { Component } from "@angular/core";
import { ButtonComponent } from "../button/button.component";

@Component({
	selector: "app-window",
	standalone: true,
	imports: [ButtonComponent],
	styleUrl: "./window.component.scss",
	template: `<div class="border">
  <div class="w2k-outset window">
    <div class="titlebar">
      <div class="title">
        <img src="/assets/w2k-titlebar.png" />
      </div>
      <div class="controls p-2">
        <app-button><i class="wi wi-minimize"></i></app-button>
        <app-button class="mr-2"><i class="wi wi-maximize"></i></app-button>
        <app-button><i class="wi wi-close"></i></app-button>
      </div>
    </div>
    <ng-content />
  </div>
</div>
`,
})
export class WindowComponent {}
