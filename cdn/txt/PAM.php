<!DOCTYPE html>
<html>
<head>
<title>
Project Awesome Music
</title>
<link rel="stylesheet" type="text/css" href="css/pocb.css" />
<link rel="stylesheet" href="css/style23.css" type="text/css" data-PolyCalc="1" />
<link rel="icon" href="https://cdn.pbrd.co/images/4OCR4MJR4.png">
<meta charset="UTF-8">
<meta name="keywords" content="Html,Stake's,prints,site,personal website,stake2,staketwo,stakedois,Stake2,stake2 website,izaque sanvezzo,site do izaque sanvezzo,website stake2,computer,prints of computer,poc network,prints of computer network,izaque sanvezzo(stake2),posts,pocb,poc,pocm,prints of computer mobile,pocwp,poc windows phone,prints of computer blocks,w3.css,All rights reserved to Stake's Enterprisetm. @2017,about Izaque Sanvezzo,about stake2,sobre Izaque Sanvezzo,Sobre stake2,Prints of Computer Network,stake2(Izaque Sanvezzo) Personal Website" />
<meta name="description" content="stake2's Personal Site" />
<meta name="revised" content="Stake's Enterprisetm, 20/11/2017" />
<meta name="author" content="Stake Ferreira" />
<meta http-equiv="refresh" content="" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" type="text/css" href="https://www.w3schools.com/w3css/4/w3.css" >
<link rel="stylesheet" type="text/css" href="css/w3.css">
<link rel="stylesheet" href="css/w3.css" />
<script src="js/jquery-3-2-1.js"></script>
<script src="https://www.w3schools.com/lib/w3.js"></script>
</head>
<body onload="startTime()">

<!-- "ir para o topo" e "ir para o final" -->
<a href="top"></a>

<a href="#bot"><button class="w3-transparent w3-display-bottomright w3-border-0" style="position:fixed;"><img src="https://cdn.pbrd.co/images/4OLqp1uNA.jpg" alt="down button" /></button></a>

<script>
// Filter
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDIV");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
</script>

<div class="date w3-container w3-display-topright w3-text-cyan">
<i>
<script>
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;

    if (i < 10) {i = "00" + i};  // add zero in front of numbers < 10
}
</script><h1>
<div id="txt"></div><script>document.write(new Date().toLocaleDateString());</script></h1>
</i></div>

<!-- script de mudança de abas -->
<script>
function openCity(evt, cityName) {
    // Declara todas as variaveis
    var i, tabcontent, tablinks;

    // Pega todos os elementos com class="tabcontent" e esconde eles
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Pega todos os elementos com class="tablinks" e remove o "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a aba atual, e adiciona uma "active" classe para o link que abriu a aba
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
</script>

<script>
function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}
</script>

<div id="diario" class="city" style="display:none;">
<div class="w3-container">
  <div class="w3-dropdown-hover" style="position:fixed;">
  <button class="w3-button w3-white w3-medium" onclick="openCity('thel')">The Living Tombstone [23]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('wt')">Wooden Toaster [11]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('av')">Aviators [15]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('axs')">Alex S. [9]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('ss')">SlyphStorm [8]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('ps')">PsoGnar [2]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('sr')">SR71 [2]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('ck')">Coyote Kisses [1]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('po')">PhaseOne [1]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('twc')">Twitch [2]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('es')">Evening Star [4]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('tm')">Tokyo Machine [8]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('fzg')">Foozogs [2]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('uth')">uThunder [5]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('sgt')">Sim Gretina [14]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('shn')">Silva Hound [3]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('afm')">Aftermath [7]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('beb')">BlackGryph0n & Baasik [6]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('dbp')">dBPony [3]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('dtb')">Delta Brony [2]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('pfs')">PonyFireStone [5]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('kfp')">Knife Pony [4]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('gmb')">General Mumble [2]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('arc')">Archie [3]</button>
  <button class="w3-button w3-white w3-medium" onclick="openCity('ijt')">Injustrial [2]</button>
  <button class="w3-button w3-white" onclick="openCity('test')">Hide</button>
</div>
</div>
</div>
<br><br>

<div id="test" class="city" style="display:none;">

</div>

