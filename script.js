google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawData);


/**********fetch data*******/
 
function drawData() {
 
    fetch_data('mil_exp_asperc_gdp', 'SELECT A,B,I', military_vs_gdp);
    fetch_data('compareAll', 'SELECT A,B,D', health_vs_military);
    fetch_data('health_exp_asperc_gdp', 'SELECT A,K', health_vs_gdp);
    fetch_data('health_exp_pc', 'SELECT N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG', health_1);
    fetch_data('compareAll', 'SELECT J,L,M', Edu_vs_military);
    fetch_data('health_private-public_exp_pc', 'SELECT A,K,W', health_pub_private);
    fetch_data('life_expectancy', 'SELECT A,L,O,N', health_vs_life);
    fetch_data('percentage_change_pc', 'SELECT H,I,J,K,L', Education_vs_gdp);
    fetch_data('edu_exp_pc', 'SELECT N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG', Education_per_person);
    fetch_data('compareALL', 'SELECT F,G', Conclusion_pie);
    fetch_data('GDP','SELECT A,K,L',Edu_vs_GDP);
    fetch_data('compareAll','SELECT O,P,Q',health4)
    fetch_data('compareAll','SELECT O,P,R',edu3)
    fetch_data('compareAll','SELECT O,P,S',military2)
    fetch_data('edu_exp_pc', 'SELECT N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG',new1);

}

function fetch_data(sheetName, query, responseHandler) {
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1_KE6QoLuCAdVAcXrmKK389DP1REJCQpjcAiUQAqDtK4/gviz/tq?sheet=' 
                + sheetName + '&headers=1&tq=' + queryString); //Query
    query.send(responseHandler);
} 

/**********Plot functions using Google API*******/


function military_vs_gdp(response) {
    var data = response.getDataTable();
    data.sort({column: 1, desc: true});
    var options = {
        chartArea:{width:'75%',height:'65%'},
        title: 'Military spending of G20 as percentage of GDP in 2010 and 2017',
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        colors: ['#69c78a','#222529'], 
        backgroundColor: '#f8f9fa', 
        vAxis: {
            title: 'Percentage',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
            },
        },  
        hAxis: {
            title: 'Countries',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
                bold: true,
            },
        },
        legend: {
            textStyle:{
                color: '#222529',
                bold:true,
                fontSize:11
            }
        },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("military1_div"));
    chart.draw(data, options);
} 

function health_vs_military(response) {
    var data = response.getDataTable();
    data.sort({column: 1, desc: true});
    var options = {
        chartArea:{width:'75%',height:'65%'},
        title: 'Average health and military spending of G20 (2010-2017)',
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        colors: ['#A41709','#F0E319'],
        vAxis: {
            title: 'USD Billions (log scale)',
            //format: 'short',
            scaleType: 'log',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
            },
        },
        hAxis: {
            textStyle: {
                fontSize: 12,
                color: '#28302b',
                bold: true,
            },
        },
        legend: {
            textStyle:{
                bold:true,
                fontSize:11
            }
        },
    };
    var chart = new google.visualization.AreaChart(document.getElementById("health3_div"));
    chart.draw(data, options);
} 



function health_vs_gdp (response) {
    var data = response.getDataTable();
    data.sort({column: 1, desc: true});

    
    var options = {
        chartArea:{width:'75%',height:'75%'},
        is3D: true,
        title: 'Average health spending as percentage of GDP of G20 (2010-2017)',
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        // colors: ['#222529'],
        dataOpacity: .95,
        vAxis: {
            textStyle: {
                fontSize: 12,
                color: '#28302b',
                bold: true,
            },
            maxValue: 18.0
        },  
        hAxis: {
            textPosition: 'none',
            title: 'Percentage',   
        },
        legend: 'none',
    };
    
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,{ 
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation" }]);

    var chart = new google.visualization.PieChart(document.getElementById("health2_div"));
    chart.draw(view, options);
} 

function health_1 (response) {
    var data = response.getDataTable();
    var options = {
        chartArea:{width:'75%',height:'65%'},
        title: 'Health Expenditure per person of G-20 (from 2010 to 2017)',
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        
        vAxis: {
            title: 'Current USD',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
            },
            minorGridlines: {count:0},
            gridlines: {color:'#e8e8e8'}
        },
        hAxis: {
            format: '####',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
                bold: true,
            },
            minorGridlines: {count:0}
        },
        legend: {
            textStyle:{
                bold:true,
                fontSize:10.5
            }
        },
    };
    var chart = new google.visualization.LineChart(document.getElementById("health1_div"));
    chart.draw(data, options);
} 

