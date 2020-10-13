import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSun } from 'react-icons/fa';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
// images
import mapMarker from '../assets/images/map-marker.svg';
// styles
import '../assets/css/pages/orphanages.css';

function OrphanageMap() {
	const [ styleTheme, setStyleTheme ] = useState('light');
	const [ fillSvg, setFillSvg ] = useState('#087e84');

	function changeTheme() {
		setStyleTheme(styleTheme === 'light' ? 'dark':'light' );
		setFillSvg(styleTheme === 'light' ? '#ffffff':'#087e84');
	}

	return (
		<main className="orphanages-container">
			<aside className="orphanages-container-aside">

				<div className="orphanages-container-aside__mapTheme" onClick={changeTheme} >
					<FaSun size={20} fill={fillSvg} />
				</div>

				<img src={mapMarker} alt="icon map marker happy" />
			
				<div className="orphanages-container-aside__description">
					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</div>

				<div className="orphanages-container-aside__address">
					<p>Campina Grande</p>
					<p>Paraíba</p>
				</div>
			</aside>
			<div className="orphanages-container-map">

				<Map
					center={[-7.2263534,-35.9187052]}
					zoom={13.5}
					style={{ width: '100%', height: '100%' }}
				>
					<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${styleTheme}-v10/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
				</Map>

				<Link to="/" className="orphanages-container-map__btn">
					<FaPlus />
				</Link>
			</div>
		</main>
	);
}



export default OrphanageMap;
