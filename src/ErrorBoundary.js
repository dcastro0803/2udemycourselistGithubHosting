import React, { Component } from 'react';
// handle component failure 
class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	//try catch blog 
	componentDidCatch(error, info) {
		this.setState({hasError: true})
	}

	render(){
		if(this.state.hasError){
			return <h1>Sorry. The component can't be loaded </h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary;