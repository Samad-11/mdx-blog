import React from 'react'
import { getBlogPosts } from '../utils'
import { slugify } from '@/lib/utils'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import Container from '@/components/Container'
import { notFound } from 'next/navigation'
import { PostCard } from '@/components/PostCard'
import { CATEGORIES } from '@/lib/constants'
import BackButton from '@/components/BackButton'


export async function generateStaticParams() {
    return CATEGORIES.map((category) => ({
        category: slugify(category.title)
    }))
}

const page = ({ params }: { params: { category: string } }) => {
    const filteredPosts = getBlogPosts()
        .filter((post) => slugify(post.metadata.category) === slugify(params.category))
    if (filteredPosts.length < 1) {
        return notFound()
    }
    return (
        <div className='min-h-screen pb-10'>
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>
                    <CustomNavigationMenu />
                    <h1 className='font-bold text-xl capitalize mb-2'>{filteredPosts[0].metadata.category} posts</h1>
                    <BackButton />

                </Container>
            </div>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {filteredPosts.map((post) => (
                        <article key={post.slug} className=''>
                            <PostCard category={post.metadata.category} slug={post.slug} summary={post.metadata.summary} title={post.metadata.title} />
                        </article>
                    ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default page