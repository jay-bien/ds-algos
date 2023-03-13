import { Heap } from "../Heap";

it("Works??", ()=>{

    expect( true ).toBe( true );
    return;
})

it("Returns the correct index to the parent nodes", ()=> {
    const heap = new Heap();
    expect( heap.getChildren( 2 ) ).toBe([5, 6]);
    expect( heap.getChildren( 3 ) ).toBe([7, 8]);
})