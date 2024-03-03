// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Chart configuration options
const myChart = new Chart(ctx, {
    // Chart type
    type: 'doughnut',

    // Data for the chart
    data: {
        labels: ['burger', 'pizza', 'drinks'],
        datasets: [{
            label: 'sales',
            data: [81, 56, 55],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderWidth: 1, // Set border width to 2 pixels
        }]
    },

    // Options for the chart

});


let container = document.querySelector(".container");
function food() {
    return (
        container.innerHTML = `
    <section class="food">
        <div  onclick="Burger()"  class="card col-4   ccc" ">
            <img src="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-text">Burger</h2>
            </div>
        </div>
        <div  onclick="Pizza()" class="card col-4  ccc" ">
            <img src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-text">Pizza</h2>
            </div>
        </div>
        <div  onclick="Drinks()" class="card col-4 ccc" ">
            <img src="https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-006.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-text">Drinks</h2>
            </div>
        </div>
    </section>
    `
    )

}

function Burger() {
    window.location.href = "../products/Burger/pizza.html"
}




