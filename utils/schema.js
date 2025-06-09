import { pgTable, serial, varchar, numeric, integer, timestamp } from "drizzle-orm/pg-core";

export const budgets = pgTable('budgets', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  amount: numeric('amount').notNull(),
  icon: varchar('icon', { length: 50 }),
  createdBy: varchar('createdBy', { length: 100 }).notNull(),
});

export const expenses = pgTable('expenses', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  amount: numeric('amount').notNull(),
  budgetId: integer('budgetId').references(() => budgets.id),
  createdBy: varchar('createdBy').notNull(),
  createdAt:timestamp('createdAt',{withTimezone:true}).defaultNow(),
});
