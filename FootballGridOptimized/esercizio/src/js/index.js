"use strict";

/*
  This script wires click handlers to the "points" cells in the table rows
  (Inter, Juventus, Milan). When a user clicks a points cell, we generate a
  random new score for that team and update the "Total points" accordingly.

  
*/

/* ===== Query table cells we need ===== */

// Inter's points (2nd cell in the row with id="inter")
const interPointsCell = document.querySelector("#inter td:nth-of-type(2)");

// Juventus' points (2nd cell in the row with id="juventus")
const juvePointsCell = document.querySelector("#juventus td:nth-of-type(2)");

// Milan's points (2nd cell in the row with id="milan")
const milanPointsCell = document.querySelector("#milan td:nth-of-type(2)");

// "Total points" cell (2nd header cell in the footer row with id="total")
const totalPointsCell = document.querySelector("#total th:nth-of-type(2)");




/* ===== Attach the same click handler to each team's points cell ===== */
if (interPointsCell) interPointsCell.onclick = handlePointsCellClick;
if (juvePointsCell) juvePointsCell.onclick = handlePointsCellClick;
if (milanPointsCell) milanPointsCell.onclick = handlePointsCellClick;

/**
 * Handle click on a team's "points" cell.
 * - Generates a random new score in [30, 35].
 * - Recomputes the total by subtracting the old score and adding the new one.
 *
 * @param {MouseEvent} event - The click event fired by the cell.
 */
function handlePointsCellClick(event) {
  // The cell that was clicked (a <td> with a numeric value)
  const clickedTeamCell = event.currentTarget;

  // Generate a random integer in the range [30, 35]:
  // Math.random() -> [0,1)
  // * 6 -> [0,6)
  // floor -> {0,1,2,3,4,5}
  // + 30 -> {30,31,32,33,34,35}
  const newRandomScore = Math.floor(Math.random() * 6) + 30;

  // Parse current values from the DOM as numbers.
  const oldTeamScore = Number(clickedTeamCell.textContent);
  const currentTotal = Number(totalPointsCell.textContent);

  // Points from "other teams" = current total minus the previous score of the clicked team.
  const otherTeamsPoints = currentTotal - oldTeamScore;

  // Update the clicked team's cell first...
  clickedTeamCell.textContent = String(newRandomScore);

  // ...then recompute and set the new total.
  const newTotal = otherTeamsPoints + newRandomScore;
  totalPointsCell.textContent = String(newTotal);
}
