# METU-Course-Capacity-Check
Check course capacity regularly.

## Bu ne?
JS ile yazılmış bir bot. METU course capacity kontrolü yapıyor ve capacity var ise ses ile uyarıyor.

## Nasıl kullanılır? - Chrome - Hızlıca Denemek için
* sis.metu.edu.tr sayfasına girip şekildeki gibi "Semester Information" diyoruz.
![Semester Info](https://github.com/afeser/METU-Course-Capacity-Check/blob/main/ss4.png)

* Buraya girdikten sonra istediğimiz bilgileri aşağıdaki gibi dolduruyoruz(Semester ve Program).
* Bilgileri doldurduktan sonra search dediğimizde aşağıdaki numaralı sütunlar çıkıyor. Bu sütunları resimdeki sıraya getiriyoruz(sağ üstteki "columns" tuşu ile Capacity eklenebiliyor eğer yoksa)
![Set Up](https://github.com/afeser/METU-Course-Capacity-Check/blob/main/ss1.png)

* Ardından inspect diyerek konsolu açıyoruz.
![Inspect](https://github.com/afeser/METU-Course-Capacity-Check/blob/main/ss2.png)

* Konsola dosya içeriğini yapıştırıyoruz, "var alinacak_ders_kodu = '3124137';" kısmını istenilen ders koduyla değiştiriyoruz ve Enter diyoruz. Arkaplanda 45 saniyede bir kontejyan kontrolü yapıyor. Eğer ki kontejyan varsa bağırıyor(ses çıkarıyor).
![Paste](https://github.com/afeser/METU-Course-Capacity-Check/blob/main/ss3.png)



## Notlar
Yazdığım ilk JS kodu, internetten baka baka yazdım o yüzden hatalı/eksik(veya berbat xd) olabilir. Geliştirmek veya bug report etmek isteyenleri heycanla karşılarızz.

40 saniyede bir kontrol
`var kontrol_araligi = 40`

Layout farkli kullanmak isterseniz..
```
  var ders_kodu_index = 1;
  var num_coluns = 8;
  var capacity_index = 6;
  var used_capacity_index = 7;
```


# SAYIN ODTÜ HERKES İSTEDİĞİ DERSİ ALSA NOLACAK SANKİİ??????
