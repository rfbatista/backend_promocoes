import { Result } from '@shared/Result';
import { ValueObject } from '@shared/ValueObject';

export interface IEmail {
  email: string;
}

export class Email extends ValueObject<IEmail> {
  get address() {
    return this.props.email;
  }

  constructor(props: IEmail) {
    super(props);
  }
  static create(props: IEmail) {
    return Result.ok(new Email(props));
  }
}
