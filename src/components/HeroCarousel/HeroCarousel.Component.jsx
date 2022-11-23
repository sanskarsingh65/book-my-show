import React,{useState} from 'react';
import HeroSlider from "react-slick";
import { NextArrow } from './Arrows.Component';
const HeroCarousel = () => {
  const [images,setImages]=useState([   
      {
        "adult": false,
        "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        "popularity": 91.677,
        "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "title": "The Godfather",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 16808
      },
      {
        "adult": false,
        "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "popularity": 77.757,
        "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "release_date": "1994-09-23",
        "title": "The Shawshank Redemption",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 22535
      },

      {
        "adult": false,
        "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 240,
        "original_language": "en",
        "original_title": "The Godfather Part II",
        "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
        "popularity": 55.346,
        "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        "release_date": "1974-12-20",
        "title": "The Godfather Part II",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 10183
      },      
  ]);


  const settingLG={
    arrows:true,
    slidesToShow:1, 
    infinite:true, 
    speed:500,
    slideToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<prevArrow/>,

    autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
  };
  const settingSM={
    arrows:true,
    slidesToShow:1,
    infinite:true,
    speed:500,
    slideToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<prevArrow/>,
  };
  return (
    <>
    <div className='lg:hidden'>
      <HeroSlider {...settingSM}>
        {
          images.map((images,index)=>(
            <div className='w-full h-56 md:h-80 py-3' key={index}>
              <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path} `} alt="Hero Banner" className='w-full h-full rounded-md object-cover' />

            </div>
          ))
        }
      </HeroSlider>
    </div>

    <div className='hidden lg:block'>
    <HeroSlider {...settingLG}>
        {
          images.map((images,index)=>(
            <div className='w-full h-96 px-2 py-3' key={index}>
              <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-cover' />
            </div>
          ))}
      </HeroSlider>
    </div>

    </>
  )
}

export default HeroCarousel