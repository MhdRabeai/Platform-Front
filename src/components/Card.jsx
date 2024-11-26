/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ headline, content, icon }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg  p-4  shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-full md:w-[49%] my-card min-h-48 flex flex-col  justify-center ">
      <div className="text-2xl text-[#4F9451]">
        {/* <FontAwesomeIcon icon={icon} /> */}
      </div>
      <h3 className="mt-4 lg:mt-2 lg:text-base text-xl font-semibold">
        {headline}
      </h3>
      <p className="mt-2 lg:mt-1 text-gray-600 lg:text-sm ">{content}</p>
    </div>
  );
};

export default Card;
