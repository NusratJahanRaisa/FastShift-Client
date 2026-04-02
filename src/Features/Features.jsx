import React from "react";
import img1 from "../assets/All/Group4.png"
import img2 from "../assets/All/illustration.png"


const featuresData = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: img2,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: img1, 
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: img1, 
  },
];

const Features = () => {
  return (
    <div className="px-4 py-12 space-y-8  w-11/12 mx-auto">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-base-200 p-6 rounded-lg shadow-md"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/3 h-50 flex justify-center mb-4 md:mb-0">
            <img
              src={feature.image}
              className="w-full h-full object-contain border-r border-dashed border-gray-500"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 md:pl-6">
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;