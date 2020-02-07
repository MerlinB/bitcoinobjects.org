# Protocol

::: warning Disclaimer
This protocol is under development, expect changes.
:::

::: tip Coming soon
- Object explorer
- Javascript library for loading and creating objects
:::

## Introduction

Bitcoin Objects is a framework for building self-descriptive and interoperable data-structures that consist of individually addressable JSON-like objects stored on-chain.

It can be incrementally adopted to benefit from a higher degree of interoperability and does not require a change to existing infrastructure, including currently used protocols.

The benefits of using the same, generalized data-structure could be compared to speaking the same language. While knowledge of the same concepts does not necessarily follow from it, a shared language can be used explain and create common concepts by putting them in context. Context makes information more useful and thus more valuable.

The framework is designed to be a non-restrictive generalization of existing conventions and protocols and is thus completely compatible to many existing solutions, including Bitcom and Operate.

### Visualizing the structure

The resulting structure can be understood as similar to a spreadsheet: the intersection of dimensions is used as points of data. Contrary to a spreadsheet, there are no limitations on the number of dimensions and no strict differentiation between objects and dimensions. A single object could be interpreted as a rank (or row of objects) in one dimension.

## Rules

1. All on-chain information is divided into objects, where every object is addressable by a unique identifier.
2. All content of an object must consist type-value pairs where a type is a reference to an object and a value is one or more object references or utf-8-readable Strings.
3. Types of an object must be unique for this object.

## Getting started

Every object is defined in relation to other objects. Objects are created by providing at least one type-value pair where a type is a reference to an object as well.

`OP_RETURN <type> <value>`

This is analogous and compatible to the already common Bitcom convention of `OP_RETURN <protocol> <variable>`.

Another valid analogy for objects are functions: `OP_RETURN <function> <argument 1> ...`, but we will get into that later.

The resulting object can be expressed in JSON:

```json
{
  "<object>": {
    "<type>": "<value>"
  }
}
```

Our newly created object (`<object>`), as well as all other objects, is uniquely addressable by an URI consisting of its transaction id and output number, expressed as `obj://<txid>/<output>`.

The resulting object describes a value (`<value>`) at the intersection of 2 dimensions (`<object>`, `<type>`) and can thus be represented in another form.

```json
{
  "<type>": {
    "<object>": "<value>"
  }
}
```

Creating a object property with multiple values puts them into an array:

`OP_RETURN <type> <value 1> <value 2>`

```json
{
  "<object>": {
    "<type>": [
      "<value 1>",
      "<value 2>"
    ]
  }
}
```

Let's build a meaningful structure and create an object representing a description that we can then later use in other objects as property. Because all objects are build uo from combinations of objects we need to start with an recursive object definition in this case.

`OP_RETURN this "A short object description."`

```json
{
  "<description object>": {
    "<description object>": "A short object description."
  }
}
```

We could also use an object to represent a datatype. To reference multiple objects we separate them using the pipe operator which is already a convention for protocols (see Bitcom):

`OP_RETURN this <description object> "The expected datatype." | this "String"`

```json
{
  "<datatype object>": {
    "<description object>": "The expected datatype.",
    "<datatype object>": "String"
  }
}
```

Let's use our new description and datatype objects to create some more objects to use as properties:

`OP_RETURN this "Title" | <description object> "A String representation of the object." | <datatype object> "String"`

`OP_RETURN <title object> "Age" | <description object> "The age of a person." | <datatype object> "Integer"`

`OP_RETURN <title object> "Name" | <description object> "The name of a person." | <datatype object> "String"`

`OP_RETURN <title object> "Born" | <description object> "The date of birth of a person." | <datatype object> "String"`

Now we can create a meaningful object representing a person.

`OP_RETURN <name object> "Merlin Buczek" | <age object> 23 | <born object> "12.04.1995"`

```json
{
  "<merlin object>": {
    "<name object>": "Merlin Buczek",
    "<age object>": 23,
    "<born object>": "12.04.1995"
  }
}
```

You may notice that we did not differentiate between describing specific objects and "type" objects. The reason for this is the separation of syntax and semantics. Our goal is to provide a generalized protocol for describing data structures without limiting users in what structures can be created.

## Modifying existing objects

There is no "right" way to represent any information in this data-structure. However, there is an incentive to share structures so we can expect the market to converge towards useful structure.
Objects are always created, never deleted or changed. In keeping with out goals of generalization, changes to existing objects are an abstraction, represented by newly created objects. Here is one way how an update to an object could be represented:

To modify our existing person object we first need a new object representing an update and an object to reference our editing target:

