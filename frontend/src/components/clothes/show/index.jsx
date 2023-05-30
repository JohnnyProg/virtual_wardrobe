import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from "axios"

function ClothesShow() {
    const {id} = useParams()
    const [clothes, setClothes] = useState({})

    const requestToDB = async (id) => {
        try {
            const url = "http://localhost:8080/clothes/" + id
            const token = localStorage.getItem('token')
            const headers = { 'token': 'Bearer ' + token};
            const { data: res } = await axios.get(url, {headers})
            console.log(res)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        console.log("executed only once!");
        requestToDB(id)
    }, []);
    
    return(
        //div for whole page under navbar
        <div>

        </div>
    )
}

export default ClothesShow