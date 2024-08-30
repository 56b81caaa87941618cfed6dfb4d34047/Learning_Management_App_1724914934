<!--
INSTRUCTION: Summary: This component contains the app's logo and name in a large, bold font, and on the same line.
INSTRUCTION: There is an additional line of subtext underneath the first line.
INSTRUCTION: Both of these lines are center aligned.
-->

<template>
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-400 to-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <hr id="footer-divider" class="my-6 border-pink-300 sm:mx-auto lg:my-8">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition duration-300">
                        <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                        EduQuest
                    </a>
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div id="footer-text" class="flex-1 block text-sm text-center md:text-left text-white mb-4 md:mb-0">
                    © 2023 EduQuest. Empowering learners, one quest at a time. All rights reserved.
                </div>
                <div class="flex-1 flex justify-center md:justify-end">
                    <button @click="sayHello" class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        <i class='bx bx-message-alt-dots mr-2'></i>Hello
                    </button>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
    methods: {
        // Hello button method
        sayHello() {
            alert('Hello!');
        }
        // End of Hello button method
    }
}
</script>
