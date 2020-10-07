var total = 0;

var check = function(){
  var alinacak_ders_kodu = '3124137'; // course code or * for every course
  var ders_kodu_index = 1;
  var num_coluns = 8;
  var capacity_index = 6;
  var used_capacity_index = 7;


  console.log('Deneme', total);
  var i;
  for (i = 0; i < document.getElementsByClassName('clickable').length; i++) {
    if(i % 8 == 6){

      if(document.getElementsByClassName('clickable')[capacity_index].textContent != document.getElementsByClassName('clickable')[used_capacity_index].textContent &&
        (document.getElementsByClassName('clickable')[ders_kodu_index].textContent == alinacak_ders_kodu || document.getElementsByClassName('clickable')[ders_kodu_index].textContent == "*")){

        console.log('Ders BULUNDU!')

        var a = new Audio("https://dosya.afeser.duckdns.org/webUploads/aaa.mp3");
        a.play();
      }
    }
  }

  document.getElementById('submitSearchForm').click();
  total = total + 1;

  setTimeout(check, 40000); // wait 25 seconds(takes 25 seconds for me...), to refresh page... TODO : dynamic decision would be great!
}

check();

