const { Plugin } = require("powercord/entities");
const spotify = require("./mods/spotify/premfree");

const getModule = require("powercord/webpack");
const { inject, uninject } = require("powercord/injector");

const Settings = require("./components/settings");

module.exports = class Strife extends Plugin {
	startPlugin() {
		powercord.api.settings.registerSettings("Strife", {
			category: this.entityID,
			label: "Strife",
			render: Settings,
		});
		console.log(this.settings.get("premFree"));
		spotify.executor();
	}

	pluginWillUnload() {
		powercord.api.settings.unregisterSettings("Strife");
	}
};
