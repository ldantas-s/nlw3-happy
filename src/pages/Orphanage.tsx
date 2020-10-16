import React from "react";
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
import Aside from "../components/Aside";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default function Orphanage() {

  return (
    <div className="pageOrphanage">
      <Aside />

      <main className="pageOrphanage-main">
        <div className="pageOrphanage-main-details">
          <img className="pageOrphanage-main-details__imgMain" src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />

          <div className="pageOrphanage-main-details-images">
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
          </div>
          
          <div className="pageOrphanage-main-details-content">
            <h1>Lar das meninas</h1>
            <p>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</p>

            <div className="pageOrphanage-main-details-content__map">
              <Map 
                center={[-7.2263534,-35.9187052]} 
                zoom={16} 
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
                <Marker interactive={false} icon={happyMapIcon} position={[-7.2263534,-35.9187052]} />
              </Map>

              <footer>
                <a href="/">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

            <div className="pageOrphanage-main-details-content-openDetails">
              <div className="pageOrphanage-main-details-content-openDetails__hour">
                <FiClock size={32} stroke="#15B6D6" />
                Segunda à Sexta <br />
                8h às 18h
              </div>
              <div className="pageOrphanage-main-details-content-openDetails__openOnWeekends">
                <FiInfo size={32} stroke="#39CC83" />
                Atendemos <br />
                fim de semana
              </div>
            </div>

            <button type="button" className="pageOrphanage-main-details-content__contactBtn">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
