import { Client } from '../prismic-configuration'
import Prismic from "prismic-javascript";

const generateSitemap =(data, origin) => {
    let xml = ''
    data.results.map(page => {
      xml += `<url>
        <loc>${origin + page.uid}</loc>
        <lastmod>${page.last_publication_date}</lastmod>
      </url>`
    })
  
    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${xml}
      </urlset>`
  }
    
const SitemapIndex = () => null

export async function getServerSideProps({ res }) {
    const client = Client()
    let data = await client.query(
        Prismic.Predicates.at("document.type", "pa")
    )

    res.setHeader('Content-Type', 'text/xml')
    res.write(generateSitemap(data, 'https://quantum.gg/'))
    res.end()

    return {
        props: {},
    }
}

export default SitemapIndex