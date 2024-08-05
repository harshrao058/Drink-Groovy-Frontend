import React from "react";
import { Menu, X, MapPin } from "lucide-react";

import { IoBan } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { PiPhoneCall } from "react-icons/pi";
import bgg2 from "../../public/bgg2.png";
// import bgg2 from "../../public/bgg2.png";

const mapLink = "https://maps.app.goo.gl/KmJVzQw3bakqDppo9";
const embedLink =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14019.48928263212!2d77.2241349!3d28.5435572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30033d95957%3A0x32e431c65720c158!2sEnhaz%20Beverages%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1722020211797!5m2!1sen!2sin";

const locations = [
  // {
  //   title: "Headquarter",
  //   timings: "Mon-Sat 9am to 5pm.",
  //   address:
  //     "Enhaz Beverages Pvt. Ltd. D-09, Second Floor, Panchsheel Enclave, Above HDFC Bank Ltd, Soami Nagar Branch, New Delhi - 110017",
  // },
  {
    title: "Manufacturing Unit 1",
    timings: "Mon-Sat 9am to 5pm.",
    address: "UttaraKhand",
  },
  {
    title: "Manufacturing Unit 2",
    timings: "Mon-Sat 9am to 5pm.",
    address: "Jammu Katra",
  },
];

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(true); // State for popup

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="mx-auto  ">
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <form action="" className=" space-y-4 ">
            <p className=" text-xl font-semibold uppercase  text-gray-800">
              Our friendly team would love to hear from you
            </p>
            <div className="grid w-full gap-y-4 md:gap-x-4  lg:grid-cols-2">
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="first_name"
                  placeholder="First Name"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="last_name"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="phone_number"
              >
                Phone number
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="tel"
                id="phone_number"
                placeholder="Phone number"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="flex h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                id="message"
                placeholder="Leave us a message"
                cols={3}
              />
            </div>
            <button
              type="button"
              className="w-full rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Send Message
            </button>
          </form>
          </div>
        </div>
      )}
        {/* Hero Map */}
        <div
          className="px-16 bg-fixed bg-cover bg-center "
          style={{
            backgroundImage: `url(${bgg2})`,
          }}
        >
          <div className="w-full backdrop-blur-sm">
            <div className="flex flex-col space-y- pb-1 pt-12 md:pt-32">
              <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
                <p className="text-xs font-semibold leading-normal md:text-sm">
                  Contact the company
                </p>
              </div>
              <p className="text-sm font-bold text-gray-900 md:text-4xl md:py-4 backdrop-blur-sm">
                Get in touch
              </p>
            </div>

            <div className=" grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 px-16 backdrop-blur-sm">
              <div className="border-zinc-800 border-2 py-4 px-4 rounded-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-800">
                  <GoMail className="h-9 w-9 text-green-500 " />
                </div>
                <p className="mt-2 text-sm text-black">
                  Please email contact form and we will be assist you. We wotk
                  with you.
                </p>
                <h3 className="mt-2 text-lg font-semibold text-black">
                  abcd@contact.com
                </h3>
              </div>
              <div className="border-zinc-800 border-2 py-4 px-4 rounded-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-800">
                  <PiPhoneCall className="h-9 w-9 text-blue-500" />
                </div>
                <p className="mt-2 text-sm text-black">
                  Please call us and we will be happy to assist you we work with
                  you.
                </p>
                <h3 className="mt-2 text-lg font-semibold text-black">
                  9876543210
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:pt-8 flex gap-8 px-16">
          <div className="w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl flex items-center font-semibold">
              <MapPin className="h-10 w-10 text-red-500" />
              Headquarter
            </h1>
            <p className="text-xl"> Timings: Mon-Sat 9am to 5pm</p>
            <p className="text-base">
              Enhaz Beverages Pvt. Ltd. D-09, Second Floor, Panchsheel Enclave,
              Above HDFC Bank Ltd, Soami Nagar Branch, New Delhi - 110017
            </p>
          </div>
          <iframe
            src={embedLink}
            // width="600"
            // height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-1/2 rounded-lg"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>

        <hr />

        <div className="mb-4 flex gap-8 mt-8 px-16">
          <div className="w-1/2 ">
            <div className="mb-8 flex gap-y-6 flex-col lg:justify-around ">
              {locations.map((location) => (
                <div
                  key={location.title}
                  className="flex bg-rd-800 border-[2px] px-4 py-2 rounded-xl flex-col space-y-3  "
                >
                  <p className="w-full flex text-xl items-center font-semibold  text-gray-900">
                    <MapPin className="h-5 w-5 text-red-500" />
                    {location.title}
                  </p>
                  <p className="w-full text-base text-gray-700">
                    {location.timings}
                  </p>
                  <p className="text-sm font-medium">{location.address}</p>
                </div>
              ))}
            </div>
          </div>
          <form action="" className=" space-y-4 w-1/2">
            <p className=" text-xl font-semibold uppercase  text-gray-800">
              Our friendly team would love to hear from you
            </p>
            <div className="grid w-full gap-y-4 md:gap-x-4  lg:grid-cols-2">
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="first_name"
                  placeholder="First Name"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="last_name"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="phone_number"
              >
                Phone number
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="tel"
                id="phone_number"
                placeholder="Phone number"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="flex h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                id="message"
                placeholder="Leave us a message"
                cols={3}
              />
            </div>
            <button
              type="button"
              className="w-full rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
