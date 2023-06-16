import React from "react";
import safar from "./safar.jpg";

function CodeComponent() {
  return (
    <div>
      <div className="w3-container w3-center"></div>

      <div id="canvas_div_pdf" className="w3-margin-top">
        <div
          className="w3-content w3-margin-top"
          style={{ maxWidth: "1400px" }}
        >
          <div className="w3-row-padding">
            <div className="w3-third ">
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                  <img src={safar} style={{ width: "100%" }} alt="Avatar" />
                  <div className="w3-display-bottomleft w3-container w3-text-black">
                    <h2
                      style={{
                        color: "white",
                        background: "teal",
                        width: "20rem",
                        textAlign: "center",
                        borderRadius: "10px",
                      }}
                    >
                      M.Shahzad Aslam
                    </h2>
                  </div>
                </div>
                <div className="w3-container">
                  <p>
                    <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                    <strong>Shift Engineer</strong>
                  </p>
                  <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                    Bahawalpur, PK
                  </p>
                  <p>
                    <a
                      href="mailto: safarabbas_2010@hotmail.com"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      shahzadaslam1991@gmail.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://wa.me/+923016005735"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-whatsapp fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      +923012972367
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel: +923016005735"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      +923012972367
                    </a>
                  </p>
                  <a href="https://www.facebook.com/profile.php?id=100063868455987">
                    <i className="fa fa-facebook-official w3-hover-opacity w3-margin-left w3-text-teal"></i>
                  </a>
                  <a href="https://www.instagram.com/safarabbas_2010/">
                    <i className="fa fa-instagram w3-hover-opacity w3-margin-left w3-text-teal"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/safar-abbas-a91090103">
                    <i className="fa fa-linkedin w3-hover-opacity w3-margin-left w3-text-teal "></i>
                  </a>
                  <a href="https://twitter.com/safarabbas_sk">
                    <i className="fa fa-twitter w3-hover-opacity w3-margin-left w3-text-teal"></i>
                  </a>
                  <hr></hr>

                  <p className="w3-large">
                    <b>
                      <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                      Skills
                    </b>
                  </p>
                  <p>Diesel Engine Operation</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>
                  <p>HSE</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: "50%" }}
                    >
                      <div className="w3-center w3-text-white">90%</div>
                    </div>
                  </div>
                  <p>MS Office</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: "50%" }}
                    >
                      90%
                    </div>
                  </div>
                  <p>web browsing</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: "30%" }}
                    >
                      30%
                    </div>
                  </div>
                  <br></br>

                  <p className="w3-large w3-text-theme">
                    <b>
                      <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                      Languages
                    </b>
                  </p>
                  <p>Urdu (Native)</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: "100%" }}
                    >
                      100%
                    </div>
                  </div>

                  <p>English</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: "60%" }}
                    >
                      60%
                    </div>
                  </div>
                  <p>Arabic</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: "30%" }}
                    >
                      30%
                    </div>
                  </div>
                  <br></br>
                  <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-duotone fa-circle-info fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    Personal Details
                  </h2>
                  <div className="w3-responsive">
                    <table className="w3-table-all">
                      <tr>
                        <th>Father Name</th>
                        <td>Muhammad aslam shahid</td>
                      </tr>
                      <tr>
                        <th>CNIC</th>
                        <td>31202-0374564-3</td>
                      </tr>
                      <tr>
                        <th>Nationality</th>
                        <td>Pakistani</td>
                      </tr>
                      <tr>
                        <th>Passport</th>
                        <td>DL1805643</td>
                      </tr>
                      <tr>
                        <th>Maritial Status</th>
                        <td>Married</td>
                      </tr>
                      <tr>
                        <th>Gender</th>
                        <td>Male</td>
                      </tr>
                      <tr>
                        <th>Religion</th>
                        <td>Islam</td>
                      </tr>
                    </table>
                  </div>
                  <hr></hr>
                </div>
              </div>
              <br></br>
            </div>

            <div className="w3-twothird">
              <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16">
                  <i className="fa fa-solid fa-user-tie fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                  Professional Summery
                </h2>
                <div className="w3-container">
                  <h6 className="w3-text-teal">
                    <i className="fa fa-solid fa-list fa-fw w3-margin-right "></i>
                    Major Responsibilities
                  </h6>

                  <p>
                    <i className="fa fa-solid fa-circle fa-fw w3-margin-right w3-text-teal"></i>{" "}
                    Shutdown plant / section of plant and handover safely for
                    maintenance as per SOP.
                  </p>
                  <p>
                    <i className="fa fa-solid fa-circle fa-fw w3-margin-right w3-text-teal"></i>
                    Safe and smooth operation of Fuel oil separators units and
                    Lube Oil Separators unit. (Alfa Laval).
                  </p>
                  <p>
                    <i className="fa fa-solid fa-circle fa-fw w3-margin-right w3-text-teal"></i>
                    Performing isolations / de-isolations of plant to achieve
                    safety from the system
                  </p>
                  <p>
                    <i className="fa fa-solid fa-circle fa-fw w3-margin-right w3-text-teal"></i>
                    Responsible to Operate Plant within defined Operating
                    Parameters to ensure the safe Plant Operation
                  </p>
                  <p>
                    <i className="fa fa-solid fa-circle fa-fw w3-margin-right w3-text-teal"></i>
                    Proven ability to work under pressure and deliver against
                    deadlines.
                  </p>
                  <p>
                    <i className="fa fa-solid fa-circle fa-fw w3-margin-right w3-text-teal"></i>
                    Operation, Monitoring and maintenance of Reverse Osmosis
                    plant
                  </p>
                  <p>
                    <i className="fa fa-solid fa-circle fa-fw w3-margin-right w3-text-teal"></i>
                    Perform safe Plant Start-up and Shut down Procedure
                  </p>
                  <p>
                    <i className="fa fa-solid fa-circle fa-fw w3-margin-right w3-text-teal"></i>
                    Maintain shift Operation log and reports related And
                    initiate Trip Report of Plant Failure or Shut down
                  </p>
                  <p>
                    <i className="fa fa-solid fa-circle fa-fw w3-margin-right w3-text-teal"></i>
                    Operation, Monitoring and chemical cleaning of RO plant.
                  </p>
                  <p>
                    <i className="fa fa-solid fa-circle fa-fw w3-margin-right w3-text-teal"></i>{" "}
                    Safe and smooth operation of pumps & Screw compressor
                  </p>

                  <hr></hr>
                </div>
              </div>

              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16">
                  <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                  Work Experience
                </h2>
                <div className="w3-container">
                  <h4 className="w3-opacity">
                    <b>
                      Shift Engineer, Najmat al Samawa, Iraq / Wartsila
                      (W20V32E) 29MW & CAT-3512
                    </b>
                  </h4>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                    October 2020 -{" "}
                    <span className="w3-tag w3-teal w3-round">Current</span>
                  </h6>
                  <hr></hr>
                </div>

                <div className="w3-container">
                  <h4 className="w3-opacity">
                    <b>
                      Shift Engineer, volka food international multan, pk /
                      Wartsila (W9L32 * 1 + 16V32E * 2) 18MW
                    </b>
                  </h4>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                    May-2017 - October 2020
                  </h6>
                  <hr></hr>
                </div>

                <div className="w3-container">
                  <h4 className="w3-opacity">
                    <b>
                      Shift engineer, deutz power solution at PEL, PK / Wartsila
                      ( W18V32E ) 6.8 + 1mW CAT-3512
                    </b>
                  </h4>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                    september 2016 - may 2017
                  </h6>
                  <hr></hr>
                </div>

                <div className="w3-container">
                  <h4 className="w3-opacity">
                    <b>
                      Shift Engineer, neelam jehlum hydro electric plant,
                      PK / Wartsila ( W9L32 ) 12MW + 1mW CAT-3512
                    </b>
                  </h4>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>may
                    2010 - aug 2015
                  </h6>
                  <hr></hr>
                </div>

                <div className="w3-container">
                  <h4 className="w3-opacity">
                    <b>
                      assistant mechanic, nishat power plant bhikhi, PK /
                      Daihatsu 165MW 1KW ( CAT-3512 * 5 )
                    </b>
                  </h4>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>feb
                    2007 - feb 2009
                  </h6>
                  <hr></hr>
                </div>
              </div>

              <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16">
                  <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                  Education
                </h2>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>B.Tech(hons) Auto & diesel</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>2009
                    - 2013
                  </h6>
                  <hr></hr>
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>DAE in mechanical</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>2004
                    - 2007
                  </h6>
                  <hr></hr>
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>Matriculation</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>2002
                    - 2004
                  </h6>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default CodeComponent;
