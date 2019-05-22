import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
	state = { lat: null, errorMessage: "" };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			error => this.setState({ errorMessage: error.message })
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div> Error: {this.state.errorMessage}</div>;
		} else if (this.state.lat) {
			return (
				<div className="container">
					<SeasonDisplay lat={this.state.lat} />
				</div>
			);
		} else {
			return (
				<div>
					<Spinner />
				</div>
			);
		}
	}

	render() {
		return <div className="border red">{this.renderContent}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
