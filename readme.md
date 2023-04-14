# Test Cases

Simple test suite with basic performance tests.

## testing loop functions with 5,000,000 iterations
```
testcase: for     -> 46 ms
testcase: for in  -> 553 ms
testcase: forEach -> 64 ms
testcase: map     -> 45 ms
testcase: reduce  -> 58 ms
testcase: filter  -> 70 ms
```

## testing lodash functions with 1,000,000 iterations
```
testcase: object key -> 2 ms
testcase: lodash get -> 19 ms
```

## testing moment functions with 10,000 iterations
```
testcase: withoutMoment -> 4 ms
testcase: withMoment    -> 136 ms
```

## testing objects with 10,000,000 iterations
```
testcase: obj = {} -> 7 ms
testcase: obj = Object.create(null) -> 141 ms
testcase: obj["x"] = 0 -> 5 ms
testcase: obj.x = 0 -> 6 ms
testcase: Object.defineProperty(obj, "x", withValue(0)) -> 1314 ms
testcase: object properties access direct -> 7 ms
testcase: object properties access with ref -> 7 ms
```