import Popup from 'reactjs-popup';
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";


export default function Pop() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const closeModal = () => setOpen(false);

  const SendMail = async (e) => {
    var user_email = {
      user_email: email,
    };
    emailjs.send('service_6sd8bum', 'template_ow3rb7e', user_email, '_v96jk7uH8PoaY21Q')
      .then(function (response) {
        alert("Subscribed");
      }, function (error) {
        alert("Error, try again");
      });
    closeModal();
  }

  useEffect(
    () => {
      let timer1 = setTimeout(() => setOpen(true), 10000);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );

  return (
    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <div className="modal">
        <div className="max-w-xl">
          <div className="border-gradient-br-indigo-purple-pink-gray-900 border-transparent border-solid border-2 rounded-xl">
            <a className="close" onClick={closeModal}>
              &times;
            </a>
            <p className="text-center font-barcade text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500">Subscribe now</p>
            <p className="font-sans text-center text-lg py-5 px-1">
              Subscribe to receive our newsletter and further information on whitelist opportunities and drops.
            </p>
            <div className="flex justify-center items-stretch pb-5">
              <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-3/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <button onClick={SendMail} className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-25 rounded-l-none rounded text-base font-medium leading-none text-white p-5 uppercase">subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  )
}