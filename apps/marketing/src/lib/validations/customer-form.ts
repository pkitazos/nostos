import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string({ required_error: "Please enter a name" })
    .min(2, "Please enter a Name"),
  email: z
    .string({ required_error: "Please enter an email" })
    .email("Please enter a valid Email"),
  subject: z
    .string({ required_error: "Please enter a Subject Line" })
    .min(2, "Subject Line too short"),
  message: z
    .string({ required_error: "Please enter your Message here" })
    .min(10, "Message too short"),
});

export type FormData = z.infer<typeof formSchema>;
