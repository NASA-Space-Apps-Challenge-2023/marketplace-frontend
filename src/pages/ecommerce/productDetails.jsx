import React, { Fragment, useState } from "react";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Tab } from "@headlessui/react";
import CounterButton from "@/components/partials/ecommerce/counter-button";
import blackJumper from "@/assets/images/e-commerce/product-card/classical-black-tshirt.png";
import one from "@/assets/images/e-commerce/productDetails/1.png";
import two from "@/assets/images/e-commerce/productDetails/2.png";
import three from "@/assets/images/e-commerce/productDetails/3.png";
import gmail from "@/assets/images/e-commerce/productDetails/gmail.svg";
import facebook from "@/assets/images/e-commerce/productDetails/facebook.svg";
import twitter from "@/assets/images/e-commerce/productDetails/twitter.svg";
import insta from "@/assets/images/e-commerce/productDetails/insta.svg";
import linkedin from "@/assets/images/e-commerce/productDetails/linkedin.svg";

import { useParams, useNavigate } from "react-router-dom";
import ThumbSliderCom from "@/components/partials/ecommerce/thumb-slider";
import { useGetProductQuery } from "@/store/api/shop/shopApiSlice";
import { addToCart, updateQuantity } from "@/store/api/shop/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@/components/ui/Alert";
import LoaderCircle from "@/components/Loader-circle";

