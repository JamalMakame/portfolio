<script>
   import LogoCloudSection from "$lib/components/LogoCloudSection.svelte";

   import ContactSection from "$lib/components/ContactSection.svelte";

   import BlogSection from "$lib/components/BlogSection.svelte";

   import PortfolioSection from "$lib/components/PortfolioSection.svelte";

   import WorkHistorySection from "$lib/components/WorkHistorySection.svelte";
   import EducationSection from "$lib/components/EducationSection.svelte";
   import RecommendationSection from "$lib/components/RecommendationSection.svelte";
   import PricePlans from "$lib/components/PricePlans.svelte";
   import ServiceSection from "$lib/components/ServiceSection.svelte";
   import HeroSection from "$lib/components/HeroSection.svelte";
   import { Heading, P, Tabs, TabItem } from "flowbite-svelte";
</script>

<section class="m-6 flex flex-col gap-y-32">
   <HeroSection />
   <ServiceSection />
   <PricePlans />
   <RecommendationSection />
   <EducationSection />
   <WorkHistorySection />
   <PortfolioSection />
   <BlogSection />
   <ContactSection />
   <LogoCloudSection />
</section>
