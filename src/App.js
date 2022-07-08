import { ButtonGroup, Button,Container, Form, FormGroup, Grid, GridColumn, GridRow, Header, Icon, Segment, Statistic, ButtonOr } from 'semantic-ui-react';
//import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Container>

      <Header as='h1'> Buget</Header>

      <Statistic size='small'>
        <Statistic.Label> Your Balance</Statistic.Label>
        <Statistic.Value> 2555.23 </Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Incoming:
                </Statistic.Label>
                <Statistic.Value>1,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>623</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>
        History
      </Header>

      <Segment color='red'>
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left"> Something </GridColumn>
            <GridColumn width={3}> $10,00 </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered> </Icon>
              <Icon name="trash " bordered> </Icon>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Segment color='green'>
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left"> Something </GridColumn>
            <GridColumn width={3}> $100,00 </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered> </Icon>
              <Icon name="trash " bordered> </Icon>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Segment color='blue'>
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left"> Something </GridColumn>
            <GridColumn width={3}> $20,00 </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered> </Icon>
              <Icon name="trash " bordered> </Icon>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>


      <Header as='h3'>
        Add new transaction
      </Header>

      <Form unstackable>
        <FormGroup>
          <Form.Input
            icon='tags'
            width={12}
            label="Description"
            placeholder="New shinny thing" />

          <Form.Input
            icon='dollar'
            iconPosition='left'
            width={4}
            label="Value"
            placeholder="100.00" />

        </FormGroup>
        <ButtonGroup style={{marginTop:20}}>
          <Button> Cancel </Button>
          <ButtonOr/>
          <Button primary> Ok </Button>
        </ButtonGroup>
      </Form>

    </Container>
  );
}

export default App;
