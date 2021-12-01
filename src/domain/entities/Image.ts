import { Product } from './Product';
import { Entity } from '../../shared/BaseEntity';
import { UniqueEntityId } from '../../shared/UniqueEntityId';

export interface IImage {
  product: Product;
  url: string;
  createdAt: Date;
}

export class Image extends Entity<IImage> {
  get id() {
    return this._id.toString();
  }

  get url() {
    return this.props.url;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  constructor(props: IImage, id?: UniqueEntityId) {
    super(props, id);
  }

  static create(props: IImage, id?: number | string): Image {
    let uniqueIdentity: UniqueEntityId;
    if (id) {
      uniqueIdentity = new UniqueEntityId(id);
    }
    return new Image(props, uniqueIdentity);
  }
}
