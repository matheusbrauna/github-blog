import { TbExternalLink as LinkIcon } from 'react-icons/tb'
import {
  FaChevronLeft as BackIcon,
  FaGithub as GithubIcon,
  FaCalendarDay as CalendarIcon,
  FaComment as CommentIcon,
} from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { PostHeader } from './PostHeader'
import { IPosts } from '../Home'
import { PostBody } from './PostBody/Index'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPO

export function Posts() {
  const [postData, setPostData] = useState<IPosts>({} as IPosts)
  const [isLoading, setIsLoading] = useState(true)

  const { issueNumber } = useParams()

  const getFullPost = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${repo}/issues/${issueNumber}`,
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [issueNumber])

  useEffect(() => {
    getFullPost()
  }, [getFullPost])

  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostBody postContent={postData.body} />}
    </>
  )
}
