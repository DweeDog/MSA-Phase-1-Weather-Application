import React from "react";
import Button from '@material-ui/core/Button';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <Button variant="contained" color="primary" type="submit">
                Get Weather
                </Button>
            </form>
        );
    }
}

export default Form;