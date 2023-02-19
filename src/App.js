import "./App.css";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ReferenceLine,
	ResponsiveContainer,
	Scatter,
	ComposedChart,
	Line,
} from "recharts";

const data = [
	{
		name: "October",
		spend: 33492,
		balance: -12956,
		amt: 2400,
		pdySpend: 33492,
		pdyBalance: -12956,
	},
	{
		name: "November",
		spend: 54043,
		balance: -33507,
		amt: 2210,
		pdySpend: 54043,
		pdyBalance: -33507,
	},
	{
		name: "December",
		spend: 76901,
		balance: -58013,
		amt: 2290,
		pdySpend: 76901,
		pdyBalance: -58013,
	},
	{
		name: "January",
		spend: 79376,
		balance: -54476,
		amt: 2000,
		pdySpend: 79376,
		pdyBalance: -54476,
	},
	{
		name: "February",
		spend: 46436,
		balance: -21636,
		amt: 2181,
		pdySpend: 46436,
		pdyBalance: -21636,
	},
];

function App() {
	return (
		<div style={{ width: "100%", height: "auto", padding: "100px" }}>
			<div style={{ width: "100%", height: "500px" }}>
				<p>Monthly</p>
				<ResponsiveContainer width="100%" height="100%">
					<ComposedChart
						width={300}
						height={50}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<ReferenceLine y={0} stroke="#000" />
						<Bar dataKey="spend" fill="#8884d8" />
						<Bar dataKey="balance" fill="#82ca9d" />
						{/* <Scatter dataKey="pdySpend" fill="red" /> */}
						<Line type="monotone" dataKey="pdySpend" stroke="#8884d8" />
						<Line type="monotone" dataKey="pdyBalance" stroke="#82ca9d" />
					</ComposedChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default App;
