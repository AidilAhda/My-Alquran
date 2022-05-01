<template>
 
  <body>
    <div class="home">
    <NavbarView/>
    <section class="gambar">
      <img src="../assets/stars.png" id="stars" />
      <img src="../assets/stars2.png" id="stars2" />
      <img src="../assets/moon.png" id="moon" />
      <h2 id="text" >Alquran Digital</h2>
      <img src="../assets/rock.png" id="rock" />
      <img src="../assets/masjid.png" id="masjid " />
      <img src="../assets/bottom.png" id="bottom" />
      <img src="../assets/lamp.png" id="lamp" />
      
    </section>
    <div class="sec">
      <div class="container">
        <p>Seorang Muslim Harus Selalu Senantiasa <span class="typed-text">{{typeValue}}</span>
        <span class="cursor" :class="{'typing' : typeStatus}">&nbsp;</span>
        </p>
      </div>
    </div>
    
   <section class="third">
     <h1 class="judul">List Surah</h1>
     
    <Router-Link  style="text-decoration: none" to="/alfatihah">
     <div class="card">
     <div class="box" data-aos="fade-down-right" ><h2>Al-Fatihah</h2>
     </div>
     </div> 
     </Router-Link>

    <Router-Link  style="text-decoration: none" to="/annas">
     <div class="card">
     <div class="box" data-aos="fade-up-left" ><h2>An-Nas</h2>
     </div>
     </div> 
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alfalaq">
      <div class="card">
     <div class="box" data-aos="fade-down-right" ><h2>Al-Falaq</h2>
     </div>
     </div>
     </Router-Link>


      <Router-Link  style="text-decoration: none" to="/alihklas">
      <div class="card">
     <div class="box" data-aos="fade-up-left" ><h2>Al-Ikhlas</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/allahab">
      <div class="card">
     <div class="box" data-aos="fade-down-right" ><h2>Al-Lahab</h2></div>
     </div>
     </Router-Link>


      <Router-Link  style="text-decoration: none" to="/annasr">
      <div class="card">
     <div class="box" data-aos="fade-up-left" ><h2>An-Nasr</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alkafirun">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Al-Kafirun</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alkauthar">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Al-Kauthar</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/almaun">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Al-Ma'un</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alquraish">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Al-Quraish</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alfill">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Al-Fill</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alhumazah">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Al-Humazah</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alasr">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Al-'Asr</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/attakathur">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>At-Takathur</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alqariah">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Al-Qariah</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/aladiyat">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Al-'Adiyat</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alzalzalah">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Al-Zalzalah</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/albayyinah">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Al-Bayyinah</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alqadr">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Al-Qadr</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alalaq">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Al-'Alaq</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/attin">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>At-Tin</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/ashsharh">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>As-Sharh</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/adduha">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Ad-Duha</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/allail">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Al-Lail</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/ashshams">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Ash-Shams</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/albalad">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Al-Balad</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alfajr">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Al-Fajr</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alghasiyah">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Al-Ghasiyah</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alala">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Al-A'la</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/attariq">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>At-Tariq</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alburuj">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Al-Buruj</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alinshiqaq">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Al-Inshiqaq</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/almutaffifin">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>Al-Mutaffifin</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/alinfitar">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Al-Infitar</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/attakwir">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>At-Takwir</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/abasa">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>Abasa</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/annaziat">
      <div class="card">
     <div class="box" data-aos="fade-down-right"><h2>An-Naziat</h2></div>
     </div>
     </Router-Link>

      <Router-Link  style="text-decoration: none" to="/annaba">
      <div class="card">
     <div class="box" data-aos="fade-up-left"><h2>An-Naba'</h2></div>
     </div>
     </Router-Link>
     

   </section>
    </div>
  </body>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
