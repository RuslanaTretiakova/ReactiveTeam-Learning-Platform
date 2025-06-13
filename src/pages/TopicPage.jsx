import { useParams } from 'react-router-dom'
import { topicsData } from '../data/topicsData'
import ReactMarkdown from 'react-markdown'

export default function TopicPage() {
  const { slug } = useParams()
  const topic = topicsData[slug]

  if (!topic) {
    return (
      <div className="container container--center">
        <h1>Ooops!</h1>
        <h2>Topic not found</h2>
      </div>
    )
  }

  if (
    !topic.sections ||
    !Array.isArray(topic.sections) ||
    topic.sections.length === 0
  ) {
    return (
      <div className="container container--center">
        <h2>This topic is currently empty.</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>{topic.title}</h1>
      {topic.sections.map((section, index) => {
        if (!section) return null

        const { heading, content, table, code } = section
        let contentMarkdown = ''

        if (content) {
          if (Array.isArray(content)) {
            contentMarkdown = content.join('\n\n')
          } else {
            contentMarkdown = content
          }
        }

        return (
          <section key={index}>
            {heading && <h2>{heading}</h2>}
            {contentMarkdown && (
              <ReactMarkdown>{contentMarkdown}</ReactMarkdown>
            )}
            {code && (
              <pre>
                <code>{code}</code>
              </pre>
            )}
            {table && (
              <table className="table">
                <thead>
                  <tr>
                    {table.head.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        )
      })}
    </div>
  )
}
