import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import MenuPanelLeft from "./MenuPanelLeft";
import MenuPanelRight from "./MenuPanelRight";

function MenuPage() {
  return (
    <Grid container>
      <Grid item lg={7}>
        <MenuPanelLeft />
      </Grid>
      <Grid item>
        <Divider variant="fullWidth" orientation="vertical" />
      </Grid>
      <Grid item lg={4}>
        <MenuPanelRight />
      </Grid>
    </Grid>
  );
}

export default MenuPage;
