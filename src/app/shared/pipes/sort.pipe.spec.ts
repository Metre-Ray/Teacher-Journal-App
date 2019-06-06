import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('sort array of strings', () => {
    const pipe = new SortPipe();
    const testArray = ['1', 'd', 'c', 'a', 'b'];
    const resultArray = ['1', 'a', 'b', 'c', 'd'];
    expect(pipe.transform(testArray)).toEqual(resultArray);
  });

  it('sort array of objects by field', () => {
    const pipe = new SortPipe();
    const testArray = [
      { name: 'Shikizaki', surname: 'Kiki' },
      { name: 'Anya', surname: 'Goff' },
      { name: 'Dororo', surname: 'Dororo' },
      { name: 'Eudgun', surname: 'Savamura' },
      { name: 'Noah', surname: 'Chicken' }
    ];
    const resultArray = [
      { name: 'Noah', surname: 'Chicken' },
      { name: 'Dororo', surname: 'Dororo' },
      { name: 'Anya', surname: 'Goff' },
      { name: 'Shikizaki', surname: 'Kiki' },
      { name: 'Eudgun', surname: 'Savamura' }
    ];
    expect(pipe.transform(testArray, 'surname')).toEqual(resultArray);
  });

  it('if input - empty array, return this array', () => {
    const pipe = new SortPipe();
    const testValue = [];
    expect(pipe.transform(testValue)).toBe(testValue);
  });

});
