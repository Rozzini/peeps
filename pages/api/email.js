import { SMTPClient } from 'emailjs';
import { getMaxListeners } from 'process';
 
 
export default function email(msg, res) {
 
 const client = new SMTPClient({
   user: '42daos@gmail.com',
   password: 'Bitcoinonme',
   host: 'smtp.gmail.com',
   ssl:true
 });
 
 try{
 
  
   client.send(
     {
       text: msg,
       from: process.env.mail,
       to: "rozzinimr@gmail.com",
       subject: "new subscriber",
      
     }
     )
   }
 catch(e){
   res.status(400).end(JSON.stringify({ message:"Error" }))
   return;
 }
 
 res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}