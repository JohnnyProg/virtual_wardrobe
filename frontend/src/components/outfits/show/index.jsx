import { useState, useEffect } from "react"
import axios from "axios"
import FilterSelector from "../../clothes/list/filterSelector"
import OutfitsContent from "./content"


function OutfitsList() {

    // const [clothes, setClothes] = useState([{ name: "koszulka 1", note: "", imageUrl: "https://hibou.pl/pol_pl_T-shirt-Czarny-43_3.png", colorType: "bright", ocasion: "sport" }, { name: "koszulka 2", note: "", imageUrl: "https://hibou.pl/pol_pl_T-shirt-Czarny-43_3.png", colorType: "dark", ocasion: "elegant" }])
    const [outfits, setOutfits] = useState([])

    const [data, setData] = useState({ category: "", name: "", colorType: [], ocasion: [] })
    const [error, setError] = useState("")
    const handleChange = ({ currentTarget: input }) => {
        // console.log(input.value)
        setData({ ...data, [input.name]: input.value })
    };

    const handleCheckbox = ({ currentTarget: input }) => {
        let arr = []
        arr = data[input.name]

        let i = arr.indexOf(input.value)
        if (i === -1) {
            arr.push(input.value)
        } else {
            arr.splice(i, 1)
        }
        
        setData({ ...data, [input.name]: arr })
    }

    const handleClicked = (address) => {
        // console.log("why you running", address)
        window.location = '/clothes/show/' + address
    }


    const handleSubmit = async (e) => {
        if (e)
            e.preventDefault()
        try {
            console.log("handle submit")
            const url = "http://localhost:8080/outfits"
            const token = localStorage.getItem('token')

            const headers = { 'token': 'Bearer ' + token };
            const { data: res } = await axios.post(url, data, { headers })
            console.log("res")
            console.log(res)
            setOutfits(res)
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
        <div className="flex flex-row -mb-6">
            <FilterSelector handleCheckbox={handleCheckbox} handleSubmit={handleSubmit} handleChange={handleChange} data={data} />
            <OutfitsContent outfits={outfits}/>
            {/* <ClothesContent clothes={clothes} handleClick={handleClicked}/> */}
        </div>
    )
}

export default OutfitsList