import { useRouter } from 'next/router'
import Chapter from './Chapter'

export default function SubTemplate({ children }) {
  const router = useRouter()
  const split = router.pathname.split('/')
  const path = split[1]
  if (split.length > 2 && path === 'scriptures')
    return <Chapter>{children}</Chapter>
  else return children
}
