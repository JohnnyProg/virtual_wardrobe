import { useState, useEffect } from "react"

function FilterSelector({handleSubmit, handleChange, data}) {
  

  return (
    <div className='h-screen'>
      <div className="w-80 h-full flex flex-col bg-gray-900 p-3">
        <h1 className="text-white text-center text-2xl">Filters</h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name: </label>
            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="name" onChange={handleChange} value={data.name}/>
          </div>

          {/* //////////// */}
          <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input onClick={handleChange} id="dark" type="radio" value="dark" name="colorType" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label for="dark" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dark </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input onClick={handleChange} id="bright" type="radio" value="bright" name="colorType" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label for="bright" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bright</label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input onClick={handleChange} id="colorful" type="radio" value="colorful" name="colorType" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label for="colorful" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Colorful</label>
              </div>
            </li>
          </ul>
          <br />
          <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input onClick={handleChange} id="elegant" type="radio" value="elegant" name="ocasion" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label for="elegant" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Elegant </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input onClick={handleChange} id="sport" type="radio" value="sport" name="ocasion" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label for="sport" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sport</label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input onClick={handleChange} id="casual" type="radio" value="casual" name="ocasion" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label for="casual" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Casual</label>
              </div>
            </li>
          </ul>
          {/* /////////// */}
          <br></br>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Find</button>

        </form>
      </div>
    </div>
  )
}

export default FilterSelector