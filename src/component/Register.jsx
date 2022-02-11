import React from 'react';

import { useForm } from "react-hook-form";



function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="container pt-5">
            <div className="row justify-content-sm-center pt-5">
                <div className="col-sm-6 shadow round pb-3">
                    <h1 className="text-center pt-3 text-secondary">Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="col-form-label">Name:</label>
                            <input type="text" className={`form-control ${errors.name && "invalid"}`}
                                {...register("name", { required: "Name is Required" })}
                                onKeyUp={() => {
                                    trigger("name");
                                }} />
                            {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Email:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.email && "invalid"}`}
                                {...register("email", {
                                    required: "Email is Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger("email");
                                }}
                            />
                            {errors.email && (
                                <small className="text-danger">{errors.email.message}</small>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Phone:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.phone && "invalid"}`}
                                {...register("phone", {
                                    required: "Phone is Required",
                                    pattern: {
                                        value:
                                            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                        message: "Invalid phone no",
                                    },
                                })} onKeyUp={() => { trigger("phone"); }} />
                            {errors.phone && (<small className="text-danger">{errors.phone.message}</small>
                            )}
                            {/* password */}
                            <div className="form-group">
                                <label className="col-form-label">Password:</label>
                                <input type="password" className={`form-control ${errors.password && "invalid"}`}
                                    {...register("password", {
                                        required: "Password is Required",
                                        pattern: {
                                            value:
                                                '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/',
                                            message: "Invalid password ",
                                        },
                                    })}
                                    onKeyUp={() => {
                                        trigger("password");
                                    }}
                                />
                                {errors.password && (
                                    <small className="text-danger">{errors.password.message}</small>
                                )}
                            </div>
                        </div>
                        <div className="form-group" />
                        <div className="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary ">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="d-flex justify-content-center text-danger">
                    <p className="text-danger ">{ }</p>
                    <span to="#" className="btn btn-primary col-4">Already registered? Login</span>
                </div>
            </div>
        </div>
    );
}


export default Register;