import { FormProvider, useForm } from "react-hook-form";
import { FunctionComponent } from "../../common/types";
import SearchableSelectInput from "../forms/searchable-select-input";
import Typography from "../ui/default-typography";
import { useNavigate, useSearch } from "@tanstack/router";
import { IndexRoute } from "../../routes/IndexRoute";
// import logger from "../../libs/logger";
import { useEffect, useState } from "react";
import { useSwrV2 } from "../../hooks/use-swr";
import useSiteList from "../../hooks/use-site";
// import StatusCardV2 from "./status-card";

const ViewConfig = ({}): FunctionComponent => {
	const { projecttype, selectedSiteId, siteStatus } = useSearch({
		from: IndexRoute.fullPath,
	});

	const navigate = useNavigate({ from: IndexRoute.fullPath });

	const [queryparam, setQueryParam] = useState<string | undefined>(undefined);
	const { listSite } = useSiteList();

	const { isValidating, mutate } = useSwrV2();

	const methods = useForm<any>({
		mode: "onTouched",
	});

	const { setValue } = methods;

	useEffect(() => {
		setValue("project_type_id", projecttype);
		setValue("select_site_id", selectedSiteId);
	});

	function handleProjectTypeChange(value: string) {
		setQueryParam(+value > 0 ? `?projecttype=${value}` : "");
		navigate({
			search: () => ({
				projecttype: value ?? "",
				selectedSiteId: selectedSiteId,
				selectedDevice: "PC",
				siteStatus,
			}),
		});
	}

	useEffect(() => {
		if (queryparam || queryparam === "") {
			mutate("/api/site-status");
		}
	}, [queryparam]);

	function handleSelectedSiteChange(id: number) {
		navigate({
			search: () => ({
				projecttype: projecttype,
				selectedSiteId: id,
				selectedDevice: "PC",
				siteStatus,
			}),
		});
	}

	return (
		<>
			<div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-1/6 bg-white ">
				<div className="w-full flex gap-4 flex-col">
					<FormProvider {...methods}>
						<form className="w-full px-8">
							<div className="-mt-16">
								<Typography variant={"h1"}>Project Type</Typography>
								<SearchableSelectInput
									className="mt-4"
									key="key_project_type"
									id="project_type_id"
									placeholder="Filter by Project"
									isMulti={false}
									disabled={isValidating}
									required={false}
									isLoading={isValidating}
									customSetData={handleProjectTypeChange}
									options={[
										{
											value: 2,
											label: "Bukaka",
										},
										{
											label: "UPPKB",
											value: 1,
										},
										{
											label: "All",
											value: 0,
										},
									]}
									label={null}
								/>
							</div>
							<div className="mt-8">
								<Typography variant={"h1"}>Select Site</Typography>
								<SearchableSelectInput
									className="mt-4"
									key="key_select_site"
									id="select_site_id"
									placeholder="Select Site"
									isMulti={false}
									isLoading={isValidating}
									disabled={isValidating}
									required={false}
									customSetData={handleSelectedSiteChange}
									options={listSite}
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
