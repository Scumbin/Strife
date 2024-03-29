module.exports = {
	command: "google",
	description:
		"send a google link (LMGTFY but you want to keep your friendship)",
	usage: "{c} [thing to search]",
	category: "Google",
	executor(args) {
		let result = encodeURIComponent(args.join(" "))
			.replace(/'/g, "%27")
			.replace(/"/g, "%22");
		return {
			send: true,
			result: `<https://google.com/search?q=${result}>`,
		};
	},
};
