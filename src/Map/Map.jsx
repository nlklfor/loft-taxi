
import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import Header from "../Header/Header";
import OrderForm from "./OrderForm";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { drawRoute } from "./drawRoute"
window.URL.createObjectURL = function () { };

class Map extends Component {
  map = null;
  mapContainer = React.createRef();

 

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 12,
    })

  }
  

  componentDidUpdate() {
    const coordinates = this.props.route;

    if (coordinates) {
      this.map.flyTo({
        center: coordinates[0],
        zoom: 15,
      });

      var mapRouteLayer = this.map.getLayer('route');

      if (mapRouteLayer) {
        this.map.removeLayer('route').removeSource('route');
      }

      this.map.addLayer(drawRoute(coordinates));
    }
  }

  componentWillUnmount() {
    this.map.remove()
  }



  render() {
    return (
      <>
        <Header generatePage = {this.props.generatePage} />
        {!this.props.cardAdded ? (
          <OrderForm />
        ) : (<div></div>)}
        <section>
          <div data-testid="map" className="map" ref={(el) => (this.mapContainer = el)} />
        </section>
        
      </>
    );
  }

}

export default connect(
  (state) => ({ cardAdded: state.card.cardAdded, route: state.route }),
)(Map)