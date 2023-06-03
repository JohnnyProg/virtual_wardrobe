import { useState, useEffect } from "react"

function FilterSelector({handleCheckbox, handleSubmit, handleChange, data }) {


  return (
    <div className='min-h-[calc(100vh-64px)]'>
      <div className="h-full w-80 flex flex-col bg-neutral p-3">
        <h1 className="text-white text-center text-2xl">Filters</h1>
        <form onSubmit={handleSubmit}>
          {/* <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Who shot first?</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select> */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name: </label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="name" onChange={handleChange} value={data.name} />
          </div>

          {/* //////////// checkboxy !!!!!*/}
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input onClick={handleCheckbox} id="dark" type="checkbox" value="dark" name="colorType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="dark" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dark </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input onClick={handleCheckbox} id="bright" type="checkbox" value="bright" name="colorType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="bright" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bright</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input onClick={handleCheckbox} id="colorful" type="checkbox" value="colorful" name="colorType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="colorful" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Colorful</label>
              </div>
            </li>
          </ul>
          <br />
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input onClick={handleCheckbox} id="elegant" type="checkbox" value="elegant" name="ocasion" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="elegant" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Elegant </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input onClick={handleCheckbox} id="sport" type="checkbox" value="sport" name="ocasion" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="sport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sport</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input onClick={handleCheckbox} id="casual" type="checkbox" value="casual" name="ocasion" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="casual" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Casual</label>
              </div>
            </li>
          </ul>

          {/* /////////// */}
          <br></br>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Find</button>

        </form>
      </div>
    </div>
  )
}

export default FilterSelector