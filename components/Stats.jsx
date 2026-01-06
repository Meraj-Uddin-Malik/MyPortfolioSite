// import CountUp from "react-countup/build/CountUp";

"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    Text: "Years of Experience",
  },
  {
    num: 5,
    Text: "Projects Completed",
  },
  {
    num: 10,
    Text: "Technologies Knowledge",
  },
  {
    num: 234,
    Text: "Code Commits",
  },
];



const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="contanner mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-center"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  suffix="+"  
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.Text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }leading-sung text-white/80`}
                >
                  {item.Text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
