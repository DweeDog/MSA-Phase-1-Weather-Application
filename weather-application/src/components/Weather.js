import React from "react";

class Weather extends React.Component {
    render() {
        return (
            //only displays the weather if the button is pressed
             <div>

            
            { this.props.city && this.props.country &&  <p> Location:  {this.props.city}, {this.props.country} </p>}
            { this.props.city && this.props.country &&  <p>Temperature: {this.props.temperature}</p> }
            { this.props.city && this.props.country &&  <p> Conditions: {this.props.description}</p>}
            { this.props.error && <p> { this.props.error }</p>}


             </div>
        );
    }
}

export default Weather;