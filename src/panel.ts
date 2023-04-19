function tab(panel: string): void {
  const element = document.getElementById(panel);
  const tabButtonList = element?.querySelectorAll('[role="tab"]');
  const tabArrayList = [].slice.call(tabButtonList);

  // Initialize tabFocus
  const activeTab = element?.querySelector(
    '[aria-selected="true"]'
  ) as HTMLButtonElement;
  const indexNum = (tabArrayList as HTMLButtonElement[]).indexOf(activeTab);
  let tabFocus = indexNum || 0;

  // Toggle function
  const toggleTab = (event: Event): void => {
    const eventTarget = event.currentTarget as HTMLButtonElement;
    const targetPanel = eventTarget.getAttribute("aria-controls");
    const activeTab = element?.querySelector('[aria-selected="true"]');
    const activeContent = element?.querySelector('[aria-hidden="false"]');

    // Toggle tab's aria-selected
    activeTab?.setAttribute("aria-selected", "false");
    activeTab?.setAttribute("tabindex", "-1");
    eventTarget?.setAttribute("aria-selected", "true");
    eventTarget?.setAttribute("tabindex", "0");
    const indexNum = (tabArrayList as HTMLButtonElement[]).indexOf(eventTarget);
    tabFocus = indexNum;

    // Toggle content's aria-hidden
    activeContent?.setAttribute("aria-hidden", "true");
    element
      ?.querySelector(`#${targetPanel || "not-supplied"}`)
      ?.setAttribute("aria-hidden", "false");
    event.preventDefault();
  };

  // Tab click EventListener
  tabButtonList?.forEach((item) => {
    item.addEventListener("click", toggleTab);
  });
}

tab("panel");

function showSection(i, hideFirst, hideSecond): void {
  document.getElementById(`toggle${i}`).style.display = "block";
  document.getElementById(`toggle${hideFirst}`).style.display = "none";
  document.getElementById(`toggle${hideSecond}`).style.display = "none";
}
