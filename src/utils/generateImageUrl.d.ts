interface GenerateImageUrlType {
    fileName: string;
    format: 'jpg' | 'webp';
    option?: string;
}
declare const generateImageUrl: ({ fileName, format, option, }: GenerateImageUrlType) => string;
export default generateImageUrl;
