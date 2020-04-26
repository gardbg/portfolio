import React from 'react';

const Footer = (props) => {
  console.log(props);

  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row mt-5">
          <div className="col copyright">
            <p className=""><small className="text-white-50">© 2020. Gard Grønvik.</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;