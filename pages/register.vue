<template>
    <div class="flex bg-black h-screen">
        <!--sidebar-->
        <div class="flex flex-col justify-center bg-zinc-900 p-8 w-[516px]">
            <Logo/>  
            <h1 class="mt-8 text-white font-bold text-lg">Sign up for a free account</h1>  
            <p class="text-zinc-300 text-sm mt-0.5">
                Already registered?
                <nuxt-link to="/login" class="font-bold text-[#FFAC00] underline"
                >Log in</nuxt-link>
                to your account
            </p>
            <div class="mt-8">
                <label for="" class="mb-0.5 block text-zinc-300 font-normal text-sm">Email address</label>
                <input type="email" class="block w-full bg-zinc-700 border-[#3F3F46] rounded text-white px-4 py-2 placeholder:text-zinc-500 text-sm " placeholder="you@example.com">
            </div>
            <div class="mt-6">
                <label for="password" class="mb-0.5 block text-zinc-300 font-normal text-sm">Password</label>
                <input type="password" class="block w-full bg-zinc-700 border-[#3F3F46] rounded text-white px-4 py-2 placeholder:text-zinc-500 text-sm " placeholder="*********************">
            </div>
             <!-- Signup button -->
        <div>
            <button class="w-full mt-4 bg-[#FFAC00] rounded-full px-4 py-2 text-sm font-bold flex justify-center items-center space-x-2">
                Sign up 
                <ArrowRight/>
            </button>
        </div>
        <!-- /Signup button -->
        </div>
       
        <!--/sidebar-->
        <!-- Note introduction-->
         <div>

         </div>
        <!-- /Note introduction-->
    </div>
</template>