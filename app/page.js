"use client";
import { useRef } from "react";
import { Fragment } from "react";
import Image from "next/image";
import Expired from "./components/expired";
import Live from "./components/live";
import Next from "./components/next";
import Later from "./components/later";
export default function Home() {
  const sliderRef = useRef();
  const slideLeft = () => {
    let slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const mockData = [
    {
      type: "expired",
      id: "218485",
      uppayout: 1.1,
      downpayout: 3.45,
      ltpcl: 240.9512,
      lockedPrize: 232.1235,
      prizePool: 7.123,

      change: +0.1291,
    },
    {
      type: "expired",
      id: "218486",
      uppayout: 1.75,
      downpayout: 2.32,
      ltpcl: 228.9473,
      lockedPrize: 229.5264,
      prizePool: 5.427,

      change: -0.5791,
    },
    {
      type: "live",
      id: "218487",
      uppayout: 2.15,
      downpayout: 1.87,
      ltpcl: 228.5332,
      lockedPrize: 228.9473,
      prizePool: 8.5143,
      change: -0.4141,
    },
    {
      type: "next",
      id: "218488",
      uppayout: 1.35,
      downpayout: 3.84,
      prizePool: 2.376,
    },

    {
      type: "later",
      id: "218489",
      entry: "01:35",
    },
  ];
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
            <img
              onClick={slideLeft}
              className="absolute h-5  cursor-pointer top-[0.4em] left-2"
              src="left.png"
            />{" "}
            <img
              className="absolute h-[100px]  bottom-[-25px] left-5"
              src="bunny.png"
            />
            <img
              onClick={slideRight}
              className="absolute h-5   top-[0.4em] cursor-pointer right-2"
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
      <div
        ref={sliderRef}
        className="
        no-scrollbar mt-5 px-8  pt-7 pb-4 flex items-center overflow-x-scroll scroll-smooth"
      >
        {mockData.map((item) => {
          return (
            <Fragment key={item.id}>
              {item.type === "expired" ? (
                <Expired
                  id={item.id}
                  uppayout={item.uppayout}
                  downpayout={item.downpayout}
                  ltpcl={item.ltpcl}
                  lockedPrize={item.lockedPrize}
                  prizePool={item.prizePool}
                  change={item.change}
                />
              ) : item.type === "live" ? (
                <Live
                  id={item.id}
                  uppayout={item.uppayout}
                  downpayout={item.downpayout}
                  ltpcl={item.ltpcl}
                  lockedPrize={item.lockedPrize}
                  prizePool={item.prizePool}
                  change={item.change}
                />
              ) : item.type === "next" ? (
                <Next
                  id={item.id}
                  uppayout={item.uppayout}
                  downpayout={item.downpayout}
                  prizePool={item.prizePool}
                />
              ) : (
                <Later id={item.id} entry={item.entry} />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
