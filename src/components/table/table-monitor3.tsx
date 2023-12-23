import TableCard from "../cards/table-card";

export default function Table() {
	const tableData = [
		{ id: 1, siteName: "Example Site 1", status: "Active" },
		{ id: 2, siteName: "Example Site 2", status: "Inactive" },
		{ id: 3, siteName: "Example Site 3", status: "Inactive" },
		{ id: 4, siteName: "Example Site 4", status: "Inactive" },
		{ id: 5, siteName: "Example Site 5", status: "Inactive" },
		{ id: 6, siteName: "Example Site 6", status: "Inactive" },
		{ id: 7, siteName: "Example Site 7", status: "Inactive" },
		{ id: 8, siteName: "Example Site 8", status: "Inactive" },
		{ id: 9, siteName: "Example Site 9", status: "Inactive" },
		{ id: 10, siteName: "Example Site 10", status: "Inactive" },
		{ id: 11, siteName: "Example Site 11", status: "Inactive" },
		{ id: 12, siteName: "Example Site 12", status: "Inactive" },
		{ id: 13, siteName: "Example Site 13", status: "Inactive" },
		{ id: 14, siteName: "Example Site 14", status: "Inactive" },
		{ id: 15, siteName: "Example Site 15", status: "Inactive" },
	];

	return (
		<TableCard>
			<div className="container mx-auto">
				<div className="max-h-[460px] overflow-y-auto">
					<table className="min-w-full">
						<thead className="sticky -top-1 bg-white z-10">
							<tr className="bg-gray-200 border-2">
								<th className="border px-4 py-2">No</th>
								<th className="border px-4 py-2">Site Name</th>
								<th className="border px-4 py-2">Status</th>
							</tr>
						</thead>
						<tbody>
							{tableData.map((row) => (
								<tr key={row.id}>
									<td className="border px-4 py-2 text-center">{row.id}</td>
									<td className="border px-4 py-2">{row.siteName}</td>
									<td className="border px-4 py-2 text-center">{row.status}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</TableCard>
	);
}
