import "./App.css";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  const [text, updateText] = useState("");
  const [status, setStatus] = useState("");

  function handleChange(e) {
    updateText(e.target.value);
    setStatus("unsaved");
  }

  useEffect(() => {
    if (text) {
      localStorage.setItem("note", text);
      setStatus("saved");
    }
  }, [text]);

  useEffect(() => {
    const data = localStorage.getItem("note");
    if (data) {
      updateText(data);
      setStatus("saved");
    }
  }, []);

  return (
    <div>
      <Header />
      <Notes
        text={text}
        handleChange={handleChange}
        status={status}
        setStatus={setStatus}
      />
      <Footer />
    </div>
  );
}

export default App;
