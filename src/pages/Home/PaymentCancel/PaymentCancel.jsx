import { useParams } from "react-router-dom";

const PaymentCancel = () => {
  const { tranId } = useParams();
  return (
    <div className="md:h-[500px] bg-gray-100 flex items-center justify-center">
      <div className="max-w-md p-8 bg-white rounded shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-12 w-12 text-yellow-500 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12H4"
          />
        </svg>
        <h2 className="mt-6 text-2xl font-semibold text-gray-800">
          Payment Cancelled
        </h2>
        <p className="mt-2 text-gray-600">
          Your payment process has been cancelled.
        </p>
        <div className="mt-4">
          <p className="text-gray-700">
            Transaction ID: <span className="font-semibold">{tranId}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
