import React, { useState, useEffect } from 'react';

const quests = [
    { id: 1, question: "What is Web Server?" },
    { id: 2, question: "What is Apache Tomcat?" },
    { id: 3, question: "What is XAMPP and what is its use?" },
    { id: 4, question: "Web Server vs Application Server vs Web Browser?" },
    { id: 5, question: "How to configure Port No. in XAMPP?" },
    { id: 6, question: "What is the difference between Website and a Web Application?" },
    { id: 7, question: "Explain 2 tier & 3 tier architecture in web technology?" },
    { id: 8, question: "What is HTDOCS folder?" },
    { id: 9, question: "What is the use of PHP in web technology?" },
    { id: 10, question: "How Does PHP work?" },
    { id: 11, question: "What are cookies? State types of cookies." },
    { id: 12, question: "What are sessions?" },
    { id: 13, question: "How to implement a cookie and session in PHP?" },
    { id: 14, question: "What is GET and POST? state the difference." },
    { id: 15, question: "What all parameters can be included in a cookie?" },
    { id: 16, question: "How do you connect a database to your PHP web application?" },
    { id: 17, question: "What all is necessary to create a fullstack web app?" },
    { id: 18, question: "State steps to implement Q.NO 16." },
    { id: 19, question: "What are JSP tags? Enlist them." },
    { id: 20, question: "JSP vs JSF?" },
    { id: 21, question: "Applications of JSP And JSF?" },
    { id: 22, question: "What is a servlet? What's the servlet lifecycle?" },
    { id: 23, question: "How can a PHP application be made safe from web attacks?" },
    { id: 24, question: "Explain basic syntaxes in PHP (like variable declaration, loop, etc)." },
    { id: 25, question: "How does PHP differ from other programming languages?" },
    { id: 26, question: "What is doPost and doGet function in servlet?" },
    { id: 27, question: "Describe the client-side and server-side architecture?" },
    { id: 28, question: "State the role of HttpServletRequest & HttpServletResponse?" },
    { id: 29, question: "State the most commonly used web server?" },
    { id: 30, question: "What is HTDOCS folder?" },
];

export default function PartOne() {
    const loadCheckedState = () => {
        const storedState = localStorage.getItem('partOneCheckedState');
        return storedState ? JSON.parse(storedState) : {};
    };

    const [checkedState, setCheckedState] = useState(loadCheckedState);

    const saveCheckedState = () => {
        localStorage.setItem('partOneCheckedState', JSON.stringify(checkedState));
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
        <section id='partTwo' className="bg-gray-200 text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-600">Part 2</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Questions Based on PHP, JSP & SERVERLETS</p>
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