import { React} from "react";
import './Debtplan.css'
import Repayment from "./Repayment";
import { useLocation} from "react-router-dom";

function DebtPlan() {
  const location = useLocation();
  const debtPlan = location.state.result.plan;
  const payments = debtPlan.repayments;

console.log("Debt Plan", debtPlan);

const displayRepayments = payments != null && payments.length > 0 ? (payments.map((element) => {
    return (
      <div>
        <Repayment replay={element} />
      </div>
    );
  })) : null;

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column ">
      <main>
        <h3>Debt Repayment Plan</h3>
        <div>
          {payments != null && payments.length > 0 ? displayRepayments : debtPlan.message}
        </div>
      </main>
    </div>
  );
}

export default DebtPlan;
