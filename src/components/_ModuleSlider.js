import Link from "next/link";
import Image from "next/image";

function SliderSwiper(props) {
  return (
    <>
      <div id="home-mv-slider" class="m-swiper-container">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {MvImages.map((img) => (
            <SwiperSlide>
              <Image
                src={img.src}
                width={1900}
                height={1266}
                className=""
                alt="ASTRO"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export { SliderSwiper };
