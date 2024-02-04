/* change the class name with your cookie  */
const divs = document.querySelectorAll("._30scZ");
const titlesArray = [];

divs.forEach((div) => {
  const span = div.querySelector("span");
  if (span) {
    titlesArray.push(span.textContent);
  }
});

console.log(titlesArray);

(async () => {
  const apiUrl = "https://api.genderize.io?name=";
  let boys = 0, girls = 0;

  const promises = titlesArray.map(async (title) => {
    const response = await fetch(apiUrl + encodeURIComponent(title));
    const data = await response.json();

    if (data.gender === "male") boys++;
    else if (data.gender === "female") girls++;
  });

  await Promise.all(promises);

  console.log(boys, girls);
})();

console.log(titlesArray);