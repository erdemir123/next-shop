// import RoundBox from './RoundBox';

const SortBy = () => {
  return (
    <div className="border w-[100%]">
      <div >
        {/* <RoundBox of="default" /> */}
        <span className="text">Default</span>
      </div>
      <div >
        {/* <RoundBox of="price_high_to_low" /> */}
        <span className="text">Price: High to Low</span>
      </div>
      <div className="">
        {/* <RoundBox of="price_low_to_high" /> */}
        <span className="text">Price: Low to High</span>
      </div>
    </div>
  );
};

export default SortBy;