module.exports = {
	executor: (async) => {
		require("powercord/webpack").getModule(
			["isSpotifyPremium"],
			false
		).isSpotifyPremium = () => {
			return true;
		};
		console.log("if you're reading this it worked");
	},
};
