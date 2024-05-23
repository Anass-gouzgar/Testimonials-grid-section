import Image from "next/image";
import React from "react";
import daniel from "/public/images/image-daniel.jpg";
import jonathan from "/public/images/image-jonathan.jpg";
import kira from "/public/images/image-kira.jpg";
import patrick from "/public/images/image-patrick.jpg";
import jeanette from "/public/images/image-jeanette.jpg";

const index = () => {
  return (
    // container
    <div className="rounded-2xl h-full w-full flex flex-col gap-6 md:w-[1300px] md:h-[700px] md:flex md:flex-row md:gap-6 overflow-hiddenf">
      {/* first 4 sections */}
      <div className="md:w-[80%] h-full w-full md:grid flex flex-col gap-8 md:grid-rows-2 md:grid-cols-3 md:gap-6 ">
        {/* 1 */}
        <div className="flex flex-col  md:col-span-2 bgImg bg-moderate-violet p-6 rounded-2xl  shadow-2xl md:shadow-none">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Image
                src={daniel}
                alt="daniel"
                className="rounded-full border-2 border-gray-400 w-10 h-10"
              />
              <div className="flex flex-col text-sm">
                <h2 className="text-white">Daniel Clifford </h2>
                <h2 className="text-light-gray">Verified Graduate</h2>
              </div>
            </div>
            <p className="text-White text-2xl font-bold md:pr-7">
              {" "}
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </p>
            <p className="text-light-gray pr-10 ">
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="rounded-2xl flex flex-col gap-5 bg-very-dark-grayish-blue p-6 shadow-2xl md:shadow-none">
          <div className="flex  gap-4">
            <Image
              src={jonathan}
              alt="jonathan"
              className="rounded-full border-2 border-white w-10 h-10"
            />
            <div className="flex flex-col">
              <h2 className="text-white">Jonathan Walters </h2>
              <h2 className="text-light-gray">Verified Graduate</h2>
            </div>
          </div>
          <h1 className="text-white text-2xl font-bold">
            {" "}
            The team was very supportive and kept me motivated
          </h1>
          <p className="text-light-gray">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </div>
        {/* 3 */}
        <div className="flex flex-col gap-4 rounded-2xl bg-White p-8  shadow-2xl">
          <div className="flex  gap-4">
            <Image
              src={jeanette}
              alt="jeanette"
              className="rounded-full border-2 border-white w-10 h-10"
            />
            <div className="flex flex-col">
              <h2 className="text-very-dark-grayish-blueblue">
                {" "}
                Jeanette Harmon
              </h2>
              <h2 className="text-light-gray">Verified Graduate</h2>
            </div>
          </div>
          <h2 className="text-2xl font-bold md:mr-8 ">
            {" "}
            An overall wonderful and rewarding experience
          </h2>
          <p className="text-gray-500 md:pr-4">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </div>
        {/* 4 */}
        <div className="col-span-2 rounded-2xl bg-very-dark-blackish-blue p-7 flex flex-col gap-5  shadow-2xl">
          <div className="flex  gap-4">
            <Image
              src={patrick}
              alt="patrick"
              className="rounded-full border-2 border-moderate-violet w-10 h-10"
            />
            <div className="flex flex-col">
              <h2 className="text-White"> Patrick Abrams</h2>
              <h2 className="text-light-gray">Verified Graduate</h2>
            </div>
          </div>
          <h2 className="text-White text-2xl md:pr-4">
            {" "}
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h2>
          <p className="text-light-gray pr-7">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </div>
      </div>
      {/* last section */}
      <div className="bg-white md:w-[20%] w-full h-full rounded-2xl p-6 flex flex-col gap-6 shadow-2xl">
        <div className="flex gap-4">
          <Image
            src={kira}
            alt="jeanette"
            className="rounded-full border-2 border-white w-10 h-10"
          />
          <div className="flex flex-col">
            <h2 className="text-very-dark-grayish-blueblue"> Kira Whittle</h2>
            <h2 className="text-light-gray">Verified Graduate</h2>
          </div>
        </div>
        <h2 className="md:text-2xl text-xl font-bold text-very-dark-blackish-blue">
          {" "}
          Such a life-changing experience. Highly recommended!
        </h2>
        <p className="text-sm text-gray-500 mt-3 font-bold leading-[21px]">
          “ Before joining the bootcamp, I’ve never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I’ve
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! ”
        </p>
      </div>
    </div>
  );
};

export default index;
