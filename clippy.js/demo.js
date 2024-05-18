import { load } from "../dist/index.js";

class Clippy {
	_path = null;
	_agent = null;
	agentName = null;

	availableAgents = [
		"Bonzi",
		"Clippy",
		"F1",
		"Genie",
		"Genius",
		"Links",
		"Merlin",
		"Peedy",
		"Rocky",
		"Rover",
	];

	talks = [
		"how can i help you?",
		"nice day!",
		"at your service",
		"it looks like you're attempting to train a Large Language Model. Would you like some help with that?",
		"it looks like you're writing an e-mail. Would you like some help with that?",
		"it looks like you're writing unsubstantiated nonsense. Would you like to turn on all caps?",
	];

	async nextAgent(agent) {
		const idx = Math.floor(Math.random() * this.availableAgents.length);
		this.agentName = agent || this.availableAgents[idx];

		try {
			this._agent = await load(this.agentName, "/dist/agents");
			this.addAnimationButtons();
			await this._agent.show();
			await this.speak();
		} catch (err) {
			console.error(err);
		}
	}

	addAnimationButtons() {
		const elContainer = document.getElementById("animations");
		if (elContainer) {
			elContainer.innerHTML = "";
			for (const animation of this._agent.animations()) {
				const button = this.getAnimationButton(animation);
				elContainer.appendChild(button);
			}
		}
	}

	getAnimationButton(animation) {
		const button = document.createElement("button");
		button.setAttribute("type", "button");
		button.innerHTML = animation;
		button.addEventListener("click", () => this._agent.play(animation));
		return button;
	}

	async speak() {
		const idx = Math.floor(Math.random() * this.talks.length);
		await this._agent.speak(`I am ${this.agentName}, ${this.talks[idx]}`);
	}

	addAgentsButtons() {
		const elContainer = document.getElementById("agents");
		if (elContainer) {
			for (const agent of this.availableAgents) {
				const button = this.getAgentButton(agent);
				elContainer.appendChild(button);
			}
		}
	}

	getAgentButton(agent) {
		const button = document.createElement("button");
		button.setAttribute("type", "button");
		button.innerHTML = agent;
		button.addEventListener("click", () => this.selectAgent(agent));
		return button;
	}

	async selectAgent(agent) {
		if (this.agentName !== null) {
			this.agentName = null;
			await this._agent?.destroy();
			this.agentName = agent;
			this.nextAgent(agent);
		}
	}
}

window.onload = () => {
	const clippy = new Clippy();
	clippy.addAgentsButtons();

	const startButton = document.getElementById("start-button");
	const demoArea = document.getElementById("demo-area");
	startButton.addEventListener("click", () => {
		demoArea.style.visibility = "visible";
		demoArea.style.position = "static";
		startButton.style.display = "none";
		clippy.nextAgent("Clippy");
	});

	document.getElementById("agent-speak").addEventListener("click", () => {
		clippy.speak();
	});
};
