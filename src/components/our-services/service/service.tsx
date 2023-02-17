import { StServices, StService, Title, Text, Image } from "./service-styles";

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
          <Text>{service.text}</Text>
        </StService>
      ))}
    </StServices>
  );
};

export default Service;
