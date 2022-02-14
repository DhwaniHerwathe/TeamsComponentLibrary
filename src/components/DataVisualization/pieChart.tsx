import * as React from "react";
import { useEffect, useRef } from 'react';
import * as d3 from "d3";
import { Card, Flex, CardHeader, CardBody, Header } from "@fluentui/react-northstar";
import "./charts.css"
export interface iPieChartProps {
    size?: string;
    headerName?: string;
};
const data = [
    {item: 'Positive', count: 590, percentage: 73, color: '#6364a7'},
    {item: 'Negative', count: 291, percentage: 18 ,color: '#c4314b'},
    {item: 'Neutral', count: 348, percentage: 9, color: '#d9dbd9'},
    // {item: 'D', count: 145, color: '#1ac0c6'},
    // {item: 'E', count: 46, color: '#dee0e6'}
 ]
export const PieChart : React.FC<iPieChartProps> = ({
    size,
    headerName,
    ...props
  }) => {
    const pieChart = useRef()
	useEffect(()=>{
        //d3.select("svg ").remove(); 
		// Get positions for each data object
		const piedata = d3.pie().value(d => d.percentage)(data)
		// Define arcs for graphing 
		const arc = d3.arc().innerRadius(0).outerRadius(100)
        const colors = d3.scaleOrdinal(['#6364a7','#c4314b','#d9dbd9'])
		// Define the size and position of svg
		const svg = d3.select(pieChart.current)
            .attr('width', 250)
            .attr('height', 250)
            // .style('background-color','yellow')
            .append('g')
            .attr('transform','translate(100,100)')

		// Add tooltip
		const tooldiv = d3.select('#chartArea')
        .append('div')
        .style('visibility','hidden')
        .style('position','absolute')
        .style('background-color','white')
        if (size === "large"){
            console.log( "Large Card")
            d3.selectAll("svg g.legend").remove(); 
            //d3.select("#chartArea").append("svg").attr("width","960").attr("height", "600"),
            //svg.append("g");
            //Initialize legend
            const legendItemSize = 4;
            const legendItemHeight = 25;
            const legendSpacing = 25;
            const xOffset = 20;
            const yOffset = 35;
            const legend = d3
                .select('#chartArea')
                .append('svg') 
                .attr('class','verticalLegend')
                .selectAll('.legendItem')
                .data(data);
            //Create legend items
            legend
            .enter()
            .append('rect')
            .attr('class', 'legendItem')
            .attr('width', legendItemSize)
            .attr('height', legendItemHeight)
            .style('fill', d => d.color)
            .attr('transform',
                (d, i) => {
                    var x = xOffset;
                    var y = yOffset + (legendItemSize + legendSpacing) * i;
                    return `translate(${x}, ${y})`;
                });
        
            //Create legend labels
            legend
            .enter()
            .append('text')
            .attr('x', xOffset + legendItemSize + 5)
            .attr('y', (d, i) => yOffset + (legendItemSize + legendSpacing) * i + 17)
            .attr('font-size', '18')
            .text(d => d.item +  ' ' + d.percentage + '%');	
        }
        
        else if(size === "small"){
            //clear svg and redraw again
            d3.selectAll("svg.verticalLegend").remove(); 
            //Creating legends for short card
            console.log( "Small Card")
            const n = data.length;
            const itemWidth =80;
            //const itemHeight = 18;    
            const horizontalLegend = d3.select("svg");
            const legend = horizontalLegend.selectAll(".legend")
                .data(data)
                .enter()
                .append("g")
                .attr("transform", function(d,i) { return "translate(" + i%n * itemWidth + "," +  "230" + ")" ;})
                .attr("class","legend");
            const rects = legend.append('rect')
                .attr("width",15)
                .attr("height",15)
                .attr("fill", function(d,i) { return colors(i); });
            const text = legend.append('text')
                .attr("x", 20)
                .attr("y",12)
                .text(d => " " + d.item);
        }
		// Draw pies
		svg.append('g')
        .selectAll('path')
        .data(piedata)
        .join('path')
            .attr('d', arc)
            .attr('fill',(d,i)=>colors(i))
            .attr('stroke', 'white')
            .on('mouseover', (e,d)=>{
                console.log(e)
                console.log(d)

                tooldiv.style('visibility','visible')
                        // eslint-disable-next-line no-useless-concat
                        .text(`${d.data.item}:` +  ` `+ `${d.data.percentage}` + `%`)
            })
            .on('mousemove', (e,d)=>{
                tooldiv.style('top', (e.pageY-50) + 'px')
                        .style('left', (e.pageX-50) + 'px')
            })
            .on('mouseout',()=>{
                tooldiv.style('visibility','hidden')
            })

	},[size])

    return (
        <Flex>
            {size === "small" ?
            <Card className="piechartCard" size="small">
                <CardHeader>
                    <Header className="chartType" as="h3" content="Pie Chart"/>
                </CardHeader>
                <CardBody>
                    <div id='chartArea'>
                        <svg ref={pieChart}></svg>
                    </div>
                </CardBody>
            </Card>
            :
            <Card className="pieChartBigCard" size="largest">
                <CardHeader>
                    <Header className="chartType" as="h3" content="Pie Chart"/>
                </CardHeader>
                <CardBody>
                    <div id='chartArea'>
                        <svg ref={pieChart}></svg>
                    </div>
                </CardBody>
            </Card> 
        }
        </Flex>
    );
};

