import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// styles
import '../assets/css/pages/landing.css';
// images
import logo from '../assets/images/logo-happy.svg';


function Landing() {
	return (
		<main className="landing-container">
			<section className="landing-container-main">
				<div className="landing-container-main-header">
					<img src={logo} alt="logo happy" className="landing-container-main-header__logo" />
					<div className="landing-container-main-header__address">
						<p>Campina Grande</p>
						<p>Paraíba</p>
					</div>
				</div>
				<div className="landing-container-main-content">
					<div className="landing-container-main-content__description">
						<h2>Leve felicidade para o mundo</h2>
						<p>Visite orfanatos e mude o dia de muitas crianças.</p>
					</div>

					<Link to="/orphanages" className="landing-container-main-content__btn">
						<FaArrowRight />
					</Link>
				</div>

			</section>
		</main>
	);
}

export default Landing;
