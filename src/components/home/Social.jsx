import React from "react";

/* <---- THIS LINK IS FOR THE UIL ICONS ---->*/
/* https://coderthemes.com/hyper/creative/icons-unicons.html */

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/jose.codes01/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      
      <a
        href="https://github.com/joseg76"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://linkedin.com/in/jose-gomez-betancourt-978b61231" /*www.linkedin.com/in/jose-gomez-betancourt-978b61231 */
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

    </div>
  );
};

export default Social;
