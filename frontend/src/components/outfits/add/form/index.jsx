import { useState, useEffect } from "react"

function OutfitsForm({handleSubmit, handleChange, data }) {


  return (
    <div className='min-h-[calc(100vh-64px)]'>
      <div className="h-full w-80 flex flex-col bg-neutral p-3">
        <h1 className="text-white text-center text-2xl">Create new outfit</h1>
        <form onSubmit={handleSubmit}>
          {/* name */}
          <input type="text" placeholder="Name" className="mb-3 input input-bordered input-primary w-full max-w-xs" name="name" onChange={handleChange} value={data.name} required />
                    {/* address */}
                    <input type="text" placeholder="Address" className="mb-3 input input-bordered input-primary w-full max-w-xs" name="imageUrl" onChange={handleChange} value={data.imageUrl} />
                    {/* note */}
                    <input type="text" placeholder="Note" className="mb-3 input input-bordered input-primary w-full max-w-xs" name="note" onChange={handleChange} value={data.note} />

                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input onClick={handleChange} id="dark" type="radio" value="dark" name="colorType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="dark" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dark </label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input onClick={handleChange} id="bright" type="radio" value="bright" name="colorType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="bright" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bright</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input onClick={handleChange} id="colorful" type="radio" value="colorful" name="colorType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="colorful" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Colorful</label>
                            </div>
                        </li>
                    </ul>
                    <br />
                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input onClick={handleChange} id="elegant" type="radio" value="elegant" name="ocasion" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="elegant" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Elegant </label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input onClick={handleChange} id="sport" type="radio" value="sport" name="ocasion" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="sport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sport</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input onClick={handleChange} id="casual" type="radio" value="casual" name="ocasion" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="casual" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Casual</label>
                            </div>
                        </li>
                    </ul>
                    <button type="submit"
                        className='btn btn-primary mt-5'>
                        Add
                    </button>
        </form>
      </div>
    </div>
  )
}

export default OutfitsForm