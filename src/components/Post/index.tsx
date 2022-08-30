import { NavLink } from 'react-router-dom'
import { IPosts } from '../../pages/Home'

interface PostProps {
  post: IPosts
}

export function Post({ post }: PostProps) {
  return (
    <NavLink to={`/posts/${post.number}`}>
      <article
        key={post.number}
        className="max-w-[26rem] max-h-[260px] p-8 overflow-hidden text-ellipsis bg-base-700 rounded-[10px]"
      >
        <header className="flex gap-4 mb-5 flex-start">
          <h1 className="text-xl">{post.title}</h1>
          <time
            className="text-sm whitespace-nowrap"
            dateTime={post.created_at}
          >
            {new Intl.DateTimeFormat('pt-br').format(new Date(post.created_at))}
          </time>
        </header>
        <p className="leading-6">{post.body}</p>
      </article>
    </NavLink>
  )
}
