import { useFormik } from 'formik';
import validationSchema from './validations';


function SignUp() {
  const {handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema
  })
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />

        {errors.email && touched.email && <div>{errors.email}</div>}

        <br /><br />

        <label htmlFor="password">Password</label>
        <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />

        {errors.password && touched.password &&<div>{errors.password}</div>}

        <br /><br />

        <label htmlFor="confirmPassword">confirmPassword</label>
        <input name="confirmPassword"onChange={handleChange} value={values.confirmPassword} onBlur={handleBlur} />

        {errors.confirmPassword && touched.confirmPassword && <div>{errors.confirmPassword}</div>}

        <br /><br />

        <button type="submit">Submit</button>

        <br /><br />

        {JSON.stringify(values)}
      </form>
      


    </div >
  );
}

export default SignUp;
