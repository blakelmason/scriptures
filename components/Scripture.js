import bookOfMormon from '../data/bookOfMormon'
import format from '../data/cjcFormat'
import find from 'lodash/find'
import { v1 as uuidv1 } from 'uuid'

const scriptures = {
  ['Book of Mormon']: bookOfMormon
}

export default function Scripture({ data }) {
  const { collection, book, chapter, verses } = data
  const split = verses.split('-')
  const first = split[0]
  const last = split[1] || first
  const versesArr = []
  for (let i = first; i <= last; i++) {
    versesArr.push(i)
  }
  const href = `https://www.churchofjesuschrist.org/study/scriptures/${format[collection]}/${format[book]}/${chapter}.${verses}?lang=eng#${split[0]}`
  return (
    <div className="border rounded p-3 bg-light mb-4">
      <div className="mb-3">
        <a href={href} target="_blank" className="h4">
          {book} {chapter} : {verses}
        </a>
      </div>
      <div style={{ display: 'grid', gridGap: 18 }}>
        {versesArr.map(verse => (
          <div
            key={uuidv1()}
            style={{
              textJustify: 'inter-word',
              textAlign: 'justify',
              fontSize: 18
            }}
          >
            <div
              className="d-inline-block"
              style={{ fontWeight: 700, marginRight: 12 }}
            >
              {verse}
            </div>
            {
              find(scriptures[collection].books, item => item.book === book)
                .chapters[chapter - 1].verses[verse - 1].text
            }
          </div>
        ))}
      </div>
    </div>
  )
}
