// Full videos play on the project page; short 640px previews play on the home page.
import infinclub from '../images/infinclub_mp4.mp4';
import infinclubWebm from '../images/infinclub_webm.webm';
import infinclubPreview from '../images/infinclub_preview.mp4';
import infinclubPreviewWebm from '../images/infinclub_preview.webm';
import portfolio from '../images/portfolio_mp4.mp4';
import portfolioWebm from '../images/portfolio_webm.webm';
import portfolioPreview from '../images/portfolio_preview.mp4';
import portfolioPreviewWebm from '../images/portfolio_preview.webm';
import vodopad from '../images/vodopad_mp4.mp4';
import vodopadWebm from '../images/vodopad_webm.webm';
import vodopadPreview from '../images/vodopad_preview.mp4';
import vodopadPreviewWebm from '../images/vodopad_preview.webm';
import photoEditor from '../images/photoeditor_mp4.mp4';
import photoEditorWebm from '../images/photoeditor_webm.webm';
import photoEditorPreview from '../images/photoeditor_preview.mp4';
import photoEditorPreviewWebm from '../images/photoeditor_preview.webm';
import infinPoster from '../images/infin-preloader.webp';
import portPoster from '../images/port-preloader.webp';
import vodoPoster from '../images/vodopad-preloader.webp';
import photoEditorPoster from '../images/photoeditor-preloader.webp';

// TODO: replace every `links` placeholder below with the real URLs.
// `kind` selects the tooltip style in Card.css (html | css | js | git).
const projects = [
  {
    slug: 'business',
    links: {
      live: 'https://paulmoskow.github.io/InFinClubConsulting',
      github: 'https://github.com/paulmoskow/InFinClubConsulting',
    },
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
    preview: infinclubPreview,
    previewWebm: infinclubPreviewWebm,
  },
  {
    slug: 'language',
    links: {
      live: 'https://vodopad.me/index_en.html',
      github: 'https://github.com/paulmoskow/vodopad',
    },
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
    preview: vodopadPreview,
    previewWebm: vodopadPreviewWebm,
  },
  {
    slug: 'aboutyou',
    links: {
      live: 'https://paulmoskow.github.io/portfolio',
      github: 'https://github.com/paulmoskow/portfolio',
    },
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
    preview: portfolioPreview,
    previewWebm: portfolioPreviewWebm,
  },
  {
    slug: 'photo-editor',
    links: {
      live: 'https://paulmoskow.github.io/meme-editor/',
      github: 'https://github.com/paulmoskow/meme-editor',
    },
    title: 'Online editor for images',
    tags: [
      { kind: 'html', name: 'React', description: 'Component-based interface with a compact toolbar for mobile screens' },
      { kind: 'css', name: 'TypeScript', description: 'Typed code makes the editor easier to maintain and extend' },
      { kind: 'js', name: 'Vite', description: 'Fast development server and optimized production build' },
      { kind: 'git', name: 'Fabric.js', description: 'Canvas library for placing and styling text over an image, with export to JPG' },
    ],
    poster: photoEditorPoster,
    video: photoEditor,
    videoWebm: photoEditorWebm,
    preview: photoEditorPreview,
    previewWebm: photoEditorPreviewWebm,
  },
];

export default projects;
