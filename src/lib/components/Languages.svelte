<script lang="ts">
   import { Heading, Progressbar } from "flowbite-svelte";
</script>

<div class="flex flex-col justify-start space-x-2 w-full">
   <Heading class="mt-5 text-xl font-medium leading-tight text-black text-left">
      Languages
   </Heading>
   <div class="my-4">
      <Progressbar progress="98" labelOutside="Swahili" color="yellow"/>
   </div>
   <div class="my-4">
      <Progressbar progress="80" labelOutside="English" color="yellow"/>
   </div>
   <div class="my-4">
      <Progressbar progress="63" labelOutside="Arabic" color="yellow"/>
   </div>
</div>
