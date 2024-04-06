import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { useAuth } from "../../../context/AuthContext"


const EmailSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required")
})
const Email = () => {

    const {requestforgetpassword}=useAuth()
    return (
        <>
            <Formik
                initialValues={{
                    email: ""
                }}

                onSubmit={values => {
                    const email=values.email
                    requestforgetpassword({email})
                }}
                validationSchema={EmailSchema}
            >

                {
                    ({ errors, touched }) =>
                    (
                        <Form className="flex flex-col gap-10" >
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
                            <div className=" flex justify-center " >
                                <button type="submit" className="font-some-type-mono  bg-green-950 text-white px-32 py-3 rounded-lg flex items-center gap-3" >Submit </button>
                            </div>
                        </Form>
                    )
                }

            </Formik>
        </>
    )
}

export default Email