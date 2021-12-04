const contentNumbers = await Deno.readTextFile("input_numbers", "UTF-8");
const inputNumbers = contentNumbers.split(",").map((n) => Number(n));

const contentTables = await Deno.readTextFile("input_tables", "UTF-8");
const inputTablesLines = contentTables.split("\n");

const inputTables = [];
for (let i = 0; i < inputTablesLines.length - 1; i += 6) {
  const table = [];
  table.push(lineToRow(inputTablesLines[i]));
  table.push(lineToRow(inputTablesLines[i + 1]));
  table.push(lineToRow(inputTablesLines[i + 2]));
  table.push(lineToRow(inputTablesLines[i + 3]));
  table.push(lineToRow(inputTablesLines[i + 4]));
  inputTables.push(table);
}

function lineToRow(line) {
  return line.split(/\s/g).filter(Boolean).map((n) => Number(n));
}

function markNumber(markedNumber) {
  inputTables.forEach((table, tableI) => {
    table.forEach((row, rowI) => {
      row.forEach((number, numI) => {
        if (number === markedNumber) {
          inputTables[tableI][rowI][numI] = { marked: true, number };
        }
      });
    });
  });
}

function checkAnyCorrectRowOrColumn() {
  const found = [];
  // Rows
  inputTables.forEach((table, tableI) => {
    if (!winnerTables.includes(tableI)) {
      table.forEach((row) => {
        let numbersCorrectLength = 0;
        row.forEach((number) => {
          if (number.marked) {
            numbersCorrectLength++;
          }
        });
        if (numbersCorrectLength == row.length) {
          winnerTables.push(tableI);
          found.push(tableI);
        }
      });
    }
  });

  // Columns
  inputTables.forEach((table, tableI) => {
    if (!winnerTables.includes(tableI)) {
      for (let i = 0; i < table[0].length; i++) {
        let numbersCorrectLength = 0;
        table.forEach((row) => {
          const n = row[i];
          if (n.marked) numbersCorrectLength++;
        });
        if (numbersCorrectLength == table.length) {
          winnerTables.push(tableI);
          found.push(tableI);
        }
      }
    }
  });

  return found;
}

function getCalc(pos, tableI) {
  let sumOfUnmarked = 0;

  inputTables[tableI].forEach((row) => {
    row.forEach((n) => {
      if (!n.marked) {
        sumOfUnmarked += n;
      }
    });
  });

  return sumOfUnmarked * inputNumbers[pos];
}

const winnerTables = [];

for (let i = 0; i < inputNumbers.length; i += 1) {
  markNumber(inputNumbers[i]);
  const foundTables = checkAnyCorrectRowOrColumn();
  if (foundTables.length > 0) {
    foundTables.forEach((table) => {
      const calc = getCalc(i, table);
      console.log(table, calc);
    });
  }
}
