import "./ServiceCard.css";


const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="service-card">
      <div className="service-card-icon">
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