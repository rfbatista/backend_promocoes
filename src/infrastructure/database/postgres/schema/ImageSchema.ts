import {
  Entity,
  ManyToOne,
  Column,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { IImage, Image } from '../../../../domain/entities/Image';
import { Product } from '../../../../domain/entities/Product';
import { ProductSchema } from './ProductSchema';
import { UniqueEntityId } from '../../../../shared/UniqueEntityId';

export interface IImageSchema {
  id: number;
  url: string;
  created_at?: Date;
}

@Entity()
export class ImageSchema {
  @PrimaryColumn()
  id: string;
  @ManyToOne((type) => ProductSchema, (product) => product.images)
  product: ProductSchema;
  @Column()
  url: string;
  @CreateDateColumn()
  created_at: Date;

  constructor(image: Image) {
    this.id = image.id;
    this.url = image.url;
  }

  static arrayToEntity(raw: ImageSchema[]): Image[] {
    const imageList = [];
    for (const category of raw) {
      imageList.push(category.toEntity());
    }
    return imageList;
  }

  static arrayToSchema(entities: Image[]): Image[] {
    const imageList = [];
    for (const entity of entities) {
      imageList.push(new ImageSchema(entity));
    }
    return imageList;
  }

  toEntity() {
    return Image.create(
      {
        product: this.product?.toEntity(),
        url: this.url,
        createdAt: this.created_at,
      },
      this.id
    );
  }

  static fromEntityArray(images: Image[]): ImageSchema[] {
    const imagesSchema = [];
    for (const image of images) {
      imagesSchema.push(ImageSchema.fromEntity(image));
    }
    return imagesSchema;
  }

  static fromEntity(image: Image) {
    return new ImageSchema(image);
  }
}
