


let http = new XMLHttpRequest();

http.open('get' ,'class.json' , true);

http.send();

http.onload = function(){
    if(this.readyState ==4 && this.status == 200){
        let data = JSON.parse(this.responseText);

        let output ="";

        for(let item of data){
            output += '
                <div class="data">
                <><p class="itemId">${item.ID}</p><img src="${item.image}" alt="${item.image}" /><p class="title">${item.name}</p><p class="description">${item.ShortDesc}</p></></div>
                

                
            ';
        }

        document.
    }
}