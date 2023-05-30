import ClothesContent from "./content"
import FilterSelector from "./filterSelector"
import { useState, useEffect } from "react"
import axios from "axios"


function ClothesList() {

    // const [clothes, setClothes] = useState([{ name: "koszulka 1", note: "", imageUrl: "https://hibou.pl/pol_pl_T-shirt-Czarny-43_3.png", colorType: "bright", ocasion: "sport" }, { name: "koszulka 2", note: "", imageUrl: "https://hibou.pl/pol_pl_T-shirt-Czarny-43_3.png", colorType: "dark", ocasion: "elegant" }])
    const [clothes, setClothes] = useState([])

    const [data, setData] = useState({ name: "", colorType: "", ocasion: "" })
    const [error, setError] = useState("")
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };
    const handleSubmit = async (e) => {
        if(e) 
            e.preventDefault()
        try {
            console.log("handle submit")
            const url = "http://localhost:8080/clothes"
            const token = localStorage.getItem('token')

            const headers = { 'token': 'Bearer ' + token };
            const { data: res } = await axios.post(url, data, { headers })
            console.log("res")
            console.log(res)
            setClothes(res)
            // window.location = "/clothes"
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


    useEffect(() => {
        console.log("executed only once!");
        handleSubmit()
    }, []);

    return (
        <div className="flex flex-row">
            <FilterSelector handleSubmit={handleSubmit} handleChange={handleChange} data={data} />
            <ClothesContent clothes={clothes} />
        </div>
    )
}

export default ClothesList