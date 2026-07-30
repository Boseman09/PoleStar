import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import airports from "../data/airports";

export default function AirportMap() {
  return (
    <section className="map-section" id="map">
      <div className="section-heading">
        <span className="section-eyebrow">Route network</span>
        <h2>Every domestic airport, one map</h2>
        <p>Pan around and tap a marker for the airport code and city.</p>
      </div>
      <div className="map-frame">
        <MapContainer
          center={[22.5, 79]}
          zoom={4.5}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {airports.map((a) => (
            <CircleMarker
              key={a.code}
              center={[a.lat, a.lng]}
              radius={7}
              pathOptions={{
                color: "#0b2545",
                fillColor: "#f2b134",
                fillOpacity: 1,
                weight: 2,
              }}
            >
              <Popup>
                <strong>{a.code}</strong> — {a.city}
                <br />
                {a.name}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
