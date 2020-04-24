export default function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" style={{ whiteSpace: 'nowrap' }}>
      {children}
    </a>
  )
}
