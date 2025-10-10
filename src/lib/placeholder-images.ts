import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Helper function to get the correct image path
export const getImagePath = (imageUrl: string): string => {
  // Check if we're building for export (GitHub Pages)
  const isExport = process.env.EXPORT === 'true';
  
  if (isExport) {
    return `/devportfolio${imageUrl}`;
  }
  
  // For development, return the original path
  return imageUrl;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages.map(img => ({
  ...img,
  imageUrl: getImagePath(img.imageUrl)
}));
