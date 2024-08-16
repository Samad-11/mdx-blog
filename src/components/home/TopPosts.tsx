'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Icon } from '../Icon'
import { Blog } from '@prisma/client'
import useSWR from 'swr'
import { fetcher, fetchUrl } from '@/lib/utils'
const TopPosts = () => {

    const { data, error, isLoading } = useSWR(fetchUrl, fetcher)

    return (
        <div className='space-y-6 sm:sticky sm:top-10'>
            <h2 className='font-semibold'>Popular Posts</h2>
            <div className='space-y-3'>
                {
                    data?.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`}
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