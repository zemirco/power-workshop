// Options: --annotations --types
import {
  Anno,
  Anno2,
  X
} from './resources/setup';

@Anno('class')
class AnnotatedTypedClass {
  @Anno2('ctor')
  constructor(@Anno a:X, @Anno('b') b) {
    this.foo = a;
  }

  bar(a:X) {}
}

assertArrayEquals([new Anno('class'), new Anno2('ctor')], AnnotatedTypedClass.annotations);
assertArrayEquals([[X, new Anno], [new Anno('b')]], AnnotatedTypedClass.parameters);
assertArrayEquals([[X]], AnnotatedTypedClass.prototype.bar.parameters);
