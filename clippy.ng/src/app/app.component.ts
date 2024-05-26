import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TaskbarComponent } from "./taskbar/taskbar.component";
import { WindowComponent } from "./window/window.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, TaskbarComponent, WindowComponent],
	styleUrl: "./app.component.scss",
	template: `<div class="desktop">
		<app-window></app-window>
		<router-outlet /></div><app-taskbar />`,
})
export class AppComponent {
	title = "clippy.ng";
}
