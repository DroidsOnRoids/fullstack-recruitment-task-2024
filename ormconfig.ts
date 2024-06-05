import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';

import { ConfigProvider } from './src/config';

export default new DataSource({
  type: ConfigProvider.database.type,
  host: ConfigProvider.database.host,
  port: ConfigProvider.database.port,
  username: ConfigProvider.database.username,
  password: ConfigProvider.database.password,
  database: ConfigProvider.database.database,
  entities: ['src/**/*.entity.ts'],
  migrations: ['migrations/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
});
