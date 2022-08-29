import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Profile } from './Profile'

interface IssuesProps {
  comments: string
  repository_url: string
  title: string
  body: string
  created_at: string
}

interface SearchIssueProps {
  text: string
  username: string
  repo: string
}

export function Home() {
  const [issues, setIssues] = useState<IssuesProps[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    api
      .get(`/repos/matheusbrauna/reactjs-github-blog-challenge/issues`)
      .then((response) => setIssues(response.data))
  }, [])

  function handleSearchIssue({ text, username, repo }: SearchIssueProps) {
    api.get(`/search/issues?q=${text}%20repo:${username}/${repo}`)
    return {}
  }

  return (
    <>
      <Profile />
      <div className="flex justify-between mt-[4.5rem] mb-3">
        <h2>Publicações</h2>
        <span>
          {issues.length} {issues.length < 0 ? 'publicações' : 'publicação'}
        </span>
      </div>

      <form onSubmit={() => handleSearchIssue()}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Buscar conteúdo"
          className="w-full px-4 py-3 mb-12 border rounded-md bg-base-900 placeholder:text-base-400 border-base-500"
        />
      </form>

      {issues.map((issue) => (
        <section className="grid grid-cols-2 gap-8" key={issue.repository_url}>
          <article className="max-w-[26rem] max-h-[260px] p-8 overflow-hidden text-ellipsis bg-base-700 rounded-[10px]">
            <header className="flex gap-4 mb-5 flex-start">
              <h1 className="text-xl">{issue.title}</h1>
              <time
                className="text-sm whitespace-nowrap"
                dateTime={issue.created_at}
              >
                {new Intl.DateTimeFormat('pt-br').format(
                  new Date(issue.created_at),
                )}
              </time>
            </header>
            <p className="leading-6">{issue.body}</p>
          </article>
        </section>
      ))}
    </>
  )
}
