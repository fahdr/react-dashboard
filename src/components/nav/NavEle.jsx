import React from 'react';
import  NavItem from './NavItem'

export const NavElement = (props) => {
	let isList = true
	let list 
	if(props.list){
		isList=false
		list=<ul className="d-menu"> { props.list.map(i => <NavItem key={i.id} name={i.name} url={i.url} />)}</ul>
	}
	return(
	
		<li className="nav-item dropdown">
		<a href="google.com" className="nav-link text-white p-2 mb-1 sidebar-link d-btn">
			<i className={props.icon}></i>{props.title}  <i className="fas fa-caret-down text-white" hidden={isList} ></i>
		</a>
        {list}
	 </li>
	)
	};
	