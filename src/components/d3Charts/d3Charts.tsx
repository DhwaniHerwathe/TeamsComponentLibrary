import * as React from "react";
import { useEffect, useRef } from 'react';
import * as d3 from "d3";
import { Card, Flex, CardHeader, CardBody, Header } from "@fluentui/react-northstar";
import "./d3charts.css"
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
    const pieChartSmall = useRef()
    const pieChartLarge = useRef()
	useEffect(()=>{
        if (size === "large"){
		// Get positions for each data object
		const piedata = d3.pie().value(d => d.percentage)(data)
		// Define arcs for graphing 
		const arc = d3.arc().innerRadius(0).outerRadius(100)
		const colors = d3.scaleOrdinal(['#6364a7','#c4314b','#d9dbd9','#1ac0c6','#dee0e6'])
		// Define the size and position of svg
		const svg = d3.select(pieChartLarge.current)
						.attr('width', 250)
						.attr('height', 250)
						// .style('background-color','yellow')
						.append('g')
							.attr('transform','translate(100,100)')

		// Add tooltip
		const tooldiv = d3.select('#chartAreaLarge')
        .append('div')
        .style('visibility','hidden')
        .style('position','absolute')
        .style('background-color','white')
        //Initialize legend
		const legendItemSize = 12;
        const legendSpacing = 4;
		const xOffset = 20;
		const yOffset = 20;
        const legend = d3
			.select('#chartAreaLarge')
			.append('svg')
            .selectAll('.legendItem')
            .data(data);
        //Create legend items
		legend
        .enter()
        .append('rect')
        .attr('class', 'legendItem')
        .attr('width', legendItemSize)
        .attr('height', legendItemSize)
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
            .attr('y', (d, i) => yOffset + (legendItemSize + legendSpacing) * i + 12)
            .text(d => d.item +  ' ' + d.percentage);
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
        }
        else if (size ==="small"){
            const piedata = d3.pie().value(d => d.percentage)(data)
            // Define arcs for graphing 
            const arc = d3.arc().innerRadius(0).outerRadius(100)
            const colors = d3.scaleOrdinal(['#6364a7','#c4314b','#d9dbd9','#1ac0c6','#dee0e6'])
            // Define the size and position of svg
            const svg = d3.select(pieChartSmall.current)
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
            //Creating legends for short card
            const n = data.length;
            const itemWidth =80;
            //const itemHeight = 18;    
            const horizontalLegend = d3.select("svg");
            const legend = horizontalLegend.selectAll(".smallLegend")
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
                .attr("x", 15)
                .attr("y",12)
                .text(d => " " + d.item);
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
        }
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
                        <svg ref={pieChartSmall}></svg>
                    </div>
                </CardBody>
            </Card>
            :
            <Card className="pieChartBigCard" size="largest">
                <CardHeader>
                    <Header className="chartType" as="h3" content="Pie Chart"/>
                </CardHeader>
                <CardBody>
                    <div id='chartAreaLarge'>
                        <svg ref={pieChartLarge}></svg>
                    </div>
                </CardBody>
            </Card> 
        }
        </Flex>
    );
};