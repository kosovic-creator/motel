/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { schema } from "@/lib/schema";
import db from "@/lib/db/db";
import { executeAction } from "@/lib/executeAction";
import { useToast } from "@/components/hooks/use-toast";

const signUp = async (formData: FormData) => {
  const { toast } = useToast();

    const showSuccessToast = () => {
        toast({
            title: "Uspešno!",
            description: "Vaša akcija je uspešno završena.",
            status: "success", // Opcije: 'success', 'error', 'info', 'destructive'
            duration: 5000, // Trajanje u milisekundama (opciono)
        });
    };
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");
      const validatedData = schema.parse({ email, password });
      await db.user.create({
        data: {
          email: validatedData.email.toLocaleLowerCase(),
          password: validatedData.password,
        },
      });
    },

    successMessage: "Signed up successfully",

  });
};

export { signUp };
