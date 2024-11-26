/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ListItem from "../../components/ListItem";
import { Loading } from "../../components/Loading";
import { FaChartLine, FaLeaf } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import { IoChatbubbles } from "react-icons/io5";
import Testimonial from "../../components/Testimonial";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="max-w-[86rem] mx-auto px-4">
      <section className="overflow-hidden   pb-6 mb-6 border-b-2 border-[#ddd]">
        <div className="container mx-auto">
          <div className=" flex  flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center ">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="16.3333"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="45.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="60.3334"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="88.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="117.667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="74.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={31}
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={103}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={132}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={31}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={31}
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={103}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={103}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={132}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={132}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={31}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={31}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={103}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={103}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={132}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={132}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={31}
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={31}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={103}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={103}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={132}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#4f9451"
                        />
                        <circle
                          cx={132}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#4f9451"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-6 lg:w-1/2 xl:w-5/12">
              <div className="w-full">
                <span className="block mb-4 text-lg font-semibold text-[#4F9451]">
                  What About Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark ">
                  We Help people From wrong Psychology
                </h2>
                <p className="mb-5 text-base text-gray-600 ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour or randomised words which don't
                  look...
                </p>
                <ol className="flex gap-2">
                  <div className="w-1/2  space-y-2">
                    <ListItem text="There are many variations" />
                    <ListItem text="There are many variations" />
                    <ListItem text="There are many variations" />
                  </div>

                  <div className="w-1/2  space-y-2">
                    <ListItem text="There are many variations" />
                    <ListItem text="There are many variations" />
                    <ListItem text="There are many variations" />
                  </div>
                </ol>

                <a
                  href="/"
                  className="inline-flex items-center justify-center py-3 mt-5 text-base font-medium text-center text-white border border-transparent rounded-md px-10 bg-[#4F9451] hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-6 mb-6 border-b-2 border-[#ddd] ">
        <div className="mb-6 lg:mb-10 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="w-full px-4">
            <div className="mx-auto  max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary text-[#4F9451]">
                Our Features
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
                Why choose Us
              </h2>
              <p className="text-base text-body-color ">
                we aim to create a safe and supportive environment where you can
                explore your thoughts, feelings, and experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="group relative w-full bg-[#ffffff] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-[#4f9451]">
            <div className="bg-[#f6f6f6] rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
              <IoChatbubbles className="scale-150 text-[#4f9451]" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
              Online Therapy Sessions
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              Access licensed therapists from the comfort of your home through
              secure video sessions. Personalized support is just a click away.
              Don&apos;t hesitate and start right now!
            </p>
          </div>
          <div className="group relative w-full bg-[#ffffff] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-[#4f9451]">
            <div className="bg-[#f6f6f6] rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
              <IoIosBook className="scale-150 text-[#4f9451]" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
              Self-Help Resources
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              Explore a wide range of articles, guides, and tools designed to
              help you manage stress, anxiety, and other mental health
              challenges effectively.
            </p>
          </div>
          <div className="group relative w-full bg-[#ffffff] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-[#4f9451]">
            <div className="bg-[#f6f6f6] rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
              <FaLeaf className="scale-150 text-[#4f9451]" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
              Mindfulness and Meditation
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              Discover mindfulness and meditation techniques that can help
              reduce stress and improve your overall mental well-being.
            </p>
          </div>
          <div className="group relative w-full bg-[#ffffff] rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-[#4f9451]">
            <div className="bg-[#f6f6f6] rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
              <FaChartLine className="scale-150 text-[#4f9451]" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
              Personalized Wellness Plans
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              Receive tailored wellness plans that cater to your individual
              needs and goals. Our resources will guide you on your journey to
              better mental health.
            </p>
          </div>
        </div>
      </div>

      <section className="flex items-center justify-center">
        <div className="text-center">
          <span className="block mb-2 text-lg font-semibold text-[#4F9451]">
            Our Testimonial
          </span>
          <h1 className=" text-4xl font-bold text-black">
            What Our Patients Are Saying
          </h1>
        </div>
      </section>
      <section>
        <Testimonial />
      </section>
    </div>
  );
};

export default About;
