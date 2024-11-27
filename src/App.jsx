import { Header } from './components/Header.jsx'
import { Post } from './Post.jsx'
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Nathan Sousa"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorum, et, laudantium qui nihil fugit cumque laborum nostrum, nam dolor aliquid minus ad sunt quod aliquam cupiditate odit reiciendis aut?"
          />
          <Post
            author="Nathan Sousa 2"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorum, et, laudantium qui nihil fugit cumque laborum nostrum, nam dolor aliquid minus ad sunt quod aliquam cupiditate odit reiciendis aut?"
          />
        </main>
      </div>
    </>
  )
}
