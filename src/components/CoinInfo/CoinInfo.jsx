/* eslint-disable react/prop-types */
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { CategoryScale} from "chart.js";
import { chartDays } from "../../utils/constants";

Chart.register(CategoryScale);

export default function CoinInfo({
  chartData,
  interval,
  setInterval,
  days,
  setDays,
  currency,
}) {
  if (!chartData) {
    return <div>No Data Available!</div>;
  }

  function handleCheckboxChange(e) {
    if (e.target.checked) {
      setInterval("daily");
    } else {
      setInterval("");
    }
  }

  function handleOptionChange(e) {
    if (e.target.value == 1) {
      setInterval("");
    }
    setDays(e.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center md:px-8 mt-6 w-full">
      {/* filters */}
      <div className="flex justify-between items-center w-full">
        <select
          id="filterTime"
          className="select select-bordered w-full max-w-xs"
          onChange={handleOptionChange}
          defaultValue={days}
        >
          {chartDays.map((day, index) => (
            <option key={index} value={day.value}>
              {day.label}
            </option>
          ))}
        </select>

        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text mr-2">Daily Data</span>
            <input
              id="daily"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={interval == "daily"}
              className="checkbox checkbox-sm checkbox-info"
              disabled={days == 1}
            />
          </label>
        </div>
      </div>
      <div className="text-2xl"> Price Chart </div>
      {/*  line chart */}
      <Line
        data={{
          labels: chartData.prices.map((coinTime) => {
            let date = new Date(coinTime[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return days == 1 ? time : date.toLocaleDateString();
          }),
          datasets: [
            {
              label: `Price (Past ${days} ${
                days == 1 ? "Day" : "Days"
              } in ${currency.toUpperCase()})`,
              data: chartData.prices.map((coinPrice) => coinPrice[1]),
            },
          ],
        }}
        options={{
          responsive: true,
        }}
      />
       <div className="text-2xl mt-24"> Market Cap Chart </div>
      {/* bar chart  */}
      <Bar
        data={{
          labels: chartData.market_caps.map((coinTime) => {
            let date = new Date(coinTime[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return days == 1 ? time : date.toLocaleDateString();
          }),
          datasets: [
            {
              label: `Price (Past ${days} ${
                days == 1 ? "Day" : "Days"
              } in ${currency.toUpperCase()})`,
              data: chartData.market_caps.map((coinPrice) => coinPrice[1]),
            },
          ],
        }}
        options={{
          responsive: true,
          layout: {
            
          }
        }}
      />
    </div>
  );
}
