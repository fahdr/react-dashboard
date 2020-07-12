import React from 'react';

export const InfoSection = ({}) => {
    return (
        <section>
	      <div className="container-fluid">
	        <div className="row">
	          <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
	           <div className="row pt-5 mt-md-3 mb-5">
	             <div className="col-xl-3 col-sm-6 p-2">
	              <div className="card card-common">
	                <div className="card-body bg-info">
	                    <div className="d-flex justify-content-between">
	                      <i className="fas fa-users fa-5x text-white"></i>
	                      <div className="text-right text-white">
	                        <h2>08</h2>
	                        <h3>Users</h3>
	                      </div>
	                    </div> 
	                  </div>
	                <div className="card-footer text-secondary">
	                 <h6 className="text-center"><a href="#">view details <i className="fas fa-arrow-alt-circle-right"></i></a></h6>
	                </div>
	              </div>
	             </div>
	             <div className="col-xl-3 col-sm-6 p-2">
	                <div className="card card-common">
	                <div className="card-body bg-secondary">
	                 <div className="d-flex justify-content-between">
	                   <i className="fas fa-list-ul fa-5x text-white"></i>
	                   <div className="text-right text-white">
	                     <h2>08</h2>
	                     <h3>Posts</h3>
	                   </div>
	                 </div> 
	                </div>
	                <div className="card-footer text-secondary">
	                 <h6 className="text-center"><a href="#">view details <i className="fas fa-arrow-alt-circle-right"></i></a></h6>
	                </div>
	              </div>
	             </div>
	             <div className="col-xl-3 col-sm-6 p-2">
	                <div className="card card-common">
	                <div className="card-body bg-success text-white">
	                 <div className="d-flex justify-content-between">
	                   <i className="fas fa-list-ul fa-5x text-white"></i>
	                   <div className="text-right text-white">
	                     <h2>05</h2>
	                     <h3>Categories</h3>
	                   </div>
	                 </div> 
	                </div>
	                <div className="card-footer text-secondary">
	                 <h6 className="text-center"><a href="#">view details <i className="fas fa-arrow-alt-circle-right"></i></a></h6>
	                </div>
	              </div>
	             </div>
	             <div className="col-xl-3 col-sm-6 p-2">
	                <div className="card card-common">
	                <div className="card-body bg-warning text-white">
	                 <div className="d-flex justify-content-between">
	                   <i className="fas fa-user fa-5x text-white"></i>
	                   <div className="text-right text-white">
	                     <h2>18</h2>
	                     <h3>Users</h3>
	                   </div>
	                 </div> 
	                </div>
	                <div className="card-footer text-secondary">
	                 <h6 className="text-center"><a href="#">view details <i className="fas fa-arrow-alt-circle-right"></i></a></h6>
	                </div>
	              </div>
	             </div>
	           </div> 
	          </div>
	        </div>
	      </div>
	    </section>
    );
}