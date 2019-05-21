import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'


const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (error) => console.log(error)

    );

    return <div>Olá mundo!</div>
}

ReactDOM.render(<App />, document.querySelector('#root')); 