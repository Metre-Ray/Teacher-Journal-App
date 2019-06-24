import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnChanges {

  @Input() public data: {name: string, x: number}[] = [{name: 'A', x: 6}, {name: 'B', x: 9}, {name: 'C', x: 10}];

  public ngOnChanges(): void {
    this.drawBarChart();
  }

  public drawBarChart(): void {
    const viewBoxWidth: number = 200;
    const viewBoxHeight: number = 100;
    const viewBoxRightPadding: number = 15;
    const xAxisHeight: number = 20;
    const yAxisWidth: number = 70;
    const fontSize: number = 6;

    const svg = d3.select('svg');
    svg.selectAll('*').remove();

    const xScale = d3.scaleLinear().domain([0, 10]).range([yAxisWidth, viewBoxWidth - viewBoxRightPadding]);
    const yScale = d3.scaleBand().domain(this.data.map((d) => d.name)).range([0, viewBoxHeight - xAxisHeight]).padding(0.4);
    const xAxis = d3.axisBottom(xScale).tickSize(2);
    const yAxis = d3.axisLeft(yScale).tickSize(2);

    const bars = svg.selectAll('rect').data(this.data);
    bars.enter().append('rect')
      .style('width', d => `${xScale(d.x) - xScale(0)}px`)
      .style('height', yScale.bandwidth)
      .attr('fill', 'blue')
      .attr('x', xScale(0))
      .attr('y', (d) => yScale(d.name) as number)
      .on('mouseover', function(): void {
        d3.select(this)
          .style('fill', 'rgb(80, 80, 255)');
      })
      .on('mouseout', function(): void {
        d3.select(this)
          .style('fill', 'blue');
      });

    const text = svg.selectAll('text').data(this.data);
    text.enter().append('text')
      .text((d) => {
        if (!d.x) { return ''; }
        return d.x;
      })
      .attr('fill', 'white')
      .style('font-size', `${fontSize}`)
      .attr('x',  d => `${xScale(d.x) / 2 + xScale(0) / 2 - fontSize / 2}px`)
      .attr('y', (d) => `${yScale(d.name) + yScale.bandwidth() / 2 + fontSize / 2}px`);

    svg.append('g')
      .classed('x-axis', true)
      .style('transform', `translateY(${viewBoxHeight - xAxisHeight}px)`)
      .call(xAxis)
      .style('font-size', `${fontSize}`);

    svg.append('g')
      .classed('y-axis', true)
      .style('transform', `translateX(${yAxisWidth}px)`)
      .call(yAxis)
      .style('font-size', `${fontSize}`);
  }

}
