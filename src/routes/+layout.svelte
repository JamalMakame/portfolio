<script lang="ts">
   import "../app.css";
   import type { PageData } from "./$types";
   import { onMount } from "svelte";
   import { DarkMode, Drawer, CloseButton } from "flowbite-svelte";
   import { sineIn } from "svelte/easing";
   import LeftArm from "$lib/features/Drawa.svelte";

   let transitionParams = {
      x: -320,
      duration: 200,
      easing: sineIn,
   };
   export let data: PageData;

   let breakPoint: number = 1024;
   let width: number;
   let backdrop: boolean = false;
   let activateClickOutside = true;
   let drawerHidden: boolean = false;
   $: if (width >= breakPoint) {
      drawerHidden = false;
      activateClickOutside = false;
   } else {
      drawerHidden = true;
      activateClickOutside = true;
   }
   onMount(() => {
      if (width >= breakPoint) {
         drawerHidden = false;
         activateClickOutside = false;
      } else {
         drawerHidden = true;
         activateClickOutside = true;
      }
   });
   const toggleSide = () => {
      if (width < breakPoint) {
         drawerHidden = !drawerHidden;
      }
   };
   const toggleDrawer = () => {
      drawerHidden = false;
   };

   let darkmodebtn =
      "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-2 top-12  md:top-3 md:right-2 z-50";
</script>

<svelte:window bind:innerWidth={width} />

<DarkMode btnClass={darkmodebtn} />
<Drawer
   transitionType="fly"
   {backdrop}
   {transitionParams}
   bind:hidden={drawerHidden}
   bind:activateClickOutside
   width="w-72"
   class="overflow-scroll pb-32 shadow-2xl"
   id="sidebar"
   divClass="overflow-y-auto z-50 p-4 bg-white-card-background dark:bg-dark-card-background"
   
>
   <div class="flex items-center">
      <CloseButton
         on:click={() => (drawerHidden = true)}
         class="mb-4 dark:text-white lg:hidden"
      />
   </div>
   <LeftArm />
</Drawer>

<div class="flex px-4 mx-auto w-full">
   <main class="lg:ml-72 w-full mx-auto">
      <slot />
   </main>
</div>
