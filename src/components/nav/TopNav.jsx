import React from 'react'
import TopNavEle from './TopNavEle'

export const TopNav = () => {
	const items = [
		{ id: 1, name: "Leanne Graham" , url: "https://google.com" },
		{ id: 2, name: "Ervin Howell" , url: "google.com" },
		{ id: 3, name: "Clementine Bauch" , url: "google.com" },
		{ id: 4, name: "Patricia Lebsack" , url: "google.com" }
	  ];
	return(
		<div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-light fixed-top py-2 top-navbar">
			              	<div className="row align-items-center">
				                <div className="col-md-4">
				                </div>
				                <div className="col-md-5">
				                </div>
				                <div className="col-md-3">
				                 	<ul className="navbar-nav">
					                    <TopNavEle icon="fas fa-comments text-muted fa-lg" />
										<TopNavEle icon="fas fa-bell text-muted fa-lg" />
										<TopNavEle icon="fas fa-users text-muted fa-lg" list={items} />
				                    	<li className="nav-item ml-md-auto"><a href="google.com" className="nav-link" data-toggle="modal" data-target="#sign-out"><i className="fas fa-sign-out-alt text-primary fa-lg"></i></a></li>
				                  	</ul> 
				                </div>  
				            </div>
		            	</div>

	);
}