export type ProjectCategory = 'Websites' | 'Apps & games';

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  url: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: 'agro-foods',
    title: 'Agro Foods',
    category: 'Websites',
    description: 'A fresh, welcoming website concept for a farming business, bringing its produce and sustainable approach into focus.',
    tags: ['Webflow', 'Web design', 'Concept'],
    url: 'https://agro-foods.webflow.io/',
    image: 'agro-foods.jpg',
    imageAlt: 'Agro Foods homepage with a corn harvest photograph and organic produce introduction',
  },
  {
    id: 'frontend-mentor',
    title: 'Frontend Mentor Gallery',
    category: 'Websites',
    description: 'An evolving collection of frontend challenges. Responsive layouts, useful little tools, and plenty of learning by doing.',
    tags: ['HTML & CSS', 'JavaScript', 'React'],
    url: 'https://frontend-mentor-gallery.netlify.app/',
    image: 'frontend-mentor.jpg',
    imageAlt: 'Frontend Mentor Gallery showing a collection of completed interface challenges',
  },
  {
    id: 'total-20',
    title: 'Total 20',
    category: 'Apps & games',
    description: 'A multiplayer card game exploring real-time play, private match rooms, and a little friendly competition.',
    tags: ['React', 'Socket.IO', 'Card game'],
    url: 'https://total-20.netlify.app/',
    image: 'total-20.jpg',
    imageAlt: 'Total 20 game lobby with options to create or join a match',
  },
  {
    id: 'javafighter',
    title: 'JavaFighter',
    category: 'Apps & games',
    description: 'A two-player browser fighting game. A hands-on exploration of sprite animation, keyboard controls, and game logic.',
    tags: ['JavaScript', 'HTML Canvas', 'Learning project'],
    url: 'https://javafightertl.netlify.app/',
    image: 'javafighter.jpg',
    imageAlt: 'JavaFighter pixel-art fighting arena with two characters and health bars',
  },
  {
    id: 'capstone-blog',
    title: 'The Capstone Blog',
    category: 'Apps & games',
    description: 'A web development capstone for writing, editing, and sharing posts. An introduction to building on the server.',
    tags: ['Node.js', 'Express', 'EJS'],
    url: 'https://capstone-blog.onrender.com/',
    image: 'capstone-blog.jpg',
    imageAlt: 'Tumelo’s Blog homepage showing its introduction and blog posts',
  },
  {
    id: 'webflow-archive',
    title: 'The Webflow Collection',
    category: 'Websites',
    description: 'Where it started: an earlier portfolio of website concepts and Webflow builds. A look at my design foundations.',
    tags: ['Webflow', 'Web design', 'Design archive'],
    url: 'https://tumelo-portfolio.webflow.io/#Portfolio',
    image: 'webflow-archive.jpg',
    imageAlt: 'Earlier Webflow portfolio showcasing website design projects',
  },
];
