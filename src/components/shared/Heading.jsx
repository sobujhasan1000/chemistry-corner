const Heading = ({ title, subTitle }) => {
  return (
    <div className="w-2/5 mx-auto text-center flex flex-col justify-center items-center space-y-5 my-16">
      <div>
        <h2 className="text-4xl font-medium text-[#212121] font-signature">
          {title}
        </h2>
      </div>
      <div>
        <p className="text-gray-800">{subTitle}</p>
      </div>
    </div>
  );
};

export default Heading;
