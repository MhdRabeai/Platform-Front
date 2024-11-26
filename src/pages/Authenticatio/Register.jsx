/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { Bounce, toast } from "react-toastify";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail, MdPassword } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import NotFound from "../../components/NotFound";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [email, setEmail] = useState("");
  const steps = ["", "", "", ""];
  const [currentStep, setCurrentStep] = useState(0);
  const [isOneVisible, setIsOne] = useState(false);
  const [isTwoVisible, setIsTwo] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const formElement = document.getElementById("uploadForm");
    if (formElement) {
      try {
        const formData = new FormData(formElement);
        const emailValue = formData.get("email");
        if (emailValue) {
          setEmail(emailValue);
        }
        // formData.forEach((value, key) => {
        //   console.log(`${key}: ${value}`);
        // });
        // const res = await fetch("http://localhost:4000/userRegister", {
        //   method: "POST",
        //   body: formData,
        //   credentials: "include",
        // });
        // if (res.ok) {
        //   setIsLoading(false);
        // }
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }
  }
  async function handleVerify(e) {
    e.preventDefault();
    const formElement = document.getElementById("otp-form");
    if (formElement) {
      const myArr = [];
      const formData = new FormData(formElement);
      formData.forEach((value, key) => {
        myArr.push(value);
      });
      try {
        const res = await fetch("http://localhost:4000/verifyEmail", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: email, confirmationCode: myArr }),
          credentials: "include",
        });
        const msg = await res.json();
        if (res.ok) {
          setIsLoading(false);
          setTimeout(() => {
            navigate("/login");
          }, 3000);
          return toast.success(msg["message"], {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } catch (err) {
        setIsLoading(false);
        navigate("/register");
        return toast.error(err.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
  }
  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const handleBack = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="auth-body flex items-center justify-center">
      <div className="container my-6">
        <div className="max-w-[60rem] mx-auto px-4 flex  justify-between  ">
          <div className="flex items-center justify-center gap-6 flex-col">
            {steps.map((label, index) => (
              <Step
                key={index}
                step={index + 1}
                isActive={index === currentStep}
                isCompleted={index < currentStep}
                label={label}
              />
            ))}
          </div>
          <div className="w-[90%]">
            <form
              encType="multipart/form-data"
              onSubmit={(e) => e.preventDefault()}
              id="uploadForm"
            >
              <div className="mt-8">
                {currentStep === 0 && (
                  <>
                    {" "}
                    <div className="hs-accordion-group w-full divide divide-gray-200  border rounded-xl shadow-sm p-6 ">
                      <div
                        className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border  rounded-xl  border-gray-200 active"
                        id="hs-basic-with-title-and-arrow-stretched-heading-one"
                      >
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none "
                          aria-expanded="false"
                          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                        >
                          How are you feeling today?
                          <svg
                            className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                          <svg
                            className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m18 15-6-6-6 6"></path>
                          </svg>
                        </button>
                        <div
                          id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          role="region"
                          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                          style={{ display: "block" }}
                        >
                          <div className="py-4 px-5 ">
                            <div className="flex gap-x-6 flex-wrap">
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="feeling"
                                  value={"Great"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="radio-group-51"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="radio-group-51"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  Great
                                </label>
                              </div>
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="feeling"
                                  value={"Good"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="radio-group-311"
                                />
                                <label
                                  htmlFor="radio-group-311"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  Good
                                </label>
                              </div>
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="feeling"
                                  value={"So-so"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="radio-group-3"
                                />
                                <label
                                  htmlFor="radio-group-3"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  So-so
                                </label>
                              </div>
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="feeling"
                                  value={"Bad"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="radio-group-4"
                                />
                                <label
                                  htmlFor="radio-group-4"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  Bad
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl "
                        id="hs-basic-with-title-and-arrow-stretched-heading-two"
                      >
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none "
                          aria-expanded="false"
                          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                        >
                          Select any of these challenges you are facing.
                          <svg
                            className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                          <svg
                            className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m18 15-6-6-6 6"></path>
                          </svg>
                        </button>
                        <div
                          id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          role="region"
                          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                          style={{ height: "0px" }}
                        >
                          <div className="py-4 px-5 ">
                            <div className="grid lg:grid-cols-4 lg:gap-x-4 xl:gap-x-12  lg:items-center  justify-between ">
                              <div className="lg:col-span-2 divide divide-y-8 divide-transparent mb-2 lg:mb-0">
                                <div className="flex">
                                  <input
                                    type="checkbox"
                                    name="challenges"
                                    value={"Family"}
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="checkbox-group-12"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="checkbox-group-12"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Family
                                  </label>
                                </div>

                                <div className="flex">
                                  <input
                                    name="challenges"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="hs-checkbox-group-2"
                                    value={"Gender identity"}
                                  />
                                  <label
                                    htmlFor="hs-checkbox-group-2"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Gender identity
                                  </label>
                                </div>

                                <div className="flex">
                                  <input
                                    name="challenges"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="hs-checkbox-group-3"
                                    value={"Relationships"}
                                  />
                                  <label
                                    htmlFor="hs-checkbox-group-3"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Relationships
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="challenges"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="hs-checkbox-group-4"
                                    value={"Social Anxiety"}
                                  />
                                  <label
                                    htmlFor="hs-checkbox-group-4"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Social Anxiety
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="challenges"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="hs-checkbox-group-5"
                                    value={"Trauma/PTSD"}
                                  />
                                  <label
                                    htmlFor="hs-checkbox-group-5"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Trauma/PTSD
                                  </label>
                                </div>
                              </div>
                              <div className="lg:col-span-2 divide divide-y-8 divide-transparent">
                                <div className="flex">
                                  <input
                                    name="challenges"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="hs-checkbox-group-6"
                                    value={"Anger"}
                                  />
                                  <label
                                    htmlFor="hs-checkbox-group-6"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Anger
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="challenges"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="hs-checkbox-group-7"
                                    value={"Depression"}
                                  />
                                  <label
                                    htmlFor="hs-checkbox-group-7"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Depression
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="challenges"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="hs-checkbox-group-8"
                                    value={"Weight"}
                                  />
                                  <label
                                    htmlFor="hs-checkbox-group-8"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Weight
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="challenges"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="hs-checkbox-group-9"
                                    value={"Anxiety"}
                                  />
                                  <label
                                    htmlFor="hs-checkbox-group-9"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Anxiety
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="challenges"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="hss-checkbox-group-10"
                                    value={"Other"}
                                  />
                                  <label
                                    htmlFor="hss-checkbox-group-10"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Other
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl "
                        id="hs-basic-with-title-and-arrow-stretched-heading-three"
                      >
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none "
                          aria-expanded="false"
                          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                        >
                          What areas of life you are hoping to improve?
                          <svg
                            className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                          <svg
                            className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m18 15-6-6-6 6"></path>
                          </svg>
                        </button>
                        <div
                          id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          role="region"
                          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                          style={{ height: "0px" }}
                        >
                          <div className="py-4 px-5 ">
                            <div className="grid lg:grid-cols-4 lg:gap-x-4 xl:gap-x-12  lg:items-center  justify-between ">
                              <div className="lg:col-span-2 divide divide-y-8 divide-transparent mb-2 lg:mb-0">
                                <div className="flex">
                                  <input
                                    type="checkbox"
                                    name="areas"
                                    value={"Eating habits"}
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="hsss-checkbox-group-101"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="hsss-checkbox-group-101"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Eating habits
                                  </label>
                                </div>

                                <div className="flex">
                                  <input
                                    name="areas"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="Exercise"
                                    value={"Exercise"}
                                  />
                                  <label
                                    htmlFor="Exercise"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Exercise
                                  </label>
                                </div>

                                <div className="flex">
                                  <input
                                    name="areas"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="Health"
                                    value={"Health"}
                                  />
                                  <label
                                    htmlFor="Health"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Health
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="areas"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="Home-life"
                                    value={"Home life"}
                                  />
                                  <label
                                    htmlFor="Home-life"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Home life
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="areas"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="Relationships"
                                    value={"Relationships"}
                                  />
                                  <label
                                    htmlFor="Relationships"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Relationships
                                  </label>
                                </div>
                              </div>
                              <div className="lg:col-span-2 divide divide-y-8 divide-transparent">
                                <div className="flex">
                                  <input
                                    name="areas"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="Sleeping"
                                    value={"Sleeping habis"}
                                  />
                                  <label
                                    htmlFor="Sleeping"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Sleeping habis
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="areas"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id=" Work-life"
                                    value={"Work-life balance"}
                                  />
                                  <label
                                    htmlFor=" Work-life"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Work-life balance
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="areas"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="Social-life"
                                    value={"Social life"}
                                  />
                                  <label
                                    htmlFor="Social-life"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Social life
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="areas"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="Work09"
                                    value={"Work"}
                                  />
                                  <label
                                    htmlFor="Work09"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Work
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    name="areas"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none  "
                                    id="Other10"
                                    value={"Other"}
                                  />
                                  <label
                                    htmlFor="Other10"
                                    className="text-sm text-gray-500 ms-3 "
                                  >
                                    Other
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl "
                        id="hs-basic-with-title-and-arrow-stretched-heading-four"
                      >
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none "
                          aria-expanded="false"
                          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                        >
                          Have you ever been in therapy or counseling befor?
                          <svg
                            className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                          <svg
                            className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m18 15-6-6-6 6"></path>
                          </svg>
                        </button>
                        <div
                          id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          role="region"
                          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                          style={{ height: "0px" }}
                        >
                          <div className="py-4 px-5 ">
                            <div className="flex gap-x-6 flex-wrap">
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="prev_therapy"
                                  value={"Yes"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="radio-group-01011"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="radio-group-01011"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="prev_therapy"
                                  value={"No"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="hs-radio-group-6"
                                />
                                <label
                                  htmlFor="hs-radio-group-6"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl "
                        id="hs-basic-with-title-and-arrow-stretched-heading-five"
                      >
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none "
                          aria-expanded="false"
                          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                        >
                          Have you recently had any thoughts of self-harm or
                          sucide?
                          <svg
                            className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                          <svg
                            style={{ position: "s" }}
                            className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m18 15-6-6-6 6"></path>
                          </svg>
                        </button>
                        <div
                          id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          role="region"
                          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                          style={{ height: "0px" }}
                        >
                          <div className="py-4 px-5 ">
                            <div className="flex gap-x-6 flex-wrap">
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="self_harm"
                                  value={"Yes"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="radio-group-91"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="radio-group-91"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="self_harm"
                                  value={"No"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="hs-radio-group-333"
                                />
                                <label
                                  htmlFor="hs-radio-group-333"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border  rounded-xl  border-gray-200 "
                        id="hs-basic-with-title-and-arrow-stretched-heading-five"
                      >
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none "
                          aria-expanded="false"
                          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                        >
                          Are you currently taking any medication?
                          <svg
                            className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                          <svg
                            className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m18 15-6-6-6 6"></path>
                          </svg>
                        </button>
                        <div
                          id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          role="region"
                          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                          style={{ height: "0px" }}
                        >
                          <div className="py-4 px-5 ">
                            <div className="flex gap-6 flex-wrap">
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="any_medication"
                                  value={"Yes"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="hs-radio-group-01"
                                  onClick={() => setIsOne(true)}
                                />
                                <label
                                  htmlFor="hs-radio-group-01"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="any_medication"
                                  value={"No"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="hs-radio-group-444"
                                  onClick={() => setIsOne(false)}
                                  defaultChecked
                                />
                                <label
                                  htmlFor="hs-radio-group-444"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  No
                                </label>
                              </div>
                              <div className="overflow-hidden w-full">
                                <div
                                  className={` flex-col  animate-[slideDown_.3s_ease]  ${
                                    isOneVisible ? "flex" : "hidden"
                                  }`}
                                >
                                  <label
                                    htmlFor="textarea-label0"
                                    className="block text-sm font-medium text-[#4f9451] mb-2 "
                                  >
                                    Mention them:
                                  </label>
                                  <div
                                    id="hs-wrapper-for-copy"
                                    className="space-y-3"
                                  >
                                    <input
                                      id="hs-content-for-copy"
                                      name="any_medication"
                                      type="text"
                                      className="peer py-2 px-4  block w-full
border-2  border-gray-200 rounded-lg text-sm 
focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                                      placeholder="Enter medication's name"
                                    />
                                  </div>

                                  <p className="mt-3 text-end">
                                    <button
                                      type="button"
                                      data-hs-copy-markup='{
"targetSelector": "#hs-content-for-copy",
"wrapperSelector": "#hs-wrapper-for-copy",
"limit": 5
}'
                                      className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-transparent bg-[#4f9451] text-white hover:bg-[#345735] focus:outline-none focus:bg-[#4f9451] disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                      <svg
                                        className="shrink-0 size-3.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                      Add Name
                                    </button>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl "
                        id="hs-basic-with-title-and-arrow-stretched-heading-six"
                      >
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none "
                          aria-expanded="true"
                          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                        >
                          Are you having any chronic pain or illness?
                          <svg
                            className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                          <svg
                            className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m18 15-6-6-6 6"></path>
                          </svg>
                        </button>
                        <div
                          id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          role="region"
                          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                          style={{ height: "0px" }}
                        >
                          <div className="py-4 px-5 ">
                            <div className="flex gap-6 flex-wrap">
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="illness"
                                  value={"Yes"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="hs-radio-group-001"
                                  onClick={() => setIsTwo(true)}
                                />
                                <label
                                  htmlFor="hs-radio-group-001"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="flex">
                                <input
                                  type="radio"
                                  name="illness"
                                  value={"No"}
                                  className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                  id="hs-radio-group-5555"
                                  onClick={() => setIsTwo(false)}
                                  defaultChecked
                                />
                                <label
                                  htmlFor="hs-radio-group-5555"
                                  className="text-sm text-gray-500 ms-2 "
                                >
                                  No
                                </label>
                              </div>
                              <div className="overflow-hidden w-full">
                                <div
                                  className={` flex-col  animate-[slideDown_.3s_ease]  ${
                                    isTwoVisible ? "flex" : "hidden"
                                  }`}
                                >
                                  <label
                                    htmlFor="textarea-label1"
                                    className="block text-sm font-medium text-[#4f9451] mb-2 "
                                  >
                                    What do you feel?
                                  </label>
                                  <textarea
                                    id="textarea-label1"
                                    className="resize-none py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-xs  text-gray-500 focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                                    rows="3"
                                    name="illness"
                                    placeholder="Write here..."
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl "
                        id="hs-basic-with-title-and-arrow-stretched-heading-saven"
                      >
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none "
                          aria-expanded="true"
                          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-saven"
                        >
                          If you could change just one thing about your life
                          tight now , what would it be?
                          <svg
                            className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                          <svg
                            className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 "
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m18 15-6-6-6 6"></path>
                          </svg>
                        </button>
                        <div
                          id="hs-basic-with-title-and-arrow-stretched-collapse-saven"
                          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          role="region"
                          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-saven"
                          style={{ height: "0px" }}
                        >
                          <div className="py-4 px-5 ">
                            <div className="flex flex-col ">
                              <label
                                htmlFor="textarea-label2"
                                className="block text-sm font-medium text-gray-800 mb-2 "
                              >
                                Take your time , then answer..
                              </label>
                              <textarea
                                id="textarea-label2"
                                className="resize-none py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-xs  text-gray-500 focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                                rows="3"
                                name="life_changes"
                                placeholder="Write here..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 1 && (
                  <>
                    {" "}
                    <div className="bg-white rounded-xl shadow p-4 sm:p-7 ">
                      <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 ">
                          Regestier
                        </h2>
                        <p className="text-sm text-gray-600 ">
                          We are so happy to have you join us..
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                        <div className="sm:col-span-3">
                          <label className="inline-block text-sm text-gray-800 mt-2.5  font-medium">
                            Profile photo:
                          </label>
                        </div>

                        <div className="sm:col-span-9">
                          <div className="flex items-center gap-5">
                            <img
                              className="inline-block size-20 rounded-full ring-2 ring-white "
                              src="https://preline.co/assets/img/160x160/img1.jpg"
                              alt="Avatar"
                            />
                            <div className="flex gap-x-2">
                              <div>
                                <label
                                  htmlFor="uploadFile1"
                                  className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 "
                                >
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" />
                                    <line x1="12" x2="12" y1="3" y2="15" />
                                  </svg>
                                  Upload
                                  <input
                                    type="file"
                                    id="uploadFile1"
                                    className="hidden"
                                    name="myfile"
                                    accept="image/*"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="registerForm"
                            className="inline-block text-sm text-gray-800 mt-2.5  font-medium"
                          >
                            Full name:
                          </label>
                          <div className="hs-tooltip inline-block">
                            <svg
                              className="hs-tooltip-toggle ms-1 inline-block size-3 text-gray-400 "
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                          </div>
                        </div>

                        <div className="sm:col-span-9">
                          <div className="relative">
                            <input
                              id="registerForm"
                              type="text"
                              className="peer py-2 px-4 ps-11 block w-full
        border-2  border-gray-200 rounded-lg text-sm 
        focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none  "
                              placeholder="Enter Name..."
                              name="name"
                            />
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                              <svg
                                id="registerIcon"
                                className="shrink-0 size-4 text-gray-500 "
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="registerEmail"
                            className="inline-block font-medium text-sm text-gray-800 mt-2.5 "
                          >
                            Email:
                          </label>
                        </div>

                        <div className="sm:col-span-9">
                          <div className="relative">
                            <input
                              id="registerEmail"
                              type="email"
                              className="peer py-2 px-4 ps-11 block w-full
        border-2  border-gray-200 rounded-lg text-sm 
        focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                              placeholder="Enter Email..."
                              name="email"
                            />
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                              <MdOutlineEmail className="fill-gray-500" />
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <div className="inline-block">
                            <label
                              htmlFor="af-account-phone"
                              className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                            >
                              Phone:
                            </label>
                          </div>
                        </div>

                        <div className="sm:col-span-9">
                          <div className="relative">
                            <input
                              id="account"
                              type="text"
                              className="peer py-2 px-4 ps-11 block w-full
border-2  border-gray-200 rounded-lg text-sm 
focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                              placeholder="Enter Number..."
                              name="phone"
                            />
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                              <IoPhonePortraitOutline className="fill-gray-500" />
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="af-account-password"
                            className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                          >
                            Password:
                          </label>
                        </div>

                        <div className="sm:col-span-9">
                          <div className="flex mb-2">
                            <div className="flex-1">
                              <div className="relative">
                                <input
                                  type="password"
                                  id="hs-strong-password-with-indicator-and-hint"
                                  className="peer py-2 px-4 ps-11 block w-full
        border-2  border-gray-200 rounded-lg text-sm 
        focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                                  placeholder="Enter Password..."
                                  name="password"
                                />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                                  <MdPassword className="fill-gray-500" />
                                </div>
                              </div>

                              <div
                                id="hs-strong-password-hints"
                                className="mb-3"
                              >
                                <div>
                                  <span className="text-sm text-gray-800 ">
                                    Level:
                                  </span>
                                  <span
                                    data-hs-strong-password-hints-weakness-text='["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]'
                                    className="text-sm font-medium text-gray-800 "
                                  ></span>
                                </div>
                              </div>
                              <div
                                id="hs-strong-password"
                                data-hs-strong-password='{
"target": "#hs-strong-password-with-indicator-and-hint",
"hints": "#hs-strong-password-hints",
"stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-[#3f7441] h-2 flex-auto rounded-full bg-[#4f9451] opacity-50 mx-1"
}'
                                className="flex mt-2 -mx-1"
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-3 ">
                          <label
                            htmlFor="registerAge"
                            className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                          >
                            Age:
                          </label>
                        </div>

                        <div className="sm:col-span-9">
                          <div
                            className="
        "
                            data-hs-input-number=""
                          >
                            <div className="relative">
                              <input
                                id="registerAge"
                                className="w-full peer py-2 px-4  
        border-2  border-gray-200 rounded-lg text-sm  focus:border-[#4f9451] focus:ring-0 flex justify-between items-center gap-x-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
                                style={{ appearance: "textfield" }}
                                type="number"
                                aria-roledescription="Number field"
                                defaultValue="18"
                                data-hs-input-number-input=""
                                name="age"
                              />
                              <div className="absolute right-4 top-2 flex justify-end items-center gap-x-1.5">
                                <button
                                  type="button"
                                  className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                                  tabIndex="-1"
                                  aria-label="Decrease"
                                  data-hs-input-number-decrement=""
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M5 12h14"></path>
                                  </svg>
                                </button>
                                <button
                                  type="button"
                                  className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                                  tabIndex="-1"
                                  aria-label="Increase"
                                  data-hs-input-number-increment=""
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="af-account-gender-checkbox"
                            className="inline-block text-sm  font-medium text-gray-800 mt-2.5 "
                          >
                            Gender:
                          </label>
                        </div>

                        <div className="sm:col-span-9">
                          <div className="sm:flex">
                            <label
                              htmlFor="af-account-gender-checkbox"
                              className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   "
                            >
                              <input
                                type="radio"
                                name="gender"
                                className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                id="af-account-gender-checkbox"
                                value={"Male"}
                                defaultChecked
                              />
                              <span className="text-sm text-gray-500 ms-3 ">
                                Male
                              </span>
                            </label>

                            <label
                              htmlFor="af-account-gender-checkbox-other"
                              className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   "
                            >
                              <input
                                type="radio"
                                name="gender"
                                className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none   focus:ring-0"
                                id="af-account-gender-checkbox-other"
                                value={"female"}
                              />
                              <span className="text-sm text-gray-500 ms-3 ">
                                Female
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </form>
            <div className="mt-8">
              {currentStep === 2 &&
                (isFailed ? (
                  <NotFound />
                ) : (
                  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center items-center">
                    <img src="/done.png" />
                  </div>
                ))}
              {currentStep === 3 && (
                <>
                  <div className="flex flex-col items-center hs-accordion-group w-full divide mx-auto divide-gray-200  border rounded-xl shadow-sm p-6 ">
                    <header className="mb-8 text-center">
                      <h1 className="text-2xl font-bold mb-1">
                        Enter Verification
                      </h1>
                      <p className="text-[15px] text-slate-500">
                        Enter the 6-digit verification code that was sent to
                        your Email.
                      </p>
                    </header>
                    <form id="otp-form" onSubmit={handleVerify}>
                      <div className="flex gap-x-3" data-hs-pin-input="">
                        <input
                          type="text"
                          name="code"
                          className="block w-[38px] text-center border-2 border-gray-200 rounded-md text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                          data-hs-pin-input-item=""
                          autoFocus
                          required
                        />
                        <input
                          type="text"
                          name="code"
                          className="block w-[38px] text-center border-2 border-gray-200 rounded-md text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                          data-hs-pin-input-item=""
                          required
                        />
                        <input
                          type="text"
                          name="code"
                          className="block w-[38px] text-center border-2 border-gray-200 rounded-md text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                          data-hs-pin-input-item=""
                          required
                        />
                        <input
                          type="text"
                          name="code"
                          className="block w-[38px] text-center border-2 border-gray-200 rounded-md text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                          data-hs-pin-input-item=""
                          required
                        />
                        <input
                          type="text"
                          name="code"
                          className="block w-[38px] text-center border-2 border-gray-200 rounded-md text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                          data-hs-pin-input-item=""
                          required
                        />
                        <input
                          type="text"
                          name="code"
                          className="block w-[38px] text-center border-2 border-gray-200 rounded-md text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
                          data-hs-pin-input-item=""
                          required
                        />
                      </div>
                      <div className="max-w-[260px] mx-auto mt-4">
                        <button
                          type="button"
                          className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#4f9451] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-[#427744] focus:outline-none focus:ring-0 focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring-0  transition-colors duration-150"
                          onClick={(e) => {
                            setIsLoading(true);
                            handleVerify(e);
                          }}
                        >
                          Verify Account
                        </button>
                      </div>
                    </form>
                    <div className="text-sm text-slate-500 mt-4">
                      Didn't receive code?{" "}
                      <a
                        className="font-medium text-[#4f9451] hover:text-[#427744]"
                        href="/"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-8 flex justify-around">
              <button
                onClick={handleBack}
                className={`px-4 py-2 border rounded-md ${
                  currentStep === 0 ? "bg-gray-200" : "bg-[#4f9451] text-white "
                }`}
                disabled={currentStep === 0}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={currentStep === 2 && isFailed}
                className={`px-4 py-2 bg-[#4f9451] text-white rounded-md disabled:bg-gray-200 ${
                  currentStep === 1 ? "hidden" : "block"
                }`}
              >
                {currentStep === steps.length - 1 ? "Confirm" : "Next"}
              </button>
              <button
                onClick={(e) => {
                  handleSubmit(e);
                  handleNext();
                }}
                className={`px-4 py-2 bg-[#4f9451] text-white rounded-md ${
                  currentStep === 1 ? "block" : "hidden"
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Step = ({ step, isActive, isCompleted, label }) => (
  <div
    className={`flex items-center ${
      isActive ? "text-[#4f9451]" : "text-gray-400"
    }`}
    aria-current={isActive ? "step" : undefined}
  >
    <div
      className={`flex items-center justify-center h-10 w-10 rounded-full border-2 ${
        isActive ? "border-[#4f9451]" : "border-gray-400"
      }`}
    >
      {isCompleted ? <AiOutlineCheckCircle className="text-green-500" /> : step}
    </div>
    <div className="ml-4 text-lg font-medium">{label}</div>
  </div>
);

// const PaymentMethod = () => (
//   <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//     <h2 className="text-2xl font-bold mb-4 flex items-center">
//       <AiFillCreditCard className="mr-2" />
//       Payment Method
//     </h2>
//     <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2">
//         Select Payment Method
//       </label>
//       <div className="mt-2">
//         <label className="inline-flex items-center">
//           <input
//             type="radio"
//             className="form-radio"
//             name="paymentMethod"
//             value="creditCard"
//           />
//           <span className="ml-2">Credit Card</span>
//         </label>
//         <label className="inline-flex items-center ml-6">
//           <input
//             type="radio"
//             className="form-radio"
//             name="paymentMethod"
//             value="paypal"
//           />
//           <span className="ml-2">PayPal</span>
//         </label>
//       </div>
//     </div>
//     <div className="mb-4">
//       <label
//         className="block text-gray-700 text-sm font-bold mb-2"
//         htmlFor="cardNumber"
//       >
//         Card Number
//       </label>
//       <input
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         id="cardNumber"
//         type="text"
//         placeholder="1234 5678 9012 3456"
//       />
//     </div>
//     <div className="flex mb-4">
//       <div className="w-1/2 pr-2">
//         <label
//           className="block text-gray-700 text-sm font-bold mb-2"
//           htmlFor="expiryDate"
//         >
//           Expiry Date
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="expiryDate"
//           type="text"
//           placeholder="MM/YY"
//         />
//       </div>
//       <div className="w-1/2 pl-2">
//         <label
//           className="block text-gray-700 text-sm font-bold mb-2"
//           htmlFor="cvv"
//         >
//           CVV
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="cvv"
//           type="text"
//           placeholder="123"
//         />
//       </div>
//     </div>
//   </div>
// );

export default Register;
