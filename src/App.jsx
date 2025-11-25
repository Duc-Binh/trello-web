
import Board from "./pages/Boards/_id";

import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import Typography from "@mui/material/Typography";


function App() {
  return (
    <>

      {/* React router dom / board / boards/{board_id} */}
      {/* Board details */}
      <Board />

      <div>ducbinh</div>

      <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet
      </Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />

      <AccessAlarmIcon />
      <ThreeDRotation />

    </>
  );
}

export default App;
