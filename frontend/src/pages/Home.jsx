import React, { useState } from "react";
import Navbar from "../Components/NaveBad";
import Model from "../Components/Model";

const Home = () => {
  const [model, setmodel] = useState(false);
  const [notes, setNotes] = useState([]);   // 🔥 store notes here

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="bg-green-100 min-h-screen">
      <Navbar />

      {/* Notes display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h3 className="font-bold text-lg">{note.title}</h3>
            <p className="text-gray-700 mt-2">{note.content}</p>
          </div>
        ))}
      </div>

      {/* Floating button */}
      <button
        onClick={() => setmodel(true)}
        className="fixed right-4 bottom-4 text-3xl bg-amber-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
      >
        +
      </button>

      {model && <Model setmodel={setmodel} addNote={addNote} />}
    </div>
  );
};

export default Home;
