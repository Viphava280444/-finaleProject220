import {writable} from 'svelte/store';

let data = {'6410742032':{number: '6410742032', pin: '12102545',name: 'สิทธิภาคย์ ศรีสวัสดิ์' , },
            '6410742172':{number: '6410742172', pin: '24112545',
                         name: 'ฐิติรัตน์ รัตนพันธ์' ,},
          
            '6410742305':{number: '6410742305', pin: '08092545',
                         name: 'นายกัมปนาท พรหมวิเชียร' ,},

            '6410742495':{number: '6410742495', pin: '28042544',
                         name: 'วิภวา คล้ายสุวรรณ์',},
            
            '6410742065 ':{number: '6410742065 ', pin: '11092545', name: 'พัทธพล อภิชาตโชติกุล',},
           };

let subjects = [{sub:'CE100', students:'50',status:'', nameSub:'จริยธรรมสำหรับวิศวกร',history:[]}, 
               {sub:'CN101', students:'50',status:'', nameSub:'จริยธรรมสำหรับวิศวกร',history:[]}]
               
export const accounts = writable(data);
export const islogin = writable('');
export const nameAccount = writable('');
export const mode = writable('');
export const subject = writable(subjects);

