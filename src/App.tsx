import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/eduardoqsilva.png',
      nome: 'Eduardo Queiroz',
      role: 'Front-end Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'edu.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-23 21:14:35'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
      nome: 'Fernando Silva',
      role: 'Android Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala povo 👏'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu gitHub. É um projeto que fiz no NLW Return. O nome do projeto é DoctorCare 😍 Vão lá conferir:'},
      {type: 'link', content: 'fernando.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-25 21:24:35'),
  },
]

export function App() {


  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post =>{
           return(
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })} 
        </main>
      </div>
    </div>
  )
}
