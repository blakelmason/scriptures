import Scripture from '../components/Scripture'

export default function Home() {
  return (
    <div>
      <Scripture
        data={{
          collection: 'Book of Mormon',
          book: '2 Nephi',
          chapter: 4,
          verses: 15,
        }}
      />
      <div style={{ maxWidth: 400 }}>
        <img
          className="img-fluid border rounded shadow-sm"
          src="https://media.ldscdn.org/images/media-library/gospel-art/book-of-mormon/mormon-abridging-the-plates-39649-wallpaper.jpg?download=true"
        />
      </div>
    </div>
  )
}
