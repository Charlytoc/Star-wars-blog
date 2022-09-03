import React from "react"
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";


function Character () {
    return <>
    <div className="card m-2 text-start" style={{width: '15rem'}}>
  <img src={rigoImage} className="card-img-top" alt="..."/>
  <div className="card-body p-1">
    <h5 className="card-title">Luke Skywalker</h5>
    <p >Gender: Male</p>
    <p >Hair color: Black</p>
    <p >Eye color: Blue</p>
    
    <Link to="/information"><button className="btn btn-outline-primary float-start">Learn more!</button></Link>
    <a href="#" className="btn btn-outline-primary float-end"><i className="fa fa-heart text-danger" /></a>
  </div>
</div>
    </>
}

export default Character