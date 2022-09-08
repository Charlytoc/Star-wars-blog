import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Information from "./information";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const PlanetInfo = () => {

    const params = useParams()
    const {store, actions} = useContext(Context)

    useEffect( ()=>{ actions.fetchPlanetInfo(params.uniqueid) }, [] )

    console.log(store.planetInfo)

    return <>
    <h1>{store.planetInfo?.properties?.name}</h1>
    <div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uniqueid}.jpg`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{store.planetInfo?.properties?.name}</h5>
        <p className="card-text">{store.planetInfo?.description}</p>
        
      </div>
    </div>
  </div>
</div>
    </>
}

export default PlanetInfo