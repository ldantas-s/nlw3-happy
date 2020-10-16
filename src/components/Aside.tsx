import React from 'react';
import { useHistory } from "react-router-dom";
// style
import '../assets/css/components/aside.css';
// icons
import { FiArrowLeft } from "react-icons/fi";
// images
import mapMarkerImg from '../assets/images/map-marker.svg';



function Aside() {
  const { goBack } = useHistory();

	return(
		<aside className="aside">
        <img src={mapMarkerImg} alt="Happy" className="aside__img" />

          <button className="aside__btn" type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
      </aside>
	);
}


export default Aside;
