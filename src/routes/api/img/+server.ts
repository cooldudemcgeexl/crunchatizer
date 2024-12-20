import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import type { ImageTransform } from "$lib/api/img";
import sharp from "sharp";
import { convertToDataUrl, stripDataUrlPrefix } from "$lib/utils/dataUrl";
import { Buffer } from "buffer";

export const POST: RequestHandler = async ({ request }) => {
    const transformRequest = await request.json() as Required<ImageTransform>
    const imageBuffer = Buffer.from(stripDataUrlPrefix(transformRequest.imageUrl), 'base64')


    const origImage = sharp(imageBuffer)

    const { width, height, format, orientation } = await origImage.metadata();


    if (!width || !height) {
        return json(transformRequest);
    }

    const isRotated = (orientation || 0) >= 5

    const targetWidth = isRotated ? height : width;
    const targetHeight = isRotated ? width : height;



    const scaleWidth = Math.ceil(targetWidth * (transformRequest.scaleX / 100))
    const scaleHeight = Math.ceil(targetHeight * (transformRequest.scaleY / 100))

    origImage.rotate().resize(scaleWidth, scaleHeight, { fit: "fill", kernel: transformRequest.scaleDownAlgo })

    const downScaleBuff = await origImage.toBuffer()
    const downScaleImg = sharp(downScaleBuff)

    const { width: downScaleWidth, height: downScaleHeight } = await downScaleImg.metadata();

    if (!downScaleWidth || !downScaleHeight) {
        return json(transformRequest);
    }

    if (transformRequest.upscaleToYDim) {
        const upscaleWidth = Math.ceil(downScaleWidth / (transformRequest.scaleX / 100))
        downScaleImg.resize(upscaleWidth, targetHeight, { fit: "fill", kernel: transformRequest.scaleUpAlgo })
    }
    else {
        const upscaleHeight = Math.ceil(downScaleHeight / (transformRequest.scaleY / 100))
        downScaleImg.resize(targetWidth, upscaleHeight, { fit: "fill", kernel: transformRequest.scaleUpAlgo })
    }


    const transBuff = await downScaleImg.toBuffer();
    const transB64 = transBuff.toString('base64')

    const transformReturn: ImageTransform = {
        ...transformRequest,
        imageUrl: convertToDataUrl(transB64, format)
    }

    return json(transformReturn)
}