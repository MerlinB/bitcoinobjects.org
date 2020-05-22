# BSVURI

BSVURI is a standard for minimal output references following the [URI scheme](https://de.wikipedia.org/wiki/Uniform_Resource_Identifier).

`o://[host]/[txid]/[output_number]`

Inside of a transaction, a relative path can be used:

`o:/[txid]/[output_number]`

Omitting an output number will automatically refer to the first output.

`o:/[txid]`

Referencing an output in the same transaction:

`o:[output_number]`

Referencing the current output:

`o:`

When using a BSVURI as a Bitcoin Object type reference, the prefix can be omitted.

`/[txid]/[output_number]`
