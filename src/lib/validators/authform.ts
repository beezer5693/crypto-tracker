import { ZodType, z } from "zod"

export const authSchema: ZodType<AuthSignUpFormType> = z.object({
	firstname: z
		.string()
		.nonempty("First name is a required field")
		.max(100, { message: "Last name must be less than 100 characters." }),
	lastname: z
		.string()
		.nonempty("Last name is a required field")
		.max(100, { message: "Last name must be less than 100 characters." }),
	email: z.string().nonempty("Email is a required field").email({ message: "Invalid email address." }),
	password: z
		.string()
		.nonempty("Password is a required field")
		.min(8, "Password must be at least 8 characters")
		.refine(val => /[A-Z]/.test(val), "Password must contain at least 1 uppercase letter")
		.refine(val => /[a-z]/.test(val), "Password must contain at least 1 lowercase letter")
		.refine(val => /[0-9]/.test(val), "Password must contain at least 1 number"!)
		.refine(val => /[^A-Za-z0-9]/.test(val), "Password must contain at least 1 symbol"),
})
