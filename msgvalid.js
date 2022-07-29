function isAValidMessage(message) {
    let num = [];
    let sum = 0;
    let r = /\d/;
    let res = false;
  
    let numarr = message.split(/[a-z]/g);
    for (let i = 0; i < numarr.length; i++) {
      if (numarr[i].match(/\d/)) {
         num.push(numarr[i])
      }
    }
    num.map((elem) => {
      sum += parseInt(elem, 10)
    })
    let strarr = message.split(/\d/)
    let fullstr = strarr.join('')
    if (sum === fullstr.length && parseInt((message.charAt(0))) || message === '') {
      return res = true;
    }
    return res;
  }

  console.log(isAValidMessage("2hi4hell"))
