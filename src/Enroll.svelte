<script>


import {islogin, nameAccount, accounts, mode, subject} from "./stores.js";

  

  function loggout() {
    if (confirm('คุณต้องการออกจากระบบใช่หรือไม่')==true){
      $islogin = false;
    }   
  }
  function main(){
    $mode = 'main'
  }
  function enroll() {
    $mode = 'enroll'
    
  }

  function change(index) {
    if (confirm('คุณต้องการยกเลิกการลงทะเบียนใช่หรือไม่')==true){
        $subject[index].status = false;
        $subject[index].students += 1;}
        $subject[index].history.splice($subject[index].history.indexOf($nameAccount), 1)
  }

  
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div class="container">
  <div class="name">รายวิชาที่ลงทะเบียน</div>
  
  <div class="right">
    <button on:click={main} class = 'nav1'>หน้าแรก</button>
    <button on:click={enroll} class = 'nav2'>รายชื่อโควต้าที่ลงทะเบียน</button>
    <button on:click={loggout} class = 'nav3'>ลงชื่อออก</button>
    <div class='namebox'>{$accounts[$nameAccount].name}</div>
    
  </div>
   
</div>




 <main>
  
  {#each $subject as {sub, students, status, nameSub},index}
   {#if (status)}
   
   <div class='boxSub'>
   <div class='sub'>{sub}</div>
   <div class='nameSub'>{nameSub}</div>
   <div class='students'>จำนวนที่นั่งคงเหลือ {students} ที่นั่ง</div> 
   <button on:click={()=>change(index)} class = 'click'>ยกเลิก</button>  
 </div>
   
   {/if}
    
    



  {/each}

   </main>
 

 













<style>




.container {
  width:100%;
  background-color: #ffffff;
  display: flex;
  align-items:center;
  justify-content:space-between;
  padding:15px;
  top:0px;
  
}

.name{
  width: 40%;
  display: flex;
  align-items: center; 

  
}

.right{
   width:50%;
  display: flex;
  align-items: center;
  margin-left:60px
}



.name{
  display:flex;
  align-items:center;
  font-size: 40px;
  font-weight: bold;
}

.nav1, .nav2, .nav3 {
  font-weight:bold;
  background-color: #000000;
  height: 3rem;
  padding: 0 1rem;
  border-radius :25px;
  color: white;
  display: flex;
  align-items:center;
  justify-content: center;
  margin: 10px;
  text-decoration:none;
}



.namebox{border: outset;
        border-color: #878787;
         font-weight:bold;
         font-size:20px;
         height: 3rem;
  padding: 0 1rem;
  color: black;
  display: flex;
  align-items:center;
  justify-content: center;
  margin-left: 50px;}

  













  main {
    background-color: #cccccc;
    font-family: kanit;
    
  }
</style>