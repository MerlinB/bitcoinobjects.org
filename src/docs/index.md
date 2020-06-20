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

The benefits of using the same, generalized data-structure could be compared to speaking the same language. While knowledge of the same concepts does not necessarily follow from it, a shared language can be used to explain and create common concepts by putting them in context. Context makes information more useful and thus more valuable.

The framework is designed to be a non-restrictive generalization of existing conventions and protocols and is thus completely compatible to many existing solutions, including Bitcom and Operate.

### Visualizing the structure

The resulting structure can be understood as similar to a spreadsheet: the intersection of dimensions is used as points of data. Contrary to a spreadsheet, there are no limitations on the number of dimensions and no strict differentiation between objects and dimensions. A single object could be interpreted as a rank (or row of objects) in one dimension.

## Rules

1. All on-chain information is divided into objects, where every object is addressable by a unique identifier.
2. All content of an object must consist of key-value pairs where a key is a [BSVURI](bsvuri) reference to an object and a value is one or more object references or utf-8-readable Strings.
3. Keys of an object must be unique for this object.

## Abstract

Every object is defined in relation to other objects. Objects are created by providing at least one key-value pair where a key is a reference to an object as well.

`OP_RETURN <key> <value>`

This is analogous and compatible to the already common Bitcom convention:

`OP_RETURN <protocol> <variable>`

Another valid analogy for objects are functions: `OP_RETURN <function> <argument 1> ...`, but we will get into that later.

The resulting object can be expressed in JSON:

```json
{
  <key>: <value>
}
```

Our newly created object, as well as all other objects, is uniquely addressable by an [BSVURI](bsvuri) consisting of its transaction id and output number.

::: details A note on interpretation
The resulting object describes a value (`<value>`) at the intersection of 2 dimensions that can both referenced by a BSVURI.
These dimensions are the key (`<key>`) and the created output itself.
:::

Creating a object property with multiple values puts them into an array:

`OP_RETURN <key> <value 1> <value 2>`

```json
{
  <key>: [<value 1>, <value 2>]
}
```

