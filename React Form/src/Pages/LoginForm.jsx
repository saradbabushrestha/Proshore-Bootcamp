import { useFormik } from "formik";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto p-6 rounded-lg shadow-md space-y-4 backdrop-blur-lg bg-opacity-40"
    >
      <div>
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Fantasy NPL Login Form
        </h1>
      </div>
      <div>
        <label htmlFor="email" className="block text-white font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-white font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

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
