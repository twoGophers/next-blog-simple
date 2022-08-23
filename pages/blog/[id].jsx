import React from 'react'
import Layout from '../../components/Layout'

export default function SinglePost({post}) {
if(!post) {
    return 'Поста нет'
}
  return (
    <>
        <Layout title={post.title} description={post.body}> 
            <h1 className='post-title'>{post.title}</h1>
            <p className='post-description'>
                {post.body}
            </p>
        </Layout>
    </>
  )
}


export const getServerSideProps = async({query}) => {

    const data = await fetch(`${process.env.API_URL}/posts/${query.id}`)
    const post = await data.json()
  
    return {
      props: {post}
    }
  }