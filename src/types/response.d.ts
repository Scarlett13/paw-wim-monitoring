export interface IWimStatusResponse {
	siteid: string;
	sitename: string;
	sitelat?: number;
	sitelong?: number;
	sitecolor?: string;
	ping: {
		camera: IPingStatusResponse;
		wim_logic: IPingStatusResponse;
	};
	app_process: {
		vpn_app: IAppProcessResponse;
		wim_app: IAppProcessResponse;
	};
	cpu: ICpuProcessResponse;
	memory: IMemoryProcessResponse;
	network: INetworkProcessResponse;
	disk: IDiskProcessResponse;
	orbit_data: IOrbitMonitoringResponse;
}

export interface IOrbitMonitoringResponse {
	quota_status: string;
	end_time_status: string;
	siteid: string;
	msisdn: string;
	quota_value: number | string;
	quota_limit: number | string;
	end_time: string;
}

export interface IPingStatusResponse {
	status: string;
	average_response_ms: number | string;
	percent_packet_loss: number | string;
}

export interface IAppProcessResponse {
	status: string;
	percent_user_time: number | string;
}

export interface ICpuProcessResponse {
	status: string;
	processor_usage: number | string;
}

export interface IMemoryProcessResponse {
	status: string;
	usage_percent: number | string;
}

export interface INetworkProcessResponse {
	status: string;
	upload: number | string;
	download: number | string;
}

export interface IDiskProcessResponse {
	status: string;
	instance: string;
	usage_percent: string | number;
}
