
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import banner1 from '../../../assets/banner/home-16.jpg'
import banner2 from '../../../assets/banner/backgr.jpg'
import Blogs from "../Blogs/Blogs";

const Home = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-lg">
                <SwiperSlide>
                    <div className="relative z-0">
                        <img className="w-full h-[300px] md:h-auto" src={banner1} alt="" />
                        <div className="absolute top-1/2 z-20 left-10 md:left-20 -translate-y-1/2 md:w-1/3 text-white">
                            <p className="text-primary">Happy you here!</p>
                            <h1 className="text-4xl md:text-6xl">Welcome to our <br /> dance <span className="text-primary">school</span> </h1>
                            <p className="mt-4">We champion new ideas, embrace artistic innovation and enable extraordinary experiences for dance artists</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative z-0">
                        <img className="w-full h-[300px] md:h-auto" src={banner2} alt="" />
                        <div className="absolute top-1/2 z-20 left-10 md:left-20 -translate-y-1/2 md:w-1/3 text-white">
                            <p className="text-primary">Happy you here!</p>
                            <h1 className="text-4xl md:text-6xl">Welcome to our <br /> dance <span className="text-primary">school</span> </h1>
                            <p className="mt-4">We champion new ideas, embrace artistic innovation and enable extraordinary experiences for dance artists</p>
                        </div>
                    </div>   
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative z-0">
                        <img className="w-full h-[300px] md:h-auto" src={banner1} alt="" />
                        <div className="absolute top-1/2 z-20 left-10 md:left-20 -translate-y-1/2 md:w-1/3 text-white">
                            <p className="text-primary">Happy you here!</p>
                            <h1 className="text-4xl md:text-6xl">Welcome to our <br /> dance <span className="text-primary">school</span> </h1>
                            <p className="mt-4">We champion new ideas, embrace artistic innovation and enable extraordinary experiences for dance artists</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Blogs></Blogs>
        </>
    );
};

export default Home;