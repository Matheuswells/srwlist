import Head from 'next/head'
import { useRouter } from 'next/router'

const Post = ({ posts }) => {

  return (
    <center>
    <div>
        <Head>
        {posts.map(post => <title>{post.name}</title>)}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        {posts.map(post => <h1>{post.name}</h1>)}
    </div>
    </center>
  )
}

Post.getInitialProps = async ({ query }) => {
  const { id } = query
  const res = await fetch(`http://localhost:3333/posts?id=${id}`)
  const posts = await res.json()
  return { posts }
}

export default Post