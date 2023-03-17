<script>
   import PricePlans from "./PricePlans.svelte";

   import ServiceSection from "./ServiceSection.svelte";

   import HeroSection from "./HeroSection.svelte";

   import { Img, Heading, P, Button, Card, Rating } from "flowbite-svelte";
   //import design from "$lib/assets/images/design.svg";
</script>

<section class="flex flex-col justify-center items-center">
   <Heading tag="h1" class="text-4xl font-bold text-center">
      Recommendations
   </Heading>
   <P class="text-base leading-normal text-gray-500 capitalize my-6 text-center"
      >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br
      /> Velit officia consequat duis enim velit mollit. lorem ipsum</P
   >
   <div class="grid md:grid-cols-3 gap-x-3 xl:gap-x-9 mx-5">
      <!-- <div class="mb-6 lg:mb-0">
            <div
               class="bg-white-card-background dark:bg-dark-card-background block rounded-lg shadow-lg"
            >
               <div class="relative overflow-hidden bg-no-repeat bg-cover">
                  <img
                     src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                     class="w-full rounded-t-lg"
                     alt=""
                  />
                  <a href="#!">
                     <div
                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                     />
                  </a>
               </div>
               <div class="p-6">
                  <Heading class="text-lg font-bold mb-2">Halley Frank</Heading>
                  <Heading class="text-base font-medium  mb-4">
                     Marketing Specialist
                  </Heading>
                  <Rating
                     total={5}
                     rating={2.66}
                     divClass="flex flex-row text-yellowClr"
                  />
                  <P>
                     At vero eos et accusamus et iusto odio dignissimos ducimus
                     qui blanditiis praesentium accusamus voluptatum deleniti
                     atque corrupti.
                  </P>
               </div>
            </div>
         </div>

         <div class="mb-6 lg:mb-0">
            <div
               class="bg-white-card-background dark:bg-dark-card-background block rounded-lg shadow-lg"
            >
               <div class="relative overflow-hidden bg-no-repeat bg-cover">
                  <img
                     src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                     class="w-full rounded-t-lg"
                     alt=""
                  />
                  <a href="#!">
                     <div
                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                     />
                  </a>
               </div>
               <div class="flex flex-col px-6 py-3 justify-center items-center">
                  <Heading class="text-lg font-bold mb-2">John Doe</Heading>
                  <Heading class="text-base font-medium  mb-4"
                     >Web Developer</Heading
                  >
                  <Rating
                     total={5}
                     rating={1.66}
                     divClass="flex flex-row text-yellowClr"
                  />
                  <P>
                     Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                     placerat vulputate. Ut vulputate est non quam dignissim
                     elementum. Donec a ullamcorper diam.
                  </P>
               </div>
            </div>
         </div>

         <div class="mb-6 lg:mb-0">
            <div
               class="bg-white-card-background dark:bg-dark-card-background block rounded-lg shadow-lg"
            >
               <div class="relative overflow-hidden bg-no-repeat bg-cover">
                  <img
                     src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                     class="w-full rounded-t-lg"
                     alt=""
                  />
                  <a href="#!">
                     <div
                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                     />
                  </a>
               </div>
               <div class="flex flex-col px-6 py-3 justify-center items-center">
                  <Heading class="text-lg font-bold mb-2">Lisa Trey</Heading>
                  <Heading class="text-base font-medium  mb-4">
                     Public Relations
                  </Heading>
                  <Rating
                     total={5}
                     rating={4.8}
                     divClass="flex flex-row text-yellowClr"
                  />
                  <P>
                     Enim ad minima veniam, quis nostrum exercitationem ullam
                     corporis suscipit laboriosam, nisi ut aliquid commodi quis
                     nostrum minima.
                  </P>
               </div>
            </div>
         </div> -->
      <figure
         class="flex flex-col justify-center items-start p-9 text-start bg-white-card-background dark:bg-dark-card-background  rounded-lg shadow-md"
      >
         <blockquote
            class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400"
         >
            <h3 class="p-0 text-lg font-semibold text-gray-900 dark:text-white">
               Efficient Collaborating
            </h3>
            <p class="my-4 font-light">
               You have many examples that can be used to create a fast
               prototype for your team."
            </p>
         </blockquote>
         <figcaption class="flex justify-center items-center space-x-3">
            <img
               class="w-20 h-20 rounded-full"
               src="https://mdbootstrap.com/img/new/avatars/6.jpg"
               alt="joseph profile"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
               <div>Joseph McFall</div>
               <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                  CTO at Google
               </div>
            </div>
         </figcaption>
      </figure>
      <figure
         class="flex flex-col justify-center items-start p-9 text-start bg-white-card-background dark:bg-dark-card-background  rounded-lg shadow-md"
      >
         <blockquote
            class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400"
         >
            <h3 class="p-0 text-lg font-semibold text-gray-900 dark:text-white">
               Efficient Collaborating
            </h3>
            <p class="my-4 font-light">
               You have many examples that can be used to create a fast
               prototype for your team."
            </p>
         </blockquote>
         <figcaption class="flex justify-center items-center space-x-3">
            <img
               class="w-20 h-20 rounded-full"
               src="https://mdbootstrap.com/img/new/avatars/6.jpg"
               alt="joseph profile"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
               <div>Joseph McFall</div>
               <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                  CTO at Google
               </div>
            </div>
         </figcaption>
      </figure>
      <figure
         class="flex flex-col justify-center items-start p-9 text-start bg-white-card-background dark:bg-dark-card-background  rounded-lg shadow-md"
      >
         <blockquote
            class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400"
         >
            <h3 class="p-0 text-lg font-semibold text-gray-900 dark:text-white">
               Efficient Collaborating
            </h3>
            <p class="my-4 font-light">
               You have many examples that can be used to create a fast
               prototype for your team."
            </p>
         </blockquote>
         <figcaption class="flex justify-center items-center space-x-3">
            <img
               class="w-20 h-20 rounded-full"
               src="https://mdbootstrap.com/img/new/avatars/6.jpg"
               alt="joseph profile"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
               <div>Joseph McFall</div>
               <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                  CTO at Google
               </div>
            </div>
         </figcaption>
      </figure>
   </div>
</section>
