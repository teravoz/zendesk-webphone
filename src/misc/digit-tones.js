import zero from '../assets/audio/phone/0.mp3';
import one from '../assets/audio/phone/1.mp3';
import two from '../assets/audio/phone/2.mp3';
import three from '../assets/audio/phone/3.mp3';
import four from '../assets/audio/phone/4.mp3';
import five from '../assets/audio/phone/5.mp3';
import six from '../assets/audio/phone/6.mp3';
import seven from '../assets/audio/phone/7.mp3';
import eight from '../assets/audio/phone/8.mp3';
import nine from '../assets/audio/phone/9.mp3';


export default function getTones() {
  return {
    '0': new Audio(zero),
    '1': new Audio(one),
    '2': new Audio(two),
    '3': new Audio(three),
    '4': new Audio(four),
    '5': new Audio(five),
    '6': new Audio(six),
    '7': new Audio(seven),
    '8': new Audio(eight),
    '9': new Audio(nine),
    // Reusing sounds for *, # and +
    '*': new Audio(five),
    '#': new Audio(six),
    '+': new Audio(zero)
  }
}