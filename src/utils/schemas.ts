import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, {
    message: "Voornaam moet minstens 2 tekens hebben.",
  }),
  lastName: z.string().min(2, {
    message: "Naam moet minstens 2 tekens hebben.",
  }),
  username: z.string().min(2, {
    message: "Gebruikersnaam moet minstens 2 tekens hebben.",
  }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown,
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);

    throw new Error(errors.join(", "));
  }
  return result.data;
}