`OP_RETURN <description object> "An update to an object." | <datatype object> "object"`

`OP_RETURN <description object> "A target object." | <datatype object> "object"`

Both the update object as well as the target object in our case expect another object as input.
Let's also create an object representing a signature so we can sign our update:

`OP_RETURN <description object> "A signature of the object creator."`

Now we can update our person object by creating 2 outputs:

`OP_RETURN <age object> 25`

```json
{
  "<age object>": 25
}
```

`OP_RETURN <update object> <changes object> | <target object> <merlin object> | <description object> "I had my birthday." | <signature object> <signature>`

```json
{
  "<update merlin object>": {
    "<update object>": "<changes object>",
    "<target object>": "<merlin object>",
    "<description object>": "I had my birthday.",
    "<signature object>": <signature>
  }
}
```

## Permissions

There are no restrictions on a protocol level of who can create or update objects. We can expect applications to have different requirements and models of how permissions should work.
Every developer is thus free to construct his own permission system using objects. The responsibility of ensuring data integrity always lies with the application itself.

## Protocol schemas

Of course there is a need of developers to not include all the type object references in every new transaction they make. We can solve this the same way as everything else: We create an abstraction using the data-structure. In our case we will need an object representing a certain object template. Another way to look at it is that we are doing something very similar to creating a new Bitcom protocol.

We will need an object to represent a mapping function and one that represents an array of object references as types.

`OP_RETURN <description object> "An array of object types"`
`OP_RETURN <types array object> <edit object> <target object> <description object> <signature object>`

Now we can create our array mapping schema.

`OP_RETURN <map object> <update array object> | <description object> "Describes the schema for an object that represents a new edit to an object."`

```json
{
  "<create update object>": {
    "<types array object>": [
      "<edit object>",
      "<target object>",
      "<description object>",
      "<signature object>"
    ],
    "<description object>": "Describes the schema for an object that represents a new edit to an object."
  }
}
```

Now we can create a new change much shorter:

`OP_RETURN <age object> 26 | <another object> "new value"`
`OP_RETURN <create update object> <changes object> <merlin object> "I had my birthday AGAIN." <signature>`

```json
{
  "<update merlin object 2>": {
    "<create update object>": [
      {
        "<age object>": 26,
        "<another object>": "new value"
      },
      "<merlin object>"
      "I had my birthday AGAIN.",
      <signature>
    ]
  }
}
```

## Bitcom compatibility

Every Bitcom protocol is already valid in our generalized protocol. The only part missing for it to be considered a valid object is that the Bitcom protocol identifier does not point to an object yet.
Existing protocols can incrementally adopt Bitcoin Objects by adding object references as types without the need to add every reference at once.

Here is an example of unwriter's [BitPic](https://bitpic.network/about) protocol:

```
OP_0
OP_RETURN
19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut
  [FILE Binary]
  image/jpeg
  binary
|
18pAqbYqhzErT6Zk3a5dwxHtB9icv8jH2p
  [Paymail]
  [Pubkey]
  [Sig]
```

