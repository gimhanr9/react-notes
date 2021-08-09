import { FunnelChart } from "react-funnel-pipeline";
import "react-funnel-pipeline/dist/index.css";
function FunnelCharts() {
  return (
    <div>
      <FunnelChart
        data={[
          { name: "Awareness", value: 252 },
          { name: "Interest", value: 105 },
          { name: "Consideration", value: 84 },
          { name: "Evaluation", value: 72 },
          { name: "Commitment", value: 19 },
          { name: "Sale", value: 10 },
        ]}
      />
    </div>
  );
}

export default FunnelCharts;
