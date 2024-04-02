import { useContext } from "react";
import { AuthContext } from "../../provaider/AuthProvider/AuthProvaider";

const Register = () => {
  const {createUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass, name);

    // cearte user in firebase
    createUser(email, pass)
    .then(result => console.log(result.user))
    .catch(error => console.log(error.message))
  };
  return (
    <div className="my-20">
      <div  className="hero  bg-base-200 ">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
