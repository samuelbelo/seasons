import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { lat: null }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {

                //everytime I want to update a state, I need to call setState!!!!!!
                this.setState({ lat: position.coords.latitude})
                //remember this!!!! setState!!!!!

                // I will never make anything like the follow:
                //>>>>>>>    this.state.lat = position.coords.latitude   <<<<<<<
                //this is kinda AWFUL, TERRIBLE. Don't ever assign a state directly on the state.
                
            },
            (error) => console.log(error)
    
        );  
    }
    
    
    render() {

        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root')); 