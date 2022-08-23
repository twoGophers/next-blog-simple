import Head from 'next/head'
import Image from 'next/image';
import BlogItem from '../components/BlogItem';
import Layout from '../components/Layout';

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout title='Главная'>
        <h1>Интересный блог</h1>
        <div className="posts">
          {posts.map(post => (
            <BlogItem title={post.title} description={post.body} id={post.id} key={post.id}></BlogItem>
          ))}
        </div>
      </Layout>
    </div>
  )
}


export const getServerSideProps = async() => {

  const data = await fetch(`${process.env.API_URL}/posts?_start=0&_limit=10`)
  const posts = await data.json()

  return {
    props: {posts}
  }
}