import bootstrap from "bootstrap";

export const createCard = (data) => {
    const card = document.createElement('div');
    card.className="card"
    const img = document.createElement("img");
    img.src = data.url
    const cardBody = document.createElement('div');
    const title = document.createElement('h5');
    title.textContent = data.name;
    const cardText = document.createElement('p');
    cardText.textContent = data.gender;
    card.append(img,cardBody);
    cardBody.append(title,cardText)
}