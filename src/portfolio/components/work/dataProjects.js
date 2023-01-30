import heroes from '../../../assets/heroes.png';
import moustach from '../../../assets/moustach.png';
import axure from '../../../assets/axure.png';
import toDos from '../../../assets/searchTodos.png';
import gifSearch from '../../../assets/gifSearch.png';

export const dataProjects = [
  {
    id: 1,
    image: heroes,
    title: "HeroesApp",
    description: "Desarrollo de App para encontrar a tu héroe favorito.",
    url: "https://search-heroes-app.netlify.app/",
    category: "desarrollo web",
  },
  {
    id: 2,
    image: axure,
    title: "Landing Page",
    description: "Rediseño de Landing Page Axure en figma UI.",
    url: "https://www.behance.net/gallery/161227699/Axure-landing-page-redesign",
    category: "diseño",
  },
  {
    id: 3,
    image: moustach,
    title: "Moustach App",
    description: "Diseño de App para reservar citas en las barberías UX/UI.",
    url: "https://www.behance.net/gallery/111882595/Moustach-UXUI",
    category: "diseño",
  },
  {
    id: 4,
    image: gifSearch,
    title: "GifApp",
    description: "Desarrollo de buscador de Gifs, proyecto realizado con React.",
    url: "https://gif-app-miauw.netlify.app/",
    category: "desarrollo web",
  },
  {
    id: 5,
    image: toDos,
    title: "To do list",
    description: "Desarrollo de Lista de tareas, proyecto realizado con React.",
    url: "https://neyza24.github.io/todoList/",
    category: "desarrollo web",
  },
];

export const projectsNav = [
  {
    name: 'todos',
  },
  {
    name: 'desarrollo web',
  },
  {
    name: 'diseño',
  }
]