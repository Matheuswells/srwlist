import Head from 'next/head'
import Link  from 'next/link'

function Home({ posts }) {

  return (
    <center>
    <div>
      <Head>
        <title>posts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ul>
      {posts.map( post => (
        <li key={post.id}>
          <p><Link href={`details/${post.id}`} >{post.name}</Link> {post.count}</p>
        </li>
      ))}
    </ul>
  </div>
  </center>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3333/posts')
  const posts = await res.json()


  return {
    props: { posts }
  }
  
}

export default Home