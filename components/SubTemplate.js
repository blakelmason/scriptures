import { useRouter } from 'next/router'
import Chapter from './Chapter'
import Topic from './Topic'

export default function SubTemplate({ children }) {
  const router = useRouter()
  const split = router.pathname.split('/')
  const path = split[1]
  if (split.length > 2) {
    return {
      scriptures: <Chapter>{children}</Chapter>,
      topics: <Topic>{children}</Topic>,
    }[path]
  } else return children
}
