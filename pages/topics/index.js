import { Fragment } from 'react'
import Link from 'next/link'
import { topics as links } from '../../data/links'
import stringToRoute from '../../util/stringToRoute'

export default function Topics() {
  return (
    <div>
      {links.map(({ letter, topics }, i) => (
        <Fragment key={letter + '-' + i}>
          <div className="h3" style={{ textDecoration: 'underline' }}>
            {letter}
          </div>
          <div className="row">
            {topics.map((topic, i) => {
              return (
                <div className="col" key={topic + '-' + i}>
                  <Link href={`/topics/${stringToRoute(topic)}`}>
                    <a>{topic}</a>
                  </Link>
                </div>
              )
            })}
          </div>
        </Fragment>
      ))}
    </div>
  )
}
