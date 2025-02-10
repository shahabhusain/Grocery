const MembershipPricing = () => {
    const plans = [
      {
        title: "General",
        price: "$25",
        frequency: "One Time",
        features: [
            "One Time Purchase",
          "Community members on a limited income can purchase a share and receive all of the benefits.",
        ],
        color: "bg-[#4F6F9A]",
        btnColor: "bg-[#4F6F9A]",
      },
      {
        title: "Fellowship",
        price: "$100",
        frequency: "One Time",
        features: [
            "One Time Purchase",
          "This share extends to you and any other members of your household.",
          "If you would like to break your investment into 4 equal payments please contact thefrontporch@magsmarketplace.com",
        ],
        color: "bg-[#008B47]",
        btnColor: "bg-[#008B47]",
      },
      {
        title: "Community Supporter",
        price: "$75",
        frequency: "As Often As You’d Like",
        features: [
          "Want to support us? Join Our Community",
          "Your help makes our $25 memberships possible.",
        ],
        color: "bg-[#7C5D3F]",
        btnColor: "bg-[#7C5D3F]",
      },
    ];
  
    return (
      <div className=" mx-auto py-12 text-center w-[80%] ">
        <h2 className="text-[45px] font-[400] mb-6">How much is Membership</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
            <div key={index} className=" rounded-lg shadow-lg pb-12 bg-[#efe0cc86]">
              <div className={`${plan.color} text-white font-semibold py-6 px-2 text-[37px] rounded-t-lg`}>{plan.title}</div>
              <ul className=" mb-6 space-y-2 text-gray-700 mx-12 mt-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="border-b pb-2 last:border-b-0 font1 text-[20px] font-[500]">{feature}</li>
                ))}
              </ul>
              <div className={`text-xl font-bold text-[42px] py-3 px-6 text-white mx-12 rounded-md ${plan.btnColor}`}>{plan.price}
              <p className="text-sm text-white text-[18px] font-[400] font1">{plan.frequency}</p>
              </div>
         
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MembershipPricing;
  