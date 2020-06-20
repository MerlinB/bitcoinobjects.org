(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protocol"}},[t._v("#")]),t._v(" Protocol")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Disclaimer")]),t._v(" "),a("p",[t._v("This protocol is under development, expect changes.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Coming soon")]),t._v(" "),a("ul",[a("li",[t._v("Object explorer")]),t._v(" "),a("li",[t._v("Javascript library for loading and creating objects")])])]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Bitcoin Objects is a framework for building self-descriptive and interoperable data-structures that consist of individually addressable JSON-like objects stored on-chain.")]),t._v(" "),a("p",[t._v("It can be incrementally adopted to benefit from a higher degree of interoperability and does not require a change to existing infrastructure, including currently used protocols.")]),t._v(" "),a("p",[t._v("The benefits of using the same, generalized data-structure could be compared to speaking the same language. While knowledge of the same concepts does not necessarily follow from it, a shared language can be used to explain and create common concepts by putting them in context. Context makes information more useful and thus more valuable.")]),t._v(" "),a("p",[t._v("The framework is designed to be a non-restrictive generalization of existing conventions and protocols and is thus completely compatible to many existing solutions, including Bitcom and Operate.")]),t._v(" "),a("h3",{attrs:{id:"visualizing-the-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visualizing-the-structure"}},[t._v("#")]),t._v(" Visualizing the structure")]),t._v(" "),a("p",[t._v("The resulting structure can be understood as similar to a spreadsheet: the intersection of dimensions is used as points of data. Contrary to a spreadsheet, there are no limitations on the number of dimensions and no strict differentiation between objects and dimensions. A single object could be interpreted as a rank (or row of objects) in one dimension.")]),t._v(" "),a("h2",{attrs:{id:"rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[t._v("#")]),t._v(" Rules")]),t._v(" "),a("ol",[a("li",[t._v("All on-chain information is divided into objects, where every object is addressable by a unique identifier.")]),t._v(" "),a("li",[t._v("All content of an object must consist of key-value pairs where a key is a "),a("a",{attrs:{href:"bsvuri"}},[t._v("BSVURI")]),t._v(" reference to an object and a value is one or more object references or utf-8-readable Strings.")]),t._v(" "),a("li",[t._v("Keys of an object must be unique for this object.")])]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("Every object is defined in relation to other objects. Objects are created by providing at least one key-value pair where a key is a reference to an object as well.")]),t._v(" "),a("p",[a("code",[t._v("OP_RETURN <key> <value>")])]),t._v(" "),a("p",[t._v("This is analogous and compatible to the already common Bitcom convention:")]),t._v(" "),a("p",[a("code",[t._v("OP_RETURN <protocol> <variable>")])]),t._v(" "),a("p",[t._v("Another valid analogy for objects are functions: "),a("code",[t._v("OP_RETURN <function> <argument 1> ...")]),t._v(", but we will get into that later.")]),t._v(" "),a("p",[t._v("The resulting object can be expressed in JSON:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  <key>"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" <value>\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Our newly created object, as well as all other objects, is uniquely addressable by an "),a("a",{attrs:{href:"bsvuri"}},[t._v("BSVURI")]),t._v(" consisting of its transaction id and output number.")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("A note on interpretation")]),t._v(" "),a("p",[t._v("The resulting object describes a value ("),a("code",[t._v("<value>")]),t._v(") at the intersection of 2 dimensions that can both referenced by a BSVURI.\nThese dimensions are the key ("),a("code",[t._v("<key>")]),t._v(") and the created output itself.")])]),t._v(" "),a("p",[t._v("Creating a object property with multiple values puts them into an array:")]),t._v(" "),a("p",[a("code",[t._v("OP_RETURN <key> <value 1> <value 2>")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  <key>"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("<value "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" <value "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("To reference multiple objects we separate them using the pipe operator which is already a convention for protocols (see "),a("a",{attrs:{href:"https://bitcom.planaria.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcom"),a("OutboundLink")],1),t._v("):")]),t._v(" "),a("p",[a("code",[t._v("OP_RETURN <key 1> <value 1> | <key 2> <value 2>")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  <key "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" <value "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  <key "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" <value "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(">\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),a("p",[t._v("Let's build a meaningful structure and start by creating an object representing a description type so that we can use it later as a key in other objects. Because all objects are build up from combinations of objects we need to start with an recursive object definition in this case.")]),t._v(" "),a("p",[a("code",[t._v('OP_RETURN o: "A short object description."')])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  <description object (self)>"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A short object description."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("BSVURI self-reference")]),t._v(" "),a("p",[t._v("Because we are referencing the same transaction and output we can omit the URI path.\nTheoretically we could also omit the prefix "),a("code",[t._v("o:")]),t._v(" as we can for all key references, but we can not have an empty key.")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"bsvuri"}},[t._v("BSVURI")]),t._v(" for details.")])]),t._v(" "),a("p",[t._v("We could also use an object to represent a datatype.")]),t._v(" "),a("p",[a("code",[t._v('OP_RETURN <description object> "The expected datatype." | o: "String"')])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  <description object>"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The expected datatype."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  <datatype object (self)>"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"String"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Let's use our new description and datatype objects to create some more objects to use as property keys:")]),t._v(" "),a("p",[a("code",[t._v('OP_RETURN o: "Title" | <description object> "A String representation of the object." | <datatype object> "String"')])]),t._v(" "),a("p",[a("code",[t._v('OP_RETURN <title object> "Text" | <description object> "A utf-8 encoded text." | <datatype object> "String"')])]),t._v(" "),a("p",[a("code",[t._v('OP_RETURN <title object> "Recipient" | <description object> "The address of a message recipient." | <datatype object> "String"')])]),t._v(" "),a("p",[a("code",[t._v('OP_RETURN <title object> "Author" | <description object> "The address of a message author." | <datatype object> "String"')])]),t._v(" "),a("p",[t._v("Now we can create a meaningful object representing a person.")]),t._v(" "),a("p",[a("code",[t._v('OP_RETURN <text object> "Hello there!" | <author object> "acc267bc3fb5b9ab3c6d1aa1c500f40ead2155e3" | <recipient object> "de7ac06e79036f8c85710dcdc98da3a908f1c3af"')])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  <text object>"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello there!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  <author object>"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"acc267bc3fb5b9ab3c6d1aa1c500f40ead2155e3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  <recipient object>"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"de7ac06e79036f8c85710dcdc98da3a908f1c3af"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Tip: Instances")]),t._v(" "),a("p",[t._v('You may notice that we do not differentiate between describing specific object instances and "key" objects. The reason for this is the separation of syntax and semantics. Our goal is to provide a generalized protocol for describing data structures without limiting users in what structures can be created.')])]),t._v(" "),a("h2",{attrs:{id:"a-convention-for-object-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-convention-for-object-updates"}},[t._v("#")]),t._v(" A convention for object updates")]),t._v(" "),a("p",[t._v('The created graph-like structure is static and there is no "built-in" way of updating objects.\nHowever, we would to suggest a convention that utilizes Bitcoin\'s transaction and permissioning system.\nIt is important to note that updates to data points are a purely subjective abstraction and users are free to follow or ignore this convention. The responsibility of ensuring data integrity always lies with the application itself.')]),t._v(" "),a("p",[t._v("To enable an object to be updated it should be included in a spendable output using "),a("code",[t._v("OP_PUSHDATA")]),t._v(". To update the object, the output must be spent and an output with the new object must be included at the same position in the transaction. In other words, if the previous object output gets included as the third input, then the third output must be the updated object.")]),t._v(" "),a("p",[t._v("This ensures that the object creator can determine permissions, that object changes are universally verifiable and that only one update to a state can exist. It also enables complex script to determine object permissions.")]),t._v(" "),a("h2",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases"}},[t._v("#")]),t._v(" Aliases")]),t._v(" "),a("p",[t._v("There is a need of developers to not waste space and include all the key object references in every new output they create. To solve this they can assign aliases to use as property keys instead of BSVURI references.")]),t._v(" "),a("p",[t._v("To assign aliases to an object you can include the "),a("code",[t._v("alias")]),t._v(" key to reference an output where aliases are looked for.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alias"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"o:/[txid]/[output_number]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Inside of this output you can define aliases to use. To be valid an alias must hava a valid BSVURI as value.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"o:..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recipient"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"o:..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"o:..."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Now we can create another message without all the output references:")]),t._v(" "),a("p",[a("code",[t._v('OP_RETURN alias "o:..." | author acc267bc3fb5b9ab3c6d1aa1c500f40ead2155e3 | recipient de7ac06e79036f8c85710dcdc98da3a908f1c3af | text "Here\'s another message!"')])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Tip: Default aliases")]),t._v(" "),a("p",[t._v("There is an alias reference that is used by default (that is why the alias keyword is allowed). These aliases can be overridden. They include common Bitcom addresses and can be found "),a("a",{attrs:{href:""}},[t._v("here")]),t._v(" "),a("code",[t._v("TODO")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"bitcom-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcom-compatibility"}},[t._v("#")]),t._v(" Bitcom compatibility")]),t._v(" "),a("p",[t._v("All outputs using Bitcom protocols are already valid objects but because a Bitcom address is not a valid BSVURI they are missing any context to their keys. To fix this we can use aliases. In fact, most Bitcom protocols are already aliased to valid outputs references by default.")]),t._v(" "),a("p",[t._v("Existing protocols can incrementally adopt Bitcoin Objects by adding aliases or switching to output references directly for one or more properties without the need to change the entire protocol at once.")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Objects as functions")]),t._v(" "),a("p",[t._v("As you might have already noticed, objects work quite similar to function calls, separated by the pipe operator "),a("code",[t._v("|")]),t._v(". In fact, this is what "),a("a",{attrs:{href:"https://www.operatebsv.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Operate"),a("OutboundLink")],1),t._v(" is already doing. In Operate, every function is implemented with on-chain Lua code and the result of any function is piped as input into the next function. We can argue about objects as functions in the same way, which makes them compatible with Operates OPs.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  <some object>"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  <function "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    <arg "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    <arg "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(">\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  <function "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    <arg "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.1")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    <arg "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),t._v(">\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Generalizing functions into our data structure allows them to be put into context and referenced to be included into larger structures. This enables the assembly of larger programs out of individually addressable parts that can compete with alternative implementations.")])]),t._v(" "),a("h2",{attrs:{id:"planaria-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#planaria-compatibility"}},[t._v("#")]),t._v(" Planaria compatibility")]),t._v(" "),a("p",[t._v("Here is a "),a("a",{attrs:{href:"https://stedolan.github.io/jq/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JQ"),a("OutboundLink")],1),t._v(" filter that convertes an array of BOB transactions into an object:")]),t._v(" "),a("div",{staticClass:"language-jq extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jq"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token dot important"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tx")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"o:/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" tostring "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tape "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token c-style-function function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ops "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OP_RETURN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ops "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token dot important"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token dot important"}},[t._v(".")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token c-style-function function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" to_entries "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" from_entries\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token c-style-function function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token c-style-function function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator pipe"}},[t._v("|")]),t._v(" length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Planarium fails to display all objects but "),a("a",{attrs:{href:"https://bob.planaria.network/query/1GgmC7Cg782YtQ6R9QkM58voyWeQJmJJzG/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAib3V0LjIiOiB7ICIkZXhpc3RzIjogdHJ1ZSB9LAogICAgICAib3V0LnRhcGUuY2VsbC5vcHMiOiAiT1BfUkVUVVJOIgogICAgfSwKICAgICJwcm9qZWN0IjogewogICAgICAib3V0LnRhcGUuY2VsbC5zIjogMSwgIm91dC50YXBlLmNlbGwub3BzIjogMSwgInR4LmgiOiAxLCAib3V0LmkiOiAxCiAgICB9LAogICAgImxpbWl0IjogMzAKICB9LAogICJyIjp7CiAgICAiZiI6ICJbIC5bXSB8IC4gYXMgJHR4IHwgLm91dFtdIHwgeyAoIFwibzovXCIgKyAkdHgudHguaCArIFwiL1wiICsgKCAuaSB8IHRvc3RyaW5nICkgKTogWyAudGFwZSB8ICBzZWxlY3QobGVuZ3RoID4gMSBhbmQgLlswXS5jZWxsWy0xXS5vcHMgPT0gXCJPUF9SRVRVUk5cIikgfCAuWzE6XSB8IC5bXSB8IHsgKC5jZWxsWzBdLnMpOiAoLmNlbGxbMTpdIHwgWyAuW10gfCAubHMgLy8gLnMgLy8gLm9wcyBdIHwgaWYgbGVuZ3RoID4gMSB0aGVuIC4gZWxzZSAuW10gZW5kIHwgLiApIH0gfCBzZWxlY3QoLltdIHwgbGVuZ3RoID4gMCkgfCB0b19lbnRyaWVzIHwgLltdIF0gfCBmcm9tX2VudHJpZXMgfSBdIHwgbWFwKHNlbGVjdCguW10gfCBsZW5ndGggPiAwKSkiCiAgfQp9",target:"_blank",rel:"noopener noreferrer"}},[t._v("queries are working"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);