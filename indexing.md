# Indexing

### What is an Index?
An index is like a table of contents for your MongoDB collections.
It helps MongoDB find data faster, instead of searching every document one by one.

### Why Use Indexes?
- Without indexes:
```
MongoDB does a collection scan (checks every document).

This is slow, especially with lots of data.
```
- With indexes:
```
MongoDB jumps directly to the required data.

Queries become faster and more efficient.
```

###  How to Create an Index

#### Single Field Index
```
db.orders.createIndex({ status: 1 })
```
- status: the field you’re indexing

-  1: for ascending order


#### Compound Index
```
db.orders.createIndex({ status: 1, orderDate: -1 })
```

#### Check Index Usage
```
db.orders.find({ status: "Pending" }).explain("executionStats")
```
#### LookUp
- executionStats.totalKeysExamined

- executionStats.totalDocsExamined


####  Drop an Index
```
db.orders.dropIndex({ status: 1 })
```
