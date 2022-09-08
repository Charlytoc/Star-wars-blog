import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Information from "./information";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const PeopleInfo = () => {

    const params = useParams()

    const {store, actions} = useContext(Context)

    console.log(store.peopleInfo)
    
    useEffect( ()=>{ actions.fetchPeopleInfo(params.uniqueid) }, [] )

    return <>
    <h1>{store.peopleInfo?.properties?.name}</h1>
    <p>gender: {store.peopleInfo?.properties?.gender}</p>
    
    </>
}

export default PeopleInfo