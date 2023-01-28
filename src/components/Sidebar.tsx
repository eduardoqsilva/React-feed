import styles  from './Sidebar.module.css'
import  { PencilLine } from 'phosphor-react'
import { Avatar } from './avatar'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
        alt="cover" 
      />

      <div className={styles.profile}>
        
        <Avatar src={'https://avatars.githubusercontent.com/u/69441532?v=4'}/>

        <strong>Eduardo Queiroz</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine sixe={20}/>
          Editar seu perfil
          </a>
      </footer>
    </aside>
  )
}