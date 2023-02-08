import LoginForm from '../common/form/login-form';

const LoginArea = () => {
  return (
    <>
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Login From Here</h3>
                {/* login form start */}
                <LoginForm/>
                {/* login form end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginArea;