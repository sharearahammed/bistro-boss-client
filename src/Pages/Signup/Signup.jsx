import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const{createuser} = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createuser(data.email,data.password)
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
        updateProfile(loggedUser,{
            displayName:data.name
        })
        .then(()=>{

        }).catch(error=>{
            console.log(error)
        })
    })
  };

  return (
    <>
    <Helmet>
        <title>
            Bistro Boss | Sign Up
        </title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-400">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-400">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$)/
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-400">First name is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-400">6 required</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-400">more than 20 is not required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-400">Password must have one upper case, one lower case, one number and one special caracter</p>
              )}
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Signup" />
            </div>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
