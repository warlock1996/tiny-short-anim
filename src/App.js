import './App.css'
import Navigation from './components/Navigation.jsx'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import PortfolioSection from './components/PortfolioSection'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'
import React from 'react'

function App() {
	return (
		<React.Fragment>
			<header>
				<Navigation />
			</header>
			<main>
				<HeroSection />
				<Services />
				<PortfolioSection />
				<ReviewsSection />
			</main>
			<footer>
				<Footer />
			</footer>
		</React.Fragment>
	)
}

export default App
