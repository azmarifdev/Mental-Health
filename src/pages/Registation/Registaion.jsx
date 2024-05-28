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
            onSubmit: async (values, action) => {
                if (!file) {
                    return toast.error("Profile picture is required.");
                }
                const {name, email, password} = values;
                try {
                    let avatar = "";
                    const formData = new FormData();
                    formData.append("image", file);
                    fetch(
                        `https://api.imgbb.com/1/upload?key=2f212d1835f034b597e27b088435a1cc`,
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
                                            navigate("/login");
                                        } else {
                                            toast.error(dt.message);
                                            console.log(dt);
                                        }
                                    });
                            }
                        });
                } catch (error) {
                    console.log(error);
                }
            },
        });

    return (
        <div className="bg-gray-950">
            <div className="h-screen w-full  py-12 pt-16">
                <div className="container ">
                    <div className=" flex flex-col justify-center py-14">
                        <div className="relative py-3  md:w-[450px] sm:mx-auto mx-2">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-pink-300 shadow-lg 
                        transform  -rotate-6 rounded-3xl"></div>
                            <div className="relative px-4 py-7 bg-gray-50 shadow-lg rounded-3xl sm:p-10">
                                <div className="max-w-lg mx-auto">
                                    <div>
                                        <h2 className="text-2xl text-gray-700 font-semibold">
                                            Sign In on{" "}
                                            <span>Mental Health</span>
                                        </h2>
                                    </div>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="divide-y divide-gray-200">
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="flex justify-center">
                                                {file ? (
                                                    <div className="w-full flex justify-center items-center flex-col">
                                                        <label
                                                            htmlFor="file"
                                                            className="relative">
                                                            <img
                                                                src={URL.createObjectURL(
                                                                    file
                                                                )}
                                                                className="h-24 w-24 rounded-full object-cover"
                                                                alt="profile"
                                                            />
                                                            <input
                                                                type="file"
                                                                name="file"
                                                                id="file"
                                                                accept=".png,.jpg,.jpeg"
                                                                className="hidden"
                                                                onChange={(e) =>
                                                                    setFile(
                                                                        e.target
                                                                            .files[0]
                                                                    )
                                                                }
                                                            />
                                                        </label>
                                                    </div>
                                                ) : (
                                                    <div className="w-full flex justify-center items-center flex-col p-3">
                                                        <label
                                                            htmlFor="file"
                                                            className="relative">
                                                            <img
                                                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                                                className="h-24 w-24 rounded-full object-cover"
                                                                alt="profile"
                                                            />

                                                            <input
                                                                type="file"
                                                                name="profileImg"
                                                                id="file"
                                                                accept=".png,.jpg,.jpeg"
                                                                className="hidden"
                                                                onChange={(e) =>
                                                                    setFile(
                                                                        e.target
                                                                            .files[0]
                                                                    )
                                                                }
                                                            />
                                                        </label>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="relative mb-1">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none "
                                                    placeholder="Enter name.."
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                    Name
                                                </label>
                                                {errors.name &&
                                                    touched.name && (
                                                        <p className="text-red-600 text-sm">
                                                            {errors.name}
                                                        </p>
                                                    )}
                                            </div>

                                            <div className="relative">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2  border-gray-300 text-gray-900 focus:outline-none "
                                                    placeholder="Enter email.."
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-0 -top-3.5  text-gray-600 text-base peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600  peer-focus:text-sm">
                                                    Email Address
                                                </label>
                                                {errors.email &&
                                                    touched.email && (
                                                        <p className="text-red-600 text-sm">
                                                            {errors.email}
                                                        </p>
                                                    )}
                                            </div>

                                            <div className="relative ">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none "
                                                    placeholder="Enter password.."
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                <label
                                                    htmlFor="password"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                    Password
                                                </label>
                                                {errors.password &&
                                                    touched.password && (
                                                        <p className="text-red-600 text-sm">
                                                            {errors.password}
                                                        </p>
                                                    )}
                                            </div>

                                            <div className="relative ">
                                                <input
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    type="password"
                                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none "
                                                    placeholder="Confirm password.."
                                                    value={
                                                        values.confirmPassword
                                                    }
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                <label
                                                    htmlFor="confirmPassword"
                                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                    Confirm Password
                                                </label>
                                                {errors.confirmPassword &&
                                                    touched.confirmPassword && (
                                                        <p className="text-red-600 text-sm">
                                                            {
                                                                errors.confirmPassword
                                                            }
                                                        </p>
                                                    )}
                                            </div>

                                            <div className="relative">
                                                <button
                                                    type="submit"
                                                    className="btn-primary  px-4 py-1.5 w-full">
                                                    Sign Up Now
                                                </button>
                                            </div>
                                            <p className="text-gray-900">
                                                Already have an account?{" "}
                                                <Link
                                                    to="/login"
                                                    className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1">
                                                    <span> Login here.</span>
                                                </Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            1
        </div>
    );
};

export default Registation;
