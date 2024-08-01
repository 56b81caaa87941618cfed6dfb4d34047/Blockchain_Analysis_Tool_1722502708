/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1722502711", {
    template: `
    <section class="py-8 bg-gradient-to-br from-pink-500 to-purple-600 pl-4 relative overflow-hidden">
        <div class="absolute inset-0 backdrop-blur-md bg-white/10"></div>
        <div class="relative z-10">
            <h2 class="text-2xl font-bold mb-5 text-white text-shadow-lg">Frequently Asked Questions About Our Blockchain Analysis App</h2>
            <!-- Accordion -->
            <div class="space-y-4">
                <!-- Accordion item -->
                <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-lg backdrop-blur-sm bg-white/20 shadow-lg transition-all duration-300 hover:bg-white/30" :class="[{ 'expanded': term.expanded }]">
                    <h3>
                        <button type="button" class="flex items-center justify-between w-full text-left font-medium px-6 py-4 text-white" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                            <span class="text-lg">{{ term.title }}</span>
                            <svg class="shrink-0 ml-8 fill-white" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                                <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            </svg>
                        </button>
                    </h3>
                    <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="text-white grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }]">
                        <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                            <p class="px-6 pb-4 text-lg" :id="'terms-text-' + index + '-description'">
                                {{ term.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            terms: [
                { title: "What is a blockchain analysis app?", description: "A blockchain analysis app allows you to extract insights and data from blockchain networks like Bitcoin, Ethereum, and others. It provides tools to monitor, track, and analyze blockchain transactions and activities.", expanded: false },
                { title: "What kind of analysis can I do with this app?", description: "With our app, you can analyze transaction patterns, identify major players and wallets, track token movements, detect anomalies or suspicious behavior, and gain deeper visibility into blockchain ecosystems.", expanded: false },
                { title: "Is the app suitable for both individuals and businesses?", description: "Yes, our blockchain analysis app caters to both individual users looking to monitor their cryptocurrency holdings as well as enterprises needing robust analytics for regulatory compliance, security, and strategic decision making.", expanded: false },
                { title: "Can I analyze data across multiple blockchains?", description: "Absolutely. Our app supports analysis across various major blockchain networks, allowing you to monitor activities, track assets, and gain insights from multiple blockchain ecosystems simultaneously.", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});
