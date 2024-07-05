import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Formik, Form } from "formik";

// import * as Yup from "yup";

export const meta: MetaFunction = () => {
  return [
    { title: "Form validation using Formik and Yup" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string()
//     .min(4, "minimum 4  characters are reqired")
//     .max(8, "password cant be more than 8 charatcters")
//     .required("Reqired"),
// });

export default function Index() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="bg-zinc-400 p-3 w-96 rounded-lg shadow-sm shadow-white">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setTimeout(() => {
                setSubmitting(false);
                alert("form is validated, Submitting form ");
              }, 1000);
            }}
          >
            {(formik) => {
              const {
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                handleBlur,
                isValid,
                dirty,
              } = formik;
              return (
                <>
                  {/* <Form action="" method="post" onSubmit={handleSubmit}> */}
                  {isSubmitting ? (
                    <div className="text-2xl ">Submitting</div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your email"
                        className={`border border-gray-300 rounded-md p-2 outline-none ${
                          errors.email && touched.email ? "" : undefined
                        }`}
                      />
                      {errors.email && touched.email && (
                        <span className="error text-red-600">
                          {errors.email}
                        </span>
                      )}

                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your password"
                        // className="border border-gray-300 rounded-md p-2 outline-none"
                        className={`border border-gray-300 rounded-md p-2 outline-none ${
                          errors.password && touched.password ? "" : undefined
                        }`}
                      />
                      {errors.password && touched.password && (
                        <span className="error text-red-600">
                          {errors.password}
                        </span>
                      )}

                      <button
                        type="submit"
                        className={`border bg-zinc-950 text-white border-gray-700 rounded-md p-2 hover:bg-zinc-700 hover:text-white ${
                          dirty && isValid
                            ? ""
                            : "border bg-zinc-950 text-white border-gray-700 rounded-md p-2 hover:bg-zinc-700 hover:text-white disabled"
                        }`}
                        disabled={!(dirty && isValid)}
                        onClick={handleSubmit}
                      >
                        SignUp
                      </button>

                      <span>
                        Already have an Account?{" "}
                        <Link to="" className="text-blue-700 underline">
                          Log In
                        </Link>
                      </span>
                    </div>
                  )}
                  {/* </Form> */}
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}
