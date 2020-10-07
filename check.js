
var total = 0;

var check = function(){
  var alinacak_ders_kodu = '3121101'; // course code or * for every course
  var ders_kodu_index = 1;
  var num_columns = 8;
  var capacity_index = 6;
  var used_capacity_index = 7;
  var kontrol_araligi = 40;


  console.log('Deneme', total);
  var i;
  for (i = 0; i < document.getElementsByClassName('clickable').length / num_columns; i++) {


    if(document.getElementsByClassName('clickable')[capacity_index+i*num_columns].textContent != document.getElementsByClassName('clickable')[used_capacity_index+i*num_columns].textContent &&
      (document.getElementsByClassName('clickable')[ders_kodu_index+i*num_columns].textContent == alinacak_ders_kodu || document.getElementsByClassName('clickable')[ders_kodu_index+i*num_columns].textContent == "*")){

      console.log(document.getElementsByClassName('clickable')[capacity_index+i*num_columns].textContent);
      console.log(document.getElementsByClassName('clickable')[used_capacity_index+i*num_columns].textContent);

      console.log('Ders BULUNDU!')

      var a = new Audio("https://raw.githubusercontent.com/afeser/METU-Course-Capacity-Check/main/aaa.mp3");
      a.play();
    }
  }

  document.getElementById('submitSearchForm').click();
  total = total + 1;

  setTimeout(check, kontrol_araligi*1000); // wait X seconds(loading of page takes X seconds for me...), to refresh page... TODO : dynamic decision would be great!
}

check();
