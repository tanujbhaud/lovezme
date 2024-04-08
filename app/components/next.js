export default function Next({ id, uppayout, downpayout, prizePool }) {
  return (
    <>
      <div className="bg-white  cursor-pointer hover:scale-105 ease-in-out duration-300 ml-6 rounded-3xl w-[500px]  border-[#7645d9] border-[2px] border-b-[4px] mb-4">
        <div
          style={{ justifyContent: "space-between" }}
          className=" text-white rounded-t-2xl bg-[#7645d9] flex p-5 mb-5"
        >
          <div className="font-extrabold ">Next</div>
          <div className="">#{id}</div>
        </div>
        <div className="relative">
          <div className="flex justify-center items-center">
            <img className="w-[300px]" src="uptriangle.png"></img>
          </div>
          <div className="absolute z-10 top-0 flex justify-center items-center w-[100%] h-[100%] flex-col">
            <div className="text-[#32cea8] font-extrabold text-xl mt-2">UP</div>
            <div className="">
              <span className="text-[#7f74ad] text-lg font-bold">
                {uppayout}x
              </span>{" "}
              <span className="text-[#876cb2] text-lg">Payout</span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="bg-white rounded-3xl w-[400px] mx-12  border-[#ed4b9e] border-[2px]">
            <div className="p-5  ">
              <div
                style={{ justifyContent: "space-between" }}
                className="flex mb-2 justify-center items-center font-extrabold text-xl"
              >
                <div>Prize Pool</div>

                <div>{prizePool} BNB</div>
              </div>
              <div className="bg-[#32cea8] text-white text-center p-4 rounded-2xl font-extrabold border-b-[2px] border-[#28877b]">
                Enter UP
              </div>

              <div className="bg-[#ed4b9e] mt-2 text-white text-center p-4 rounded-2xl font-extrabold border-b-[2px] border-[#be8fbb]">
                Enter DOWN
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center ">
            <img className="w-[300px]" src="graydowntriangle.png"></img>
          </div>

          <div className="absolute z-10 top-0 flex  items-center w-[100%] h-[100%] flex-col">
            <div className="mt-1">
              <span className="text-[#7f74ad] text-lg font-bold">
                {downpayout}x
              </span>{" "}
              <span className="text-[#876cb2] text-lg">Payout</span>
            </div>
            <div className="text-[#ed4b9e] font-extrabold text-xl ">DOWN</div>
          </div>
        </div>
      </div>
    </>
  );
}
