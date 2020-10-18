import Leaflet from 'leaflet';
// images
import mapMarkerImg from '../assets/images/map-marker.svg';


export default {
	happyMapIcon: Leaflet.icon({
		iconUrl: mapMarkerImg,

		iconSize: [58, 68],
		iconAnchor: [29, 68],
		popupAnchor: [0, -60]
	})
};
