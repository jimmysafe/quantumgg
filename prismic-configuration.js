import Prismic from 'prismic-javascript'
 
export const apiEndpoint = 'https://quantumgg.cdn.prismic.io/api/v2'
export const accessToken = ''
 
// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)
 
const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const linkResolver = (doc) => {
    if (doc.type === 'pa') {
      return `/${doc.uid}`
    }
    return '/'
  }
  
  // Additional helper function for Next/Link components
  export const hrefResolver = (doc) => {
    if (doc.type === 'pa') {
      return '/[page]'
    }
    return '/'
  }