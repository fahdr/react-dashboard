import React from 'react';
import { NavElement } from './NavEle'
import { TopNav } from './TopNav'

export const NavBar = () => {
	const items = [
		{ id: 1, name: "Leanne Graham" , url: "https://google.com" },
		{ id: 2, name: "Ervin Howell" , url: "google.com" },
		{ id: 3, name: "Clementine Bauch" , url: "google.com" },
		{ id: 4, name: "Patricia Lebsack" , url: "google.com" }
	  ];
	  const items2 = [
		{ id: 1, name: "Leanne Graham" , url: "https://google.com" },
		{ id: 2, name: "Ervin Howell" , url: "google.com" },
		{ id: 3, name: "Clementine Bauch" , url: "google.com" },
		{ id: 4, name: "Patricia Lebsack" , url: "google.com" }
	  ];
	  const items3 = [
		{ id: 1, name: "Leanne Graham" , url: "https://google.com" },
		{ id: 2, name: "Ervin Howell" , url: "google.com" },
		{ id: 3, name: "Clementine Bauch" , url: "google.com" },
		{ id: 4, name: "Patricia Lebsack" , url: "google.com" }
	  ];
	  const items4 = [
		{ id: 1, name: "Leanne Graham" , url: "https://google.com" },
		{ id: 2, name: "Ervin Howell" , url: "google.com" },
		{ id: 3, name: "Clementine Bauch" , url: "google.com" },
		{ id: 4, name: "Patricia Lebsack" , url: "google.com" }
	  ];
	  
    return (
        <nav className="navbar navbar-expand-md navbar-light">
	      	<button className="navbar-toggler ml-auto bg-light mb-2" type="button" data-toggle="collapse" data-target="#mynavbar">
	        	<span className="navbar-toggler-icon"></span>
	      	</button>
              <div className="collapse navbar-collapse" id="mynavbar">
		        <div className="container-fluid">
		          	<div className="row">
		            	<div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
		             		<a href="google.com" className="navbar-brand text-white mx-auto text-center d-block bottom-border mb-2 py-2 font-weight-bold">Dashboard</a>
		            		<div className="sidebarmenu">
			             		<ul className="navbar-nav flex-column mt-4">
			                		<NavElement title="Dashboard" icon="fas fa-home text-light fa-lg mr-2"/>
									<NavElement title="Orders" icon="fas fa-home text-light fa-lg mr-2"/>			                		
			                		<NavElement title="Products" icon="fas fa-home text-light fa-lg mr-2"/>			                		
			                		
									<NavElement list={items} title="New Menu" icon="fa fa-camera-retro text-light fa-lg mr-2" /> 
					            </ul>
				            </div>
		           		</div>
			            <TopNav />
		          	</div>
		        </div>
		    </div>
		</nav>
    )
};