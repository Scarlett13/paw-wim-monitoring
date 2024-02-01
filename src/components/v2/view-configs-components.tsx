import { FormProvider, useForm } from "react-hook-form";
import { FunctionComponent } from "../../common/types";
import SearchableSelectInput from "../forms/searchable-select-input";
import Typography from "../ui/default-typography";
// import StatusCardV2 from "./status-card";

const ViewConfig = ({}): FunctionComponent => {
	const methods = useForm<any>({
		mode: "onTouched",
	});

	return (
		<>
			<div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-1/6 bg-white">
				<div className="w-full flex gap-4 flex-col">
					<FormProvider {...methods}>
						<form className="w-full px-8">
							<div className="-mt-16">
								<Typography variant={"j1"}>View as</Typography>
								<SearchableSelectInput
									className="mt-4"
									key="key_view_type"
									id="view_type_id"
									placeholder="View as Map or Table"
									isMulti={false}
									disabled={false}
									required={false}
									options={[
										{
											value: "table",
											label: "Table View",
										},
										{
											label: "Map View",
											value: "map",
										},
									]}
									label={null}
								/>
							</div>
							<div className="mt-8">
								<Typography variant={"j1"}>Project Type</Typography>
								<SearchableSelectInput
									className="mt-4"
									key="key_project_type"
									id="project_type_id"
									placeholder="Filter by Project"
									isMulti={false}
									disabled={false}
									required={false}
									options={[
										{
											value: "bukaka",
											label: "Bukaka",
										},
										{
											label: "UPPKB",
											value: "uppkb",
										},
										{
											label: "All",
											value: "all",
										},
									]}
									label={null}
								/>
							</div>
						</form>
					</FormProvider>
				</div>
			</div>
		</>
	);
};

export default ViewConfig;
