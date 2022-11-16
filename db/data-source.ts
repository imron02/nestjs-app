import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from '../src/user/entities/user.entity';
import { userMigration1667747697905 } from './migration/1667747697905-user-migration';
import { userPhoneMigration1667748283328 } from './migration/1667748283328-user-phone-migration';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'nest-app',
  entities: [User],
  migrations: [userMigration1667747697905, userPhoneMigration1667748283328],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
