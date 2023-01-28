import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/esm/locale'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface PostProps {
  author: {
    nome: string
    role: string
    avatarUrl: string
  },
  publishedAt: Date
  content: [{
    type: 'link' | 'paragraph'
    content: string
  }]
}

export function Post({ author, publishedAt, content }: PostProps) {

  const [comments, setComments] = useState([
    'Post muito legal, hein?!'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  const isNewCommentEmpty = newCommentText.length === 0

  function handleCreateNewComent(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    setNewCommentText(event.target.value)
    event.target.setCustomValidity('')
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é Obrigatório!')
  }
  function deleteComment(commentToDelete: string){
    console.log(`Deletar comentário: ${commentToDelete}`)
    const commentsWithoutDeletedOne = comments.filter(comment =>{
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.nome}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return (<p key={line.content}>{line.content}</p>)
          } else if (line.type === 'link') {
            return (<p key={line.content}><a href="#">{line.content}</a></p>)
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComent} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  )
}