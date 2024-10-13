import ListItemButton from '@mui/material/ListItemButton';
                            <ListItemButton onClick={() => navigate(`/create_case/${caseData.id}/text`)}>
                                <CaseCard title={caseData.title} description={caseData.description} />
                            </ListItemButton>