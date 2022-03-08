window.addEventListener("load", function() {
    let options = document.querySelectorAll('.switch__option');
    let activeClass = "switch_active";

    let basicPlan = document.querySelector('.plan__type_basic');
    let basicPlanPriceElement = basicPlan.querySelector('.plan__price');
    let basicPlanSubType = basicPlan.querySelector('.plan__sub-type');
    const basicPlanPrice = 13; // per month


    let premiumPlan = document.querySelector('.plan__type_premium');
    let premiumPlanPriceElement = premiumPlan.querySelector('.plan__price');
    let premiumPlanSubType = premiumPlan.querySelector('.plan__sub-type');
    const premiumPlanPrice = 99; // per month

    setPlans();

    for (let option of options) {
        option.addEventListener('click', setPlans);
    }

    function setPlans() {
        if ( options[0].classList.contains(activeClass) ) { // setting price per month
            basicPlanSubType.textContent = "/ month"
            premiumPlanSubType.textContent = "/ month";

            basicPlanPriceElement.textContent = "$" + basicPlanPrice;
            premiumPlanPriceElement.textContent = "$" + premiumPlanPrice;

        } else if ( options[1].classList.contains(activeClass) ) { // setting price per year
            basicPlanSubType.textContent = "/ year"
            premiumPlanSubType.textContent = "/ year";

            basicPlanPriceElement.textContent = "$" + basicPlanPrice * 12;
            premiumPlanPriceElement.textContent = "$" + premiumPlanPrice * 12;
        }
    }
});