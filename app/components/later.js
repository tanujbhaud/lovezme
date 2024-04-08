export default function Later({ id, entry }) {
  return (
    <>
      <div className="bg-white cursor-pointer hover:scale-105 ease-in-out duration-300 ml-6 rounded-3xl w-[500px]  border-[#7645d9]  mb-4">
        <div
          style={{ justifyContent: "space-between" }}
          className=" text-[#2f1664] bg-[#e7e3eb]  rounded-t-2xl  flex p-5 mb-5"
        >
          <div className="font-extrabold ">Later</div>
          <div className="">#{id}</div>
        </div>
        <div className="relative">
          <div className="flex justify-center items-center">
            <img className="w-[300px]" src="uptriangle.png"></img>
          </div>
          <div className="absolute z-10 top-0 flex justify-center items-center w-[100%] h-[100%] flex-col">
            <div className="text-[#c1c6c8] font-extrabold text-xl mt-2">UP</div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="bg-white text-[#2f1664] rounded-3xl w-[400px] mx-12  border-[#e7e3eb] border-[2px]">
            <div className="p-5  ">
              <div className="flex mb-2 justify-center items-center font-extrabold text-xl">
                Entry Starts
              </div>
              <div className="flex mb-2 justify-center items-center font-extrabold text-2xl">
                ~{entry}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-5">
          <div className="flex justify-center items-center ">
            <img className="w-[300px]" src="graydowntriangle.png"></img>
          </div>

          <div className="absolute  z-10 top-0 flex  items-center w-[100%] h-[100%] flex-col">
            <div className="text-[#c1c6c8] mt-5 font-extrabold text-xl ">
              DOWN
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
