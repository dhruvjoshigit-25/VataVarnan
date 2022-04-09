import React, { Component } from 'react'

import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
const containerStyle = { 
    width: '50%',
    height: '50%'
  }
export class MapComponent extends Component {

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
                >
                    <Marker key="marker_1"
                        position={{
                            lat: 47.444,
                            lng: -122.176
                        }}
                        />

                </Map>

            </div>);

    }

}

export default GoogleApiWrapper({

    apiKey: ('AIzaSyBUqVxWPK44Y80DA3czwEVDTlU0Z2j5lXk')

})(MapComponent);