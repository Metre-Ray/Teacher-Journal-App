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
    const tickSize: number = 2;
    let axisFontSize: number = 6;
    let textFontSize: number = 6;
    const rectFill: string = 'blue';
    const rectFillOnHover: string = 'rgb(80, 80, 255)';
    const rectTextFill: string = 'white';

    if (this.data.length > 10) {
      axisFontSize = 4;
      textFontSize = 2;
    }

    // tslint:disable-next-line: typedef
    const svg = d3.select('svg');
    svg.selectAll('*').remove();

    const xScale: d3.ScaleLinear<number, number> = d3
      .scaleLinear()
      .domain([0, 10])
      .range([yAxisWidth, viewBoxWidth - viewBoxRightPadding]);
    const yScale: d3.ScaleBand<string> = d3
      .scaleBand()
      .domain(this.data.map((d) => d.name))
      .range([0, viewBoxHeight - xAxisHeight])
      .padding(0.4);
    const xAxis: d3.Axis<number | { valueOf(): number; }> = d3
      .axisBottom(xScale)
      .tickSize(tickSize);
    const yAxis: d3.Axis<string> = d3
      .axisLeft(yScale)
      .tickSize(tickSize);

    const bars: d3.Selection<d3.BaseType, {
        name: string;
        x: number;
      },
      d3.BaseType, unknown> = svg.selectAll('rect').data(this.data);
    bars.enter()
      .append('rect')
      .style('width', d => `${xScale(d.x) - xScale(0)}px`)
      .style('height', yScale.bandwidth)
      .attr('fill', rectFill)
      .attr('x', xScale(0))
      .attr('y', (d) => yScale(d.name) as number)
      .on('mouseover', function(): void {
        d3.select(this)
          .style('fill', rectFillOnHover);
      })
      .on('mouseout', function(): void {
        d3.select(this)
          .style('fill', rectFill);
      });

    const text: d3.Selection<d3.BaseType, {
        name: string;
        x: number;
      },
      d3.BaseType, unknown> = svg.selectAll('text').data(this.data);
    text.enter()
      .append('text')
      .text((d) => {
        if (!d.x) { return ''; }
        return d.x;
      })
      .attr('fill', rectTextFill)
      .style('font-size', `${textFontSize}`)
      .attr('x',  d => `${xScale(d.x) / 2 + xScale(0) / 2 - textFontSize / 2}px`)
      .attr('y', (d) => `${yScale(d.name) + yScale.bandwidth() / 2 + textFontSize / 2}px`);

    svg.append('g')
      .classed('x-axis', true)
      .style('transform', `translateY(${viewBoxHeight - xAxisHeight}px)`)
      .call(xAxis)
      .style('font-size', `${axisFontSize}`);

    svg.append('g')
      .classed('y-axis', true)
      .style('transform', `translateX(${yAxisWidth}px)`)
      .call(yAxis)
      .style('font-size', `${axisFontSize}`);
  }

}
