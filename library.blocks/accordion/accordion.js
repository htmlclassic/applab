window.addEventListener("load", function() {
    let accordionButtonList = document.querySelectorAll('.accordion__btn');
    let accordionItemList = document.querySelectorAll('.accordion__item');
    let accordionTitleList = document.querySelectorAll('.accordion__title');
    let accordionBodyList = document.querySelectorAll('.accordion__body');

    let accordionItemScrollHeightList = [];
    let accordionItemTitleHeightList = [];

    const accordionItemPaddingTop = parseFloat(window.getComputedStyle(accordionItemList[0]).paddingTop);
    const accordionItemPaddingBottom = parseFloat(window.getComputedStyle(accordionItemList[0]).paddingBottom);

    let timerId;

    setHeights();

    window.addEventListener('resize', function() {
        setHeights();
        
        // set items' height in pixels in order to let transition work
        for (let i = 0; i < accordionItemList.length; ++i) {
            accordionItemList[i].style.height = accordionItemTitleHeightList[i] + "px";
        }
    });

    function setHeights() {
        // find items' scroll height and initial height
        for (let i = 0; i < accordionItemList.length; ++i) {
            accordionItemScrollHeightList[i] = accordionItemList[i].scrollHeight;

            let titleHeight = parseFloat(window.getComputedStyle(accordionTitleList[i]).height) + accordionItemPaddingTop +
                            accordionItemPaddingBottom;

            accordionItemTitleHeightList[i] = titleHeight;
        }
    }

    hideAllBodies();

    // set items' height in pixels in order to let transition work
    for (let i = 0; i < accordionItemList.length; ++i) {
        accordionItemList[i].style.height = accordionItemTitleHeightList[i] + "px";
    }

    function showBody(i) {
        accordionBodyList[i].classList.remove('accordion__body_hidden');
    }

    function hideBody(i) {
        accordionBodyList[i].classList.add('accordion__body_hidden');
    }

    function hideAllBodies() {
        for (let body of accordionBodyList) {
            body.classList.add('accordion__body_hidden');
        }
    }
    
    let openedItemIndex = -1;

    let id = 0;

    for (let btn of accordionButtonList) {
        btn["index"] = id++;
        
        btn.addEventListener("click", function(e) {
            if (openedItemIndex === -1) {
                openMenuItem(e.currentTarget.index);
                
            } else if (openedItemIndex === e.currentTarget.index) {
                closeMenuItem(openedItemIndex);
            } else {
                closeMenuItem(openedItemIndex);
                openMenuItem(e.currentTarget.index);
            }
        });
    }

    id = null;

    function isAccordionItemBeingClicked(path) {
        for (let el of path) {
            if (el.classList?.contains('accordion__item')) {
                return true;
            }
        }
    
        return false;
    }
    
    function openMenuItem(i) {
        clearTimeout(timerId);

        accordionButtonList[i].classList.add("accordion__btn_menu_opened");
        accordionItemList[i].style.height = accordionItemScrollHeightList[i] + "px";
        showBody(i);
    
        openedItemIndex = i;
    }
    
    function closeMenuItem(i) {
        accordionButtonList[i].classList.remove("accordion__btn_menu_opened");
        accordionItemList[i].style.height = accordionItemTitleHeightList[i] + "px";
        
        timerId = setTimeout(function() {
            hideBody(i);
        }, 300)
        
        openedItemIndex = -1;
    }
});