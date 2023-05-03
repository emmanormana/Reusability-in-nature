import React from 'react';
import swal from 'sweetalert'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import {  Descriptions } from 'antd';
import GoogleMapReact from 'google-map-react';
import image10 from '../images/pexels-matheus-bertelli-1144687.jpg';
import axios from "axios";
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
Geocode.setApiKey("AIzaSyDhdSw1QzkXBrYnLSt3EF3izfHEhUj6LMc");
Geocode.enableDebug();
class LocationSearchModal extends React.Component {
    state = {
        address: '',
        city: '',
        area: '',
        state: '',
        link:'',
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        }
    }
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    mapPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    markerPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                },
                    () => {
                        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                            response => {
                                // console.log(`https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`)
                                this.setState({link:`https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`})
                                const address = response.results[0].formatted_address,
                                    addressArray = response.results[0].address_components,
                                    city = this.getCity(addressArray),
                                    area = this.getArea(addressArray),
                                    state = this.getState(addressArray);
                                console.log('city', city, area, state);
                                this.setState({
                                    address: (address) ? address : '',
                                    area: (area) ? area : '',
                                    city: (city) ? city : '',
                                    state: (state) ? state : '',
                                })
                            },
                            error => {
                                console.error(error);
                            }
                        );
                    })
            });
        } else {
            console.error("Geolocation is not supported by this browser!");
        }
    };
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (
    //         this.state.markerPosition.lat !== this.state.center.lat ||
    //         this.state.address !== nextState.address ||
    //         this.state.city !== nextState.city ||
    //         this.state.area !== nextState.area ||
    //         this.state.state !== nextState.state
    //     ) {//
    //         return true
    //     } else if (this.state.mapPosition.lat === nextState.mapPosition.lat) {
    //         return false
    //     }
    // }
    getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };
    getArea = (addressArray) => {
        let area = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };
    getState = (addressArray) => {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(event.target.value)
    };
    onInfoWindowClose = (event) => { };
    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng();
        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);
                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                })
            },
            error => {
                console.error(error);
            }
        );
    };
    onPlaceSelected = (place) => {
        console.log('plc', place);
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();
            console.log('latValue'+latValue)
        console.log('latvalue', latValue)
        console.log('lngValue', lngValue)
        // Set these values in the state.
        this.setState({
            address: (address) ? address : '',
            area: (area) ? area : '',
            city: (city) ? city : '',
            state: (state) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };
    handleSubmit(){
      var location = this.state.link;
      localStorage.setItem('location',location)
    //   console.log(location)
    //   var user_id= localStorage.getItem('user_id')
    //   axios.post("http://localhost:5000/insertmap", {'location': location,"user_id":user_id})
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err))
    swal({
        title: "Saved!",
        text: "",
        icon: "success",
      button: "Done"
      });
        window.location ='/additems'
    }
    render() {
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap
                        defaultZoom={this.state.zoom}
                        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                    >
                        {/* InfoWindow on top of marker */}
                        {/*Marker*/}
                        <Marker
                            google={this.props.google}
                            name={'Dolores park'}
                            draggable={true}
                            onDragEnd={this.onMarkerDragEnd}
                            position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                        />
                        <InfoWindow
                            onClose={this.onInfoWindowClose}
                            position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                        >
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                            </div>
                        </InfoWindow>
                        <Marker />
                        {/* <MarkerWithLabel
                            position={{ lat: -34.397, lng: 150.644 }}
                            labelAnchor={new google.maps.Point(0, 0)}
                            labelStyle={{ backgroundColor: "yellow", fontSize: "32px", padding: "16px" }}
                        >
                            <div>Hello There!</div>
                        </MarkerWithLabel> */}
                        {/* For Auto complete Search Box */}
                        {/* <Autocomplete
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '16px',
                                marginTop: '2px',
                                marginBottom: '2rem'
                            }}
                            onPlaceSelected={this.onPlaceSelected}
                            types={['(regions)']}
                        /> */}
                    </GoogleMap>
                )
            )
        );
        return (
            <div style={{background: `url(${image10})`,width:"100%",height:"1000px",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div style={{ padding: '1rem', margin: '0 auto', maxWidth: 1000 }}>
               <h4 style={{color:"white"}}>Save your current location..</h4> 
                <Descriptions bordered>
                    <Descriptions.Item label="Area:" style={{color:"white"}}>Jordan - {this.state.area}</Descriptions.Item><br/>
                    <Descriptions.Item label="State:" style={{color:"white"}}>{this.state.state}</Descriptions.Item>
                    <Descriptions.Item label="Address:" style={{color:"white"}}>{this.state.address}</Descriptions.Item><br/>
                </Descriptions>
                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhdSw1QzkXBrYnLSt3EF3izfHEhUj6LMc&libraries=places"
                    loadingElement={
                        <div style={{ height: `100%` }} />
                    }
                    containerElement={
                        <div style={{ height: this.state.height }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />
              <button  type="submit" className='btn btn-outline-primary btn-lg btn-block' onClick={this.handleSubmit.bind(this)} style={{backgroundColor:"rgba(45, 72, 58, 0.911)",color:"white"}}>save location </button>
            </div>
            </div>
        )
    }
}
export default LocationSearchModal;