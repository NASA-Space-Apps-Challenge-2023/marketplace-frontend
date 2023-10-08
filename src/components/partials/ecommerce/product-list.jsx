import React from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Badge from "@/components/ui/Badge";
import CounterButton from "@/components/partials/ecommerce/counter-button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "@/store/api/shop/cartSlice";
import { Link } from "react-router-dom";
const ProductList = ({ item }) => {
  const dispatch = useDispatch();
  const { name, category, img, rating, desc, price, oldPrice, percent, id } =
    item;
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Card
      bodyClass="p-3 rounded-md 2xl:flex lg:flex md:flex-none sm:flex-none"
      className="group "
    >
      <Link to={item.id}>
        <div className=" bg-secondary-200 dark:rounded relative h-[200px] flex flex-col justify-center items-center rounded-md  mb-3 lg:mb-0   ltr:md:mr-0 ltr:sm:mr-0 rtl:md:ml-0 rtl:sm:ml-0 ltr:lg:mr-3 rtl:lg:ml-3">
          <div className="h-[235px]  w-[266px] p-12">
            <img
              className="  h-full w-full  object-contain  transition-all duration-300 group-hover:scale-105"
              src={img}
              alt={name}
            />
          </div>
        </div>
      </Link>

      <div>
        <p className="text-xs	text-slate-900 dark:text-slate-300 font-normal uppercase pb-2">
          {category}
        </p>
        <h6 className="text-slate-900 dark:text-slate-300 text-lg	font-medium	pb-2 w-full truncate">
          <Link to={item.id}>{name}</Link>
        </h6>
        {rating && (
          <span className="flex items-center text-slate-900 dark:text-slate-300  font-normal text-xs space-x-[4px] rtl:space-x-reverse pb-3">
            <Icon icon="ph:star-fill" className="text-yellow-400" />
            <span className="ltr:pl-2 rtl:pr-2">{rating}</span>
          </span>
        )}
        <p className="text-slate-500 dark:text-slate-500  text-sm  font-normal pb-4">
          {desc}
        </p>
        <div className="">
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

export default ProductList;
