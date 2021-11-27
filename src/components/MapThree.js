import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import festivalData from "../data/festivalData.json";
import "./MapComponent.css";
import "./MapExp.css";

class MapThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music: [],
      //   music: festivalData.filter((fltr) => fltr.type === "music"),
      art: [],
      //   art: festivalData.filter((fltr) => fltr.type === "art"),
      food: [],
      //   food: festivalData.filter((fltr) => fltr.type === "food"),
    };
    this.handleClickMusic = this.handleClickMusic.bind(this);
    this.handleClickMusicOff = this.handleClickMusicOff.bind(this);
    this.handleClickFood = this.handleClickFood.bind(this);
    this.handleClickFoodOff = this.handleClickFoodOff.bind(this);
    this.handleClickArt = this.handleClickArt.bind(this);
    this.handleClickArtOff = this.handleClickArtOff.bind(this);
  }
  handleClickMusic() {
    this.setState({
      music: festivalData.filter((fltr) => fltr.type === "music"),
    });
  }
  handleClickMusicOff() {
    this.setState({
      music: [],
    });
  }
  handleClickFood() {
    this.setState({
      food: festivalData.filter((fltr) => fltr.type === "food"),
    });
  }
  handleClickFoodOff() {
    this.setState({
      food: [],
    });
  }
  handleClickArt() {
    this.setState({
      art: festivalData.filter((fltr) => fltr.type === "art"),
    });
  }
  handleClickArtOff() {
    this.setState({
      art: [],
    });
  }

  render() {
    const foodMarker = new L.icon({
      iconUrl: "https://static.thenounproject.com/png/3342537-200.png",
      iconSize: [25, 41],
      iconAnchor: [13, 0],
    });
    const musicMarker = new L.icon({
      iconUrl: "https://static.thenounproject.com/png/17849-200.png",
      iconSize: [25, 41],
      iconAnchor: [13, 0],
    });
    const artMarker = new L.icon({
      iconUrl: "https://static.thenounproject.com/png/91702-200.png",
      iconSize: [25, 41],
      iconAnchor: [13, 0],
    });

    return (
      <div className="map-section">
        <MapContainer
          center={[44.98140015337713, -93.17297522892738]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Music Markers */}
          {this.state.music.map((fltr) => (
            <Marker
              key={fltr.id}
              position={[fltr.gps.latitude, fltr.gps.longitude]}
              icon={musicMarker}
            >
              <Popup>
                <div>
                  <h1>{fltr.name}</h1>
                </div>
              </Popup>
            </Marker>
          ))}
          {this.state.food.map((fltr) => (
            <Marker
              key={fltr.id}
              position={[fltr.gps.latitude, fltr.gps.longitude]}
              icon={foodMarker}
            >
              <Popup>
                <div>
                  <h1>{fltr.name}</h1>
                </div>
              </Popup>
            </Marker>
          ))}
          {this.state.art.map((fltr) => (
            <Marker
              key={fltr.id}
              position={[fltr.gps.latitude, fltr.gps.longitude]}
              icon={artMarker}
            >
              <Popup>
                <div>
                  <h1>{fltr.name}</h1>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <div className="filters">
          <ul>
            <li>
              <h3>Music</h3>
              <button onClick={this.handleClickMusic}>filterMusic OPEN</button>
              <button onClick={this.handleClickMusicOff}>
                filterMusic CLOSE
              </button>
            </li>
            <li>
              <h3>Food</h3>
              <button onClick={this.handleClickFood}>filterFood OPEN</button>
              <button onClick={this.handleClickFoodOff}>
                filterFood CLOSE
              </button>
            </li>
            <li>
              <h3>Art</h3>
              <button onClick={this.handleClickArt}>filterArt OPEN</button>
              <button onClick={this.handleClickArtOff}>filterArt CLOSE</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MapThree;
