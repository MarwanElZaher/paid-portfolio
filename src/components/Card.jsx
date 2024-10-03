const Card = ({ imgSrc, imgAlt, cardTitle, bgColor1, bgColor2, buttonBgColor, technologies, cardType, description }) => {
  return (
    cardType == "vertical" ? (
    <div className={`flex flex-col rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:rounded-2xl`}>
      {/* Image section with the first background color */}
      <div className={`${bgColor1} px-12 py-24`}>
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="w-80 h-60 object-cover rounded-lg" />}
      </div>

      {/* Content section with the second background color */}
      <div className={`p-6 ${bgColor2} rounded-b-2xl`}>
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
        <h2 className="text-lg font-bold uppercase">{cardTitle}</h2>
      </div>
      </div>
    ) : (
        <div className={`flex flex-row rounded-2xl overflow-hidden p-10 m-8 ${bgColor1} shadow-lg transition-all duration-300 hover:shadow-xl hover:rounded-2xl`}>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold uppercase">{cardTitle}</h2>
            <p>{description}</p>
          </div>
          <div>
            <img src={imgSrc} alt={imgAlt} />
          </div>
        </div>
      )
  );
};

export default Card;
