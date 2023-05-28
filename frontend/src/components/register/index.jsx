import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

function Register() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
    })

    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/user/register"
            const { data: res } = await axios.post(url, data)
            navigate("/login")
            console.log(res.message)
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
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.right}><form className={styles.form_container}
                    onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleChange}
                        value={data.firstName}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        value={data.lastName}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="UserName"
                        name="userName"
                        onChange={handleChange}
                        value={data.email}
                        required
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className={styles.input}
                    />
                    {error && <div
                        className={styles.error_msg}>{error}</div>}
                    <button type="submit"
                        className={styles.green_btn}>
                        Sing Up
                    </button>
                </form>
                <br></br>
                    <h4>
                        already have account?
                    </h4>
                    
                    <Link to='/login'>
                        <button className={styles.green_btn}>
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};


export default Register