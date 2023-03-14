<script lang="ts">
   import HeroSection from "./HeroSection.svelte";

   import { Card, Heading, Img, P } from "flowbite-svelte";
   export let image: string;
   export let heading: string;
   export let paragraph: string;
</script>

<Card
   class="col-span-1 bg-white-card-background dark:bg-dark-card-background flex flex-col justify-center items-center py-5 rounded-lg"
>
   <Img src={image} alt="Web Development Icon" />
   <Heading tag="h6" class="text-2xl font-bold text-center mt-5">
      {heading}
   </Heading>
   <P
      class="text-base leading-normal text-paragraph-font capitalize my-6 text-center"
      >{paragraph}</P
   >
</Card>
