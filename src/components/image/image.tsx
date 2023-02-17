type Props = { image: string };

const Image: React.FC<Props> = ({ image }) => {
  return (
    <figure>
      <img src={image} alt="" width={650} />;
    </figure>
  );
};

export default Image;
