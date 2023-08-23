import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";


export const useSignUpForm = () => {
    const validationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email("Please enter a valid email")
            .required("Required"),
        password: Yup
            .string()
            .min(8)
            .matches(
                /^[a-zA-Z0-9!@#$%^&*()_+-]+$/,
                "Password must only contain valid characters"
            ),
        confirmPassword: Yup
            .string()
            .min(8)
            .matches(
                /^[a-zA-Z0-9!@#$%^&*()_+-]+$/,
                "Password must only contain valid characters"
            ),
        terms: Yup.boolean().oneOf([true], "Accept Terms & Conditions is required")
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                setLoading(true);
                setError(null);
                console.log("Submitting form with values:", values); // Add this line
                const response = await axios.post("/api/auth/signup", values);
                console.log(response);

            }
            catch (err) {
                setError(err);
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }
    });
    return { formik, error, loading };
};