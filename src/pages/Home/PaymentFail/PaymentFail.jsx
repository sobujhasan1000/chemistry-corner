import { useParams } from "react-router-dom";

const PaymentFail = () => {
  const { tranId } = useParams();
  return (
    <div>
      <h2>Payment Fail: {tranId}</h2>
    </div>
  );
};

export default PaymentFail;
