/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1722502711", {
    template: `
    <section id="items-table-component" class="py-8 bg-gradient-to-br from-pink-500 to-purple-600 backdrop-blur-lg bg-opacity-30 rounded-xl shadow-lg">
        <h2 id="costs-title" class="text-3xl font-bold mb-5 text-white text-center">Blockchain Analysis Tools</h2>
        <div id="costs-table-container" class="overflow-x-auto px-4">
            <table id="costs-table" class="table-auto w-full text-sm bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl">
                <thead id="costs-table-header" class="text-white">
                    <tr>
                        <th id="description-header" class="px-6 py-4">Description</th>
                        <th id="cost-header" scope="col" class="px-6 py-4">Cost</th>
                    </tr>
                </thead>
                <tbody id="costs-table-body">
                    <tr class="group hover:bg-white hover:bg-opacity-20 transition-all duration-300" id="costs-row-1">
                        <th scope="row" class="text-left font-normal px-6 py-6 border-b border-purple-300 border-opacity-30" id="costs-cell-description-1">
                            <div class="font-semibold mb-2 text-pink-300" id="costs-link-1">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">
                                    Chain Monitor
                                </a>
                            </div>
                            <p class="text-purple-200" id="costs-description-1">Real-time monitoring of blockchain networks</p>
                        </th>
                        <td class="font-semibold text-right px-6 py-6 border-b border-purple-300 border-opacity-30 text-white" id="costs-cell-cost-1">
                            <a class="group-hover:opacity-0 transition-opacity" href="details.html" tabindex="-1">$99/month</a>
                            <span class="hidden group-hover:inline-block text-blue-300 transition-all duration-300">Details -></span>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-20 transition-all duration-300" id="costs-row-2">
                        <th scope="row" class="text-left font-normal px-6 py-6 border-b border-purple-300 border-opacity-30" id="costs-cell-description-2">
                            <div class="font-semibold mb-2 text-pink-300" id="costs-link-2">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">
                                    Smart Contract Auditor
                                </a>
                            </div>
                            <p class="text-purple-200" id="costs-description-2">Automated code review for smart contracts</p>
                        </th>
                        <td class="font-semibold text-right px-6 py-6 border-b border-purple-300 border-opacity-30 text-white" id="costs-cell-cost-2">
                            <a class="group-hover:opacity-0 transition-opacity" href="details.html" tabindex="-1">$199/audit</a>
                            <span class="hidden group-hover:inline-block text-blue-300 transition-all duration-300">Details -></span>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-20 transition-all duration-300" id="costs-row-3">
                        <th scope="row" class="text-left font-normal px-6 py-6 border-b border-purple-300 border-opacity-30" id="costs-cell-description-3">
                            <div class="font-semibold mb-2 text-pink-300" id="costs-link-3">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">Transaction Tracker</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-3">Trace transactions across multiple chains</p>
                        </th>
                        <td class="font-semibold text-right px-6 py-6 border-b border-purple-300 border-opacity-30 text-white" id="costs-cell-cost-3">
                            <a class="group-hover:opacity-0 transition-opacity" href="details.html" tabindex="-1">$49/month</a>
                            <span class="hidden group-hover:inline-block text-blue-300 transition-all duration-300">Details -></span>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-20 transition-all duration-300" id="costs-row-4">
                        <th scope="row" class="text-left font-normal px-6 py-6 border-b border-purple-300 border-opacity-30" id="costs-cell-description-4">
                            <div class="font-semibold mb-2 text-pink-300" id="costs-link-4">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">Wallet Explorer</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-4">Analyze wallet activities and balances</p>
                        </th>
                        <td class="font-semibold text-right px-6 py-6 border-b border-purple-300 border-opacity-30 text-white" id="costs-cell-cost-4">
                            <a class="group-hover:opacity-0 transition-opacity" href="details.html" tabindex="-1">$29/month</a>
                            <span class="hidden group-hover:inline-block text-blue-300 transition-all duration-300">Details -></span>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-20 transition-all duration-300" id="costs-row-5">
                        <th scope="row" class="text-left font-normal px-6 py-6 border-b border-purple-300 border-opacity-30" id="costs-cell-description-5">
                            <div class="font-semibold mb-2 text-pink-300" id="costs-link-5">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">Network Stats</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-5">View performance metrics of blockchain networks</p>
                        </th>
                        <td class="font-semibold text-right px-6 py-6 border-b border-purple-300 border-opacity-30 text-white" id="costs-cell-cost-5">
                            <a class="group-hover:opacity-0 transition-opacity" href="details.html" tabindex="-1">$19/month</a>
                            <span class="hidden group-hover:inline-block text-blue-300 transition-all duration-300">Details -></span>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-20 transition-all duration-300" id="costs-row-6">
                        <th scope="row" class="text-left font-normal px-6 py-6 border-b border-purple-300 border-opacity-30" id="costs-cell-description-6">
                            <div class="font-semibold mb-2 text-pink-300" id="costs-link-6">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">Block Explorer</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-6">Browse and search complete blockchain data</p>
                        </th>
                        <td class="font-semibold text-right px-6 py-6 border-b border-purple-300 border-opacity-30 text-white" id="costs-cell-cost-6">
                            <a class="group-hover:opacity-0 transition-opacity" href="details.html" tabindex="-1">$99/month</a>
                            <span class="hidden group-hover:inline-block text-blue-300 transition-all duration-300">Details -></span>
                        </td>
                    </tr>
                </tbody>
                <tfoot id="costs-table-footer">
                    <tr>
                        <th id="total-description" scope="row" class="text-left font-normal px-6 py-6">
                            <p id="total-description-text" class="italic text-purple-200">TOTAL in USD</p>
                        </th>
                        <td id="total-cost" class="font-bold text-right text-xl px-6 py-6 text-pink-300">$494</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="mt-6 text-center">
            <button class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Hello World
            </button>
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
