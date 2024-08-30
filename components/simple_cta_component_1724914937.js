<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 py-16" style=""><div id="cta-inner-container" class="max-w-screen-xl px-4 mx-auto" style=""><div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8" style=""><div id="cta-title-container" class="flex mb-6"><h2 id="cta-title" class="flex-1 text-3xl font-extrabold leading-tight tracking-tight text-white" style="" data-mf-new="true">
                        Unlock Your Cosmic Potential's</h2></div> <div id="cta-subtitle-container" class="flex mb-8"><p id="cta-subtitle" class="flex-1 font-light text-pink-100 md:text-lg" style="">
                        Embark on a surreal journey of knowledge. Our app transforms learning into a vibrant, otherworldly experience.
                    </p></div> <div id="cta-button-container" class="flex"><a id="cta-button" href="#" class="flex-1 text-purple-800 bg-pink-300 hover:bg-pink-400 focus:ring-4 focus:ring-pink-200 font-medium rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105"><i class="bx bx-rocket mr-2"></i>
                        Launch Your Learning Odyssey
                    </a></div></div></div></section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
