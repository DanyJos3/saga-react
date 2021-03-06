import React from "react";
import {
    ButtonGroup,
    Button,
    ButtonOr,
  } from "semantic-ui-react";

function ButtonSaveOrCancel({addEntry}) {
  return (
    <ButtonGroup style={{ marginTop: 20 }}>
      <Button> Cancel </Button>
      <ButtonOr />
      <Button primary onClick={()=>addEntry()}> Ok </Button>
    </ButtonGroup> 
  );
}

export default ButtonSaveOrCancel;
