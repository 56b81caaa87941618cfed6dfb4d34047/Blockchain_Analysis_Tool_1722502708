/* Summary: Contains a section with a fixed left-side dark blue component container with a blur effect.
It contains three left aligned pieces of text:
- Blue text appearing above the hero title
- The white hero title as a heading
- The grey hero sub text below it
*/
Vue.component("fixed_left_side_hero_component_1722502711", {
    template: `
    <section id="left-side-hero-component">
    <div id="left-content" class="relative w-full lg:w-1/2 lg:fixed lg:inset-0 lg:overflow-y-auto no-scrollbar lg:rounded-r-3xl bg-gradient-to-br from-purple-600/30 to-pink-500/30 backdrop-blur-xl backdrop-filter">
        <!-- Background Illustration -->
        <div id="bg-illustration" class="absolute top-0 -translate-y-64 left-1/2 -translate-x-1/2 blur-3xl pointer-events-none" aria-hidden="true">
            <img class="max-w-none" src="./images/bg-illustration.svg" width="785" height="685" alt="Bg illustration">
        </div>
        <div class="min-h-full w-full max-w-xl mx-auto flex px-6 sm:px-8 pt-40 pb-24 lg:py-24">
            <div class="min-h-full w-full max-w-xl mx-auto flex flex-col justify-start px-6 sm:px-8 pt-40 pb-24 lg:py-24 flex-1" id="quote-header">
                <div class="grow flex flex-col justify-center" id="quote-content">
                    <div class="space-y-4" id="quote-container">
                        <div id="quote-title" class="font-sans text-3xl text-pink-300 font-semibold tracking-wide">Unlock the Cosmic Data</div>
                        <h1 id="company-name" class="h1 font-sans font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">Analyze Galaxies with Ease</h1>
                        <time id="quote-date" class="block font-sans text-xl text-purple-200">Our cutting-edge app provides real-time insights and analytics for the latest cosmic information, empowering you to explore the universe.</time>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
