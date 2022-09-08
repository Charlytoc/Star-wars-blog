import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Information from "./information";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const VehiclesInfo = () => {

    const params = useParams()
    const {store, actions} = useContext(Context)
    
    useEffect( ()=>{ actions.fetchVehiclesInfo(params.uniqueid) }, [] )

    return <>
    <h1>{store.vehiclesInfo?.properties?.name}</h1>
    
    </>
}

export default VehiclesInfo