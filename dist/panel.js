function tab(panel) {
    const element = document.getElementById(panel);
    const tabList = element === null || element === void 0 ? void 0 : element.querySelector('[role="tablist"]');
    const tabButtonList = element === null || element === void 0 ? void 0 : element.querySelectorAll('[role="tab"]');
    const tabArrayList = [].slice.call(tabButtonList);
    // Initialize tabFocus
    const activeTab = element === null || element === void 0 ? void 0 : element.querySelector('[aria-selected="true"]');
    const indexNum = tabArrayList.indexOf(activeTab);
    let tabFocus = indexNum || 0;
    // Toggle function
    const toggleTab = (event) => {
        var _a;
        const eventTarget = event.currentTarget;
        const targetPanel = eventTarget.getAttribute("aria-controls");
        const activeTab = element === null || element === void 0 ? void 0 : element.querySelector('[aria-selected="true"]');
        const activeContent = element === null || element === void 0 ? void 0 : element.querySelector('[aria-hidden="false"]');
        // Toggle tab's aria-selected
        activeTab === null || activeTab === void 0 ? void 0 : activeTab.setAttribute("aria-selected", "false");
        activeTab === null || activeTab === void 0 ? void 0 : activeTab.setAttribute("tabindex", "-1");
        eventTarget === null || eventTarget === void 0 ? void 0 : eventTarget.setAttribute("aria-selected", "true");
        eventTarget === null || eventTarget === void 0 ? void 0 : eventTarget.setAttribute("tabindex", "0");
        const indexNum = tabArrayList.indexOf(eventTarget);
        tabFocus = indexNum;
        // Toggle content's aria-hidden
        activeContent === null || activeContent === void 0 ? void 0 : activeContent.setAttribute("aria-hidden", "true");
        (_a = element === null || element === void 0 ? void 0 : element.querySelector(`#${targetPanel || "not-supplied"}`)) === null || _a === void 0 ? void 0 : _a.setAttribute("aria-hidden", "false");
        event.preventDefault();
    };
    // Tab click EventListener
    tabButtonList === null || tabButtonList === void 0 ? void 0 : tabButtonList.forEach((item) => {
        item.addEventListener("click", toggleTab);
    });
    // Keydown function
    const keydownFocus = (event) => {
        // Detect arrow direction
        if (event.code === "ArrowRight" || event.code === "ArrowLeft") {
            // Reset tabindex
            tabButtonList && tabButtonList[tabFocus].setAttribute("tabindex", "-1");
            // Move Right
            if (tabButtonList && event.code === "ArrowRight") {
                tabFocus += 1;
                // If you are at the end, go back to the start
                if (tabFocus >= tabButtonList.length) {
                    tabFocus = 0;
                }
            }
            else if (tabButtonList && event.code === "ArrowLeft") {
                tabFocus -= 1;
                // If you are at the start, move to the end
                if (tabFocus < 0) {
                    tabFocus = tabButtonList.length - 1;
                }
            }
            // Change tabindex
            const tabFocused = tabButtonList && tabButtonList[tabFocus];
            tabFocused && tabFocused.setAttribute("tabindex", "0");
            tabFocused && tabFocused.focus();
        }
    };
    // Tab keydown EventListener
    tabList === null || tabList === void 0 ? void 0 : tabList.addEventListener("keydown", keydownFocus);
}
tab("panel");
//# sourceMappingURL=panel.js.map