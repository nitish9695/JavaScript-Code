let calculation =localStorage.getItem('calculation') || '';
      showOnScreen(calculation);
      
      function updateCalculation(button){
        if (button === '1'){
          calculation += '1';
        }else if (button === '2'){
          calculation += '2';
        }else if (button === '3'){
          calculation += '3';
        }else if (button === '4'){
          calculation += '4';
        }else if (button === '5'){
          calculation += '5';
        }else if (button === '6'){
          calculation += '6';
        }else if (button === '7'){
          calculation += '7';
        }else if (button === '8'){
          calculation += '8';
        }else if (button === '9'){
          calculation += '9';
        }else if (button === '0'){
          calculation += '0';
        }else if (button === '+'){
          calculation += ' + ';
        }else if (button === '-'){
          calculation += ' - ';
        }else if (button === '*'){
          calculation += ' * ';
        }else if (button === '/'){
          calculation += ' / ';
        }else if (button === '.'){
          calculation += '.';
        }else if (button === '='){
          calculation = eval(calculation);          
        }
        localStorage.setItem('calculation', calculation);        
        showOnScreen(calculation);        
      }
      function showOnScreen(cal){        
        document.querySelector('.js-screen').innerHTML = cal;
      }