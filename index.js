const { Plugin } = require("powercord/entities");
const spotify = require("./mods/spotify/premfree");

const { Plugin } = require("powercord/entities");
const {
	getModule,
	React,
	constants: {
		Permissions: { SEND_MESSAGES },
	},
} = require("powercord/webpack");
const { inject, uninject } = require("powercord/injector");

class Strife extends Plugin {
	async startPlugin() {
		spotify.executor();
	}
}
