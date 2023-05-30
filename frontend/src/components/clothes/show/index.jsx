import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function ClothesShow() {
    const { id } = useParams()
    const [clothes, setClothes] = useState({})

    const requestToDB = async (id) => {
        try {
            const url = "http://localhost:8080/clothes/" + id
            const token = localStorage.getItem('token')
            const headers = { 'token': 'Bearer ' + token };
            const { data: res } = await axios.get(url, { headers })
            setClothes(res)
            console.log(res)

        } catch (error) {

        }
    }

    useEffect(() => {
        console.log("executed only once!");
        requestToDB(id)
    }, []);

    const deleteElement = async() => {
        try {
            const url = "http://localhost:8080/clothes"
            const token = localStorage.getItem('token')
            const headers = { 'token': 'Bearer ' + token };
            const { data: res } = await axios.delete(url, { headers: headers, data: {id: clothes._id}})
            console.log(res)
            window.location = "/clothes"
        } catch(error) {
            console.log(error)
        }
    }

    return (
        //div for whole page under navbar
        <div className="hero min-h-[calc(100vh-64px)] min-w-screen bg-base-100 -mb-6">
            <div className="hero-content flex-col lg:flex-row items-stretch bg-base-200 p-10">
                <img src={clothes?.imageUrl} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='flex flex-col'>
                    <h1 className="text-5xl font-bold">{clothes.name}</h1>
                    <p className="py-6">{clothes.note}</p>
                    <div className='flex flex-col '>
                        <div className="mb-3 badge badge-lg badge-primary">{clothes?.colorType}</div>
                        <div className="badge badge-lg badge-primary">{clothes?.ocasion}</div>
                    </div>
                    <div className="card-actions justify-end mt-auto">
                        <Link to={'/clothes/edit/' + clothes._id}><button className='btn btn-primary'>Edit</button></Link>
                        <button onClick={deleteElement} className='btn btn-secondary'>Delete</button>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    )
}

export default ClothesShow