const tabsSelect = () => {
  const tabs = document.querySelectorAll('.tab')

  const resetActive = () => {
    const selectedTab = document.querySelector('.tab.selected')
    const activeTarget = document.querySelector('.info.active')
    selectedTab.classList.remove('selected')
    activeTarget.classList.remove('active')
  }

  const activateTab = (event) => {
    const tab = event.currentTarget
    const number = tab.dataset.tab
    const tabTarget = document.querySelector(`[data-trigger='${number}']`)
    resetActive()
    tab.classList.add('selected')
    tabTarget.classList.add('active')
  }

  if (tabs) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', activateTab)
    })
  }
}

const mainTabs = () => {
  const navItems = document.querySelectorAll('.navbar-item')


  const hideAllTabs = () => {
    const mainTabs = document.querySelectorAll('.main-tab')
    mainTabs.forEach((tab) => {
      tab.classList.remove('active')
    })
  }

    const resetNavItems = () => {
      navItems.forEach((navItem) => {
        navItem.classList.remove('active')
      })
    }

    const openTab = (event) => {
      resetNavItems()
      const navItem = event.currentTarget
      navItem.classList.add('active')
      const target = event.currentTarget.dataset.mainTab
      targetTab = document.querySelector(`.main-tab-${target}`)
      console.log(targetTab)
      hideAllTabs();
      targetTab.classList.add('active')
    }



    navItems.forEach((navItem) => {
      navItem.addEventListener('click', openTab)
    })
};

tabsSelect();
mainTabs();
