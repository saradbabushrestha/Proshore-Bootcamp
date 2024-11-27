import { useFormik } from "formik";

export const SignupForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      favouriteTeam: "",
      gender: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
      onSubmit();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto p-6 rounded-lg shadow-md space-y-4 backdrop-blur-lg bg-opacity-40"
    >
      <div>
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Fantasy NPL Signup Form
        </h1>
        <label
          htmlFor="firstName"
          className="block text-white font-medium mb-1"
        >
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-white font-medium mb-1">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white font-medium mb-1">
          Email Address
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
        <label htmlFor="team" className="block text-white font-medium mb-1">
          Favourite Team
        </label>
        <select
          id="team"
          name="team"
          onChange={formik.handleChange}
          value={formik.values.team}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select your team
          </option>
          <option value="Kathmandu Rayzrs">Kathmandu Rayzrs</option>
          <option value="Biratnagar City FC">Biratnagar City FC</option>
          <option value="Lalitpur City FC">Lalitpur City FC</option>
          <option value="Pokhara Thunders">Pokhara Thunders</option>
          <option value="Dhangadhi FC">Dhangadhi FC</option>
          <option value="Chitwan FC">Chitwan FC</option>
          <option value="Butwal Lumbini FC">Butwal Lumbini FC</option>
          <option value="FC Far West">FC Far West</option>
        </select>
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
      <div>
        <label
          htmlFor="confirmpassword"
          className="block text-white font-medium mb-1"
        >
          Confirm Password
        </label>
        <input
          id="confirmpassword"
          name="confirmpassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmpassword}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-white font-medium mb-1">Gender</label>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input
              id="male"
              name="gender"
              type="radio"
              value="Male"
              onChange={formik.handleChange}
              checked={formik.values.gender === "Male"}
              className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="male" className="ml-2 text-white">
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="female"
              name="gender"
              type="radio"
              value="Female"
              onChange={formik.handleChange}
              checked={formik.values.gender === "Female"}
              className="h-4 w-4 text-pink-500 border-gray-300 focus:ring-2 focus:ring-pink-500"
            />
            <label htmlFor="female" className="ml-2 text-white">
              Female
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 text-white rounded-md transition-all"
        style={{
          background: "linear-gradient(to right, #003B5C 50%, #D72D2F 50%)",
          border: "2px solid #003B5C",
        }}
      >
        Signup
      </button>
    </form>
  );
};
