import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Index() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get('/dashboard/courses')
            .then(response => {
                console.log(response.data);
                setCourses(response.data.data);
                console.log(courses)
            })
            .catch(error => {
                // if (error.response.status === 422) {
                //     setErrorMessage(error.response.data.message)
                // }
            })

    }, []);

    const getImageUrl = (image) => {
        return import.meta.env.VITE_BACKEND_ASSETS_BASE_URL + image;
    }

    return (
        <div className="relative isolate pt-14">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="py-24 sm:py-32 lg:pb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-6xl">
                            Crypto<span className="text-sky-500">School</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-500 font-bold">
                            Become a crypto trading pro.<br/>For Free.
                        </p>
                    </div>

                    <ul role="list" className="mt-10 flex flex-wrap justify-center gap-4">
                        {Array.isArray(courses) && courses.map((course) => (
                            <li
                                key={course.id}
                                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                            >
                                <div className="flex flex-1 flex-col p-8">
                                    <div className="relative">
                                        <img className="mx-auto md:h-50 md:w-50 md:h-80 md:w-80 flex-shrink-0 rounded-md"
                                             src={getImageUrl(course.image)}
                                             alt=""/>
                                        <div
                                            className="mt-4 px-2 py-1 text-slate-600 rounded-tl-sm rounded-br-sm absolute
                                            bg-slate-600 text-white right-0 bottom-0 opacity-75 text-sm flex flex-row">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                 fill="currentColor" className="size-5 mr-2">
                                                <path
                                                    d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"/>
                                            </svg>
                                            {course.registration_count}
                                        </div>
                                    </div>
                                    <h3 className="mt-6 text-sm font-medium text-slate-600">{course.name}</h3>
                                    <div className="flex flex-row justify-center mt-4">
                                        <Link
                                            to={`/dashboard/courses/${course.id}`}
                                            type="button"
                                            className="w-32 rounded-md bg-sky-300 px-3.5 py-2.5 text-sm font-semibold text-white
                                        shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2
                                        focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                                        >
                                            View course
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    );
}