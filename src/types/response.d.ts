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
}

export interface IPingStatusResponse {
	status: string;
	average_response_ms: string;
	percent_packet_loss: string;
}

export interface IAppProcessResponse {
	status: string;
	percent_user_time: string;
}

export interface ICpuProcessResponse {
	status: string;
	processor_usage: string;
}

export interface IMemoryProcessResponse {
	status: string;
	usage_percent: string;
}

export interface INetworkProcessResponse {
	status: string;
	upload: string;
	download: string;
}

export interface IDiskProcessResponse {
	status: string;
	instance: string;
	free_spaces: string | number;
}
