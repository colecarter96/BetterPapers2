import { storage } from './firebase';
import { ref, getDownloadURL, listAll } from 'firebase/storage';

export async function getImageUrl(path: string): Promise<string> {
  const imageRef = ref(storage, path);
  return await getDownloadURL(imageRef);
}

export async function getProductImages(productId: string): Promise<string[]> {
  const productRef = ref(storage, `products/${productId}`);
  const result = await listAll(productRef);
  
  const imageUrls = await Promise.all(
    result.items.map(async (item) => {
      return await getDownloadURL(item);
    })
  );
  
  return imageUrls;
}

export async function getProductThumbnail(productId: string): Promise<string> {
  return await getImageUrl(`products/${productId}/thumbnail.jpg`);
} 