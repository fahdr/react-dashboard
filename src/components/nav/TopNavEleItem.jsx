import React, { Component } from "react";

function TopNavEleItem(props) {
	return (
		<li className="dropdown-item"><a href={props.url}></a>{props.name}</li>
	);
  }
  
  export default TopNavEleItem;
