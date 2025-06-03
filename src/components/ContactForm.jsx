import { useForm } from 'react-hook-form'
import { Toaster } from 'sonner'
import { useContact } from '../hooks/useContact'
import './contactform.css'

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { onSubmit } = useContact();

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                        required: "Name is mandatory",
                        minLength: { value: 3, message: "Name too short" },
                    })}
                />
                {errors.name && <span className="errors-message">{errors.name.message}</span>}

                <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is mandatory",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Bad email format",
                        },
                    })}
                />
                {errors.email && <span className="errors-message">{errors.email.message}</span>}

                <textarea
                    placeholder="Message"
                    {...register("message", {
                        required: "Message is mandatory",
                        maxLength: {
                            value: 500,
                            message: "Message too long",
                        },
                        minLength: {
                            value: 30,
                            message: "Message too short",
                        },
                    })}
                />
                {errors.message && <span className="errors-message">{errors.message.message}</span>}

                <button type="submit">Send</button>
            </form>

            <Toaster richColors={true} />
        </>

    );
}