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
			searchQuery: Cookies.get("searchQuery") || "ocean",
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
				<div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">
					<Header />
					<div className="bg-slate-50/80 backdrop-blur-md sticky top-0 z-10 py-6 mb-8">
						<div className="max-w-md mx-auto mb-6">
							<SearchForm handleSearch={this.handleFetch} />
						</div>
						<Nav fetchNav={this.handleFetch} />
					</div>

					{/* Integrated Loading Spinner */}
					{this.state.loading && (
						<div className="flex flex-col justify-center items-center py-20">
							<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
							<p className="text-slate-500 font-medium animate-pulse">Fetching high-res goodness...</p>
						</div>
					)}

					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<PhotoContainer
										{...props}
										data={this.state.photos}
										loading={this.state.loading}
										handleSearch={this.handleFetch} // Added this missing line!
									/>
								)}
							/>
							<Route
								path='/architecture'
								render={(props) => <PhotoContainer {...props} handleSearch={this.handleFetch} data={this.state.photos} loading={this.state.loading} />}
							/>
							<Route
								path='/wilderness'
								render={(props) => <PhotoContainer {...props} handleSearch={this.handleFetch} data={this.state.photos} loading={this.state.loading} />}
							/>
							<Route
								path='/minimal'
								render={(props) => <PhotoContainer {...props} handleSearch={this.handleFetch} data={this.state.photos} loading={this.state.loading} />}
							/>
							<Route
								path='/textures'
								render={(props) => <PhotoContainer {...props} handleSearch={this.handleFetch} data={this.state.photos} loading={this.state.loading} />}
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
				</div>
			</HashRouter >
		);
	}
}

export default App;