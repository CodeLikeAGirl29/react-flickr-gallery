import React, { Component } from "react";
import axios from "axios";
import apiKey from "./config";
import { HashRouter, Route, Switch } from "react-router-dom";

// components
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";

import Cookies from "js-cookie";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: Cookies.getJSON("searchQuery") || "ocean",
			photos: [],
			loading: true,
		};
	}

	componentDidMount() {
		let query = this.state.searchQuery;
		console.log(query);
		this.handleFetch(query);
	}

	handleFetch = (query) => {
		this.setState({
			loading: true,
		});
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&extras=url_o&format=json&nojsoncallback=1`
			)
			.then((res) => {
				this.setState({
					photos: res.data.photos.photo,
					loading: false,
				});
			})
			.catch((error) => {
				console.log("Error fetching and parsing data", error);
			});
	};

	render() {
		return (
			<HashRouter>
				<Header />
				<div className='container'>
					<div className='search-container'>
						<SearchForm handleSearch={this.handleFetch} />
					</div>
					<Nav fetchNav={this.handleFetch} />
					{this.state.loading ? (
						<p className='loading'>Loading content...</p>
					) : null}
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<PhotoContainer
									{...props}
									data={this.state.photos}
									loading={this.state.loading}
								/>
							)}
						/>
						<Route
							exact
							path='/cityscapes'
							render={(props) => (
								<PhotoContainer {...props} data={this.state.photos} />
							)}
						/>
						<Route
							exact
							path='/bmw'
							render={(props) => (
								<PhotoContainer {...props} data={this.state.photos} />
							)}
						/>
						<Route
							exact
							path='/mountains'
							render={(props) => (
								<PhotoContainer {...props} data={this.state.photos} />
							)}
						/>

						<Route
							exact
							path='/search/:input'
							render={(props) => (
								<PhotoContainer
									{...props}
									data={this.state.photos}
									handleSearch={this.handleFetch}
									loading={this.state.loading}
								/>
							)}
						/>
						<Route component={PageNotFound} />
					</Switch>
				</div>
			</HashRouter>
		);
	}
}

export default App;
