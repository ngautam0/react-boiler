import React, { Component } from 'react';


class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}
	componentDidCatch(error, info) {
		this.setState({
			hasError: true
		});
	}

	// replace this error message with custom UI later
	render() {
		if(this.state.hasError) {
			return (

				<ul>
          Duh! Some Error :( .... No Worries.. Caught by react error ErrorBoundary
        </ul>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
