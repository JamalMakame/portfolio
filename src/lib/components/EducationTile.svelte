<script lang="ts">
   import { Heading, P } from "flowbite-svelte";
   export let tileTitle: string;
   export let tileSubtitle: string;
   export let duration: string;
   export let descriptionTitle: string;
   export let description: string;
</script>

<section class="grid grid-cols-3">
   <div class="col-span-1">
      <Heading tag="h5" class="text-4xl font-bold text-start">
         {tileTitle}
      </Heading>
      <div class="flex flex-row gap-x-11 items-start mt-7">
         <P>{tileSubtitle}</P>
         <div class="w-fit bg-yellowClr px-1 rounded-md">
            <P space="wide" weight="medium">{duration}</P>
         </div>
      </div>
   </div>
   <div class="col-span-2">
      <Heading tag="h5" class="text-4xl font-bold text-start"
         >{descriptionTitle}</Heading
      >
      <P
         class="text-base leading-normal text-gray-500 capitalize my-6 text-start"
         >{description}</P
      >
   </div>
</section>
