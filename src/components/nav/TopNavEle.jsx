import React, { Component } from "react";
import TopNavEleItem from './TopNavEleItem'
function TopNavEle (props) {
	let isList = true
	let list 
	if(props.list){
		isList=false
		list=<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink"> { props.list.map(i => <TopNavEleItem key={i.id} name={i.name} url={i.url} />)}</ul>
	}
	return (
		<li className="nav-item dropdown show">
 			<a className="nav-link icon-bullet" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<i className={props.icon}></i>
 			</a>
			{list}
      	</li>
	);
  }
  
  export default TopNavEle;