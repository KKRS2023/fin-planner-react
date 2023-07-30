import { React} from "react";
import { ToastContainer } from "react-toastify";
import Repayment from "./Repayment";
import { useLocation} from "react-router-dom";

function DebtPlan() {
  const location = useLocation();
  const debtPlan = location.state.result.plan;
  const payments = debtPlan.repayments;

console.log("Debt Plan", debtPlan);

  const displayRepayments = payments.map((element) => {
    return (
      <div>
        <Repayment replay={element} />
      </div>
    );
  });

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <ToastContainer />
      <main className="px-3 nvb-main-px">
        <h3>Debt Plan</h3>
        <div>
          <p>{debtPlan.message != null ? debtPlan.message : "Initial Load"}</p>
          <p>{payments.length > 0 ? displayRepayments : "Initial Load"}</p>
        </div>
      </main>
    </div>
  );
}

export default DebtPlan;
