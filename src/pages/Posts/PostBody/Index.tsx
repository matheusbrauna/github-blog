/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown'

interface PostBodyProps {
  postContent: string
}

export function PostBody({ postContent }: PostBodyProps) {
  return (
    <>
      <article className="p-8">
        <ReactMarkdown children={postContent} />
      </article>
    </>
  )
}
