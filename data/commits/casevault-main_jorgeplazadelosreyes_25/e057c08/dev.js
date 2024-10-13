import instance from "../instance";


export function createCase(data) {
	return instance.post("api/v1/cases", data);
}