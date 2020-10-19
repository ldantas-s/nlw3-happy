import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// Icons
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
// Map
import { Map, Marker, TileLayer } from "react-leaflet";
import L from 'leaflet';
// images
import mapMarkerImg from '../assets/images/map-marker.svg';
// style
import '../assets/css/pages/orphanage.css';
// Components
import Sidebar from "../components/Sidebar";
// api
import api from '../services/api';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

interface Orphanage {
	id: number;
	longitude: number;
	latitude: number;
	name: string;
	about: string;
	instructions: string;
	phone: string;
	opening_hours: string;
	open_on_weekends: boolean;
	images: Array<{
		url: string;
	}>
}

interface OrphanageParams {
	id: string;
}

export default function Orphanage() {
	const { id } = useParams<OrphanageParams>(); 

	const [ orphanage, setOrphanage ] = useState<Orphanage>();
	const [ imageStar, setImageStar ] = useState<number>(0);

	useEffect(() => {
		api.get(`orphanages/${id}`).then(response => {
			console.log(response.data)
			setOrphanage(response.data.orphanage);
		});
	}, [id]);


	if (!orphanage) {		
		return <p>Carregando...</p>
	}


  return (
    <div className="pageOrphanage">
      <Sidebar />

      <main className="pageOrphanage-main">
        <div className="pageOrphanage-main-details">
          <img className="pageOrphanage-main-details__imgMain" src={orphanage.images[imageStar].url} alt="Lar das meninas" />

          <div className="pageOrphanage-main-details-images">
						{orphanage.images.map((image, index) => {
							return (
								<button className={ imageStar === index ? 'active':'' } type="button" onClick={() => setImageStar(index)}>
									<img src={image.url} alt={`photos - ${orphanage.name}`} />
								</button>
							)
						})}
            
          </div>
          
          <div className="pageOrphanage-main-details-content">
            <h1>{orphanage.name}</h1>
						<p>{orphanage.about}</p>

            <div className="pageOrphanage-main-details-content__map">
              <Map 
                center={[orphanage.latitude,orphanage.longitude]} 
                zoom={14} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={happyMapIcon} position={[orphanage.latitude,orphanage.longitude]} />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
						<p>{orphanage.instructions}</p>

            <div className="pageOrphanage-main-details-content-openDetails">
              <div className="pageOrphanage-main-details-content-openDetails__hour">
                <FiClock size={32} stroke="#15B6D6" />
                {orphanage.opening_hours}
              </div>
              <div className={orphanage.open_on_weekends ? '--openOnWeekends':'--NoOpenOnWeekends'}>
                <FiInfo size={32} stroke={orphanage.open_on_weekends ? '#37C77F':'#FF669D'} />
								{orphanage.open_on_weekends ? 
									(
									<>
										Atendemos <br />
										fim de semana	
									</>
									)	: (
										<>
										Não atendemos <br />
										fim de semana	
										</>
									)
							}
              </div>
            </div>

            <a target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=${orphanage.phone}`} className="pageOrphanage-main-details-content__contactBtn">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
