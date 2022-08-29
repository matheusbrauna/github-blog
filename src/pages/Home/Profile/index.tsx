import { TbExternalLink as LinkIcon } from 'react-icons/tb'
import {
  FaGithub as GithubIcon,
  FaBuilding as BuildingIcon,
  FaUserFriends as UsersIcon,
} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'

interface ProfileProps {
  id: number
  avatar_url: string
  name: string
  user_name: string
  bio: string
  login: string
  followers: number
  company?: string
  html_url?: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)

  useEffect(() => {
    api
      .get('/users/matheusbrauna')
      .then((response) => setProfile(response.data))
  }, [])

  return (
    <section className="flex items-center shadow-xl gap-8 px-10 py-8 bg-base-700 rounded-[10px] -mt-[4.5rem]">
      <div className="object-cover object-center overflow-hidden rounded-lg">
        <img src={profile.avatar_url} alt="" />
      </div>

      <div>
        <div className="flex justify-between flex-start">
          <h1 className="text-2xl">{profile.name}</h1>
          <a
            href={profile.html_url}
            className="flex gap-2 font-bold uppercase text-brand-500"
          >
            Github <LinkIcon className="self-center" size={12} />
          </a>
        </div>

        <p className="mt-2 mb-6 text-base text-base-300">{profile.bio}</p>

        <div className="flex justify-start gap-6">
          <div className="flex items-center gap-2">
            <GithubIcon size={18} className="text-base-400" />
            <span>{profile.name}</span>
          </div>
          <div className="flex items-center gap-2">
            {profile.company && (
              <>
                <BuildingIcon size={18} className="text-base-400" />
                <span>{profile.company}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <UsersIcon size={18} className="text-base-400" />
            <span>{profile.followers} seguidores</span>
          </div>
        </div>
      </div>
    </section>
  )
}
