import { createCase } from './API/cases';
    async function handleCreateCase() {
        const body = {user_id: currentUser.id}
        try {
            const response = await createCase(body);
            
            const createdCase = response?.data?.info;
            navigate(`/create_case/${createdCase.id}/text`)

        } catch (error) {
            console.error("Error al crear el caso:", error);
        }

    