import { useState } from 'react';
import { useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "../PopularItems/Items.css"

// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const PopularItems = () => {


    const [PopularFood, setPopularFood] = useState([]);


    useEffect(() => {
        fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
            .then(res => res.json())
            .then(data => setPopularFood(data.Items.filter((popularFood) => popularFood.IsPopular)))

    }, [])
    console.log("only popular food", PopularFood)

    return (
        <div>
            <div className='my-24' >
                <div className='my-5 px-3 flex items-center justify-between'>
                    <p className='text-2xl font-medium'>Popular</p>
                    <p className='text-xl text-orange-500 font-medium hover:text-orange-600 cursor-pointer'>AddMore </p>
                </div>
                <Swiper
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={1}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        PopularFood.map(items => <SwiperSlide key={items.Id}>
                            <div className='mb-6 px-3 md:px-0 cursor-pointer active:cursor-grabbing'>
                                <img className='h-72 rounded-xl shadow-bottom-right object-cover ' src={items?.ImageUrl} alt={items?.Name} />
                                <p className='text-center text-lg text-gray-600 font-medium py-3'>{items?.Name}</p>
                            </div>
                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </div>
    );
};

export default PopularItems;