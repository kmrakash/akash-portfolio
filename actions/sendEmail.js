'use server'

import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('senderMessage')

    if(!validateString(senderEmail, 500)){
        return{
            error: 'Invalid sender email'
        }
    }

    if(!validateString(message, 5000)){
        return{
            error: 'Invalid mesage'
        }
    }
    let data;
    try{
       data =  await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'aksh.kmr.135@gmail.com',
            cc: 'aksh.iem22@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail,
            text: message 
          });
    } catch(error){
        return{
            error: getErrorMessage(error)
        }
    }

    return{
        data
    }
};
