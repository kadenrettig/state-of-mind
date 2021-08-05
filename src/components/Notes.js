import { useState } from "react";

function Notes({ text, handleChange, status, setStatus }) {
  function saveText() {
    localStorage.setItem("note", text);
    setStatus("saved");
  }

  return (
    <>
      <section
        id="notes"
        className="h-screen bg-indigo-400 pt-20 pb-20 lg:px-56"
      >
        <h2 className="pt-10 text-center text-2xl font-bold text-white font-serif">
          What's On Your Mind?
        </h2>
        <ul className="pt-8 px-40">
          <li className="bg-gray-200 shadow-lg rounded-lg overflow-hidden">
            <div>
              <h3 className="p-2 text-center shadow-lg font-bold font-serif bg-yellow-300 ">
                Notes
              </h3>
              <div className="p-2">
                <textarea
                  className="w-full h-auto px-3 py-2 text-base text-black placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  placeholder="What would you like to remember?"
                  value={text}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="p-2 grid justify-items-center grid-cols-2">
                <button
                  onClick={saveText}
                  className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                >
                  Save
                </button>
                <h2 className="h-12 px-6 m-2 text-lg text-gray-600 rounded-lg hover:text-gray-700">
                  {status}
                </h2>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Notes;
