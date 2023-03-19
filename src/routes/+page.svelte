<script lang="ts">
   import Drawa from "$lib/features/Drawa.svelte";
   import MainBody from "../lib/features/MainBody.svelte";
</script>

<section class="grid grid-cols-5 w-full mx-auto ">
   <section
      class="col-span-1  bg-white-card-background dark:bg-dark-card-background h-fit p-4 rounded-lg shadow-md mx-2"
   >
      <Drawa />
   </section>
   <section class="col-span-4">
      <MainBody />
   </section>
</section>
