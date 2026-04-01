import "./ServiceCard.css";


const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  const {title,description} = service 
  
  return (
    <div className="service-card">
      <div className="service-card-icon">
        <Icon />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;