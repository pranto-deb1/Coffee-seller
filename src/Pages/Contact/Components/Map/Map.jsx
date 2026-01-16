import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = () => {
  return (
    <div className="h-[400px] max-w-7xl mx-auto mt-8 overflow-hidden rounded-xl">
      <MapContainer
        center={[23.8103, 90.4125]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[23.8103, 90.4125]}>
          <Popup>This is Dhaka</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