function health_pub_private (response) {
    var data = response.getDataTable();
    data.sort({column: 1, desc: true});

    var options = {
        title : 'Monthly Coffee Production by Country',
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
      };
    
    var chart = new google.visualization.B(document.getElementById('health6_div'));
    chart.draw(data, options);
}


function health_vs_life (response) {
    var data = response.getDataTable();
    var options = {
        chartArea:{width:'75%',height:'65%'},
        title: "Life expectancy in 2018 vs Average public health spending per person of G20 from 2010 to 2017",
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        colors: ['#222529'],
        colors: ['#222529','#69c78a','#bf9a2a','#d13d3d'],
        vAxis: {
            title: "Percentage",
            minValue: -10,
            textStyle: {
                fontSize: 12,
                color: '#28302b',
            },
            minValue: 0,
        },
        hAxis: {
            title: "Life expectancy",
            textStyle: {
                fontSize: 12,
                color: '#28302b',
                bold: true,
            },
        },
        bubble: {
            textStyle: {
            auraColor: 'none',
            fontSize: 12,
            bold: true,
            color: 'white',
            },
            opacity: .6,
        },
        legend: {
            textStyle:{
                bold:true,
                fontSize:11
            },
        },
    };
    var chart = new google.visualization.BubbleChart(document.getElementById('health5_div'));
    chart.draw(data, options);    
} 


function Edu_vs_military (response) {
    var data = response.getDataTable();
    data.sort({column: 1, desc: true});
    var options = {
        colors: ['#7C7E0A','#7E150A'], //  ['#d9d9d9','#69c78a','#4a5c50']
        title : 'Average Expenditure on Eduaction vs Military Expenditure',
        vAxis: {title: 'Expenditure'},
        hAxis: {title: 'Countries'},
        seriesType: 'bars',
        
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('edu4_div'));
    chart.draw(data, options);
} 

function Education_vs_gdp (response) {
    //data.sort({column: 4, desc: true});
    var data = response.getDataTable();
    var options = {
        legend:'none',
        chartArea:{width:'75%',height:'65%'},
        title: "Education Expenditure percentage change as per GDP for G20 counries(2010-2016)",
        titleTextStyle: {color: '#180401', bold: true, fontSize: 16},
        backgroundColor: 'FDFDFA',
        vAxis: {    title: "Percentage change",
                    textStyle: {
                        fontSize: 12,
                        //color: '#fff',
                        bold: true,
                    },
                },
                hAxis: {
                    title: 'Countries',
                    //titleTextStyle: {color: 'white'},
                    textStyle: {fontSize: 12, color:  '#28302b', bold:true},
                },
        candlestick: {
            fallingColor: { strokeWidth: 0, fill: '#084F45' }, // red
            risingColor: { strokeWidth: 0, fill: '#C0D41C' }   // green
          }
        
      };

    var chart = new google.visualization.CandlestickChart(document.getElementById('edu2_div'));
    
    chart.draw(data, options);
} 

function Education_per_person (response) {
    var data = response.getDataTable();
    var options = {
        chartArea:{width:'75%',height:'65%'},
        title: 'Education expenditure per person of G-20 (from 2010 to 2016)',
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        colors: ['#2afa7a','#434a45','#2afa7a','#434a45','#2afa7a','#434a45','#434a45',
        '#2afa7a','#2afa7a','#434a45','#434a45','#2afa7a','#2afa7a','#2afa7a','#2afa7a',
        '#2afa7a','#434a45','#434a45','#2afa7a'],
        backgroundColor: '#f8f9fa',
        vAxis: {
            title: 'Current USD',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
            },
            minorGridlines: {count:0},
            gridlines: {color:'#e8e8e8'}
        },
        hAxis: {
            format: '####',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
                bold: true,
            },
            minorGridlines: {count:0}
        },
        legend: {
            textStyle:{
                bold:true,
                fontSize:10.5
            }
        },
    };
    var chart = new google.visualization.LineChart(document.getElementById("edu1_div"));
    chart.draw(data, options);
} 


