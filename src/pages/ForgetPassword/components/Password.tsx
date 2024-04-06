import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { useAuth } from "../../../context/AuthContext"



const PasswordSchema = Yup.object().shape({
    password: Yup.string().min(5, 'Too Short!').max(10, 'Tpp Long!').required()
})

const Password = ({resetToken}:{resetToken:string}) => {

    const {resetpassword}=useAuth()
    return (
        <>
            <Formik
                initialValues={{ password: "" }}
                onSubmit={values => {
                    console.log("this is values", values)
                    const newPassword=values.password
                    resetpassword({resetToken,newPassword})
                }}
                validationSchema={PasswordSchema}
            >
                {
                    ({ errors, touched }) =>
                    (
                        <Form className="flex flex-col gap-10" >
                            <div >
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"

                                    className="py-4 rounded-full px-40 font-some-type-mono text-center outline-none"
                                    placeholder="Enter Password"
                                />
                                {errors.password && touched.password ? (
                                    <div><p className="text-red-500 font-some-type-mono text-lg font-bold"  >{errors.password}</p></div>
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

export default Password