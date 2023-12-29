const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},

  ]
  function superbowlWin(records) {
    for (const recordItem of records) {
        if (recordItem.result === "W") {
            return recordItem.year;
        }
    }
    
    return undefined;
}

console.log(superbowlWin(record));