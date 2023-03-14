<script>
   import { Img, Heading, P, Button } from "flowbite-svelte";
   import shimmerIcons from "$lib/assets/images/Main menu.svg";
   import fullImage from "$lib/assets/images/jamal-full-image.png";
</script>

 <section
      class="bg-white-card-background dark:bg-dark-card-background shadow-lg rounded-md relative px-10 h-[467px] w-[970px] overflow-hidden"
   >
      <img src={shimmerIcons} alt="Shimmering Icons" class="absolute inset-0" />
      <section class=" absolute ">
         <div class="grid grid-cols-2 gap-x-7">
            <div class="col-span-1 mt-24">
               <Heading tag="h1">
                  I'm Jamal Makame <br />
                  <span class="text-yellowClr">Geo</span>physicist
               </Heading>
               <P
                  class="text-base leading-normal text-gray-500 capitalize my-6"
                  style="width: 424px; height: 88px;"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  volutpat feugiat placerat lobortis. Natoque rutrum semper sed
                  suspendisse nunc lectus.</P
               >
               <Button color="yellow" class="my-6">Hire Me</Button>
            </div>
            <div class="col-span-1 mt-0">
               <img
                  src={fullImage}
                  alt="Jamal Makame"
               />
            </div>
         </div>
      </section>
   </section>

