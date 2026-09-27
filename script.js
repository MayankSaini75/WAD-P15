const ctx = document.getElementById('salesChart');

new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],

        datasets: [{
            label: 'Sales',
            data: [120, 190, 150, 220, 180, 250]
        }]
    },

    options: {
        responsive: true
    }
});