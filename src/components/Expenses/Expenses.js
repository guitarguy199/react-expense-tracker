import { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [enteredVal, setEnteredVal] = useState("2020");

  // let filterInfoText = '2019, 2021, 2022'

  const expenseFilterHandler = (selectedYear) => {
    // props.selectedYear(enteredVal);
    setEnteredVal(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredVal;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={expenseFilterHandler}
        selected={enteredVal}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
