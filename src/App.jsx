import React, { useState, useEffect } from "react";
import axios from "axios";
import apiKey from "./config";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

// components
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import PageNotFound from "./components/PageNotFound";
import Header from './components/Header';

const App = () => {
	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isFetchingMore, setIsFetchingMore] = useState(false);
	const [page, setPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState(Cookies.get("searchQuery") || "ocean");

	const handleFetch = (query, isNewSearch = true) => {
		const nextPage = isNewSearch ? 1 : page + 1;

		if (isNewSearch) {
			setLoading(true);
			setPhotos([]); // Clear existing photos for new search
		} else {
			setIsFetchingMore(true);
		}

		axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}&page=${nextPage}&per_page=20`)
			.then((res) => {
				setPhotos(prev => isNewSearch ? res.data.results : [...prev, ...res.data.results]);
				setPage(nextPage);
				setSearchQuery(query);
				if (isNewSearch) Cookies.set("searchQuery", query);
			})
			.catch((err) => {
				console.log("Error fetching and parsing data", err);
			})
			.finally(() => {
				setLoading(false);
				setIsFetchingMore(false);
			});
	};

	return (
		<HashRouter>
			<div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">
				<Header />
				<div className="bg-slate-50/80 backdrop-blur-md sticky top-0 z-10 py-6 mb-8">
					<div className="max-w-md mx-auto mb-6">
						<SearchForm handleSearch={(q) => handleFetch(q, true)} />
					</div>
					<Nav fetchNav={(q) => handleFetch(q, true)} />
				</div>

				{/* Original Loading Spinner Style */}
				{loading && (
					<div className="flex flex-col justify-center items-center py-20">
						<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
						<p className="text-slate-500 font-medium animate-pulse">Fetching high-res goodness...</p>
					</div>
				)}

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<Routes>
						<Route path="/" element={<Navigate to="/ocean" />} />
						<Route
							path="/:topic"
							element={
								<PhotoContainer
									data={photos}
									handleSearch={handleFetch}
									loading={loading}
									isFetchingMore={isFetchingMore}
								/>
							}
						/>
						<Route
							path="/search/:topic"
							element={
								<PhotoContainer
									data={photos}
									handleSearch={handleFetch}
									loading={loading}
									isFetchingMore={isFetchingMore}
								/>
							}
						/>
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</div>

				{/* Infinite Scroll Spinner */}
				{isFetchingMore && (
					<div className="flex justify-center py-10">
						<div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-600"></div>
					</div>
				)}
			</div>
		</HashRouter>
	);
};

export default App;