What it does is upload an image via the [B:// protocol](https://b.bitdb.network/) in its first part and connects it to a Paymail in its second part. We can easily represent this as an object:

```json
{
  "<BitPic upload object>": {
    "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut": [
      "<FILE Binary>",
      "image/jpeg",
      "binary"
    ],
    "18pAqbYqhzErT6Zk3a5dwxHtB9icv8jH2p": [
      "<Paymail>",
      "<Pubkey>",
      "<Sig>"
}
```

All we have to do now is create an object definition for the two protocols.
Because both protocols accept multiple values, it would be very helpful go one step further and create their schema objects (like we did before).
To avoid needing to modify the protocol (Removing the Bitcom address) we can define aliases between protocol identifiers and object references so the Bitcom address won't even have to be changed:

`OP_RETURN <description object> "An alias between a Bitcom protocol identifier and an object."`

::: warning
There is no guarantee that Bitcom addresses will be respected by others users of the data structure in the future. Using object references directly is preferable.
:::

```json
{
  "<BitPic upload object>": {
    "<B:// object>": {
      "data": "<FILE Binary>",
      "media type": "image/jpeg",
      "encoding": "binary"
    },
    "<BitPic object>": {
      "paymail": "<Paymail>",
      "pubkey": "<Pubkey>",
      "signature": "<Sig>"
    }
  }
}
```

Ideally, we would also define the properties as objects.

```json
{
  "<BitPic upload object>": {
    "<B:// object>": {
      "<Data object>": "<FILE Binary>",
      "<Media Type object>": "image/jpeg",
      "<Encoding object>": "binary"
    },
    "<BitPic object>": {
      "<Paymail object>": "<Paymail>",
      "<Pubkey object>": "<Pubkey>",
      "<Signature Protocol>": "<Sig>"
    }
  }
}
```

We have now fully integrated BitPic into our data structure.

## Objects as functions

As you might have already noticed, objects work quite similar to function calls, separated by the pipe operator `|`. In fact, this is what [Operate](https://www.operatebsv.org/) is already doing. In Operate, every function is implemented with on-chain Lua code and the result of any function is piped as input into the next function. We can argue about objects as functions in the same way, which makes them compatible with Operates OPs.

```json
{
  "<my program object>": {
    "<some object>": "some value",
    "<function 1>": [
      "<arg 1.1>"
      "<arg 1.2>"
    ],
    "<function 2>": [
      "<arg 2.1>",
      "<arg 2.2>"
    ]
  }
}
```

Generalizing functions into our data structure allows them to be put into context and referenced to be included into larger structures. For example, this enables the assembly of larger programs out of individually addressable parts that can compete with alternative implementations.
There could theoretically even exist more than one implementation for every function object, for example in 2 different programming languages.

### Operate compatibility

Let's add an Operate implementation to our `<create update object>`.

```json
{
  "<create update object>": {
    "<types array object>": [
      "<edit object>",
      "<target object>",
      "<description object>",
      "<signature object>"
    ],
    "<description object>": "Describes the schema for an object that represents a new edit to an object.",
    "<operate object>": "<operate script hash>"
  }
}
```

The state that our Operate OP receives contains the outputs of `<types array object>` and `<description object>` as they come before in our `OP_RETURN`, separated by `|`. In our case, they are just adding their values to the state. Our Lua implementation should probably resemble a mapping function that outputs the assembled update object:

```json
{
  "<update object>": "<changes object>",
  "<target object>": "<merlin object>",
  "<description object>": "I had my birthday.",
  "<signature object>": <signature>
}
```

## Planaria compatibility

Here is a [JQ](https://stedolan.github.io/jq/) filter that convertes an array of BOB transactions into an object:

```jq
[ .[] | . as $tx | .out[] | {
  ( "uop://" + $tx.tx.h + "." + ( .i | tostring ) ): [
    .tape | select(length > 1 and .[0].object[-1].ops == "OP_RETURN") | .[1:] | .[] | {
      (.object[0].s): (
        .object[1:] | [ .[] | .ls // .s // .ops ]
        | if length > 1 then . else .[] end | .
      )
    } | select(.[] | length > 0) | to_entries | .[]
  ] | from_entries
} ] | map(select(.[] | length > 0))
```

Planarium fails to display all objects but [queries are working](https://bob.planaria.network/query/1GgmC7Cg782YtQ6R9QkM58voyWeQJmJJzG/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAib3V0LjIiOiB7ICIkZXhpc3RzIjogdHJ1ZSB9LAogICAgICAib3V0LnRhcGUuY2VsbC5vcHMiOiAiT1BfUkVUVVJOIgogICAgfSwKICAgICJwcm9qZWN0IjogewogICAgICAib3V0LnRhcGUuY2VsbC5zIjogMSwgIm91dC50YXBlLmNlbGwub3BzIjogMSwgInR4LmgiOiAxLCAib3V0LmkiOiAxCiAgICB9LAogICAgImxpbWl0IjogMzAKICB9LAogICJyIjp7CiAgICAiZiI6ICJbIC5bXSB8IC4gYXMgJHR4IHwgLm91dFtdIHwgeyAoIFwidW9wOi8vXCIgKyAkdHgudHguaCArIFwiLlwiICsgKCAuaSB8IHRvc3RyaW5nICkgKTogWyAudGFwZSB8ICBzZWxlY3QobGVuZ3RoID4gMSBhbmQgLlswXS5jZWxsWy0xXS5vcHMgPT0gXCJPUF9SRVRVUk5cIikgfCAuWzE6XSB8IC5bXSB8IHsgKC5jZWxsWzBdLnMpOiAoLmNlbGxbMTpdIHwgWyAuW10gfCAubHMgLy8gLnMgLy8gLm9wcyBdIHwgaWYgbGVuZ3RoID4gMSB0aGVuIC4gZWxzZSAuW10gZW5kIHwgLiApIH0gfCBzZWxlY3QoLltdIHwgbGVuZ3RoID4gMCkgfCB0b19lbnRyaWVzIHwgLltdIF0gfCBmcm9tX2VudHJpZXMgfSBdIHwgbWFwKHNlbGVjdCguW10gfCBsZW5ndGggPiAwKSkiCiAgfQp9).
