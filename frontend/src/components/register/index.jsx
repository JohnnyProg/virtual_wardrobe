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
        <div className="bg-base-100 w-full min-h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="w-[500px] h-[500px] flex rounded-s-xl shadow-xl bg-base-200 justify-center items-center">
                <div className="flex flex-col items-center p-5"><form className="flex flex-col items-center"
                    onSubmit={handleSubmit}>
                    <h1 className="text-2xl">Create Account</h1>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleChange}
                        value={data.firstName}
                        required
                        className="input input-bordered input-primary w-80 mb-3"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        value={data.lastName}
                        required
                        className="input input-bordered input-primary w-80 mb-3"
                    />
                    <input
                        type="text"
                        placeholder="UserName"
                        name="userName"
                        onChange={handleChange}
                        value={data.email}
                        required
                        className="input input-bordered input-primary w-80 mb-3"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className="input input-bordered input-primary w-80 mb-3"
                    />
                    {error && <div
                        className={styles.error_msg}>{error}</div>}
                    <button type="submit"
                        className={styles.green_btn}>
                        Sing Up
                    </button>
                </form>
                <br></br>
                    <h4 className="text-xl">
                        already have account?
                    </h4>
                    
                    <Link to='/login'>
                        <button className={styles.green_btn}>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};


export default Register