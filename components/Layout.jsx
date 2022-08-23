import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ImgBlog from '../public/images/blog.png';

export default function layout({title = 'Single Blog', description = '', children}) {
  return (
    <>
    <Head>
        <title>{title} || Next.js</title>
        <link rel="icon" href="/images/icons8-edit-64.ico" />
        <meta 
            content={description || 'Просттой блок Next.js'} 
            name="description"/>
        <meta   
            content={description || 'Просттой блок Next.js'}
            property="og:description"/>
    </Head>

    <header>
        <Link href="/">
            <a>Главная</a>
        </Link>
                <Image
            src={ImgBlog}
            alt="Picture of the author"
            height={50}
            width={50}
        >
        </Image>
    </header>

    <div className="container">
        {children}
    </div>

    <footer>
        2021 &copy; Simple Blog
    </footer>
  </>
  )
}
