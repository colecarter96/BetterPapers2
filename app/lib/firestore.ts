import { db } from './firebase';
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where,
  DocumentData,
  orderBy
} from 'firebase/firestore';

// Base image type
interface Image {
  src: string;  // Firebase Storage path
  alt?: string;
}

// Hero content type
export interface HeroContent {
  id: string;
  image: Image;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

// Featured product type
export interface FeaturedProduct {
  id: string;
  image: Image;
  title: string;
  price: number;
  productId: string; // Reference to the full product
}

// Product pack type
export interface ProductPack {
  id: string;
  title: string;
  description: string;
  price: number;
  images: Image[]; // Array of images for the carousel
  thumbnail: Image; // Main thumbnail image
  featured?: boolean; // If this pack should appear in featured section
}

// Product type definition
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[]; // Array of Firebase Storage paths
  thumbnail: string; // Firebase Storage path
  createdAt: Date;
  updatedAt: Date;
}

// Convert Firestore document to Product
const docToProduct = (doc: DocumentData): Product => {
  const data = doc.data();
  return {
    id: doc.id,
    title: data.title,
    description: data.description,
    price: data.price,
    images: data.images || [],
    thumbnail: data.thumbnail,
    createdAt: data.createdAt?.toDate() || new Date(),
    updatedAt: data.updatedAt?.toDate() || new Date(),
  };
};

// Convert Firestore document to HeroContent
const docToHero = (doc: DocumentData): HeroContent => ({
  id: doc.id,
  image: doc.data().image,
  title: doc.data().title,
  subtitle: doc.data().subtitle,
  ctaText: doc.data().ctaText,
  ctaLink: doc.data().ctaLink,
});

// Convert Firestore document to FeaturedProduct
const docToFeatured = (doc: DocumentData): FeaturedProduct => ({
  id: doc.id,
  image: doc.data().image,
  title: doc.data().title,
  price: doc.data().price,
  productId: doc.data().productId,
});

// Convert Firestore document to ProductPack
const docToProductPack = (doc: DocumentData): ProductPack => ({
  id: doc.id,
  title: doc.data().title,
  description: doc.data().description,
  price: doc.data().price,
  images: doc.data().images || [],
  thumbnail: doc.data().thumbnail,
  featured: doc.data().featured || false,
});

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  const productsRef = collection(db, 'products');
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(docToProduct);
}

// Get a single product by ID
export async function getProductById(id: string): Promise<Product | null> {
  const productRef = doc(db, 'products', id);
  const productDoc = await getDoc(productRef);
  
  if (!productDoc.exists()) {
    return null;
  }
  
  return docToProduct(productDoc);
}

// Get products by category (if you have categories)
export async function getProductsByCategory(category: string): Promise<Product[]> {
  const productsRef = collection(db, 'products');
  const q = query(productsRef, where('category', '==', category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(docToProduct);
}

// Get hero content
export async function getHeroContent(): Promise<HeroContent | null> {
  const heroRef = collection(db, 'hero');
  const snapshot = await getDocs(heroRef);
  if (snapshot.empty) return null;
  return docToHero(snapshot.docs[0]); // Assuming only one hero section
}

// Get featured products
export async function getFeaturedProducts(): Promise<FeaturedProduct[]> {
  const featuredRef = collection(db, 'featured');
  const q = query(featuredRef, orderBy('order', 'asc')); // Add order field to control display order
  const snapshot = await getDocs(q);
  return snapshot.docs.map(docToFeatured);
}

// Get all product packs
export async function getAllProductPacks(): Promise<ProductPack[]> {
  try {
    console.log('Accessing Firestore database...');
    const packsRef = collection(db, 'packs');
    console.log('Created collection reference');
    
    const snapshot = await getDocs(packsRef);
    console.log('Got snapshot, empty:', snapshot.empty);
    console.log('Number of documents:', snapshot.docs.length);
    
    if (snapshot.empty) {
      console.log('No documents found in packs collection');
      return [];
    }
    
    const packs = snapshot.docs.map(docToProductPack);
    console.log('Converted documents to ProductPack objects');
    return packs;
  } catch (error) {
    console.error('Error in getAllProductPacks:', error);
    throw error;
  }
}

// Get a single product pack by ID
export async function getProductPackById(id: string): Promise<ProductPack | null> {
  const packRef = doc(db, 'packs', id);
  const packDoc = await getDoc(packRef);
  
  if (!packDoc.exists()) {
    return null;
  }
  
  return docToProductPack(packDoc);
}

// Get featured product packs
export async function getFeaturedProductPacks(): Promise<ProductPack[]> {
  const packsRef = collection(db, 'packs');
  const q = query(packsRef, where('featured', '==', true));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(docToProductPack);
} 