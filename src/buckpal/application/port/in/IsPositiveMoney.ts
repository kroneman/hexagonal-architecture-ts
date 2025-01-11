import { registerDecorator, ValidationOptions } from 'class-validator';
import Money from '../../domain/model/Money';

export function IsPositiveMoney(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsPositiveMoney',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return value instanceof Money && value.isPositive()
        }
      }
    })
  }
}

export default IsPositiveMoney;