<pre id='vimCodeElement'>
<h5>
------------------------------------------------------------------
                          
            PROJECT AWESOME MUSIC 4.7.3

------------------------------------------------------------------

97 Artists
445 Songs
</h5>
</pre>

<!--
<div><object data="file:///D:\To Organize\[OLD; Cloud Drive] Main Files\Cloud Drive\jogos\Izaque\bloco de Notas\Effort\PROJECT AWESOME MUSIC\PROJECT AWESOME MUSIC 4.7.3.txt"></object></div>
-->

<?php
    $myfilename = "PROJECT AWESOME MUSIC 4.7.3.txt";
    if(file_exists($myfilename)){
      echo file_get_contents($myfilename);
    }
?>
<br><br>
<?php
echo "Hello World!";
?> 

<div id="thel" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
The Living Tombstone [23]

*-* Love Me Cheerilee By WoodenToaster + The Living Tombstone
*-* Rainbox Factory By BronyDanceParty + WoodenToaster
*-* Lost On The Moon feat. Rina Chan [WoodenToaster + The Living Tombstone]
*-* [Tomb Rap] Mic+Tomb+Glaze: Beyond Her Tomb
*-* Discord By Eurobeat Brony The Living Tombstone Remix
*-* Friendship By Aviators The Living Tombstone Remix
*-* Good Girl By Dasha and The Living Tombstone
*-* Nightmare Night (The Living Tombstone Remix) - WoodenToaster and Mic the Microphone
*-* Winter Wrap Up (The Living Tombstone Remix) - My Little Pony: Friendship is Magic
*-* Rainbow Factory (Remix) - WoodenToaster by The Living Tombstone
*-* Smile Song (Remix) 
*-* Song - Stuck in Time - The Living Tombstone and Bronyfied 
*-* Hooves Up High (Remix) feat. EileMonty - Silva Hound
*-* The Living Tombstone | Gypsy Bard [remix]
*-* Archie & The Living Tombstone - Hush (Club Mix) 
*-* Song - Dubstep Dishwasher 
*-* Song - Sister Hate feat. Mic The Microphone
*-* Pony Rock Anthem (Remix)
*-* Pinkie's Brew (Remix) - Sherclop Pones
*-* Like a Spinning Record Electro Cover By The Living Tombstone
*-* "September" | Kinetic Typography | [Lolman1031]
*-* SoaringFlight - Dying Dreams (Living Remix)
*-* Song - Been Dreamin'~ Instrumental 
</h5>
</pre>
</div>

<div id="wt" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Wooden Toaster [11]

