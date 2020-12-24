function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}

console.log(rgbToHex(173,255,47))

//Solution 

function rgb(r, g, b){
    return toHex(r)+toHex(g)+toHex(b);
  }
  
  function toHex(d) {
      if(d < 0 ) {return "00";}
      if(d > 255 ) {return "FF";}
      return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
  }
  //////
  function rgb(r, g, b){
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
  }
  ////////
  function rgb(r, g, b){
    function toHex(a) { 
      if (a <= 0) return '00';
      else if (a >= 255) return 'FF';
      else return a.toString(16).toUpperCase();
    }
    return toHex(r) + toHex(g) + toHex(b);
  }


  ////////
  let rgb = (r, g, b) => [r,g,b].map( (item) => item>=255 ? 'FF' : item<=0 ? '00' : item.toString(16).toUpperCase()).join('')