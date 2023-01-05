function premium() {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  }
  const premiumsection = document.querySelector("#premium");

  let card = document.createElement("div");
  card.className = "card";
  premiumsection.append(card);
  let img = document.createElement("img");
  img.setAttribute("src", "./images/laptop.jpg");
  card.append(img);
}
