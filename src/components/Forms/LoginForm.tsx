import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { RiLoginCircleFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required(),
    password: Yup.string().min(8, 'Too Short!').max(10, 'Tpp Long!').required()
})

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={LoginSchema}
            >
                {
                    (
                        { errors, touched }
                    ) => (
                        <Form className="flex flex-col gap-5" >
                            <div>
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    
                                    className="py-4 rounded-full px-40 font-some-type-mono text-center outline-none"
                                    placeholder="Enter Email"
                                />
                                {errors.email && touched.email ? (
                                    <div><p className="text-red-500 font-some-type-mono text-lg font-bold"  >{errors.email}</p></div>
                                ) : null}
                            </div>

                            <div className="bg-white flex items-center rounded-full " >
                                <Field
                                    id="password"
                                    name="password"
                                    type={showPassword ? ("text") : ("password")}
                                    className="py-4 rounded-full px-36 font-some-type-mono text-center outline-none"
                                    placeholder="Enter Password"
                                />

                                {
                                    showPassword ?
                                        (
                                            <>
                                                <FaEyeSlash onClick={() => { setShowPassword(!showPassword) }} />
                                            </>) :
                                        (
                                            <>
                                                <FaRegEye onClick={() => setShowPassword(!showPassword)} />
                                            </>)
                                }
                            </div>
                            {errors.password && touched.password ? (
                                    <div><p className="text-red-500 font-some-type-mono text-lg font-bold" >{errors.password}</p></div>
                                ) : null}
                            <div>
                                <p className="font-some-type-mono text-red-950 font-bold text-xl" >Forget Password</p>
                            </div>
                            <div className=" flex justify-center " >
                                <button type="submit" className="font-some-type-mono  bg-green-950 text-white px-32 py-3 rounded-lg flex items-center gap-3" >Login <RiLoginCircleFill /> </button>
                            </div>
                        </Form>
                    )
                }

            </Formik>
        </>
    )
}

export default LoginForm