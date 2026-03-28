/* eslint-disable react/no-unescaped-entities */
import {useFormik} from "formik";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {loginSchema} from "../../schemas";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";
import {useUserContext} from "../../context/AuthProvider";
import {useEffect} from "react";

const LoginPage = () => {
    const {setToken, setLoading, token} = useUserContext();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const initialLoginValues = {
        email: "",
        password: "",
    };

    const handleCopy = async (value, label) => {
        try {
            await navigator.clipboard.writeText(value);
            toast.success(`${label} copied`);
        } catch (err) {
            toast.error(`Could not copy ${label.toLowerCase()}`);
        }
    };

    useEffect(() => {
        if (token) {
            navigate(from, {replace: true});
        }
    }, [token]);

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
        useFormik({
            initialValues: initialLoginValues,
            validationSchema: loginSchema,
            onSubmit: (formValues, action) => {
                const email = formValues.email.trim().toLowerCase();
                const password = formValues.password;

                fetch(`${config.base_url}/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({email, password}),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.success) {
                            localStorage.setItem(
                                "accessToken",
                                data.data.accessToken
                            );
                            setToken(data.data.accessToken);
                            setLoading(false);
                            navigate(from, {replace: true});
                            toast.success("User logged successfully.");
                            action.resetForm();
                        } else {
                            return toast.error(
                                data?.errorMessage?.[0]?.message ||
                                    "Login failed"
                            );
                        }
                    })
                    .catch(() => {
                        return toast.error("Something went wrong.");
                    });
            },
        });

    return (
        <div className="container flex min-h-screen items-center py-10 md:py-12">
            <div className="grid w-full gap-6 lg:grid-cols-2">
                <section className="section-block p-6 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                        Welcome Back
                    </p>
                    <h1 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
                        Sign in and continue your <span>wellness journey</span>
                    </h1>
                    <p className="desc mt-4 max-w-xl">
                        Access your journal history, mood analytics, and guided
                        sessions from one place.
                    </p>
                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-white">Demo account</p>
                        <div className="mt-2 space-y-2 text-sm text-slate-300">
                            <div className="flex items-center justify-between gap-3 rounded-lg bg-white/5 px-3 py-2">
                                <p>
                                    Email: <b className="text-slate-100">mentalhealth@gmail.com</b>
                                </p>
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleCopy("mentalhealth@gmail.com", "Email")
                                    }
                                    className="rounded-md bg-sky-400/20 px-2.5 py-1 text-xs font-semibold text-sky-100 hover:bg-sky-400/30">
                                    Copy
                                </button>
                            </div>
                            <div className="flex items-center justify-between gap-3 rounded-lg bg-white/5 px-3 py-2">
                                <p>
                                    Password: <b className="text-slate-100">mentalhealth</b>
                                </p>
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleCopy("mentalhealth", "Password")
                                    }
                                    className="rounded-md bg-sky-400/20 px-2.5 py-1 text-xs font-semibold text-sky-100 hover:bg-sky-400/30">
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="glass-card p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-white">Sign In</h2>
                    <p className="mt-1 text-sm text-slate-300">
                        Use your account details to continue.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div>
                            <label htmlFor="email" className="mb-1 block text-sm text-slate-200">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl px-4 py-2.5"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            {errors.email && touched.email && (
                                <p className="mt-1 text-sm text-rose-300">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-1 block text-sm text-slate-200">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                className="w-full rounded-xl px-4 py-2.5"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            {errors.password && touched.password && (
                                <p className="mt-1 text-sm text-rose-300">{errors.password}</p>
                            )}
                        </div>

                        <button type="submit" className="btn-primary w-full">
                            Login
                        </button>

                        <p className="text-sm text-slate-300">
                            New here?{" "}
                            <Link to="/registration" className="font-semibold text-sky-200 hover:text-white">
                                Create an account
                            </Link>
                        </p>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default LoginPage;
