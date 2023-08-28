const CardInfo = ({ title, subtitle }) => {
  return (
    <div className="bg-primary w-full text-center rounded-md text-second p-3">
      <h3 className="font-bold">{title}</h3>
      <p className="text-xl">{subtitle}</p>
    </div>
  );
};

export default CardInfo;
