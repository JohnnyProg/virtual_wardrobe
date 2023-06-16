import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"
const Login = () => {
    const [data, setData] = useState({ userName: "", password: "" })
    const [error, setError] = useState("")
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/user/login"
            const { data: res } = await axios.post(url, data)
            localStorage.setItem("token", res.data)
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
        <div className="bg-base-100 w-full min-h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="w-[500px] h-[500px] flex rounded-s-xl shadow-xl bg-base-200 justify-center items-center">
                <div className="flex flex-col items-center p-5">
                    <form className="flex flex-col items-center"
                        onSubmit={handleSubmit}>
                        <h1 className="text-2xl mb-3">Login to Your Account</h1>
                        <input
                            type="text"
                            placeholder="userName"
                            name="userName" onChange={handleChange}
                            value={data.userName}
                            required
                            className="input input-bordered input-primary w-80 mb-6"
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
                            Sing In
                        </button>
                    </form>
                    <br></br>
                    <h4>
                        dont have acconut?
                    </h4>
                    
                    <Link to='/register'>
                        <button className={styles.white_btn}>
                            Register
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    )
}
export default Login;