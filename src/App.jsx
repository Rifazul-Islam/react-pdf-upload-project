import axios from "axios";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");

  const handlerFileUpload = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);
    const result = await axios.post(
      "http://localhost:5000/upload-files",
      formData,
      {
        headers: { "Content-type": "multipart/form-data" },
      }
    );
    console.log(result);
  };

  return (
    <>
      <h1 className="text-2xl text-red-600">Testing per per</h1>
      <h2 className="text-center"> Upload PDF File </h2>
      <form
        onSubmit={handlerFileUpload}
        className="border border-slate-800 p-4 w-96 mx-auto"
        action=""
      >
        <input
          className="border border-red-600 my-2"
          type="text"
          placeholder="Please Your Pdf Name"
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <input
          className="border border-red-600 my-2"
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
        />{" "}
        <br />
        <input
          className="border border-red-600 p-1"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
}

export default App;
