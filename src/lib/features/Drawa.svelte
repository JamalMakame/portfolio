<script lang="ts">
   import ProfilePic from "../components/ProfilePic.svelte";

   import ExtraSkills from "../components/ExtraSkills.svelte";

   import Skills from "$lib/components/Skills.svelte";

   import Languages from "$lib/components/Languages.svelte";

   import Intro from "$lib/components/Intro.svelte";

   import passport from "$lib/assets/temp/Passport.png";
   import { Button, Hr } from "flowbite-svelte";
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
      <Button href={passport} download="jamal's passport" color="yellow">Download CV</Button>
   </aside>
</section>
