import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EditableCategoryTable from "./EditableCategoryTable";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/TextField";
import EditOffIcon from "@mui/icons-material/EditOff";
import Box from "@mui/material/Box";
import EditableTextField from "../../../Common/EditableTextField";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AccountingsService from "../../../../services/accountings.service";

export default function EditableGroupTile({
  accountingId,
  handleDeleteGroup,
  handleUpdateGroup,
  accounting,
  updateAccounting,
  groupId,
  type,
}) {
  const thisGroup =
    type === "expenses"
      ? accounting.expenses.groups.find((g) => g.id === groupId)
      : accounting.income.groups.find((g) => g.id === groupId);
  const [nameChanged, setNameChanged] = React.useState(false);

  function updateGroup(newValue) {
    setNameChanged(true);
    handleUpdateGroup(thisGroup.id, newValue);
  }

  function deleteGroup() {
    handleDeleteGroup(thisGroup.id);
  }

  function Title() {
    return (
      <Grid container sx={{ mb: 1 }}>
        <Grid item xs={11} md={11} lg={11}>
          <EditableTextField
            value={thisGroup.name}
            onSave={updateGroup}
            done={nameChanged}
          />
        </Grid>

        <Grid item xs={1} md={1} lg={1}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton
              aria-label="Edit group"
              color="secondary"
              onClick={deleteGroup}
              sx={{ mb: 2 }}
            >
              <DeleteForeverIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title />
        <Grid container spacing={2} sx={{ pl: 2 }}>
          <EditableCategoryTable
            accounting={accounting}
            updateAccounting={updateAccounting}
            accountingId={accountingId}
            group={thisGroup}
            groupId={thisGroup.id}
            type={type}
          />
        </Grid>
      </Paper>
    </Grid>
  );
}
