# MongoDB Aggregation Pipelines
### Aggregation is a way to process data and transform documents in a MongoDB collection into meaningful results (like reports, stats, or summaries).

### Pipeline as a series of stages, like a flow:
```
Data → $match → $group → $sort → $project → Output
```

## $group
- Purpose: Groups documents together (like SQL GROUP BY) and lets you calculate things like total, average, count, etc.

- Use case: Total quantity sold per product.

## $match
- Purpose: Filters data (like WHERE in SQL).

- Use case: Only show products where total quantity > 10.
## $sort
- Purpose: Sorts your results.

- 1 for ascending (A → Z), -1 for descending (Z → A).

## $project
- Purpose: Select what fields to show or rename fields.

- Use case: Only show product name and quantity.

## $unwind
- Purpose: Breaks an array into separate documents (flattens).

- Use case: To handle each item inside items: [ ] one by one.

## $sum
- Purpose: Adds numbers (inside $group).

- Use case: Add quantity of a product sold.

## $avg
- Purpose: Calculates the average (inside $group).

- Use case: Average order value per customer.

## $limit
- Purpose: Limit number of results.

- Use case: Show only top 5 results.


```json
[
  {
    "$group": {
      "_id": null,
      "totalRevenue": { "$sum": "$totalAmount" }
    }
  }
]

[
  {
    "$group": {
      "_id": "$status",
      "totalOrders": { "$sum": 1 }
    }
  }
]
[
  {
    "$group": {
      "_id": "$customerName",
      "totalSpent": { "$sum": "$totalAmount" }
    }
  },
  { "$sort": { "totalSpent": -1 } },
  { "$limit": 3 }
]

[
  {
    "$group": {
      "_id": "$customerName",
      "avgOrderAmount": { "$avg": "$totalAmount" }
    }
  }
]
[
  { "$unwind": "$items" },
  {
    "$group": {
      "_id": "$items.name",
      "totalQuantity": { "$sum": "$items.quantity" }
    }
  },
  { "$match": { "totalQuantity": { "$gt": 10 } } }
]
[
  {
    "$match": {
      "orderDate": {
        "$gte":" new Date(new Date().setMonth(new Date().getMonth() - 6))"
      }
    }
  },
  {
    "$group": {
      "_id": {
        "year": {" $year": "$orderDate" },
        "month": { "$month": "$orderDate" }
      },
      "monthlyRevenue": { "$sum": "$totalAmount" }
    }
  },
  {
    "$sort": {
      "_id.year": 1,
      "_id.month": 1
    }
  }
]
[
  {
    "$group": {
      "_id": "$customerName",
      "orderCount": { "$sum": 1 }
    }
  },
  { "$match": { "orderCount": { "$gt": 2 } } }
]
[
  { "$unwind": "$products" },
  {
    "$project": {
      "_id": 0,
      "productName": "$products.name"
    }
  }
]
[
  { "$match": { "status": "Delivered" } },
  {
    "$group": {
      "_id": null,
      "deliveredRevenue": { "$sum": "$totalAmount" }
    }
  }
]
[
  { "$unwind": "$items" },
  {
    "$group": {
      "_id": "$items.name",
      "totalQuantity": { "$sum": "$items.quantity" },
      "totalRevenue": { "$sum": "$items.price" }
    }
  }
]
```


