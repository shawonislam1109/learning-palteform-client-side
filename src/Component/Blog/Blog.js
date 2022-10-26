import React from 'react';

const Blog = () => {
    return (
        <div className='mb-5 p-5 md:p-2'>
            <div className=' mt-5 p-5 bg-fuchsia-100 text-blue-900 rounded-lg shadow-xl '>
                <h1 className='text-2xl font-medium '> 1. what is cors?</h1>
                <p className='pl-5 text-xl'>Ans : Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.The client and server have a different origin from each other, i.e., accessing resources from a different server. In this case, trying to make a request to a resource on the other server will fail.</p>
            </div>
            <div className='  mt-5 p-5 bg-fuchsia-100 text-blue-900 rounded-lg shadow-xl '>
                <h1 className='text-2xl font-medium '> 2.  Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='pl-5 text-xl'>Ans : Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                    <br />
                    <br />
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    <br /> <br />
                    different authentication option :
                    <br />
                    Password-based authentication. Passwords are the most common methods of authentication. ... <br />
                    Multi-factor authentication. ... <br />
                    Certificate-based authentication. ... <br />
                    Biometric authentication. ... <br />
                    Token-based authentication.</p>
            </div>
            <div className='  mt-5 p-5 bg-fuchsia-100 text-blue-900 rounded-lg shadow-xl '>
                <h1 className='text-2xl font-medium '> 3. How does the private route work?</h1>
                <p className='pl-5 text-xl'>Ans : Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
                    The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
                    In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start</p>
            </div>
            <div className='  mt-5 p-5 bg-fuchsia-100 text-blue-900 rounded-lg shadow-xl '>
                <h1 className='text-2xl font-medium '> 2. What is Node? How does Node work?</h1>
                <p className='pl-5 text-xl'>Ans : Node is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications. <br /> <br />
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
    );
};

export default Blog;