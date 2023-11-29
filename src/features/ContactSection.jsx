import axios from "axios";
import { Section } from "../components/Section";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

export const ContactSection = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      emailjs
        .sendForm(
          "service_r92cyjr",
          "template_mb1ubwl",
          form.current,
          "d7c4WGzYey-p2FbHD"
        )
        .then(
          (result) => {
            swal({
              icon: "success",
              title: "Success",
              text: "I will reply on your email as soon as it possible!",
            });
            setIsLoading(false);
          },
          (error) => {
            console.log(error.text);
            setIsLoading(false);
          }
        );
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
    }
  };
  return (
    <Section>
      <h2 className="text-5xl font-bold text-[#f2b786]">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white/70 w-96 max-w-full">
        <form ref={form} onSubmit={handleSubmit}>
          <label for="name" className="font-medium text-gray-700 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-700 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-700 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button
            disabled={isLoading}
            className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
          >
            {isLoading ? "Loading" : "Submit"}
          </button>
        </form>
      </div>
    </Section>
  );
};
