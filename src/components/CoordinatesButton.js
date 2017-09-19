import React from 'react';

class CoordinatesButton extends React.Component {
	constructor(props) {
		super()
	}

	onReceiveCoordinates = (e) => {
		this.props.onReceiveCoordinates([e.clientX, e.clientY])
	}

	render() {
		return (
			<button onClick={this.onReceiveCoordinates}>Coordinates</button>
		);
	}
}

export default CoordinatesButton;