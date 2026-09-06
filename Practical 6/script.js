// ---------------------------------------------
// 6a. Basics of String + 6b. substring(), indexOf(), split(), replace()
// ---------------------------------------------

const strInput = document.getElementById("strInput");
const resultsGrid = document.getElementById("resultsGrid");

function buildResults(str) {
  // Guard against an empty string so methods don't throw / look broken
  const safe = str.length ? str : " ";

  return [
    {
      method: "str.length",
      value: str.length,
      hint: "Number of characters in the string"
    },
    {
      method: "str.toUpperCase()",
      value: str.toUpperCase(),
      hint: "Basics — every letter capitalised"
    },
    {
      method: "str.toLowerCase()",
      value: str.toLowerCase(),
      hint: "Basics — every letter lowercased"
    },
    {
      method: "str.trim()",
      value: `"${str.trim()}"`,
      hint: "Basics — removes leading/trailing spaces"
    },
    {
      method: "str.charAt(0)",
      value: safe.charAt(0),
      hint: "Basics — character at a given index"
    },
    {
      method: "str.substring(0, 5)",
      value: safe.substring(0, 5),
      hint: "Characters from index 0 up to (not including) 5"
    },
    {
      method: 'str.indexOf("a")',
      value: str.indexOf("a"),
      hint: "Position of the first match, or -1 if not found"
    },
    {
      method: 'str.split(" ")',
      value: JSON.stringify(str.split(" ")),
      hint: "Breaks the string into an array of words"
    },
    {
      method: 'str.replace("World", "Java")',
      value: str.replace("World", "Java"),
      hint: "Swaps the first match for new text"
    }
  ];
}

function render() {
  const str = strInput.value;
  const results = buildResults(str);

  resultsGrid.innerHTML = results
    .map(
      (r) => `
      <div class="result-card">
        <span class="result-method">${r.method}</span>
        <span class="result-value">${escapeHtml(String(r.value))}</span>
        <span class="result-hint">${r.hint}</span>
      </div>`
    )
    .join("");
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

strInput.addEventListener("input", render);

// ---------------------------------------------
// Initial render on page load
// ---------------------------------------------
render();