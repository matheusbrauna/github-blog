import { TbExternalLink as LinkIcon } from 'react-icons/tb'
import {
  FaChevronLeft as BackIcon,
  FaGithub as GithubIcon,
  FaCalendarDay as CalendarIcon,
  FaComment as CommentIcon,
} from 'react-icons/fa'

export function Posts() {
  return (
    <>
      <section className="p-8 bg-base-700 rounded-[10px] -mt-[4.5rem] shadow-xl">
        <div className="flex justify-between font-bold uppercase flex-start text-brand-500">
          <a href="" className="flex items-center gap-2">
            <BackIcon size={12} />
            Voltar
          </a>
          <a href="" className="flex items-center gap-2">
            Ver no github
            <LinkIcon size={12} />
          </a>
        </div>

        <h1 className="mt-5 mb-2 text-2xl">
          JavaScript data types and data structures
        </h1>

        <div className="flex justify-start gap-6">
          <div className="flex items-center gap-2">
            <GithubIcon size={18} className="text-base-400" />
            <span>Matheus</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon size={18} className="text-base-400" />
            <time>Há 1 dia</time>
          </div>
          <div className="flex items-center gap-2">
            <CommentIcon size={18} className="text-base-400" />
            <span>5 Comentários</span>
          </div>
        </div>
      </section>

      <article className="p-8">
        <p className="mb-4">
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>

        <h2 className="font-normal underline text-brand-500">Dynamic typing</h2>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all types
        </p>

        <div className="p-4 rounded-[2px] bg-base-600 mt-6">
          <pre>
            <code>let foo = 42; // foo is now a number</code>
            <br />
            <code>foo = &apos;bar&apos; // foo is now a string</code>
            <br />
            <code>foo = true; // foo is now a boolean</code>
          </pre>
        </div>
      </article>
    </>
  )
}
