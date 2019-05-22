import "./SeasonDisplay.css";
import React from "react";

/*
const seasonConfig = {
	summer: {
		text: "Let's hit the beach",
		iconName: "sun"
	},
	winter: {
		text: "Burr, it's chilly",
		iconName: "snowflake"
	}
};
*/
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "Summer" : "Winter";
	} else {
		return lat > 0 ? "Winter" : "Summer";
	}
};

const SeasonDisplay = props => {
	const season = getSeason(props.lat, new Date().getMonth());
	const icon = season === "Winter" ? "snowflake" : "sun";

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${icon} icon`} />
			<h1>
				{season === "Winter" ? "Burr, it is chilly" : "Lets hit the beach!"}
			</h1>
			<i className={`icon-right massive ${icon} icon`} />
		</div>
	);
};

export default SeasonDisplay;