export const ProductDetails = () => {
  // const colors = [
  //   { code: "Black" },
  //   { code: "Pink" },
  //   { code: "Orange" },
  //   { code: "Red" },
  //   { code: "Yellow" },
  // ];
  // const sizes = [{ code: "S" }, { code: "M" }, { code: "L" }, { code: "XL" }];

  const lists = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  const lists1 = [
    {
      id: 1,
      text: "Brand : Easy",
    },
    {
      id: 2,
      text: "Material : Cotton",
    },
    {
      id: 3,
      text: "Material : Cotton",
    },
    {
      id: 4,
      text: "Pattern : Solid Color",
    },
    {
      id: 5,
      text: "Collar : Square Neck",
    },
    {
      id: 6,
      text: "Color : As given picture",
    },
    {
      id: 7,
      text: "Sleeve Length : Long Sleeve",
    },
  ];
  const lists2 = [
    {
      id: 1,
      text: "Plate Type : Slim",
    },
    {
      id: 2,
      text: "Sales Channel Type : E-commerce Only Sells Online",
    },
    {
      id: 3,
      text: "Material Composition : 100% Cotton",
    },
    {
      id: 4,
      text: "Size : M,L,XL",
    },
    {
      id: 5,
      text: 'M- long: 29", body: 40"',
    },
    {
      id: 6,
      text: 'L- long: 30 ", body: 42"',
    },
    {
      id: 7,
      text: 'XL- long: 31", body: 44"',
    },
  ];

  const buttons = [
    {
      title: "Description",
    },
    {
      title: "Additional Information",
    },
  ];

  const dispatch = useDispatch();

  // const [color, setColor] = useState("Black");
  // const [size, setSize] = useState("S");
  let { id } = useParams();
  const {
    data: getProduct,
    isLoading,
    isError,
    error,
  } = useGetProductQuery(id);
  const product = getProduct?.product;
  const cartItems = useSelector((state) => state.cart.items);
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
      })
    );
  };

  const productExample =  {
        "name": "Open AI Exploration",
        "description": "A project exploring open science and AI",
        "project_url_deployment": "https://www.zooniverse.org/projects/erinmc/dark-energy-explorers",
        "keywords": ["AI", "open science"],
        "start_date": "2023-01-01",
        "email": "owner@example.com",
        "participation_tasks": "Data gathering, model training",
        "additional_contact": "Discord: owner#1234",
        "rating": 4.7,
        "collaborators": ["user1_id", "user2_id"],
        "difficulty_level": "Intermediate",
        "required_skills": ["Python", "Machine Learning"],
        "discussions": ["thread1_id", "thread2_id"],
        "owner_id": "owner_user_id"
  }

  const isValidID = product && product.id === id;

  if (isLoading) {
    return <LoaderCircle />;
  }
  if (isError || error) {
    return (
      <Alert className="alert-danger " icon="heroicons:information-circle">
        Error: {error.message}
      </Alert>
    );
  }
  if (!isValidID) {
    return (
      <div>
        <Alert className="alert-danger " icon="heroicons:information-circle">
          Your id <strong>{id}</strong> is not Matching
        </Alert>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-slate-800 p-6 rounded-lg">
      <div className="pb-5">
        <div className="grid grid-cols-12  md:space-x-6 md:space-y-0 space-y-4 sm:space-y-4  rtl:space-x-reverse ">
          <div className=" col-span-12 md:col-span-5 lg:col-span-4 space-y-4 ">
            <ThumbSliderCom product={product} />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-8 space-y-2 ">
            <div className="space-y-2">
              <h1 className="text-slate-900 dark:text-slate-300 text-xl lg:text-2xl font-medium ">
                {product?.name}
              </h1>
              <p className="flex items-center text-slate-900 dark:text-slate-300  font-normal text-sm lg:text-base space-x-1.5 rtl:space-x-reverse">
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                {/* <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-slate-300/80" /> */}
                <span className="ltr:pl-2 rtl:pr-2 text-slate-500 dark:text-slate-400">
                  ({product?.rating || productExample.rating} ratings)
                </span>
              </p>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <p className="font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400 ">
                  Keywords:
                </p>
                <p className="font-medium text-sm lg:text-base text-slate-900 dark:text-slate-300 ">
                  {product?.keywords || productExample.keywords.join(", ")}
                </p>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <p className="font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400 ">
                  Collaborators:
                </p>
                <p className="font-medium text-sm lg:text-base text-slate-900 dark:text-slate-300 ">
                  {product?.collaborators || productExample.collaborators.join(", ")}
                </p>
              </div>
              <p className="font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400">
                {product?.desc}
              </p>
            </div>
            <div className="pb-1">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3">
                  <p className="font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400 ">
                    Working since:
                  </p>
                  <p className="font-medium text-sm lg:text-base text-slate-900 dark:text-slate-300 ">
                    {product?.start_date || productExample.start_date}
                  </p>
                </div>
                <Button
                text="Visit Project"
                className="btn-outline-dark w-[100px] btn-sm bg-slate-900 dark:bg-slate-800  font-medium hover:bg-white text-white hover:text-slate-900 dark:hover:text-white  dark:hover:!bg-slate-700 flex items-center"
                iconClass=" text-sm leading-none"
                link={productExample.project_url_deployment}
              />
              {/* <div>
                <div className="pb-2 flex items-center space-x-2 rtl:space-x-reverse mb-3">
                  <p className="font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400 ">
                    Skills:
                  </p>
                  <p className="font-medium text-base text-slate-900 dark:text-slate-300 ">
                    {product?.required_skills || productExample.required_skills.join(", ")}
                  </p>
                </div>
              </div> */}
            </div>
            <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>

            <div className="overflow-x-auto ">
              <div className="inline-block max-w-full align-middle">
                <div className="overflow-hidden ">
                  <table className="min-w-full   ">
                    <tbody className="bg-white  dark:bg-slate-800 ">
                      <tr className="space-x-6 rtl:space-x-reverse">
                        <td className="table-td py-2 pl-0 rtl:pr-0 font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400  ">
                          Difficutly:
                        </td>
                        <td className="table-td py-2 space-x-2 rtl:space-x-reverse">
                          <Badge className=" font-normal text-[10px] bg-danger-600 text-white ">
                            <span>{product?.difficulty_level || productExample.difficulty_level}</span>
                          </Badge>
                        </td>
                      </tr>
                      <tr className="space-x-1 rtl:space-x-reverse">
                        <td className="table-td py-2 pl-0 rtl:pr-0 font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400  ">
                          Skills:
                        </td>
                        <td className="table-td py-2 ">
                          {product?.required_skills || productExample.required_skills.join(", ")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 rtl:space-x-reverse pb-5">
              <Button
                onClick={handleAddToCart}
                disabled={cartItems.some((cartItem) => cartItem.id === id)}
                text="Apply to Collaborate"
                icon="eva:repeat-fill"
                className="btn-outline-dark w-[180px] btn-sm  font-medium hover:bg-slate-900 dark:text-white hover:text-white dark:hover:text-white  dark:hover:bg-slate-700 flex items-center"
                iconClass=" text-sm leading-none"
              />
              {/* <Button
                text="Buy Now"
                className="btn-outline-dark w-[180px] btn-sm bg-slate-900 dark:bg-slate-800  font-medium hover:bg-white text-white hover:text-slate-900 dark:hover:text-white  dark:hover:!bg-slate-700 flex items-center"
                iconClass=" text-sm leading-none"
              />
              <Button
                icon="octicon:heart-16"
                className="btn-outline-secondary w-[40px] border dark:border-slate-600 dark:hover:border-slate-600 btn-sm  font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white  dark:hover:bg-slate-700 flex items-center"
                iconClass=" text-sm leading-none"
              />
              <Button
                icon="eva:repeat-fill"
                className="btn-outline-secondary w-[40px] border dark:border-slate-600 dark:hover:border-slate-600 btn-sm  font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white  dark:hover:bg-slate-700 flex items-center"
                iconClass=" text-sm leading-none"
              /> */}
            </div>
            <div className="flex space-x-3 rtl:space-x-reverse ">
              <p className="font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400">
                Share to:
              </p>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <button
                  type="button"
                  className="border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"
                >
                  <img className="w-full h-full" src={gmail} alt="" />
                </button>
                <button
                  type="button"
                  className="border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"
                >
                  <img className="w-full h-full" src={facebook} alt="" />
                </button>
                <button
                  type="button"
                  className="border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"
                >
                  <img className="w-full h-full" src={twitter} alt="" />
                </button>
                <button
                  type="button"
                  className="border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"
                >
                  <img className="w-full h-full" src={insta} alt="" />
                </button>
                <button
                  type="button"
                  className="border p-2 dark:border-slate-600 rounded h-8 w-8 flex justify-center items-center"
                >
                  <img className="w-full h-full" src={linkedin} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="border border-1 dark:border-slate-700 rounded">
          <Card>
            <Tab.Group>
              <Tab.List className="lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse">
                {buttons.map((item, i) => (
                  <Tab as={Fragment} key={i}>
                    {({ selected }) => (
                      <button
                        className={` text-lg lg:text-xl font-medium mb-7 capitalize bg-white
             dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2
              transition duration-150 before:transition-all before:duration-150 relative 
              before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-slate-900 dark:before:bg-slate-300 
              before:-translate-x-1/2 
              
              ${
                selected
                  ? "text-slate-900 dark:text-slate-300 font-md text-lg lg:text-xl  before:w-full"
                  : "text-slate-500 dark:text-slate-500 font-md text-lg lg:text-xl before:w-0 "
              }
              `}
                      >
                        {item.title}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="text-slate-600 dark:text-slate-400 text-sm lg:text-base font-normal">
                    <p>
                      {product?.desc || productExample.description}
                    </p>
                    <ul className="space-y-3 p-6 lg:ml-28 ml-14 rounded-md bg-slate-white dark:bg-slate-800">
                      {lists.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"
                        >
                          <span className="h-[10px] w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
                          <span>Lorem ipsum dolor sit amet.</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base font-normal">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna. Lorem ipsum dolor sit amet, consetetur sadipscing
                      elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                      dolore magna. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna.
                    </p>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                    <div className="flex justify-between items-start pb-4">
                      <ul className="space-y-3 rounded-md bg-slate-white dark:bg-slate-800 ">
                        {lists1.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"
                          >
                            <span className="h-[10px] w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-3 rounded-md bg-slate-white dark:bg-slate-800">
                        {lists2.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm lg:text-base text-slate-600 dark:text-slate-400 flex space-x-2 items-center rtl:space-x-reverse"
                          >
                            <span className="h-[10px] w-[10px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base font-normal">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna. Lorem ipsum dolor sit amet, consetetur sadipscing
                      elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                      dolore magna. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna.
                    </p>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Card>
        </div>
        <div className="border border-1 dark:border-slate-700 rounded p-6">
          <h6 className="text-slate-900 dark:text-slate-300 pb-6 text-lg lg:text-xl">
            Reviews & Ratings
          </h6>
          <div className="space-y-12">
            <div className="bg-secondary-100 dark:bg-slate-700 p-6 rounded grid grid-cols-12 	">
              <div className="col-span-12 items-center md:col-span-6 flex space-x-3 justify-center md:justify-start rtl:space-x-reverse order-2 md:order-1 mt-3 md:mt-0">
                <div className="font-medium items-center flex ">
                  <p className="text-slate-900 dark:text-slate-300 text-base lg:text-lg">
                    {product?.rating || productExample.rating}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base">
                    /5
                  </p>
                </div>
                <div className="flex items-center md:justify-start text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base">
                  <div className="flex items-center space-x-1.5">
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    {/* <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-slate-300/80" /> */}
                  </div>
                  <div className=" text-slate-500 dark:text-slate-400">
                    (789 reviews)
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end items-center order-1 md:order-2">
                <button
                  type="button"
                  className="bg-yellow-500 text-white rounded px-6 py-3 text-sm lg:text-base"
                >
                  Rate this product
                </button>
              </div>
            </div>
            <div className="flex space-x-3 rtl:space-x-reverse ">
              <div className=" h-14 w-14 rounded-full object-cover bg-white ring-1 overflow-hidden flex-none">
                <img
                  className="h-full w-full object-contain"
                  src={blackJumper}
                />
              </div>
              <div>
                {" "}
                <div>
                  <p className="text-slate-900  dark:text-slate-300 font-medium text-sm lg:text-base pb-1">
                    Devied Beakhum
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 font-normal text-xs  pb-1">
                    08-03-2023
                  </p>
                  <p className="flex items-center text-slate-900 dark:text-slate-300  font-normal text-sm lg:text-base space-x-1.5 rtl:space-x-reverse pb-3">
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                  </p>
                  <p className="pb-4 text-sm  lg:text-base text-slate-500 dark:text-slate-400">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna. Lori ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt.
                  </p>
                  <div className="flex space-x-2 rtl:space-x-reverse pb-3">
                    <p className="font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400">
                      Info:
                    </p>
                    <p className="font-medium text-sm lg:text-base text-[#10B26C] ">
                      Verified Purchase
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 ">
                  <div className="col-span-12 flex justify-end space-x-4 rtl:space-x-reverse">
                    <p className="flex items-center space-x-2 rtl:space-x-reverse ">
                      <span className="cursor-pointer ">
                        <Icon icon="heroicons:hand-thumb-up" />
                      </span>
                      <span>02</span>
                    </p>
                    <p className="flex items-center space-x-2 rtl:space-x-reverse ">
                      <span className="cursor-pointer ">
                        <Icon icon="carbon:reply" />
                      </span>
                      <span>00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-3 rtl:space-x-reverse ">
              <div className=" h-14 w-14 rounded-full object-cover bg-white ring-1 overflow-hidden flex-none">
                <img
                  className="h-full w-full object-contain"
                  src={blackJumper}
                />
              </div>
              <div>
                {" "}
                <div>
                  <p className="text-slate-900  dark:text-slate-300 font-medium text-sm lg:text-base pb-1">
                    Devied Beakhum
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 font-normal text-xs  pb-1">
                    08-03-2023
                  </p>
                  <p className="flex items-center text-slate-900 dark:text-slate-300  font-normal text-sm lg:text-base space-x-1.5 rtl:space-x-reverse pb-3">
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                  </p>
                  <p className="pb-4 text-sm lg:text-base text-slate-500 dark:text-slate-400">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna. Lori ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt.
                  </p>
                  <div className="flex space-x-2 rtl:space-x-reverse pb-3">
                    <p className="font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400">
                      Info:
                    </p>
                    <p className="font-medium text-sm lg:text-base text-[#10B26C] ">
                      Verified Purchase
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className=" col-span-12 mb-3">
                    <div className="flex space-x-2 rtl:space-x-reverse mb-9">
                      <div className=" h-[90px] w-[90px] rounded bg-slate-100 p-1 overflow-hidden ">
                        <img
                          className="h-full w-full object-contain"
                          src={three}
                        />
                      </div>
                      <div className=" h-[90px] w-[90px] rounded bg-slate-100 overflow-hidden p-1">
                        <img
                          className="h-full w-full object-contain"
                          src={one}
                        />
                      </div>
                      <div className=" h-[90px] w-[90px] rounded bg-slate-100 overflow-hidden p-1">
                        <img
                          className="h-full w-full object-contain"
                          src={two}
                        />
                      </div>
                    </div>
                    <div className=" max-h-[400px] max-w-[346px] rounded  bg-slate-100 overflow-hidden p-1">
                      <img
                        className="h-full w-full object-contain"
                        src={three}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 flex justify-end space-x-4 rtl:space-x-reverse">
                    <p className="flex items-center space-x-2 rtl:space-x-reverse ">
                      <span className="cursor-pointer ">
                        <Icon icon="heroicons:hand-thumb-up" />
                      </span>
                      <span>02</span>
                    </p>
                    <p className="flex items-center space-x-2 rtl:space-x-reverse ">
                      <span className="cursor-pointer ">
                        <Icon icon="carbon:reply" />
                      </span>
                      <span>00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
