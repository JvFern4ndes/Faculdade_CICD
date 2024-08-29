const math = require('../math');


test('soma 2 + 3 igual a 5', () => { 
    
    expect(math.add(2, 3)).toBe(5); 
}); 

test('soma 3 + 7 igual a 10', () => { 
    
    expect(math.add(3, 7)).toBe(10); 
});

test('soma 1.1 + 3 igual a 4.1', () => { 
    
    expect(math.add(1.1, 3)).toBe(4.1); 
});

test('soma 1.4 + 1.45 igual a 2.85', () => { 
    
    expect(math.add(1.40, 1.45)).toBe(2.85); 
}); 


