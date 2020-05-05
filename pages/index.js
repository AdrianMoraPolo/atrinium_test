import React from 'react';
import '../assets/css/style.css';
import FormDate from '../components/layouts/formulario';

const App = () => (
  <div className="fondo container">
    <div className="row">
      <div className="imageAtm col-lg-5 ">
        <div className="logoAtri">
          <img src="atrinium-logo.svg" />
        </div>
      </div>


      <div className="col-lg-7">
        <FormDate />
      </div>



    </div>{/* //fin row */}

  </div>
)

export default App;
