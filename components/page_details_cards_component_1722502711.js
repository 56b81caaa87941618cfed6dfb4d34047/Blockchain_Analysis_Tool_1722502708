/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1722502711", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-gradient-to-br from-pink-500 to-purple-600">
        <h2 id="details-title" class="text-2xl font-bold mb-8 pl-4 text-white text-center">Details</h2>
        <ul id="details-list" class="grid gap-6 min-[480px]:grid-cols-3 text-sm px-4">
            <li id="project-length" class="px-6 py-6 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg shadow-lg border border-white border-opacity-30">
                <div class="font-semibold text-xl text-white mb-2">Real-Time Blockchain Analysis</div>
                <div class="text-pink-100">Stay ahead of the curve with our cutting-edge blockchain analysis platform that provides real-time insights into the latest blockchain data and transactions.</div>
            </li>
            <li id="start-date" class="px-6 py-6 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg shadow-lg border border-white border-opacity-30">
                <div class="font-semibold text-xl text-white mb-2" id="start-date-des-1">Comprehensive Data Coverage</div>
                <time class="text-pink-100" id="start-time-des-1">Our platform ingests and analyzes data from multiple blockchain networks, giving you a holistic view of the decentralized ecosystem.</time>
            </li>
            <li id="end-date" class="px-6 py-6 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg shadow-lg border border-white border-opacity-30">
                <div class="font-semibold text-xl text-white mb-2" id="end-date-des-1">Advanced Analytics</div>
                <time class="text-pink-100" id="end-time-des-1">Leverage our advanced analytics capabilities, including machine learning models, to uncover hidden patterns, trends, and opportunities within blockchain data.</time>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

