import { useRouter } from 'next/router'
import { topics } from '../data/links'
import find from 'lodash/find'

export default function Topic({ children }) {
  const { pathname } = useRouter()
  const topic = pathname.split('/')[2].split('-').join(' ').toUpperCase()
  const upper = find(topics, ({ letter }) => letter === topic[0]).topics.find(
    (name) => name.toUpperCase() === topic
  )
  return (
    <div>
      <h4>{upper}</h4>
      <hr />
      {children}
    </div>
  )
}
