<script>
  
  import {accounts, islogin, nameAccount, mode, subject} from "./stores.js";

  let accountNo = '';
  let pin = '';

  function checkLogin() {
    if (!(accountNo in $accounts) || $accounts[accountNo].pin != pin) {
    alert('คุณกรอก เลขทะเบียน หรือ รหัสผ่าน ของคุณไม่ถูกต้อง');
      
  }
    else {
      $nameAccount = accountNo;
      $islogin = true;
      accountNo = '';
      pin = '';
      $mode = 'main';
      
       for (let x in $subject)  {
             if ($subject[x].history.includes($nameAccount)){
                $subject[x].status = true
              } else {
                $subject[x].status = false}}
  }
  
  }


  

</script>

    <div class='login'>
    <label class="label"><b>ลงชื่อเข้าใช้</b></label><br>
    <input bind:value={accountNo} placeholder="เลขทะเบียน"><br>
    <input type="password" bind:value={pin} placeholder="รหัสผ่าน"><br>
    <button on:click={checkLogin}>LOGIN</button>

    </div>  





  <style>

    .lable, input, button{margin:5px}
    
  </style>