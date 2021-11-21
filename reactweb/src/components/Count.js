import react from "react";

const Count=()=>{
    return(

        <div>
        <section id="counts" className="counts section-bg">
        <div className="container">
  
          <div className="row counters">
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">232</span>
              <p>Clients</p>
            </div>
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">521</span>
              <p>Projects</p>
            </div>
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter">1463</span>
              <p>Hours Of Support</p>
            </div>
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">15</span>
              <p>Hard Workers</p>
            </div>
  
          </div>
  
        </div>
      </section>

      </div>
    )
}

export default Count;