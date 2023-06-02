"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { icon } from "leaflet";
import m from "./MapComponent.module.css";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: require("./location-pin.png"),
  iconSize: [40, 40],
});

export default function MapComponent() {
  let total = 100;
  let intouch = 50;
  let working = 4;
  return (
    <div className={m.map_container}>
      <span className={m.info}>Информация по комплексам</span>
      <div className={m.map_stat}>
        <div className={m.complex_total}>
          <span className={`${m.complex_span} ${m.complex_total}`}>
            Количество мест работы комплексов:
          </span>
          <div className={`${m.number} ${m.total}`}>{total}</div>
        </div>
        <div className={m.complex_intouch}>
          <span className={`${m.complex_span} ${m.intouch}`}>
            Количество комплексов вышедших сегдня на свзязь:
          </span>
          <div className={`${m.number} ${m.intouch}`}>{intouch}</div>
        </div>
        <div className={m.complex_working}>
          <span className={`${m.complex_span} ${m.working}`}>
            Работает в данный момент:
          </span>
          <div className={`${m.number} ${m.working}`}>{working}</div>
        </div>
      </div>
      <div className={m.map}>
        <div className={m.map_legend}>
          <ul>
            <li>ДТП</li>
            <li>Передвижные комплексы</li>
            <li>Стационарные комплексы</li>
            <li>Концентрация ДТП в городе</li>
            <li>Концентрация ДТП на дороге</li>
          </ul>
        </div>
        <div className={m.leaflet_container}>
        <MapContainer
          className={m.leaflet_container}
          center={[55.79114510998451, 49.11037307686192]}
          zoom={13}
          scrollWheelZoom={false}
          
        >
          <TileLayer
            attribution='Я не знаю как убрать флаг и подпись'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* почему-то иконка маркера не загружается */}
          <Marker
            position={[55.82313839924307, 49.09658950859296]}
            icon={markerIcon}
          >
            <Popup>
              <strong>Гриша</strong>
            </Popup>
          </Marker>
        </MapContainer>
        </div>
      </div>
    </div>
  );
}
