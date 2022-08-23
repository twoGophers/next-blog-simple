import React from 'react';
import Link from 'next/link';

export default function BlogItem({title, description, id}) {
  return (
    <div className="blog-item">
        <h5>{title}</h5>
        <p>
            {description}
        </p>
        <div className="text-align-right">
            <Link href='/blog/[id]' as={`/blog/${id}`}>
                <a>
                    Прочитать
                </a>
            </Link>
        </div>
    </div>
  )
}
