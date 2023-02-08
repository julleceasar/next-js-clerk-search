import { useFormik } from 'formik';
import Link from 'next/link';
import ErrorMsg from './error-msg';
import { registerSchema } from './validation-schema';

const RegisterForm = () => {
  // contact form
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.password}`);
    resetForm()
  }
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: registerSchema,
    onSubmit: handleOnSubmit,
  })
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username <span>**</span></label>
        <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
          placeholder="Enter Username" type="text" />
        {touched.name && <ErrorMsg error={errors.name} />}

        <label htmlFor="email-id">Email Address <span>**</span></label>
        <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} 
        placeholder="Email address..." type="email" />
        {touched.email && <ErrorMsg error={errors.email} />}

        <label htmlFor="pass">Password <span>**</span></label>
        <input id="pass" name='password' value={values.password} onChange={handleChange} 
        onBlur={handleBlur} type="password" placeholder="Enter password..." />
        {touched.password && <ErrorMsg error={errors.password} />}

        <div className="mt-10"></div>
        <button className="os-btn w-100">Register Now</button>
        <div className="or-divide"><span>or</span></div>
        <Link href="/login">
          <a className="os-btn os-btn-black w-100">login Now</a>
        </Link>
      </form>
    </>
  );
};

export default RegisterForm;