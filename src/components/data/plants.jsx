import React from 'react'

function Footer() {
  return (
    <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <a href="https://www.facebook.com/profile.php?id=100063868455987">
          <i className="fa fa-facebook-official w3-hover-opacity w3-margin-right"></i>
        </a>
        <a href="https://www.instagram.com/safarabbas_2010/">
          <i className="fa fa-instagram w3-hover-opacity w3-margin-right"></i>
        </a>

        <a href="https://www.linkedin.com/in/safar-abbas-a91090103">
          <i className="fa fa-linkedin w3-hover-opacity w3-margin-right"></i>
        </a>
        <a href="https://twitter.com/safarabbas_sk">
          <i className="fa fa-twitter w3-hover-opacity w3-margin-right"></i>
        </a>

        <hr></hr>
        <p style={{ display: "inline" }}>
          © Copyright{" "}
          <p style={{ display: "inline" }}>{new Date().getFullYear()}</p> | all
          rights reserverd by{" "}
          <a
            href="https://safarababs.github.io/safarweb/"
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            | Safar Abbas
          </a>
        </p>
      </footer>
  )
}

export default Footer