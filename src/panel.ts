function tab(panel: string): void {
    const element = document.getElementById(panel);
    const tabList = element?.querySelector('[role="tablist"]');
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
  
    // Keydown function
    const keydownFocus = (event: KeyboardEventInit) => {
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
        } else if (tabButtonList && event.code === "ArrowLeft") {
          tabFocus -= 1;
          // If you are at the start, move to the end
          if (tabFocus < 0) {
            tabFocus = tabButtonList.length - 1;
          }
        }
        // Change tabindex
        const tabFocused =
          tabButtonList && (tabButtonList[tabFocus] as HTMLButtonElement);
        tabFocused && tabFocused.setAttribute("tabindex", "0");
        tabFocused && tabFocused.focus();
      }
    };
  
    // Tab keydown EventListener
    tabList?.addEventListener("keydown", keydownFocus);
  }
  
  tab("panel");
  