import { DiFirebase, DiHtml5, DiJava, DiJavascript, DiPython, DiReact, DiZend, DiNodejs, DiAndroid, DiWindows, DiHtml5Multimedia, DiCss3, DiGit, DiGithub, DiMongodb, DiMysql, DiPostgresql, DiAngularSimple, DiStackoverflow, DiVisualstudio, DiLinux, DiApple, DiMailchimp, DiJavascript1} from 'react-icons/di';

export const projects = [
  {
    title: 'Online MarketPlace',
    description:"Built an online marketplace using the MERN stack. Users first must register, and can then buy or sell prodcts. Sellers can create shops, and there an auction feature with real-time bidding implemented through Socket.io. Stripe is used for payment processing.",
    image: '/images/mee.png',
    tags: ['MERN','Socket.io', 'Stripe'],
    code: 'https://github.com/rmujtaba2024/Spotify-App--React',
    visit: 'www.ranamujtaba.com',
    id: 0,
  },
  {
    title: 'Chat Web Application',
    description: "Created a full-stack chat application for users to communicate. Users must register or use the guest login feature. I used Socket.io to implement real-time message broadcasting. Users can either chat privately or in chatrooms.",
      image: '/images/chat.png',
      tags: ['MERN', 'Socket.io'],
      code: 'https://github.com/rmujtaba2024/Keep-Texting-Chat-App-MERN',    
      visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'Spotify Connected React App',
    description:"Built a full-stack web application to visualise personalized spotify data. On the front end, I used React, React Hooks, and Styled Components. I implemented Spotify OAuth, and pulled data from the Spotify API. Users can view their top artists, song. They can make playlists of their top songs.",
    image: '/images/spo.png',
    tags: ['React','Node.js', 'Spotify API'],
    code: 'https://github.com/rmujtaba2024/Spotify-App--React',
    visit: 'www.ranamujtaba.com',
    id: 0,
  },
  {
    title: 'Web-Scraping Tool',
    description: "Scraped https://github.com/topics and got a list of of topics and for every topic I got the the topic title, topic page URL and topic description. For each topic, I got the top 30 repositories in the topic from the topic page. For each repository I used the repo name, username, stars and repo URL. Then I created a CSV file for each repository in the following format: Repo Name, Username, Stars, Repo URL.",
      image: '/images/1.png',
      tags: ['Python', 'Jupyter Notebook'],
      code: 'https://github.com/rmujtaba2024/Python---Web-Scraping-github-repos',    
      visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'Library call number Simulation',
    description: "Library call numbers are difficult to understand and sort. This training simulation will help library student interns at universities to practice sorting calling numbers and shelving books.",
      image: 'https://user-images.githubusercontent.com/98848760/177051083-965b8974-46dc-4034-970a-4a7030905ba0.jpeg',
      tags: ['JavaScript', 'CSS3','React'],
    source: 'https://github.com/rmujtaba2024/Library_Call_Numbers_Training_Simulation',
    visit: 'hhttps://github.com/Mustafa-990/Library_Call_Numbers_Training_Simulation',
    id: 2,
  },
  {
    title: 'Python Chat Application GUI',
    description: "Created a real time chat application in Python with a GUI. Utilized the socket library to implement real time broadcasting, and the tkinter library for the interface. Wrote modular, scalable and readable code for future improvements.",
      image: '/images/pchat.png',
      tags: ['Python', 'Socket', 'Tkinter'],
      code: 'https://github.com/rmujtaba2024/Python-Chat-App-GUI',    
      visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'Sorting-Algorithm Visualiser',
    description: "Build a visualization tool for sorting algorithms such as Heap Sort, Quick Sort, Merge Sort and Bubble Sort. Implemented a functionality to modify sorting speed and array size.",
      image: '/images/3.jpg',
      tags: ['React', 'JavaScript'],
    code: 'https://github.com/rmujtaba2024/Sorting-Algorithm-Visualizer',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'Personal Pertfolio',
    description:"Created a portfolio website using React and Next.js to showcase my skills to potential employers. Used React styled-components and React icons. The website is completely responsive.",
    image: '/images/2.png',
    tags: ['JavaScript', 'React','Styled Components'],
    code: 'https://github.com/rmujtaba2024/JavaScript-Weather-App',
    visit: 'www.ranamujtaba.com',
    id: 0,
  }
];

export const TimeLineData = [
  { year: 2017, text: 'Started coding in High School', },
  { year: 2018, text: 'First tech internship back home', },
  { year: 2019, text: 'Started my Bachelors in CS at DePauw', },
  { year: 2020, text: 'Started LeetCode', },
  { year: 2020, text: 'Created my first full-stack project', },
  { year: 2021, text: 'Looking for my first internship in the states', },
];

export const TechnologiesData = [
  { image: '/images/7.png', text: 'Python', },
  { image: '/images/js.png', text: 'JavaScript', },
  { image: '/images/html2.png', text: 'HTML 5', },
  { image: '/images/css.png', text: 'CSS 3', },
  { image: '/images/8.png', text: 'Java', },
  { image: '/images/react.png', text: 'React.js', },
  { image: '/images/ang.png', text: 'Angular.js', },
  { image: '/images/node.png', text: 'Node.js', },
  { image: '/images/e.png', text: 'Express.js', },
  { image: '/images/msql.png', text: 'MySQL', },
  { image: '/images/psql.png', text: 'PostgreSQL', },
  { image: '/images/mdb.png', text: 'MongoDB', },
  { image: '/images/git.png', text: 'Git', },
  { image: '/images/ghub.png', text: 'GitHub', },
];