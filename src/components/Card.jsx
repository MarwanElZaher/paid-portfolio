const Card = ({
  imgSrc,
  imgAlt,
  cardTitle,
  bgColor1,
  bgColor2,
  buttonBgColor,
  technologies,
  cardType,
  description,
  onClick,
}) => {
  return cardType === "vertical" ? (
    <div className={`flex flex-col rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:rounded-2xl`}>
      {/* Image section with the first background color */}
      <div className={`${bgColor1} px-6 md:px-12 py-12 md:py-24`}>
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="w-full h-auto object-cover rounded-lg" />}
      </div>

      {/* Content section with the second background color */}
      <div className={`p-4 md:p-6 ${bgColor2} rounded-b-2xl`}>
        <div className="flex gap-2 mb-4">
          {technologies.map((tech, index) => (
            <button
              key={index}
              title={tech}
              className={`py-2 px-4 uppercase rounded-full font-semibold text-white ${index > 0 ? buttonBgColor : "bg-black text-white opacity-70"}`}
              disabled
            >
              {tech}
            </button>
          ))}
        </div>
        <h2 className="text-2xl md:text-3xl font-clash font-bold uppercase">{cardTitle}</h2>
      </div>
    </div>
  ) : cardType === "about" ? (
    <div className="flex flex-col md:flex-row justify-between py-10 border-b border-gray-800">
      <div className="w-full md:w-2/3">
        <p className="text-white text-4xl md:text-7xl font-normal"> {cardTitle} </p>
      </div>
      <div className="w-full md:w-1/3 flex items-center">
        <p className="text-[#F8F8F599] text-base md:text-lg font-light"> {description} </p>
      </div>
    </div>
  ) : cardType === "verticalSmall" ? (
    <div
      onClick={onClick}
      className={`flex flex-col justify-around rounded-2xl overflow-hidden p-6 m-4 border-2 gap-3 border-[#E6E6E3] ${bgColor1} cursor-pointer transition-all duration-500 scale-95 hover:scale-105 hover:shadow-gray-300 shadow-md hover:border-gray-500`}>
      <div className="flex justify-center items-start">
        <img className="w-full h-auto pb-4" src={imgSrc} alt={imgAlt} />
      </div>
      <h2 className="flex flex-col items-center text-2xl md:text-3xl font-clash font-bold">{cardTitle}</h2>
      <p className="flex flex-col items-center text-gray-500 text-sm md:text-base text-center">{description}</p>
    </div>
  ) : (
    <div className={`flex flex-col md:flex-row justify-between rounded-2xl overflow-hidden p-6 m-4 border-2 border-[#E6E6E3] ${bgColor1}`}>
      <div className="flex flex-col w-full md:w-2/3">
        <h2 className="text-lg md:text-xl font-clash font-bold">{cardTitle}</h2>
        <p className="text-gray-500 text-sm md:text-base">{description}</p>
      </div>
      <div className="flex justify-end items-start">
        <img className="w-full md:w-30 h-auto" src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

export default Card;
