import { StServices, StService, Title, Image } from "./service-styles";

type Services = {
  services: Array<Service>;
};
type Service = {
  image: string;
  title: string;
  text: string;
};

const Service: React.FC<Services> = ({ services }) => {
  return (
    <StServices>
      {services.map((service: Service, index: number) => (
        <StService key={index}>
          <Image src={service.image} alt="" />
          <Title>{service.title}</Title>
          <p>{service.text}</p>
        </StService>
      ))}
    </StServices>
  );
};

export default Service;
