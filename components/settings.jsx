const { React } = require("powercord/webpack");
const { SwitchItem } = require("powercord/components/settings");

module.exports = class Settings extends React.Component {
	render() {
		const { getSetting, toggleSetting } = this.props;
		return (
			<div>
				<SwitchItem
					note={
						<span>
							This setting forces spotify premium for the spotify plugin.
							<b style={{ color: "rgb(240, 71, 71)" }}> WARNING:</b> This only
							works because spotify lets discord do this shit. It violates
							spotify TOS (Not like you care - given your using powercord ;)
						</span>
					}
					value={getSetting("premFree", false)}
					onChange={() => toggleSetting("premFree")}
				>
					Force spotify premium
				</SwitchItem>
			</div>
		);
	}
};
