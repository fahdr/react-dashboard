import React, { Component } from "react";

function NavItem(props) {
	return (
		<li>
			<a href={props.url} className="text-white">{props.name}</a>
		</li>
	);
  }
  
  export default NavItem;
