import React, { Component } from "react";

function InfoCard (props) {

	return (
		<div className="col-xl-3 col-sm-6 p-2">
	              <div className="card card-common">
	                <div className={props.bgclass}>
	                    <div className="d-flex justify-content-between">
	                      <i className={props.icon}></i>
	                      <div className="text-right text-white">
	                        <h2>{props.count}</h2>
							<h3>{props.title}</h3>
	                      </div>
	                    </div> 
	                  </div>
	                <div className="card-footer text-secondary">
	                 <h6 className="text-center"><a href={props.href}>view details <i className="fas fa-arrow-alt-circle-right"></i></a></h6>
	                </div>
	              </div>
	             </div>
	);
  }
  
  export default InfoCard;