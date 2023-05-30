import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"
const AddClothes = () => {
    const [data, setData] = useState({ name: "", imageUrl: "", note: "", colorType: "", ocasion: "" })
    const [error, setError] = useState("")
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/clothes/add"
            const token = localStorage.getItem('token')
            const headers = { 'token': 'Bearer ' + token};
            const { data: res } = await axios.post(url, data, {headers})
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
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container}
                        onSubmit={handleSubmit}>
                        <h1>Add new clothes</h1>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name" onChange={handleChange}
                            value={data.name}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            name="imageUrl" onChange={handleChange}
                            value={data.imageUrl}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Note"
                            name="note"
                            onChange={handleChange}
                            value={data.note}
                            className={styles.input}
                        />
                        <div className={styles.input}>
                            Color Type:    
                            <input type="radio" id="dark" name="colorType" value="dark" onClick={handleChange}/>
                            <label for="dark">Dark</label>
                            <input type="radio" id="bright" name="colorType" value="bright" onClick={handleChange}/>
                            <label for="bright">Bright</label>
                            <input type="radio" id="colorful" name="colorType" value="colorful" onClick={handleChange}/>
                            <label for="colorful">Colorful</label>
                        </div>
                        <div className={styles.input}>
                            Ocasion:   
                            <input type="radio" id="elegant" name="ocasion" value="elegant" onClick={handleChange}/>
                            <label for="elegant">elegant</label>
                            <input type="radio" id="sport" name="ocasion" value="sport" onClick={handleChange}/>
                            <label for="sport">sport</label>
                            <input type="radio" id="casual" name="ocasion" value="casual" onClick={handleChange}/>
                            <label for="casual">casual</label>
                        </div>
                        {error && <div
                            className={styles.error_msg}>{error}</div>}
                        <button type="submit"
                            className={styles.green_btn}>
                            Add
                        </button>
                    </form>

                </div>

            </div>
        </div>
    )
}
export default AddClothes;