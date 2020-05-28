import AppLayout from "../../components/layouts/AppLayout";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { CheckCircle } from "react-feather";
import randomstring from "randomstring";
import { useEffect } from "react";
import { orderState } from "../../utils/states";
import { useRecoilState } from "recoil";

const CheckoutPage = () => {
  const [order, setOrder] = useRecoilState(orderState);

  useEffect(() => {
    window.analytics.track("Order Completed", {
      checkout_id: order.order_id,
      order_id: order.order_id,
      total: order.value,
      products: order.products,
    });
  }, []);

  return (
    <AppLayout>
      <div className="max-w-xl w-full mx-auto pt-24 flex items-center px-6 flex flex-col">
        <div className="mb-4">
          <CheckCircle size={80} color="#1CC07A" />
        </div>
        <div className="text-3xl font-semibold mb-4">$20.00</div>
        <h1 className="mb-6 font-semibold">Payment Successful!</h1>
        <div className="text-center text-sm">
          <div className="mb-2">
            <h6 className="text-gray-600">Transaction ID</h6>
            <div>{randomstring.generate(10)}</div>
          </div>
          <div>
            <h6 className="text-gray-600">Date & Time</h6>
            <div>{new Date().toISOString()}</div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CheckoutPage;
