fun Moshi.toJson(list: List<Any>): String {

    val myData: ParameterizedType =
        Types.newParameterizedType(List::class.java, Any::class.java)
    val adapter = this.adapter<kotlin.collections.List<Any>>(myData)
    return adapter?.toJson(list) ?: ""
}

fun Moshi.toJson(any: Any): String {
    val jsonAdapter = this.adapter(Any::class.java)
    return jsonAdapter?.toJson(any) ?: ""
}
