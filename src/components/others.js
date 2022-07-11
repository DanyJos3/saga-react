import React from "react";

function DisplayBalance({ color, description, amount,}) {
  return (
    <Segment color={color}>
      <Grid columns={3} textAlign="right">
        <GridRow>
          <GridColumn width={10} textAlign="left">
            {description}
          </GridColumn>
          <GridColumn width={3}>`$${amount}`</GridColumn>
          <GridColumn width={3}>
            <Icon name="edit" bordered/>
            <Icon name="trash " bordered/>
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default DisplayBalance;