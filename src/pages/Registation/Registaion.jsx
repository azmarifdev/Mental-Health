import {useFormik} from "formik";
import {resistationSchema} from "../../schemas";
import {Link, useNavigate} from "react-router-dom";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";
import {useUserContext} from "../../context/AuthProvider";
import {useEffect, useState} from "react";

const Registation = () => {
    const {token} = useUserContext();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token]);

    const initialResisterValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
        useFormik({
            initialValues: initialResisterValues,
            validationSchema: resistationSchema,
            onSubmit: async (formValues, action) => {
                if (!file) {
                    return toast.error("Profile picture is required.");
                }

                const {name, email, password} = formValues;

                try {
                    const formData = new FormData();
                    formData.append("image", file);

                    fetch(
                        "https://api.imgbb.com/1/upload?key=2f212d1835f034b597e27b088435a1cc",
                        {
                            method: "POST",
                            body: formData,
                        }
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.success) {
                                fetch(`${config.base_url}/user/create`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        name,
                                        email,
                                        password,
                                        avatar: data.data.display_url,
                                    }),
                                })
                                    .then((res) => res.json())
                                    .then((dt) => {
                                        if (dt.success) {
                                            toast.success(
                                                "Account created successfully."
                                            );
                                            action.resetForm();
                                            setFile(null);
                                            navigate("/login");
                                        } else {
                                            toast.error(
                                                dt.message || "Registration failed"
                                            );
                                        }
                                    });
                            }
                        });
                } catch (error) {
                    toast.error("Something went wrong.");
                }
            },
        });

    return (
        <div className="container py-10 md:py-16">
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
                <section className="section-block p-6 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                        Create Account
                    </p>
                    <h1 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
                        Join Mental Health and build a calmer <span>daily rhythm</span>
                    </h1>
                    <p className="desc mt-4">
                        Register once to save your mood insights, journal
                        records, and guided wellness progress.
                    </p>
                </section>

                <section className="glass-card p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-white">Sign Up</h2>

                    <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                        <div className="flex justify-center">
                            <label htmlFor="file" className="cursor-pointer">
                                <img
                                    src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                    }
                                    className="h-24 w-24 rounded-2xl object-cover ring-2 ring-white/20"
                                    alt="profile"
                                />
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    accept=".png,.jpg,.jpeg"
                                    className="hidden"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </label>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm text-slate-200" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="w-full rounded-xl px-4 py-2.5"
                                placeholder="Your name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            {errors.name && touched.name && (
                                <p className="mt-1 text-sm text-rose-300">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="mb-1 block text-sm text-slate-200" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="w-full rounded-xl px-4 py-2.5"
                                placeholder="you@example.com"
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
                                className="mb-1 block text-sm text-slate-200"
                                htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="w-full rounded-xl px-4 py-2.5"
                                placeholder="Minimum 6 characters"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            {errors.password && touched.password && (
                                <p className="mt-1 text-sm text-rose-300">{errors.password}</p>
                            )}
                        </div>

                        <div>
                            <label
                                className="mb-1 block text-sm text-slate-200"
                                htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                className="w-full rounded-xl px-4 py-2.5"
                                placeholder="Re-enter password"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            {errors.confirmPassword && touched.confirmPassword && (
                                <p className="mt-1 text-sm text-rose-300">
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>

                        <button type="submit" className="btn-primary w-full">
                            Create Account
                        </button>

                        <p className="text-sm text-slate-300">
                            Already have an account?{" "}
                            <Link to="/login" className="font-semibold text-sky-200 hover:text-white">
                                Login
                            </Link>
                        </p>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Registation;
