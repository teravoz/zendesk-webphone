
export default function createInstance(output) {
  return (url, ref) => {
    if (ref.current) {
      ref.current.src = url;
      console.debug(`Setting the output device with Label: ${output.label} and ID: ${output.deviceId}`);
      ref.current.setSinkId(output.deviceId)
        .then(() => console.debug(`Successfully set output device ${output.label} - ${output.deviceId} to the digit tones`))
        .catch((error) => {
          console.debug(`Failed to set the output device ${output.label} - ${output.deviceId} to the digit tones: ${error.message}`)
        });
      
      ref.current.volume = 0.05;
    }

    return ref.current;
  }
}