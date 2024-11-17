// parallax scrolling
let picParallax = document.getElementById('picture-parallax');
let lid = document.getElementById('lid');

window.addEventListener('scroll',() => {
    let value = window.scrollY;
    picParallax.style.marginTop = (value-1024) * 1.5 +'px';
    lid.style.marginTop = value * 2 + 'px';
});

// reduce card
function showReducePopup() {
    document.getElementById('popup01').style.display = 'block';
    document.getElementById('overlay01').style.display = 'block';
    document.getElementById('background').classList.add('blurred');
}

function closeReducePopup() {
    document.getElementById('popup01').style.display = 'none';
    document.getElementById('overlay01').style.display = 'none';
    document.getElementById('background').classList.remove('blurred');
}

function showReusePopup() {
    document.getElementById('popup02').style.display = 'block';
    document.getElementById('overlay02').style.display = 'block';
    document.getElementById('background').classList.add('blurred');
}

function closeReusePopup() {
    document.getElementById('popup02').style.display = 'none';
    document.getElementById('overlay02').style.display = 'none';
    document.getElementById('background').classList.remove('blurred');
}

function showRecyclePopup() {
    document.getElementById('popup03').style.display = 'block';
    document.getElementById('overlay03').style.display = 'block';
    document.getElementById('background').classList.add('blurred');
}

function closeRecyclePopup() {
    document.getElementById('popup03').style.display = 'none';
    document.getElementById('overlay03').style.display = 'none';
    document.getElementById('background').classList.remove('blurred');
}

// Dashboard Script
const changeAll = document.getElementById("dashDetailAll");
const changeJapan = document.getElementById("dashDetailJapan");
const changeThai = document.getElementById("dashDetailThai");

const ctx = document.getElementById('wasteComparisonChart').getContext('2d');
const wasteComparisonChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018','2019','2020','2021','2022'],
        datasets: [{
            label: 'Thailand',
            data: [3.21, 3.14, 3.22, 3.24, 3.28, 3.35, 3.45, 3.23, 2.76, 2.83], 
            fill: false,
            borderColor: '#63B1E8',
            borderWidth: 5,
            tension: 0.1,
            pointBackgroundColor: '#63B1E8', // Points color in hexadecimal
            pointStyle: 'circle'  // Symbol style for the legend
        },
        {
            label: 'Japan',
            data: [9.40, 9.26, 8.79, 8.60, 8.63, 8.61, 8.50, 8.22, 8.24, 8.23], 
            fill: false,
            borderColor: '#FFD174',
            borderWidth: 5,
            tension: 0.1,
            pointBackgroundColor: '#FFD174', // Points color in hexadecimal
            pointStyle: 'circle'  // Symbol style for the legend
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels:  {
                    usePointStyle: true,    
                    font: {
                        size: 15
                    },
                    padding: 20,

                }
            },
            tooltip: {
                enabled: true,
                titleFont: {
                    size: 9
                },
                bodyFont: {
                    size: 9
                }
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Year',
                    font: {
                        size: 27
                    },
                    padding: 20,
                },
    
                ticks: {
                    font: {
                        size: 15
                    }
                    
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Plastics (Million Tons)',
                    font: {
                        size: 15
                    }
                },
                ticks: {
                    font: {
                        size: 15
                    }
                }
            }
        },
        
    }
});

document.getElementById('totalButton').addEventListener('click', function() {
    wasteComparisonChart.data.datasets = [
        {
            label: 'Thailand',
            data: [3.21, 3.14, 3.22, 3.24, 3.28, 3.35, 3.45, 3.23, 2.76, 2.83], 
            fill: false,
            borderColor: '#63B1E8',
            borderWidth: 5,
            tension: 0.1,
            pointBackgroundColor: '#63B1E8', 
            pointStyle: 'circle'  
        },
        {
            label: 'Japan',
            data: [9.40, 9.26, 8.79, 8.60, 8.63, 8.61, 8.50, 8.22, 8.24, 8.23], 
            fill: false,
            borderColor: '#FFD174',
            borderWidth: 5,
            tension: 0.1,
            pointBackgroundColor: '#FFD174',
            pointStyle: 'circle'  
        }
    ];

    // グラフを再描画
    wasteComparisonChart.update();

    changeAll.style.display = "block";
    changeJapan.style.display = "none";
    changeThai.style.display = "none";
});

document.getElementById('japanButton').addEventListener('click', function() {
    wasteComparisonChart.data.datasets = [{
        label: 'Japan',
        data: [9.40, 9.26, 8.79, 8.60, 8.63, 8.61, 8.50, 8.22, 8.24, 8.23], 
        fill: false,
        borderColor: '#FFD174',
        borderWidth: 5,
        tension: 0.1,
        pointBackgroundColor: '#FFD174',
        pointStyle: 'circle'
    }];
    
    // グラフを再描画
    wasteComparisonChart.update();
    changeAll.style.display = "none";
    changeJapan.style.display = "block";
    changeThai.style.display = "none";

});

document.getElementById('thaiButton').addEventListener('click', function() {
    wasteComparisonChart.data.datasets = [{
        label: 'Thailand',
        data: [3.21, 3.14, 3.22, 3.24, 3.28, 3.35, 3.45, 3.23, 2.76, 2.83], 
        fill: false,
        borderColor: '#63B1E8',
        borderWidth: 5,
        tension: 0.1,
        pointBackgroundColor: '#63B1E8',
        pointStyle: 'circle'
    }];
    
    // グラフを再描画
    wasteComparisonChart.update();
    changeAll.style.display = "none";
    changeJapan.style.display = "none";
    changeThai.style.display = "block";
});

document.getElementById("totalButton").addEventListener("click", function() {


    const changeAll = document.getElementById("dashboard");
    
    
});

