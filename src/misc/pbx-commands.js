function split(cmd) {
  const splitted = cmd.split('*');
  
  const clean = [];
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i]) {
      clean.push(splitted[i]);
    }
  }
  
  if (clean.length >= 1) {
    return { number: clean[0] };
  } 

  return null;
}

function which(number) {
  if (number == '10') {
    return 'Logando na(s) fila(s)';
  } else if (number == '11') {
    return 'Deslogando da(s) fila(s)';
  } else if (number == '21') {
    return 'Despausando da(s) fila(s)';
  } else if (number == '20') {
    return 'Pausando na(s) fila(s)';
  } else if (number == '94') {
    return 'Ouvindo ligação';
  }

  return null;
}

export default function getCommand(cmd) {
  const separated = split(cmd);

  if (!separated) {
    return null;
  } else {
    return which(separated.number);
  }
}