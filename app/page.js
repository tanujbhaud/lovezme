import Image from "next/image";

export default function Home() {
  return (
    <div className="body w-[100vw] h-[100%]">
      <div
        className="flex pt-10"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <div className="bg-white p-4 ml-14 text-[#280e5f] rounded-full">
          <img src="coin.png" className="absolute h-[120px] top-5 left-0" />
          <span className="font-extrabold pl-12">BNBUSD</span>{" "}
          <span className="text-xs">$228.5332</span>
        </div>

        <div className="ml-[35px]">
          <div className="bg-white p-4 rounded-full h-5 absolute w-[125px] top-14 ">
            <img className="absolute h-5  top-[0.4em] left-2" src="left.png" />{" "}
            <img
              className="absolute h-[100px]  bottom-[-25px] left-5"
              src="bunny.png"
            />
            <img
              className="absolute h-5  top-[0.4em] right-2"
              src="right.png"
            />
          </div>
        </div>
        <div className="pr-4 ">
          <div className="flex ">
            <div className="bg-white p-4 text-[#7645d9] rounded-full flex justify-center items-center relative">
              <span className="font-bold">00:38</span>{" "}
              <span className="text-xs pl-1 pr-[80px]">5m</span>
              <img
                className="absolute h-[150px]  bottom- right-[-30px]"
                src="clock.png"
              />
            </div>

            <div className=" border-b-[4px] border-[#534c7c] bg-[#7A6eaa] w-14 p-4 ml-6 text-[#280e5f] rounded-2xl flex justify-center items-center relative">
              <img className="absolute h-9" src="question.png"></img>
            </div>

            <div className="border-b-[4px] border-[#534c7c] bg-[#7A6eaa] w-14 p-4 ml-6 text-[#280e5f] rounded-2xl flex justify-center items-center relative">
              <img className="absolute h-9 right-4" src="trophy.png"></img>
            </div>

            <div className=" bg-[#e9eaeb] w-14 p-4 ml-6 text-[#280e5f] rounded-2xl flex justify-center items-center relative">
              <img className="absolute h-9 left-[15px]" src="history.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 w-[100vw] flex justify-center items-center">
        <div className="bg-white rounded-3xl w-[500px]  border-[#7645d9] border-[2px] border-b-[4px] mb-4">
          <div
            style={{ justifyContent: "space-between" }}
            className=" flex p-5"
          >
            <div className="font-extrabold text-[#7645d9]">LIVE</div>
            <div className="text-[#7645d9]">#218486</div>
          </div>
          <div className="flex">
            <div className="bg-[#7645d9] w-[80%] h-3 mb-5"></div>
            <div className="bg-[#eeeaf4] w-[20%] h-3 mb-5"></div>
          </div>
          <div className="relative">
            <div className="flex justify-center items-center">
              <img className="w-[300px]" src="uptriangle.png"></img>
            </div>
            <div className="absolute z-10 top-0 flex justify-center items-center w-[100%] h-[100%] flex-col">
              <div className="text-[#32cea8] font-extrabold text-xl mt-2">
                UP
              </div>
              <div className="">
                <span className="text-[#7f74ad] text-lg font-bold">2.15x</span>{" "}
                <span className="text-[#876cb2] text-lg">Payout</span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="bg-white rounded-3xl w-[400px]  border-[#ed4b9e] border-[2px]">
              <div className="p-5  ">
                <span className=" text-[#7f74ad] text-md font-bold ">
                  LAST PRICE
                </span>{" "}
                <div
                  style={{ justifyContent: "space-between" }}
                  className="flex mt-2 justify-center items-center"
                >
                  <div className="text-[#ed4b9e] font-extrabold text-2xl border-dotted border-b-[3px] border-[#8075AE]">
                    $228.532
                  </div>
                  <div className="bg-[#ed4b9e] text-white p-2 rounded-md">
                    $-0.4141
                  </div>
                </div>
                <div
                  style={{ justifyContent: "space-between" }}
                  className="flex mt-3 justify-center items-center"
                >
                  <div>Locked Price</div>

                  <div>$228.9473</div>
                </div>
                <div
                  style={{ justifyContent: "space-between" }}
                  className="flex mt-3 justify-center items-center font-extrabold text-xl"
                >
                  <div>Prize Pool</div>

                  <div>8.5143</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center items-center ">
              <img className="w-[300px]" src="downtriangle.png"></img>
            </div>

            <div className="absolute z-10 top-0 flex  items-center w-[100%] h-[100%] flex-col">
              <div className="mt-1">
                <span className="text-white text-lg font-bold">2.15x</span>{" "}
                <span className="text-white text-lg">Payout</span>
              </div>
              <div className="text-white font-extrabold text-xl ">DOWN</div>
            </div>
          </div>
        </div>
        <div className="bg-white ml-6 rounded-3xl w-[500px]  border-[#7645d9] border-[2px] border-b-[4px] mb-4">
          <div
            style={{ justifyContent: "space-between" }}
            className=" text-white rounded-t-2xl bg-[#7645d9] flex p-5 mb-5"
          >
            <div className="font-extrabold ">Next</div>
            <div className="">#218487</div>
          </div>
          <div className="relative">
            <div className="flex justify-center items-center">
              <img className="w-[300px]" src="uptriangle.png"></img>
            </div>
            <div className="absolute z-10 top-0 flex justify-center items-center w-[100%] h-[100%] flex-col">
              <div className="text-[#32cea8] font-extrabold text-xl mt-2">
                UP
              </div>
              <div className="">
                <span className="text-[#7f74ad] text-lg font-bold">1.3x</span>{" "}
                <span className="text-[#876cb2] text-lg">Payout</span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="bg-white rounded-3xl w-[400px]  border-[#ed4b9e] border-[2px]">
              <div className="p-5  ">
                <div
                  style={{ justifyContent: "space-between" }}
                  className="flex mb-2 justify-center items-center font-extrabold text-xl"
                >
                  <div>Prize Pool</div>

                  <div>2.3760 BNB</div>
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
                <span className="text-[#7f74ad] text-lg font-bold">3.84x</span>{" "}
                <span className="text-[#876cb2] text-lg">Payout</span>
              </div>
              <div className="text-[#ed4b9e] font-extrabold text-xl ">DOWN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
