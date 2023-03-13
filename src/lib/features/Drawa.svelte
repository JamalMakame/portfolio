<script lang="ts">
   import ProfilePic from "../components/ProfilePic.svelte";

   import ExtraSkills from "../components/ExtraSkills.svelte";

   import Skills from "$lib/components/Skills.svelte";

   import Languages from "$lib/components/Languages.svelte";

   import Intro from "$lib/components/Intro.svelte";

   import IntroTile from "$lib/components/IntroTile.svelte";

   import SocialMediaComp from "$lib/components/SocialMediaComp.svelte";

   import profileImage from "$lib/assets/images/profile-picture.png";
   import icon from "$lib/assets/images/Icons.svg";
   import passport from "$lib/assets/temp/Passport.png";
   import {
      Avatar,
      Button,
      Heading,
      Hr,
      P,
      Progressbar,
   } from "flowbite-svelte";
</script>

<section>
   <aside class="flex flex-col items-center ">
      <ProfilePic />
      <Hr class="my-2 mx-auto md:my-10" width="w-52" height="h-1" />
      <Intro />
      <Hr class="my-2 mx-auto md:my-10" width="w-52" height="h-1" />
      <Languages />
      <Hr class="my-2 mx-auto md:my-10" width="w-52" height="h-1" />
      <Skills />
      <Hr class="my-2 mx-auto md:my-10" width="w-52" height="h-1" />
      <ExtraSkills />
      <Hr class="my-2 mx-auto md:my-10" width="w-52" height="h-1" />
      <Button href={passport} download="jamal's passport"
         >Download CV</Button
      >
   </aside>
</section>
