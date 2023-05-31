"use client"
import React, { useState } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import m from './MapComponent.module.css'

export default function MapComponent() {
  let total = 100;
  let intouch = 50;
  let working = 4;
  return (
    <div className={m.map_container}>
      <span className={m.info}>Информация по комплексам</span>
      <div className={m.map_stat}>
          <div className={m.complex_total}>
            <span className={`${m.complex_span} ${m.complex_total}`}>Количество мест работы комплексов:</span>
            <div className={`${m.number} ${m.total}`}>{total}</div>
          </div>
          <div className={m.complex_intouch}>
            <span className={`${m.complex_span} ${m.intouch}`}>Количество комплексов вышедших сегдня на свзязь:</span>
            <div className={`${m.number} ${m.intouch}`}>{intouch}</div>
          </div>
          <div className={m.complex_working}>
            <span className={`${m.complex_span} ${m.working}`}>Работает в данный момент:</span>
            <div className={`${m.number} ${m.working}`}>{working}</div>
          </div>
      </div>
      <div className={m.map}>
        
      </div>
    </div>
  )
}
