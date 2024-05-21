import { Component } from "@angular/core";

@Component({
	selector: "app-taskbar",
	standalone: true,
	imports: [],
	styleUrl: "./taskbar.component.scss",
	template: `
  <div class="start"><img src="/assets/win2k-taskbar-start.png" /></div>
  <div class="tray"><img src="/assets/win2k-taskbar-tray.png" /></div>`,
})
export class TaskbarComponent {}
