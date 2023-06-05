import { useState, useEffect } from "react"
import axios from "axios"
import OutfitForm from './form'
import ClothesContent from "./content"


function AddOutfits() {

    const [clothes, setClothes] = useState([])
    const [selected, setSelected] = useState([])
    const [data, setData] = useState({ name: "", colorType: "", ocasion: "", imageUrl: "", clothes: [] })
    const [error, setError] = useState("")
    const handleChange = ({ currentTarget: input }) => {
        console.log(input.value)
        setData({ ...data, [input.name]: input.value })
    };

    // const handleCheckbox = ({ currentTarget: input }) => {
    //     let arr = []
    //     arr = data[input.name]

    //     let i = arr.indexOf(input.value)
    //     if (i === -1) {
    //         arr.push(input.value)
    //     } else {
    //         arr.splice(i, 1)
    //     }
        
    //     setData({ ...data, [input.name]: arr })
    // }


    const handleSubmit = async (e) => {
        if (e)
            e.preventDefault()
        try {
            console.log("handle submit")
            const url = "http://localhost:8080/outfits/add"
            const token = localStorage.getItem('token')

            const headers = { 'token': 'Bearer ' + token };
            let _data = {...data, clothes: selected}
            console.log("data: " , _data)
            const { data: res } = await axios.post(url, _data, { headers })
            console.log("res")
            console.log(res)
            // setClothes(res)
            window.location = "/outfits"
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

    const handleClick = async (_id) => {
        // console.log("handle click", _id)
        let i = selected.indexOf(_id)
        let temp = [...selected]
        if (i === -1) {
            temp.push(_id)
        } else {
            temp.splice(i, 1)
        }
        
        await setSelected(temp)
        console.log("handleClick", selected)
    }

    const getClothes = async () => {
        console.log("get all clothes")
        const url = "http://localhost:8080/clothes"
        const token = localStorage.getItem('token')

        const headers = { 'token': 'Bearer ' + token };
        const { data: res } = await axios.post(url, data, { headers })
        setClothes(res)
    }

    useEffect( () => {
        getClothes()
    }, [])

    // useEffect(() => {
    //     console.log("executed only once!");
    //     handleSubmit()
    // }, []);

    return (
        <div className="flex flex-row -mb-6">
            <OutfitForm handleSubmit={handleSubmit} handleChange={handleChange} data={data} />
            <ClothesContent clothes={clothes} selected={selected} handleClick={handleClick}/> 
        </div>
    )
}

export default AddOutfits