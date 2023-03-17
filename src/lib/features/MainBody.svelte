<script>
   import WorkHistorySection from "../components/WorkHistorySection.svelte";

   import EducationSection from "../components/EducationSection.svelte";

   import RecommendationSection from "../components/RecommendationSection.svelte";

   import PricePlans from "../components/PricePlans.svelte";

   import ServiceSection from "../components/ServiceSection.svelte";

   import HeroSection from "../components/HeroSection.svelte";

   import { Img, Heading, P, Button, Card, Rating, Hr } from "flowbite-svelte";
   import EducationTile from "../components/EducationTile.svelte";
   //import design from "$lib/assets/images/design.svg";
</script>

<section class="m-6 flex flex-col gap-y-32">
   <HeroSection />
   <ServiceSection />
   <PricePlans />
   <RecommendationSection />
   <EducationSection />
   <WorkHistorySection />
</section>
