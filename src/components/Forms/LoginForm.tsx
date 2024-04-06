import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { RiLoginCircleFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import {useAuth} from "../../context/AuthContext"

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required(),
    password: Yup.string().min(5, 'Too Short!').max(10, 'Tpp Long!').required()
})

const LoginForm = () => {

    const{login}=useAuth()
    const [showPassword, setShowPassword] = useState(false)

    
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={values => {
                    
                    const email=values.email
                    const password=values.password

                    login({email,password})
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