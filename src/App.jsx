import { Post } from './Post.jsx'

export function App() {

  return (
    <>
      <h1>Hello World!</h1>
      <Post
        author="Nathan Sousa"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorum, et, laudantium qui nihil fugit cumque laborum nostrum, nam dolor aliquid minus ad sunt quod aliquam cupiditate odit reiciendis aut?"
      />
      <Post
        author="Nathan Sousa 2"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorum, et, laudantium qui nihil fugit cumque laborum nostrum, nam dolor aliquid minus ad sunt quod aliquam cupiditate odit reiciendis aut?"
      />
    </>
  )
}
