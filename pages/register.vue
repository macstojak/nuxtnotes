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
            <form @submit.prevent="submit">
                <div class="mt-8">
                    <label for="email" class="mb-0.5 block text-zinc-300 font-normal text-sm">Email address</label>
                    <input id="email" type="email" v-model="email" class="block w-full bg-zinc-700 border-[#3F3F46] rounded text-white px-4 py-2 placeholder:text-zinc-500 text-sm " placeholder="you@example.com">
                </div>
                <div class="mt-6">
                    <label for="password" class="mb-0.5 block text-zinc-300 font-normal text-sm">Password</label>
                    <input id="password" type="password" v-model="password" class="block w-full bg-zinc-700 border-[#3F3F46] rounded text-white px-4 py-2 placeholder:text-zinc-500 text-sm " placeholder="*********************">
                </div>
                <!-- Signup button -->
                <div>
                    <button
                        class="w-full mt-4 bg-[#FFAC00] rounded-full px-4 py-2 text-sm font-bold flex justify-center items-center space-x-2"
                    >
                        <span>Sign Up</span>
                        <ArrowRight />
                    </button>
                </div>
            <!-- /Signup button -->
        </form>
        </div>
       
        <!--/sidebar-->
        <!-- Note introduction-->
         <div>

         </div>
        <!-- /Note introduction-->
    </div>
</template>

<script setup>
import Swal from "sweetalert2"
const email = ref("");
const password = ref("");

async function submit() {
    try{
        const response = await $fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        });
        const {isConfirmed} = await Swal.fire("Success", "Account created successfully!", "success");
        if(isConfirmed){
            navigateTo('/');
        }
    } catch (error) {
        Swal.fire("Error",error.response?._data?.message, "error");
    }
}
</script>