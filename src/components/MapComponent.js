import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import L from "leaflet";

function MapComponent() {
  const exhib = [
    { id: 0, position: [44.97896673896746, -93.16957306381428] },
    { id: 1, position: [44.982038739498066, -93.17016226559366] },
  ];
  const defaultMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [13, 0],
  });
  return (
    <div>
      <div className="map-title">FESTIVAL MAP</div>
      <div className="map-section">
        {/* MAPA */}
        <MapContainer
          center={[44.981348757671704, -93.16759611558552]}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker
            position={[44.9813335798566, -93.17295180390605]}
            icon={defaultMarker}
          >
            <Popup className="request-popup">
              <Tabs>
                <div className="popup-content-container">
                  <TabList>
                    <div className="popup-artists">
                      <h2>STAGE 1 SCHEDULE</h2>
                      <Tab>
                        <div className="popup-artist-btn">
                          Stage 1 / Artist 1 / 4pm
                        </div>
                      </Tab>
                      <Tab>
                        <div className="popup-artist-btn">
                          Stage 1 / Artist 2 / 6pm
                        </div>
                      </Tab>
                      <Tab>
                        <div className="popup-artist-btn">
                          Stage 1 / Artist 3 / 8pm
                        </div>
                      </Tab>
                    </div>
                  </TabList>
                  <div className="popup-artist-desc">
                    <TabPanel>
                      <div className="popup-artist-desc-div">
                        <div className="popup-artist-desc-image"></div>
                        <h1>Stage 1 / Artist 1 Short Desc</h1>
                        <h3>Date and Time of show</h3>
                        <div className="popup-artist-desc-social">
                          <h4 className="social-link">FB</h4>
                          <h4 className="social-link">IG</h4>
                          <h4 className="social-link">SC</h4>
                          <h4 className="social-link">WWW</h4>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="popup-artist-desc-div">
                        <div className="popup-artist-desc-image"></div>
                        <h1>Stage 1 / Artist 2 Short Desc</h1>
                        <h3>Date and Time of show</h3>
                        <div className="popup-artist-desc-social">
                          <h4 className="social-link">FB</h4>
                          <h4 className="social-link">IG</h4>
                          <h4 className="social-link">SC</h4>
                          <h4 className="social-link">WWW</h4>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="popup-artist-desc-div">
                        <div className="popup-artist-desc-image"></div>
                        <h1>Stage 1 / Artist 3 Short Desc</h1>
                        <h3>Date and Time of show</h3>
                        <div className="popup-artist-desc-social">
                          <h4 className="social-link">FB</h4>
                          <h4 className="social-link">IG</h4>
                          <h4 className="social-link">SC</h4>
                          <h4 className="social-link">WWW</h4>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </Popup>
          </Marker>
          <Marker
            position={[44.97882042737466, -93.17428658095051]}
            icon={defaultMarker}
          >
            <Popup className="request-popup">
              <Tabs>
                <div className="popup-content-container">
                  <TabList>
                    <div className="popup-artists">
                      <h2>STAGE 2 SCHEDULE</h2>
                      <Tab>
                        <div className="popup-artist-btn">
                          Stage 2 / Artist 1 / 4pm
                        </div>
                      </Tab>
                      <Tab>
                        <div className="popup-artist-btn">
                          Stage 2 / Artist 2 / 6pm
                        </div>
                      </Tab>
                      <Tab>
                        <div className="popup-artist-btn">
                          Stage 2 / Artist 3 / 8pm
                        </div>
                      </Tab>
                    </div>
                  </TabList>
                  <div className="popup-artist-desc">
                    <TabPanel>
                      <div className="popup-artist-desc-div">
                        <div className="popup-artist-desc-image"></div>
                        <h1>Stage 2 / Artist 1 Short Desc</h1>
                        <h3>Date and Time of show</h3>
                        <div className="popup-artist-desc-social">
                          <h4 className="social-link">FB</h4>
                          <h4 className="social-link">IG</h4>
                          <h4 className="social-link">SC</h4>
                          <h4 className="social-link">WWW</h4>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="popup-artist-desc-div">
                        <div className="popup-artist-desc-image"></div>
                        <h1>Stage 2 / Artist 2 Short Desc</h1>
                        <h3>Date and Time of show</h3>
                        <div className="popup-artist-desc-social">
                          <h4 className="social-link">FB</h4>
                          <h4 className="social-link">IG</h4>
                          <h4 className="social-link">SC</h4>
                          <h4 className="social-link">WWW</h4>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="popup-artist-desc-div">
                        <div className="popup-artist-desc-image"></div>
                        <h1>Stage 2 / Artist 3 Short Desc</h1>
                        <h3>Date and Time of show</h3>
                        <div className="popup-artist-desc-social">
                          <h4 className="social-link">FB</h4>
                          <h4 className="social-link">IG</h4>
                          <h4 className="social-link">SC</h4>
                          <h4 className="social-link">WWW</h4>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </Popup>
          </Marker>
          <Marker
            position={[44.98032307649466, -93.1766898402331]}
            icon={defaultMarker}
          >
            <Popup className="request-popup">
              <Tabs>
                <div className="popup-content-container">
                  <TabList>
                    <div className="popup-artists">
                      <h2>STAGE 3 SCHEDULE</h2>
                      <Tab>
                        <div className="popup-artist-btn">
                          Stage 3 / Artist 1 / 4pm
                        </div>
                      </Tab>
                      <Tab>
                        <div className="popup-artist-btn">
                          Stage 3 / Artist 2 / 6pm
                        </div>
                      </Tab>
                      <Tab>
                        <div className="popup-artist-btn">
                          Stage 3 / Artist 3 / 8pm
                        </div>
                      </Tab>
                    </div>
                  </TabList>
                  <div className="popup-artist-desc">
                    <TabPanel>
                      <div className="popup-artist-desc-div">
                        <div className="popup-artist-desc-image"></div>
                        <h1>Stage 3 / Artist 1 Short Desc</h1>
                        <h3>Date and Time of show</h3>
                        <div className="popup-artist-desc-social">
                          <h4 className="social-link">FB</h4>
                          <h4 className="social-link">IG</h4>
                          <h4 className="social-link">SC</h4>
                          <h4 className="social-link">WWW</h4>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="popup-artist-desc-div">
                        <div className="popup-artist-desc-image"></div>
                        <h1>Stage 3 / Artist 2 Short Desc</h1>
                        <h3>Date and Time of show</h3>
                        <div className="popup-artist-desc-social">
                          <h4 className="social-link">FB</h4>
                          <h4 className="social-link">IG</h4>
                          <h4 className="social-link">SC</h4>
                          <h4 className="social-link">WWW</h4>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="popup-artist-desc-div">
                        <div className="popup-artist-desc-image"></div>
                        <h1>Stage 3 / Artist 3 Short Desc</h1>
                        <h3>Date and Time of show</h3>
                        <div className="popup-artist-desc-social">
                          <h4 className="social-link">FB</h4>
                          <h4 className="social-link">IG</h4>
                          <h4 className="social-link">SC</h4>
                          <h4 className="social-link">WWW</h4>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </Popup>
          </Marker>
        </MapContainer>
        {/* FILTERS */}
        <div className="filters">
          <ul>
            <li>filter1</li>
            <li>filter2</li>
            <li>filter3</li>
            <li>filter4</li>
            <li>filter5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
