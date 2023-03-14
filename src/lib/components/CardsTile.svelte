<script>
   import DiamondCard from "./DiamondCard.svelte";

   import GoldCard from "./GoldCard.svelte";

   import SilverCard from "./SilverCard.svelte";

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

<section class="flex flex-row gap-x-4">
   <SilverCard />
   <GoldCard />
   <DiamondCard />
</section>
