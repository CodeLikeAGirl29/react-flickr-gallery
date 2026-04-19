import React, { Component } from "react";
import axios from "axios";
import apiKey from "./config";
import { HashRouter, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

// components
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import PageNotFound from "./components/PageNotFound";
import Header from './components/Header';

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
		this.handleFetch(query);
	}

	/**
	 * Updated to use Unsplash API
	 * Uses Tailwind classes for the loading state and container layout
	 */
	handleFetch = (query) => {
		this.setState({
			loading: true,
		});
		axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`)
			.then((res) => {
				this.setState({
					// Unsplash returns data in res.data.results
					photos: res.data.results,
					loading: false,
				});
			})
			.catch((error) => {
				console.log("Error fetching and parsing data", error);
				this.setState({ loading: false });
			});
	};

	render() {
		return (
			<HashRouter>
				{/* Background and font styling with Tailwind */}
				<div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">
					<Header />
					<div className="bg-slate-50/80 backdrop-blur-md sticky top-0 z-10 py-6 mb-8">
						<div className="max-w-md mx-auto mb-6">
							<SearchForm handleSearch={this.handleFetch} />
						</div>
						<Nav fetchNav={this.handleFetch} />
					</div>


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
							path='/architecture'
							render={(props) => <PhotoContainer {...props} handleSearch={this.handleFetch} data={this.state.photos} />} />
						<Route
							path='/wilderness'
							render={(props) => <PhotoContainer {...props} handleSearch={this.handleFetch} data={this.state.photos} />}
						/>
						<Route
							path='/minimal'
							render={(props) => <PhotoContainer {...props} handleSearch={this.handleFetch} data={this.state.photos} />}
						/>
						<Route
							path='/textures'
							render={(props) => <PhotoContainer {...props} handleSearch={this.handleFetch} data={this.state.photos} />}
						/>

						<Route
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
			</HashRouter >
		);
	}
}

export default App;