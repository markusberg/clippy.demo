import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TaskbarComponent } from "./taskbar/taskbar.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, TaskbarComponent],
	styleUrl: "./app.component.scss",
	template: `<div class="desktop">
		<router-outlet />
	</div>
	<app-taskbar />
	`,
})
export class AppComponent {
	title = "clippy.ng";
}
