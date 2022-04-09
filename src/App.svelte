<script>

import Login from "./Login.svelte";
import {islogin, mode} from "./stores.js";
import Menu from "./Menu.svelte";
import Enroll from "./Enroll.svelte";
  
 


  
</script>


{#if !$islogin}
  <Login />
  {:else}
        {#if $mode == 'main'}
        <Menu />
        {:else if $mode == 'enroll'}
        <Enroll />
     {/if}     
  {/if}

