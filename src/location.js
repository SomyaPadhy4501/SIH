import react from "react";

class App extends React.Component {
constructor (props) {
    super(props);
    this.state = {
        latitude: null,
        longitude: null,
        userAddress: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.getLocation = this.getCoordinates.bind(this);
}
getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCoordinates);

    }
    else {
        alert("GeoLocation not supported by this device ");
    }
}

getCoordinates(position) {
   
    this.setState({
        latitude : position.coords.latitude,
        longitude: position.coords.longitude
    })
}
render(){
    return(
        <><button onClick={this.getLocation}>getCoordinates</button><><><p>Latitude: (this.state.latitude)</p><p>Longitude: (this.state.longitude)</p></><p>Address : (this.state.userAddress)</p></></>
    )
}
}