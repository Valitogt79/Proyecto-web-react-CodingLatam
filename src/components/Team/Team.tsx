import { useState, useEffect } from "react";
import checkIcon from "../../assets/images/check.svg";
import userIcon from "../../assets/images/Icon.svg";
import tropyIcon from "../../assets/images/trophy.svg";
import { Teammate } from "./Teammate";
import { ITeammate } from "../../types/teammate";

export function Team() {
  const [teammates, setTeammates] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/teams")
      .then((res) => res.json())
      .then((data) => setTeammates(data));
  }, []);
  return (
    <section className="bg-gray pt-12 px-0 b-24">
      <div className="container grid grid-1 gap-5 lg:grid-cols-[1fr_2fr_auto]">
        <div className="info">
          <h2>We are proud of our design team</h2>
          <p>
            Just sit back and relax while we take care of your business needs
            for you.
          </p>
        </div>
        <div className="flex flex-wrap gap-[100px]">
          <div className="flex flex-col item-center text-center md:gap-3 flex-1">
            <div className="bg-skyblue rounded-full p-4 w-fit">
              <img className="h-[26px]" src={checkIcon} alt="" />
            </div>
            <h3 className="text-[41px]">1000+</h3>
            <p>Completed Projects</p>
          </div>
          <div className="flex flex-col item-center text-center ">
            <div className="bg-skyblue rounded-full p-4 w-fit">
              <img className="h-[26px]" src={userIcon} alt="" />
            </div>
            <h3 className="text-[41px]">50k</h3>
            <p>Happy Customers</p>
          </div>
          <div className="flex flex-col item-center text-center">
            <div className="bg-skyblue rounded-full p-4 w-fit">
              <img className="h-[26px]" src={tropyIcon} alt="" />
            </div>
            <h3 className="text-[41px]">20k</h3>
            <p>Awards Won</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 col-span-full md:grid-cols-2 lg:grid-cols-4">
          {teammates.map((item: ITeammate) => (
            <Teammate key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
