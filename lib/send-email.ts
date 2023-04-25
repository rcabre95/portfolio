import axios from 'axios';

export async function sendEmail(name: string, email: string, subject: string, message: string) {
    return axios({
        method: 'post',
        url: '/api/send-mail',
        data: {
            name: name,
            email: email,
            subject: subject,
            message: message,
        },
    });
};