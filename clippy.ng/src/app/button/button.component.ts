import { Component } from "@angular/core";

@Component({
	selector: "app-button",
	standalone: true,
	imports: [],
	styleUrl: "./button.component.scss",
	template: `<div class="outer">
  <div class="inner"><ng-content /></div>
</div>
`,
})
export class ButtonComponent {}
