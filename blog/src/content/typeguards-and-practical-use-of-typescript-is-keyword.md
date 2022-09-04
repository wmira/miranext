---
title: Typeguards and Practical Use of Typescript is Keyword
date: 2022-09-05
author: Warren Mira
desc: How to utilize is keyword for building utilities in typescript that provide type safety.
img: /typescript1.png
imgWidth: 800
imgHeight: 500
---


We can utilize typescript's ``is`` keyword to effectively write utilities that wraps the proceeding block with the proper return type. Imagine you have the following type in your codebase:

```typescript

/** common response shape */
export type Res<D = unknown> = {
  requestId: string
  data?: D
  code: 0 | 1 | 2
}
```
The type above creates a common response object for all response on any rest endpoint. ``data`` here is optional given that the action that handles the request might not respond with **data** but only the resulting ``code``. A **code** of **0** here for example is a success type just for the request. It can still be successful but the validation for example can be invalid. Lets say you have a code below that process a response:

```typescript

  function doSomethingWithResponse(res: Res<EntityCreateResult>) {

    if (res.code === 0 && res.data) {
      // do something
    }
  }

```

Sometimes the ``if`` part above gets repeated on other parts of the codebase so you try to create a simple utility that makes it easier to read and understand the codebase

```typescript

  function success<D = unknown>(res: Res<D>) {
    return Boolean(res.code === 0 && res.data)
  }

```

Using the utility above will just result into something that ends up longer compared with the original

```typescript

  import { success } from './utils'

  function doSomethingWithResponse(res: Res<EntityCreateResult>) {

    if (success(res)) {
      const { data } = res
       // Object is possibly undefined error!!
      const { _id } = data

      // you will endup with another if!
      /**
      if (data) {
        const { _id } = data
      }
      */
    }

  }

```

So your utility really didn't help as you end up adding another **if** check again given taht **data** is optional. We can easily fix this with the **is** keyword. The **is** keyword is a way to create user defined typeguard in typescript.

The updated code now looks like the following:

```typescript

  /** Using is as a typeguard that converts the resulting generic type to a required type */
  function success<D = unknown>(res: Res<D>): res is Required<Res<D>> {
    return Boolean(res.code === 0 && res.data)
  }

```

Now what we are doing above is telling typescript that if the function returns **true**, the proceeding block inside the **if** statement will have the response object with data being defined. **Required** is a typescript utility type we can use here to convert the Response type all property as required.

Now our utility function works!

```typescript
import { success } from './utils'

  function doSomethingWithResponse(res: Res<EntityCreateResult>) {

    if (success(res)) {
      const { data } = res
       // no more error as data here is now the correct type!
      const { _id } = data
    }

  }
```

Hope this helps!