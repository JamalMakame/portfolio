<script>
   import EducationTile from "./EducationTile.svelte";

   import RecommendationSection from "./RecommendationSection.svelte";

   import PricePlans from "./PricePlans.svelte";

   import ServiceSection from "./ServiceSection.svelte";

   import HeroSection from "./HeroSection.svelte";

   import { Img, Heading, P, Button, Card, Rating, Hr } from "flowbite-svelte";
   //import design from "$lib/assets/images/design.svg";
</script>

<section class="flex flex-col justify-center items-center">
   <Heading tag="h1" class="text-4xl font-bold text-center">Education</Heading>
   <P class="text-base leading-normal text-gray-500 capitalize my-6 text-center"
      >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br
      /> Velit officia consequat duis enim velit mollit. lorem ipsum</P
   >
   <div
      class="bg-white-card-background dark:bg-dark-card-background flex flex-col justify-center items-start p-9 rounded-lg shadow-md w-full"
   >
      <EducationTile
         tileTitle="University of Toronto"
         tileSubtitle="Student"
         duration="Jan 1016 - Dec 2021"
         descriptionTitle="Certificate of web training"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus
      nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed
      amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et
      pellentesque. Molestie risus enim neque eget dui."
      />
      <Hr class="my-8" height="h-px" />
      <EducationTile
         tileTitle="Programming Course"
         tileSubtitle="Student"
         duration="Jan 1016 - Dec 2021"
         descriptionTitle="Certificate of web training"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus
      nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed
      amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et
      pellentesque. Molestie risus enim neque eget dui."
      />
      <Hr class="my-8" height="h-px" />
      <EducationTile
         tileTitle="Web developer courses"
         tileSubtitle="Student"
         duration="Jan 1016 - Dec 2021"
         descriptionTitle="Certificate of web training"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus
      nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed
      amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et
      pellentesque. Molestie risus enim neque eget dui."
      />
   </div>
</section>
