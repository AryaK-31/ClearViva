import React from 'react'
import hero from '../Images/hero.jpg'
import { Link } from 'react-scroll'

export default function Hero() {
    return (

        <section id='banner' class="text-gray-600 body-font bg-red-700">
            <div class="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Practice Viva Questions for
                        <br class="hidden lg:inline-block" />Web Technology Practical Exam
                    </h1>
                    <p class="mb-8 leading-relaxed text-gray-200">As you prepare for the upcoming Practical/Oral exam in Web Technology, I've put together a list of questions to help you brush up on key topics. Going through these questions will reinforce your understanding and get you prepared for viva.</p>
                    <div class="flex justify-center">
                        <button class="inline-flex bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg font-semibold text-red-600">
                        <Link
                                activeClass="active"
                                to="partOne"
                                spy={true}
                                smooth={true}
                                offset={-66} // Adjust the offset as needed
                                duration={800} // Adjust the duration of the scroll animation
                            >
                                Let's Start
                            </Link>
                        </button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="bg-cover bg-center rounded" alt="hero" src={hero} />
                </div>
            </div>
        </section>
    )
}
