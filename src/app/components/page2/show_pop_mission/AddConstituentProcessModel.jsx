import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useFormik } from "formik";

import { useAddMissionProcessMutation } from "../../../features/business_alliance/bussinesAllianceApiSlice";

import SelectPoPControl from "../../selectPoPControl";
import SelectConstituentProcessControl from "../../selectPoPControl/SelectConstituentProcessControl";
import SelectPopControl from "../../selectPoPControl/SelectPopControl";
import { useUpdateOverallViewMutation } from "../../../features/overall_view/overallViewApiSlice";
import { useUpdatePopMissionModelMutation } from "../../../features/pop_mission_model/popMissionModel";
function AddConstituentProcessModel({
  openRegisterPopMission,
  setOpenRegisterPopMission,
  mission,
  handleClose,
  allianceMembers,
  pop,
  adicionandoConstituentProcessModel,
  constituentProcessesJaCadastrados,
  popOverall,
}) {
  const [membro, setMembro] = React.useState([]);
  const [addMissionProcess] = useAddMissionProcessMutation();
  const [pop_id, setPop_id] = React.useState(null);

  const [updateOverallView] = useUpdateOverallViewMutation();
  const formik = useFormik({
    initialValues: {
      pop_mission_id: mission,
      constituent_process_id: "",
      entry_date: new Date(),
      exit_date: new Date(),
    },
    onSubmit: async (values) => {
      addMissionProcess(values);

      // console.log("mission", values);
      adicionandoConstituentProcessModel();
      if (popOverall.overall_view != null) {
        console.log(popOverall.overall_view);
        const overallView = {
          id: popOverall.overall_view.id,
          updated: "false",
        };
        updateOverallView(overallView);
      }
      formik.resetForm();
    },
  });

  const handleConstituentId = (id) => {
    formik.values.constituent_process_id = id;
  };
  const handlePopId = (id) => {
    formik.values.pop_id = id;
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            m: 1,
          }}
        >
          <SelectPoPControl
            allianceMembers={allianceMembers}
            setMembro={setMembro}
          />
          <SelectConstituentProcessControl
            constituentProcess={membro}
            constituent_process_id={handleConstituentId}
            hide={true}
            constituentProcessesJaCadastrados={
              constituentProcessesJaCadastrados
            }
          />

          <Box
            sx={{
              paddingTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ m: 1, width: "15ch" }}
              color="error"
              variant="outlined"
              fullWidth
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              sx={{ m: 1, width: "15ch" }}
              color="success"
              variant="outlined"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </form>
    </>
  );
}

export default AddConstituentProcessModel;
