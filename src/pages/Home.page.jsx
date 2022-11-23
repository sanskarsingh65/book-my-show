import React , {useState} from 'react'
import axios from 'axios';


//Components
import EnterTainmentCardSliders from "../components/Entertainment/EntertainmentCard.Component"
import HeroCarosel from "../components/HeroCarousel/HeroCarousel.Component"
import PosterSliders from "../components/PosterSliders/PosterSlider.Component"

//Layout Hoc
import DefaultLayoutHoc from '../Layout(Hoc)/Default.layout';
import { useEffect } from 'react';

const HomePage = () => {

  const [recommendedMovies,setRecommendedMovies]=useState([]);
  const [premierMovies,setPremierMovies]=useState([]);
  const [onlineStreamsEvents,setOnlineStreamEvents]=useState([]);

useEffect(()=>{
const requestPopularMovies=async()=>{
const getPopularMovies=await axios.get("/movie/popular");
setRecommendedMovies(getPopularMovies.data.results);

}
requestPopularMovies();
},[]);

useEffect(()=>{
  const requestTopRatedMovies=async()=>{
  const getTopRatedMovies=await axios.get("/movie/top_rated");
  setPremierMovies(getTopRatedMovies.data.results);

  
  }
  requestTopRatedMovies();
  },[]);
  
  useEffect(()=>{
    const requestUpcomingMovies=async()=>{
    const getTopRatedMovies=await axios.get("/movie/upcoming");
    setOnlineStreamEvents(getTopRatedMovies.data.results);
    
    }
    requestUpcomingMovies();
    },[]);
    

  return (
    <>
    <HeroCarosel/>    
    <div className='container mx-auto px-4 md:px-12 my-8'>
      <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The Best of Entertainment</h1>
    <EnterTainmentCardSliders/>     
    </div>

    <div className='container mx-auto px-4 md:px-12 my-8'>
      <PosterSliders title="Recommended Movies" subtitle="List of Recommended Movies" posters={recommendedMovies} 
      isDark={false}/>
    </div>
    
    <div className='bg-premier-800 py-12'>
      <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
        <div className='hidden md:flex'>
          <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className='w-full h-full' />
        </div>
        <PosterSliders title="Premiers" subtitle="Brand new releases every friday" posters={premierMovies} 
      isDark={true}/>

      </div>
    </div>

    <div className='container mx-auto px-4 md:px-12 my-8 '>
      <PosterSliders title="Online Streaming Event" subtitle="" posters={onlineStreamsEvents} 
            isDark={false}/>
    </div>
    

  </>
  )
};

export default DefaultLayoutHoc(HomePage)