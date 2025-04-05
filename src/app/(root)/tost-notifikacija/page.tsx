'use client'
import { useToast } from "@/hooks/use-toast";

const ToastDemo = () => {
    const { toast } = useToast();

    const showSuccessToast = () => {
        toast({
            title: "Uspešno!",
            description: "Vaša akcija je uspešno završena.",
            status: "success", // Opcije: 'success', 'error', 'info', 'destructive'
            duration: 5000, // Trajanje u milisekundama (opciono)
        });
    };

    return (
        <button
            onClick={showSuccessToast}
            className="px-4 py-2 bg-green-500 text-white rounded"
        >
            Prikaži Toast
        </button>
    );
};

export default ToastDemo;
