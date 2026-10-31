import { z } from 'zod';

export const BillStatus = z.enum(['pending', 'paid', 'overdue', 'skipped']);
export type BillStatus = z.infer<typeof BillStatus>;

export const CreateBillSchema = z.object({
    payee: z.string().min(1),
    amountCents: z.number().int().positive(),
    currency: z.string().length(3).default('USD'),
    dueDate: z.string().date(),
    autopay: z.boolean().default(false),
});
export type CreateBillInput = z.infer<typeof CreateBillSchema>;