export default {
  name:'HomeView',
   components:{
    NavbarView
  },
  data:() =>{
    return{
      typeValue : '',
      typeStatus:false,
      typeArray:['SHOLAT','BERSEDEKAH','MEMBACA AL-QURAN','BERINFAQ','BERSYUKUR'],
      typingSpeed:200,
      erasingSpeed:100,
      newTextDelay:2000,
      typeArrayIndex:0,
      charIndex :0

    }
  },
 
  methods:{
    typedText(){
      if (this.charIndex<this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) 
          this.typeStatus = true;

          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;

          setTimeout(this.typedText,this.typingSpeed);
        }else{
          this.typeStatus = false;
          setTimeout(this.eraseText,this.newTextDelay);

        
      }
    },
    eraseText(){
      if (this.charIndex > 0 ) {
         if (!this.typeStatus) 
          this.typeStatus = true;

          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1);
          this.charIndex -= 1;
          setTimeout(this.eraseText,this.erasingSpeed);
      }else{
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length) 
        this.typeArrayIndex = 0;

        setTimeout(this.typedText,this.typingSpeed + 1000);
          
        
      }
    }
    
    
  
  },
  created(){
    setTimeout(this.typedText,this.newTextDelay + 200);
  },
  mounted(){
    let stars = document.getElementById('stars');
    let stars2 = document.getElementById('stars2');
    let moon = document.getElementById('moon');
    let rock = document.getElementById('rock');
    let masjid = document.getElementById('masjid');
    let text =  document.getElementById('text');
    let header = document.getElementById("header");

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.bottom = value * 0.5 + '%';
  stars2.style.bottom = value * 0.35 + '%';
  moon.style.bottom = value * -0.5 + 'px';
  rock.style.bottom = value * -0.75 + 'px';
  masjid.style.bottom = value * -0.15 + 'px';

  text.style.right = -100 + value * 0.5 +'%';
  text.style.top = 50 + value * 0.1 +'%';

  header.style.top = value * 0.5 + 'px';
  
  
});
  }
}

</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rancho&display=swap");
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
 body{
  background: linear-gradient(#8b016a, #6f1159);
  min-height: 100vh;
  overflow-x: hidden;
}
section.gambar {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
section.gambar img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}
section.gambar img#lamp {
  mix-blend-mode: screen;
}
section.gambar img#masjid {
  transform: translateY(-20px);
}
.sec{
  position: relative;
  padding: 100px;
  background: #96283a;
  color: #fff;
}


#text {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 10vw;
  white-space: nowrap;
  text-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
  font-family: "Rancho", cursive;
}


/* Typed Text */
.container{
  display: flex;
  align-items: center;
}
.container p{
  font-size: 2rem;
  padding: 0.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-align: center;
  overflow: hidden;
}
.container p span.typed-text{
  font-weight: bold;
  color: #dd7732;
}
.container p span.cursor{
  display: inline-block;
  background-color: #ccc;
  margin-left: 0.1rem;
  width: 3px;
  animation: blink 1s infinite;
}
.container p span.cursor.typing{
  animation: none;
}

@keyframes blink{
  0%{
    background-color: #ccc;
  }
  49%{
    background-color:#ccc ;
  }
  50%{
    background-color: transparent;
  }
  99%{
    background-color: transparent;
  }
  100%{
    background-color: #ccc;
  }
}
/* Image Scroll */
section.third{
  position: relative;
  padding: 100px;
  background: #96283a;
  color: #fff;
  font-family: 'roboto',sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  overflow-x:hidden ;
}
h1.judul{
  margin: 10px;
  font-size: 44px;
}
.box{
  background: url(../assets/A.jpg);
  color: #fff;
  display: flex;
  align-items: center;
  justify-items: center;
  width: 350px;
  height: 200px;
  margin: 10px;
  border-radius: 6px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3) ;
 transition: all 0.3s ease-in-out;
  cursor: pointer;
  
}
.box:hover{
  width: 445px;
}
.card{
  text-decoration: none;
}
.box.show{
  transform: translateX(0);
}
.box h2{
  font-size: 55px;
  padding-left: 93px;
  font-family: "Rancho", cursive;
}


</style>
