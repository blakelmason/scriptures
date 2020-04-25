import './Template.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import SubTemplate from './SubTemplate'

const pages = [
  { name: 'Home', href: '/' },
  { name: 'Scriptures', href: '/scriptures' },
  { name: 'Topics', href: '/topics' },
]

export default function Template({ children }) {
  const { pathname } = useRouter()
  return (
    <div className="bg-secondary">
      <div
        className="bg-white mx-auto pb-3"
        style={{ maxWidth: 1200, minHeight: '100vh' }}
      >
        <div className="display-4 text-center pt-3 mb-3">Study</div>
        <div
          className="border-top border-bottom bg-light py-1 d-flex justify-content-around mb-4"
          style={{
            position: 'sticky',
            top: 0,
          }}
        >
          {pages.map(({ name, href }, i) => {
            const path = href === pathname
            return (
              <Link href={href} key={'template-nav-link-' + i}>
                <a
                  className={classNames({
                    underline: path,
                    ['text-dark']: path,
                  })}
                >
                  {name}
                </a>
              </Link>
            )
          })}
        </div>
        <div className="mx-3">
          <SubTemplate>{children}</SubTemplate>
        </div>
      </div>
    </div>
  )
}
