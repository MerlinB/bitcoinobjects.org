# Introduction

Bitcoin Objects is a framework for building declarative, self-describing and interoperable JSON-like objects on-chain.

Objects can reference each other to create a data-structure that is designed to be as unrestrictive as possible and that can be shared among protocols to lower the barriers of interoperability.

The structure is similar to a spreadsheet in which the intersection of dimensions is used as a point of data. Contrary to a spreadsheet, there are no limitations on the number of dimensions and no strict differentiation between cells and dimensions. I do not intent to make any statement about how data inside of the structure should be organized and linked together. I expect there to be a market-driven process in which useful patterns start emerging.

The benefits of using the same, generalized data-structure could be compared to speaking the same language whereas it does not include knowledge of the same concepts. However, the common language can be used explain and create common concepts by putting them in context.

# Rules

- All on-chain information is divided in cells, where every cell is addressable by a unique identifier.
- All content of a cell must consist type-value pairs where types are references to cells.
- Only one value of each type can exist per cell (Also enforced by JSON)

# Getting started

Every cell is defined in relation to other cells. Cells are created by providing at least one type-value pair where a type is a reference to a cell as well.

`OP_RETURN <type> <value>`

This is analogous and compatible to the already common Bitcom convention of `OP_RETURN <protocol> <variable>`.

Another valid analogy for cells are functions: `OP_RETURN <function> <argument 1> ...`, but we will get into that later.

The resulting object can be expressed in JSON:

```json
{
  "<cell>": {
    "<type>": "<value>"
  }
}
```

Our newly created cell (`<cell>`) is uniquely addressable by its transaction id and output number, expressed as `<txid>.<output>`. The same goes for `<type>`, which is a reference to a cell as well.

The resulting object describes the value at the intersection of 2 dimensions and can thus be represented in another perspective.

```json
{
  "<type>": {
    "<cell>": "<value>"
  }
}
```

Let's build a meaningful structure and create a cell representing a description that we can then later use in other cells as property.

`OP_RETURN this "A short object description."`

```json
{
  "<description cell>": {
    "<description cell>": "A short object description."
  }
}
```

Because all cells are defined as combinations of cells we need to start with a recursive cell definition.

We could also use a cell to define a datatype. To reference multiple cells we separate them using the pipe operator which is already a convention for protocols:

`OP_RETURN this <description cell> "The expected datatype." | this "String"`

```json
{
  "<datatype cell>": {
    "<description cell>": "The expected datatype.",
    "<datatype cell>": "String"
  }
}
```

Let's use our new description cell to create some other cells to use as properties:

`OP_RETURN <description cell> "The age of a person." | <datatype cell> "Integer"`

`OP_RETURN <description cell> "The name of a person." | <datatype cell> "String"`

`OP_RETURN <description cell> "The date of birth of a person." | <datatype cell> "String"`

Now we can create a meaning object representing a person.

`OP_RETURN <name cell> "Merlin Buczek" | <age cell> 23 | <born cell> "12.04.1995"`

```json
{
  "<merlin cell>": {
    "<name cell>": "Merlin Buczek",
    "<age cell>": 23,
    "<born cell>": "12.04.1995",
  }
}
```

You may notice that we do not differentiate between describing specific objects and "type" objects. The reason for this is the separation of syntax and semantics. Our goal is to provide a generalized protocol for describing data structures without limiting any user in what structures can be created. The meaning of structures is not purely objective and can't be explicitly described without limiting its use. It can only be inferred by the person using the structure.

## Modifying existing objects

There is no "right" way to represent any information in this data-structure. However, there is an incentive to share certain structures so I expect a consensus of useful structure to emerge. Here is one way how a change to an object could be represented:

To modify our existing person object we first need a cell to represent an editing action and a cell to reference another cell:

`OP_RETURN <description cell> "An edit to a cell." | <datatype cell> "Cell"`

`OP_RETURN <description cell> "A target cell." | <datatype cell> "Cell"`

Both the edit cell as well as the target cell in our case should expect the reference to another cell.

Let's also create an object representing a signature so we can sign our change:

`OP_RETURN <description cell> "A signature of the object creator."`

Now we can edit our person object:

`OP_RETURN <edit cell> $ <age cell> 25 | <target cell> <merlin cell> | <description cell> "I had my birthday." | <signature cell> <signature>`

