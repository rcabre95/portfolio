import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/send-email';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { forwardRef } from 'react';
import SuccessToast from './SuccessToast';

export type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const Contact = forwardRef((props, ref: React.ForwardedRef<HTMLElement>) => {
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: {errors} } = useForm();

    // console.log(errors)

    return (
        <section ref={ref} className={`h-screen`}>
            <h3>Contact</h3>
            <form onSubmit={handleSubmit(async (data) => {
                setLoading(true);
                let email = await sendEmail(data.name, data.email, data.subject, data.message);
                console.log(email.status)
                if (email.status === 200) {
                    toast.custom((t) => (
                        <SuccessToast t={t} />
                    ))
                }
            })} className={``}>

                {/* Name Input */}
                <div>
                    <input 
                        {...register("name",
                            {
                                required: "You must input your name.",
                                minLength: {
                                    value: 4,
                                    message:"Name must be at least 4 characters long. Please include your last name if your first name does not meet the character count."
                                }
                            }
                        )}
                        type="text"
                        placeholder="Name"
                    />
                    <p className={`${errors.name ? "block" : "hidden"}`}>
                        {errors.name?.message?.toString()}
                    </p>
                </div>

                {/* Email Input */}
                <div>
                    <input
                        {...register("email",
                            {
                                required: "You must input your Email.",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please provide a valid email address."
                                }
                            })}
                        type="text"
                        placeholder="Email" />
                    <p className={`${errors.email ? "block" : "hidden"}`}>
                        {errors.email?.message?.toString()}
                    </p>
                </div>

                {/* Subject Input */}
                <div>
                    <input
                        {...register("subject",
                            {
                                required: "Your email needs a subject.",
                                maxLength: {
                                    value: 40,
                                    message: "The maximum number of characters is 40."
                                },
                                minLength: {
                                    value: 2,
                                    message: "The minimum number of characters is 2."
                                }
                            })}
                        type="text"
                        placeholder="Subject"
                    />
                    <p className={`${errors.subject ? "block" : "hidden"}`}>
                        {errors.subject?.message?.toString()}
                    </p>
                </div>
                
                {/* Message Input */}
                <div>
                    <textarea
                        {...register("message",
                            {
                                required: "You must have something to say, right?",
                                maxLength: {
                                    value: 300,
                                    message: "The maximum number of characters is 300."
                                },
                                minLength: {
                                    value: 15,
                                    message: "The minimum number of characters is 15."
                                }
                            })}
                        rows={8}
                        placeholder="Message"
                    />
                    <p className={`${errors.message ? "block" : "hidden"}`}>
                        {errors.message?.message?.toString()}
                    </p>
                </div>

                <button disabled={loading} type="submit">Submit</button>
            </form>
        </section>
    )
})