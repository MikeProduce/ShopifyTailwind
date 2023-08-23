
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
// import { FormikProps } from "formik"
import { useSignUpForm } from "./formValidation"

export const SignUp = () => {
    const { formik, error, loading } = useSignUpForm()

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit} >
                            {
                                error &&
                                <div className="text-red-500">{error.message}</div>
                            }
                            <Input
                                label="Email"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                required={true}
                                htmlFor="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.errors.email}
                            />
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                required={true}
                                htmlFor="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.errors.password}
                            />
                            <Input
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                required={true}
                                htmlFor="confirmPassword"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                error={formik.errors.confirmPassword}
                            />
                            <button type="submit" disabled={formik.isSubmitting} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/Login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp