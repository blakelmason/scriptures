import Scripture from '../../../../components/Scripture'
import ExternalLink from '../../../../components/ExternalLink'

export default function Chapter20() {
  return (
    <>
      <Scripture
        data={{
          collection: 'Book of Mormon',
          book: '1 Nephi',
          chapter: 20,
          verses: '1',
        }}
      />
      <p>
        The first verse points out the covenant relationship of Israel as a
        nation, and Isaiah lists many points, and then he contrasts all of these
        points with the wickedness of the people. Below is a list of each point
        Isaiah makes.
      </p>
      <ol>
        <li>"house of Jacob"</li>
        <li>
          <a
            href="https://www.abarim-publications.com/Meaning/Israel.html#.XoUeZdPYomI"
            target="_blank"
          >
            "the name of Israel"
          </a>
        </li>
        <li>
          "come forth out of the waters of Judah, or out of the waters of
          baptism"
        </li>
        <li>"who swear by the name of the Lord"</li>
        <li>"make mention of the God of Israel"</li>
      </ol>
      <p>
        Isaiah then contrasts all these points with the condemning phrase "yet
        they swear not in truth nor in righteousness". The rest of the chapter
        we should keep this context in mind: Isaiah is speaking to people who
        have a knowledge of God, but who are choosing unrighteousness.
      </p>
      <Scripture
        data={{
          collection: 'Book of Mormon',
          book: '1 Nephi',
          chapter: 20,
          verses: '2',
        }}
      />
      <p>
        Isaiah continues by describing the hypocrisy of the people. See{' '}
        <ExternalLink href="https://speeches.byu.edu/talks/donald-w-parry/angels-chariots-and-the-lord-of-hosts/">
          Lord of Hosts
        </ExternalLink>{' '}
        and go to the section titled "The Angels of the Lord of Hosts" for more
        information about the title "Lord of Hosts".
      </p>
      <Scripture
        data={{
          collection: 'Book of Mormon',
          book: '1 Nephi',
          chapter: 20,
          verses: '3',
        }}
      />
    </>
  )
}
