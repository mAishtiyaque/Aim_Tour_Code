import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Gmap.css'
import { beachsData } from './../_helpers/beachdata'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFpc2h0aXlhcXVlIiwiYSI6ImNsNTd3eDcyeDF3aGozanFxdG94Z3Y5ZjgifQ.4LzENaEShIw-QQrODtdSEQ';
export default function Gmap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 73.8213;
  const lat = 15.4271;
  const zoom = 9.6;
  useEffect(() => {
    if (map.current) return; // initialize map only once 73.8213 15.4271
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    beachsData.map((loc) => {
      const mapCardNode = document.createElement('div');
      ReactDOM.render(<PopupCard loc={loc} />, mapCardNode);
      new mapboxgl.Marker({ color: '#f34' })
        .setLngLat([loc.longitude, loc.latitude])
        .setPopup(new mapboxgl.Popup()
          .setDOMContent(mapCardNode))
        .addTo(map.current);
      return loc;
    })

  });

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));

  //   });
  // });

  return (
    <div >
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}


function PopupCard(props) {
  //const beachDetails =beachsData.filter((item)=>{return item.id===props.id })[0];
  const beachDetails = props.loc;
  //console.log("id", beachDetails)
  return (
    <>
      {beachDetails &&
        <div>
          <h5>{beachDetails.title}</h5>
          <span>
            Longitude : {beachDetails.longitude}
          </span>
          <br />
          <span>
            Latitude : {beachDetails.longitude}
          </span>

        </div >
      }
    </>
  )
}

