import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSun, FaArrowRight } from 'react-icons/fa';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
// images
import mapMarker from '../assets/images/map-marker.svg';
// styles
import '../assets/css/pages/orphanages.css';


const mapIcon = Leaflet.icon({
	iconUrl: mapMarker,
	iconSize: [38, 95],
	iconAnchor: [19, 94],
	popupAnchor: [150, -13]
});

function OrphanagesMap() {
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
					<FaSun size={24} fill={fillSvg} />
				</div>

				<img className="orphanages-container-aside__icon" src={mapMarker} alt="icon map marker happy" />
			
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
					<Marker 
						icon={mapIcon}
						position={[-7.2263534,-35.9187052]}
						>
							<Popup closeButton={false} minWidth={170} minHeight={64} className="marker-popup" >
								Jardin feliz
								<Link to="/orphanage/1" className="marker-popup__btn">
									<FaArrowRight />
								</Link>
							</Popup>
						</Marker>
				</Map>

				<Link to="/create-orphanage" className="orphanages-container-map__btn">
					<FaPlus />
				</Link>
			</div>
		</main>
	);
}



export default OrphanagesMap;
