# Test Cases

Simple test suite with basic performance tests.

## testing loop functions with 1000000 iterations
- testcase: for     -> 1 ms
- testcase: for in  -> 218 ms
- testcase: forEach -> 34 ms
- testcase: map     -> 328 ms
- testcase: reduce  -> 29 ms
- testcase: filter  -> 442 ms

## testing lodash functions with 1000000 iterations
- testcase: object key -> 2 ms
- testcase: lodash get -> 121 ms

## testing moment functions with 10000 iterations
- testcase: withoutMoment -> 9 ms
- testcase: withMoment   -> 627 ms

## testing objects with 1000000 iterations
- testcase: obj = {} -> 11 ms
- testcase: obj = Object.create(null) -> 58 ms
- testcase: obj["x"] = 0 -> 1 ms
- testcase: Object.defineProperty(obj, "x", withValue(0)) -> 128 ms