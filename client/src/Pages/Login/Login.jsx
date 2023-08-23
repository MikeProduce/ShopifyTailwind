import { Input } from "../../components/Input"
import { useLoginForm } from "../Login/formValidation"
import { Link } from "react-router-dom"

export const Login = () => {
    const { formik, error, loading } = useLoginForm()

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        {
                            error &&
                            <div className="text-red-500">{error.message}</div>
                        }
                        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
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
                            <div className="flex items-center justify-between">
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" disabled={formik.isSubmitting} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/SignUp" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login