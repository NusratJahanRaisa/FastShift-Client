// ServiceCard.jsx
const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 group">
      {/* Icon */}
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center text-teal-700 text-xl group-hover:bg-teal-100 transition">
        <Icon />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;