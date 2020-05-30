export default function Home() {
  return <></>
}

Home.getInitialProps = async(ctx) => {
  ctx.res.writeHead(302, { Location: '/home' })
  ctx.res.end()
  return
}