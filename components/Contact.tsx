import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/send-email';

export type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    // console.log(errors)x

    return (
        <section className={`h-screen`}>
            <h3>Contact</h3>
            <form onSubmit={handleSubmit((data) => {
                sendEmail(data.name, data.email, data.subject, data.message);
            })} className={``}>
                <input 
                {...register("name",
                    {
                        required: "You must input your name.",
                        minLength: {
                            value: 4,
                            message:"Name must be at least 4 characters long"
                        }
                    }
                )}
                type="text"
                placeholder="Name"
                />
                <p className={`${errors.message ? "block" : "hidden"}`}>{errors.name?.message?.toString()}</p>
                <input {...register("email", { required: "You must input your Email." })} type="text" placeholder="Email" />
                <input {...register("subject", { required: "Your email needs a subject" })} type="text" placeholder="Subject" />
                <textarea {...register("message", { required: "You must have something to say, right?" })} rows={8} placeholder="Message" />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}