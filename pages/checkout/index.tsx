import AppLayout from "../../components/layouts/AppLayout";
import Button from "../../components/Button";
import Link from "next/link";
import { Input } from "../../components/Input";

const CheckoutPage = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl w-full mx-auto pt-24">
        <div className="grid grid-cols-2 gap-12">
          <div className="flex justify-center flex-col px-6">
            <h3 className="font-semibold text-sm uppercase mb-4">
              New customer?
            </h3>
            <Link href="/checkout/guest">
              <a>
                <Button full>Checkout as Guest</Button>
              </a>
            </Link>
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
