import infinclub from '../images/infinclub_mp4.mp4';
import infinclubWebm from '../images/infinclub_webm.webm';
import portfolio from '../images/portfolio_mp4.mp4';
import portfolioWebm from '../images/portfolio_webm.webm';
import vodopad from '../images/vodopad_mp4.mp4';
import vodopadWebm from '../images/vodopad_webm.webm';
import infinPoster from '../images/infin-preloader.jpg';
import portPoster from '../images/port-preloader.jpg';
import vodoPoster from '../images/vodopad-preloader.jpg';

// `kind` selects the tooltip style in Card.css (html | css | js | git).
const projects = [
  {
    slug: 'business',
    title: 'Card website for your business',
    tags: [
      { kind: 'html', name: 'HTML', description: 'With semantic tags the website is optimized for search engine visibility' },
      { kind: 'css', name: 'CSS', description: 'Responsive design is adaptable to various devices' },
      { kind: 'js', name: 'JS', description: 'Provides three types of contact methods to facilitate communication' },
      { kind: 'git', name: 'Webpack', description: 'Optimizes assets for improved performance and development efficiency' },
    ],
    poster: infinPoster,
    video: infinclub,
    videoWebm: infinclubWebm,
  },
  {
    slug: 'language',
    title: 'Multilingual business website',
    tags: [
      { kind: 'html', name: 'HTML', description: 'A multilingual version contributes to better indexing by search engines' },
      { kind: 'css', name: 'CSS', description: 'Responsive design is adaptable to various devices' },
      { kind: 'js', name: 'JS', description: 'Provides five types of contact methods to facilitate communication' },
      { kind: 'git', name: 'Webpack', description: 'Optimizes assets for improved performance and development efficiency' },
    ],
    poster: vodoPoster,
    video: vodopad,
    videoWebm: vodopadWebm,
  },
  {
    slug: 'aboutyou',
    title: 'Online portfolio for you',
    tags: [
      { kind: 'html', name: 'HTML', description: 'Responsible for tooltips to enhance user experience (UX)' },
      { kind: 'css', name: 'CSS', description: 'Helps attract users with a dynamic and responsive interface' },
      { kind: 'js', name: 'React', description: 'Enables efficient navigation within the app' },
      { kind: 'git', name: 'Git', description: 'Ensures version control and enhancing communication with team' },
    ],
    poster: portPoster,
    video: portfolio,
    videoWebm: portfolioWebm,
  },
];

export default projects;
