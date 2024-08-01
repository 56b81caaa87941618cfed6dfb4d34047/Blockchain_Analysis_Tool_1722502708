/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1722502711", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-white">
        <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4">Details</h2>
        <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
            <li id="project-length" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium text-slate-200 text-slate-400">Real-Time Blockchain Analysis</div>
                <div class="text-slate-400">Stay ahead of the curve with our cutting-edge blockchain analysis platform that provides real-time insights into the latest blockchain data and transactions.</div>
            </li>
            <li id="start-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="start-date-des-1 text-slate-200 text-slate-400">Comprehensive Data Coverage</div>
                <time class="text-slate-400" id="start-time-des-1">Our platform ingests and analyzes data from multiple blockchain networks, giving you a holistic view of the decentralized ecosystem.</time>
            </li>
            <li id="end-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="end-date-des-1 text-slate-200 text-slate-400">Advanced Analytics</div>
                <time class="text-slate-400" id="end-time-des-1">Leverage our advanced analytics capabilities, including machine learning models, to uncover hidden patterns, trends, and opportunities within blockchain data.</time>
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

