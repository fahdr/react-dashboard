import React from 'react';
import InfoCard from './infocard'
export const InfoSection = ({}) => {
    return (
        <section>
	      <div className="container-fluid">
	        <div className="row">
	          <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
	           <div className="row pt-5 mt-md-3 mb-5">
	             <InfoCard href="#" title="Posts" count="08" bgclass="card-body bg-success text-white" icon="fas fa-list-ul fa-5x text-white"/>
				 <InfoCard href="#" title="Posts" count="08" bgclass="card-body bg-success text-white" icon="fas fa-list-ul fa-5x text-white"/>
	             <InfoCard href="#" title="Posts" count="08" bgclass="card-body bg-success text-white" icon="fas fa-list-ul fa-5x text-white"/>
	             <InfoCard href="#" title="Posts" count="08" bgclass="card-body bg-success text-white" icon="fas fa-list-ul fa-5x text-white"/>
	           </div> 
	          </div>
	        </div>
	      </div>
	    </section>
    );
}