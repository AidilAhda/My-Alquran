<template>
  <div class="Assharh">
    <NavbarView />
  
  
  <div class="surah">
    <h1>Ash-Sharh<span>(Kelapangan)</span></h1>
        <button class="btn btn-primary btn-sm" @click.prevent="playSound(this.audio_files.audio_url)">
     <h3><span class="fa fa-play-circle-o"></span> Play Ash-Sharh</h3>
      </button>
    <div class="row">
      <div class="column left"> 
        <ol>
            <li v-for="arti in translations " :key="arti.id">
              {{arti.text}}
            </li>
          </ol>
        
          </div>
      <div class="column right"> 
         <ol>
            <li v-for="verse in verses" :key="verse.id">
              {{verse.text_uthmani}}
            </li>
          </ol>  
                 </div>
          </div>
    </div>
    </div>
        
         

</template>

<script>

import axios from 'axios'
import NavbarView from '@/components/NavbarView.vue'
import "../style/surah.css"

export default {
name:'AssharhView',
   components:{
    NavbarView
  },
  data(){
    return{
      verses: [],
      translations : [],
      audio_files:[]
      
    };
  },
  async mounted(){
    
    let resultVerses = await axios.get('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=94');
    this.verses = resultVerses.data.verses

    let resultArti = await axios.get('https://api.quran.com/api/v4/quran/translations/134?chapter_number=94')
    this.translations = resultArti.data.translations

  let resultAudio = await axios.get('https://api.quran.com/api/v4/chapter_recitations/7/94')
    this.audio_files = resultAudio.data.audio_file
},
methods:{
   playSound (sound) {
     if (sound) {
    var audio = new Audio(sound);
    audio.play();
  }
 
    }
}

}
</script>

