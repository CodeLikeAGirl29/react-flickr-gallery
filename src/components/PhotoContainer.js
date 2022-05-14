import React, { Component } from "react";
import Photos from "./Photos";
import NotFound from "./NotFound";

class PhotoContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
		};
	}

	componentDidMount() {
		let query = this.props.match.params.input;
		if (query) {
			this.props.handleSearch(query);
		}
	}

	componentDidUpdate() {
		window.onpopstate = (e) => {
			setTimeout(() => {
				let query = this.props.match.params.input;
				if (query) {
					this.props.handleSearch(query);
				}
			}, 500);
		};
	}

	render() {
		if (this.props.data.length === 0 && this.props.loading === false) {
			return (
				<div className='photo-container'>
					<h2>Results</h2>
					<NotFound />
				</div>
			);
		} else {
			return (
				<div className='photo-container'>
					<h2>Results</h2>
					<ul>
						{this.props.data.map((photo) => {
							return <Photos key={photo.id} photo={photo} />;
						})}
					</ul>
				</div>
			);
		}
	}
}

export default PhotoContainer;
