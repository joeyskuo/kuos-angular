import { Component, OnInit } from '@angular/core';
import responsiveVoice from '../../js/responsivevoice';
const http = require('http');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));


@Component({
  selector: 'sketches-audio',
  templateUrl: './sketches-audio.component.html',
  styleUrls: ['./sketches-audio.component.css']
})
export class SketchesAudioComponent {

  playIntro() {
    this.getJSON((json, err) => {
      if(err) {
        responsiveVoice.speak('error finding speechtext', 'US English Female', {volume: 0.3, rate: 0.9});
      } else {
        let speechText = `Connected to sketches game. Currently sketching ${json.word}. Guesses can be sent by just saying ${json.word} or 'guess, ${json.word}'.`;
        speechText += `I will keep listening for new guesses. Would you like to start playing?`;
        responsiveVoice.speak(speechText, 'US English Female', {volume: 0.3, rate: 0.9});
      }

    });
  }

  sendGuess() {
    this.getJSON((json, err) => {
      if(err) {
        responsiveVoice.speak('error finding speechtext', 'US English Female', {volume: 0.3, rate: 0.9});
      } else {
        let text = (<HTMLInputElement>document.getElementById('guess')).value;
        if(text == json.word){
          const music = new Audio('https://s3.amazonaws.com/sketchesgame/cor.mp3');
          music.volume = 0.3;
          music.play();
          let speechText = `${json.word} was correct!`;
          wait(1000).then(() => { responsiveVoice.speak(speechText, 'US English Female', {volume: 0.3, rate: 0.9}); }
          );
        } else {
          const music = new Audio('https://s3.amazonaws.com/sketchesgame/incor.mp3');
          music.volume = 0.3;
          music.play();

          let speechText = `The answer was ${json.word}.`;
          wait(1000).then(() => { responsiveVoice.speak(speechText, 'US English Female', {volume: 0.3, rate: 0.9}); }
          );
        }

      }

    });
  }

  playAnswer(){
    this.getJSON((json, err) => {
      if(err) {
        responsiveVoice.speak('error finding speechtext', 'US English Female', {volume: 0.3, rate: 0.9});
      } else {
        const music = new Audio('https://s3.amazonaws.com/sketchesgame/cor.mp3');
        music.volume = 0.3;
        music.play();
        const speechText = `${json.word} was correct!`;
        wait(1000).then(() => { responsiveVoice.speak(speechText, 'US English Female', {volume: 0.3, rate: 0.9}); }
        );
      }

    });
  }

  getJSON(callback) {
    const url = "http://sketchesgame.herokuapp.com/";
    let req = http.get(url, function(res) {

      let body = "";


      res.on('data', function(chunk){ // res = response
        body += chunk;
      });

      res.on('end', function(){ // end of chunks

        body = body.replace(/\\/g,'');
        let json = JSON.parse(body);
        callback(json);

      });

    });

    req.on('error', function(err) {
      callback('',err);
    });
  }
}
