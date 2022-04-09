import React, { Component } from 'react'
import axios from 'axios';
import Weather from './Weather';

import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
const containerStyle = { 
    width: '50%',
    height: '50%'
  }
export class MapComponent extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
          locations: []
        };
        this.handleMapClick = this.handleMapClick.bind(this);
    }

    

    handleMapClick = (ref, map, ev) => {
        const location = ev.latLng;
        console.log(location.lat())
        
        this.setState(() => ({
          locations: [location]
        }));
        map.panTo(location);
    };

    render() {

        return (<div className="map-area">

                <Map
                    google={this.props.google}
                    zoom={4}
                    center={{
                        lat: 47.444,
                        lng: -122.176
                    }}
                    containerStyle= { containerStyle }
                    onClick={this.handleMapClick}
                >
                    {this.state.locations.map((location, i) => {
                        return (
                        <Marker
                            key={i}
                            position={{ lat: location.lat(), lng: location.lng() }}
                        />
                        );
                    })}
                </Map>
                <Weather data={this.state.locations}/>

            </div>);

    }

}

export default GoogleApiWrapper({

    apiKey: ('AIzaSyBUqVxWPK44Y80DA3czwEVDTlU0Z2j5lXk')

})(MapComponent);