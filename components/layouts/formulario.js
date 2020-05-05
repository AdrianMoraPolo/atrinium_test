import React, { useState } from 'react';
import { AvForm, AvGroup, AvInput, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Button, Label, Input } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

//CARTELES STEPPER

function getSteps() {
  return ['Tipo de registro', 'Rellene sus datos', 'Completamos su perfíl'];
}

//////


function Formulario() {

  const [person, setPerson] = React.useState('');
  const [error, setError] = React.useState();

  //hooks información usuario
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [nameS, setNameS] = useState('');
  const [email, setEmail] = useState('');
  const [naAdress, setNaAdress] = useState('');
  const [nuAdress, setNuAdress] = useState('');
  const [flAdress, setFlAdress] = useState('');
  const [woAdress, setWoAdress] = useState('');
  const [city, setCity] = useState('');
  const [nDocument, setNDocument] = useState('');
  const [country, setCountry] = useState('');
  const [way, setWay] = useState('');
  const [cif, setCif] = useState('');
  const [tDocument, setTDocument] = useState('');
  const [dni, setDni] = useState(false);
  const [passport, setPassport] = useState(false);

  // const [nif, setNif] = useState(false);

  //hooks errores
  const [formError, setFormError] = useState({});
  const [formError2, setFormError2] = useState({});
  const [formError3, setFormError3] = useState({});
  const [formError4, setFormError4] = useState({});
  const [formError5, setFormError5] = useState({});
  const [formError6, setFormError6] = useState({});
  const [formError7, setFormError7] = useState({});
  const [formError8, setFormError8] = useState({});
  const [formError9, setFormError9] = useState({});
  const [formErrorDni, setErrorDni] = useState({});


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();



  /////COMPROBACION/////

  const inputName = (e) => {
    setName(e.target.value);
    setFormError({ ...formError, name: false });
  }
  const inputLast = (e) => {
    setlastName(e.target.value);
    setFormError2({ ...formError2, lastName: false });
  }
  const inputEmail = (e) => {
    setEmail(e.target.value);
    setFormError3({ ...formError3, email: false });
  }
  const inputNDocument = (e) => {
    setNDocument(e.target.value);
    setFormError4({ ...formError4, nDocument: false });
  }
  const inputNaAdress = (e) => {
    setNaAdress(e.target.value);
    setFormError5({ ...formError5, naAdress: false });
  }
  const inputNuAdress = (e) => {
    setNuAdress(e.target.value);
    setFormError6({ ...formError6, nuAdress: false });
  }
  const inputCity = (e) => {
    setCity(e.target.value);
    setFormError7({ ...formError7, city: false });
  }
  const inputCif = (e) => {
    setCif(e.target.value);
    setFormError8({ ...formError8, cif: false });
  }
  const inputNameS = (e) => {
    setNameS(e.target.value);
    setFormError9({ ...formError9, nameS: false });
  }

  /////////////////


  const handleNext = () => {

    /////////>>>>>>>

    //Parte provisional, la función es pintar por log toda la información recogida con los hooks
    //Depende de si somos persona fisica o juridica nos pinta la información recogida
    //La función de este console.log es exclusiva para la prueba técnica

    if (activeStep === 2) {
      if (person === 'physical') {
        console.log('Name: ' + name + '\n', 'Last name: ' + lastName + '\n', 'Email: ' + email
          + '\n', 'Document: ' + nDocument + '\n', 'Country: ' + country + '\n', 'City: ' + city + '\n', 'Adress: '
          + way + ' ' + naAdress + ', ' + nuAdress + ', ' + flAdress + ', ' + woAdress);
      } else if (person === 'legal') {
        console.log('Societys Name: ' + name + '\n', 'CIF: ' + cif + '\n', 'Email: ' + email + '\n', 'Country: '
          + country + '\n', 'City: ' + city + '\n', 'Adress: ' + way + ' ' + naAdress + ', ' + nuAdress + ', '
          + flAdress + ', ' + woAdress);
      }
    }
    /////////>>>>>>


    if (activeStep === 0 && person.length !== 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setError(true);
    }

    if (person === 'physical' && activeStep === 1 && name.length !== 0 && lastName.length !== 0 && email.length !== 0 && nDocument.length > 9
      && naAdress.length !== 0 && nuAdress.length !== 0 && city.length !== 0 && country !== '') {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

    } else if (activeStep === 1 && person === 'physical') {
      if (name.length === 0) {
        setFormError({ ...formError, name: true });
      }
      if (lastName.length === 0) {
        setFormError2({ ...formError2, lastName: true });
      }
      if (email.length === 0) {
        setFormError3({ ...formError3, email: true });
      }
      if (nDocument.length < 9) {
        setFormError4({ ...formError4, nDocument: true });
      }
      if (naAdress.length === 0) {
        setFormError5({ ...formError5, naAdress: true });
      }
      if (nuAdress.length === 0) {
        setFormError6({ ...formError6, nuAdress: true });
      }
      if (city.length === 0) {
        setFormError7({ ...formError7, city: true });
      }
    }

    if (activeStep === 0) {
      setFormError({ ...formError, name: false });
      setFormError2({ ...formError2, lastName: false });
      setFormError3({ ...formError3, email: false });
      setFormError4({ ...formError4, nDocument: false });
      setFormError5({ ...formError5, naAdress: false });
      setFormError6({ ...formError6, nuAdress: false });
      setFormError7({ ...formError7, city: false });
      setFormError8({ ...formError8, cif: false });
      setFormError9({ ...formError9, nameS: false });
    }

    // if (tDocument === 'DNI') {

    //   setTDocument(dni_regex);
    //   if (dni_regex.text(dni) === true) {
    //     setErrorDni({ ...formErrorDni, tDocument: true })
    //   }
    // }


    // var CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
    // var NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;

    if (person === 'legal' && activeStep === 1 && nameS.length !== 0 && lastName.length !== 0 && email.length !== 0 && cif.length > 9
      && naAdress.length !== 0 && nuAdress.length !== 0 && city.length !== 0 && country !== '') {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

    } else if (activeStep === 1 && person === 'legal') {
      if (nameS.length === 0) {
        setFormError9({ ...formError9, nameS: true });
      }
      if (cif.length === 0) {
        setFormError8({ ...formError8, cif: true });
      }
      if (email.length === 0) {
        setFormError3({ ...formError3, email: true });
      }
      if (naAdress.length === 0) {
        setFormError5({ ...formError5, naAdress: true });
      }
      if (nuAdress.length === 0) {
        setFormError6({ ...formError6, nuAdress: true });
      }
      if (city.length === 0) {
        setFormError7({ ...formError7, city: true });
      }
    }



  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Posible reset para el formulario
  // const handleReset = () => {
  //   setActiveStep(0);
  // };


  //Guardo toda la información para usarla abajo sin ocupar espacio
  const typeWay = [
    { value: "", option: "----" },
    { value: "Avenida", option: "Avenida" },
    { value: "Calle", option: "Calle" },
    { value: "Carretera", option: "Carretera" },
    { value: "Paso", option: "Paso" },
    { value: "Pasaje", option: "Pasaje" },
    { value: "Plaza", option: "Plaza" },
    { value: "Travesía", option: "Travesía" },
    { value: "Urbanizacion", option: "Urbanizacion" },
  ]
  const nCountry = [
    { value: "", option: "----" },
    { value: "España", option: "España" },
    { value: "Francia", option: "Francia" },
    { value: "Alemania", option: "Alemania" },
    { value: "Portugal", option: "Portugal" },
    { value: "Inglaterra", option: "Inglaterra" },
  ]
  const documentType = [
    { value: "", option: "----" },
    { value: "DNI", option: "DNI" },
    { value: "NIE", option: "NIE" },
    { value: "Passport", option: "Passport" },
  ]


  return (


    <AvForm>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>

            </div>
          ) : (
              <div>

                {/* PRIMER PASO STEPPER*/}
                {activeStep === 0 && (

                  <div className="container-form bigcontainer ">
                    <AvRadioGroup className="form-group col-12 radioform" inline name="person" required>
                      <h4 className="h1">Formulario de registro</h4>
                      <p className="p1 pt-2">Necesitamos conocer toda su información para ofrecerle la máxima experiencia personalizada.
                      <br /> ¿Eres una persona física o jurídica?
                      </p>
                      <div className="radiocenter pt-4">
                        <AvRadio className="col-4" customInput label="Physical" value="physical" checked={person === 'Physical'}
                          onClick={() => setPerson('physical')} />
                        <AvRadio className="col-4" customInput label="Legal" value="legal" checked={person === 'Legal'}
                          onClick={() => setPerson('legal')} />
                      </div>
                    </AvRadioGroup>
                    {error && (
                      <div className="errorStep1">
                        <p>Escoge una opción para continuar</p>
                      </div>
                    )}
                  </div>

                )}
                {/* SEGUNDO PASO STEPPER */}
                {activeStep === 1 && (

                  <div className="row container-form fisica col-lg-12">
                    {/* COMPROBAMOS SI LA PERSONA HA ELEGIDO REGISTRARSE COMO PERSONA FÍSICA O JURIDICA
                        Y DEPENDIENDO DE LO QUE HAYA ELEGIDO LE APARECERAN UNOS CAMPOS DISPONIBLES U OTROS */}

                    {/* NOMBRE */}
                    {person === "physical" &&
                      <AvGroup className="form-group col-12 col-md-4">
                        <Label for="name">Nombre</Label>
                        <AvInput type="text" name="name" className="form-control" id="name" placeholder="John"
                          value={name} onChange={(e) => inputName(e)}
                        />
                        {formError.name && (
                          <p className="warning1">Introduce tu nombre</p>
                        )}
                      </AvGroup>
                    }
                    {/* APELLIDOS */}
                    {person === "physical" &&
                      <AvGroup className="form-group col-12 col-md-8">
                        <Label for="lastName">Apellidos</Label>
                        <AvInput className="form-control" name="lastName" id="lastName" placeholder="Smith"
                          value={lastName} onChange={(e) => inputLast(e)} />
                        {formError2.lastName && (
                          <p className="warning1">Introduce tus apellidos</p>
                        )}
                      </AvGroup>
                    }
                    {/* NOMBRE DE LA SOCIEDAD */}
                    {person === "legal" &&
                      <AvGroup className="form-group col-12">
                        <Label for="nameS">Nombre de la Sociedad</Label>
                        <AvInput type="text" name="nameS" className="form-control" id="nameS" placeholder="John Asociados"
                          value={nameS} onChange={(e) => inputNameS(e)}
                        />
                        {formError9.nameS && (
                          <p className="warning1">Necesitamos conocer el nombre de tu sociedad</p>
                        )}
                      </AvGroup>
                    }
                    {/* EMAIL */}
                    <AvGroup className="form-group col-12">
                      <Label for="email">Email</Label>
                      <AvInput type="email" name="email" className="form-control" id="email" placeholder="email@gmail.com"
                        value={email} onChange={(e) => inputEmail(e)} />
                      {formError3.email && (
                        <p className="warning1">Necesitamos tu email</p>
                      )}
                    </AvGroup>
                    {/* TIPO DE CALLE */}
                    <div className="form-group col-5">
                      <Label for="inputEmail1">Tipo de vía</Label>
                      <select className="form-control" value={way} onChange={(event) => setWay(event.target.value)}>
                        {typeWay.map(opt2 => (
                          <option value={opt2.value}>  {opt2.option} </option>
                        ))}
                      </select>
                    </div>
                    {/* NOMBRE CALLE */}
                    <AvGroup className="form-group col-7">
                      <Label for="inputEmail1">Vía</Label>
                      <Input className="form-control" id="inputEmail1" placeholder="Alcalá" value={naAdress}
                        onChange={(e) => inputNaAdress(e)} />
                      {formError5.naAdress && (
                        <p className="warning1">Necesitamos saber cual es tu dirección</p>
                      )}
                    </AvGroup>
                    {/* NUMERO DIRECCIÓN */}
                    <AvGroup className="form-group col-4">
                      <Label for="inputEmail1">Número</Label>
                      <Input type="email" className="form-control" id="inputEmail1" placeholder="10" value={nuAdress}
                        onChange={(e) => inputNuAdress(e)} />
                      {formError6.nuAdress && (
                        <p className="warning1">¿Dónde resides?</p>
                      )}
                    </AvGroup>
                    {/* PLANTA */}
                    <AvGroup className="form-group col-4">
                      <Label for="inputEmail1">Planta</Label>
                      <Input type="email" className="form-control" id="inputEmail1" placeholder="1º" value={flAdress}
                        onChange={(e) => setFlAdress(e.target.value)} />
                    </AvGroup>
                    {/* LETRA */}
                    <AvGroup className="form-group col-4">
                      <Label for="inputEmail1">Letra</Label>
                      <Input type="email" className="form-control" id="inputEmail1" placeholder="A" value={woAdress}
                        onChange={(e) => setWoAdress(e.target.value)} />
                    </AvGroup>
                    {/* PAIS */}
                    <div className="form-group col-5">
                      <Label for="inputEmail1">País</Label>
                      <select className="form-control" value={country} onChange={(event) => setCountry(event.target.value)}>
                        {nCountry.map(opt2 => (
                          <option value={opt2.value}>  {opt2.option} </option>
                        ))}
                      </select>
                      {formError6.country && (
                        <p className="warning1">Selecciona tu país</p>
                      )}
                    </div>
                    {/* CIUDAD */}
                    <AvGroup className="form-group col-7 col-md-7">
                      <Label for="">Población</Label>
                      <AvInput type="text" name="city" className="form-control" id="city" placeholder="City"
                        value={city} onChange={(e) => inputCity(e)} />
                      {formError7.city && (
                        <p className="warning1">¿Dónde resides?</p>
                      )}
                    </AvGroup>
                    {/* TIPO DE DOCUMENTO DE IDENTIDAD */}
                    {person === "physical" &&
                      <div className="form-group col-5">
                        <Label>Tipo de documento</Label>
                        <select className="form-control" value={tDocument} onChange={(event) => setTDocument(event.target.value)}>
                          {documentType.map(opt3 => (
                            <option value={opt3.value}>  {opt3.option} </option>
                          ))}
                        </select>
                        {formErrorDni.nameS && (
                          <p className="warning1">FALSO</p>
                        )}
                      </div>
                    }
                    {/* NUMERO DOCUMENTO */}
                    {person === "physical" &&
                      <AvGroup className="form-group col-12 col-md-7">
                        <Label for="nDocument">Número de documento</Label>
                        <AvInput type="text" name="nDocument" className="form-control" id="nDocument" placeholder="Document"
                          value={nDocument} onChange={(e) => inputNDocument(e)} />
                        {formError4.nDocument && (
                          <p className="warning1">Rellena tu documentación</p>
                        )}
                      </AvGroup>
                    }
                    {/* CIF */}
                    {person === "legal" &&
                      <AvGroup className="form-group col-12 col-md-7">
                        <Label for="cif">CIF</Label>
                        <AvInput type="text" name="cif" className="form-control" id="cif" placeholder="Document"
                          value={cif} onChange={(e) => inputCif(e)}
                        />
                        {formError8.cif && (
                          <p className="warning1">Necesitamos conocer tu CIF</p>
                        )}
                      </AvGroup>
                    }

                  </div>
                )}

                {/* ULTIMO PASO STEPPER */}
                {activeStep === 2 && (

                  <div className="finalPage">
                    <h5>Gracias por completar tu registro</h5>
                    <p>Tu perfíl ha sido registrado con éxito</p>
                  </div>
                )}

                {/* BUTTONS */}
                <div className="opacityb">
                  <button type="button" className="button2" onClick={handleNext}> {activeStep === steps.length - 1 ?
                    'Finalizar' : 'Siguiente'}</button>
                  <button type="button" className="button1" onClick={handleNext}> {activeStep === steps.length - 1 ?
                    'Finalizar' : 'Siguiente'}</button>
                  {activeStep !== 0 && (
                    <Button disabled={activeStep === 0} onClick={handleBack} className="backButton">Atrás</Button>
                  )}
                </div>
              </div>
            )}
        </div>
      </div>


      {/* POSIBLE DATEPICKER, AL FINAL POR DISEÑO DECIDÍ NO INCLUIRLO. PERO IGUALMENTE ESTA INSTALADA LA LIBRERÍA 
        Y SE PUEDE USAR PERFECTAMENTE */}
      {/* <AvGroup className="form-group row">
        <Label for="example-date-input" className="col-2 col-form-label">Date</Label>
        <div className="col-10">
          <Input className="form-control" type="date" value="2011-08-19" id="example-date-input"/>
        </div>
      </AvGroup> */}


    </AvForm >
  )
}

export default Formulario;