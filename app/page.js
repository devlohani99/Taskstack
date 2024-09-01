"use client";

import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc, dueDate, dueTime }]);
    setTitle("");
    setDesc("");
    setDueDate("");
    setDueTime("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2 className="text-center text-gray-500">No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li
          key={i}
          className="flex items-center justify-between bg-white shadow-md rounded-lg p-5 mb-4 transition-transform transform hover:scale-105"
        >
          <div className="w-2/3">
            <h5 className="text-lg font-semibold text-gray-800">{t.title}</h5>
            <h6 className="text-base font-medium text-gray-600">{t.desc}</h6>
            <p className="text-sm text-gray-500">
              Due: {t.dueDate} at {t.dueTime}
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <header className="bg-gradient-to-r from-yellow-500 to-orange-500 text-5xl font-bold text-center text-white py-6 shadow-lg">
        Task Stack
      </header>
      <main className="max-w-4xl mx-auto p-8">
        <form
          onSubmit={submitHandler}
          className="bg-white shadow-md rounded-lg p-8 mb-8"
        >
          <input
            type="text"
            className="w-full text-xl border border-gray-300 rounded-lg p-4 mb-4 focus:outline-none focus:border-yellow-500"
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <input
            type="text"
            className="w-full text-xl border border-gray-300 rounded-lg p-4 mb-4 focus:outline-none focus:border-yellow-500"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />

          <div className="flex space-x-4 mb-4">
            <input
              type="date"
              className="w-1/2 text-xl border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-yellow-500"
              value={dueDate}
              onChange={(e) => {
                setDueDate(e.target.value);
              }}
            />

            <input
              type="time"
              className="w-1/2 text-xl border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-yellow-500"
              value={dueTime}
              onChange={(e) => {
                setDueTime(e.target.value);
              }}
            />
          </div>

          <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xl font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Add Task
          </button>
        </form>
        <ul>{renderTask}</ul>
      </main>
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>
          Project created by{" "}
          <a
            href="https://github.com/devlohani99"
            target="_blank"
            className="text-yellow-400 underline"
            rel="noopener noreferrer"
          >
            Dev Lohani
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/devlohani"
            target="_blank"
            className="text-yellow-400 underline"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </footer>
    </>
  );
};

export default Page;
