/* eslint-disable import/first */
import { createSchema } from 'schemix';

export const PrismaSchema = createSchema({
  datasource: {
    provider: 'postgresql',
    url: {
      env: 'PRISMA_DB_URL',
    },
  },
  generator: {
    provider: 'prisma-client-js',
    binaryTargets: ['linux-musl'],
  },
});

export const UserModel = PrismaSchema.createModel('User');
import './models/user.model';

PrismaSchema.export('./', 'prisma/schema');
