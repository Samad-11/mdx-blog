import { getTotalPostsCount } from "@/lib/actions";
import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma"
import { baseUrl } from "@/lib/constants";

export async function generateSitemaps() {
    const total = await getTotalPostsCount() || 0
    const postsPerSitemap = 50000
    const numberOfSitemaps = Math.ceil(total / postsPerSitemap)
    return Array.from({ length: numberOfSitemaps }, (_, i) => ({ id: i }))
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
    const postsPerSitemap = 50000;
    const start = id * postsPerSitemap;
    const end = start + postsPerSitemap

    const blogPosts = await prisma.testBlog.findMany({
        skip: start,
        take: end,
        orderBy: { createdAt: "desc" },
        select: {
            slug: true,
            categorySlug: true,
            updatedAt: true
        }
    })

    return blogPosts.map((blog) => ({
        url: `${baseUrl}/blog/${blog.categorySlug}/${blog.slug}`,
        lastModified: blog.updatedAt.toISOString(),
        changeFrequency: "monthly",
        //... other properties...
    }))
}