import RegisterForm from '../common/form/register-form';

const RegisterArea = () => {
  return (
    <>
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Signup From Here</h3>
                {/* register form start */}
                <RegisterForm/>
                {/* register form end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterArea;