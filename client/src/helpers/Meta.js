import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Kurakoo | Always Seek Knowledge💡!',
  description: 'Kurakoo is specially catered to meet the needs of school/college students. Students from different colleges/universities around the world visit Kurakoo to ask questions to a community of people who are always ready to answer them',
  keywords: 'knowledge,questions,answers,ask,reply,community,school,college,students',
}

export default Meta