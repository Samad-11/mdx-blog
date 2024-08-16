'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Icon } from '../Icon'
import { fetcher, fetchUrl, ResponseData, slugify } from '@/lib/utils'
import { getTopPosts } from '@/lib/actions'
const TopPosts = () => {
    const [data, setData] = useState<ResponseData | undefined>()
    // const { data, error, isLoading } = useSWR(fetchUrl, fetcher, { refreshInterval: 100})
    // if (error) return <div>Error :</div>
    // if (isLoading) return <div>Loading...</div>

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTopPosts()
            console.log(response);
            setData(response)
        }
        fetchData()
    }, [])



    return (
        <div className='space-y-6 sm:sticky sm:top-10'>
            <h2 className='font-semibold'>Popular Posts</h2>
            <div className='space-y-3'>
                {
                    data &&
                    data.map((post) => (
                        <Link key={post.slug} href={`/blog/${slugify(post.category)}/${post.slug}`}
                            className='flex gap-3 items-center group w-fit'
                        >
                            <Icon.arrowRight className='size-5 group-hover:translate-x-2 transition-all' />
                            <span>{post.title}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default TopPosts