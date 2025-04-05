/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ToastDemo = () => {
    const { toast } = useToast();

    const showSuccessToast = () => {
        toast({
            title: "Uspešno!",
            description: "Vaša akcija je uspešno završena.",

            // Opcije: 'success', 'error', 'info', 'destructive'
            duration: 5000, // Trajanje u milisekundama (opciono)
        });
    };
    const showAlertToast = () => {
        toast({
            title: "Neuspešno!",
            description: "Vaša akcija je nije uspešno završena.",
            variant:"destructive",
            // Opcije: 'success', 'error', 'info', 'destructive'
            duration: 5000, // Trajanje u milisekundama (opciono)
        });
    };



    return (
        <>

            <Button
                onClick={showSuccessToast}

            >
                Prikaži Toast
            </Button>

            <Button
                onClick={showAlertToast}

            >
                Prikaži Alert Toast
            </Button>







        </>


    );
};

export default ToastDemo;
