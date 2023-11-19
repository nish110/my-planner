"use client"

import React, { useState } from 'react';


const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask)
  }
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }


  let renderTask = <h2> No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8 '>
          <div className='flex items-center justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button
            onClick={
              () => {
                deleteHandler(i)
              }
            }
            className='bg-red-500 text-white px-4 py-2 rounded font-bold '>Delete</button>
        </li>
      );
    })
  }
  return (
    <>




      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My ToDoList </h1>
      <div className="relative place-items-center before:absolute before:h-[900px] before:w-[800px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[1500px] after:w-[1000px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#c001ff] after:dark:opacity-40 before:lg:h-[600px] z-[-1]"></div>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-black text-2xl border-zinc-800  border-2 m-5 px-4 py-2 ' placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />
        <input type="text" className='text-black text-2xl border-zinc-800  border-2 m-5 px-4 py-2 ' placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />
        <button className='bg-gray-700 text-white px-4 py-2 text-2xl font-bold rounded'>Add Task</button>
      </form>
      <hr />
      <div className='p-5 bg-black-700 '>
        <ul>
          {renderTask}
        </ul>
      </div>
      <div className="mb-3-flex grid text-center lg:w-fit-content lg:mb-0 lg:grid-cols-1 lg:text-left border-zinc-800  border-2 m-2 px-4 py-2 rounded">
        <a
          href="https://www.linkedin.com/in/nisha-sabale-242b721aa/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Connect for more Project{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>

          </p>
        </a>

      </div>

    </>
  )

}

export default page
