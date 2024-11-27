import styles from './Sidebar.module.css';

import mountainsUniverse from '../assets/mountains-universe.png'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src={mountainsUniverse} 
      />
      <div className={styles.profile}>
        <strong>Nathan Sousa</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}