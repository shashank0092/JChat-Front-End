import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { RiLoginCircleFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";


const RegisterSchema = Yup.object().shape({
    name: Yup.string().required(),
    about: Yup.string().max(15, "Too Long!").required(),
    email: Yup.string().email("Invalid Mail").required(),
    phoneNumber: Yup.number().min(10, "Too Short!!").max(12, "Too Long!!").required(),
    password: Yup.string().min(8, 'Too Short!').max(10, 'Tpp Long!').required()
})


const DetailsForm = () => {
    return (
        <>
            <div>
                <Formik
                    initialValues={{
                        name: "",
                        about: "",
                        email: "",
                        phoneNumber: "",
                        password: ""
                    }}

                    onSubmit={values => {
                        console.log(values)
                    }}

                    validationSchema={RegisterSchema}
                >
                    {
                        (
                            { errors, touched }
                        ) => (
                            <Form>
                                <div className='flex flex-col justify-center gap-20' >
                                    <div className='flex gap-32' >
                                        <div className='flex flex-col gap-10' >
                                            <div  >

                                                <div>
                                                    <p className='text-xl font-some-type-mono' >Name</p>
                                                </div>
                                                <div>
                                                    <Field
                                                        id="name"
                                                        name="name"
                                                        type="name"

                                                        className="py-4 rounded-xl px-32 font-some-type-mono text-center outline-none"

                                                    />
                                                    {errors.name && touched.name ? (
                                                        <div><p className="text-red-500 font-some-type-mono text-lg font-bold"  >{errors.name}</p></div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <p className='text-xl font-some-type-mono'>Email</p>
                                                </div>
                                                <div>
                                                    <Field
                                                        id="email"
                                                        name="email"
                                                        type="email"

                                                        className="py-4 rounded-xl px-32 font-some-type-mono text-center outline-none"

                                                    />
                                                    {errors.email && touched.email ? (
                                                        <div><p className="text-red-500 font-some-type-mono text-lg font-bold"  >{errors.email}</p></div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <p className='text-xl font-some-type-mono'>Password</p>
                                                </div>
                                                <div>
                                                    <Field
                                                        id="password"
                                                        name="password"
                                                        type="password"

                                                        className="py-4 rounded-xl px-32 font-some-type-mono text-center outline-none"

                                                    />
                                                    {errors.password && touched.password ? (
                                                        <div><p className="text-red-500 font-some-type-mono text-lg font-bold"  >{errors.password}</p></div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-10' >
                                            <div >
                                                <div>
                                                    <p className='text-xl font-some-type-mono'>About</p>
                                                </div>
                                                <div>
                                                    <Field
                                                        id="about"
                                                        name="about"
                                                        type="text"

                                                        className="py-4 rounded-xl px-32 font-some-type-mono text-center outline-none"

                                                    />
                                                    {errors.about && touched.about ? (
                                                        <div><p className="text-red-500 font-some-type-mono text-lg font-bold"  >{errors.about}</p></div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <p>Phone No</p>
                                                </div>
                                                <div>
                                                <Field
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    type="number"

                                                    className="py-4 rounded-xl px-32 font-some-type-mono text-center outline-none"
                                                   
                                                />
                                                {errors.phoneNumber && touched.phoneNumber ? (
                                                    <div><p className="text-red-500 font-some-type-mono text-lg font-bold"  >{errors.phoneNumber}</p></div>
                                                ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center gap-5' >

                                            <div className='w-96   flex justify-center' > 
                                                <img src="https://lh3.googleusercontent.com/a/ACg8ocIeLMQsUtbkaibpEqjroWbELP2mTaJ32VV-8mYzUjn7SRo=s96-c" alt="shukla" className='rounded-full'  />
                                            </div>
                                           <div className='' >
                                           <Field
                                                id="avtar"
                                                name="avtar"
                                                type="file"
                                                className="
                                                w-36
                                                font-some-type-mono text-center outline-none "
                                                placeholder="Upload File"
                                            /> 
                                           </div>
                                        </div>

                                    </div>
                                    <div className='text-center' >
                                        <button className='bg-green-950 text-white py-5 px-10 rounded-xl' >Submit</button>
                                    </div>
                                </div>
                            </Form>
                        )
                    }


                </Formik>
            </div>
        </>
    )
}

export default DetailsForm