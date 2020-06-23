import AppLayout from "../../components/layouts/AppLayout";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import Link from "next/link";
import { orderState } from "../../utils/states";
import { useRecoilState } from "recoil";
import Router from "next/router";
import { useRef, useEffect } from "react";

const CheckoutPage = () => {
  const emailRef: any = useRef({});
  const nameRef: any = useRef({});
  const [order, setOrder] = useRecoilState(orderState);

  useEffect(() => {
    window.analytics.track("Checkout Step Viewed", {
      checkout_id: order.order_id,
      step: 2,
      payment_method: "Visa",
    });
  }, [order?.order_id]);

  const onCheckoutClick = () => {
    const email = emailRef.current?.value;
    const name = nameRef.current?.value;
    if (!!email) {
      window.analytics.identify(email, { email, name });
    }
    window.analytics.track("Checkout Step Completed", {
      checkout_id: order.order_id,
      step: 2,
      payment_method: "Visa",
    });
    window.analytics.track("Payment Info Entered", {
      checkout_id: order.order_id,
      order_id: order.order_id,
      step: 2,
      payment_method: "Visa",
    });
    Router.push("/checkout/success");
  };

  const onBack = () => {
    const email = emailRef.current?.value;
    const name = nameRef.current?.value;
    if (!!email) {
      window.analytics.identify(email, { email, name });
    }
    window.analytics.track("Cart Abandoned");
    Router.push("/");
  };

  return (
    <AppLayout>
      <div className="max-w-xl w-full mx-auto pt-24 flex items-center px-6 flex flex-col">
        <h1 className="mb-6">Pay with card</h1>
        <Input label="Email" ref={emailRef} />
        <Input label="Card Information" placeholder="1234 1234 1234 1234" />
        <Input label="Name on card" ref={nameRef} />
        <Input label="ZIP" />
        <div className="flex between">
          <a onClick={onBack} className="mx-4">
            <Button inverse full>
              Continue Shopping
            </Button>
          </a>
          <a onClick={onCheckoutClick} className="mx-4">
            <Button full>Pay $20.00</Button>
          </a>
        </div>
      </div>
    </AppLayout>
  );
};

export default CheckoutPage;
