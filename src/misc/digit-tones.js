
function createInstance(url) {
  const audio = new Audio(url);
  audio.volume = 0.05;
  return audio;
}

export default function getTones() {
  return {
    '0': createInstance(`${process.env.SOUND_BASE_PATH}/0.mp3`),
    '1': createInstance(`${process.env.SOUND_BASE_PATH}/1.mp3`),
    '2': createInstance(`${process.env.SOUND_BASE_PATH}/2.mp3`),
    '3': createInstance(`${process.env.SOUND_BASE_PATH}/3.mp3`),
    '4': createInstance(`${process.env.SOUND_BASE_PATH}/4.mp3`),
    '5': createInstance(`${process.env.SOUND_BASE_PATH}/5.mp3`),
    '6': createInstance(`${process.env.SOUND_BASE_PATH}/6.mp3`),
    '7': createInstance(`${process.env.SOUND_BASE_PATH}/7.mp3`),
    '8': createInstance(`${process.env.SOUND_BASE_PATH}/8.mp3`),
    '9': createInstance(`${process.env.SOUND_BASE_PATH}/9.mp3`),
    '*': createInstance(`${process.env.SOUND_BASE_PATH}/5.mp3`),
    '#': createInstance(`${process.env.SOUND_BASE_PATH}/6.mp3`),
    '+': createInstance(`${process.env.SOUND_BASE_PATH}/0.mp3`)
  }
}