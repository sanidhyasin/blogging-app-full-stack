import z from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(10).max(100),
  name: z.string().optional(),
});

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(10).max(100),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

// type inference in zod
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
