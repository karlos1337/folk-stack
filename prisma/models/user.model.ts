import { UserModel } from '../_schema';

UserModel.string('id', { id: true, default: { uuid: true } })
  .string('firstName')
  .string('lastName')
  .string('email', { unique: true });