function Conclusion_pie (response) {
    var data = response.getDataTable();

   
    var options = {
        
        pieHole: 0.5,
        chartArea:{width:'75%',height:'65%'},
        title: 'Overall expenditure in Healthcare, Education and Military',
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        colors: ["E12371","239FE1","9323E1"],
        
        pieSliceText: 'label', 
        legend:'none'
    };
    var chart = new google.visualization.PieChart(document.getElementById('concl_div'));
        chart.draw(data, options);
} 



function Edu_vs_GDP(response) {
    var data = response.getDataTable();
    data.sort({column: 1, desc: true});
    var options = {
        chartArea:{width:'75%',height:'65%'},
        title: 'Comparison of Total country expenditure vs Education expenditure(2010-2018)',
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        colors: ['#69c78a','#222529'],
        vAxis: {
            title: 'USD Billions (log scale)',
            //format: 'short',
            scaleType: 'log',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
            },
        },
        hAxis: {
            textStyle: {
                fontSize: 12,
                color: '#28302b',
                bold: true,
            },
        },
        legend: {
            textStyle:{
                bold:true,
                fontSize:11
            }
        },
    };
    var chart = new google.visualization.AreaChart(document.getElementById("edu5_div"));
    chart.draw(data, options);}

function new1 (response) {
    var data = response.getDataTable();
    var options = {
        chartArea:{width:'75%',height:'65%'},
        title: 'Education expenditure per capita of G-20 (from 2010 to 2016)',
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        backgroundColor: '#f8f9fa',
        bar: { groupWidth: "90%"},
        vAxis: {
            title: 'Current USD',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
            },
            minorGridlines: {count:0},
            gridlines: {color:'#e8e8e8'}
        },
        hAxis: {
            format: '####',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
                bold: true,
            },
            minorGridlines: {count:0}
        },
        legend: {
            textStyle:{
                bold:true,
                fontSize:10.5
            }
        },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("edu11_div"));
    chart.draw(data, options);
}

function health4 (response) {
    var data = response.getDataTable();
    var options = {
        chartArea:{width:'75%',height:'65%'},
        title: 'Compare the per person healthcare spending to the per person GDP',
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        backgroundColor: '#f8f9fa',
        bar: { groupWidth: "90%"},
        vAxis: {
            title: 'Current USD',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
            },
            minorGridlines: {count:0},
            gridlines: {color:'#e8e8e8'}
        },
        hAxis: {
            format: '####',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
                bold: true,
            },
            minorGridlines: {count:0}
        },
        legend: {
            textStyle:{
                bold:true,
                fontSize:10.5
            }
        },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("health4_div"));
    chart.draw(data, options);
}

function edu3 (response) {
    var data = response.getDataTable();
    var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

    var options = {
        chartArea:{width:'75%',height:'65%'},
        title: 'Comparison of the per person educational spending to the per person GDP',
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        backgroundColor: '#f8f9fa',
        
        bar: { groupWidth: "90%"},
        vAxis: {
            title: 'Countries',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
            },
            minorGridlines: {count:0},
            gridlines: {color:'#e8e8e8'}
        },
        hAxis: {
            title:"Spending in USD",
            format: '####',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
                bold: true,
            },
            minorGridlines: {count:0}
        },
        legend: {
            textStyle:{
                bold:true,
                fontSize:10.5
            }
        },
    };
    var chart = new google.visualization.BarChart(document.getElementById("edu3_div"));
    chart.draw(data, options);
}


function military2 (response) {
    var data = response.getDataTable();
    var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

    var options = {
        colors: ["E18523", "A915C1"],
        chartArea:{width:'75%',height:'65%'},
        title: 'Comparison of the per person Military spending to the per person GDP',
        titleTextStyle: {color: '#222529', bold: true, fontSize: 18},
        backgroundColor: '#f8f9fa',
        
        bar: { groupWidth: "90%"},
        vAxis: {
            title: 'Countries',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
            },
            minorGridlines: {count:0},
            gridlines: {color:'#e8e8e8'}
        },
        hAxis: {
            title:"Spending in USD",
            format: '####',
            textStyle: {
                fontSize: 12,
                color: '#28302b',
                bold: true,
            },
            minorGridlines: {count:0}
        },
        legend: {
            textStyle:{
                bold:true,
                fontSize:10.5
            }
        },
    };
    var chart = new google.visualization.BarChart(document.getElementById("military2_div"));
    chart.draw(data, options);
}

