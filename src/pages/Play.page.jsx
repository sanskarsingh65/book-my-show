import React from 'react'
import DefaultLayoutHoc from '../Layout(Hoc)/Default.layout';

//component
import Poster from '../components/Poster/Poster.Component'
import PlayFilter from '../components/PlayFilters/PlayFilter.Component';
const PlayPage = () => {
  return (
    <>
    <div className='container mx-auto px-4 my-10'>
      <div className='w-full flex flex-col-reverse lg:flex-row-reverse gap-4'>
         <div className='lg:w-3/4 p-4 bg-white rounded '>
          <h2 className='text-2xl font-bold mb-4'> Plays In NCR Delhi</h2>
          <div className='flex flex-wrap'>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster 
               isPlay={true}
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-aafat-mein-jaan-comedy-drama-0-2022-10-17-t-13-24-34.jpg"
              title="Aafat Mein Jaan (Comedy Drama)" subtitle="Drama | Hindi | 10yrs +|1hr 15mins"/>
            </div>

            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster 
               isPlay={true}
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-the-father-0-2022-11-3-t-10-14-52.jpg"
              title="Aafat Mein Jaan (Comedy Drama)" subtitle="Drama | Hindi | 10yrs +|1hr 15mins"/>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster 
               isPlay={true}
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-manav-kaul-s-chuhal-0-2022-10-26-t-13-34-55.jpg"
              title="Aafat Mein Jaan (Comedy Drama)" subtitle="Drama | Hindi | 10yrs +|1hr 15mins"/>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster 
               isPlay={true}
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-mehfil-poetry-storytelling-open-mic-0-2022-10-3-t-10-57-15.jpg"
              title="Aafat Mein Jaan (Comedy Drama)" subtitle="Drama | Hindi | 10yrs +|1hr 15mins"/>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster 
               isPlay={true}
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-aafat-mein-jaan-comedy-drama-0-2022-10-17-t-13-24-34.jpg"
              title="Aafat Mein Jaan (Comedy Drama)" subtitle="Drama | Hindi | 10yrs +|1hr 15mins"/>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster 
               isPlay={true}
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-aafat-mein-jaan-comedy-drama-0-2022-10-17-t-13-24-34.jpg"
              title="Aafat Mein Jaan (Comedy Drama)" subtitle="Drama | Hindi | 10yrs +|1hr 15mins"/>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster 
               isPlay={true}
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-aafat-mein-jaan-comedy-drama-0-2022-10-17-t-13-24-34.jpg"
              title="Aafat Mein Jaan (Comedy Drama)" subtitle="Drama | Hindi | 10yrs +|1hr 15mins"/>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster 
               isPlay={true}
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-aafat-mein-jaan-comedy-drama-0-2022-10-17-t-13-24-34.jpg"
              title="Aafat Mein Jaan (Comedy Drama)" subtitle="Drama | Hindi | 10yrs +|1hr 15mins"/>
            </div>

          </div>
          </div>

      <div className='lg:w-1/4 p-4 bg-white rounded'>
        <h2 className='text-2xl font-bold mb-4'>Filters</h2>
        <div ><PlayFilter title='Date' tags={["Today","Tomorrow","This Weekend"]}/></div>
        <div ><PlayFilter title='Languages' tags={["Hindi","English","Tamil"]}/></div>
         </div>
      </div>
      {/* <iframe 
      src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d28014.006389108552!2d77.304009!3d28.637230000000002!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzE0LjAiTiA3N8KwMTgnMTQuNCJF!5e0!3m2!1sen!2sus!4v1668578525812!5m2!1sen!2sus"
       width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='paly location'></iframe> */}
    </div>
    </>
  )
};

export default DefaultLayoutHoc(PlayPage)