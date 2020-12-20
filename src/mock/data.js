import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gunnar Sikorski | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Software Developer',
  name: 'Gunnar Sikorski',
  subtitle: 'Always more to learn',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot-gun.jpg',
  paragraphOne:
    'I’m a software developer who loves to create for other people things they couldn’t themselves, that serve a purpose of making their life easier and more efficient. I’m inspired to create efficiently, to be proud of what I’ve made at the end of the day.',
  paragraphTwo:
    'I value honesty, balance, and communication in my work and hold them close in my own professional practice, while being patient and listening to those around me, working toward a final solution to benefit everyone involved. My past experience in the commercial film world has equipped me well in dealing with tight deadlines, managing client expectations, and delivering a final product successfully.',
  paragraphThree:
    'Currently based in Minneapolis, MN - Looking forward to my next great opportunity',
  resume:
    'https://docs.google.com/document/d/17tlXA68P36OXKXGs5MBjvqyuKlT5GA81UajsoGxg2PA/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'home.png',
    title: 'Recipicks',
    info:
      "I love cooking at home and exploring new dishes - trying recipes that challenge me. With Recipicks, a user can simply click through a randomized repertoire of recipes until they land on one that excites! Once the user selects a recipe they'll have all the information they need to replicate it. This app was built with JavaScript, React, and Bootstrap",
    info2: '',
    url: 'https://recipicks.herokuapp.com/',
    repo: 'https://github.com/gunnarsikorski/recipicks', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'darth.png',
    title: 'Lego Collector',
    info:
      "Collecting Legos is a hobby of mine - and I know many others do the same. So I decided to make a personal Lego inventory tracker, where a user can see available sets from the database I've created, find something specific, and save it on a list of their choice, leaving reviews on sets along the way! The database will continue to grow. This app was built with JavaScript, React, and Material UI",
    info2: '',
    url: 'https://lego-collector-react.herokuapp.com/',
    repo: 'https://github.com/gunnarsikorski/legolife', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sample-data.png',
    title: 'Lego Database',
    info:
      'This API was built with Python using Django REST Framework and includes models for Legos, reviews, and users. And using djoser, scaffolded for user authentication',
    info2: '',
    url: 'https://pure-sierra-61007.herokuapp.com/legos/',
    repo: 'https://github.com/gunnarsikorski/legos', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in what I do? Perfect!',
  btn: '',
  email: 'gunnarsikorski@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gunnar-sikorski/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gunnarsikorski',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