*-* Awoken [H8 Seed + WoodenToaster]
*-* General Mumble - She's A Pony [WoodenToaster Remix]
*-* Fruits Of Her Labour [StormWolf + WoodenToaster]
*-* WoodenToaster - Beyond Her Garden
*-* WoodenToaster - Prototype VIP
*-* Glaze - Energy Sway
*-* Glaze - Building Worlds
*-* Glaze - Heartmender
*-* Glaze - Pixel Rush
*-* WoodenToaster - Rainbow Factory
*-* Lost On The Moon feat. Rina Chan [WoodenToaster + The Living Tombstone 
</h5>
</pre>
</div>

<div id="av" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Aviators [15]

*-* Open Your Eyes By Aviators
*-* The Others By Aviators
*-* Spirit Of Chaos By Aviators
*-* The Path Home By Aviators
*-* The Fear Of Flight By Aviators
*-* Aviators - One Last Letter (Feat. Bronyfied) 
*-* Aviators - Spirit Of Chaos
*-* Aviators - Ashes
*-* Aviators - Friendship 
*-* Aviators - Never Back Down (Feat. d.notive and Yelling at Cats)
*-* Aviators - The Fear of Flight 
*-* Aviators - Love is in Bloom Remix (Feat. Yelling At Cats and Hmage) 
*-* Acoustimandobrony - Loyalty (Aviators Remix) 
*-* Aviators - Melody
*-* Aviators - Shadows (Feat. Glaze)
</h5>
</pre>
</div>

<div id="axs" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Alex S. [9]

*-* Ultimate Sweetie Belle By Alex S.
*-* My Little Pony Intro (Alex S. Glitch Remix)
*-* Alex S. - What a World (ft. Steven Magnet)
*-* Alex S. - Ultimate Sweetie Belle
*-* Alex S. - Trixie The Pony Troll [VIP]
*-* Alex S - Party With Pinkie 
*-* Alex S. - Party With Pinkie (VIP)
*-* Alex S. - Cutie Mark Crusaders Theme Song (Alex S. Dubstep Remix)
*-* Alex S. - My Little Pony Friendship Is Magic Intro (Alex S. Glitch Remix)
</h5>
</pre>
</div>

<div id="ss" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
SlyphStorm [8]

*-* Heroes By SlyphStorm (Covering Aviators feat. Bronyfied
*-* Morning Mist By SlyphStorm
*-* Octavia's Overture By SlyphStorm
*-* Neverending Strife By SlyphStorm (redux)
*-* Morning Mist - SlyphStorm
*-* Octavia's Overture - SlyphStorm (reimagining The Living Tombstone)
*-* Through Sombra's Door - SlyphStorm (covering AwkwardMarina)
*-* Neverending Strife
</h5>
</pre>
</div>

<div id="ps" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
PsoGnar [2]

*-* PsoGnar - The Great Deception
*-* Teminite & PsoGnar - On My Way
</h5>
</pre>
</div>

<div id="sr" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
SR71 [2]

*-* SR71 - Let it Whip
*-* SR71 - Right Now
</h5>
</pre>
</div>

<div id="ck" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Coyote Kisses [1]

*-* Coyote Kisses - Six Shooter
</h5>
</pre>
</div>

<div id="po" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
PhaseOne [1]

*-* PhaseOne - Origins
</h5>
</pre>
</div>

<div id="twc" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Twitch [2]

*-* Flutterborn By Twitch
*-* Pegasi By Twitch
</h5>
</pre>
</div>

<div id="es" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Evening Star [4]

*-* Evening Star Octavia
*-* Evening Star - Blue Dreams
*-* Evening Star - Sunstorm
*-* Evening Star - To Build An Army
</h5>
</pre>
</div>

<div id="tm" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Tokyo Machine [8]

*-* Crazy
*-* Okay
*-* Party
*-* Fight
*-* Hype
*-* Rock It
*-* Pixel
*-* BLAST
</h5>
</pre>
</div>

<div id="fzg" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Foozogs [2]

*-* Foozogz - ,~*Smile!*~, (Rmx VIP)
*-* Foozogz - Fluttershy Likes Being Nice (CUTENESS OVERLOAD MIX)
</h5>
</pre>
</div>

<div id="uth" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
µThunder [5]

*-* Find the Music in You (µThunder Remix)
*-* Arimaspi - µThunder & FritzyBeat
*-* Lost On The Moon (µThunder Remix)
*-* Daniel Ingram - We’ll Make Our Mark (µThunder Remix)
*-* Luna's Swing - µThunder & FritzyBeat
</h5>
</pre>
</div>

<div id="uth" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
µThunder [5]

*-* Find the Music in You (µThunder Remix)
*-* Arimaspi - µThunder & FritzyBeat
*-* Lost On The Moon (µThunder Remix)
*-* Daniel Ingram - We’ll Make Our Mark (µThunder Remix)
*-* Luna's Swing - µThunder & FritzyBeat
</h5>
</pre>
</div>

<div id="sgt" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Sim Gretina [14]

*-* Crystal Fair (Sim Gretina Remix)
*-* Evil Enchantress (Sim Gretina remix)
*-* Make A Wish (Sim Gretina Remix) 
*-* Awkward Marina - Entropy (Sim Gretina Remix)
*-* Apples To The Core (Sim Gretina Remix)
*-* SimGretina - Pinkiestep (Oink Oink)
*-* Daniel Ingram - I'll Fly (Sim Gretina Remix)
*-* Twilight - BBBFF (Sim Gretina Remix)
*-* Daniel Ingram - The Pony I Want To Be (Sim Gretina Remix)
*-* Winter Dance Up (Sim Gretina Remix)
*-* Twilight - BBBFF (Sim Gretina Remix)
*-* Sim Gretina - Trixie's Trix 
*-* Sim Gretina- Art of the Dress (Trance Dance Remix)
*-* CMC - The Perfect Stallion (Is Spike Remix)
</h5>
</pre>
</div>

<div id="shn" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Silva Hound [3]

*-* Silva Hound - Diamonds (Original Mix)
*-* Silva Hound - RISE
*-* Silva Hound ft. Blackgryph0n - EGOMANIA (Original Mix) 
</h5>
</pre>
</div>

<div id="beb" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
BlackGryph0n & Baasik [6]

*-* BlackGryph0n & Baasik - Fighting Back
*-* BlackGryph0n & Baasik - Taking Off 
*-* EQUALITY - Michelle Creber & Black Gryph0n
*-* Black Gryph0n & Baasik - Another End (Music Video)
*-* DashStep (An original FiM Dubstep) - Baasik & BlackGryph0n
*-* BlackGryph0n & Baasik - Crusader (Are We There Yet) 
</h5>
</pre>
</div>

<div id="afm" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Aftermath [7]

*-* Helping Twilight Win the Crown (Aftermath Remix)
*-* Pinkie Pie's Singing Telegram (Aftermath Remix)
*-* A True, True Friend (Aftermath Remix)
*-* Giggle at the Ghostly (Aftermath Remix)
*-* Generosity (Aftermath Remix)
*-* Find a Pet Song (Aftermath Remix)
*-* Aftermath - Go To Sleep (Hush Now Quiet Now Remix) [VIP]
</h5>
</pre>
</div>

<div id="dbp" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
dBPony [3]

*-* Miles - dBPony (feat. EileMonty)
*-* Wonderbolt - dBPony (feat. Prince Whateverer)
*-* Hearts As Strong As Horses (Cover) - dBPony
</h5>
</pre>
</div>

<div id="dtb" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Delta Brony [2]

*-* The Pony I Want To Be (Delta Brony Hardstyle Remix)
*-* The Spectacle (Delta Brony Remix)
</h5>
</pre>
</div>

<div id="pfs" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
PonyFireStone [5]

*-* Come to Light - PonyFireStone
*-* Wooden Toaster- Fruits of Her Labour (PonyFireStone Remix)
*-* Art Of The Dress - Feat. Rarity (PonyFireStone Remix) 
*-* the Pony I Want to Be (PonyFireStone Remix)
*-* Let The Rainbow Remind You (PonyFireStone Remix)
</h5>
</pre>
</div>

<div id="kfp" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Knife Pony [4]

*-* Knife Pony - Something New
*-* Feather - Jealousy (Knife Pony Remix)
*-* Magic - Knife Pony
*-* Vylet Pony - Fall To The Clouds (Knife Pony Remix)
</h5>
</pre>
</div>

<div id="gmb" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
General Mumble [2]

*-* General Mumble - All Fine 
*-* General Mumble - Fluttershy is a Dubstep Robot
</h5>
</pre>
</div>

<div id="gmb" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
General Mumble [2]

*-* General Mumble - All Fine 
*-* General Mumble - Fluttershy is a Dubstep Robot
</h5>
</pre>
</div>

<div id="arc" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Archie [3]

*-* Archie - Back Again
*-* Hellberg - The Girl (Archie Remix) (feat. Cozi Zuehlsdorff)
*-* Archie - Back Again
</h5>
</pre>
</div>

<div id="ijt" class="city" style="display:none">
<pre id='vimCodeElement'>
<br>
<h5>
Injustrial [2]

*-* Injustrial - Watch in Awe
*-* Injustrial - The Day We Die
</h5>
</pre>
</div>

 <?php
$servername = "localhost";
$username = "username";
$password = "password";

try {
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE DATABASE myDBPDO";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "Database created successfully<br>";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?> 

<center style="color: #006622;">
<br /><br /><br /><br /><br /><br /><br /><br /><br />
<hr><p valign="bottom"><small>All rights reserved to Stake's Enterprise</small><sup>tm</sup>. @2017</p><hr>
</center>

<a href="#top"><button class="w3-transparent w3-display-topright w3-border-0" style="position:fixed;"><img src="https://cdn.pbrd.co/images/4OMBxalPU.jpg" /></button></a>
<a name="bot"></a>
</body>
</html>
