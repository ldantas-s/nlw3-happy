import React from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet'
// Icons
import { FiPlus } from "react-icons/fi";
// styles
import '../assets/css/pages/create-orphanage.css';
// components
import Sidebar from "../components/Sidebar";
// import happyMapIcon from "../utils/happyMapIcon";
// images
import mapMarkerImg from '../assets/images/map-marker.svg';



const happyMapIcon = Leaflet.icon({
	iconUrl: mapMarkerImg,

	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [0, -60]
});

export default function CreateOrphanage() {

  return (
    <div className="pageCreateOrphanage">
      <Sidebar />

      <main className="pageCreateOrphanage-main">
        <form className="pageCreateOrphanage-main-form">
          <fieldset className="pageCreateOrphanage-main-form__fieldset">
            <legend>Dados</legend>

            <Map 
              center={[-7.2263534,-35.9187052]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker interactive={false} icon={happyMapIcon} position={[-7.2263534,-35.9187052]} />
            </Map>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="images">Fotos</label>

              <div className="pageCreateOrphanage-main-form-groupInput-uploadedImg">
								{/* aqui ficaram as images */}
              </div>

              <label htmlFor="upImg" className="pageCreateOrphanage-main-form-groupInput__newImg">
                <FiPlus size={24} stroke="#15b6d6" />
              </label>
							<input className="pageCreateOrphanage-main-form-groupInput__inputImg" type="file" name="images" id="upImg"/>
            </div>
          </fieldset>

          <fieldset className="pageCreateOrphanage-main-form__fieldset">
            <legend>Visitação</legend>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="opening_hours">Horário das visitas</label>
              <input id="opening_hours" />
            </div>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="pageCreateOrphanage-main-form-groupInput-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="pageCreateOrphanage-main-form__btnConfirm" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
