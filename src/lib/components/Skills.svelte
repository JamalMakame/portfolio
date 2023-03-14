<script lang="ts">
  import Languages from './Languages.svelte';

  import Intro from './Intro.svelte';

   import IntroTile from "./IntroTile.svelte";

   import SocialMediaComp from "./SocialMediaComp.svelte";

   import profileImage from "../assets/images/profile-picture.png";
   import { Avatar, Heading, Hr, P, Progressbar } from "flowbite-svelte";
</script>

 <div class="flex flex-col justify-start space-x-2 w-full">
         <Heading
            class="mt-5 text-xl font-medium leading-tight text-black text-left"
         >
            Skills
         </Heading>
         <div class="my-4">
            <Progressbar progress="90" labelOutside="Html & CSS" color="yellow"/>
         </div>
         <div class="my-4">
            <Progressbar progress="85" labelOutside="JavaScript" color="yellow"/>
         </div>
         <div class="my-4">
            <Progressbar progress="80" labelOutside="TypeScript" color="yellow"/>
         </div>
         <div class="my-4">
            <Progressbar progress="75" labelOutside="Dart" color="yellow"/>
         </div>
         <div class="my-4">
            <Progressbar progress="85" labelOutside="Flutter" color="yellow" labelInsideClass="text-yellowClr"/>
         </div>
      </div>

