import * as Yup from "yup";

export const resistationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Full name must be at least 3 characters")
        .max(40, "Full name must be at most 40 characters")
        .required("Please enter your full name."),
    email: Yup.string().email("Email must be a valid email").required(),
    password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .max(16, "Password is too long - should be 16 chars maximum."),
    confirmPassword: Yup.string()
        .required("No password provided.")
        .oneOf([Yup.ref("password"), null], "Password doesn't match."),
});

export const loginSchema = Yup.object({
    email: Yup.string().email("Email must be a valid email").required(),
    password: Yup.string()
        .min(6, "Password is too short - should be 6 chars minimum.")
        .max(16, "Password is too long - should be 16 chars maximum.")
        .required("No password provided."),
});
