/**********************************
 * Magic School Bus reminder
 * Classifications:
 *  scalene: all three sides are different
 *  isosceles: two of its sides are equal
 *  equilateral:  all three sides are equal
 *
 * A Valid Triangle exists when:
 *  a + b > c
 *  a + c > b
 *  b + c > a
 **********************************/


describe('TriangleClassifier', function() {
  it('exists', function() {
    expect(TriangleClassifier).toBeDefined();
  });

  it('classifies as scalene 4,3,2', function() {
    var result = new TriangleClassifier().classify(4,3,2);
    expect(result).toEqual('scalene');
  });

  it('classifies as equilateral', function() {
  	var result = new TriangleClassifier().classify(4,4,4);
  	expect(result).toEqual('equilateral');
  });

  it('classifies as isosceles', function() {
  	var result = new TriangleClassifier().classify(4,3,3);
  	expect(result).toEqual('isosceles');
  });

  // What happens when a side is 0?
  it('throws as invalid with 0 side', function() {
  	expect(function() {
  		new TriangleClassifier().classify(0,1,2);
  	}).toThrow('invalid');
  });

  // What about a negative side?
  it('throws as invalid with negative numbers', function() {
  	expect(function() {
  		new TriangleClassifier().classify(2,-1,2);
  	}).toThrow('invalid');
  });

});
