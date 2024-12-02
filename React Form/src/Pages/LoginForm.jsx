import { useFormik } from "formik";
import TextInput from "../components/TextInput";

export const LoginForm = ({ onLoginSuccess }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(`Email: ${values.email}\nPassword: ${values.password}`);
      onLoginSuccess();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto p-6 rounded-lg shadow-md space-y-4 backdrop-blur-lg bg-opacity-40"
    >
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Login Form
      </h1>
      <TextInput
        label="Email Address"
        id="email"
        type="email"
        formik={formik}
      />
      <TextInput
        label="Password"
        id="password"
        type="password"
        formik={formik}
      />
      <button
        type="submit"
        className="w-full py-3 px-6 text-white rounded-md transition-all"
        style={{
          background: "linear-gradient(to right, #003B5C 50%, #D72D2F 50%)",
          border: "2px solid #003B5C",
        }}
      >
        Login
      </button>
    </form>
  );
};
