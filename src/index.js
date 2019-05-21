import React from "react";
import ReactDOM from "react-dom";
//import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, long: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //everytime I want to update a state, I need to call setState!!!!!!
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div> Error: {this.state.errorMessage}</div>;
    } else if (this.state.lat && this.state.long) {
      return (
        <div className="container">
          <div> Latitude: {this.state.lat} </div>
          <div> Longitude: {this.state.long} </div>
        </div>
      );
    } else {
      return (
        <div>
          Loading your location. Please, consider authorize the request on your
          browser.{" "}
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
