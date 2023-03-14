<script>
   import ServiceSection from "./ServiceSection.svelte";

   import ServiceTile from "./ServiceTile.svelte";

   import HeroSection from "./HeroSection.svelte";

   import { Img, Heading, P, Button, Card } from "flowbite-svelte";
   import webDev from "$lib/assets/images/coding.svg";
   import design from "$lib/assets/images/design.svg";
   import gameDev from "$lib/assets/images/game-development.svg";
   import mic from "$lib/assets/images/Microphone.svg";
   import photographer from "$lib/assets/images/Photographer.svg";
   //import design from "$lib/assets/images/design.svg";
</script>

<Card
      padding="xl"
      class="bg-white-card-background dark:bg-dark-card-background"
   >
      <h5 class="mb-4 text-2xl font-extrabold text-yellowClr text-center">
         Silver
      </h5>
      <div class="flex items-baseline text-dark-font dark:text-white flex-row justify-center">
         <span class="text-3xl font-semibold">$</span>
         <span class="text-5xl font-extrabold tracking-tight">0.00</span>
         <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"
            >/Hour</span
         >
      </div>
      <!-- List -->
      <ul class="my-7 space-y-4">
         <li class="flex space-x-2">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 text-yellowClr "
               ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               /></svg
            >
            <span
               class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
               >2 team members</span
            >
         </li>
         <li class="flex space-x-2">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 text-yellowClr "
               ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               /></svg
            >
            <span
               class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
               >20GB Cloud storage</span
            >
         </li>
         <li class="flex space-x-2">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 text-yellowClr "
               ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               /></svg
            >
            <span
               class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
               >Integration help</span
            >
         </li>
         <li class="flex space-x-2 line-through decoration-gray-500">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 text-yellowClr "
               ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               /></svg
            >
            <span class="text-base font-normal leading-tight text-gray-500"
               >Sketch Files</span
            >
         </li>
         <li class="flex space-x-2 line-through decoration-gray-500">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 text-yellowClr "
               ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               /></svg
            >
            <span class="text-base font-normal leading-tight text-gray-500"
               >API Access</span
            >
         </li>
         <li class="flex space-x-2 line-through decoration-gray-500">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 text-yellowClr "
               ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               /></svg
            >
            <span class="text-base font-normal leading-tight text-gray-500"
               >Complete documentation</span
            >
         </li>
         <li class="flex space-x-2 line-through decoration-gray-500">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6 text-yellowClr "
               ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               /></svg
            >
            <span class="text-base font-normal leading-tight text-gray-500"
               >24×7 phone & email support</span
            >
         </li>
      </ul>
      <Button class="w-full" color="yellow">Order Now</Button>
   </Card>

