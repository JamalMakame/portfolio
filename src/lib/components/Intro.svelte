<script lang="ts">
   import IntroTile from "./IntroTile.svelte";

   import SocialMediaComp from "./SocialMediaComp.svelte";

   import profileImage from "../assets/images/profile-picture.png";
   import { Avatar, Heading, Hr, P, Progressbar } from "flowbite-svelte";
</script>

<div class="flex flex-col w-full gap-y-3">
   <IntroTile>
      <span slot="left" class="text-white">Experience :</span>
      <span slot="right">5+</span>
   </IntroTile>
   <IntroTile>
      <span slot="left" class="text-white">Residence :</span>
      <span slot="right">Tanzania</span>
   </IntroTile>
   <IntroTile>
      <span slot="left" class="text-white">Freelance :</span>
      <P slot="right" color="text-blue-700 dark:text-yellow">available</P>
   </IntroTile>
   <IntroTile>
      <span slot="left" class="text-white">Address :</span>
      <span slot="right">Kwan Mchina</span>
   </IntroTile>
</div>
