import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Button,
    Box,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel
} from "@mui/material";
import { useFormik } from "formik";
import ExtractInteroperabilityRequirements from "./extractInteroperabilityRequirements";
import ExtractInteroperabilityRequirementsPortuguese from "./extractInteroperabilityRequirementsPortuguese";
import { CSVLink, CSVDownload } from "react-csv";

export default function ExtractRequirementsDialog({
  openRequirementsDialog,
  setOpenRequirementsDialog,
  mission
}) {
    const [csvData, setCsvData] = useState(undefined);
    const [extractTypeText, setExtractTypeText] = useState(undefined);
    const handleClose = () => {
        setOpenRequirementsDialog(false);
        setCsvData(undefined);
    };

    const formik = useFormik({
        initialValues: {
            extractType: '',
            pop_mission_id: mission.id,
            mission: mission
        },
        onSubmit: async (values) => {
            switch (values.extractType){
                case 'detailed':
                case 'compact':
                    const csvDataTemp = ExtractInteroperabilityRequirements({ mission: values.mission, options: values.extractType });
                    if (csvDataTemp !== '') {
                        setCsvData(csvDataTemp);
                        setExtractTypeText(values.extractType);
                    } else {
                        setCsvData(undefined);
                        setExtractTypeText(undefined);
                    }
                    break;
                case 'detailedPt':
                case 'compactPt':
                    const csvDadosTemp = ExtractInteroperabilityRequirementsPortuguese({ mission: values.mission, options: values.extractType });
                    if (csvDadosTemp !== '') {
                        setCsvData(csvDadosTemp);
                        setExtractTypeText(values.extractType);
                    } else {
                        setCsvData(undefined);
                        setExtractTypeText(undefined);
                    }
                    break;
                default:
                    break;
            }
            formik.resetForm();
        },
    });
    
    return (
    <>
        <Dialog open={openRequirementsDialog} onClose={handleClose}>
        <DialogTitle sx={{ alignSelf: "center", paddingBottom: "10px" }}>
            Extract Interoperability Requirements
        </DialogTitle>
                <DialogContent sx={{ padding: "10px" }}>
                <form onSubmit={formik.handleSubmit}>
                    <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="detailed"
                                name="extractType"
                                value={formik.values.extractType ?? ""}
                                onChange={formik.handleChange}
                            >
                                <FormControlLabel value="detailed" control={<Radio />} label="Detailed" />
                                <FormControlLabel value="compact" control={<Radio />} label="Compact" />
                                <FormControlLabel value="detailedPt" control={<Radio />} label="Detailed (Portuguese)" />
                                <FormControlLabel value="compactPt" control={<Radio />} label="Compact (Portuguese)" />
                            </RadioGroup>
                        </FormControl>
                        <Box
                            sx={{
                            paddingTop: "5px",
                            display: "flex",
                            justifyContent: "center",
                            }}
                        >
                            <Button
                                sx={{ m: 1, width: "20ch" }}
                                color="error"
                                variant="outlined"
                                fullWidth
                                onClick={handleClose}
                                >
                                Close
                            </Button>
                            <Button
                                sx={{ m: 1, width: "20ch" }}
                                color="success"
                                variant="outlined"
                                fullWidth
                                type="submit"
                                >
                                Extract Requirements
                            </Button>
                        </Box>
                            {csvData ?<CSVLink
                                data={csvData}
                                separator={";"}
                                filename={`${extractTypeText}_${mission.tittle}_interoperability_requirements`}
                                headers={['Campo', 'Descricao']}
                                style={{
                                    "backgroundColor": "blue",
                                    "color": "white",
                                    "border": "2px solid blue",
                                    "padding": "10px 20px",
                                    "textAlign": "center",
                                    "textDecoration": "none",
                                    "display": "inline-block"
                                }}
                            >Download CSV File</CSVLink> : ''}
                    </Grid>
                </form> 
            </DialogContent>
        </Dialog>
    </>
    );
}