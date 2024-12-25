import emailjs from "@emailjs/browser";

export const sendEmail = (details) => {
  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      { to_mail: details.email },
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
