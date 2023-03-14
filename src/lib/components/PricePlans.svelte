<script>
   import CardsTile from "./CardsTile.svelte";

   import ServiceSection from "./ServiceSection.svelte";

   import ServiceTile from "./ServiceTile.svelte";

   import HeroSection from "./HeroSection.svelte";

   import { Img, Heading, P, Button, Card } from "flowbite-svelte";
   import webDev from "$lib/assets/images/coding.svg";
   import design from "$lib/assets/images/design.svg";
   import gameDev from "$lib/assets/images/game-development.svg";
   import mic from "$lib/assets/images/Microphone.svg";
   import photographer from "$lib/assets/images/Photographer.svg";
   //import design from "$lib/assets/images/design.svg";
</script>

<section class="flex flex-col justify-center items-center">
      <Heading tag="h1" class="text-4xl font-bold text-center">
         Price plans
      </Heading>
      <P
         class="text-base leading-normal text-gray-500 capitalize my-6 text-center"
         >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
         sint.<br /> Velit officia consequat duis enim velit mollit. lorem ipsum</P
      >
      <CardsTile />
   </section>

