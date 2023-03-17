<script lang="ts">
   import "../app.css";
   import type { PageData } from "./$types";
   import { onMount } from "svelte";
   import { DarkMode, Drawer, CloseButton } from "flowbite-svelte";
   import { sineIn } from "svelte/easing";
   import Drawa from "$lib/features/Drawa.svelte";

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
<section class="grid grid-cols-5 w-full mx-auto ">
   <section
      class="col-span-1  bg-white-card-background dark:bg-dark-card-background h-fit p-4 rounded-lg shadow-md mx-2"
   >
      <Drawa />
   </section>
   <section class="col-span-4">
      <slot />
   </section>
</section>
