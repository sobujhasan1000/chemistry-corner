import { useParams } from "react-router-dom";

const PaymentCancel = () => {
    const {tranId}=useParams()
    return (
        <div>
            <h2>Payment canceled: {tranId}</h2>
        </div>
    );
};

export default PaymentCancel;