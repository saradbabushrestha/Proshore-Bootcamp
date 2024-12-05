import React, { useState } from "react";
import NepaliDate from "nepali-datetime";

const DateOfBirth = ({ formik }) => {
  const [englishDate, setEnglishDate] = useState("");
  const [nepaliDate, setNepaliDate] = useState("");

  const handleEnglishDateChange = (event) => {
    const date = event.target.value;
    setEnglishDate(date);
    try {
      const nepaliDateObj = NepaliDate.parseEnglishDate(date, "YYYY-MM-DD");
      const nepaliDateString = nepaliDateObj.format("YYYY-MM-DD");
      setNepaliDate(nepaliDateString);
      formik.setFieldValue("englishDate", date);
      formik.setFieldValue("nepaliDate", nepaliDateString);
    } catch (error) {
      console.error("Error converting date:", error);
      setNepaliDate("");
    }
  };

  const handleNepaliDateChange = (event) => {
    const date = event.target.value;
    setNepaliDate(date);
    try {
      const englishDateObj = new NepaliDate(date);
      const englishDateString = englishDateObj.formatEnglishDate("YYYY-MM-DD");
      setEnglishDate(englishDateString);
      formik.setFieldValue("nepaliDate", date);
      formik.setFieldValue("englishDate", englishDateString);
    } catch (error) {
      console.error("Error converting date:", error);
      setEnglishDate("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="form-group">
          <label
            htmlFor="englishDate"
            className="block text-lg font-semibold text-gray-800"
          >
            English Date (AD)
          </label>
          <input
            type="date"
            id="englishDate"
            value={englishDate}
            onChange={handleEnglishDateChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="nepaliDate"
            className="block text-lg font-semibold text-gray-800"
          >
            Nepali Date (BS)
          </label>
          <input
            type="text"
            id="nepaliDate"
            value={nepaliDate}
            onChange={handleNepaliDateChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="YYYY-MM-DD"
          />
        </div>
      </div>
    </div>
  );
};

export default DateOfBirth;
