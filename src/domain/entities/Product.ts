class Image {
  description: string;
  url: string;
}

export class Product {
  id?: number;
  type: string;
  description: string;
  price: number;
  images: Image[];
  created_at?: Date;
  updated_at?: Date;
}
