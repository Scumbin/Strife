module.exports = {
	executor: (async) => {
		require("powercord/webpack").getModule(
			["isSpotifyPremium"],
			false
		).isSpotifyPremium = () => {
			console.log("Granted premium status");
			return true;
		};
	},
};
