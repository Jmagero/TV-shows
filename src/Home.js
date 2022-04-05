import { getData } from "./data";
export async function  displayData(){
    const data = await getData();
    console.log(data);
    let output = '';
    data.forEach(ele => {
        const card = document.createElement('div');
        card.className="card"
        const img = document.createElement("img");
        img.src = ele.url
        const cardBody = document.createElement('div');
        const title = document.createElement('h5');
        title.textContent = ele.name;
        const cardText = document.createElement('p');
        cardText.textContent = ele.gender;
        card.append(img,cardBody);
        cardBody.append(title,cardText)
        output += cardBody
       
    });
    document.body.innerHTML = output;
  
}


