import React from 'react';

class DelayedButton extends React.Component {
	constructor(props) {
		super();
	}

	delayedButton = (e) => {
		e.persist();
		setTimeout(() => this.props.onDelayedClick(e),
		this.props.delay);
	}

	render() {
		return (
			<button onClick={this.delayedButton}>Button</button>
		);
	}
}


export default DelayedButton