```json
{
  "<edit merlin cell>": {
    "<edit cell>": {
      "<age cell>": 25
    },
    "<target cell>": "<merlin cell>",
    "<description cell>": "I had my birthday.",
    "<signature cell>": <signature>
  }
}
```

Notice that instead of including a reference of a cell we included the cell representing the changes directly as value of the edit cell. This cell still has a unique address if we reference it through our `<edit merlin cell>`: `<edit merlin cell txid>.<output>.<edit cell>`, though we probably wont need to reference it anywhere else.

Also we used a new Symbol to avoid passing `<age cell>` and `25` as separate values to `<edit cell>`: `$`. This is a symbol borrowed from functional programming, representing right-association. An analogous notation using parenthesis would be `<edit cell> ( <age cell> 25 )`.

## Duplicate data

Of course there is a need of developers to not include all the type cell references in every new transaction they make. We can solve this the same way as everything else: We create a new data-structure. In our case we will need a cell representing a certain object template. Another way to look at it is that we are doing something very similar to creating a new Bitcom protocol.

`OP_RETURN <description cell> "Holds an array of arguments"`

And here is our edit mapping schema:

`OP_RETURN <arguments cell> <edit cell> <target cell> <description cell> <signature cell> | <description cell> "Describes the schema for a cell that represents a new edit to a cell."`

```json
{
  "<edit schema cell>": {
    "<arguments cell>": [
      "<edit cell>",
      "<target cell>",
      "<description cell>",
      "<signature cell>",
    ],
    "<description cell>": "Describes the schema for a cell that represents a new edit to a cell."
  }
}
```

Now we can create a new change much shorter:

`OP_RETURN <age cell> 26 | <another cell> "new value"`

`OP_RETURN <edit schema cell> <changes cell> <merlin cell> "I had my birthday AGAIN." <signature>`

```json
{
  "<edit merlin cell 2>": {
    "<edit schema cell>": [
      { "<age cell>": 26 },
      "<merlin cell>"
      "I had my birthday AGAIN.",
      <signature>
    ]
  }
}
```

## Bitcom compatibility

Every Bitcom protocol is already valid in our generalized protocol. Only that the Bitcom protocol identifier does not point to a valid cell yet. We can define structures for existing protocols by defining a mapping schema like we did before.

We could also define aliases between protocol identifiers and cell references so the Bitcom address wouldn't even need to be changed (assuming the aliases are respected by others).

`OP_RETURN <description cell> "An alias between a bitcom protocol and a cell."`

`OP_RETURN <alias cell> <bitcom address>`

Existing protocols can be incrementally made compatible to this data scheme by adding descriptions only for certain properties.

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

