import './App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import Axios from 'axios';


function App() {
  

  // Controle dos cliques
  
  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password
    }).then((response) =>{
      alert(response.data.msg);
    });
    
  };


  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) =>{
      alert(response.data.msg);
    });
    
  };


  // Controle da validação dos dados
  const validationLogin = yup.object().shape({
    email: yup
    .string()
    .email("Não é um e-mail válido.")
    .required("Este campo é obrigatório."),
    password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres.")
    .required("Este campo é obrigatório."),

  });


  const validationRegister = yup.object().shape({
    email: yup
    .string()
    .email("Não é um e-mail válido.")
    .required("Este campo é obrigatório."),
    password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres.")
    .required("Este campo é obrigatório."),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não são iguais.")
    .required("Este campo é obrigatório."),

  });

  //HTML
  return (
    <div className="container">

      <h1>Login</h1>
      <Formik 
      initialValues={{email:'', password:''}} 
      onSubmit={handleClickLogin} 
      validationSchema={validationLogin}
      >
        <Form className='login-form'>
          <div className='login-form-group'>
            <Field name='email' className='form-field' placeholder='Email' />

            <ErrorMessage component="span" name="email" className='form-error' />

          </div>
          <div className='login-form-group'>
            <Field name='password' className='form-field' placeholder='Senha' />

            <ErrorMessage component="span" name="password" className='form-error' />

          </div>
          <button className='button' type='submit'>Login</button>

        </Form>
      </Formik>


      <h1>Cadastro</h1>
      <Formik 
      initialValues={{email:'', password:'', confirmPassword:''}} 
      onSubmit={handleClickRegister} 
      validationSchema={validationRegister}
      >
        <Form className='login-form'>
          <div className='login-form-group'>
            <Field name='email' className='form-field' placeholder='Email' />

            <ErrorMessage component="span" name="email" className='form-error' />

          </div>
          <div className='login-form-group'>
            <Field name='password' className='form-field' placeholder='Password' />

            <ErrorMessage component="span" name="password" className='form-error' />

          </div>
          <div className='login-form-group'>
            <Field name='confirmPassword' className='form-field' placeholder='Confirme sua senha' />

            <ErrorMessage component="span" name="confirmPassword" className='form-error' />

          </div>
          <button className='button' type='submit'>Cadastrar</button>

        </Form>
      </Formik>


    </div>
  );
}

export default App;
