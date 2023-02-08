import { useFormik } from 'formik';
import ErrorMsg from './error-msg';
import { blogSchema } from './validation-schema';

const BlogForm = () => {
  // contact form
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.subject + "\n" + values.msg}`);
    resetForm()
  }
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', subject: '', msg: '' },
    validationSchema: blogSchema,
    onSubmit: handleOnSubmit,
  })

  return (
    <>
      <form onSubmit={handleSubmit} id="contacts-form" className="conatct-post-form">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="contact-icon p-relative contacts-name">
              <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
                type="text" placeholder="Name" />
              {touched.name && <ErrorMsg error={errors.name} />}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="contact-icon p-relative contacts-name">
              <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur}
                type="email" placeholder="Email" />
              {touched.email && <ErrorMsg error={errors.email} />}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact-icon p-relative contacts-email">
              <input id='subject' value={values.subject} onChange={handleChange} onBlur={handleBlur}
                type="text" placeholder="Subject" />
              {touched.subject && <ErrorMsg error={errors.subject} />}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact-icon p-relative contacts-message">
              <textarea name="msg" value={values.msg} onChange={handleChange}
                onBlur={handleBlur} id="comments" cols="30" rows="10"
                placeholder="Comments"></textarea>
              {touched.msg && <ErrorMsg error={errors.msg} />}
            </div>
          </div>
          <div className="col-xl-12">
            <button className="os-btn os-btn-black" type="submit">Post comment</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BlogForm;