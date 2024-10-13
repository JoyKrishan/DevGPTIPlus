import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { updateCase, getCase } from '../../API/cases';
    const { text, setText, title, setTitle, setCaseObject } = useCaseContext();
    const { caseId, } = useParams();
        async function fetchCase() {
            try {
                const response = await getCase(caseId);
                if (response.status === 200) {
                    setText(response.data.description);
                    setTitle(response.data.title);
                    setCaseObject(response.data);
                } else {
                    console.error('Error al obtener el caso:', response.statusText);
                }
            } catch (error) {
                console.error('Error al procesar la solicitud:', error);
            }
        fetchCase();
    }, [caseId]);

    async function handleSave() {
        const body = { title: title, description: text }
            const response = await updateCase(caseId, body);
            console.log(response);
            if (response.status === 200) {