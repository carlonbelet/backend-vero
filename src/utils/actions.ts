"use server";

import { profileSchema } from "./schemas";

export const createProfileAction = async (
  prevState: any,
  formData: FormData,
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    console.log(validatedFields);
    return { message: "Profiel aangemaakt" };
  } catch (error) {
    console.log(error);
    return { message: "Oeps, er ging iets fout..." };
  }
};