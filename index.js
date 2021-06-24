const { Plugin } = require("powercord/entities");
const spotify = require("./mods/spotify/premfree");

const getModule = require("powercord/webpack");
const { inject, uninject } = require("powercord/injector");

module.exports = class Strife extends Plugin {
	startPlugin() {
		spotify.executor();
	}
};
