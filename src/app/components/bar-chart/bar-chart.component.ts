import { Component, OnInit } from '@angular/core';
import { ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit , OnChanges {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() data: any[];
  margin = {top: 20, right: 20, bottom: 10, left: 20};
  barHeight = 20;

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges(): void {
    if (!this.data) { return; }
    this.createChart();
  }


  private createChart(): void {
    if (!this.data) { return; }
    d3.select('svg').remove();

    const element = this.chartContainer.nativeElement;
    const data = this.data;
    const width = 700;
    const height = 500;

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    const contentWidth = width; //element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = height; //element.offsetHeight - this.margin.top - this.margin.bottom;

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([contentHeight, 0]);

    const x = d3.scaleBand()    // создайт проблемы
      .domain(['A', 'B', 'C', 'D', 'E'])
      .range([0, contentWidth]);

    // const x2 = d3.scaleBand()
    //   .domain([0, contentWidth])
    //   .range([0, contentWidth]);

    const barWidth = contentWidth / data.length;
    const barPadding = 2;


    const bar = svg.selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${i * barWidth},0)`);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    bar.append('rect')
      .attr('y', (d) => y(d))
      .attr('height', (d) => contentHeight - y(d))
      .attr('width', barWidth - barPadding);

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${contentHeight})`)
      .call(xAxis);

    svg.append('g')
      .attr('class', 'y axis')
      // .attr('transform', `translate(30, 0)`)
      .call(yAxis);

    svg.append('text')
      .attr('x', -(contentHeight / 2) - this.margin.bottom)
      .attr('y', this.margin.bottom / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .attr('class', 'caption')
      .text('Average Mark');

    svg.append('text')
      .attr('x', contentWidth / 2 + this.margin.bottom)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('');

    svg.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft()
        .scale(y)
        .tickSize(-contentWidth, 0, 0)
        .tickFormat(''));

    const text = bar.append('text')
      .text((d) => d)
      .attr('y', (d, i) => y(d) - 2)
      .attr('x', (d, i) => {
        // console.log(barWidth, i);
        return x(barWidth * i);
      })
      .attr('fill', 'red');

    // svg.append('g')
    //   .attr('class', 'grid')
    //   .attr('transform', `translate(0, ${contentHeight})`)
    //   .call(d3.axisBottom()
    //       .scale(x)
    //       .tickSize(-contentHeight, 0, 0)
    //       .tickFormat(''))


    // bar.append('text')
    //   .attr('x', (d) => x(d) - 3)
    //   .attr('y', this.barHeight / 2)
    //   .attr('dy', '.35em')
    //   .text((d) => 'd');


      // const x = d3
    //   .scaleBand()
    //   .rangeRound([0, contentWidth])
    //   .padding(0.1)
    //   .domain(data.map(d => d.x));

    // const y = d3
    //   .scaleLinear()
    //   .rangeRound([contentHeight, 0])
    //   .domain([0, d3.max(data, d => d.y)]);

    // const g = svg.append('g')       // add graphical element
    //   .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    // svg.selectAll('.bar')
    //   .data(data)
    //   .enter().append('rect')
    //     .attr('class', 'bar')
    //     .style('width', (d: number) => d * 10 + 'px')
    //     .style('height', () => '20px')
    //     .text((d) => d);

        // .attr('x', d => x(d.letter))
        // .attr('y', d => y(d.frequency))
        // .attr('width', x.bandwidth())
        // .attr('height', d => contentHeight - y(d.frequency));
  }

}
