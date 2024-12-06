import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const LandingPage = () => {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [editorData, setEditorData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    if (!loggedInUser) {
      alert("Unauthorized access! Please log in.");
      navigate("/");
    } else {
      setIsLoading(false);
      setAuthToken(loggedInUser.token);
    }
  }, [loggedInUser, navigate]);

  useEffect(() => {
    if (authToken) {
      const isValidJWT = /^[A-Za-z0-9-._~+/]+=*$/.test(authToken);
      if (!isValidJWT) {
        console.error("Invalid JWT format:", authToken);
        alert("Invalid JWT token format.");
        return;
      }
    }
  }, [authToken]);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {isLoading ? (
        <p className="text-xl text-gray-600">Loading...</p>
      ) : loggedInUser ? (
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Hello, {loggedInUser.username || loggedInUser.email}!
          </h1>
          <div className="w-full max-w-2xl bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Write about your favorite team:
            </h2>
            <CKEditor
              editor={ClassicEditor}
              data={editorData}
              config={{
                token: authToken,
                autoRefresh: false,
                licenseKey: "GPL",
              }}
              onChange={handleEditorChange}
            />
          </div>
          <div className="mt-4 w-full max-w-2xl bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-gray-700">Preview:</h3>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: editorData }}
            ></div>
          </div>
        </>
      ) : (
        <p className="text-lg text-red-500">
          Unauthorized access! Please log in.
        </p>
      )}
    </div>
  );
};

export default LandingPage;
