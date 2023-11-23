import { Knex } from 'knex'

// make increment changes on database
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('transaction').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

// make rollback if a problem occurs
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
