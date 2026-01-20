import React, { useState } from "react";

const Model = ({ setmodel, addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveNote = () => {
    if (!title || !content) return alert("Fill all fields");

    addNote({ title, content });   // 🔥 send note to Home
    setmodel(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 shadow-xl relative">

        <button
          onClick={() => setmodel(false)}
          className="absolute top-2 right-3 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Create Note</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />

        <textarea
          rows="4"
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => setmodel(false)}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={saveNote}
            className="bg-amber-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
