import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Badge from "@/components/ui/Badge";
import { Link } from "react-router-dom";

const ProductBox = ({ item, wish }) => {

  const {
    name,
    category,
    img,
    rating,
    subtitle,
    percent,
  } = item;

  return (
    <Card bodyClass="p-4 rounded-md" className="group ">
      <Link to={item.id}>
        <div className=" bg-secondary-200 dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md">
          <div className="h-[146px]">
            <img
              className="  h-full w-full  object-contain  transition-all duration-300 group-hover:scale-105"
              src={img}
              alt={name}
            />
          </div>
        </div>
      </Link>

      <div>
        <div className="flex justify-between items-center ">
          <p className="text-xs	text-slate-900 dark:text-slate-300 uppercase font-normal">
            {category}
          </p>
          {rating && (
            <span className="flex items-center text-slate-900 dark:text-slate-300  font-normal text-xs space-x-1  rtl:space-x-reverse ">
              <Icon icon="ph:star-fill" className="text-yellow-400" />
              <span>{rating}</span>
            </span>
          )}
        </div>
        <h6 className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
          <Link to={item.id}>{name}</Link>
        </h6>
        <p className="text-slate-500 dark:text-slate-500  text-[11px]  font-normal mt-1.5">
          {subtitle}
        </p>
        <div className="py-2">
          {percent && (
                <Badge className=" font-normal bg-danger-600 text-white">
                  {percent}
                </Badge>
              )}
        </div>
      </div>
    </Card>
  );
};

export default ProductBox;
