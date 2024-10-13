import { Drawer, Box, List, ListItem, ListItemButton, Button, Typography, TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
const SaveCaseButton = styled(Button)({
    position: 'absolute',
    bottom: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white',
    backgroundColor: '#282828',
    '&:hover': {
        color: '#282828',
        backgroundColor: 'white',
    },
});

const CASES_API = import.meta.env.VITE_API_CASES_URL;

    const { text, setText, title, setTitle } = useCaseContext();

    const handleSave = async () => {
        try {
            const response = await fetch(CASES_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: title, description: text })
            });
    
            if (response.ok) {
                console.log('Guardado exitoso');
            } else {
                console.error('Error al guardar:', response.statusText);
            }
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
        }
    };
            <Typography variant="h5" textAlign='center' gutterBottom>
                Creación de casos
            </Typography>
            <TextField
                label="Título"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Box marginTop={2}>
                <Typography variant="subtitle1" gutterBottom>
                    Descripción
                </Typography>
            </Box>
            <Box marginTop={1}>
            <Button onClick={toggleDrawer(true)}>Cambiar sección de texto</Button>
            <SaveCaseButton onClick={handleSave}>Guardar</SaveCaseButton>