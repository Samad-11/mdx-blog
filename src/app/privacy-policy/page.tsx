import BackButton from '@/components/BackButton'
import Container from '@/components/Container'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import React from 'react'
import { WithContext, WebPage } from 'schema-dts'
import { baseUrl, siteConfig } from '@/lib/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: `Privacy Policy page of the site ${siteConfig.name}, Understand how we protect your data`,
    alternates: {
        canonical: `${baseUrl}/privacy-policy`
    },
}

const page = () => {
    const jsonLd: WithContext<WebPage> = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        url: `${baseUrl}/privacy-policy`,
        name: "Privacy Policy Page",
        description: 'All the privacy policies of timeless topics website',
        author: {
            '@type': 'Person',
            name: "Abdus Samad"
        },
        keywords: ['privacy policy', 'data protection', 'user rights'],
        datePublished: new Date('2024-08-21').toISOString(),
        dateModified: new Date('2024-08-21').toISOString(),
        copyrightYear: new Date().getFullYear(),
        inLanguage: 'en-US',
    }

    return (
        <div className='mb-10'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>
                    <CustomNavigationMenu />
                    <h2 className='font-bold text-xl capitalize mb-2'>Privacy Policy</h2>
                    <BackButton />
                </Container>
            </div>
            <Container>
                <div className='prose'>
                    <div className='space-y-3'>
                        <p>
                            Welcome to our Privacy Policy page. This policy explains how we collect, use, and protect your personal information when you visit our website.
                        </p>

                        <h2>1. Information We Collect</h2>
                        <ul>
                            <li>
                                We may collect personal information such as your name, email address, and contact details when you interact with our website.
                            </li>
                            <li>
                                We also collect non-personal information such as IP addresses, browser types, and browsing behavior for analytical purposes.
                            </li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <ul>
                            <li>
                                The information we collect is used to improve our website, provide better services, and communicate with you regarding updates or offers.
                            </li>
                            <li>
                                We may also use your data for internal research and analytics to enhance user experience.
                            </li>
                        </ul>

                        <h2>3. Cookies and Tracking Technologies</h2>
                        <ul>
                            <li>
                                Our website uses cookies and other tracking technologies to track user preferences and enhance functionality.
                            </li>
                            <li>
                                You can control cookie settings through your browser, but disabling cookies may affect your experience on our site.
                            </li>
                        </ul>

                        <h2>4. Data Protection</h2>
                        <ul>
                            <li>
                                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                            </li>
                            <li>
                                Despite our efforts, no method of transmission over the Internet or electronic storage is completely secure. We strive to use commercially acceptable means to protect your data.
                            </li>
                        </ul>

                        <h2>5. Your Rights</h2>
                        <ul>
                            <li>
                                You have the right to access, correct, or delete your personal information. You may also request to restrict or object to certain processing of your data.
                            </li>
                            <li>
                                To exercise your rights or if you have any concerns about your data, please contact us using the information below.
                            </li>
                        </ul>

                        <h2>6. Changes to This Privacy Policy</h2>
                        <ul>
                            <li>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of significant updates.
                            </li>
                        </ul>

                        <blockquote className='bg-blue-200 dark:bg-blue-950 dark:bg-opacity-30 bg-opacity-30 p-4 rounded-md blockquote'>
                            <h3>Note</h3>
                            <p>
                                Please review this Privacy Policy periodically to stay informed about how we are protecting your data.
                            </p>
                        </blockquote>

                        <h2>7. Contact Information</h2>
                        <ul>
                            <li>
                                If you have any questions or concerns about our Privacy Policy, please contact us at <a href="timelesstopics.online@gmail.com">timelesstopics.online@gmail.com</a>.
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default page