What it does is upload an image via the [B:// protocol](https://b.bitdb.network/) in its first part and connects it to a Paymail in its second part. We can easily represent this as a cell:

```json
{
  "<BitPic upload cell>": {
    "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut": [
      <FILE Binary>,
      "image/jpeg",
      "binary"
    ],
    "18pAqbYqhzErT6Zk3a5dwxHtB9icv8jH2p": [
      <Paymail>,
      <Pubkey>,
      <Sig>
    ]
  }
}
```

All we'll have to do now is create a cell definition for the two protocols. Again, we don't have to change change the actual protocol and can instead create an alias cell connecting the Bitcom identifier with the cell.

Because both protocols accept multiple values, it would be very helpful go one step further and create their schema cells (like we did before).

```json
{
  "<BitPic upload cell>": {
    "<B:// cell>": {
      "data": <FILE Binary>,
      "media type": "image/jpeg",
      "encoding": "binary"
    },
    "BitPic cell": {
      "paymail": <Paymail>,
      "pubkey": <Pubkey>,
      "signature": <Sig>
    }
  }
}
```

Ideally, we would also define the properties as cells.

```json
{
  "<BitPic upload cell>": {
    "<B:// cell>": {
      "<Data cell>": <FILE Binary>,
      "<Media Type cell>": "image/jpeg",
      "<Encoding cell>": "binary"
    },
    "<BitPic cell>": {
      "<Paymail cell>": <Paymail>,
      "<Pubkey cell>": <Pubkey>,
      "<Signature Protocol>": <Sig>
    }
  }
}
```

We have now fully integrated BitPic into our data structure.

## Cells as functions

As you might have already noticed, cells work quite similar to function calls, separated by the pipe operator `|`: They receive one or more arguments and output an object. In fact, we could even add  code to our cells to describe operations.

We don't offer a Syntax for operations, but that doesn't mean that there couldn't exist one! There could theoretically even exist more than one implementation for every function, for example in 2 different programming languages.

For example, we could use [Operate](https://www.operatebsv.org/) to define a script with on-chain Lua code for our edit schema cell to output the resulting (edited) object.

```json
{
  "<edit schema cell>": {
    "<arguments cell>": [[
      "<edit cell>",
      "<target cell>",
      "<description cell>",
      "<signature cell>",
    ]],
    "<operate getObject cell>": "<operate script hash>",
    "<description cell>": "Describes the schema for a cell that represents a new edit to a cell."
  }
}
```

## Planaria

Here is a [JQ](https://stedolan.github.io/jq/) filter that convertes an array of BOB transactions into our objects: `[ .[] | . as $tx | .out[] | { ( "uop://" + $tx.tx.h + "." + ( .i | tostring ) ): [ .tape | select(length > 1 and .[0].cell[-1].ops == "OP_RETURN") | .[1:] | .[] | { (.cell[0].s): ( .cell[1:] | [ .[] | .ls // .s // .ops ] | if length > 1 then . else .[] end | . ) } | select(.[] | length > 0) | to_entries | .[] ] | from_entries } ] | map(select(.[] | length > 0))`.

Planarium fails to display all objects but queries are working:

[](https://bob.planaria.network/query/1GgmC7Cg782YtQ6R9QkM58voyWeQJmJJzG/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAib3V0LjIiOiB7ICIkZXhpc3RzIjogdHJ1ZSB9LAogICAgICAib3V0LnRhcGUuY2VsbC5vcHMiOiAiT1BfUkVUVVJOIgogICAgfSwKICAgICJwcm9qZWN0IjogewogICAgICAib3V0LnRhcGUuY2VsbC5zIjogMSwgIm91dC50YXBlLmNlbGwub3BzIjogMSwgInR4LmgiOiAxLCAib3V0LmkiOiAxCiAgICB9LAogICAgImxpbWl0IjogMzAKICB9LAogICJyIjp7CiAgICAiZiI6ICJbIC5bXSB8IC4gYXMgJHR4IHwgLm91dFtdIHwgeyAoIFwidW9wOi8vXCIgKyAkdHgudHguaCArIFwiLlwiICsgKCAuaSB8IHRvc3RyaW5nICkgKTogWyAudGFwZSB8ICBzZWxlY3QobGVuZ3RoID4gMSBhbmQgLlswXS5jZWxsWy0xXS5vcHMgPT0gXCJPUF9SRVRVUk5cIikgfCAuWzE6XSB8IC5bXSB8IHsgKC5jZWxsWzBdLnMpOiAoLmNlbGxbMTpdIHwgWyAuW10gfCAubHMgLy8gLnMgLy8gLm9wcyBdIHwgaWYgbGVuZ3RoID4gMSB0aGVuIC4gZWxzZSAuW10gZW5kIHwgLiApIH0gfCBzZWxlY3QoLltdIHwgbGVuZ3RoID4gMCkgfCB0b19lbnRyaWVzIHwgLltdIF0gfCBmcm9tX2VudHJpZXMgfSBdIHwgbWFwKHNlbGVjdCguW10gfCBsZW5ndGggPiAwKSkiCiAgfQp9)

## `ToDo` Interoperability

As different services have different needs about which data they require and in which form the data is stored we should not expect developers to be willing to make compromises to their application for the sake of interoperability.

Luckily, different protocols do not have to share their entire structure to have a degree of interoperability.

Let's take the example of two competing user protocols. Both protocol have already defined a cell to map their OP_RETURN data onto an object (like we did before).

```json
{
  "<protocol 1>": {
    "name": "MerlinB",
    "id": 12345,
    "pubKey": "02e1237ebe8ed414556e6764de9ea62dc64fb6d1bf88ca28866323cae3b8207120"
  }
}

{
  "<protocol 2>": {
    "firstName": "Merlin",
    "lastName": "Buczek",
    "profilePicture": ""
  }
}
```

Both parties have an interest in sharing a data structure. A good thing about this is that they don't have to make compromises to their protocol for that. Instead they can tinker with their cell definitions in the background.

Cells can be shared between protocols.

Even if another protocol ist constructed from entirely different cells, as long as these cells share properties, there is already a relation between the protocols created.

## Transformations

One could easily define a "translation function" between cells that describe similar data.