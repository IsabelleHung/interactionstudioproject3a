document.addEventListener("DOMContentLoaded", () => {
    console.log("JS is working");
});

//Map selection form
const form = document.querySelector(".map-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const select = document.getElementById("bd");

  // get all selected values
  const selectedValues = Array.from(select.selectedOptions).map(option => option.value);

  // get all selected labels (optional)
  const selectedText = Array.from(select.selectedOptions).map(option => option.text);

  console.log("Values:", selectedValues);
  console.log("Labels:", selectedText);
});


async function loadCSV() {
    const res = await fetch("assets/spreadsheets.csv");
    const text = await res.text();
    console.log(text);
    return text;
}

function parseCSV(text) {
    const rows = text.trim().split("\n");

    return rows.map(row => {
        const cols = row.split(",");

        return {
            building: cols[0],
            roomNum: cols[1],   // A, B, C
            day: Number(cols[2]), // 1–7
            timeStart: cols[2],
            timeEnd: cols[3], 
            volume: cols[4],
            type: cols[5],
            capacity:cols[6]
        };
    });
}



// const roomMap = {
//     A: "Lecture Hall",
//     B: "Stools",
//     C: "Whiteboard"
// };

// const dayMap = {
//     1: "Sunday",
//     2: "Monday",
//     3: "Tuesday",
//     4: "Wednesday",
//     5: "Thursday",
//     6: "Friday",
//     7: "Saturday"
// };

