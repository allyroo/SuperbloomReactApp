import React from "react";
import "./Dashboard.css";
import ToDoList from "../ToDo/ToDoList";
import Journal from "../Journal/Journal";
import { Progress } from "reactstrap";
// import Quote from "../QuoteAPI/Quote";
import Button from "@material-ui/core/Button";

// getQuote(api_url)
function Dashboard() {
  return (
    <div class="dashboard">
      <div class="gallery">
        <div id="profile">
          <div id="profileBody"></div>

          <div />
          <br></br>
        </div>

        <div id="smartGoalBox">
          <div id="smartGoalCategory">Category: NUTRITION</div>
          <br></br>
          <div id="smartGoal">
            I will pack my lunch from home for at least 4 days this week instead
            of ordering take-out/fast food.
          </div>
          <Button variant="contained">New Habit</Button>
        </div>

        <div class="toDoList">
          <ToDoList />
        </div>

        <div class="quoteAPI">
          {/* {quote}
        {author} */}
          <div class="mQuoteAPI">
            "Habits are not a finish line to be crossed, <br />
            they are a lifestyle to be lived." - James Clear
          </div>
        </div>

        <div class="journal">
          <br></br>
          <div class="journalEntries">
            <Journal />
          </div>
        </div>

        <div class="habitEntries">
          <h1>Habit Progress</h1>
          <Progress color="success" value={75}>
            You're almost there! 3/4
          </Progress>
          <br></br>
          <Button variant="contained">Crushed it!</Button>
          <br></br>
          <table class="w3-table-all">
            <thead>
              <tr class="w3-light-grey">
                <th>Habit</th>
                <th>Category</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tr>
              <td>Drink 8 glasses of water</td>
              <td>Nutrition</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Exercise 3 days</td>
              <td>Movement</td>
              <td>66%</td>
            </tr>
            <tr>
              <td>Walk to work 2 days</td>
              <td>Movement</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Sleep before 10pm 3 days</td>
              <td>Rest</td>
              <td>33%</td>
            </tr>
          </table>
        </div>
        <div class="descriptionTitle box_title"></div>
        <h1 class="description"></h1>
      </div>
    </div>
  );
}

export default Dashboard;
