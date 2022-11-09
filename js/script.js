let requestObj = new XMLHttpRequest();

    requestObj.open('GET','https://kitsu.io/api/edge/anime', false);

    requestObj.send();

    let array = JSON.parse(requestObj.responseText);

    console.log(array);

    for (let i = 0; i < array['data'].length; i++ ) {

    document.getElementById('pic').innerHTML += ` 
        <div class="name" style="display: flex; justify-content: space-around; align-items: center;border: 1px solid black; border-radius: 20px; box-shadow: 3px 5px 10px black; width: 250px; height: 450px; border-size: border-box; flex-direction: column; color: white; margin: 15px 15px; font-family: 'Josefin Sans', sans-serif;">
            ${array['data'][i]['attributes']['titles']['en_jp']}
        <div>
        <img src='${array['data'][i]['attributes']['posterImage']['large']}' 
        style=";
        margin-bottom: 20px;
        width: 200px;
        height: 330px;
        object-fit: fill;
        border-radius: 10px;
        box-shadow: 3px 5px 10px black;">
        <div style="color: black; width: 60px; height: 25px; line-height: 25px; background-color: yellow; text-align: center; border: 1px solid black; box-sizing: border-box; border-radius: 10px; box-shadow: 2px 5px 10px black;">R: 
            ${array['data'][i]['attributes']['averageRating']}
        </div>
        <div style="display: flex;
        justify-content: end;
        font-size: 15px;
        font-family: 'Josefin Sans', sans-serif;
        width: 200px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        margin-top: 10px;">
            Count Series:  
            ${array['data'][i]['attributes']['episodeCount']}
        </div>
        `;
}

    document.getElementById('footer').innerHTML += `
        <div class="bottom" style="width: 100%; height: 100px; background-color: rgba(104, 219, 253, 0.156); border-top: 1px solid black; display: flex; justify-content: center; align-items: center; font-size: 20px; font-weight: bolder; font-family: 'Josefin Sans', sans-serif;">
        <div>Copyright 2022 | <em style="color: darkblue;">Anime Cards</em> Mark Taratynov</div>
    `;