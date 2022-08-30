import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { IPosts } from '../../pages/Home'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchInputData = z.infer<typeof SearchFormSchema>

interface SearchInputProps {
  getPosts: (text?: string) => Promise<void>
  postLength: number
}

export function SearchInput({ getPosts, postLength }: SearchInputProps) {
  const { register, handleSubmit, reset } = useForm<SearchInputData>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchPosts(data: SearchInputData) {
    await getPosts(data.query)
    reset()
  }

  return (
    <>
      <header className="flex justify-between mt-[4.5rem] mb-3">
        <h2>Publicações</h2>
        <span>
          {postLength} {postLength > 1 ? 'publicações' : 'publicação'}
        </span>
      </header>
      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="w-full px-4 py-3 mb-12 border rounded-md bg-base-900 placeholder:text-base-400 border-base-500"
          {...register('query')}
        />
      </form>
    </>
  )
}
