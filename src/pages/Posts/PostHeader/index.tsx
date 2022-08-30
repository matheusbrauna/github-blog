import { TbExternalLink as LinkIcon } from 'react-icons/tb'
import {
  FaChevronLeft as BackIcon,
  FaGithub as GithubIcon,
  FaCalendarDay as CalendarIcon,
  FaComment as CommentIcon,
} from 'react-icons/fa'
import { IPosts } from '../../Home'
import { Spinner } from '../../../components/Spinner'
import { useNavigate } from 'react-router-dom'

interface PostHeaderProps {
  postData: IPosts
  isLoading: boolean
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate('/')
  }

  return (
    <header className="p-8 bg-base-700 rounded-[10px] -mt-[4.5rem] shadow-xl">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex justify-between font-bold uppercase flex-start text-brand-500">
            <a href="" className="flex items-center gap-2" onClick={goBack}>
              <BackIcon size={12} />
              Voltar
            </a>
            <a href={postData.html_url} className="flex items-center gap-2">
              Ver no github
              <LinkIcon size={12} />
            </a>
          </div>

          <h1 className="mt-5 mb-2 text-2xl">{postData.title}</h1>

          <div className="flex justify-start gap-6">
            <div className="flex items-center gap-2">
              <GithubIcon size={18} className="text-base-400" />
              <span>{postData.user.login}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon size={18} className="text-base-400" />
              <time>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(postData.created_at),
                )}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <CommentIcon size={18} className="text-base-400" />
              <span>{postData.comments} Comentários</span>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
