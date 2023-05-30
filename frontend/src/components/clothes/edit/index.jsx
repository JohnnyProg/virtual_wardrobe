import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from "axios"
import { Link } from "react-router-dom"
// import styles from "./styles.module.css"
const EditClothes = () => {
    const [data, setData] = useState({_id: "", name: "", imageUrl: "", note: "", colorType: "", ocasion: "" })
    const [error, setError] = useState("")
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };

    const { id } = useParams()

    const requestToDB = async (id) => {
        try {
            const url = "http://localhost:8080/clothes/" + id
            const token = localStorage.getItem('token')
            const headers = { 'token': 'Bearer ' + token };
            const { data: res } = await axios.get(url, { headers })
            setData(res)
            console.log(res)

        } catch (error) {

        }
    }

    useEffect(() => {
        console.log("executed only once!");
        requestToDB(id)
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/clothes/edit"
            const token = localStorage.getItem('token')
            const headers = { 'token': 'Bearer ' + token };
            const { data: res } = await axios.post(url, data, { headers })
            console.log(res)
            window.location = "/clothes"
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <div className="hero min-h-[calc(100vh-64px)] min-w-screen bg-base-100 -mb-6">
            <div className="hero-content flex-col lg:flex-row items-stretch bg-base-200 p-10">
                <form className='flex flex-col items-center'
                    onSubmit={handleSubmit}>
                    <h1 className="text-4xl mb-8">Add new clothes</h1>
                    {/* name */}
                    <input type="text" placeholder="Name" className="mb-3 input input-bordered input-primary w-full max-w-xs" name="name" onChange={handleChange} value={data.name} required />
                    {/* address */}
                    <input type="text" placeholder="Address" className="mb-3 input input-bordered input-primary w-full max-w-xs" name="imageUrl" onChange={handleChange} value={data.imageUrl} required />
                    {/* note */}
                    <input type="text" placeholder="Note" className="mb-3 input input-bordered input-primary w-full max-w-xs" name="note" onChange={handleChange} value={data.note} required />

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
                        Save
                    </button>
                </form>
            </div>
        </div>
    )

}
export default EditClothes;