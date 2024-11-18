import type sharp from "sharp";

export function stripDataUrlPrefix(dataUrl: string) {
    return dataUrl.split(',')[1] ?? dataUrl;
}

export function convertToDataUrl(b64String: string, format: keyof sharp.FormatEnum | undefined) {
    return `data:image/${format};base64,${b64String}`
}