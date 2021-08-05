import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
