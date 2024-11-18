import type { ScalingAlgo } from "$lib/types/scaling";


export default async function getModifiedImage(imageTransform: ImageTransform) {
    if (!imageTransform.imageUrl) {
        return imageTransform
    }

    const response = await fetch('/api/img', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(imageTransform)
    })

    return await response.json() as ImageTransform;
}

export interface ImageTransform {
    scaleX: number
    scaleY: number
    scaleDownAlgo: ScalingAlgo
    scaleUpAlgo: ScalingAlgo
    upscaleToYDim: boolean
    imageUrl?: string
}

