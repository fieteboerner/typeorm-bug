import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TestSqlite1643131543733 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'test',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isUnique: true,
                },
                {
                    name: 'text_with_default',
                    type: 'varchar',
                    default: 'x', // <-- this line is breaking the migration
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('test', true)
    }

}
