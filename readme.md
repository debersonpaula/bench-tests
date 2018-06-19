# Test Cases

Simple test suite with basic performance tests.

## testing loop functions with 1000000 iterations
```
testcase: for     -> 26 ms
testcase: for in  -> 258 ms
testcase: forEach -> 58 ms
testcase: map     -> 321 ms
testcase: reduce  -> 45 ms
testcase: filter  -> 466 ms
```

## testing lodash functions with 1,000,000 iterations
```
testcase: object key -> 2 ms
testcase: lodash get -> 121 ms
```

## testing moment functions with 10,000 iterations
```
testcase: withoutMoment -> 9 ms
testcase: withMoment    -> 627 ms
```

## testing objects with 10,000,000 iterations
```
testcase: obj = {} -> 66 ms
testcase: obj = Object.create(null) -> 518 ms
testcase: obj["x"] = 0 -> 68 ms
testcase: obj.x = 0 -> 69 ms
testcase: Object.defineProperty(obj, "x", withValue(0)) -> 2525 ms
testcase: object properties access direct -> 11 ms
testcase: object properties access with ref -> 11 ms
```