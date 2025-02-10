import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto py-12 px-4 md:px-0">
      <h2 className="text-[45px] font-bold mb-6">Contact us</h2>
      <div className=" flex justify-between">
        {/* Contact Form */}
        <form className="space-y-4  w-[60%]">
          <div className="grid grid-cols-2 gap-4">
            <div className=" flex flex-col gap-2">
              <label className="block font-medium mb-1 font1">Name</label>
              <input type="text" className="border p-2 w-full rounded font1" placeholder="Your Name" />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="block font-medium mb-1 font1">Email</label>
              <input type="email" className="border p-2 w-full rounded font1" placeholder="Your Email" />
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <label className="block font-medium mb-1 font1">Message</label>
            <textarea className="border p-2 w-full rounded h-24 font1" placeholder="Your Message"></textarea>
          </div>
        </form>

        {/* Contact Information */}
        <div className=" flex flex-col gap-6 w-[30%]">
          <div className="flex items-center space-x-3 font1">
            <FaPhone className="text-green-600" />
            <p>+001 22 333 456</p>
          </div>
          <div className="flex items-center space-x-3 font1">
            <FaEnvelope className="text-green-600" />
            <p>thefrontporche@gmail.com</p>
          </div>
          <div className="flex items-start space-x-3 font1">
            <FaMapMarkerAlt className="text-green-600 mt-1" />
            <p>
              Located inside Mag’s Marketplace <br />
              at 307 E Macon Street, Warrenton, <br />
              NC 27589
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
