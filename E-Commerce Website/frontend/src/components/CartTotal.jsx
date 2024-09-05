import React from "react";
import { useShop } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useShop();
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title textOne={"cart"} textTwo={"totals"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p className="">Subtotal</p>
          <p className="">
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between font-semibold text-base">
      <p>Total</p>
      <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
