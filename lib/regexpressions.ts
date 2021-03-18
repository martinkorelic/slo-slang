export let config = [
    /* Template
    {
        rgx: "",
        flg: "gi",
        d_sub: "",
        s_sub: [""]
    },*/
    // ** Non declining words ** //
    // tut | tud -> tudi
    {
        rgx: "tu(t|d)",
        flg: "gi",
        d_sub: "tudi",
        s_sub: ["tut", "tud"]
    },
    // šit | sit -> drek
    {
        rgx: "(š|s)it",
        flg: "gi",
        d_sub: "drek",
        s_sub: ["šit", "sit"]
    },
    // zakj | zakva -> zakaj
    {
        rgx: "zak(va|j)",
        flg: "gi",
        d_sub: "zakaj",
        s_sub: ["zakj", "zakva"]
    },
    // valda | itak -> seveda
    {
        rgx: "(valda|itak)",
        flg: "gi",
        d_sub: "seveda",
        s_sub: ["valda", "itak"]
    },
    // okej | okj | ok -> dobro
    {
        rgx: "ok(j|ej)",
        flg: "gi",
        d_sub: "dobro",
        s_sub: ["okj", "okej", "ok"]
    },
    // un -> tisti
    {
        rgx: "un",
        flg: "gi",
        d_sub: "tisti",
        s_sub: ["un"]
    },
    // js | jst -> jaz
    {
        rgx: "js(t|)",
        flg: "gi",
        d_sub: "jaz",
        s_sub: ["js", "jst"]
    },
    // tumač -> preveč
    {
        rgx: "tumač",
        flg: "gi",
        d_sub: "preveč",
        s_sub: ["tumač"]
    },
    // (sor | sorč)i* -> oprosti
    {
        rgx: "sorč?i*",
        flg: "gi",
        d_sub: "oprosti",
        s_sub: ["sori", "sorči"]
    },
    // skos | skoz -> vedno
    {
        rgx: "sko(s|z)",
        flg: "gi",
        d_sub: "vedno",
        s_sub: ["skoz", "skos"]
    },
    // baje -> menda
    {
        rgx: "baje",
        flg: "gi",
        d_sub: "menda",
        s_sub: ["baje"]
    },
    // pls | plis | prosm -> prosim
    {
        rgx: "(pli?s|prosm)",
        flg: "gi",
        d_sub: "prosim",
        s_sub: ["pls", "plis", "prosm"]
    },
    // simpl | izi -> preprosto
    {
        rgx: "(simpl|izi)",
        flg: "gi",
        d_sub: "preprosto",
        s_sub: ["izi", "simpl"]
    },
    // mejbi -> mogoče
    {
        rgx: "mejbi",
        flg: "gi",
        d_sub: "mogoče",
        s_sub: ["mejbi"]
    },
    // tenks -> hvala
    {
        rgx: "tenks",
        flg: "gi",
        d_sub: "hvala",
        s_sub: ["tenks"]
    },
    // dons | dans -> danes
    {
        rgx: "d(a|o)ns",
        flg: "gi",
        d_sub: "danes",
        s_sub: ["dans", "dons"]
    },
    // kul(či) -> jaz
    {
        rgx: "kul(či|)",
        flg: "gi",
        d_sub: "super",
        s_sub: ["kul", "kulči"]
    },
    // sm -> sem
    {
        rgx: "sm",
        flg: "gi",
        d_sub: "sem",
        s_sub: ["sm"]
    },
    // brt | buraz | brate -> brat
    {
        rgx: "b(ra?te?|uraz)",
        flg: "gi",
        d_sub: "brat",
        s_sub: ["brt", "buraz", "brate"]
    },
    // kok -> kako
    {
        rgx: "kok",
        flg: "gi",
        d_sub: "kako",
        s_sub: ["kok"]
    }
]