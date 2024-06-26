"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Input } from "@nextui-org/react";
import { iconPickup } from "./icon";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changePickupAdress } from "@/redux/reducerSlices/locationSlice";
import { setHospitalDetail } from "@/redux/reducerSlices/hospitalSlice";
const AmbulanceRequestForm = () => {
  const dispatch = useDispatch();
  const { pickUpAdress } = useSelector((state) => state.location);
  return (
    <div className="w-full ">
      <Input
        placeholder="enter your address"
        size="lg"
        onChange={(e) => dispatch(changePickupAdress(e.target.value))}
        value={pickUpAdress}
        className="w-72"
      />
    </div>
  );
};



const Map = () => {
  const { pickUpAdress,pickUpCord } = useSelector((state) => state.location);
  const{hospitalsDetail}=useSelector((state) => state.hospital);
  const dispatch = useDispatch();
   
  useEffect(()=>{
    fetchHospitals()
  },[])

  const handleDrag = async (e) => {
    const { lat, lng } = e.target._latlng;
    console.log(lat, lng);
    const apiKey = "db336abc9dcf45e5baf92fa1f50099a5";
    try {
      const { data } = await axios(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=${apiKey}`
      );
      
      dispatch(changePickupAdress(data.results[0].formatted));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHospitals= async()=>{
      try {
        const {data}= await axios("http://localhost:8000/hospitals")
        dispatch(setHospitalDetail(data))
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <MapContainer center={[27.5, 83.45]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <div
        style={{
          position: "absolute",
          zIndex: "999",
          top: 30,
          left: 70,
        }}
      >
        <AmbulanceRequestForm />
      </div>

      <Marker
        eventHandlers={{
          dragend: handleDrag,
        }}
        position={pickUpCord}
        icon={iconPickup}
        draggable={true}
      >
        <Popup>{pickUpAdress}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
