import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


interface CommentsProps{
  content: string
  onDeleteComment: (comment: string) => void

}

export function Comment({ content, onDeleteComment }:CommentsProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }
  function handleLikeComment(){
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/eduardoqsilva.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Q</strong>
              <time title='23 de janeiro às 21:14h' dateTime='2023-01-23 21:14:36'>Cerca de 1h atrás</time>
            </div>
            <button
              onClick={handleDeleteComment}
              title='deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>


    </div>
  )
}