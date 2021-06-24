module.exports = {
	command: "google",
	description: "send a google link (LMGTFY but you want to keep your friendship)",
	usage: "{c} [thing to search]",
	executor: this.handleCommand.bind(this),
	handleCommand(args) {
		let result = encodeURIComponent(args)
			.replace(/'/g, "%27")
			.replace(/"/g, "%22");
		return {
			send: true,
			result: `<https://lmgtfy.com/?${result}>`,
		}
	}
}
