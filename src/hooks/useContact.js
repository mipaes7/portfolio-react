import emailjs from '@emailjs/browser'
import { toast } from "sonner";

export const useContact = () => {
        const sendEmail = (params) => {

        const toastId = toast.loading("Sending message...")

        emailjs
            .send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                params,
                {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                    limitRate: {
                        throttle: 5000
                    }
                }
            )
            .then(
                () => {
                    toast.success("Message sent! Miguel will contact you ASAP!", {
                        id: toastId
                    })
                },
                (error) => {
                    console.log(error)
                    toast.error("Error sending the message, please try again", {
                        id: toastId
                    })
                },
            );
    };

    const onSubmit = data => {

        const templateParams = {
            name: data.name,
            message: data.message,
            email: data.email
        }

        sendEmail(templateParams)
    };

    return {
        onSubmit
    }
}