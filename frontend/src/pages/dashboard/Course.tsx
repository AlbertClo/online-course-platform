import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useToast} from "@/components/ui/use-toast"
import {Toaster} from "@/components/ui/toaster.tsx";


export default function Index() {
    const {id} = useParams()
    const [course, setCourse] = useState()
    const {toast} = useToast()

    useEffect(() => {
        axios.get(`/courses/${id}`)
            .then(response => {
                setCourse(response.data);
            })
            .catch(error => {
                toast({
                    title: `Couldn't fetch course data`,
                    description: `There was an unknown error fetching course data. Please try again later.`,
                    variant: "destructive"
                })
            })

    }, []);

    const registerForCourse = () => {
        axios.post(`/courses/${id}/register`)
            .then(response => {
                toast({
                    title: `Course registration successful`,
                    description: `You are now registered for ${course.name}!`,
                    variant: "primary"
                })
            })
            .catch(error => {
                if (error.response.status === 422) {
                    toast({
                        title: "Course registration error",
                        description: `You are already registered for ${course.name}!`,
                        variant: "destructive"
                    })
                }
            })
    }

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
                    {course ? (
                        <>
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-6xl">
                                    {course.name}
                                </h1>
                            </div>

                            <div className="flex flex-1 flex-col p-8 ">
                                <img className="mx-auto md:h-50 md:w-50 md:h-80 md:w-80 flex-shrink-0 rounded-lg"
                                     src={getImageUrl(course.image)}
                                     alt=""/>
                                <dl className="mt-1 flex flex-grow flex-col justify-center text-center">
                                    <dd className="text-lg text-gray-500 text-center mt-6">{course.description}</dd>
                                    <dd className="mt-3">
                                    </dd>
                                </dl>
                                <div className="flex flex-row justify-center">
                                    <button
                                        type="button"
                                        onClick={registerForCourse}
                                        className="w-32 rounded-md bg-sky-300 px-3.5 py-2.5 text-sm font-semibold text-white
                                        shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2
                                        focus-visible:outline-offset-2 focus-visible:outline-sky-300 mt-4"
                                    >
                                        Register
                                    </button>
                                    <Toaster/>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="w-full mt-32 flex flex-row justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="size-6 animate-spin">
                                <path fill-rule="evenodd"
                                      d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                    )}
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