import React, { useState, useEffect } from 'react';

const quests = [
    {
        id: 1,
        question: 'What is HTML? How does it work?',
    },
    {
        id: 2,
        question: 'What is HTML? How does it work?',
    },
    {
        id: 3,
        question: 'What is HTML? How does it work?',
    },
    {
        id: 4,
        question: 'What is HTML? How does it work?',

    },
    {
        id: 5,
        question: 'What is HTML? How does it work?',
    },
    {
        id: 6,
        question: 'What is HTML? How does it work?',
    },
    {
        id: 7,
        question: 'What is HTML? How does it work?',
    },
    {
        id: 8,
        question: 'What is HTML? How does it work?',
    },
    {
        id: 9,
        question: 'What is HTML? How does it work?',
    },
];

export default function PartOne() {

    const loadCheckedState = () => {
        const storedState = localStorage.getItem('checkedState');
        return storedState ? JSON.parse(storedState) : {};
    };

    const [checkedState, setCheckedState] = useState(loadCheckedState);


    const saveCheckedState = () => {
        localStorage.setItem('checkedState', JSON.stringify(checkedState));
    };


    const handleCheckboxClick = (id) => {
        setCheckedState((prevState) => {
            const newState = { ...prevState, [id]: !prevState[id] };
            saveCheckedState();
            return newState;
        });
    };

    useEffect(() => {

        saveCheckedState();
    }, [checkedState]);

    return (
        <section id='partOne' className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-600">Part 1</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Questions Based on HTML, CSS & JS/JS DOM</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {quests.map((question) => (
                        <div key={question.id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className={`h-full flex items-center border-red-600 border-2 bg-gray-100 p-4 rounded-lg ${checkedState[question.id] ? 'bg-green-100' : ''}`}>
                            
                                <div className="flex-grow">
                                    <div className='flex gap-2'>
                                        <h2 className="text-gray-900 title-font font-medium">Question {question.id}</h2>
                                        <input
                                            type="checkbox"
                                            checked={checkedState[question.id]}
                                            onChange={() => handleCheckboxClick(question.id)}
                                            className="mr-2"
                                        />
                                    </div>
                                    <p className="text-gray-800">{question.question}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}