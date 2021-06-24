const { Plugin } = require("powercord/entities");

const getModule = require("powercord/webpack");
const { inject, uninject } = require("powercord/injector");

const social = require("./mods/social");

const Settings = require("./components/settings");

module.exports = class Strife extends Plugin {
	startPlugin() {
		powercord.api.settings.registerSettings("Strife", {
			category: this.entityID,
			label: "Strife",
			render: Settings,
		});

		// make spotify free work
		if (this.settings.get("premFree")) {
			const spotify = require("./mods/spotify/premfree");
			spotify.executor();
		}

		// make social work
		Object.values(social).forEach((cmd) =>
			powercord.api.commands.registerCommand(cmd)
		);
	}

	pluginWillUnload() {
		// powercord should handle unloading commands and settings, but we do the settings anyway.
		powercord.api.settings.unregisterSettings("Strife");
	}
};
