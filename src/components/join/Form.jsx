import { FaStarOfLife } from "react-icons/fa6";

const Form = () => {
    return (
      <div className="md:w-[80%] w-[90%] mx-auto py-12">
        <form className="space-y-6">
            <div className=" flex flex-col gap-2">
                <h1 className=" text-[17px] font-[700] font1 flex items-center gap-1">Name <FaStarOfLife size={5} className=" text-[#CF3339]" /></h1>
            <div className="grid md:grid-cols-2 gap-4">
            <div className=" flex flex-col gap-2">
              <label className="block font-medium font1">First Name</label>
              <input type="text" className="border p-2 w-full font1 rounded-md" />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="block font-medium font1">Last Name</label>
              <input type="text" className="border p-2 w-full font1 rounded-md" />
            </div>
          </div>
            </div>
          
          <div className=" flex flex-col gap-2">
            <label className=" font-[700] text-[17px] font1 flex items-center gap-1">House Phone <FaStarOfLife size={5} className=" text-[#CF3339]" /></label>
            <input type="text" className="border p-2 w-full font1 rounded-md" />
          </div>
          
          <div className=" flex flex-col gap-2">
          <h1 className=" text-[17px] font-[700] font1 flex items-center gap-1">Email <FaStarOfLife size={5} className=" text-[#CF3339]" /></h1>
          <div className="grid md:grid-cols-2 gap-4">
            <div className=" flex flex-col gap-2">
              <label className="block font-medium font1">Email</label>
              <input type="email" className="border p-2 w-full font1 rounded-md" />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="block font-medium font1">Confirm Email</label>
              <input type="email" className="border p-2 w-full font1 rounded-md" />
            </div>
          </div>
          </div>
          
          <div className=" flex flex-col gap-2">

               <label className=" font-[700] text-[17px] font1 flex items-center gap-1">Address <FaStarOfLife size={5} className=" text-[#CF3339]" /></label>
            <input type="text" className="border p-2 w-full font1 rounded-md" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className=" flex flex-col gap-2">
              <label className="block font-medium font1">City</label>
              <input type="text" className="border p-2 w-full font1 rounded-md" />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="block font-medium font1">State</label>
              <input type="text" className="border p-2 w-full font1 rounded-md" />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="block font-medium font1">ZIP Code</label>
              <input type="text" className="border p-2 w-full font1 rounded-md" />
            </div>
          </div>
          
          <div className="bg-[#006600] text-white p-2 font-[700] text-[20px] font1 uppercase">Additional Household Members authorized to use this ownership account:</div>
          <div className=" flex flex-col gap-2">
            <label className="block font-bold font1">Adult #1</label>
            <input type="text" className="border p-2 w-full font1 rounded-md" />
          </div>
          <div className=" flex flex-col gap-2">
            <label className="block font-bold font1">Adult #2</label>
            <input type="text" className="border p-2 w-full font1 rounded-md" />
          </div>
          
          <div className="bg-[#5F84B6] text-white p-2 text-[20px] font-bold font1 uppercase">Referral</div>
          <div className=" flex flex-col gap-2">
            <label className="block font-bold font1">Who referred you?</label>
            <input type="text" className="border p-2 w-full font1 rounded-md" />
          </div>
          
          <div className="bg-[#7C5D3F] text-white p-2 font-bold text-[20px] font1 uppercase">Investment</div>
          <div className=" flex flex-col gap-2">
            <label className="block font-bold font1">Please tell us why you chose to invest in the Monadnock Food Co-op today.</label>
            <textarea rows={10} className="border p-4 w-full h-24 font1 rounded-md"></textarea>
            <p className=" text-[16px] font-[400] font1">Please note that while member equity is potentially refundable, it is at the discretion of the Board of Directors.</p>
          </div>
          
          <div className="bg-[#BE8841] text-white p-2 text-[20px] font-bold font1 uppercase">Payment Information</div>
          <div className=" flex flex-col gap-2">
          <label className=" font-[700] text-[17px] font1 flex items-center gap-1">Payment Option <FaStarOfLife size={5} className=" text-[#CF3339]" /></label>
            <select className="border p-2 w-full font1 rounded-md">
              <option>Full Payment - Membership</option>
            </select>
          </div>
          
          <div className=" flex flex-col gap-2">
          <label className=" font-[700] text-[17px] font1 flex items-center gap-1">Name on Credit Card or PayPal Account <FaStarOfLife size={5} className=" text-[#CF3339]" /></label>
            <input type="text" className="border p-2 w-full font1 rounded-md" />
          </div>
          
          <div className=" flex flex-col gap-2">
          <label className=" font-[700] text-[17px] font1 flex items-center gap-1">Billing Address <FaStarOfLife size={5} className=" text-[#CF3339]" /></label>
            <div className=" flex flex-col gap-2">
                 <label className="block font-medium font1">Street Address</label>
            <input type="text" className="border p-2 w-full font1 rounded-md" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className=" flex flex-col gap-2">
              <label className="block font-medium font1">City</label>
              <input type="text" className="border p-2 w-full font1 rounded-md" />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="block font-medium font1">State</label>
              <input type="text" className="border p-2 w-full font1 rounded-md" />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="block font-medium font1">ZIP Code</label>
              <input type="text" className="border p-2 w-full font1 rounded-md" />
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-12">
            <button className="bg-green-600 text-white md:text-[20px] text-[15px] md:font-bold py-2 px-12 rounded-full font1 cursor-pointer">PayPal</button>
            <button className="bg-green-700 text-white md:text-[20px] text-[15px] md:font-bold py-2 px-12 rounded-full font1 cursor-pointer">Pay Later</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Form;
  