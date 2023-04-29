import axios from 'axios';

export async function sendEmail(name: string, email: string, subject: string, message: string) {
    return await axios({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_HOME_URL}/api/send-mail`,
        data: {
            name: name,
            email: email,
            subject: subject,
            message: message,
        },
    });
};