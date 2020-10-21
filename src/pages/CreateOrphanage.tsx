import React, { FormEvent, useState, ChangeEvent } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
// Icons
import { FiPlus } from "react-icons/fi";
// styles
import '../assets/css/pages/create-orphanage.css';
// components
import Sidebar from "../components/Sidebar";
import happyMapIcon from "../utils/happyMapIcon";


export default function CreateOrphanage() {

	
	const [ imagesSelected, setImagesSelected ] = useState<File[]>([]);
	const [ imagesPreview, setImagesPreview ] = useState<string[]>([]);
	const [ infoOrphanage, setInfoOrphanage ] = useState({
		latitude: 0,
		longitude: 0,
		name: '',
		about: '',
		phone: '',
		instructions: '',
		opening_hours: '',
		open_on_weekends: false,
		images: imagesSelected
	});

	function handleMapClick(event: LeafletMouseEvent) {
		const { lat:latitude, lng:longitude } = event.latlng;

		setInfoOrphanage({...infoOrphanage,
			latitude,
			longitude
		});

	}

	function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
		if (!event.target.files) return;
		
		const imagesSelectedPreview = Array.from(event.target.files);

		setImagesSelected(imagesSelectedPreview);

		setImagesPreview(imagesSelectedPreview.map(image => {
			return URL.createObjectURL(image);
		}))
	}
	
	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		console.log(infoOrphanage);

	}

  return (
    <div className="pageCreateOrphanage">
      <Sidebar />

      <main className="pageCreateOrphanage-main">
        <form className="pageCreateOrphanage-main-form" onSubmit={handleSubmit}>
          <fieldset className="pageCreateOrphanage-main-form__fieldset">
            <legend>Dados</legend>

            <Map 
              center={[-7.2263534,-35.9187052]} 
              style={{ width: '100%', height: 280 }}
							zoom={15}
							onClick={handleMapClick}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
							{infoOrphanage.latitude !== 0 ? 
              	<Marker interactive={false} icon={happyMapIcon} position={[infoOrphanage.latitude,infoOrphanage.longitude]} />: null
							}
            </Map>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="name">Nome</label>
              <input required id="name" name="name" value={infoOrphanage.name} onChange={e => setInfoOrphanage({...infoOrphanage, name: e.target.value})} />
            </div>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea required id="about" name="about" value={infoOrphanage.about} onChange={e => setInfoOrphanage({...infoOrphanage, about: e.target.value})} maxLength={300} />
            </div>

						<div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="phone">Telefone <span>Digite apenas números</span></label>
              <input required type="text" name="phone" id="phone" maxLength={300} value={infoOrphanage.phone} onChange={e => setInfoOrphanage({...infoOrphanage, phone: e.target.value})} />
            </div>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="images">Fotos</label>

              <div className="pageCreateOrphanage-main-form-groupInput-uploadedImg">
								<label htmlFor="upImg" className="pageCreateOrphanage-main-form-groupInput__newImg">
									<FiPlus size={24} stroke="#15b6d6" />
								</label>
								{ imagesPreview.map((path, index) => {
										return (
											<button key={index} type="button" className="pageCreateOrphanage-main-form-groupInput-uploadedImg__img" >
												<img src={path} alt="Hello" />
											</button>
										);
									})
								}
              </div>

							<input multiple onChange={handleSelectImages} className="pageCreateOrphanage-main-form-groupInput__inputImg" type="file" name="images" id="upImg"/>
            </div>
          </fieldset>

          <fieldset className="pageCreateOrphanage-main-form__fieldset">
            <legend>Visitação</legend>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="instructions">Instruções</label>
              <textarea required id="instructions" name="instructions" value={infoOrphanage.instructions} onChange={e => setInfoOrphanage({...infoOrphanage, instructions: e.target.value})} />
            </div>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="opening_hours">Horário das visitas</label>
              <input required id="opening_hours" name="opening_hours" value={infoOrphanage.opening_hours} onChange={e => setInfoOrphanage({...infoOrphanage, opening_hours: e.target.value})} />
            </div>

            <div className="pageCreateOrphanage-main-form-groupInput">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="pageCreateOrphanage-main-form-groupInput-select">
								<button 
									type="button" 
									className={infoOrphanage.open_on_weekends ? 'active--openOnWeekends':''} 
									onClick={() => setInfoOrphanage({...infoOrphanage, open_on_weekends: true})}
								>
									Sim
								</button>
								<button 
									type="button" 
									className={!infoOrphanage.open_on_weekends ? 'active--NoOpenOnWeekends':''} 
									onClick={() => setInfoOrphanage({...infoOrphanage, open_on_weekends: false})}
								>
									Não
								</button>
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
