import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <>
                <div className='flex flex-col min-h-[700px] justify-center items-center'>
                    <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
                    <br />
                    <p className='text-xl text-red-400'>404</p>
                    <p className='text-2xl text-yellow-700'>Not Found page</p>
                </div>

            </>
        </div>
    );
};

export default ErrorPage;