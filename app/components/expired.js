export default function Expired({
  id,
  uppayout,
  downpayout,
  ltpcl,
  change,
  lockedPrize,
  prizePool,
}) {
  return (
    <>
      <div className="bg-[#eaedf7] ml-6 opacity-70 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-3xl w-[500px]    mb-4">
        <div
          style={{ justifyContent: "space-between" }}
          className=" flex p-5 bg-[#dadae9] rounded-t-3xl"
        >
          <div className="font-extrabold text-[#c3c8d3]">Expired</div>
          <div className="text-[#c3c8d3]">#{id}</div>
        </div>
        <div className="bg-[#eaedf7] relative">
          <div className="flex justify-center items-center">
            <img className="w-[300px]" src="uptriangle-transparent.png"></img>
          </div>
          <div className=" bup absolute z-10 top-0 flex justify-center items-center w-[100%] h-[100%] flex-col">
            <div className="text-[#32cea8] font-extrabold text-xl mt-2">UP</div>
            <div className="">
              <span className="text-[#7f74ad] text-lg font-bold">
                {uppayout}x
              </span>{" "}
              <span className="text-[#876cb2] text-lg">Payout</span>
            </div>
          </div>
        </div>
        <div className="bg-[#eaedf7] w-full flex justify-center items-center">
          <div className="bg-[#eaedf7] rounded-3xl w-[400px] mx-12 border-[#ed4b9e] border-[2px]">
            <div className="p-5  ">
              <span className=" text-[#7f74ad] text-md font-bold ">
                CLOSED PRICE
              </span>{" "}
              <div
                style={{ justifyContent: "space-between" }}
                className="flex mt-2 justify-center items-center"
              >
                <div className="text-[#ed4b9e] font-extrabold text-2xl border-dotted border-b-[3px] border-[#8075AE]">
                  {ltpcl}{" "}
                </div>
                <div className="bg-[#ed4b9e] text-white p-2 rounded-md">
                  ${change}
                </div>
              </div>
              <div
                style={{ justifyContent: "space-between" }}
                className="flex mt-3 justify-center items-center"
              >
                <div>Locked Price</div>

                <div>${lockedPrize}</div>
              </div>
              <div
                style={{ justifyContent: "space-between" }}
                className="flex mt-3   justify-center items-center font-extrabold text-xl"
              >
                <div>Prize Pool</div>

                <div>{prizePool}</div>
              </div>
            </div>
          </div>
        </div>

        <div className=" rounded-3xl bg-[#eaedf7] relative">
          <div className="flex justify-center items-center ">
            <img className="w-[300px]" src="downtriangle-transparent.png"></img>
          </div>

          <div className="absolute z-10 top-0 flex  items-center w-[100%] h-[100%] flex-col">
            <div className="mt-1">
              <span className="text-white text-lg font-bold">
                {downpayout}x
              </span>{" "}
              <span className="text-white text-lg">Payout</span>
            </div>
            <div className="text-white font-extrabold text-xl ">DOWN</div>
          </div>
        </div>
      </div>
    </>
  );
}
