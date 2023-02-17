import Service from "./service/service";
import clipboard from "../../assets/images/clipboard.svg";
import clipboard2 from "../../assets/images/clipboard2.svg";
import firstAid from "../../assets/images/first-aid.svg";
import magnifying from "../../assets/images/magnifying.svg";
import medicine from "../../assets/images/medicine.svg";
import mobileDevice from "../../assets/images/mobile-device.svg";
import { Section, Button } from "./our-services-style";

const services = [
  {
    image: magnifying,
    title: "Search doctor",
    text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    image: medicine,
    title: "Online pharmacy",
    text: "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    image: mobileDevice,
    title: "Consultation",
    text: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    image: clipboard,
    title: "Details info",
    text: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    image: firstAid,
    title: "Emergency care",
    text: "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    image: clipboard2,
    title: "Tracking",
    text: "Track and save your medical history and health data ",
  },
];

const OurServices = () => {
  return (
    <Section>
      <h1>Our Services</h1>
      <p>
        We provide to you the best choiches for you. Adjust it to your health needs and make sure
        your undergo treatment with our highly qualified doctors you can consult with us which type
        of service is suitable for your health
      </p>
      <Service services={services} />
      <Button>Learn more</Button>
    </Section>
  );
};

export default OurServices;