To reference multiple objects we separate them using the pipe operator which is already a convention for protocols (see [Bitcom](https://bitcom.planaria.network/)):

`OP_RETURN <key 1> <value 1> | <key 2> <value 2>`

```json
{
  <key 1>: <value 1>,
  <key 2>: <value 2>
}
```

## Getting started

Let's build a meaningful structure and start by creating an object representing a description type so that we can use it later as a key in other objects. Because all objects are build up from combinations of objects we need to start with an recursive object definition in this case.

`OP_RETURN o: "A short object description."`

```json
{
  <description object (self)>: "A short object description."
}
```

::: details BSVURI self-reference
Because we are referencing the same transaction and output we can omit the URI path.
Theoretically we could also omit the prefix `o:` as we can for all key references, but we can not have an empty key.

See [BSVURI](bsvuri) for details.
:::

We could also use an object to represent a datatype.

`OP_RETURN <description object> "The expected datatype." | o: "String"`

```json
{
  <description object>: "The expected datatype.",
  <datatype object (self)>: "String"
}
```

Let's use our new description and datatype objects to create some more objects to use as property keys:

`OP_RETURN o: "Title" | <description object> "A String representation of the object." | <datatype object> "String"`

`OP_RETURN <title object> "Text" | <description object> "A utf-8 encoded text." | <datatype object> "String"`

`OP_RETURN <title object> "Recipient" | <description object> "The address of a message recipient." | <datatype object> "String"`

`OP_RETURN <title object> "Author" | <description object> "The address of a message author." | <datatype object> "String"`

Now we can create a meaningful object representing a person.

`OP_RETURN <text object> "Hello there!" | <author object> "acc267bc3fb5b9ab3c6d1aa1c500f40ead2155e3" | <recipient object> "de7ac06e79036f8c85710dcdc98da3a908f1c3af"`

```json
{
  <text object>: "Hello there!",
  <author object>: "acc267bc3fb5b9ab3c6d1aa1c500f40ead2155e3",
  <recipient object>: "de7ac06e79036f8c85710dcdc98da3a908f1c3af"
}
```

::: tip Tip: Instances
You may notice that we do not differentiate between describing specific object instances and "key" objects. The reason for this is the separation of syntax and semantics. Our goal is to provide a generalized protocol for describing data structures without limiting users in what structures can be created.
:::

## A convention for object updates

The created graph-like structure is static and there is no "built-in" way of updating objects.
However, we would to suggest a convention that utilizes Bitcoin's transaction and permissioning system.
It is important to note that updates to data points are a purely subjective abstraction and users are free to follow or ignore this convention. The responsibility of ensuring data integrity always lies with the application itself.

To enable an object to be updated it should be included in a spendable output using `OP_PUSHDATA`. To update the object, the output must be spent and an output with the new object must be included at the same position in the transaction. In other words, if the previous object output gets included as the third input, then the third output must be the updated object.

This ensures that the object creator can determine permissions, that object changes are universally verifiable and that only one update to a state can exist. It also enables complex script to determine object permissions.

## Aliases

There is a need of developers to not waste space and include all the key object references in every new output they create. To solve this they can assign aliases to use as property keys instead of BSVURI references.

To assign aliases to an object you can include the `alias` key to reference an output where aliases are looked for.

```json
{
  "alias": "o:/[txid]/[output_number]"
}
```

Inside of this output you can define aliases to use. To be valid an alias must hava a valid BSVURI as value.

```json
{
  "text": "o:...",
  "recipient": "o:...",
  "author": "o:..."
}
```

Now we can create another message without all the output references:

`OP_RETURN alias "o:..." | author acc267bc3fb5b9ab3c6d1aa1c500f40ead2155e3 | recipient de7ac06e79036f8c85710dcdc98da3a908f1c3af | text "Here's another message!"`

::: tip Tip: Default aliases
There is an alias reference that is used by default (that is why the alias keyword is allowed). These aliases can be overridden. They include common Bitcom addresses and can be found [here]() `TODO`.
:::

## Bitcom compatibility

All outputs using Bitcom protocols are already valid objects but because a Bitcom address is not a valid BSVURI they are missing any context to their keys. To fix this we can use aliases. In fact, most Bitcom protocols are already aliased to valid outputs references by default.

Existing protocols can incrementally adopt Bitcoin Objects by adding aliases or switching to output references directly for one or more properties without the need to change the entire protocol at once.

::: details Objects as functions
As you might have already noticed, objects work quite similar to function calls, separated by the pipe operator `|`. In fact, this is what [Operate](https://www.operatebsv.org/) is already doing. In Operate, every function is implemented with on-chain Lua code and the result of any function is piped as input into the next function. We can argue about objects as functions in the same way, which makes them compatible with Operates OPs.

```json
{
  <some object>: "some value",
  <function 1>: [
    <arg 1.1>,
    <arg 1.2>
  ],
  <function 2>: [
    <arg 2.1>,
    <arg 2.2>
  ]
}
```

Generalizing functions into our data structure allows them to be put into context and referenced to be included into larger structures. This enables the assembly of larger programs out of individually addressable parts that can compete with alternative implementations.
:::

## Planaria compatibility

Here is a [JQ](https://stedolan.github.io/jq/) filter that convertes an array of BOB transactions into an object:

```jq
[ .[] | . as $tx | .out[] | {
  ( "o:/" + $tx.tx.h + "/" + ( .i | tostring ) ): [
    .tape | select(length > 1 and .[0].object[-1].ops == "OP_RETURN") | .[1:] | .[] | {
      (.object[0].s): (
        .object[1:] | [ .[] | .ls // .s // .ops ]
        | if length > 1 then . else .[] end | .
      )
    } | select(.[] | length > 0) | to_entries | .[]
  ] | from_entries
} ] | map(select(.[] | length > 0))
```

Planarium fails to display all objects but [queries are working](https://bob.planaria.network/query/1GgmC7Cg782YtQ6R9QkM58voyWeQJmJJzG/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAib3V0LjIiOiB7ICIkZXhpc3RzIjogdHJ1ZSB9LAogICAgICAib3V0LnRhcGUuY2VsbC5vcHMiOiAiT1BfUkVUVVJOIgogICAgfSwKICAgICJwcm9qZWN0IjogewogICAgICAib3V0LnRhcGUuY2VsbC5zIjogMSwgIm91dC50YXBlLmNlbGwub3BzIjogMSwgInR4LmgiOiAxLCAib3V0LmkiOiAxCiAgICB9LAogICAgImxpbWl0IjogMzAKICB9LAogICJyIjp7CiAgICAiZiI6ICJbIC5bXSB8IC4gYXMgJHR4IHwgLm91dFtdIHwgeyAoIFwibzovXCIgKyAkdHgudHguaCArIFwiL1wiICsgKCAuaSB8IHRvc3RyaW5nICkgKTogWyAudGFwZSB8ICBzZWxlY3QobGVuZ3RoID4gMSBhbmQgLlswXS5jZWxsWy0xXS5vcHMgPT0gXCJPUF9SRVRVUk5cIikgfCAuWzE6XSB8IC5bXSB8IHsgKC5jZWxsWzBdLnMpOiAoLmNlbGxbMTpdIHwgWyAuW10gfCAubHMgLy8gLnMgLy8gLm9wcyBdIHwgaWYgbGVuZ3RoID4gMSB0aGVuIC4gZWxzZSAuW10gZW5kIHwgLiApIH0gfCBzZWxlY3QoLltdIHwgbGVuZ3RoID4gMCkgfCB0b19lbnRyaWVzIHwgLltdIF0gfCBmcm9tX2VudHJpZXMgfSBdIHwgbWFwKHNlbGVjdCguW10gfCBsZW5ndGggPiAwKSkiCiAgfQp9).
