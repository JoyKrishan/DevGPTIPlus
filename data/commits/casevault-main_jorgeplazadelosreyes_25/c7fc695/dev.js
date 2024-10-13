}

export function getCases() {
	return instance.get("api/v1/cases");
}

export function getCase(caseId) {
	return instance.get(`api/v1/cases/${caseId}`);
}

export function updateCase(caseId, data) {
	return instance.patch(`api/v1/cases/${caseId}`, data);