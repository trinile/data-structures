describe('DoublylinkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    // debugger
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {

    linkedList.addToTail(4);
    linkedList.addToTail(5);
    // debugger;
    linkedList.contains(4);
    linkedList.contains(5);
    linkedList.contains(6);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  it('should have a value for next node if not the tail node', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.head.next.value).to.equal(5);
    linkedList.addToTail(6);
    expect(linkedList.head.next.next.value).to.equal(6);
  });

  it('should have a previous value when you add to tail', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.head.next.next.value).to.equal(6);
    expect(linkedList.tail.prev.prev.value).to.equal(4);
    // expect(linkedList.head.prev.value).to.equal(null);
  });

  it('should add value to the head', function() {
    linkedList.addToHead(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToHead(6);
    expect(linkedList.head.value).to.equal(6);
    expect(linkedList.head.next.next.value).to.equal(4);
    expect(linkedList.head.next.value).to.equal(3);
    expect(linkedList.head.next.prev.value).to.equal(6);
  });
  it('should remove tail value and assign new tail as old tail\'s previous value', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.removeTail();
    expect(linkedList.tail.head.value).to.equal(5);
  });
});
