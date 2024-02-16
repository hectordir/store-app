export interface Producto {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  brand: string;
  stock: number;
  category: string;
  discountPercentage: number;
  rating: number;
}

export interface ProductoResponse {
  products: Producto[];
  total: number;
  skip:number;
  limit:number;

}