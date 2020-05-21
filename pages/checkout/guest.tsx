import AppLayout from "../../components/layouts/AppLayout";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import Link from "next/link";

const CheckoutPage = () => {
  return (
    <AppLayout>
      <div className="max-w-xl w-full mx-auto pt-24 flex items-center px-6 flex flex-col">
        <h1 className="mb-6">Pay with card</h1>
        <Input label="Email" />
        <Input label="Card Information" placeholder="1234 1234 1234 1234" />
        <Input label="Name on card" />
        <Input label="ZIP" />
        <Link href="/checkout/success">
          <a>
            <Button full>Pay $20.00</Button>
          </a>
        </Link>
      </div>
    </AppLayout>
  );
};

export default CheckoutPage;
