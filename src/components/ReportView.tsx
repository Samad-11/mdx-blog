'use client'

import { updateView } from "@/lib/actions"
import { useEffect, useState } from "react"


export default function ReposrtView({ slug }: { slug: string }) {

    useEffect(() => {
        const update = async () => {
            const updatedView = await updateView(slug)
        }
        update()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <></>
}