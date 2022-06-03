const Title = ({title}) => {
  return (
    <div className="bg-yellow-900 bg-opacity-50 mb-5 pb-3 lg:pb-6 2xl:pb-6 pt-2 lg:pt-5 2xl:pt-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-center font-black text-white">
        { title }
      </h1>
      <div className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-extrabold flex justify-center mt-2 2xl:mt-5">
        <span className=" bg-clip-text text-transparent bg-gradient-to-t from-amber-400 to-amber-800">
          BETA
        </span>
      </div>
    </div>
  );
};

export default Title;
