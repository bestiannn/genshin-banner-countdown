const Title = ({title}) => {
  return (
    <div className="bg-black bg-opacity-50 mb-5 pb-3 2xl:pb-6 pt-2 lg:pt-5 2xl:pt-4 mx-auto w-full lg:w-1/2 px-auto lg:px-10 rounded-none lg:rounded-3xl border-0 lg:border-4 border-black">
      <h1 className="text-2xl md:text-2xl lg:text-3xl font-black">
        { title }
      </h1>
      <h2 className="text-gray-300 text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-extrabold">
        Banner 2.8 Countdown
      </h2>
      <div className="text-xl md:text-2xl font-extrabold flex justify-center mt-3 2xl:mt-5 mb-3 lg:mb-0">
        <span className="text-red-400">
          BETA
        </span>
      </div>
    </div>
  );
};

export default Title;
