import AppLayout from "../../components/layouts/AppLayout";
import Button from "../../components/Button";
import Link from "next/link";
import { Input } from "../../components/Input";
import { orderState } from "../../utils/states";
import { useRecoilState } from "recoil";
import Router from "next/router";
import { useEffect } from "react";

const CheckoutPage = () => {
  const [order, setOrder] = useRecoilState(orderState);

  useEffect(() => {
    window.analytics.track("Checkout Step Viewed", {
      checkout_id: order.order_id,
      step: 1,
    });
  }, [order?.order_id]);

  const onGuestClicked = () => {
    window.analytics.track("Checkout Step Completed", {
      checkout_id: order.order_id,
      step: 1,
    });
    Router.push("/checkout/guest");
  };

  return (
    <AppLayout>
      <div className="max-w-4xl w-full mx-auto pt-24">
        <div className="grid grid-cols-2 gap-12">
          <div className="flex justify-center flex-col px-6">
            <h3 className="font-semibold text-sm uppercase mb-4">
              New customer?
            </h3>
            <a onClick={onGuestClicked}>
              <Button full>Checkout as Guest</Button>
            </a>
          </div>
          <div className="px-6">
            <h3 className="font-semibold text-sm uppercase mb-4">Login</h3>
            <div>
              <Input placeholder="Email Address" />
              <Input placeholder="******" />
            </div>
            <Button full>Login & Continue</Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CheckoutPage;
