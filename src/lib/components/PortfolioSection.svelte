<script>
   import WorkHistorySection from "./WorkHistorySection.svelte";
   import EducationSection from "./EducationSection.svelte";
   import RecommendationSection from "./RecommendationSection.svelte";
   import PricePlans from "./PricePlans.svelte";
   import ServiceSection from "./ServiceSection.svelte";
   import HeroSection from "./HeroSection.svelte";
   import { Heading, P, Tabs, TabItem, Card, Button } from "flowbite-svelte";
</script>

<section class="flex flex-col justify-center items-center">
   <Heading tag="h1" class="text-4xl font-bold text-center">Portfolio</Heading>
   <P
      class="text-base leading-normal text-gray-500 capitalize my-6 text-center "
      >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br
      /> Velit officia consequat duis enim velit mollit. lorem ipsum</P
   >
   <div
      class=" flex flex-col justify-center items-start p-9 rounded-lg w-full"
   >
      <Tabs
         contentClass=""
         defaultClass="flex flex-wrap space-x-9"
         divider
         activeClasses="p-3 rounded-lg text-black dark:text-white bg-yellowClr font-semibold"
         inactiveClasses="p-4 text-black dark:text-white rounded-lg  font-semibold"
      >
         <TabItem open>
            <span slot="title">All Categories</span>
            <div
               class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5"
            >
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
            </div>
         </TabItem>
         <TabItem>
            <span slot="title">UI Design</span>
            <div
               class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5"
            >
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
            </div>
         </TabItem>
         <TabItem>
            <span slot="title">Web Templates</span>
            <div
               class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5"
            >
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
            </div>
         </TabItem>
         <TabItem>
            <span slot="title">Logo</span>
            <div
               class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5"
            >
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <div class="flex justify-center">
                  <div
                     class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
                  >
                     <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                     >
                        <img
                           class="rounded-t-lg"
                           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
            </div>
         </TabItem>
      </Tabs>
   </div>
</section>
