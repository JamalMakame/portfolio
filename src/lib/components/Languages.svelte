<script lang="ts">
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
            Languages
         </Heading>
         <div class="my-4">
            <Progressbar progress="98" labelOutside="Swahili" />
         </div>
         <div class="my-4">
            <Progressbar progress="80" labelOutside="English" />
         </div>
         <div class="my-4">
            <Progressbar progress="63" labelOutside="Arabic" />
         </div>
      </div>

