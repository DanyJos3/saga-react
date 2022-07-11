import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Buget" type="h1" />

      <DisplayBalance title="Your Balance" value="2555.23" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <DisplayBalance
        color="red"
        description="Something"
        amount="10,00"
        align="left"
      />

      <EntryLine description="Income" value="10,00" />
      <EntryLine description="Expense" value="10,00" isExpense={true} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
