import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/send-email';
import { Dispatch, SetStateAction, useEffect, useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { forwardRef } from 'react';
import SuccessToast from './SuccessToast';
import { Section } from "@/pages";

export type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const Contact = forwardRef(({ setSection }: { setSection: Dispatch<SetStateAction<Section>> }, ref: React.ForwardedRef<HTMLElement>) => {
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: {errors} } = useForm();

    const contactFormRef = useRef<HTMLFormElement>(null)


    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                setSection("contact")
            }, { threshold: 0.5 }
        );

        observer.observe(contactFormRef.current!)
        return () => { observer.disconnect() }
    }, []);

    return (
        <section ref={ref} className={`h-fit scroll-mt-16 bg-gradient-to-b from-myBlue from-95%
        to-green-300 to-100%`}>
            <h3 className={`text-3xl font-extrabold flex justify-center items-center mb-8`}>Contact</h3>
            <div className={`w-full flex justify-center items-center`}>
                <p className={`text-sm w-4/6 max-w-2xl mb-2 text-center`}>Want to work together? Have any Questions? Want to tell me a joke? Use the form below to get in touch!</p>
            </div>
            <form className={`flex flex-col justify-center items-center`}
            ref={contactFormRef}
            onSubmit={handleSubmit(async (data) => {
                setLoading(true);
                let email = await sendEmail(data.name, data.email, data.subject, data.message);
                console.log(email.status)
                if (email.status === 200) {
                    toast.custom((t) => (
                        <SuccessToast t={t} />
                    ))
                }
            })}>

                {/* Name Input */}
                <div className={` my-1 h-fit w-4/6 max-w-2xl`}>
                    <input
                        className={`w-full h-10 rounded-sm p-2`}
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
                    <p className={`${errors.name ? "block" : "hidden"} text-xs text-red-600`}>
                        {errors.name?.message?.toString()}
                    </p>
                </div>

                {/* Email Input */}
                <div className={` my-1 h-fit w-4/6 max-w-2xl`}>
                    <input
                        className={`w-full h-10 rounded-sm p-2`}
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
                    <p className={`${errors.email ? "block" : "hidden"} text-xs text-red-600`}>
                        {errors.email?.message?.toString()}
                    </p>
                </div>

                {/* Subject Input */}
                <div className={`my-1 h-fit w-4/6 max-w-2xl`}>
                    <input
                        className={`w-full h-10 rounded-sm p-2`}
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
                    <p className={`${errors.subject ? "block" : "hidden"} text-xs text-red-600`}>
                        {errors.subject?.message?.toString()}
                    </p>
                </div>
                
                {/* Message Input */}
                <div className={`mt-1 mb-4 h-fit w-4/6 max-w-2xl`}>
                    <textarea
                        className={`w-full h-40 rounded-sm p-2 resize-none`}
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
                    <p className={`${errors.message ? "block" : "hidden"} text-xs text-red-600`}>
                        {errors.message?.message?.toString()}
                    </p>
                </div>

                <button className={`w-4/6 max-w-2xl h-10 rounded-sm mb-16`} disabled={loading} type="submit">Submit</button>
            </form>
        </section>
    )
})