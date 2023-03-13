<script lang="ts">
   import Skills from "$lib/components/Skills.svelte";

   import Languages from "$lib/components/Languages.svelte";

   import Intro from "$lib/components/Intro.svelte";

   import IntroTile from "$lib/components/IntroTile.svelte";

   import SocialMediaComp from "$lib/components/SocialMediaComp.svelte";

   import profileImage from "$lib/assets/images/profile-picture.png";
   import icon from "$lib/assets/images/Icons.svg";
   import { Avatar, Heading, Hr, P, Progressbar } from "flowbite-svelte";
</script>

<div class="flex flex-col justify-start space-x-2 w-full">
   <Heading class="mt-5 text-xl font-medium leading-tight text-black text-left">
      Extra Skills
   </Heading>
   <div class="flex flex-row space-x-3 py-3">
      <img src={icon} alt="SVG" />
      <P weight="medium"><slot name="right" />Stylus, Sass, Less</P>
   </div>
   <div class="flex flex-row space-x-3 py-3">
      <img src={icon} alt="SVG" />
      <P weight="medium"><slot name="right" />Materialize,Bootstrap</P>
   </div>
   <div class="flex flex-row space-x-3 py-3">
      <img src={icon} alt="SVG" />
      <P weight="medium"><slot name="right" />Gulp, Webpack, Grunt</P>
   </div>
   <div class="flex flex-row space-x-3 py-3">
      <img src={icon} alt="SVG" />
      <P weight="medium"><slot name="right" />GIT Knowledge</P>
   </div>
</div>
