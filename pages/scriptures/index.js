import Link from 'next/link'
import links from '../../data/links'

export default function Scriptures() {
  return (
    <div className="px-2">
      {links.map((collection, i) => (
        <div key={'scriptures-collection-' + i} className="mb-4">
          <div className="h4 mb-3">
            <u>{collection.name}</u>
          </div>
          <div>
            {collection.books.map((book, i) => (
              <div key={'scriptures-book-' + i}>
                <div className="h5 mb-2">{book.name}</div>
                <div
                  className="border bg-light p-2"
                  style={{
                    display: 'grid',
                    gridGap: 10,
                    gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))'
                  }}
                >
                  {book.chapters.map((chapter, i) => (
                    <Link
                      key={`scriptures-${book.name}-chapter-${i}`}
                      href={`/scriptures/${collection.href}/${book.href}/${chapter}`}
                    >
                      <a className="border m-auto bg-white">
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{ width: 50, height: 50 }}
                        >
                          {chapter}
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
