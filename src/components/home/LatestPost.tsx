import { getLatestBlogs } from '@/lib/actions'
import { formateDate, getMDXData, slugify } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const LatestPost = async () => {
    const data = await getLatestBlogs() || [];
    const latestPosts = getMDXData(data)
    return (
        <div className='space-y-10'>
            <h2 className='text-3xl tracking-tight '>Recently Published</h2>
            <div className='space-y-10'>
                {
                    latestPosts
                        .map((post, indx) => (
                            <article key={post.slug} className='space-y-6 transition-all'>
                                <h3>
                                    <Link title={post.metadata.title || "Latest Post"} className='font-bold hover:text-blue-500' href={`/blog/${slugify(post.metadata.category)}/${post.slug}`}>{post.metadata.title}</Link>
                                </h3>
                                <div className='pl-1 space-y-3'>
                                    <p className=''>{post.metadata.summary}</p>
                                    <p className='text-sm text-muted-foreground'>{formateDate(data[indx].createdAt.toISOString(), true)}</p>
                                </div>
                            </article>
                        ))
                }
            </div>
            <div className='pb-10'>
                <Link title={"Show All Posts"} prefetch href={'/blog'} className='hover:underline underline underline-offset-4 transition-all hover:text-blue-400'>
                    Show All Posts
                </Link>
            </div>
        </div>
    )
}

export default LatestPost