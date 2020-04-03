import collections from '../data/links'
import find from 'lodash/find'
import Link from 'next/link'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import { useRouter } from 'next/router'

export default function Chapter({ children }) {
  const split = useRouter().pathname.split('/')
  const collection = find(collections, ({ href }) => href === split[2])
  const book = find(collection.books, ({ href }) => href === split[3])
  const chapters = book.chapters
  const chapter = split[4]
  const index = chapters.indexOf(Number(chapter))
  const fontSize = 35
  return (
    <>
      <div className="h3 text-center d-flex justify-content-between">
        <div className="ml-4" style={{ width: fontSize }}>
          {index > 0 && (
            <Link
              href={`/scriptures/${collection.href}/${book.href}/${
                chapters[index - 1]
              }`}
            >
              <a className="chapter-chevron">
                <ChevronLeft style={{ fontSize }} />
              </a>
            </Link>
          )}
        </div>
        <div>
          {book.name} {chapter}
        </div>
        <div className="mr-4" style={{ width: fontSize }}>
          {index < chapters.length - 1 && (
            <Link
              href={`/scriptures/${collection.href}/${book.href}/${
                chapters[index + 1]
              }`}
            >
              <a className="chapter-chevron">
                <ChevronRight style={{ fontSize }} />
              </a>
            </Link>
          )}
        </div>
      </div>
      <div className="p-2">{children}</div>
    </>
  )
}
