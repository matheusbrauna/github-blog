import { useCallback, useEffect, useState } from 'react'
import { Post } from '../../components/Post'
import { SearchInput } from '../../components/SearchInput'
import { Spinner } from '../../components/Spinner'
import { api } from '../../services/api'
import { Profile } from './Profile'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPO

export interface IPosts {
  body: string
  created_at: string
  comments: string
  html_url: string
  number: number
  title: string
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<IPosts[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async (text: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${text}%20repo:${username}/${repo}`,
      )

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  const postLength = posts.length

  return (
    <>
      <Profile />
      <SearchInput getPosts={getPosts} postLength={postLength} />
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="grid grid-cols-2 gap-8">
          {posts.map((post) => (
            <Post post={post} key={post.number} />
          ))}
        </section>
      )}
    </>
  )
}
