
# API - Parse Array of JSON objects 

This API only has one function and that is to parse an array of JSON objects and return the original input as a text string and a JSON object with the parsed JSON.




## Tech Stack

**Server:** Node, Express


## Installation

Install with npm

```bash
  npm install

  /* run */
  node app.js
  ```
  
## API Reference

#### POST Array

```
  POST /stringReturn
```


### Header
Content-Type: application/json

### Body
```json
 {
    "input": [
        "{\"key\":\"Value1\",\"key1\":\"Value2\"}",
        "{\"key\":\"Value3\",\"key1\":\"Value4\"}"
    ]
 }   
```

Example of two JSON objects being passed to the API in the body.
NOTE: that quotes must be escaped using a backslash.

### Response
```json
{
    "returnString": [
        "{\"key\":\"Value1\",\"key1\":\"Value2\"}",
        "{\"key\":\"Value3\",\"key1\":\"Value4\"}"
    ],
    "parsed": [
        {
            "key": "Value1",
            "key1": "Value2"
        },
        {
            "key": "Value3",
            "key1": "Value4"
        }
    ]
}
```

### Curl
```curl
curl -X POST http://localhost:10000/stringReturn \
-H "Content-Type: application/json" \
-d '{
    "input": [
        "{\"key\":\"Value\"}",
        "{\"key\":\"Value\"}"
    ]
 }'
```
## Backstory

Nintex Automation Cloud has a form designer. The designer has a repeating section form control. The output of the control is a collection (Array). The application only lets you use this collection in workflow actions that can specifically handle collections. This means there is no way of using the output as a string. I needed to input the output of the repeating section into a web component that I built, but Nintex web components don't allow you to create a field that accepts collections, so I could only use a string. 

As a string was required as an input for the web component, I created a workflow that used many actions to re-create the output of the repeating section as a string. I thought it would be easier if I just used a call a web service action to call an api that parsed the array into a string. And here we are.
