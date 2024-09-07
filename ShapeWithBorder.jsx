import React from 'react';

const ShapeWithBorder = () => {
    return (
        <div>
            <div className='lato mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='border p-10 flex flex-col justify-center w-[30%] rounded-lg'>
                    <div className='mx-auto'>
                        <div className='border-[15px] border-[#FF38111A] rounded-full'>
                            <p className='rounded-full bg-[#FF3811] text-white text-2xl px-5 py-3 text-center'>
                                1
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl text-black uppercase mt-3 lato text-center'>step one</h3>
                        <p className='mt-3 lato text-center'>It uses a dictionary <br /> of over 200 .</p>
                    </div>
                </div>
                <div className='border p-10 flex flex-col justify-center w-[30%] rounded-lg'>
                    <div className='mx-auto'>
                        <div className='border-[15px] border-[#FF38111A] rounded-full'>
                            <p className='rounded-full bg-[#FF3811] text-white text-2xl px-5 py-3 text-center'>
                                2
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl text-black uppercase mt-3 lato text-center'>step two</h3>
                        <p className='mt-3 lato text-center'>It uses a dictionary <br /> of over 200 .</p>
                    </div>
                </div>
                <div className='border p-10 flex flex-col justify-center w-[30%] rounded-lg'>
                    <div className='mx-auto'>
                        <div className='border-[15px] border-[#FF38111A] rounded-full'>
                            <p className='rounded-full bg-[#FF3811] text-white text-2xl px-5 py-3 text-center'>
                                3
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl text-black uppercase mt-3 lato text-center'>step three</h3>
                        <p className='mt-3 lato text-center'>It uses a dictionary <br /> of over 200 .</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ShapeWithBorder;