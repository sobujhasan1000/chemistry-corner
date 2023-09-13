import { Helmet } from "react-helmet-async";
import Notification from "./Notification";

const Notifications = () => {
  return (
    <div>
      <Helmet>
        <title>Notifications - Chemistry Corner</title>
      </Helmet>
      <div className="bg-pink-100 h-screen p-6 rounded">
      <h1 className="text-3xl font-bold">Notifications</h1>
      <div>
        <Notification></Notification>
      </div>
      </div>
    </div>
  );
};

export default Notifications;
