import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './Main.css';
import Card from '../Card/Card';
import infinclub from '../../images/infinclub_mp4.mp4';
import infinclubWebm from '../../images/infinclub_webm.webm';
import portfolio from '../../images/portfolio_mp4.mp4';
import portfolioWebm from '../../images/portfolio_webm.webm';
import vodopad from '../../images/vodopad_mp4.mp4';
import vodopadWebm from '../../images/vodopad_webm.webm';
import infinPoster from '../../images/infin-preloader.jpg';
import portPoster from '../../images/port-preloader.jpg';
import vodoPoster from '../../images/vodopad-preloader.jpg';

function Main() {

  const navigate = useNavigate();
  const location = useLocation();

  const [card, setCard] = React.useState({
    title: '',
    itemOne: '',
    itemTwo: '',
    itemThree: '',
    itemFour: '',
    dataItemOne: '',
    dataItemTwo: '',
    dataItemThree: '',
    dataItemFour: '',
    poster: '',
    video: '',
    videoWebm: '' 
  });

  const business = () => {
    setCard({
      title: 'Card website for your business',
      itemOne: 'HTML',
      itemTwo: 'CSS',
      itemThree: 'JS',
      itemFour: 'Webpack',
      dataItemOne: 'With semantic tags the website is optimized for search engine visibility',
      dataItemTwo: 'Responsive design is adaptable to various devices',
      dataItemThree: 'Provides three types of contact methods to facilitate communication',
      dataItemFour: 'Optimizes assets for improved performance and development efficiency',
      poster: infinPoster,
      video: infinclub,
      videoWebm: infinclubWebm 
    });    

    navigate('/business', {replace: true});
  };

  const language = () => {
    setCard({
      title: 'Multilingual business website',
      itemOne: 'HTML',
      itemTwo: 'CSS',
      itemThree: 'JS',
      itemFour: 'Webpack',
      dataItemOne: 'A multilingual version contributes to better indexing by search engines',
      dataItemTwo: 'Responsive design is adaptable to various devices',
      dataItemThree: 'Provides five types of contact methods to facilitate communication',
      dataItemFour: 'Optimizes assets for improved performance and development efficiency',
      poster: vodoPoster,
      video: vodopad,
      videoWebm: vodopadWebm 
    });    

    navigate('/language', {replace: true});
  };

  const aboutYou = () => {
    setCard({
      title: 'Online portfolio for you',
      itemOne: 'HTML',
      itemTwo: 'CSS',
      itemThree: 'React',
      itemFour: 'Git',
      dataItemOne: 'Responsible for tooltips to enhance user experience (UX)',
      dataItemTwo: 'Helps attract users with a dynamic and responsive interface',
      dataItemThree: 'Enables efficient navigation within the app',
      dataItemFour: 'Ensures version control and enhancing communication with team',
      poster: portPoster,
      video: portfolio,
      videoWebm: portfolioWebm 
    });    

    navigate('/aboutyou', {replace: true});
  };

  return(
    <main className='main'>
      {location.pathname === '/portfolio/' ? (
        <>
          <h2 className="main__title">Web Yourself well</h2>
          <article className='main__container'>
            <div className='main__item' onClick={business}>
              <video autoPlay muted loop playsInline className="main__item_video" poster={infinPoster}>
                <source src={infinclubWebm} type='video/webm' />
                <source src={infinclub} type='video/mp4' />
              </video>
              <div className='main__item_content'>
                <h2 className='main__item_text'>Card website for your business
                </h2>
              </div>
            </div>
            <div className='main__item' onClick={language}>
              <video autoPlay muted loop playsInline className="main__item_video" poster={vodoPoster}>
                <source src={vodopadWebm} type='video/webm' />
                <source src={vodopad} type='video/mp4' />
              </video>
              <div className='main__item_content'>
                <h2 className='main__item_text'>Multilingual business website  
                </h2>
              </div>
            </div>
            <div className='main__item' onClick={aboutYou}>
              <video autoPlay muted playsInline loop className="main__item_video" poster={portPoster}>
                <source src={portfolioWebm} type='video/webm' />
                <source src={portfolio} type='video/mp4' />
              </video>
              <div className='main__item_content'>
                <h2 className='main__item_text'>Online portfolio for you 
                </h2>
              </div>
            </div>
          </article>        
        </>
      ) : (
        <>
          <Card card={card}/>
        </>
      )
      }

    </main>
  )
}

export default Main;