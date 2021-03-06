import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({ totalIncomes, totalExpenses }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="INCOME" value={totalIncomes} color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              title="EXPENSES"
              value={totalExpenses}
              color="red"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
