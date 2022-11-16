import { MigrationInterface, QueryRunner } from 'typeorm';

export class userPhoneMigration1667748283328 implements MigrationInterface {
  name = 'userPhoneMigration1667748283328';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`phone\` varchar(255) NOT NULL AFTER \`password\``,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phone\``);
  }
}
