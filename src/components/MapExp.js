import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import festivalData from "../data/festivalData.json";
import "./MapComponent.css";
import "./MapExp.css";
import L from "leaflet";

function MapExp() {
  const filteredMusic = festivalData.filter((fltr) => fltr.type === "music");
  const filteredArt = festivalData.filter((fltr) => fltr.type === "art");
  const filteredFood = festivalData.filter((fltr) => fltr.type === "food");

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
        {filteredMusic.map((fltr) => (
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
        {/* Art Markers */}
        {filteredArt.map((fltr) => (
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
        {/* Food Markers */}
        {filteredFood.map((fltr) => (
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
      </MapContainer>
      <div className="filters">
        <ul>
          <li>
            <h3>Music</h3>
            <button>filterMusic</button>
          </li>
          <li>
            <h3>Food</h3>
            <button>filterFood</button>
          </li>
          <li>
            <h3>Art</h3>
            <button>filterArt</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MapExp;
