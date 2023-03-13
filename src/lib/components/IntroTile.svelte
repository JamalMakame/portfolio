<script lang="ts">
   import SocialMediaComp from "./SocialMediaComp.svelte";

   import profileImage from "../assets/images/profile-picture.png";
   import { Heading, Hr, P } from "flowbite-svelte";
</script>

<div class="flex flex-row justify-between">
   <div class="w-fit bg-blue-700 p-1 rounded-lg">
      <P space="wide" weight="medium"><slot name="left" /></P>
   </div>
   <P weight="medium"><slot name="right" /></P>
</div>
