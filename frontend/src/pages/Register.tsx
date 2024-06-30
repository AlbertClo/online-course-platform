import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Example() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()

        axios.post('/register', {email: email, password: password})
            .then(response => {
                localStorage.setItem('token', response.data.token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
                navigate('/dashboard')
            })
            .catch(error => {
                if (error.response.status === 422) {
                    setErrorMessage(error.response.data.message)
                }
                setPassword('')
            })
            .finally(() => setPassword(''))
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 min-h-screen">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center text-red-600">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-600">
                        Register
                    </h2>
                    {errorMessage}
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-600">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    onChange={event => setEmail(event.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                       className="block text-sm font-medium leading-6 text-slate-600">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    onChange={event => setPassword(event.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
