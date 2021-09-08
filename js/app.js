// 사진 무작위로 바뀌는 것

$(document).ready(function(){

    var items = $(".profile");

    for(var i = 0; i < items.length; i++){

        var idx = Math.floor(Math.random() * items.length -1) + 1;

        var idx2 = Math.floor(Math.random() * items.length -1) + 1;

        items.eq(idx).before(items.eq(idx2));

};

});



//로컬스토리지에 있는것 불러오기
function loadpic(lastpic){
    console.log('야호3');
    //const lastpicData = localStorage.getItem("lastpic");
    //console.log(lastpicData);

    //저장된 사진이 없을때
    if(localStorage.getItem("lastpic") === null) {
        console.log('처음라스트픽데이터 널값')
        getImage();
    }
    //저장된 사진이 있을때
    else {
        document.getElementById("unsplashImage").src = localStorage.getItem("lastpic");
        
        
        
    }
}
function getImage() {
    //개인아이디
    //const url = "https://api.unsplash.com/photos/random?client_id=owPAXOpq0b-SeNRzU3Z6NsG4khQAgoXgFjyQV8oPP4g";
   // 공용아이디
   const url = "https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM"
   fetch(url)
   .then(function(response){
       return response.json();
   })
   .then(function(jsonData){
       // jsonData를 이용해 random image 생성
       
       const localStorageData = jsonData.urls.regular;
       console.log(localStorageData);
       console.log('야호');
       
       
       document.getElementById("unsplashImage").src = localStorageData;
       //localStorage.setItem("lastpic",localStorageData);
       //console.log(localStorageData);
       localStorage.setItem("lastpic",localStorageData);
       //console.log(localStorage.getItem("lastpic"));
       
       // return savepic(localStorageData);
    
    })
}

//실행
loadpic();

//로컬스토리지 삭제 해서 잘되는지 확인
// localStorage.removeItem("lastpic");
// console.log(localStorage.getItem("lastpic"));



