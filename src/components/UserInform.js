
import { useFormik } from 'formik';


function UserInform() {
  const {handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: 'Zeycan',
      lastName: 'Gürer',
      email: 'a@g.com',
      gender: 'female',
      hobies: [],
      country: 'tr'
    },
    onSubmit: (values) => {
      console.log(values);
    }
  })
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" value={values.firstName} placeholder="Jane" onChange={handleChange} />

        <br /><br />

        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" value={values.lastName} placeholder="Doe" onChange={handleChange} />

        <br /><br />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="jane@acme.com"
          onChange={handleChange}
          value={values.email}
        />

        <br /><br />

        <div>
          <input type="checkbox" name='hobies' value="Football" onChange={handleChange} />
          Football
        </div>
        <div>
          <input type="checkbox" name='hobies' value="Cinema" onChange={handleChange} />
          Cinema
        </div>
        <div>
          <input type="checkbox" name='hobies' value="Photography" onChange={handleChange} />
          Photography
        </div>

        <br /><br />

        <select name='country' onChange={handleChange} value={values.country} >
          <option value="tr">Türkiye</option>
          <option value="uk">UK</option>
          <option value="usa">USA</option>
        </select>

        <br /><br />

        <span>Female</span>
        <input type="radio" name="gender" value={"female"} onChange={handleChange} checked={values.gender === "female"} />
        <span>Male</span>
        <input type="radio" name="gender" value={"male"} onChange={handleChange} checked={values.gender === "male"} />

        <br /><br />

        <button type="submit">Submit</button>

        <br /><br />

        {JSON.stringify(values)}
      </form>
    </div >
  );
}

export default UserInform;
