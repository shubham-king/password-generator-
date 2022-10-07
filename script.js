// gernate password system

var el_down = document.getElementById("passwordBox");
  
/* Function to generate combination of password */
function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '%*&!@#$';
      
    for (let i = 1; i <= 5; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
      
    return pass;
}

function gfg_Run() {
    el_down.value = generateP() + '$' + generateP();
}

// copy system

function copy() {
   el_down.select();
   el_down.setSelectionRange(0, 999);
   navigator.clipboard.writeText(el_down.value);
   }
