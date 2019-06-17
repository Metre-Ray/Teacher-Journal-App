import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe: SortPipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('sort array of strings', () => {
    const pipe: SortPipe = new SortPipe();
    const testArray: string[] = ['1', 'd', 'c', 'a', 'b'];
    const resultArray: string[] = ['1', 'a', 'b', 'c', 'd'];
    expect(pipe.transform(testArray)).toEqual(resultArray);
  });

  it('sort array of objects by field', () => {
    const pipe: SortPipe = new SortPipe();
    const testArray: object[] = [
      { name: 'Shikizaki', surname: 'Kiki' },
      { name: 'Anya', surname: 'Goff' },
      { name: 'Dororo', surname: 'Dororo' },
      { name: 'Eudgun', surname: 'Savamura' },
      { name: 'Noah', surname: 'Chicken' }
    ];
    const resultArray: object[] = [
      { name: 'Noah', surname: 'Chicken' },
      { name: 'Dororo', surname: 'Dororo' },
      { name: 'Anya', surname: 'Goff' },
      { name: 'Shikizaki', surname: 'Kiki' },
      { name: 'Eudgun', surname: 'Savamura' }
    ];
    expect(pipe.transform(testArray, 'surname')).toEqual(resultArray);
  });

  it('if input - empty array, return this array', () => {
    const pipe: SortPipe = new SortPipe();
    const testValue: string[] = [];
    expect(pipe.transform(testValue)).toBe(testValue);
  });

});
