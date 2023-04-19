function deleteContact() {
    const loader = document.getElementById("loader");
    const verify = document.getElementById("verify");
    const verified = document.getElementById("verified");
    verify.style.display = "none";
    let inProgress = true;
    loader.style.display = "block";
    setTimeout(() => {
        inProgress = false;
        loader.style.display = "none";
        verified.style.display = 'block';
    }, 1500);
}
function clearForm() {
    console.log('clearForm');
}
function openPopUp() {
    const window = document.getElementById("popUp");
    window.style.display = "block";
}
function closePopUp() {
    const window = document.getElementById("popUp");
    window.style.display = "none";
    const edit = document.getElementById("popUpEdit");
    edit.style.display = "none";
}
function openEdit() {
    const window = document.getElementById("popUpEdit");
    window.style.display = "block";
}
function tab(panel) {
    const element = document.getElementById(panel);
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
}
tab("panel");
function showSection(i, hideFirst, hideSecond) {
    document.getElementById(`toggle${i}`).style.display = "block";
    document.getElementById(`toggle${hideFirst}`).style.display = "none";
    document.getElementById(`toggle${hideSecond}`).style.display = "none";
}
//# sourceMappingURL=script.js.map