import { useContext } from "react";
import { AuthContext } from "../../provaider/AuthProvider/AuthProvaider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {singinUser, googleSingin} = useContext(AuthContext)
  const naviget = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);

    singinUser(email, pass)
    .then(result => {
      console.log(result.user)
      e.target.reset()
      naviget('/')
    })
    .catch(error => console.log(error.message))
  };

  const handleGoogleSingin =()=>{
    googleSingin()
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  return (
    <div>
      <div className="my-20 flex justify-center ">
        <div className="hero  bg-base-200">
          <div className="hero-content">
            <div className="card shrink-0 w-full p-5 max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div>
              <button onClick={handleGoogleSingin} className="btn">Google</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
